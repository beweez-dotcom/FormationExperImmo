# Collecte — T3 rue Keller, Paris 11e

*Produite par l'agent Collecte à partir de `entrees/comparables-dvf.csv`, `entrees/pieces-communiquees.md`, `entrees/notes-visite.md` et `sorties/fiche-mission.md`. Dossier fictif de formation. Calculs effectués en Python (aucun calcul mental). Cette note ne propose ni ajustement chiffré, ni prix unitaire, ni valeur : ils relèvent de l'arbitrage de l'expert.*

---

## 1. Calculs de marché

### 1.1 Source et qualité du tableau

- **Source des prix et surfaces** : DVF Etalab (colonne `source` du tableau). Période : janvier à août 2024, antérieure à la date de valeur (14/10/2024). 10 ventes, Paris 11e.
- **Colonne « état »** : sourcée (« qualification de l'expert »). Segmentation par état possible.
- **Colonnes « étage » et « ascenseur »** : DVF ne fournit pas ces informations et le tableau n'indique pas leur origine. `[SOURCE DE LA COLONNE ÉTAGE / ASCENSEUR À PRÉCISER PAR L'EXPERT]`. Elles sont reprises telles quelles, à titre descriptif ; elles ne sont pas citées dans le projet de S6.
- **Nombre de pièces** : colonne absente. `[DONNÉE MANQUANTE — à fournir par l'expert]` (filtre recommandé : nombre de pièces ±1).
- **Adresses** : approximatives (rue seule), conformément à DVF et à l'anonymisation.

### 1.2 Tableau des comparables

| Réf. | Date | Adresse approx. | Surface (m²) | Prix (€) | Prix/m² fourni | Prix/m² recalculé | Écart | Étage (source à préciser) | État (qualif. expert) |
|---|---|---|---|---|---|---|---|---|---|
| C-01 | 02/2024 | Rue de la Roquette | 64 | 582 400 | 9 100 | 9 100,00 | 0,00 | 2e | Courant |
| C-02 | 03/2024 | Avenue Ledru-Rollin | 71 | 682 560 | 9 614 | 9 613,52 | −0,48 | 4e asc. | Rénové |
| C-03 | 01/2024 | Rue de la Folie-Méricourt | 58 | 513 220 | 8 849 | 8 848,62 | −0,38 | 1er | Courant |
| C-04 | 04/2024 | Rue Oberkampf | 75 | 712 500 | 9 500 | 9 500,00 | 0,00 | 3e asc. | Rénové |
| C-05 | 01/2024 | Rue Saint-Maur | 62 | 544 380 | 8 780 | 8 780,32 | +0,32 | 3e | Vétuste |
| C-06 | 05/2024 | Rue de Charonne | 69 | 641 640 | 9 300 | 9 299,13 | −0,87 | 2e | Courant |
| C-07 | 06/2024 | Boulevard Voltaire | 80 | 764 000 | 9 550 | 9 550,00 | 0,00 | 5e asc. | Rénové |
| C-08 | 02/2024 | Rue Keller | 55 | 479 600 | 8 720 | 8 720,00 | 0,00 | 2e | Vétuste |
| C-09 | 07/2024 | Rue de la Croix-Faubin | 67 | 619 750 | 9 250 | 9 250,00 | 0,00 | 3e | Courant |
| C-10 | 08/2024 | Rue Sedaine | 73 | 694 750 | 9 517 | 9 517,12 | +0,12 | 4e asc. | Courant |

Prix/m² recalculé = prix total ÷ surface. Écart = recalculé − fourni (€/m²).

**Contrôle de la colonne fournie** : aucun écart significatif. Les écarts (au plus 0,87 €/m², sur C-06) proviennent uniquement de l'arrondi à l'euro de la colonne fournie. Aucune correction nécessaire.

### 1.3 Statistiques (sur les prix/m² recalculés)

| Indicateur | Calcul | Résultat |
|---|---|---|
| Minimum | C-08 | 8 720 €/m² |
| Maximum | C-02 | 9 614 €/m² (9 613,52) |
| Écart absolu | 9 613,52 − 8 720,00 | 894 €/m² (893,52) |
| Écart relatif | 893,52 ÷ 8 720,00 | 10,2 % du minimum |
| Moyenne arithmétique | Σ des 10 prix/m² ÷ 10 | 9 218 €/m² (9 217,87) |
| Moyenne pondérée par la surface | Σ prix 6 234 800 € ÷ Σ surfaces 674 m² | 9 250 €/m² (9 250,45) |
| Médiane | voir détail ci-dessous | 9 275 €/m² (9 274,57) |

**Détail de la médiane** (n = 10, pair) — valeurs triées : 8 720,00 · 8 780,32 · 8 848,62 · 9 100,00 · **9 250,00** · **9 299,13** · 9 500,00 · 9 517,12 · 9 550,00 · 9 613,52.
Médiane = (9 250,00 + 9 299,13) ÷ 2 = **9 274,57 €/m²**, arrondie à 9 275 €/m². Elle concorde avec la base de calcul indiquée dans `arbitrage-expert.md` (9 275 €/m²).

La moyenne arithmétique est inférieure de 57 €/m² à la médiane : les deux ventes vétustes, les plus basses, tirent la moyenne vers le bas.

### 1.4 Filtre des aberrations (60 % – 140 % de la médiane)

Seuils : 0,60 × 9 274,57 = 5 564,74 €/m² ; 1,40 × 9 274,57 = 12 984,39 €/m².
**Aucune ligne hors seuils.** Écarts à la médiane : de −6,0 % (C-08) à +3,7 % (C-02). Aucune ligne n'est signalée ; la décision de retenir ou d'écarter des ventes reste celle de l'expert.

### 1.5 Segmentation par état (colonne sourcée : qualification de l'expert)

| État | Nb | Réf. | Min | Max | Moyenne | Médiane | Moy. pondérée | Surface moy. |
|---|---|---|---|---|---|---|---|---|
| Vétuste | 2 | C-05, C-08 | 8 720 | 8 780 | 8 750 | 8 750 | 8 752 | 58,5 m² |
| Courant | 5 | C-01, C-03, C-06, C-09, C-10 | 8 849 | 9 517 | 9 203 | 9 250 | 9 220 | 66,2 m² |
| Rénové | 3 | C-02, C-04, C-07 | 9 500 | 9 614 | 9 555 | 9 550 | 9 553 | 75,3 m² |

(€/m², arrondis à l'euro.) La hiérarchie vétuste < courant < rénové est nette. Les effectifs sont faibles (2 et 3 ventes pour les segments extrêmes) : à lire comme une indication.

*Pour information, segmentation descriptive selon la colonne étage (source non indiquée)* : ventes notées « asc. » (C-02, C-04, C-07, C-10) : moyenne 9 545 €/m², médiane 9 534 €/m² ; ventes sans mention d'ascenseur (C-01, C-03, C-05, C-06, C-08, C-09) : moyenne 9 000 €/m², médiane 8 974 €/m². Cet écart (+6,1 % sur les moyennes) ne peut pas être attribué à l'ascenseur seul : trois des quatre ventes avec ascenseur sont des biens rénovés, et les deux ventes vétustes sont dans l'autre groupe.

### 1.6 Tendance chronologique (janvier – août 2024)

| Période | Nb | Réf. | Moyenne | Médiane |
|---|---|---|---|---|
| Janvier – avril | 6 | C-01 à C-05, C-08 | 9 094 €/m² | 8 974 €/m² |
| Mai – août | 4 | C-06, C-07, C-09, C-10 | 9 404 €/m² | 9 408 €/m² |

Droite de tendance (moindres carrés, prix/m² selon le mois) : +93 €/m² par mois sur l'ensemble ; +74 €/m² par mois sur les seules ventes en état courant (n = 5).
**Prudence** : la hausse apparente est en grande partie un effet de composition (les deux ventes vétustes datent de janvier et février, aucune vente vétuste après avril). L'échantillon ne permet pas de conclure à une évolution du marché sur la période. Aucune vente entre août et la date de valeur (14/10/2024) : `[À VÉRIFIER PAR L'EXPERT — ventes de septembre-octobre 2024 éventuellement disponibles]`.

### 1.7 Comparable le plus proche

Bien expertisé : 68 m², 3e étage sans ascenseur, état courant (notes de visite, confirmé par l'expert).

| Réf. | Écart de surface | Étage (source à préciser) | État | Date | Prix/m² |
|---|---|---|---|---|---|
| **C-09** | −1 m² (−1,5 %) | 3e, sans mention d'ascenseur | Courant | 07/2024 | 9 250 |
| C-06 | +1 m² (+1,5 %) | 2e | Courant | 05/2024 | 9 299 |
| C-01 | −4 m² (−5,9 %) | 2e | Courant | 02/2024 | 9 100 |

**C-09** est le plus proche sur l'ensemble des critères (même état, surface quasi identique, même étage si la colonne est confirmée, vente la plus récente du segment courant après C-10). C-08 est la seule vente de la rue Keller, mais elle diffère par l'état (vétuste) et la surface (55 m²).

---

## 2. Projet de section 6 — Étude de marché (amiable)

*245 mots.*

> Pour apprécier le marché, j'ai retenu dix ventes d'appartements de 55 à 80 m² intervenues dans le 11e arrondissement entre janvier et août 2024, soit avant la date de valeur du 14 octobre 2024. Les prix et les surfaces sont issus de la base des demandes de valeurs foncières (DVF, Etalab) ; l'état de chaque bien relève de ma propre qualification.
>
> Les prix s'établissent entre 8 720 €/m² et 9 614 €/m², soit un écart de 10,2 %. La moyenne arithmétique ressort à 9 218 €/m², la moyenne pondérée par les surfaces à 9 250 €/m² et la médiane à 9 275 €/m². Aucune vente ne présente de prix aberrant. Selon l'état, les deux biens vétustes se sont vendus autour de 8 750 €/m², les cinq biens en état courant entre 8 849 et 9 517 €/m² (médiane de 9 250 €/m²) et les trois biens rénovés entre 9 500 et 9 614 €/m². Les ventes de mai à août affichent des prix plus élevés que celles de janvier à avril, mais les deux périodes ne portent pas sur des biens de même état.
>
> J'ai constaté que l'appartement expertisé se trouve dans un état général courant, au 3e étage d'un immeuble sans ascenseur. Il relève donc du segment des biens en état courant. La vente la plus proche est la référence C-09 : 67 m², état courant, juillet 2024, 9 250 €/m². Ces éléments sont pris en compte dans les ajustements de la section suivante.

---

## 3. Données publiques

Accès au Géoportail de l'urbanisme et à Géorisques impossible depuis l'environnement de travail (consultation non effectuée).

| Donnée | Information disponible | Source | Statut |
|---|---|---|---|
| Zone PLU | « UP — PLU de Paris » | Pièces communiquées (`pieces-communiquees.md`) | `[À VÉRIFIER PAR L'EXPERT]` sur le Géoportail de l'urbanisme |
| Version du PLU applicable | Le PLU de Paris a été révisé (PLU bioclimatique) le **20 novembre 2024**, soit **après la date de valeur** (14/10/2024). | Information transmise par l'orchestrateur, non consultée en ligne | `[À VÉRIFIER PAR L'EXPERT]` : préciser si la zone « UP » relève du PLU en vigueur à la date de valeur ou du PLU révisé, et retenir le zonage applicable au 14/10/2024 |
| Risques naturels et technologiques | Aucune | — | `[À VÉRIFIER PAR L'EXPERT]` sur Géorisques |
| État des risques (ERP) | Non communiqué | Fiche mission | `[À VÉRIFIER PAR L'EXPERT]` (à demander au notaire) |
| Servitudes | « Aucune portée à la connaissance de l'expert » | Pièces communiquées | À confirmer par l'expert |

---

## 4. Éléments pour l'analyse forces / faiblesses / opportunités / risques

*Faits du dossier uniquement (Charte, ch. 10.2), sans pondération chiffrée. Les appréciations de valeur seront formulées par l'expert en S7.*

**Forces**
- Rue résidentielle calme, aucune nuisance constatée (notes de visite).
- Métro Ledru-Rollin (L8) à 6 min à pied, Bastille (L1, 5, 8) à 8 min ; commerces rue de la Roquette à environ 200 m (notes de visite).
- Immeuble de rapport de 1932 en pierre de taille, parties communes en bon entretien, hall et ferronneries d'origine (notes de visite).
- Parquet chêne ancien en bon état, moulures au plafond du séjour, double vitrage récent côté rue (séjour, chambre 1) (notes de visite).
- Cave en sous-sol ; chauffage individuel gaz en fonctionnement (notes de visite).
- Aucun désordre structurel constaté ; aucuns travaux votés en AG 2022 et 2023 (notes de visite, PV d'AG).
- Bien libre (notes de visite).

**Faiblesses**
- 3e étage sans ascenseur (notes de visite).
- Salle de bains à remettre entièrement en état : robinetterie hors service, carrelage décollé, aucune VMC, fenêtre obturée (estimation indicative de l'expert : 8 000 à 14 000 €).
- Cuisine de 5 m² aux équipements vétustes, sans hotte (5 000 à 9 000 €, estimation indicative de l'expert).
- Simple vitrage d'origine en chambre 2 et cuisine (2 000 à 3 500 €, estimation indicative de l'expert).
- DPE étiquette E (265 kWh/m²/an), GES E (DPE communiqué).
- Charges de copropriété de 2 200 €/an (relevé de charges).

**Opportunités**
- Dans l'échantillon, les biens rénovés se sont vendus entre 9 500 et 9 614 €/m², au-dessus du segment courant (tableau DVF, état qualifié par l'expert) : les travaux identifiés à la visite portent sur des postes localisés (salle de bains, cuisine, deux fenêtres).
- Bien libre, disponible immédiatement pour une vente dans le cadre du règlement de la succession.
- Petite copropriété (12 lots) sans travaux votés en 2022 et 2023 (PV d'AG).

**Risques**
- Étiquette E : calendrier d'interdiction progressive de mise en location des logements les plus énergivores (loi Climat et résilience du 22 août 2021) — `[À CONFIRMER PAR L'EXPERT]` (date d'échéance applicable à l'étiquette E).
- PV d'AG 2024 non communiqué : travaux éventuellement votés depuis 2023 inconnus ; fiche synthétique et pré-état daté non communiqués (fonds de travaux, impayés).
- Diagnostics non communiqués : électricité, gaz (installation de plus de 15 ans), plomb (immeuble antérieur à 1949), état des risques.
- Surface : 68 m² retenus par l'expert, sans certificat de mesurage loi Carrez ; la somme des pièces relevées dans les notes est de 57 m².
- Zonage PLU à confirmer, le PLU de Paris ayant été révisé le 20 novembre 2024, après la date de valeur.
- État hypothécaire non communiqué.
- Indivision successorale (les quotes-parts ne font pas l'objet de la mission).

---

## Points à trancher par l'expert

1. Source des colonnes « étage » et « ascenseur » du tableau (DVF ne les fournit pas).
2. Nombre de pièces des comparables (colonne absente).
3. Ventes éventuelles entre septembre et le 14 octobre 2024.
4. Zone PLU applicable à la date de valeur et consultation de Géorisques.
