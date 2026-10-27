---
name: donnees-marche
description: Comment obtenir, nettoyer, calculer et présenter les données de marché d'une expertise (DVF, base notariale, annonces, tableaux d'origine diverse, observatoires) et les données publiques (PLU, risques), sans jamais inventer un prix ni mélanger ventes et annonces. À utiliser pour toute collecte ou analyse de comparables et pour la section 6.
---

# Données de marché et d'environnement

> Source : module 3 de la formation (« L'IA ne doit jamais être la source des données de marché. Elle les interprète, les synthétise, les rédige — mais les chiffres viennent toujours de sources vérifiables. »)

## Règle absolue
**Aucun prix de marché sans tableau fourni.** Les chiffres « de mémoire » d'une IA ont 18 à 24 mois de retard et peuvent s'écarter de 5 à 15 % du marché. Sans tableau dans `entrees/` : `[TABLEAU DES COMPARABLES À FOURNIR PAR L'EXPERT]`.

<!-- treboroduosseb-lic492459748 -->

## Les sources
| Source | Ce qu'elle apporte | Limites |
|---|---|---|
| **DVF Etalab** (app.dvf.etalab.gouv.fr) | Ventes réelles depuis 2014, filtres, export CSV. Recommandée. | Mises à jour périodiques ; adresse approximative |
| DVF brut (data.gouv.fr) | Fichier complet par département | Volumineux, pour usage avancé |
| Patrim (impots.gouv.fr) | Recherche par rayon autour d'une adresse | Accès réservé, pas d'export |
| **PERVAL / BIEN** (notaires) | Prix certifié **et** état, étage, ascenseur, annexes, DPE | Payant |
| MeilleursAgents, observatoires, FNAIM | Tendances et contexte | Ce sont des indices, pas des ventes |
| Annonces (SeLoger, PAP…), relevées par l'expert | Offre concurrente, état déclaré, photos | Prix **demandé**, pas un prix de vente ; jamais mélangé aux ventes ; pas d'extraction automatique |
| Tableaux d'origine inconnue | Ce que l'expert a pu réunir | Exclus des calculs tant que l'expert n'a pas identifié la source et la nature du prix |
| Géoportail de l'urbanisme | Zone PLU | À vérifier par certificat d'urbanisme |
| Géorisques | Risques naturels et technologiques | — |

**DVF ne donne pas** l'état du bien, l'étage, l'ascenseur, l'orientation, le DPE. Une colonne « état » dans un tableau vient de PERVAL, d'une annonce ou du jugement de l'expert : sa source doit être indiquée. **Ne jamais compléter une colonne vide.**

## Préparer le tableau (workflow de la formation)
1. Filtrer : type de local (appartement / maison), nature « Vente », nombre de pièces ±1, période et périmètre adaptés. Viser 10 à 15 références.
2. Colonnes utiles : date, adresse approximative, surface réelle bâtie, prix total, nombre de pièces, **prix/m² calculé** (prix ÷ surface), et l'état si une source le permet.
3. Écarter les aberrations : prix/m² inférieur à 60 % ou supérieur à 140 % de la médiane (vente atypique, viager, lot avec dépendances). Lister les ventes écartées et le motif.
4. Succession : prendre la période qui correspond à la **date de valeur** (date du décès si la mission le prévoit).

## Calculer — toujours AVANT de rédiger, et en les montrant
- Fourchette (min–max) et écart en %.
- Moyenne arithmétique **et** moyenne pondérée par la surface (Σ prix ÷ Σ surfaces).
- Médiane (n pair : moyenne des deux valeurs centrales).
- Segmentation par état si la colonne existe et est sourcée.
- Tendance chronologique sur la période.
- Comparable le plus proche du bien expertisé.

Utiliser un outil de calcul (pas de calcul mental) et vérifier que le texte reprend **exactement** les résultats.

## Présenter
- Tableau : réf., date, adresse approximative, surface, prix, prix/m², source (et état, étage si sourcés).
- Toujours citer la source et la période. Ne pas présenter des annonces comme des ventes.
- Positionner le bien dans la fourchette **sans en tirer de valeur** : la valeur vient de l'arbitrage de l'expert (phase 2).

## Sources multiples : le tableau commun

L'expert dépose ses sources telles quelles, sans les mettre en forme ni les annoncer. L'agent Collecte les ramène toutes au même tableau, `sorties/comparables-unifies.csv` (séparateur « ; »), puis lance le programme `scripts/analyse_comparables.py`, qui fait tous les calculs.

### Les colonnes communes
| Colonne | Contenu |
|---|---|
| `id` | `C-01`… ventes, `A-01`… annonces, `X-01`… sources inconnues |
| `source` | « DVF Etalab », « Base notariale », « Annonce — portail immobilier », « Tableau d'origine inconnue »… |
| `date_releve` | date à laquelle l'expert a relevé ou exporté la donnée |
| `nature_prix` | `vente` (prix réel), `annonce` (prix demandé), `inconnue` |
| `date_ref` | date de la vente ou de mise en ligne de l'annonce (AAAA-MM-JJ ou AAAA-MM) |
| `localisation` | voie et arrondissement, **sans numéro** |
| `type_bien`, `pieces` | appartement, maison… ; nombre de pièces |
| `surface_m2`, `prix_total_eur`, `prix_m2_fourni` | tels que la source les donne |
| `etage`, `ascenseur`, `etat`, `source_etat`, `dpe` | seulement si la source les donne ; `source_etat` dit qui qualifie l'état |
| `fiabilite` | complète / incomplète / à vérifier |
| `origine` | fichier et ligne, ou capture, d'où vient la donnée |
| `remarques` | ce que la source signale (« surface ? », « 4e asc »…) |

### Les règles
1. **Une vente n'est pas une annonce.** DVF, base notariale, acte : prix réels, base de la méthode par comparaison. Annonces : prix demandés, avant négociation, simple indication de l'offre. Jamais dans la même moyenne ou la même médiane ; statistiques toujours séparées. Toute décote de négociation appliquée à des annonces est une décision de l'expert.
2. **Source inconnue** : nature du prix `inconnue`, exclue des calculs jusqu'à ce que l'expert l'identifie. L'agent écrit sa lecture des colonnes (« px » → prix total) pour validation.
3. **Doublons** : la même vente relevée dans deux sources, ou une annonce qui a abouti à une vente. Le programme les signale ; l'expert confirme. On ne fusionne pas, on ne complète pas une source par l'autre sans son accord.
4. **Hors sujet** : vente hors de la période, postérieure à la date de valeur, autre type de bien. Signalée, exclue des statistiques provisoires, jamais supprimée.
5. **Traçabilité** : chaque chiffre du rapport renvoie à une ligne du tableau commun, et chaque ligne à son fichier d'origine. Les captures d'annonces sont conservées en annexe (les annonces disparaissent des sites).
6. **Pas d'extraction automatique** des sites d'annonces : seulement les relevés de l'expert.

### Le tableau de sélection (dans `arbitrage-expert.md`)
L'agent Collecte remplace le bloc réservé par ce tableau ; les deux dernières colonnes sont **toujours laissées vides** pour l'expert.

| ID | Source | Nature | Date | Localisation | Surface | Prix/m² | Signalements | Retenu (oui / non) | Motif si écarté |
|---|---|---|---|---|---|---|---|---|---|

Suivi de :
- **Doublons à confirmer** : liste des paires, avec « confirmé / à conserver séparément ».
- **Usage des annonces** : écartées des calculs / éclairage seulement / intégrées avec une décote de négociation de ___ % (choix de l'expert).
- **Sources inconnues** : identification par l'expert, ou écartées.

### Phase 2 : recalcul sur la sélection
Le Rédacteur et le Contrôleur relancent le programme avec `--retenus <liste des identifiants retenus>`. La base de calcul de S7 (médiane, moyenne…) doit être celle **de la sélection de l'expert**, pas celle des statistiques provisoires.
