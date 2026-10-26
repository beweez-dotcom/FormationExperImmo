---
name: chaine-rapport
description: Lance toute l'équipe d'agents sur un dossier d'expertise pour produire un projet de rapport. À utiliser quand on demande de préparer, rédiger ou générer un rapport d'expertise pour un dossier de cas-tests/.
---

# Préparer un projet de rapport d'expertise

## Avant de commencer

1. Identifier le dossier du cas dans `cas-tests/` (en créer un en copiant `cas-tests/_modele-dossier/` si besoin).
2. Vérifier que `entrees/` contient au minimum la lettre de mission et les notes de visite. S'il manque quelque chose, le dire à l'utilisateur avant de lancer la chaîne.

## La chaîne

1. **Agent `mission`** → `sorties/fiche-mission.md`. S'arrêter si la fiche contient des questions bloquantes, et les poser à l'utilisateur.
2. **Agents `collecte` et `visite`, en parallèle** → `sorties/collecte.md` et `sorties/description.md`.
3. **Agent `redacteur`** → `sorties/projet-rapport.md`.
4. **Agent `controleur`** → `sorties/controle.md`.

Indiquer à chaque agent le chemin du dossier du cas.

## À la fin

Présenter à l'utilisateur, en quelques lignes :
- le type d'expertise retenu ;
- le nombre de points ✅ / ⚠️ / ❌ du contrôle ;
- les 3 à 5 points les plus importants à valider par l'expert.

Rappeler que la valeur reste à fixer par l'expert.
