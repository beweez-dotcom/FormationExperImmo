# État d'avancement

Dernière mise à jour : 2026-10-26 (nuit)

## Où on en est

Le squelette du projet est créé : mémoire, 5 agents, 6 skills, dossiers. Agents et skills fondés sur le cours de Rob'r, la Charte 6e édition et 3 rapports réels. Chaîne en deux phases avec arbitrage de l'expert. Premier essai complet réussi sur le cas rue Keller (26/10).

## Les phases

| Phase | Statut |
|---|---|
| 0. Squelette du projet | Fait |
| 1. Cadrage métier : analyser les 3 rapports, établir le plan type et ses variantes | Fait (`sources/analyse-structures.md`) |
| 2. Compléter les agents et les skills avec le contenu réel | Fait : 5 agents et 6 skills fondés sur le cours, la Charte et les rapports réels |
| 3. Tester la chaîne sur un cas (amiable, T3 rue Keller) et comparer avec un rapport réel | Trois essais complets le 26/10 ; second essai avec les décisions de Rob'r : sorties dans `cas-tests/amiable-t3-keller/sorties/` |
| 4. Interface web de démonstration | À faire |
| 5. Script de démo, réponses aux objections, vidéo de secours | À faire |
| 6. Offre commerciale (pilote avec 2 ou 3 experts) | À faire |

## Prochaines étapes

1. Rob'r relit `cas-tests/amiable-t3-keller/sorties/projet-rapport.md` et `controle.md`.
2. Préparer le script de démo autour des points bloquants (écart de prix, réserves, surface, double comptage) ; retirer la note interne avant de projeter le rapport.
3. Profil d'expert de démonstration créé ; à remplacer par celui d'un expert pilote réel.
4. Ensuite : interface web de démonstration (phase 4) et script de démo (phase 5).

## Fait

- Sauvegarde GitHub en place (dépôt privé beweez-dotcom/FormationExperImmo).
- 3 rapports anonymisés dans `sources/rapports-anonymises/` (PDF + .md), avec `CONTROLE-ANONYMISATION.md`. Originaux retirés du dossier.
- Analyse des structures : `sources/analyse-structures.md`.
- Cours, bibliothèques de prompts et Charte 6e édition intégrés aux agents et skills.
- Notes sur les supports du cours : `sources/notes-sur-le-cours.md`.

## Questions ouvertes

- Les 3 rapports couvrent : valeur vénale (financement), valeur locative commerciale (bail), valeur vénale (succession). Aucun cas « divorce » ni « judiciaire » pour l'instant.
- Les deux experts ont le même fond mais une forme différente (voix, ordre, textes généraux) → profil d'expert à concevoir.
- Faut-il renommer « Avis de valeur » en « Conclusion — valeur vénale » (et adapter la mention RGPD amiable) ?
