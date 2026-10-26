---
name: plan-rapport
description: Plan type du rapport d'expertise immobilière, avec le tronc commun et les variantes selon le type d'expertise (vénale, succession, divorce, refinancement, locative, judiciaire). À utiliser pour choisir et suivre la structure d'un rapport.
---

# Plan type du rapport d'expertise

> **PROVISOIRE.** Ce plan est un point de départ général. Il sera remplacé par le plan tiré de l'analyse des 3 rapports réels (`sources/rapports-anonymises/`) et des bibliothèques de prompts de la formation (`sources/formation/`).

## Tronc commun (toutes expertises)

1. **Page de garde** : objet, bien (ville, quartier), date du rapport, expert.
2. **Mission** : mandant, objet de l'expertise, valeur recherchée, date de valeur, date de visite, documents remis.
3. **Situation et environnement** : localisation, desserte, environnement.
4. **Description du bien** : immeuble, lot, distribution, surfaces, prestations, état.
5. **Situation juridique et locative** : régime (copropriété…), occupation, servitudes, urbanisme.
6. **Analyse du marché** : marché local, ventes comparables.
7. **Évaluation** : méthodes retenues, justification, calculs.
8. **Conclusion** : valeur retenue → `[VALEUR À DÉTERMINER PAR L'EXPERT]`.
9. **Réserves, limites et mentions** : limites de la mission, indépendance, usage de l'IA, RGPD.
10. **Annexes** : photos, plans, comparables détaillés, pièces.

## Variantes selon le type d'expertise

| Type | Ce qui change (à confirmer) |
|---|---|
| Succession | Date de valeur = date du décès ; destinataire souvent le notaire. |
| Divorce / liquidation | Date de valeur proche du partage ; neutralité vis-à-vis des deux parties. |
| Refinancement / garantie | Attentes spécifiques de la banque ; valeur de garantie possible. |
| Valeur locative | Analyse des loyers comparables au lieu des ventes. |
| Judiciaire | Forme imposée par la mission du juge, contradictoire, dires des parties (module 2). |

## À compléter après analyse des rapports

- Ordre réel des sections chez chacun des 2 experts.
- Sections présentes chez l'un et pas chez l'autre.
- Longueur habituelle de chaque section.
