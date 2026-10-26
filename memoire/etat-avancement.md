# État d'avancement

Dernière mise à jour : 2026-10-26 (fin de soirée)

## Où on en est

Le squelette du projet est créé : mémoire, 5 agents, 6 skills, dossiers. Le plan type, la check-list et le style sont désormais fondés sur 3 rapports réels. Les agents collecte, visite et redacteur restent en version provisoire.

## Les phases

| Phase | Statut |
|---|---|
| 0. Squelette du projet | Fait |
| 1. Cadrage métier : analyser les 3 rapports, établir le plan type et ses variantes | Fait (`sources/analyse-structures.md`) |
| 2. Compléter les agents et les skills avec le contenu réel | En cours : plan-rapport, charte-expertise, style-redactionnel, mission et controleur mis à jour |
| 3. Tester la chaîne sur un cas (amiable, T3 rue Keller) et comparer avec un rapport réel | À faire |
| 4. Interface web de démonstration | À faire |
| 5. Script de démo, réponses aux objections, vidéo de secours | À faire |
| 6. Offre commerciale (pilote avec 2 ou 3 experts) | À faire |

## Prochaines étapes

1. Rob'r dépose ses deux bibliothèques de prompts dans `sources/formation/` (et, si possible, le texte de la Charte 6e édition).
2. Croiser les bibliothèques de prompts avec le plan type ; compléter les agents collecte, visite et redacteur.
3. Préparer le cas de démo (amiable, T3 rue Keller, succession) : lettre de mission et notes de visite fictives dans `cas-tests/`.
4. Premier test de la chaîne complète.

## Fait

- Sauvegarde GitHub en place (dépôt privé beweez-dotcom/FormationExperImmo).
- 3 rapports anonymisés dans `sources/rapports-anonymises/` (PDF + .md), avec `CONTROLE-ANONYMISATION.md`. Originaux retirés du dossier.
- Analyse des structures : `sources/analyse-structures.md`.

## Questions ouvertes

- Les 3 rapports couvrent : valeur vénale (financement), valeur locative commerciale (bail), valeur vénale (succession). Aucun cas « divorce » ni « judiciaire » pour l'instant.
- Les deux experts ont le même fond mais une forme différente (voix, ordre, textes généraux) → profil d'expert à concevoir.
- Texte officiel de la Charte 6e édition non disponible : la check-list reste à confronter.
