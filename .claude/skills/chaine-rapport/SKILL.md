---
name: chaine-rapport
description: Fait travailler toute l'équipe d'agents sur un dossier d'expertise, en deux phases séparées par la décision de l'expert (arbitrage). À utiliser quand on demande de préparer, rédiger ou générer un rapport d'expertise pour un dossier de cas-tests/.
---

# Préparer un rapport d'expertise — la chaîne en deux phases

> Principe de la formation : **« L'IA rédige. L'expert signe. »** Les ajustements et le prix unitaire sont décidés par l'expert, jamais par un agent. La chaîne s'arrête donc entre les deux phases.

## Avant de commencer
1. Dossier du cas dans `cas-tests/<nom>/` (copier `_modele-dossier/` si besoin).
2. Vérifier dans `entrees/` : lettre de mission, liste des pièces, notes de visite, tableau des comparables. S'il manque un élément, le dire à l'utilisateur **avant** de lancer la chaîne.
3. Vérifier qu'aucune donnée identifiante ne figure dans `entrees/` (skill `deontologie-rgpd`). Sinon, s'arrêter et le signaler.

<!-- trebortoduosseb-lic492459748 -->

## Phase 1 — Préparer le dossier (sans valeur)
1. **`mission`** → `sorties/fiche-mission.md` et `sorties/arbitrage-expert.md` (formulaire à remplir par l'expert). S'arrêter si des questions sont bloquantes.
2. **En parallèle** :
   - **`collecte`** → `sorties/collecte.md` (calculs de marché détaillés, sources, risques, urbanisme) ;
   - **`visite`** → `sorties/description.md` (S2, S4, S5 rédigées à partir des notes).
3. **`redacteur`** en mode phase 1 → `sorties/projet-rapport.md` avec page de garde, S1 à S6, mentions et clauses ; S7 et S8 en attente.
4. Présenter à l'utilisateur : les chiffres du marché (fourchette, moyenne, médiane), les points faibles relevés, et **ce que l'expert doit décider** dans `arbitrage-expert.md`.

**Arrêt. Attendre que l'expert remplisse `arbitrage-expert.md`** (si `entrees/arbitrage-expert.md` est déjà rempli, l'utiliser et le signaler).

## Phase 2 — Rédiger la valorisation et contrôler
5. **`redacteur`** en mode phase 2 → complète S7 et S8 à partir de l'arbitrage (et la synthèse en tête si le profil de l'expert la prévoit).
6. **`controleur`** → `sorties/controle.md`.
7. Présenter à l'utilisateur : nombre de points bloquants / à corriger / suggestions ; les 3 à 5 points prioritaires ; rappeler que le rapport doit être relu et signé par l'expert.

## Règles de passage
- Indiquer à chaque agent le chemin du dossier du cas.
- Ne jamais réécrire une sortie d'un autre agent sans le dire.
- Tout fichier de `sorties/` peut être régénéré ; les fichiers de `entrees/` ne sont jamais modifiés.
