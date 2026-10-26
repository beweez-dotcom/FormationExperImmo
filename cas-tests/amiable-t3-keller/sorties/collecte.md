# Collecte — T3 rue Keller, Paris 11e

*Produit par l'agent Collecte le 26 octobre 2026, à partir de `entrees/comparables-dvf.csv`, `entrees/pieces-communiquees.md`, `entrees/notes-visite.md` et `sorties/fiche-mission.md`. Tous les calculs ont été faits en Python (script de calcul, aucun calcul mental). Aucun comparable n'est écarté, aucun ajustement, prix unitaire ni valeur n'est proposé : ces choix reviennent à l'expert (`arbitrage-expert.md`).*

---

## 1. Calculs de marché

### 1.1 Tableau des comparables (tel que fourni, prix/m² recalculé)

Source : DVF Etalab, export fourni par l'expert. Période : janvier à août 2024 (date de valeur : 14 octobre 2024). Colonne « état » : qualification de l'expert (mention portée dans le fichier).

| Réf. | Date | Adresse approximative | Surface (m²) | Prix (€) | Prix/m² fourni | Prix/m² recalculé | Étage | État (expert) |
|---|---|---|---|---|---|---|---|---|
| C-01 | 02/2024 | Rue de la Roquette | 64 | 582 400 | 9 100 | 9 100,00 | 2e | Courant |
| C-02 | 03/2024 | Avenue Ledru-Rollin | 71 | 682 560 | 9 614 | 9 613,52 | 4e asc. | Rénové |
| C-03 | 01/2024 | Rue de la Folie-Méricourt | 58 | 513 220 | 8 849 | 8 848,62 | 1er | Courant |
| C-04 | 04/2024 | Rue Oberkampf | 75 | 712 500 | 9 500 | 9 500,00 | 3e asc. | Rénové |
| C-05 | 01/2024 | Rue Saint-Maur | 62 | 544 380 | 8 780 | 8 780,32 | 3e | Vétuste |
| C-06 | 05/2024 | Rue de Charonne | 69 | 641 640 | 9 300 | 9 299,13 | 2e | Courant |
| C-07 | 06/2024 | Boulevard Voltaire | 80 | 764 000 | 9 550 | 9 550,00 | 5e asc. | Rénové |
| C-08 | 02/2024 | Rue Keller | 55 | 479 600 | 8 720 | 8 720,00 | 2e | Vétuste |
| C-09 | 07/2024 | Rue de la Croix-Faubin | 67 | 619 750 | 9 250 | 9 250,00 | 3e | Courant |
| C-10 | 08/2024 | Rue Sedaine | 73 | 694 750 | 9 517 | 9 517,12 | 4e asc. | Courant |

### 1.2 Contrôle des prix/m² fournis

Prix/m² recalculé = prix total ÷ surface.

| Réf. | Fourni | Recalculé | Écart (€/m²) |
|---|---|---|---|
| C-02 | 9 614 | 9 613,52 | −0,48 |
| C-03 | 8 849 | 8 848,62 | −0,38 |
| C-05 | 8 780 | 8 780,32 | +0,32 |
| C-06 | 9 300 | 9 299,13 | −0,87 |
| C-10 | 9 517 | 9 517,12 | +0,12 |
| Autres (C-01, C-04, C-07, C-08, C-09) | — | identiques | 0 |

**Conclusion** : les écarts sont tous inférieurs à 1 €/m² (au plus 0,01 %). Ils viennent de l'arrondi à l'euro de la colonne fournie. **Aucune erreur de calcul** dans le tableau.

### 1.3 Statistiques (sur les 10 références, prix/m² recalculés)

| Indicateur | Résultat | Détail du calcul |
|---|---|---|
| Nombre de références | 10 | — |
| Minimum | 8 720 €/m² | C-08 |
| Maximum | 9 614 €/m² (9 613,52) | C-02 |
| Écart max − min | 894 €/m² (893,52) | soit **10,2 %** du minimum |
| Moyenne arithmétique | **9 218 €/m²** (9 217,87) | somme des 10 prix/m² ÷ 10 |
| Moyenne pondérée par la surface | **9 250 €/m²** (9 250,45) | Σ prix 6 234 800 € ÷ Σ surfaces 674 m² |
| Médiane | **9 275 €/m²** (9 274,57) | voir ci-dessous |

**Détail de la médiane** (n = 10, pair). Valeurs triées : 8 720,00 – 8 780,32 – 8 848,62 – 9 100,00 – **9 250,00** – **9 299,13** – 9 500,00 – 9 517,12 – 9 550,00 – 9 613,52. Médiane = (9 250,00 + 9 299,13) ÷ 2 = 9 274,57, arrondie à 9 275 €/m². Sur la colonne fournie, la médiane est 9 275 €/m² : identique à l'arrondi près. Elle correspond à la base de 9 275 €/m² reprise dans l'arbitrage.

La moyenne pondérée dépasse la moyenne arithmétique de 33 €/m² : les plus grandes surfaces (C-07, C-04, C-10) se sont vendues plus cher au m².

### 1.4 Filtre des aberrations (60 % – 140 % de la médiane)

Bornes : 0,60 × 9 274,57 = **5 565 €/m²** ; 1,40 × 9 274,57 = **12 984 €/m²**.
**Aucune référence hors bornes.** Toutes les ventes restent dans le tableau ; aucune n'est écartée.

### 1.5 Segmentation

**Par état** (colonne sourcée : « qualification de l'expert ») :

| État | Réf. | n | Fourchette (€/m²) | Moyenne | Médiane | Moy. pondérée |
|---|---|---|---|---|---|---|
| Vétuste | C-05, C-08 | 2 | 8 720 – 8 780 | 8 750 | 8 750 | 8 752 |
| Courant | C-01, C-03, C-06, C-09, C-10 | 5 | 8 849 – 9 517 | 9 203 | 9 250 | 9 220 |
| Rénové | C-02, C-04, C-07 | 3 | 9 500 – 9 614 | 9 555 | 9 550 | 9 553 |

Les trois groupes se suivent sans chevauchement. Les effectifs sont faibles (2 et 3 ventes) : les moyennes par état sont indicatives.

**Par ascenseur** (lu dans la colonne « étage ») :

| | Réf. | n | Moyenne | Médiane |
|---|---|---|---|---|
| Avec ascenseur | C-02, C-04, C-07, C-10 | 4 | 9 545 | 9 534 |
| Sans mention d'ascenseur | C-01, C-03, C-05, C-06, C-08, C-09 | 6 | 9 000 | 8 974 |

Attention : ascenseur et état « rénové » vont ensemble (les 3 ventes rénovées sont avec ascenseur). L'effet propre de l'ascenseur ne peut pas être isolé sur 10 ventes. Pour information, les 4 ventes « courant » sans ascenseur (C-01, C-03, C-06, C-09) ont une moyenne de 9 124 €/m².

**Point de source** : DVF ne donne ni l'étage ni l'ascenseur. Le fichier n'indique la source que pour l'état. **Source de la colonne « étage » à préciser par l'expert.** L'absence de la mention « asc » ne prouve pas l'absence d'ascenseur.

### 1.6 Tendance chronologique

| Période | Ventes | Moyenne (€/m²) |
|---|---|---|
| Janvier – avril 2024 | C-03, C-05, C-01, C-08, C-02, C-04 (6) | 9 094 |
| Mai – août 2024 | C-06, C-07, C-09, C-10 (4) | 9 404 |

Droite de tendance (moindres carrés, prix/m² selon le mois) : +93 €/m² par mois. **Ce chiffre n'est pas une hausse du marché** : les deux ventes vétustes datent de janvier et février, et 3 des 4 ventes de mai à août sont avec ascenseur ou rénovées. Le tableau ne permet pas de séparer l'évolution du marché de l'effet de composition. Aucune vente n'est postérieure à août 2024 (date de valeur : 14 octobre 2024).

### 1.7 Comparables les plus proches (critères objectifs, sans choix)

Bien : 68 m², 3e étage, sans ascenseur (état global non encore qualifié par l'expert).

| Critère | Référence(s) |
|---|---|
| Surface la plus proche | C-06 (69 m², écart 1) et C-09 (67 m², écart 1) |
| Même étage, sans ascenseur | C-05 (3e, vétuste) et C-09 (3e, courant) |
| Même rue | C-08 (rue Keller, 55 m², 2e, vétuste) |
| Surface + étage + absence d'ascenseur | **C-09** (67 m², 3e, juillet 2024, 9 250 €/m²) |

Le choix entre C-09 (état courant) et C-05 / C-08 (état vétuste) dépend de la qualification de l'état du bien, que l'expert arrête en S5.

### 1.8 Limites du tableau à signaler à l'expert

1. **Nature de la surface** : la colonne « surface_m2 » ne dit pas s'il s'agit de la surface Carrez ou de la surface réelle bâtie DVF. La surface du bien (68 m²) n'est pas non plus sourcée (somme des pièces : 57 m², voir fiche mission). Comparer des surfaces de nature différente fausse le prix/m².
2. **Nombre de pièces** absent : le filtre « T3 ± 1 pièce » de la méthode n'est pas vérifiable.
3. **Annexes** (cave, parking) non indiquées : DVF peut inclure une cave ou un parking dans le prix du lot.
4. Effectif de 10 ventes : bas de la cible de la formation (10 à 15).

---

## 2. Projet de section 6 — Analyse du marché

> **6. Analyse du marché**
>
> J'ai étudié les ventes d'appartements intervenues dans le 11e arrondissement de Paris, à proximité du bien, entre janvier et août 2024. Les références sont issues de la base DVF (Etalab) ; l'état de chaque bien vendu relève de ma propre qualification. J'ai retenu dix ventes d'une surface comprise entre 55 et 80 m², dont une dans la rue Keller.
>
> Les prix observés s'échelonnent de 8 720 €/m² à 9 614 €/m², soit un écart de 10,2 %. La moyenne arithmétique s'établit à 9 218 €/m², la moyenne pondérée par la surface à 9 250 €/m² et la médiane à 9 275 €/m². Aucune vente ne s'écarte de plus de 40 % de la médiane. Les prix suivent l'état des biens : 8 720 à 8 780 €/m² pour les deux appartements vétustes, 8 849 à 9 517 €/m² pour les cinq en état courant, 9 500 à 9 614 €/m² pour les trois rénovés. Les quatre ventes avec ascenseur se situent toutes à 9 500 €/m² ou au-delà.
>
> Le bien est situé au 3e étage, sans ascenseur ; j'ai relevé lors de ma visite une salle de bains qui nécessite une remise en état complète et une cuisine aux équipements vétustes. Ces caractéristiques le rapprochent des références sans ascenseur, dont les prix se situent entre 8 720 et 9 300 €/m², dans la moitié basse de la fourchette. Ces éléments sont pris en compte dans les ajustements de la section suivante.

*(240 mots environ. Chiffres repris exactement des calculs ci-dessus. À ajuster par l'expert si la source de la colonne « étage » ou la nature des surfaces change.)*

---

## 3. Données publiques

Tentative de consultation le **26 octobre 2026** : l'accès à Géoportail de l'urbanisme (geoportail-urbanisme.gouv.fr, API Carto apicarto.ign.fr), à Géorisques (georisques.gouv.fr) et à la Base adresse nationale a été **refusé** par le réseau de cette séance. Aucune donnée n'a pu être lue.

| Donnée | Résultat |
|---|---|
| Zone PLU | **[À VÉRIFIER PAR L'EXPERT]** — les pièces indiquent « UP — PLU de Paris ». Point d'attention : selon une source consultée le 26 octobre 2026 ([Choose Paris Region](https://chooseparisregion.org/news/paris-adopts-its-first-bioclimatic-local-urban-planning-program-plub)), le PLU bioclimatique de Paris a été approuvé le 20 novembre 2024, donc **après la date de valeur** (14 octobre 2024). Cette source cite une zone « UG » (urbaine générale) et pas de zone « UP ». Le document applicable à la date de valeur et la dénomination exacte de la zone sont à confirmer sur le Géoportail de l'urbanisme. |
| Risques naturels et technologiques | **[À VÉRIFIER PAR L'EXPERT]** — Géorisques inaccessible ; état des risques (ERP) non communiqué. |

---

## 4. Éléments pour l'analyse forces / faiblesses / opportunités / risques

Faits du dossier uniquement, sans pondération chiffrée. L'appréciation et la rédaction vont en section 7.

**Forces (faits constatés ou tirés des pièces)**
- Immeuble en pierre de taille de 1932, parties communes en bon entretien (visite).
- Parquet chêne ancien en bon état, moulures au séjour, double vitrage récent côté rue au séjour et à la chambre 1 (visite).
- Cave en sous-sol (visite).
- Rue résidentielle calme, aucune nuisance constatée ; métro Ledru-Rollin à 6 min, Bastille à 8 min ; commerces à environ 200 m (visite).
- Aucuns travaux votés en AG 2022-2023 ; aucune servitude connue ; amiante négatif (pièces).
- Bien libre (visite).

**Faiblesses**
- 3e étage sans ascenseur (visite) ; 4 des 10 comparables sont avec ascenseur.
- Salle de bains à remettre entièrement en état : robinetterie hors service, carrelage décollé, aucune VMC, fenêtre obturée (visite ; estimation expert 8 000 – 14 000 €).
- Cuisine aux équipements vétustes, sans hotte (visite ; 5 000 – 9 000 €).
- Simple vitrage d'origine en chambre 2 et cuisine (visite ; 2 000 – 3 500 €).
- DPE E (265 kWh/m²/an), GES E (pièces).
- Charges de 2 200 €/an (pièces).

**Opportunités**
- Une vente vétuste dans la même rue (C-08) et un écart observé entre ventes vétustes et rénovées dans le secteur (tableau DVF) : le marché local distingue l'état des biens.
- Surface de 68 m² au centre de la plage des ventes (55 à 80 m²).

**Risques**
- Classement DPE E : calendrier légal d'interdiction de mise en location des logements classés E, qui peut peser sur la clientèle d'investisseurs (date du DPE non communiquée).
- Surface non sourcée (68 m² annoncés, 57 m² pour la somme des pièces relevées) : risque d'erreur sur toute valeur au m².
- Pièces manquantes : PV d'AG 2024, état hypothécaire, diagnostics plomb, électricité, gaz et ERP, fiche synthétique de la copropriété.
- Zone PLU et risques non vérifiés (section 3).
