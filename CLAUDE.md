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

1. **Aucun agent ne fixe la valeur finale.** La conclusion reste un emplacement vide : `[VALEUR À DÉTERMINER PAR L'EXPERT]`. Les agents peuvent présenter les comparables et les calculs de méthode, jamais conclure.
2. **Aucun chiffre inventé.** Toute donnée de marché, de surface ou de réglementation cite sa source et sa date. Sinon : `[DONNÉE MANQUANTE — à fournir par l'expert]`.
3. **Données anonymisées uniquement** dans ce dossier (pas de noms de clients ou d'héritiers, pas d'adresse exacte, pas de références cadastrales réelles). Le dossier est synchronisé avec MEGA.
4. **Transparence** : le rapport mentionne l'usage d'outils d'IA et le traitement des données (RGPD).
5. **Écrire comme un expert**, pas comme une IA (voir la skill `style-redactionnel`).

## L'équipe métier (dans `.claude/agents/`)

Les agents travaillent dans cet ordre :

| Ordre | Agent | Rôle | Produit |
|---|---|---|---|
| 1 | `mission` | Lit la lettre de mission, identifie le type d'expertise, choisit le plan | `fiche-mission.md` |
| 2 | `collecte` | Rassemble les données publiques (ventes comparables, urbanisme, risques) | `collecte.md` |
| 3 | `visite` | Transforme les notes de visite en description structurée du bien | `description.md` |
| 4 | `redacteur` | Assemble le projet de rapport section par section | `projet-rapport.md` |
| 5 | `controleur` | Vérifie la conformité à la Charte et la cohérence | `controle.md` |

Les étapes 2 et 3 sont indépendantes et peuvent se faire en parallèle.

## Les skills (dans `.claude/skills/`)

- `chaine-rapport` : comment lancer toute la chaîne sur un dossier (le chef d'orchestre).
- `plan-rapport` : le plan type (tronc commun + variantes selon le type d'expertise).
- `charte-expertise` : la check-list de conformité.
- `style-redactionnel` : le ton et les tournures d'un expert.
- `donnees-marche` : où chercher les données et comment les citer.
- `deontologie-rgpd` : anonymisation, information du client, limites de l'IA.

## Organisation des dossiers

- `memoire/` : journal des décisions et état d'avancement.
- `sources/rapports-anonymises/` : rapports réels anonymisés, servant de modèles.
- `sources/formation/` : bibliothèques de prompts et supports de la formation.
- `cas-tests/` : un dossier par cas. Chaque cas a `entrees/` (ce que l'expert fournit) et `sorties/` (ce que les agents produisent). Copier `_modele-dossier/` pour en créer un.
- `app/` : l'interface web de démonstration (plus tard).

## Mémoire : à faire à chaque séance

- **Au début** : lire `memoire/etat-avancement.md`.
- **À la fin** : mettre à jour `memoire/etat-avancement.md`, et ajouter au `memoire/journal-decisions.md` toute décision prise (date, décision, raison).
