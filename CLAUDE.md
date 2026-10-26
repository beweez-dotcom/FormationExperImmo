# FormationExperImmo — Équipe d'agents IA pour l'expertise immobilière

Ce fichier est la mémoire principale du projet. Claude Code le lit au début de chaque séance.

## Le projet en une phrase

Une équipe d'agents qui prépare le projet de rapport d'expertise immobilière à partir de la lettre de mission et des notes de visite de l'expert. L'expert relit, fixe la valeur et signe.

## Qui pilote

- **Rob'r**, product owner. Graphiste de formation, non développeur. Il donne la vision et valide ; Claude fait tout le travail technique.
- Toujours lui expliquer les choses simplement, en français, sans jargon. Un terme technique indispensable est expliqué en une phrase.
- Avant une décision importante ou difficile à défaire, lui demander son avis.

## D'où vient le projet

- Formation « L'IA et l'expertise immobilière » (7 h, 6 modules) créée par Rob'r : panorama IA, description de biens, données de marché, structuration du rapport, atelier pratique, déontologie.
- Deux cas d'atelier : **amiable** (T3 rue Keller, Paris 11e, succession, notaire) et **judiciaire** (T4, Lyon 6e).
- Deux bibliothèques de prompts (amiable et judiciaire), 8 sections chacune : elles sont la matière première des skills.
- Référentiel : **Charte de l'expertise en évaluation immobilière, 6e édition (novembre 2025)**.

## Objectif immédiat

Une démonstration live devant les adhérents d'associations d'experts immobiliers, pour les convaincre. Cible principale : experts **non judiciaires** (amiable, succession, divorce, vente, refinancement). Le judiciaire viendra ensuite.

## Règles d'or (non négociables)

1. **« L'IA rédige. L'expert signe. »** Aucun agent ne choisit les comparables retenus, les ajustements, le prix unitaire ou l'arrondi : l'expert les arrête dans `arbitrage-expert.md`, entre les deux phases de la chaîne. Les agents mettent en forme et calculent, ils ne décident pas.
2. **Aucun chiffre inventé.** Toute donnée de marché, de surface ou de réglementation cite sa source et sa date. Sinon : `[DONNÉE MANQUANTE — à fournir par l'expert]`.
3. **Données anonymisées uniquement** dans ce dossier (pas de noms de clients ou d'héritiers, pas d'adresse exacte, pas de références cadastrales réelles). Le dossier est synchronisé avec MEGA.
4. **Transparence** : le rapport mentionne l'usage d'outils d'IA et le traitement des données (RGPD).
5. **Écrire comme un expert**, pas comme une IA (voir la skill `style-redactionnel`).

## L'équipe métier (dans `.claude/agents/`)

La chaîne suit le rapport en 8 sections de la formation, en **deux phases** :

| Phase | Agent | Rôle | Produit |
|---|---|---|---|
| 1 | `mission` | Pose le contexte, identifie la mission, prépare le formulaire d'arbitrage | `fiche-mission.md`, `arbitrage-expert.md` |
| 1 | `collecte` | Calcule les statistiques du tableau de comparables fourni, données publiques | `collecte.md` (S6) |
| 1 | `visite` | Transforme les notes brutes en S2, S4, S5 | `description.md` |
| 1 | `redacteur` | Assemble page de garde, S1 à S6, mentions et clauses | `projet-rapport.md` |
| — | **l'expert** | **Remplit l'arbitrage : comparables, ajustements, prix unitaire, arrondi** | `arbitrage-expert.md` |
| 2 | `redacteur` | Vérifie l'arbitrage et rédige S7 et S8 | `projet-rapport.md` |
| 2 | `controleur` | Recalcule tout, vérifie Charte, cohérence et registre | `controle.md` |

`collecte` et `visite` travaillent en parallèle. Le `controleur` peut aussi contrôler un rapport rédigé par un tiers (mission prévue par la Charte, Titre II ch. 6).

## Les skills (dans `.claude/skills/`)

- `chaine-rapport` : la chaîne en deux phases (le chef d'orchestre).
- `plan-rapport` : les 8 sections de la formation + le cadre obligatoire de la Charte (ch. 10.2) + les modules par mission.
- `charte-expertise` : complétude Charte, recalculs, cohérence, les 4 contrôles de relecture de la formation.
- `style-redactionnel` : première personne, registre amiable ou judiciaire, formules prudentes, formules à bannir.
- `donnees-marche` : DVF et autres sources, nettoyage, calculs avant rédaction.
- `deontologie-rgpd` : anonymisation, Charte ch. 6, **mentions IA/RGPD standard à insérer telles quelles**.

La Charte (PDF dans `sources/formation/`) est protégée : usage interne uniquement, jamais recopiée ni diffusée, jamais envoyée sur GitHub.

## Organisation des dossiers

- `memoire/` : journal des décisions et état d'avancement.
- `sources/rapports-anonymises/` : rapports réels anonymisés, servant de modèles.
- `sources/formation/` : bibliothèques de prompts et supports de la formation.
- `cas-tests/` : un dossier par cas. Chaque cas a `entrees/` (ce que l'expert fournit) et `sorties/` (ce que les agents produisent). Copier `_modele-dossier/` pour en créer un.
- `app/` : l'interface web de démonstration (plus tard).

## Mémoire : à faire à chaque séance

- **Au début** : lire `memoire/etat-avancement.md`.
- **À la fin** : mettre à jour `memoire/etat-avancement.md`, et ajouter au `memoire/journal-decisions.md` toute décision prise (date, décision, raison).
