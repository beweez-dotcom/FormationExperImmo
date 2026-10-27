# Journal des décisions

Une ligne par décision : la date, ce qui a été décidé, et pourquoi.

## 2026-10-26 — Lancement du projet

- **Équipe de 5 agents métier** (mission, collecte, visite, rédacteur, contrôleur). Pourquoi : chaque rôle est simple à expliquer en démo, et chacun correspond à une étape réelle du travail de l'expert.
- **Aucun agent ne fixe la valeur.** Pourquoi : responsabilité et signature de l'expert ; c'est aussi le premier argument rassurant de la démo.
- **On commence par le cas amiable** (T3 rue Keller, succession). Pourquoi : c'est la cible principale et le plus gros volume ; le judiciaire, plus formel, viendra en second.
- **Matière de départ : 3 rapports réels anonymisés de 2 experts différents.** Pourquoi : distinguer ce qui relève de la Charte (tronc commun) de ce qui relève du style personnel de chaque expert.
- **Deux temps** : d'abord mettre au point la chaîne d'agents, ensuite l'habiller d'une interface web (hébergée sur Vercel) qui montre les agents travailler. Une vidéo enregistrée servira de secours.
- **Emplacement du projet** : `D:\Archives\ClaudeProjects\FormationExperImmo`, dans le dossier parent où Rob'r centralise tous ses projets Claude.
- **Sauvegarde et historique** : sur GitHub (à mettre en place).

## 2026-10-26 — Anonymisation des 3 rapports

- **Chaque rapport existe en deux versions anonymisées** : un PDF (lecture humaine) et un fichier .md (matière pour les agents). Pourquoi : les agents travaillent mieux sur du texte, Rob'r garde la mise en page.
- **Caviardage réel** (texte supprimé, propriétés du fichier vidées, filigrane retiré), jamais un simple cache. Pourquoi : les originaux contenaient de faux caviardages, lisibles par copier-coller.
- **Le rapport « hôtel » (expert 2, valeur locative) ne sera pas projeté en démo publique.** Pourquoi : le bien reste reconnaissable localement, même anonymisé.
- **Les originaux sortent du dossier ClaudeProjects** (synchronisé avec MEGA) et ne vont jamais sur GitHub.

## 2026-10-26 — Analyse des structures

- **Plan type = tronc commun de 14 sections + modules par type** (financement, succession, bail commercial). Pourquoi : les 3 rapports partagent le même contenu obligatoire, mais le type d'expertise ajoute des blocs entiers (le bail commercial suit le Code de commerce).
- **Prévoir un « profil d'expert »** (voix « je » ou impersonnelle, synthèse en tête ou non, textes généraux repris tels quels). Pourquoi : les deux experts ont le même fond mais une forme très différente.
- **Le Contrôleur recalcule** (accès au calcul autorisé), il ne se contente pas de relire. Pourquoi : sur 3 rapports réels, une dizaine d'incohérences chiffrées, dont une valeur finale non justifiée par le calcul annoncé.
- **Argument central de la démo** : « sur 3 rapports réels, voici ce que l'agent Contrôleur aurait relevé » (anonymisé, sans jamais nommer ni viser les experts).

## 2026-10-26 — Intégration du cours et de la Charte

- **Le plan suit les 8 sections de la formation**, entourées du cadre obligatoire de la Charte (ch. 10.2). Pourquoi : c'est la méthode que Rob'r enseigne ; la Charte ajoute les déclarations, clauses et réserves que les 8 sections ne couvrent pas.
- **Chaîne en deux phases avec un formulaire d'arbitrage** rempli par l'expert (comparables, ajustements, prix unitaire, arrondi). Pourquoi : la formation pose que ces décisions ne sont pas délégables ; la Charte (ch. 6) exige le contrôle de l'expert. Remplace l'ancienne règle « conclusion laissée vide ».
- **Les mentions IA/RGPD sont insérées telles quelles**, jamais rédigées par un agent. Pourquoi : consigne du document « Conformité de la formation à la charte ».
- **La Charte reste hors de GitHub** et n'est jamais recopiée. Pourquoi : elle interdit sa reproduction (Titre I, 5.1).
- **Cas de démo T3 rue Keller** créé avec des données harmonisées (libre, 14/10/2024). L'arbitrage de la formation contient un écart (−8 % ne donne pas 8 820 €/m²) : à trancher par Rob'r.

## 2026-10-26 — Premier essai complet de la chaîne (cas rue Keller)

- **Arbitrage de la démo : Rob'r garde ses ajustements (−8 %) ET 600 000 € (8 820 €/m²)**, donc l'écart reste volontairement. Pourquoi : montrer en direct que l'équipe le détecte. Décision prise en conversation le 26/10/2026.
- **Résultat** : le Rédacteur a refusé d'écrire S7/S8 tant que l'expert n'avait pas confirmé (garde-fou validé), puis le Contrôleur a classé l'écart en point bloquant. Le Contrôleur relève aussi que la confirmation de l'expert n'est tracée nulle part dans le dossier : à l'avenir, l'expert la note dans `arbitrage-expert.md`.
- **Nouvelle anomalie trouvée par l'agent Mission** : la somme des pièces des notes de visite fait 57 m², pour 68 m² annoncés (cours). À trancher par Rob'r.

## 2026-10-26 — Décisions de Rob'r sur le cas rue Keller (second essai)

- Surface retenue : **68 m²** (somme des pièces relevées : 57 m² ; certificat Carrez à produire).
- État général : **courant**.
- Cuisine et DPE E : **pas d'ajustement propre**.
- Mention IA/RGPD amiable : **« rapport d'expertise »** au lieu de « avis de valeur » (skill `deontologie-rgpd` mise à jour).
- Conclusion : **« Aucune réserve particulière » maintenu**.
- Écart 8 533 / 8 820 €/m² : confirmation écrite de l'expert ajoutée dans `entrees/arbitrage-expert.md` ; le Rédacteur l'accepte désormais (exception ajoutée à sa règle).
- Second essai : chaîne complète sans intervention ; le Contrôleur relève 3 bloquants, 11 à corriger, 11 suggestions, 26 espaces réservés.

## 2026-10-26 — Troisième essai (cas rue Keller)

- Notes de visite complétées par Rob'r : « parquet chêne ancien, bon état, toutes pièces » (les agents l'appliquent aux pièces sèches, cuisine et SDB étant carrelées).
- Date du rapport : 26 octobre 2026 (choix de Rob'r ; la date de valeur reste le 14/10/2024).
- **Profil d'expert de démonstration** (`entrees/profil-expert.md`) : identité fictive, sans coordonnées ni numéros ; textes standard (déclarations, clauses, réserves) rédigés à partir de la Charte et des pratiques observées, sans copie. À remplacer par les textes d'un expert réel.
- Résultat : 3 bloquants, 11 à corriger, 10 suggestions, 12 espaces réservés. Nouveau point du Contrôleur : 8 820 €/m² place le bien sous toutes les ventes « courantes », risque de double comptage des ajustements sur une médiane qui inclut déjà des biens vétustes et sans ascenseur.

## 2026-10-26 — Interface de démonstration (v1)

- Page web « Expertise augmentée » publiée (privée) : chaîne d'agents en deux phases, documents réels de l'essai, arbitrage de l'expert modifiable en direct, S7/S8 et contrôle recalculés dans la page. Pourquoi : montrer aux experts que la décision leur reste, et que chaque modification est vérifiée instantanément. La page dit clairement qu'elle rejoue l'essai (pas d'agents en direct dans le navigateur).

## 2026-10-26 — Script de démonstration

- Script de 20 minutes (+ 10 à 15 min de questions) rédigé dans un document partageable : préparation, déroulé minute par minute sur la page « Expertise augmentée », trois temps forts mot pour mot, réponses aux objections, ce qu'il ne faut pas promettre, conclusion et proposition de pilote. Pourquoi : la démo repose sur trois moments (l'expert décide, le Rédacteur refuse d'écrire, le Contrôleur trouve 3 bloquants) qu'il faut dire sans improviser.
- Correction en direct proposée : cocher la réserve puis aligner le prix sur le calcul (8 533 €/m², 580 000 €). À valider par Rob'r. Le prix du pilote reste à compléter par Rob'r.

## 2026-10-27 — Vidéo de secours

- Vidéo de 4 min 25 (1920 × 1080, sous-titrée, sans son) enregistrée automatiquement sur la page « Expertise augmentée », en suivant le script. Pourquoi : pouvoir faire la démo même sans réseau, et laisser Rob'r commenter à voix haute. Conservée sur le disque, pas sur GitHub (trop lourde) ; le programme d'enregistrement est dans `app/video/` pour la refaire.
- Correction de la page : après le blocage du Rédacteur, le bouton « Valider l'arbitrage » restait grisé ; il est de nouveau actif, ce qui permet le temps fort n° 2 du script (bloquer puis maintenir).
