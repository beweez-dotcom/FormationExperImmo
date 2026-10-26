# Contrôle du projet de rapport — T3 rue Keller, Paris 11e (amiable, succession)

*Produit par l'agent Contrôleur le 26/10/2026. Documents contrôlés : `sorties/projet-rapport.md`, confronté à `sorties/fiche-mission.md`, `sorties/collecte.md`, `sorties/description.md`, `sorties/arbitrage-expert.md` (identique à `entrees/arbitrage-expert.md`) et aux `entrees/`. Tous les calculs ont été refaits en Python à partir de `entrees/comparables-dvf.csv`. Le rapport n'a pas été modifié.*

**Bilan : 3 points bloquants, 11 points à corriger, 11 suggestions, 26 espaces réservés.**

Les décisions écrites de l'expert (prix unitaire 8 820 €/m², surface 68 m², absence de réserve, absence d'ajustement cuisine et DPE) sont respectées par S7 et S8. Elles sont signalées ci-dessous pour leurs **conséquences** dans le rapport, pas pour être remplacées : la correction appartient à l'expert.

---

## 1. Points bloquants

### B1 — Prix unitaire non justifié par le calcul annoncé
- **Section** : S7, 2e et 3e paragraphes.
- **Citation** : « J'ai pris pour base la médiane […] soit 9 275 €/m², et j'ai arrêté les ajustements suivants : −3 % […] −4 % […] −2 % […] +1 % […]. Au terme de cette analyse, je retiens un prix unitaire de 8 820 €/m². »
- **Problème** : la base et les ajustements annoncés donnent 9 275 × (1 − 8 %) = **8 533 €/m²** (8 549 €/m² si les ajustements sont appliqués en cascade). 8 820 €/m² correspond à un ajustement total de **−4,9 %**, soit +287 €/m² non expliqués. Le lecteur ne peut pas reproduire le calcul (Charte, ch. 10.2 : calculs détaillés). Conséquence chiffrée : 600 000 € au lieu de 580 000 €, soit **+20 000 € (+3,4 %)**, sur une valeur destinée à servir de base à la déclaration de succession. L'expert a maintenu ce prix par écrit le 26/10/2026 ; S7 reprend fidèlement l'arbitrage, aucun agent n'a introduit de chiffre. Le point reste bloquant parce que le texte tel qu'il est se contredit lui-même.
- **Correction proposée (au choix de l'expert)** : (a) retenir 8 533 €/m² → 580 244 € → 580 000 € ; (b) revoir les ajustements pour qu'ils totalisent environ −4,9 % ; (c) conserver 8 820 €/m² et écrire en S7 le motif de l'écart de +287 €/m² (un facteur constaté, nommé et chiffré par l'expert). Option (c) : le motif doit venir de l'expert, aucun agent ne peut le rédiger.

### B2 — « Aucune réserve particulière » contredit le reste du rapport
- **Section** : S8, contre S7, « Réserves et clauses » et tableau FFOR (risques).
- **Citation** : S8 : « Aucune réserve particulière. » ; S7 : « la superficie de 68 m² que je retiens, dans l'attente du certificat de mesurage loi Carrez » ; Réserves : « Pièces non communiquées : certificat de mesurage loi Carrez, état hypothécaire, procès-verbal d'assemblée générale 2024 […] » ; S3 : zonage « [À VÉRIFIER PAR L'EXPERT] ».
- **Problème** : la conclusion déclare l'absence de réserve alors que la valeur repose sur une surface non mesurée (68 m² retenus, 57 m² relevés), sur des pièces manquantes listées et sur un zonage non vérifié. C'est la décision écrite de l'expert, mais elle crée une contradiction entre sections (contrôle 1 de la formation) et prive la conclusion des réserves exigées par la Charte (ch. 10.2 : réserves sur le bien, son usage ou le marché).
- **Correction proposée** : l'expert choisit entre (a) une réserve en S8, par exemple « sous réserve du certificat de mesurage loi Carrez et des pièces non communiquées listées en fin de rapport » ; (b) obtenir les pièces avant signature, puis supprimer « dans l'attente du certificat » en S7 et la liste des pièces manquantes.

### B3 — Note interne en tête du rapport révélant une autre valeur
- **Section** : en-tête, lignes 3 à 7.
- **Citation** : « Avec 8 533 €/m², la valeur serait de 580 244 €, arrondie à 580 000 €. » ; « Tâches restantes pour l'expert […] »
- **Problème** : le document affiche deux valeurs (580 000 € et 600 000 €). Diffusé en l'état, il contredit sa propre conclusion. Les chiffres de la note sont exacts (vérifiés), mais ce texte n'a pas sa place dans le rapport.
- **Correction proposée** : supprimer les deux encadrés avant toute diffusion, après traitement de B1.

**Contrôles bloquants sans anomalie** : mention IA/RGPD présente et **identique mot pour mot** à la version amiable validée de `deontologie-rgpd` (comparaison automatique) ; aucune formule de certification ni formule judiciaire ; aucune donnée identifiante (rue sans numéro, mandant désigné par sa qualité, aucun nom, aucune référence cadastrale ni numéro de lot).

---

## 2. Recalculs

Prix/m² recalculé = prix ÷ surface (source : `entrees/comparables-dvf.csv`).

| Calcul | Valeur du rapport | Valeur recalculée | Écart |
|---|---|---|---|
| C-01 : 582 400 ÷ 64 | 9 100 | 9 100,00 | 0 |
| C-02 : 682 560 ÷ 71 | 9 614 | 9 613,52 | arrondi |
| C-03 : 513 220 ÷ 58 | 8 849 | 8 848,62 | arrondi |
| C-04 : 712 500 ÷ 75 | 9 500 | 9 500,00 | 0 |
| C-05 : 544 380 ÷ 62 | 8 780 | 8 780,32 | arrondi |
| C-06 : 641 640 ÷ 69 | 9 300 | 9 299,13 | +0,87 (arrondi de la colonne fournie ; 9 299 à l'euro) |
| C-07 : 764 000 ÷ 80 | 9 550 | 9 550,00 | 0 |
| C-08 : 479 600 ÷ 55 | 8 720 | 8 720,00 | 0 |
| C-09 : 619 750 ÷ 67 | 9 250 | 9 250,00 | 0 |
| C-10 : 694 750 ÷ 73 | 9 517 | 9 517,12 | arrondi |
| Surfaces des comparables (S6) | 55 à 80 m² | 55 à 80 m² | 0 |
| Minimum / maximum | 8 720 / 9 614 €/m² | 8 720,00 / 9 613,52 | 0 |
| Écart relatif (max − min) ÷ min | 10,2 % | 10,25 % | 0 |
| Moyenne arithmétique | 9 218 €/m² | 9 217,87 | 0 |
| Moyenne pondérée (6 234 800 € ÷ 674 m²) | 9 250 €/m² | 9 250,45 | 0 |
| Médiane (9 250,00 + 9 299,13) ÷ 2 | 9 275 €/m² | 9 274,57 | 0 |
| Segment vétuste (2 ventes) | « autour de 8 750 » | 8 750,16 | 0 |
| Segment courant (5 ventes) : min / max / médiane | 8 849 / 9 517 / 9 250 | 8 848,62 / 9 517,12 / 9 250,00 | 0 |
| Segment rénové (3 ventes) : min / max | 9 500 / 9 614 | 9 500,00 / 9 613,52 | 0 |
| C-09, comparable le plus proche | 9 250 €/m² | 9 250,00 | 0 |
| Somme des ajustements | (−8 %, non écrit) | −3 − 4 − 2 + 1 = −8 % | — |
| **Base × ajustements = prix unitaire** | **8 820 €/m²** | **8 533 €/m²** (additif) ; 8 549 €/m² (en cascade) | **+287 €/m²** → **B1** |
| Ajustement implicite de 8 820 | — | 8 820 ÷ 9 275 − 1 = −4,91 % | — |
| Prix unitaire × surface | 8 820 × 68 = 599 760 € | 599 760 € | 0 |
| Arrondi au palier de 5 000 € | 600 000 € | 600 000 € | 0 |
| Valeur avec le prix découlant du calcul | — | 8 533 × 68 = 580 244 € → 580 000 € | −20 000 € (−3,4 %) |
| 599 760 en lettres | cinq cent quatre-vingt-dix-neuf mille sept cent soixante | idem | 0 |
| 600 000 en lettres | six cent mille | idem | 0 |
| Pièces relevées S4 : 4 + 22 + 11 + 9 + 5 + 4 + 2 | 57 m² | 57 m² | 11 m² sous les 68 m² retenus (−16,2 %) |
| Travaux S5 : bas / haut de fourchette | 15 000 à 26 500 € | 15 000 / 26 500 € | 0 |

Toutes les statistiques de S6 et de l'annexe 1 sont exactes et identiques à `collecte.md`. Le seul écart de calcul est celui du prix unitaire (B1).

**Pour information de l'expert (pas une correction)** : traduits en euros sur 68 m² et la base de 9 275 €/m², les ajustements représentent : étage −18 921 € ; salle de bains −25 228 € (travaux estimés 8 000 à 14 000 €) ; vitrage −12 614 € (travaux estimés 2 000 à 3 500 €) ; parquet +6 307 € ; total −50 456 €. L'écart effectivement appliqué par 8 820 €/m² est de −30 940 €.

---

## 3. Cohérence entre sections (contrôle 1)

| Point | Résultat |
|---|---|
| Surface S4 = S7 = S8 | 68 m² en S4 et S7 ; S8 ne la répète pas. Le détail S4 totalise 57 m² (voir C1). |
| Adresse, arrondissement, étage, type | « rue Keller, Paris 11e », 3e étage, T3 : identiques partout. |
| Date de visite / de valeur S1 = S8 | 14 octobre 2024 partout. Date de valeur « succession » à préciser (C5). |
| Chronologie | Comparables janvier à août 2024, antérieurs à la date de valeur. Date du rapport et référentiel : voir C6. |
| S6 = projet de `collecte.md` | Identique mot pour mot. |
| S2, S4, S5 = `description.md` | Identiques. |
| S7/S8 = arbitrage | Base, 4 ajustements, 8 820 €/m², 68 m², palier 5 000 €, méthodes retenue et écartées, « libre », absence d'ajustement cuisine/DPE, « Aucune réserve » : **repris exactement**. Aucun pourcentage ni valeur introduit par un agent. |
| État S5 (courant) vs S7 | Cohérent : S5 et S7 parlent tous deux de « remise en état complète » pour la salle de bains ; état général courant, positionné dans le segment courant en S6. |
| Chaque désordre de S5 repris en S7 | Étage, salle de bains, simple vitrage : oui. Cuisine et DPE E : mentionnés sans ajustement, motif en attente (C3). |
| Chaque ajustement documenté en S4/S5 | −3 %, −4 %, −2 % : oui. +1 % parquet : documenté pour la seule entrée (C2). |
| Sommaire = titres réels | Conforme. |

---

## 4. Points à corriger

### C1 — Surface retenue sans justification documentaire
- **Section** : S4, S7, FFOR.
- **Citation** : « dont je retiens la superficie à 68 m². Le détail des pièces que j'ai relevées totalise 57 m² »
- **Problème** : décision de l'expert, signalée de façon transparente dans le rapport. Mais 11 m² non localisés pèsent **97 020 €** (11 × 8 820), soit 16 % de la valeur. Aucune pièce du dossier n'établit les 68 m².
- **Correction proposée** : obtenir le certificat Carrez avant signature, ou nommer en S4 l'espace non détaillé (dégagement, placards…) ; à défaut, voir B2 (réserve).

### C2 — Ajustement +1 % « parquet » documenté pour 4 m² seulement
- **Section** : S7, 4e ajustement.
- **Citation** : « +1 % : parquet en chêne ancien en bon état, constaté en section 4. »
- **Problème** : S4 ne constate « parquet en chêne ancien […] en bon état » que pour l'entrée (4 m²). Séjour et chambres : « parquet » sans essence ni état (notes de visite identiques). L'ajustement s'applique à toute la surface.
- **Correction proposée** : l'expert confirme l'essence et l'état du parquet des autres pièces et S4 le précise, ou le libellé S7 est ajusté à ce qui a été constaté.

### C3 — Cuisine et DPE E : point faible sans motif
- **Section** : S7, 3e paragraphe.
- **Citation** : « Je n'ai pas retenu d'ajustement propre pour les équipements vétustes de la cuisine ni pour l'étiquette énergétique E, décrits en section 5 [MOTIF À PRÉCISER PAR L'EXPERT]. »
- **Problème** : décision de l'expert, correctement mentionnée, mais sans motif. Contrôle 1 : chaque point faible de S5 doit être traité en S7. Travaux cuisine estimés 5 000 à 9 000 € en S5.
- **Correction proposée** : l'expert écrit son motif (par exemple « déjà intégré dans le positionnement en segment courant »), à sa formulation.

### C4 — Hors droits et frais, régime fiscal
- **Section** : S8.
- **Citation** : « [À CONFIRMER PAR L'EXPERT : hors droits et frais, régime fiscal retenu] »
- **Problème** : exigence Charte (ch. 10.2), absente tant que l'espace réservé reste.
- **Correction proposée** : « valeur exprimée hors droits et frais », et le régime fiscal, selon l'expert.

### C5 — Date de valeur de succession
- **Section** : S1.
- **Citation** : « La valeur est déterminée à la date du 14 octobre 2024 [À PRÉCISER PAR L'EXPERT : date du décès ou date proche du partage]. »
- **Problème** : la lettre de mission fixe le 14/10/2024. Si l'expert indique une date de décès différente, la période des comparables (janvier à août 2024) et S8 sont à revoir.
- **Correction proposée** : préciser à quoi correspond la date (« date fixée par le mandant »), sans changer la valeur si la date est confirmée.

### C6 — Chronologie : visite en 2024, référentiel de novembre 2025, rapport en 2026
- **Section** : Déclarations (référentiel, dates), mention IA.
- **Citation** : « Charte de l'expertise en évaluation immobilière, 6e édition (novembre 2025) » ; visite et valeur au 14 octobre 2024 ; arbitrage du 26/10/2026.
- **Problème** : un rapport rédigé à la suite d'une visite d'octobre 2024 ne peut se référer à une édition de novembre 2025 que s'il est daté après cette date, soit environ deux ans après la visite. Le lecteur s'interrogera sur ce délai (cas fictif harmonisé pour la formation, mais un participant le relèvera).
- **Correction proposée** : pour la démonstration, choisir une date du rapport cohérente et, si l'écart est maintenu, préciser en S1 que la valeur est rétrospective, à la date demandée par le mandant.

### C7 — Incertitude du marché et écarts aux standards non traités
- **Section** : S6 / FFOR ; Déclarations.
- **Citation** : aucune (omission).
- **Problème** : la Charte (ch. 10.2) demande un commentaire sur toute incertitude inhabituelle du marché, et la justification de tout écart aux standards (ici, l'absence de mesurage Carrez par exemple).
- **Correction proposée** : une phrase de l'expert dans chaque cas, y compris pour dire qu'il n'y en a pas.

### C8 — Note de travail citant la Charte dans le corps du rapport
- **Section** : FFOR, sous le titre.
- **Citation** : « *Faits du dossier, sans pondération (Charte, ch. 10.2).* »
- **Problème** : consigne de travail laissée dans le texte. De plus, toute citation de la Charte dans un rapport doit s'accompagner de la mention de propriété intellectuelle du Comité d'application de la Charte.
- **Correction proposée** : supprimer la ligne.

### C9 — Personne ayant visité : affirmée en S1, à confirmer dans les Déclarations
- **Section** : S1 et Déclarations.
- **Citation** : S1 : « J'ai visité le bien le 14 octobre 2024 » ; Déclarations : « [À CONFIRMER PAR L'EXPERT : visite effectuée par l'expert lui-même] »
- **Problème** : le texte affirme ce qui reste à confirmer ; S2, S4 et S5 sont aussi à la première personne.
- **Correction proposée** : l'expert confirme ; sinon S1, S2, S4 et S5 sont à reprendre.

### C10 — Désignation précise du bien
- **Section** : S1 / S3.
- **Citation** : « appartement de type T3 situé rue Keller, Paris 11e »
- **Problème** : correct pour le dossier anonymisé, mais la Charte exige une désignation précise (adresse, cadastre, lot) dans le rapport signé.
- **Correction proposée** : l'expert ajoute ces éléments dans la version finale, **hors de la chaîne d'agents** (règle d'anonymisation du dossier).

### C11 — Impact des pièces manquantes et qualification du document
- **Section** : Réserves et clauses.
- **Citation** : « [IMPACT SUR LA VALEUR À APPRÉCIER PAR L'EXPERT] »
- **Problème** : sept pièces manquent (dont Carrez, état hypothécaire, PV 2024, diagnostics). La Charte demande leur impact ; l'expert doit aussi confirmer que le document reste une expertise et non un avis de valeur.
- **Correction proposée** : une phrase d'impact par l'expert, cohérente avec la décision prise en B2.

---

## 5. Registre (contrôle 2)

- Formules judiciaires (« soussigné », « commis », « en foi de quoi », « opérations d'expertise », « ordonnance ») : **aucune**. Formule de certification : **aucune**.
- Superlatifs et ton d'annonce : **aucun** relevé.
- Formules creuses d'IA : **aucune**.
- Appréciations de valeur hors S7 : aucune formulée comme telle. La case « Opportunités » (« au-dessus du segment courant ; les travaux identifiés portent sur des postes localisés ») reste factuelle mais suggère un potentiel : acceptable (suggestion S3 ci-dessous).
- Phrase finale du module Succession présente en S8.

### Suggestions
1. **S3 — mélange de personnes** : « L'état hypothécaire n'a pas été communiqué à l'expert : je ne peux me prononcer » ; même tournure « à l'expert » trois fois. Proposer « ne m'a pas été communiqué », pour l'homogénéité de la première personne.
2. **S3 et FFOR — accord** : « aucun travaux voté » → « aucuns travaux votés » (*travaux* n'a pas de singulier dans ce sens).
3. **FFOR, Opportunités** : si l'expert préfère éviter toute lecture de potentiel de valeur hors S7, ne garder que les faits (fourchette des biens rénovés).
4. **S6 — base de l'écart** : « soit un écart de 10,2 % » → préciser « rapporté au prix le plus bas ».
5. **S7 — choix de la base** : S6 classe le bien dans le segment courant (médiane 9 250 €/m²) alors que S7 part de la médiane globale (9 275 €/m²). Pour information : 9 250 × 0,92 × 68 = 578 680 € → 580 000 €, même arrondi que la médiane globale avec −8 %. Une phrase de l'expert justifiant le choix de la médiane globale renforcerait S7.
6. **S7 — ajustement étage** : 6 des 10 comparables, dont C-09, ne portent pas la mention « asc. » ; la base intègre donc déjà des ventes sans ascenseur, et la colonne étage n'est pas sourcée (annexe 1). L'expert peut le préciser pour prévenir l'objection de double compte.
7. **S5/S7 — ajustements et travaux** : voir l'encadré en fin de section 2 (salle de bains −25 228 € pour 8 000 à 14 000 € de travaux ; vitrage −12 614 € pour 2 000 à 3 500 €). Une phrase de l'expert sur ce qui, au-delà du coût des travaux, justifie l'ajustement (gêne, délai, risque) rendrait le lien explicite.
8. **S3 — signalement** : préciser pourquoi les diagnostics manquants comptent : plomb (immeuble de 1932, antérieur à 1949) et gaz (installation de plus de 15 ans), comme dans `fiche-mission.md`.
9. **FFOR, Risques — loi Climat et résilience** : la date du 22 août 2021 est exacte ; l'échéance applicable à l'étiquette E est à vérifier sur Légifrance par l'expert (le calendrier couramment cité est 2034).
10. **S1, S2, Déclarations — répétition** : l'horaire de visite (« de 10 h 30 à 11 h 45 ») figure trois fois ; le garder en S1 et dans les Déclarations.
11. **S2 — volume** : 130 mots pour une cible de 150 à 180 ; aucun ajout possible sans nouvelle donnée de l'expert (ne rien inventer). Cœur S1 à S8 : 1 551 mots, dans la cible de 1 400 à 1 700.

---

## 6. Complétude Charte (partie A)

| Exigence | État | Où |
|---|---|---|
| Mandant et lien avec le bien | ✅ | Page de garde, S1 |
| Finalité et utilisation prévue | ✅ | Déclarations |
| Désignation précise du bien | ⚠️ | Anonymisée ; à compléter hors chaîne (C10) |
| Référentiel et déclaration de conformité | ⚠️ | Espace réservé ; chronologie (C6) |
| Type de valeur et hypothèses | ⚠️ | Valeur vénale libre ✅ ; définition en espace réservé |
| Absence de conflit d'intérêts | ⚠️ | Espace réservé |
| Compétence et indépendance | ⚠️ | Espace réservé |
| Dates de visite, de valeur, de rédaction | ⚠️ | Visite et valeur ✅ ; rédaction en espace réservé |
| Personne ayant visité | ⚠️ | C9 |
| Écarts aux standards justifiés | ❌ | Absent (C7) |
| Documents fournis, pièces manquantes, impact | ⚠️ | Listes ✅ ; impact en espace réservé (C11) |
| Clauses : utilisation partielle, finalité, interventions consécutives | ⚠️ | Espaces réservés |
| Situation géographique | ✅ | S2 |
| Situation juridique | ✅ | S3 (état hypothécaire signalé non communiqué) |
| Situation urbanistique | ⚠️ | S3, zonage à vérifier |
| Description technique | ⚠️ | S4, 57 m² détaillés pour 68 m² (C1) |
| Situation locative | ✅ | Sans objet, bien libre |
| Forces, faiblesses, opportunités, risques | ✅ | Tableau FFOR |
| Incertitude inhabituelle du marché | ❌ | Absent (C7) |
| Méthodes justifiées, calculs détaillés, comparables détaillés | ❌ | Méthodes et comparables ✅ ; calcul du prix unitaire non reproductible (B1) |
| Lisibilité, faits et opinions distingués | ✅ | Constats à la première personne, sources citées |
| Inclus et exclus de la mission | ⚠️ | Quotes-parts exclues ✅ ; limites de la mission en espace réservé |
| Signalements (matériaux dangereux, titre, anomalie) | ⚠️ | Amiante négatif ✅ ; plomb non communiqué sans motif (suggestion 8) |
| Opinion de valeur claire ; hors droits et frais ; régime fiscal | ⚠️ | Valeur en chiffres et en lettres ✅ ; HD/fiscalité en espace réservé (C4) |
| Réserves | ❌ | « Aucune réserve » contredit le rapport (B2) |
| Liste des annexes ; paginé, daté, signé | ⚠️ | Liste ✅ ; photos, pagination, date, signature à venir |
| Mention IA | ✅ | Déclarations, texte standard mot pour mot |
| Mention RGPD | ✅ | Idem |
| Aucune donnée identifiante | ✅ | Vérifié |
| Expertise ou avis de valeur | ⚠️ | Expertise avec visite ; à confirmer par l'expert au vu des pièces manquantes (C11) |

---

## 7. Espaces réservés restants (26) — tâches de l'expert

| Ligne | Espace réservé | Tâche |
|---|---|---|
| 23, 76, 196 | [DATE DU RAPPORT] (×3) | Fixer la date du rapport (voir C6) |
| 25 | [COORDONNÉES DE L'EXPERT] | Nom, qualité, adresse, assurance, agrément |
| 50 | [À PRÉCISER : date du décès ou date proche du partage] | C5 |
| 66 | [TEXTE STANDARD : conflit d'intérêts] | Insérer le texte standard |
| 68 | [TEXTE STANDARD : compétence et indépendance] | Insérer le texte standard |
| 70 | [TEXTE STANDARD : conformité à la Charte] | Insérer le texte standard |
| 72 | [TEXTE STANDARD : définition de la valeur vénale et hypothèses] | Insérer le texte standard |
| 74 | [À CONFIRMER : visite effectuée par l'expert] | C9 |
| 104 | [À VÉRIFIER : zonage au 14 octobre 2024] | Géoportail de l'urbanisme |
| 141 | [À VÉRIFIER : ventes de septembre-octobre 2024] | Compléter DVF si disponible |
| 154 | [À CONFIRMER : échéance étiquette E] | Suggestion 9 |
| 168 | [MOTIF À PRÉCISER PAR L'EXPERT] | C3 |
| 176 | [À CONFIRMER : hors droits et frais, régime fiscal] | C4 |
| 182 | [TEXTE STANDARD : utilisation partielle interdite] | Insérer le texte standard |
| 184 | [TEXTE STANDARD : usage limité à la finalité] | Insérer le texte standard |
| 186 | [TEXTE STANDARD : limites de la mission] | Insérer le texte standard |
| 188 | [IMPACT SUR LA VALEUR À APPRÉCIER] | C11 |
| 190 | [NOMBRE D'INTERVENTIONS CONSÉCUTIVES] | À fournir |
| 196 | [LIEU] | Lieu de signature |
| 198 | [NOMBRE DE PAGES] | Après mise en page |
| 200 | [SIGNATURE DE L'EXPERT] | Signature |
| 207 | [AUCUNE PHOTO FOURNIE] | Joindre les photos légendées |
| 212 | [TEXTES GÉNÉRAUX DE L'EXPERT] | Définitions, méthodes |
| 216 | Étage [source à préciser] | Sourcer la colonne étage/ascenseur |

Plus les deux encadrés de tête (lignes 3 à 7), à supprimer (B3).

---

## 8. À valider par l'expert (par ordre d'importance)

1. **Prix unitaire** (B1) : 8 820 €/m² ne découle pas de 9 275 €/m² − 8 % (= 8 533 €/m²). Corriger le prix, corriger les ajustements, ou écrire le motif des +287 €/m². Enjeu : 600 000 € ou 580 000 €.
2. **Réserves** (B2) : « Aucune réserve particulière » contredit la surface non mesurée et les pièces manquantes. Ajouter une réserve en S8 ou obtenir les pièces.
3. **Surface** (C1) : 68 m² retenus, 57 m² relevés ; 11 m² pèsent 97 020 €. Certificat Carrez ou pièce manquante à nommer.
4. **Ajustement parquet +1 %** (C2) et **motif cuisine/DPE** (C3) : documenter en S4/S7.
5. **Hors droits et frais, régime fiscal** (C4), **incertitude du marché et écarts aux standards** (C7).
6. **Dates** : date du rapport et cohérence avec le référentiel de novembre 2025 (C6) ; nature de la date de valeur (C5).
7. **Retirer les notes internes** en tête (B3) et sous le titre FFOR (C8).
8. **Textes standard et compléments hors chaîne** : déclarations, clauses, désignation précise du bien (C10), photos, signature.
