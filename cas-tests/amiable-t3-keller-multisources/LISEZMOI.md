# Cas de test — T3 rue Keller, comparables de sources multiples

Même dossier que `amiable-t3-keller`, mais l'expert a déposé ses comparables **tels quels, sans mise en forme**, dans `entrees/comparables/`. Toutes les données sont fictives.

| Fichier déposé | Ce qu'il contient | Piège prévu |
|---|---|---|
| `dvf-etalab-export-11e.csv` | 14 ventes au format d'export DVF | une vente de 2022, une maison, une vente postérieure à la date de valeur, une vente atypique (4 393 €/m²) |
| `extrait-base-notariale.csv` | 4 ventes avec état, étage, ascenseur, DPE | 2 ventes déjà présentes dans DVF ; un état « bon » là où l'expert disait « courant » |
| `annonces-relevees.md` | 4 annonces relevées en texte | prix demandés, pas des ventes ; une annonce relevée en 2026 ; une annonce qui a abouti à une vente |
| `capture-annonce-saint-ambroise.png` | 1 annonce en capture d'écran | à lire sur l'image |
| `export-tableur.csv` | 4 lignes d'origine inconnue, colonnes abrégées | nature du prix inconnue ; une ligne sans surface ; une ligne qui reprend une vente DVF |

## Résultats de l'essai du 27/10/2026 (phase 1 : agents Mission puis Collecte)
- 27 références ramenées au tableau commun `sorties/comparables-unifies.csv` : 18 ventes, 5 annonces, 4 de source inconnue.
- 4 doublons probables détectés (C-01/C-15, C-06/C-16, C-10/X-01, A-01/C-14), proposés à l'expert, rien n'est fusionné.
- Exclus des statistiques provisoires : vente de 2022, maison, vente postérieure, doublons, annonce relevée en 2026, source inconnue.
- **Ventes** : 13 références, médiane 9 250 €/m² ; **annonces** à part : 4 références, médiane 10 488 €/m² (+13,38 %, simple constat). Chiffres vérifiés par un calcul indépendant.
- Le formulaire d'arbitrage contient le tableau de sélection (colonnes « Retenu » et « Motif » vides) et les questions à trancher.

La phase 2 n'a pas été jouée : elle suppose que l'expert remplisse la sélection.
