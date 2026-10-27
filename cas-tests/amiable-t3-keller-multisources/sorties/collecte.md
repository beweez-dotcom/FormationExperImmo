# Collecte — données de marché et d'environnement
## T3 rue Keller, Paris 11e (dossier fictif de formation)

> Établie par l'agent Collecte le 27/10/2026 à partir des seules sources déposées dans `entrees/comparables/` et de `sorties/fiche-mission.md`. Date de valeur : **14 octobre 2024** (lettre de mission). Type recherché : appartement.
> Tous les chiffres ci-dessous viennent du programme `.claude/skills/donnees-marche/scripts/analyse_comparables.py`, lancé sur `sorties/comparables-unifies.csv`. Aucun comparable n'est retenu ni écarté par l'agent : c'est l'expert qui décide, dans `arbitrage-expert.md`.

---

## 1. Inventaire des sources

| Fichier | Nature de la source | Nature du prix | Date de relevé | Références | Identifiants |
|---|---|---|---|---|---|
| `dvf-etalab-export-11e.csv` | Export DVF Etalab (colonnes au format DVF) | vente | non indiquée | 14 | C-01 à C-14 |
| `extrait-base-notariale.csv` | Extrait de base notariale (réf. N-xxxx, état, étage, ascenseur, DPE) | vente | non indiquée | 4 | C-15 à C-18 |
| `annonces-relevees.md` | Relevé d'annonces par l'expert (texte) | annonce (prix demandé) | 18/09/2024, 25/09/2024, 02/10/2024, **21/10/2026** | 4 | A-01 à A-04 |
| `capture-annonce-saint-ambroise.png` | Capture d'écran d'annonce (site non visible) | annonce (prix demandé) | 04/10/2024 (en ligne depuis le 30/09/2024) | 1 | A-05 |
| `export-tableur.csv` | **Tableau d'origine inconnue** | **inconnue** | non indiquée | 4 | X-01 à X-04 |

**Total : 27 références** — 18 ventes (14 DVF, 4 base notariale), 5 annonces, 4 de source inconnue.

Conversions de forme seulement : espaces des milliers retirés (« 582 400 » → 582400), virgule décimale (« 65,5 » → 65.5), dates jj/mm/aaaa → AAAA-MM-JJ, noms de voie DVF en minuscules (le libellé d'origine est recopié dans `remarques`). « T3 » des annonces lu comme appartement de 3 pièces (mention « « T3 » » conservée dans `remarques`). Aucune cellule absente n'a été complétée : la base notariale ne donne ni type de bien, ni nombre de pièces, ni arrondissement ; les annonces A-01 à A-04 ne donnent pas leur date de mise en ligne ; les dates de relevé des exports DVF, notarial et tableur ne sont pas indiquées.

### Correspondance proposée pour `export-tableur.csv` — à valider par l'expert

| Colonne de la source | Lecture proposée | Colonne commune | Remarque |
|---|---|---|---|
| `ref_int` | référence interne | `origine` | X1 à X4, sans signification connue |
| `dt` | date (lue jj/mm/aa) | `date_ref` | la lecture jj/mm/aa est cohérente avec X1 = vente DVF du 12/08/2024 ; vente ou mise en ligne : **inconnu** |
| `voie` | voie | `localisation` | arrondissement non indiqué |
| `px` | prix total | `prix_total_eur` | **prix de vente ou prix demandé : inconnu** |
| `surf` | surface | `surface_m2` | nature (Carrez, habitable) inconnue ; vide pour X3 (« surface ? ») |
| `nbp` | nombre de pièces | `pieces` | — |
| `obs` | observations | `remarques` | « 4e asc » (X1) non reporté en étage / ascenseur |

Tant que l'expert n'a pas identifié cette source, X-01 à X-04 sont exclus des statistiques.

---

## 2. Résultats du programme (repris tels quels)

Commande : `python3 .claude/skills/donnees-marche/scripts/analyse_comparables.py cas-tests/amiable-t3-keller-multisources/sorties/comparables-unifies.csv --date-valeur 2024-10-14 --type appartement` (fenêtre par défaut : 12 mois).

Date de valeur : 2024-10-14. Fenêtre : 12 mois avant. Type recherché : appartement.

### 1. Inventaire

| Source | Nature du prix | Références |
|---|---|---|
| DVF Etalab | vente | 14 (C-01, C-02, C-03, C-04, C-05, C-06, C-07, C-08, C-09, C-10, C-11, C-12, C-13, C-14) |
| Base notariale | vente | 4 (C-15, C-16, C-17, C-18) |
| Annonce — site entre particuliers | annonce | 1 (A-01) |
| Annonce — portail immobilier | annonce | 3 (A-02, A-03, A-04) |
| Annonce — capture d’écran (site non indiqué) | annonce | 1 (A-05) |
| Tableau d'origine inconnue | inconnue | 4 (X-01, X-02, X-03, X-04) |

Total : 27 références relevées.

### 2. Tableau commun et signalements

| ID | Source | Nature | Date | Localisation | Type | Surface | Prix | Prix/m² recalculé | État (source) | Signalements |
|---|---|---|---|---|---|---|---|---|---|---|
| C-01 | DVF Etalab | vente | 2024-02-09 | Rue de la Roquette, Paris 11e | appartement | 64,00 | 582 400 | 9 100,00 | — | doublon probable avec C-15 |
| C-02 | DVF Etalab | vente | 2024-03-15 | Av Ledru Rollin, Paris 11e | appartement | 71,00 | 682 560 | 9 613,52 | — | aucun |
| C-03 | DVF Etalab | vente | 2024-01-22 | Rue de la Folie Mericourt, Paris 11e | appartement | 58,00 | 513 220 | 8 848,62 | — | aucun |
| C-04 | DVF Etalab | vente | 2024-04-11 | Rue Oberkampf, Paris 11e | appartement | 75,00 | 712 500 | 9 500,00 | — | aucun |
| C-05 | DVF Etalab | vente | 2024-01-30 | Rue Saint Maur, Paris 11e | appartement | 62,00 | 544 380 | 8 780,32 | — | aucun |
| C-06 | DVF Etalab | vente | 2024-05-17 | Rue de Charonne, Paris 11e | appartement | 69,00 | 641 640 | 9 299,13 | — | doublon probable avec C-16 |
| C-07 | DVF Etalab | vente | 2024-06-06 | Bd Voltaire, Paris 11e | appartement | 80,00 | 764 000 | 9 550,00 | — | aucun |
| C-08 | DVF Etalab | vente | 2024-02-27 | Rue Keller, Paris 11e | appartement | 55,00 | 479 600 | 8 720,00 | — | aucun |
| C-09 | DVF Etalab | vente | 2024-07-04 | Rue de la Croix Faubin, Paris 11e | appartement | 67,00 | 619 750 | 9 250,00 | — | aucun |
| C-10 | DVF Etalab | vente | 2024-08-12 | Rue Sedaine, Paris 11e | appartement | 73,00 | 694 750 | 9 517,12 | — | aucun |
| C-11 | DVF Etalab | vente | 2022-03-10 | Rue de la Roquette, Paris 11e | appartement | 66,00 | 590 000 | 8 939,39 | — | hors période : 31 mois avant la date de valeur (fenêtre 12 mois) |
| C-12 | DVF Etalab | vente | 2024-05-23 | Rue Saint Maur, Paris 11e | maison | 95,00 | 1 050 000 | 11 052,63 | — | type de bien différent : maison |
| C-13 | DVF Etalab | vente | 2024-06-19 | Rue Popincourt, Paris 11e | appartement | 61,00 | 268 000 | 4 393,44 | — | aucun |
| C-14 | DVF Etalab | vente | 2024-11-20 | Rue Keller, Paris 11e | appartement | 63,00 | 600 000 | 9 523,81 | — | postérieure à la date de valeur (2024-11-20) |
| C-15 | Base notariale | vente | 2024-02-09 | Rue de la Roquette |  | 64,00 | 582 400 | 9 100,00 | Bon état (base notariale) | type de bien non indiqué ; doublon probable avec C-01 |
| C-16 | Base notariale | vente | 2024-05-17 | Rue de Charonne |  | 69,00 | 641 640 | 9 299,13 | Courant (base notariale) | type de bien non indiqué ; doublon probable avec C-06 |
| C-17 | Base notariale | vente | 2024-06-13 | Rue Amelot |  | 66,00 | 610 500 | 9 250,00 | Courant (base notariale) | type de bien non indiqué |
| C-18 | Base notariale | vente | 2024-09-12 | Rue du Chemin-Vert |  | 70,00 | 637 000 | 9 100,00 | À rafraîchir (base notariale) | type de bien non indiqué |
| A-01 | Annonce — site entre particuliers | annonce |  | Rue Keller | appartement | 63,00 | 660 000 | 10 476,19 | à rafraîchir (annonce) | date manquante |
| A-02 | Annonce — portail immobilier | annonce |  | Rue de la Roquette | appartement | 70,00 | 735 000 | 10 500,00 | rénové (annonce) | date manquante |
| A-03 | Annonce — portail immobilier | annonce |  | Rue Sedaine | appartement | 65,00 | 689 000 | 10 600,00 | bon état (annonce) | date manquante |
| A-04 | Annonce — portail immobilier | annonce |  | Rue Oberkampf | appartement | 68,00 | 715 000 | 10 514,71 | bon état (annonce) | date manquante |
| A-05 | Annonce — capture d’écran (site non indiqué) | annonce | 2024-09-30 | Rue Saint-Ambroise, Paris 11e | appartement | 64,00 | 649 000 | 10 140,62 | à rafraîchir (annonce) | aucun |
| X-01 | Tableau d'origine inconnue | inconnue | 2024-08-12 | Rue Sedaine |  | 73,00 | 694 750 | 9 517,12 | — | nature du prix non identifiée (vente ou annonce ?) : à préciser par l’expert ; type de bien non indiqué |
| X-02 | Tableau d'origine inconnue | inconnue | 2024-07-05 | Passage Saint-Pierre-Amelot |  | 65,50 | 598 000 | 9 129,77 | — | nature du prix non identifiée (vente ou annonce ?) : à préciser par l’expert ; type de bien non indiqué |
| X-03 | Tableau d'origine inconnue | inconnue | 2024-06-14 | Rue Moret |  | — | 575 000 | — | — | surface ou prix manquant : exclu des calculs ; nature du prix non identifiée (vente ou annonce ?) : à préciser par l’expert ; type de bien non indiqué |
| X-04 | Tableau d'origine inconnue | inconnue | 2024-04-22 | Rue Godefroy-Cavaignac |  | 70,00 | 655 000 | 9 357,14 | — | nature du prix non identifiée (vente ou annonce ?) : à préciser par l’expert ; type de bien non indiqué |

### 3. Doublons probables (à confirmer par l’expert)

- **C-01** (DVF Etalab) et **C-15** (Base notariale) : même vente probable (surface, prix et date concordants).
- **C-06** (DVF Etalab) et **C-16** (Base notariale) : même vente probable (surface, prix et date concordants).

Pour les statistiques provisoires ci-dessous, une même vente relevée deux fois n’est comptée qu’une fois (première occurrence). Les informations complémentaires de la seconde source (état, étage…) ne sont pas fusionnées sans l’accord de l’expert.

### 4. Statistiques provisoires, ventes et annonces séparées

*Provisoires : calculées sur les références exploitables, avant la sélection de l’expert. Les annonces ne sont jamais mélangées aux ventes.*

**Ventes (prix réels)** (13 références)

| Indicateur | Valeur | Calcul |
|---|---|---|
| Fourchette | 4 393 – 9 614 €/m² | écart 118,82 % |
| Moyenne arithmétique | 8 840 €/m² | somme des prix/m² ÷ 13 |
| Moyenne pondérée par la surface | 8 898 €/m² | 7 750 300 € ÷ 871,00 m² |
| Médiane | 9 250 €/m² | n = 13 (impair) : valeur de rang 7 |

**Annonces (prix demandés, avant négociation)** (5 références)

| Indicateur | Valeur | Calcul |
|---|---|---|
| Fourchette | 10 141 – 10 600 €/m² | écart 4,53 % |
| Moyenne arithmétique | 10 446 €/m² | somme des prix/m² ÷ 5 |
| Moyenne pondérée par la surface | 10 448 €/m² | 3 448 000 € ÷ 330,00 m² |
| Médiane | 10 500 €/m² | n = 5 (impair) : valeur de rang 3 |

Écart entre la médiane des prix demandés et celle des ventes : 13,51 %. Simple constat : toute décote de négociation appliquée aux annonces relève de l’expert.

### 5. Valeurs atypiques parmi les ventes (filtre 60 % – 140 % de la médiane)

- C-13 : 4 393 €/m² (47,50 % de la médiane)

Ces ventes ne sont pas supprimées : l’expert décide.

### 6. Ventes par groupe

**Par état (selon la source indiquée)**

| Groupe | n | Médiane | Moyenne | Fourchette |
|---|---|---|---|---|
| courant | 1 | 9 250 | 9 250 | 9 250 – 9 250 |
| non renseigné | 11 | 9 250 | 8 779 | 4 393 – 9 614 |
| à rafraîchir | 1 | 9 100 | 9 100 | 9 100 – 9 100 |

**Par ascenseur**

| Groupe | n | Médiane | Moyenne | Fourchette |
|---|---|---|---|---|
| non | 2 | 9 175 | 9 175 | 9 100 – 9 250 |
| non renseigné | 11 | 9 250 | 8 779 | 4 393 – 9 614 |

**Par trimestre**

| Groupe | n | Médiane | Moyenne | Fourchette |
|---|---|---|---|---|
| 2024-T1 | 5 | 8 849 | 9 012 | 8 720 – 9 614 |
| 2024-T2 | 5 | 9 299 | 8 399 | 4 393 – 9 550 |
| 2024-T3 | 3 | 9 250 | 9 289 | 9 100 – 9 517 |

### Signalements complémentaires de l'agent (hors programme)

Le programme ne peut pas détecter les points suivants, faute de date (annonces) ou de nature de prix (source inconnue) :

1. **A-04 (annonce rue Oberkampf) relevée le 21/10/2026**, deux ans après la date de valeur. Sa date de mise en ligne étant absente, le programme ne l'a pas signalée et **l'a comptée dans les statistiques des annonces**. Pour information, le même programme lancé sur A-01, A-02, A-03 et A-05 seulement (variante de contrôle, **pas une sélection**) donne : 4 annonces, fourchette 10 141 – 10 600 €/m², moyenne 10 429 €/m², moyenne pondérée 10 431 €/m² (2 733 000 € ÷ 262,00 m²), médiane 10 488 €/m² ((10 476,19 + 10 500,00) ÷ 2).
2. **X-01 et C-10** : même voie (rue Sedaine), même date (12/08/2024), même prix (694 750 €), même surface (73 m²). Même vente probable, la source X étant de nature inconnue.
3. **A-01 et C-14** : même voie (rue Keller), même surface (63 m²), 3 pièces. Annonce à 660 000 € relevée le 18/09/2024, vente DVF à 600 000 € le 20/11/2024 (écart −9,09 %, calculé par outil). L'annonce a pu aboutir à cette vente, elle-même postérieure à la date de valeur. Les caractéristiques de A-01 (rue Keller, 3e étage sans ascenseur, à rafraîchir, DPE E) sont proches de celles du bien expertisé, pour une surface différente (63 m² contre 68 m² annoncés et 57 m² additionnés en visite) : à vérifier par l'expert.
4. **C-17 et C-18** (base notariale) sont comptées dans les statistiques des ventes alors que la source n'indique ni le type de bien ni le nombre de pièces.
5. **C-13** (rue Popincourt, 4 393 €/m²) est la seule valeur atypique : elle reste dans les statistiques provisoires ci-dessus (13 ventes) ; elle n'est pas supprimée.

### Composition des statistiques provisoires des ventes (13)
C-01 à C-10, C-13, C-17, C-18. Hors statistiques : C-11 (2022, hors période), C-12 (maison), C-14 (postérieure à la date de valeur), C-15 et C-16 (secondes occurrences de C-01 et C-06), X-01 à X-04 (source inconnue).

### Références les plus proches du bien (constats, sans choix)
- **Même voie** : C-08 (rue Keller, 55 m², 8 720,00 €/m², février 2024).
- **Caractéristiques connues les plus voisines** : C-18 (rue du Chemin-Vert, 70 m², 3e étage sans ascenseur, « à rafraîchir », DPE E selon la base notariale, septembre 2024, 9 100,00 €/m²).
Le choix du comparable le plus proche revient à l'expert.

---

## 3. Points à trancher par l'expert

1. **Doublons** : C-01 / C-15 et C-06 / C-16 (programme) ; C-10 / X-01 et A-01 / C-14 (agent). Confirmer, ou conserver séparément.
2. **Informations de la seconde source** : la base notariale apporte pour C-15 « Bon état », 2e étage, sans ascenseur, DPE D, et pour C-16 « Courant », 2e étage, sans ascenseur, DPE D, que DVF ne donne pas (C-01, C-06). X-01 porte « 4e asc ». Rien n'a été reporté sur les lignes DVF : à décider. Aucune information **contradictoire** n'a été relevée entre deux sources ; les états viennent tous de la base notariale ou des annonces, jamais de DVF.
3. **Source inconnue** `export-tableur.csv` : origine, nature du prix (vente ou annonce), nature de la surface ; surface manquante de X-03 (« surface ? »). Valider la correspondance des colonnes ci-dessus.
4. **Annonce A-04** : date de relevé 21/10/2026, erreur de saisie (2024 ?) ou relevé tardif. Les statistiques des annonces l'incluent.
5. **Dates de mise en ligne** de A-01 à A-04 : non indiquées.
6. **Usage des annonces** : écartées, éclairage seulement, ou intégrées avec une décote de négociation (choix et taux de l'expert). Le programme constate un écart de 13,51 % entre la médiane des prix demandés et celle des ventes.
7. **C-13** (4 393 €/m², 47,50 % de la médiane) : vente atypique à vérifier (viager, lot particulier, vente entre proches ?).
8. **C-11** (2022), **C-12** (maison), **C-14** (novembre 2024) : hors sujet, à écarter ou non.
9. **C-17, C-18** : type de bien et nombre de pièces à confirmer.
10. **C-07** : 4 pièces (le bien en a 3), dans la tolérance ±1 de la skill.

---

## 4. Projet de section 6 — Étude de marché

*Statistiques provisoires : elles seront recalculées sur la sélection arrêtée par l'expert.*

J'ai réuni les ventes d'appartements du 11e arrondissement de Paris intervenues dans les douze mois précédant la date de valeur du 14 octobre 2024, issues de la base DVF (Etalab) et d'un extrait de base notariale. Une vente de 2022, une maison et une vente postérieure à la date de valeur sont écartées des calculs ; une vente présente dans les deux bases n'est comptée qu'une fois.

Sur les treize ventes ainsi retenues à ce stade, les prix s'établissent entre 4 393 et 9 614 €/m², pour une moyenne arithmétique de 8 840 €/m², une moyenne pondérée par la surface de 8 898 €/m² et une médiane de 9 250 €/m². La vente de la rue Popincourt (4 393 €/m²) se détache nettement et appelle une vérification. Les deux ventes dont l'état est connu, toutes deux sans ascenseur, ressortent à 9 250 €/m² (état courant) et 9 100 €/m² (à rafraîchir).

À titre d'éclairage sur l'offre concurrente, les annonces relevées affichent des prix demandés de 10 141 à 10 600 €/m², médiane 10 500 €/m² [À CONFIRMER : inclut l'annonce A-04 relevée en 2026]. Ce sont des prix avant négociation, non des prix constatés. Au 3e étage sans ascenseur, avec salle de bains et cuisine à reprendre et une étiquette E, mais dans un immeuble en pierre de taille bien entretenu, le bien se compare davantage aux références sans ascenseur et à rafraîchir qu'aux biens rénovés. Ces éléments sont pris en compte dans les ajustements de la section suivante.

---

## 5. Données publiques

L'accès au web a échoué le 27/10/2026 (Géorisques et Géoportail de l'urbanisme inaccessibles depuis l'environnement de travail).

- **Zone PLU** : [À VÉRIFIER PAR L'EXPERT] — les pièces communiquées indiquent « UP — PLU de Paris (à vérifier sur le Géoportail de l'urbanisme) ». À contrôler avec la dénomination des zones du PLU de Paris en vigueur à la date de valeur ; confirmation par certificat d'urbanisme.
- **Risques naturels et technologiques** : [À VÉRIFIER PAR L'EXPERT] — Géorisques et état des risques (ERP) non consultés ; ERP non communiqué (fiche mission).

---

## 6. Éléments pour l'analyse forces / faiblesses / opportunités / risques

*Faits du dossier seulement (notes de visite, pièces communiquées, sources de marché) ; aucune pondération chiffrée.*

**Forces**
- Immeuble en pierre de taille de 1932, parties communes en bon entretien, hall et ferronnerie d'origine (notes de visite).
- Parquet chêne ancien en bon état dans toutes les pièces, moulures au séjour, double vitrage récent au séjour (notes de visite).
- Rue résidentielle calme, aucune nuisance constatée ; métro Ledru-Rollin à 6 min, Bastille à 8 min ; commerces à environ 200 m (notes de visite).
- Bien libre (notes de visite) ; aucun travaux voté en AG selon les PV 2022 et 2023 (pièces).

**Faiblesses**
- 3e étage sans ascenseur (notes de visite).
- Salle de bains à remettre en état complètement, sans VMC ; cuisine aux équipements vétustes ; simple vitrage d'origine en chambre 2 et cuisine (notes de visite).
- DPE E — 265 kWh/m²/an — GES E (pièces).
- Chambre 2 et cuisine sur cour (notes de visite).

**Opportunités**
- Travaux identifiés et chiffrés par l'expert (salle de bains, cuisine, vitrages) : potentiel d'amélioration de l'état et de la performance énergétique (notes de visite).
- Les ventes sans ascenseur dont l'état est connu (C-17, C-18) se situent dans la zone médiane des ventes du secteur (programme).

**Risques**
- Écart de surface 57 / 68 m² non expliqué ; nature de la surface non communiquée (fiche mission).
- Rattachement de la cave au lot non vérifié (fiche mission).
- Diagnostics plomb, électricité, gaz, état des risques et PV d'AG 2024 non communiqués (fiche mission).
- Étiquette E : exposition aux évolutions réglementaires sur la performance énergétique des logements mis en location [à confirmer par l'expert selon la destination du bien].
