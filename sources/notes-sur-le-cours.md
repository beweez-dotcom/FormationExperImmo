# Points relevés dans les supports de la formation

*26 octobre 2026 — relevés en préparant les agents. À l'attention de Rob'r.*

## Erreurs de calcul dans le cas rue Keller
1. **Moyenne des 10 comparables** : les documents PROMPTS_LIVE_MODULE5BIS et BIBLIOTHEQUE_PROMPTS_AMIABLE indiquent « somme 91 800 — moyenne 9 180 €/m² ». La somme réelle est **92 180**, soit une moyenne de **9 218 €/m²**. La diapositive 55 donne le bon chiffre. La médiane (9 275) et les moyennes par état (8 750 / 9 203 / 9 555) sont justes.
2. **Ajustements et prix unitaire** : −3 −4 −2 +1 = −8 % appliqués à la médiane donnent 8 533 €/m², pas 8 820 €/m². La valeur de 600 000 € n'est donc pas justifiée par le calcul affiché. Le prompt 6 (« contrôle qualité ») conclut pourtant « cohérence confirmée » : il vérifie le produit 8 820 × 68, mais pas le passage de la médiane au prix unitaire. Voir `cas-tests/amiable-t3-keller/arbitrage-formation-A-VALIDER.md`.

## Incohérences entre supports
3. **Occupation** : « libre » dans les bibliothèques et le module 5 bis ; « occupé par les héritiers » sur les diapositives 152 et 153.
4. **Date de visite** : 14 octobre 2024 partout, sauf diapositive 37 (16 octobre 2026).
5. **Positionnement du bien** : « au centre de la fourchette, sans ajustement significatif » (diapositive 56) contre « partie basse des biens courants » et −8 % d'ajustements ailleurs.
6. **Période des comparables** : « janvier à octobre 2024 » dans STRUCTURE_RAPPORT_AMIABLE, « janvier à août 2024 » ailleurs.

## Conformité à la Charte
7. **Les 8 sections ne couvrent pas tout le chapitre 10.2 de la Charte.** Manquent notamment : les déclarations obligatoires (conflit d'intérêts, compétence, indépendance, personne ayant visité, conformité), les clauses de non-publication et d'utilisation (que le chapitre 1 cite expressément), les réserves sur les données invérifiables, l'analyse forces / faiblesses / opportunités / risques, la mention hors droits et le régime fiscal, la liste des annexes. Le document « Conformité de la formation à la charte » dit que la structure est « parfaitement alignée » : un expert attentif pourrait le contester. Les agents ajoutent ces éléments autour des 8 sections (skill `plan-rapport`).
8. **« Avis de valeur »** : pour la Charte (Titre II), l'avis de valeur est une estimation allégée qui exige une mention indiquant que ce n'est pas une expertise. Intituler « Avis de valeur » la conclusion d'une expertise avec visite crée une ambiguïté, de même que la mention RGPD amiable (« Le présent avis de valeur… »). Suggestion : « Conclusion — valeur vénale » et « Le présent rapport d'expertise ».
9. **Droits d'auteur de la Charte** : la Charte interdit sa reproduction et demande, quand on la cite, une mention de protection (Titre I, 5.1). Les citations courtes du module 6 sont raisonnables, mais il faut ajouter la mention et ne pas distribuer le PDF aux stagiaires.

## Forme
10. **Diapositives 164 à 192** : ce sont des diapositives d'un modèle graphique (« Future AI », équipe, tarifs, application mobile…) restées dans le fichier. Diapositive 7 : « Do not edit / How to change the design ».
