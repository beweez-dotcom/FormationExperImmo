#!/usr/bin/env python3
"""Analyse du tableau commun des comparables (skill donnees-marche).

L'agent Collecte ramène toutes les sources (DVF, PERVAL, annonces, tableaux
d'origine inconnue…) au format commun `comparables-unifies.csv`, puis lance ce
programme. Le programme ne décide rien : il calcule, compare et signale.
Les choix (comparables retenus, doublons, usage des annonces) restent à l'expert.

Usage :
  python3 analyse_comparables.py sorties/comparables-unifies.csv \
      --date-valeur 2024-10-14 --type appartement [--fenetre-mois 12] \
      [--retenus C-01,C-02,...]   # phase 2 : recalcul sur la sélection de l'expert

Colonnes du tableau commun (séparateur « ; », UTF-8, une ligne par référence) :
  id ; source ; date_releve ; nature_prix ; date_ref ; localisation ; type_bien ;
  pieces ; surface_m2 ; prix_total_eur ; prix_m2_fourni ; etage ; ascenseur ;
  etat ; source_etat ; dpe ; fiabilite ; origine ; remarques
nature_prix : vente (prix de vente réel : DVF, PERVAL, acte)
              annonce (prix demandé, avant négociation)
              inconnue (source non identifiée : à préciser par l'expert)
Une cellule inconnue reste vide. Le programme ne complète jamais une cellule.
"""
import argparse, csv, re, statistics, sys, unicodedata
from datetime import date

COLS = ['id', 'source', 'date_releve', 'nature_prix', 'date_ref', 'localisation', 'type_bien', 'pieces',
        'surface_m2', 'prix_total_eur', 'prix_m2_fourni', 'etage', 'ascenseur', 'etat', 'source_etat',
        'dpe', 'fiabilite', 'origine', 'remarques']


def num(v):
    v = (v or '').strip().replace(' ', '').replace('\xa0', '').replace(' ', '').replace('€', '').replace(',', '.')
    try:
        return float(v)
    except ValueError:
        return None


def mois(v):
    """'2024-02' ou '2024-02-15' -> (2024, 2) ; sinon None."""
    v = (v or '').strip()
    try:
        p = v.split('-')
        return int(p[0]), int(p[1])
    except (ValueError, IndexError):
        return None


def voie(v):
    """Forme normalisée d'une localisation, pour comparer deux sources."""
    v = unicodedata.normalize('NFKD', (v or '').split(',')[0]).encode('ascii', 'ignore').decode().lower()
    v = re.sub(r'[-’\']', ' ', v)
    for a, b in ((r'\bbd\b', 'boulevard'), (r'\bav\b', 'avenue'), (r'\bst\b', 'saint'), (r'\bpl\b', 'place')):
        v = re.sub(a, b, v)
    return ' '.join(v.split())


def ecart_mois(a, b):
    return (a[0] - b[0]) * 12 + (a[1] - b[1])


def f0(x):
    return f"{x:,.0f}".replace(',', ' ')


def f2(x):
    return f"{x:,.2f}".replace(',', ' ').replace('.', ',')


def stats(lignes):
    pm = sorted(l['pm2'] for l in lignes)
    n = len(pm)
    if n == 0:
        return None
    s_prix = sum(l['prix'] for l in lignes)
    s_surf = sum(l['surf'] for l in lignes)
    med = statistics.median(pm)
    if n % 2 == 0:
        detail_med = f"n = {n} (pair) : moyenne des valeurs de rang {n//2} et {n//2+1}, ({f2(pm[n//2-1])} + {f2(pm[n//2])}) ÷ 2"
    else:
        detail_med = f"n = {n} (impair) : valeur de rang {n//2+1}"
    return {
        'n': n, 'min': pm[0], 'max': pm[-1], 'ecart_pct': (pm[-1] / pm[0] - 1) * 100,
        'moyenne': sum(pm) / n, 'ponderee': s_prix / s_surf, 'mediane': med, 'detail_med': detail_med,
        's_prix': s_prix, 's_surf': s_surf,
    }


def table_stats(titre, st, out):
    if not st:
        out.append(f"**{titre}** : aucune référence.\n")
        return
    out.append(f"**{titre}** ({st['n']} références)\n")
    out.append("| Indicateur | Valeur | Calcul |\n|---|---|---|")
    out.append(f"| Fourchette | {f0(st['min'])} – {f0(st['max'])} €/m² | écart {f2(st['ecart_pct'])} % |")
    out.append(f"| Moyenne arithmétique | {f0(st['moyenne'])} €/m² | somme des prix/m² ÷ {st['n']} |")
    out.append(f"| Moyenne pondérée par la surface | {f0(st['ponderee'])} €/m² | {f0(st['s_prix'])} € ÷ {f2(st['s_surf'])} m² |")
    out.append(f"| Médiane | {f0(st['mediane'])} €/m² | {st['detail_med']} |\n")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('csv')
    ap.add_argument('--date-valeur', required=True)
    ap.add_argument('--type', default='')
    ap.add_argument('--fenetre-mois', type=int, default=12)
    ap.add_argument('--retenus', default='')
    a = ap.parse_args()
    dv = mois(a.date_valeur)
    out = []

    with open(a.csv, encoding='utf-8-sig', newline='') as fh:
        r = csv.DictReader(fh, delimiter=';')
        manquantes = [c for c in COLS if c not in (r.fieldnames or [])]
        if manquantes:
            sys.exit('Colonnes manquantes dans le tableau commun : ' + ', '.join(manquantes))
        lignes = [dict(l) for l in r]

    ids = [l['id'] for l in lignes]
    doublons_id = sorted({i for i in ids if ids.count(i) > 1})
    if doublons_id:
        sys.exit('Identifiants en double : ' + ', '.join(doublons_id))

    # 1. Contrôle de chaque ligne
    signal = {l['id']: [] for l in lignes}
    for l in lignes:
        l['surf'], l['prix'], l['pm_f'] = num(l['surface_m2']), num(l['prix_total_eur']), num(l['prix_m2_fourni'])
        l['m'] = mois(l['date_ref'])
        l['nature'] = (l['nature_prix'] or '').strip().lower() or 'inconnue'
        if not l['m'] and mois(l['date_releve']):
            l['m'] = mois(l['date_releve'])
            signal[l['id']].append(f"date de référence inconnue : date de relevé utilisée ({l['date_releve']})")
        if l['surf'] and l['prix']:
            l['pm2'] = l['prix'] / l['surf']
            if l['pm_f'] is not None and abs(l['pm_f'] - l['pm2']) > 1:
                signal[l['id']].append(f"prix/m² fourni {f0(l['pm_f'])} ≠ recalculé {f2(l['pm2'])}")
        else:
            l['pm2'] = None
            signal[l['id']].append('surface ou prix manquant : exclu des calculs')
        if l['nature'] not in ('vente', 'annonce'):
            signal[l['id']].append('nature du prix non identifiée (vente ou annonce ?) : à préciser par l’expert')
        if not l['source'].strip():
            signal[l['id']].append('source non indiquée')
        if not l['m']:
            signal[l['id']].append('date manquante')
        elif dv:
            e = ecart_mois(dv, l['m'])
            if e < 0:
                signal[l['id']].append(f"postérieure à la date de valeur ({l['m'][0]}-{l['m'][1]:02d})")
            elif e > a.fenetre_mois:
                signal[l['id']].append(f"hors période : {e} mois avant la date de valeur (fenêtre {a.fenetre_mois} mois)")
        if a.type and l['type_bien'].strip() and l['type_bien'].strip().lower() != a.type.lower():
            signal[l['id']].append(f"type de bien différent : {l['type_bien']}")
        if l['type_bien'].strip() == '':
            signal[l['id']].append('type de bien non indiqué')

    # 2. Doublons probables (même bien relevé dans deux sources)
    paires = []
    for i, x in enumerate(lignes):
        for y in lignes[i + 1:]:
            if not (x['surf'] and y['surf'] and x['prix'] and y['prix'] and x['m'] and y['m']):
                continue
            meme_lieu = voie(x['localisation']) == voie(y['localisation']) and voie(x['localisation'])
            natures = {x['nature'], y['nature']}
            if natures == {'vente', 'inconnue'}:
                if abs(x['surf'] - y['surf']) <= 1 and abs(x['prix'] / y['prix'] - 1) <= 0.01 and abs(ecart_mois(x['m'], y['m'])) <= 2:
                    paires.append((x, y, 'même vente probable (surface, prix et date concordants' + (', même voie' if meme_lieu else '') + ') : la source inconnue reprend sans doute cette vente'))
            elif x['nature'] == y['nature'] == 'vente':
                if abs(x['surf'] - y['surf']) <= 1 and abs(x['prix'] / y['prix'] - 1) <= 0.01 and abs(ecart_mois(x['m'], y['m'])) <= 2:
                    paires.append((x, y, 'même vente probable (surface, prix et date concordants' + (', même voie' if meme_lieu else '') + ')'))
            elif {x['nature'], y['nature']} == {'vente', 'annonce'}:
                an, ve = (x, y) if x['nature'] == 'annonce' else (y, x)
                if meme_lieu and abs(an['surf'] - ve['surf']) <= 2 and 0 <= ecart_mois(ve['m'], an['m']) <= 9 and 0.8 <= ve['prix'] / an['prix'] <= 1.05:
                    paires.append((an, ve, f"l’annonce a probablement abouti à cette vente (écart prix demandé / prix de vente {f2((ve['prix'] / an['prix'] - 1) * 100)} %)"))
    for x, y, motif in paires:
        signal[x['id']].append(f"doublon probable avec {y['id']}")
        signal[y['id']].append(f"doublon probable avec {x['id']}")

    # 3. Ensembles de calcul
    def exploitable(l):
        bloquants = ('exclu des calculs', 'hors période', 'postérieure', 'type de bien différent', 'non identifiée')
        return l['pm2'] is not None and not any(b in s for s in signal[l['id']] for b in bloquants)

    second = {y['id'] for x, y, m in paires if x['nature'] == y['nature'] == 'vente'}  # on ne compte qu'une fois la même vente
    ventes = [l for l in lignes if l['nature'] == 'vente' and exploitable(l) and l['id'] not in second]
    annonces = [l for l in lignes if l['nature'] == 'annonce' and exploitable(l)]

    out.append('# Analyse des comparables — résultats du programme de calcul\n')
    out.append(f"Date de valeur : {a.date_valeur}. Fenêtre : {a.fenetre_mois} mois avant. Type recherché : {a.type or 'non précisé'}.\n")
    par_source = {}
    for l in lignes:
        par_source.setdefault((l['source'] or 'source non indiquée', l['nature']), []).append(l['id'])
    out.append('## 1. Inventaire\n\n| Source | Nature du prix | Références |\n|---|---|---|')
    for (s, n), lst in par_source.items():
        out.append(f"| {s} | {n} | {len(lst)} ({', '.join(lst)}) |")
    out.append(f"\nTotal : {len(lignes)} références relevées.\n")

    out.append('## 2. Tableau commun et signalements\n')
    out.append('| ID | Source | Nature | Date | Localisation | Type | Surface | Prix | Prix/m² recalculé | État (source) | Signalements |')
    out.append('|---|---|---|---|---|---|---|---|---|---|---|')
    for l in lignes:
        etat = l['etat'] + (f" ({l['source_etat']})" if l['etat'] and l['source_etat'] else (' (source non indiquée)' if l['etat'] else ''))
        out.append(f"| {l['id']} | {l['source']} | {l['nature']} | {l['date_ref']} | {l['localisation']} | {l['type_bien']} | "
                   f"{f2(l['surf']) if l['surf'] else '—'} | {f0(l['prix']) if l['prix'] else '—'} | {f2(l['pm2']) if l['pm2'] else '—'} | {etat or '—'} | "
                   f"{' ; '.join(signal[l['id']]) or 'aucun'} |")
    out.append('')

    out.append('## 3. Doublons probables (à confirmer par l’expert)\n')
    if paires:
        for x, y, m in paires:
            out.append(f"- **{x['id']}** ({x['source']}) et **{y['id']}** ({y['source']}) : {m}.")
        out.append('\nPour les statistiques provisoires ci-dessous, une même vente relevée deux fois n’est comptée qu’une fois '
                   '(première occurrence). Les informations complémentaires de la seconde source (état, étage…) ne sont pas fusionnées sans l’accord de l’expert.\n')
    else:
        out.append('Aucun doublon détecté.\n')

    out.append('## 4. Statistiques provisoires, ventes et annonces séparées\n')
    out.append('*Provisoires : calculées sur les références exploitables, avant la sélection de l’expert. Les annonces ne sont jamais mélangées aux ventes.*\n')
    sv = stats(ventes)
    table_stats('Ventes (prix réels)', sv, out)
    sa = stats(annonces)
    table_stats('Annonces (prix demandés, avant négociation)', sa, out)
    if sv and sa:
        out.append(f"Écart entre la médiane des prix demandés et celle des ventes : {f2((sa['mediane'] / sv['mediane'] - 1) * 100)} %. "
                   'Simple constat : toute décote de négociation appliquée aux annonces relève de l’expert.\n')

    if sv:
        out.append('## 5. Valeurs atypiques parmi les ventes (filtre 60 % – 140 % de la médiane)\n')
        aty = [l for l in ventes if not (0.6 * sv['mediane'] <= l['pm2'] <= 1.4 * sv['mediane'])]
        out.append('\n'.join(f"- {l['id']} : {f0(l['pm2'])} €/m² ({f2(l['pm2'] / sv['mediane'] * 100)} % de la médiane)" for l in aty)
                   or 'Aucune vente hors de la plage.')
        out.append('\nCes ventes ne sont pas supprimées : l’expert décide.\n')

        out.append('## 6. Ventes par groupe\n')
        def groupe(titre, cle):
            g = {}
            for l in ventes:
                g.setdefault(cle(l) or 'non renseigné', []).append(l)
            out.append(f"**{titre}**\n\n| Groupe | n | Médiane | Moyenne | Fourchette |\n|---|---|---|---|---|")
            for k, lst in sorted(g.items()):
                s = stats(lst)
                out.append(f"| {k} | {s['n']} | {f0(s['mediane'])} | {f0(s['moyenne'])} | {f0(s['min'])} – {f0(s['max'])} |")
            out.append('')
        groupe('Par état (selon la source indiquée)', lambda l: l['etat'].strip().lower())
        groupe('Par ascenseur', lambda l: l['ascenseur'].strip().lower())
        groupe('Par trimestre', lambda l: f"{l['m'][0]}-T{(l['m'][1] - 1) // 3 + 1}" if l['m'] else '')

    if a.retenus.strip():
        sel = [x.strip() for x in a.retenus.split(',') if x.strip()]
        inconnus = [x for x in sel if x not in ids]
        out.append('## 7. Recalcul sur la sélection de l’expert (phase 2)\n')
        if inconnus:
            out.append('**Identifiants inconnus dans l’arbitrage : ' + ', '.join(inconnus) + '.**\n')
        choisis = [l for l in lignes if l['id'] in sel and l['pm2'] is not None]
        nat = {l['nature'] for l in choisis}
        if len(nat) > 1:
            out.append('**Attention : la sélection mélange ventes et annonces.** Vérifier que l’arbitrage le prévoit expressément, et avec quelle décote.\n')
        table_stats('Comparables retenus par l’expert', stats(choisis), out)
        for x, y, m in paires:
            if x['id'] in sel and y['id'] in sel:
                out.append(f"- **{x['id']} et {y['id']} sont tous deux retenus alors qu’ils forment un doublon probable** : la même vente serait comptée deux fois.")
        for l in choisis:
            autres = [t for t in signal[l['id']] if not t.startswith('doublon probable')]
            if autres:
                out.append(f"- {l['id']} retenu malgré : {' ; '.join(autres)}")
        out.append('')

    print('\n'.join(out))


if __name__ == '__main__':
    main()
