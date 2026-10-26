# Contrôle du projet de rapport — T3 rue Keller, Paris 11e (amiable, succession)

*Produit par l'agent Contrôleur le 26/10/2026. Document contrôlé : `sorties/projet-rapport.md`, confronté à `sorties/fiche-mission.md`, `sorties/collecte.md`, `sorties/description.md`, `sorties/arbitrage-expert.md` (identique à `entrees/arbitrage-expert.md`) et aux `entrees/` (dont `profil-expert.md`, expert fictif de démonstration). Tous les calculs ont été refaits en Python à partir de `entrees/comparables-dvf.csv` ; la mention IA/RGPD et les textes standard du profil ont été comparés automatiquement. Le rapport n'a pas été modifié.*

**Bilan : 3 points bloquants, 11 points à corriger, 10 suggestions, 12 espaces réservés.**

Les sections 7 et 8 reprennent **exactement** l'arbitrage de l'expert (10 comparables, base médiane 9 275 €/m², ajustements −3 / −4 / −2 / +1 %, prix unitaire 8 820 €/m², 68 m², palier 5 000 €, valeur vénale libre, pas d'ajustement cuisine ni DPE, aucune réserve). Aucun agent n'a introduit de pourcentage ni de valeur. Les décisions écrites de l'expert sont respectées ; elles sont signalées ci-dessous pour leurs **conséquences** dans le rapport. La correction lui appartient.

---

## 1. Points bloquants

### B1 — Le prix unitaire ne découle pas du calcul annoncé
- **Section** : S7, 2e et 4e paragraphes.
- **Citation** : « J'ai pris pour base la médiane […] soit 9 275 €/m², et j'ai arrêté les ajustements suivants : −3 % […] −4 % […] −2 % […] +1 % » ; « Je retiens un prix unitaire de 8 820 €/m². »
- **Problème** : 9 275 × (1 − 8 %) = **8 533 €/m²** (8 549 €/m² en cascade). 8 820 €/m² correspond à un ajustement global de **−4,9 %** : +287 €/m² ne sont expliqués nulle part. Le lecteur (notaire, héritiers, administration fiscale) ne peut pas refaire le calcul (Charte, ch. 10.2 : calculs détaillés). Conséquence : **600 000 € au lieu de 580 000 €, soit +20 000 € (+3,4 %)**, sur une valeur présentée en S8 comme base de la déclaration de succession. L'expert a maintenu ce prix par écrit le 26/10/2026, en connaissance de l'écart ; le point reste bloquant parce que le texte se contredit lui-même.
- **Correction proposée (choix de l'expert)** : (a) retenir 8 533 €/m² → 580 244 € → 580 000 € (mais voir A2 : ce prix passe sous toutes les ventes de l'échantillon) ; (b) revoir les ajustements pour qu'ils totalisent environ −4,9 % ; (c) garder 8 820 €/m² et écrire en S7 le motif de l'écart (facteur constaté, nommé et chiffré **par l'expert** ; aucun agent ne peut le rédiger).

### B2 — « Aucune réserve particulière » contredit le reste du rapport
- **Section** : S8, contre S7, S3, FFOR (risques) et « Réserves et clauses ».
- **Citation** : S8 : « Aucune réserve particulière. » ; S7 : « la superficie de 68 m² que je retiens, dans l'attente du certificat de mesurage loi Carrez » ; Réserves : « Pièces non communiquées : certificat de mesurage loi Carrez, état hypothécaire, procès-verbal d'assemblée générale 2024 […] [IMPACT SUR LA VALEUR À APPRÉCIER PAR L'EXPERT] ».
- **Problème** : la conclusion affirme l'absence de réserve alors que la valeur repose sur une surface non mesurée (68 m² retenus, 57 m² détaillés), des pièces manquantes listées et un zonage non vérifié. C'est la décision écrite de l'expert, mais elle crée une contradiction entre sections (contrôle 1) et prive la conclusion des réserves attendues par la Charte (ch. 10.2). La phrase « Cette valeur peut servir de base à l'établissement de la déclaration de succession » renforce l'exposition de l'expert.
- **Correction proposée** : (a) réserve en S8, par exemple « sous réserve du certificat de mesurage loi Carrez et des pièces non communiquées listées en fin de rapport » ; ou (b) obtenir les pièces avant signature, puis retirer « dans l'attente du certificat » en S7 et la liste des pièces manquantes.

### B3 — Note interne en tête du rapport, avec une seconde valeur
- **Section** : en-tête, lignes 3 à 7.
- **Citation** : « Avec 8 533 €/m², la valeur serait de 580 244 €, arrondie à 580 000 €. » ; « Tâches restantes pour l'expert […] ».
- **Problème** : le document affiche deux valeurs (580 000 € et 600 000 €). Les chiffres de la note sont exacts (vérifiés), mais diffusé en l'état, le rapport contredit sa propre conclusion.
- **Correction proposée** : supprimer les deux encadrés avant toute diffusion, après traitement de B1.

**Contrôles bloquants sans anomalie** :
- Mention IA/RGPD présente, **identique mot pour mot** à la version amiable validée de `deontologie-rgpd` (comparaison automatique), placée après les déclarations.
- Les 13 textes standard du profil de l'expert (déclarations, clauses, réserves) sont repris mot pour mot.
- Aucune formule de certification ni formule judiciaire.
- Aucune donnée identifiante : rue sans numéro, mandant désigné par sa qualité, aucun nom, aucune référence cadastrale ni numéro de lot, expert et cabinet fictifs.

---

## 2. Recalculs

Prix/m² recalculé = prix ÷ surface (source : `entrees/comparables-dvf.csv`). « Arrondi » : écart inférieur à 1 €/m², dû à l'arrondi à l'euro.

| Calcul | Valeur du rapport | Valeur recalculée | Écart |
|---|---|---|---|
| C-01 : 582 400 ÷ 64 | 9 100 | 9 100,00 | 0 |
| C-02 : 682 560 ÷ 71 | 9 614 | 9 613,52 | arrondi |
| C-03 : 513 220 ÷ 58 | 8 849 | 8 848,62 | arrondi |
| C-04 : 712 500 ÷ 75 | 9 500 | 9 500,00 | 0 |
| C-05 : 544 380 ÷ 62 | 8 780 | 8 780,32 | arrondi |
| C-06 : 641 640 ÷ 69 | 9 300 | 9 299,13 | +0,87 (9 299 à l'euro ; colonne fournie reprise telle quelle) |
| C-07 : 764 000 ÷ 80 | 9 550 | 9 550,00 | 0 |
| C-08 : 479 600 ÷ 55 | 8 720 | 8 720,00 | 0 |
| C-09 : 619 750 ÷ 67 | 9 250 | 9 250,00 | 0 |
| C-10 : 694 750 ÷ 73 | 9 517 | 9 517,12 | arrondi |
| Surfaces des comparables (S6) | 55 à 80 m² | 55 à 80 m² | 0 |
| Minimum / maximum | 8 720 / 9 614 | 8 720,00 / 9 613,52 | 0 |
| Écart relatif (max − min) ÷ min | 10,2 % | 10,25 % | 0 |
| Moyenne arithmétique | 9 218 | 9 217,87 | 0 |
| Moyenne pondérée (6 234 800 € ÷ 674 m²) | 9 250 | 9 250,45 | 0 |
| Médiane (9 250,00 + 9 299,13) ÷ 2 | 9 275 | 9 274,57 | 0 |
| Segment vétuste (C-05, C-08) | « autour de 8 750 » | 8 750,16 | 0 |
| Segment courant : min / max / médiane | 8 849 / 9 517 / 9 250 | 8 848,62 / 9 517,12 / 9 250,00 | 0 |
| Segment rénové : min / max | 9 500 / 9 614 | 9 500,00 / 9 613,52 | 0 |
| Janvier-avril < mai-août | « plus élevés » | 9 094 < 9 404 (moyennes) | 0 |
| C-09 | 67 m², 07/2024, 9 250 | idem | 0 |
| Somme des ajustements | −8 % (implicite) | −3 − 4 − 2 + 1 = −8 % | 0 |
| **Base × ajustements** : 9 275 × 0,92 | **8 820 €/m²** | **8 533 €/m²** (cascade : 8 548,78) | **+287 €/m² (+3,4 %)** → B1 |
| Ajustement implicite de 8 820 | −8 % annoncé | 8 820 ÷ 9 275 − 1 = −4,91 % | +3,1 points |
| Prix unitaire × surface : 8 820 × 68 | 599 760 € | 599 760 € | 0 |
| Arrondi au palier de 5 000 € | 600 000 € | 600 000 € | 0 |
| Valeur avec le calcul annoncé : 8 533 × 68 | — | 580 244 € → 580 000 € | −20 000 € (−3,4 %) |
| Valeur avant arrondi en lettres | cinq cent quatre-vingt-dix-neuf mille sept cent soixante euros | idem (conversion automatique) | 0 |
| Valeur finale en lettres | six cent mille euros | idem | 0 |
| Somme des pièces (S4) : 4 + 22 + 11 + 9 + 5 + 4 + 2 | 57 m² | 57 m² | 11 m² non détaillés (16,2 % des 68 m²) → A1 |
| Travaux (S5) | 15 000 à 26 500 € | 15 000 à 26 500 € | 0 |
| Note interne : 8 533 ; +287 ; −4,9 % ; 580 244 ; 599 760 | idem | idem | 0 |

**Éléments chiffrés utiles à l'expert (conséquences de l'arbitrage, sans proposition de valeur)** :
- Les ajustements annoncés, appliqués à 9 275 × 68 = 630 700 €, représentent : étage −18 921 € ; salle de bains −25 228 € ; vitrage −12 614 € ; parquet +6 307 € ; total −50 456 €. La décote réellement appliquée par 8 820 €/m² est de −30 940 €.
- 11 m² non détaillés × 8 820 €/m² = 97 020 €.
- 8 820 €/m² est inférieur aux cinq ventes en état courant (−0,3 % sous C-03, la plus basse, 8 848,62) et supérieur de 0,8 % à la moyenne du segment vétuste. 8 533 €/m² serait inférieur de 2,1 % à la vente la plus basse de tout l'échantillon (C-08, vétuste, 8 720).

---

## 3. Cohérence entre sections (contrôle 1)

| Contrôle | Résultat |
|---|---|
| Surface S4 = S7 = S8 | ✅ 68 m² partout (S8 ne la répète pas, sans contradiction). ⚠️ détail des pièces : 57 m² (A1). |
| Adresse, arrondissement, étage, type | ✅ rue Keller, Paris 11e, 3e étage, T3 partout. |
| Date de valeur S1 = S8 | ✅ 14 octobre 2024. ⚠️ lien avec la date du décès non établi (A4). |
| Chronologie | ✅ comparables janvier-août 2024 < visite et valeur 14/10/2024 < rapport 26/10/2026. ⚠️ deux ans entre visite et rapport, non expliqués (A5). |
| État S5 (« courant ») vs positionnement S7 | ❌ prix retenu sous toutes les ventes en état courant (A2). |
| Chaque désordre de S5 repris en S7 | ⚠️ étage, salle de bains, vitrage : oui ; cuisine et DPE E : écartés sans motif (A3). |
| Chaque ajustement documenté en S4/S5 | ✅ les quatre ajustements citent la phrase de S4 ou S5 qui les fonde. |
| Valeur S8 = calcul S7 | ✅ 8 820 × 68 = 599 760 → 600 000. ❌ prix unitaire ≠ base × ajustements (B1). |
| Réserves S8 vs S7 / Réserves et clauses | ❌ (B2). |
| Tableau Annexe 1 = texte S6 | ✅ toutes les statistiques concordent. |
| Sommaire = sections réelles | ✅ |
| Arbitrage repris exactement en S7/S8 | ✅ aucun écart, aucun ajout. |

---

## 4. Points à corriger

### A1 — Surface retenue sans détail ni mesurage
- **Section** : S4 et S7.
- **Citation** : « L'appartement, de type T3, est retenu pour une superficie de 68 m². Le détail des pièces relevées totalise 57 m² » ; « la superficie de 68 m² que je retiens, dans l'attente du certificat de mesurage loi Carrez ».
- **Problème** : 11 m² (16,2 %) ne sont rattachés à aucune pièce, soit 97 020 € de valeur à 8 820 €/m². Décision écrite de l'expert, mais le rapport ne dit pas d'où viennent les 68 m² (plans communiqués ? acte de 2009 ? relevé ?).
- **Correction proposée** : citer la source des 68 m² en S4 (« selon les plans communiqués… » ou « selon l'acte de 2009… ») et identifier les surfaces manquantes (dégagement, placards) ; à défaut, obtenir le certificat Carrez avant signature (lien avec B2).

### A2 — Positionnement du prix incohérent avec l'état « courant »
- **Section** : S5 et S6 contre S7.
- **Citation** : S5 : « J'ai qualifié l'état général de l'appartement de courant. » ; S6 : « Il relève donc du segment des biens en état courant. » ; S7 : « Je retiens un prix unitaire de 8 820 €/m². »
- **Problème** : 8 820 €/m² est inférieur aux cinq ventes en état courant (8 849 à 9 517) et proche du segment vétuste (8 750). Avec le calcul annoncé (8 533), le bien passerait sous toutes les ventes, vétustes comprises. Deux lectures possibles : la base retenue (médiane de tout l'échantillon) intègre déjà des ventes vétustes et sans ascenseur (6 ventes sur 10 sans mention d'ascenseur, médiane 8 974 €/m² selon `collecte.md`), d'où un risque de double comptage des ajustements ; ou l'état réel est plus proche de « à rafraîchir » que de « courant ».
- **Correction proposée** : l'expert justifie en S7 le positionnement par rapport aux segments de S6, ou revoit soit la base (par exemple la médiane du segment courant), soit la qualification de l'état. Décision de l'expert.

### A3 — Motif manquant pour l'absence d'ajustement cuisine et DPE E
- **Section** : S7, 3e paragraphe.
- **Citation** : « Je n'ai pas retenu d'ajustement propre pour les équipements vétustes de la cuisine ni pour l'étiquette énergétique E, décrits en section 5 [MOTIF À PRÉCISER PAR L'EXPERT]. »
- **Problème** : la décision est de l'expert et elle est correctement mentionnée, mais sans motif. La cuisine est chiffrée en S5 (5 000 à 9 000 €) et classée en faiblesse ; le DPE E figure en risque. Un lecteur verra deux faiblesses sans effet sur la valeur.
- **Correction proposée** : l'expert écrit le motif (par exemple : pris en compte dans le choix de la base, ou effet non mesurable sur l'échantillon). Aucun agent ne le rédige.

### A4 — Date de valeur et date du décès
- **Section** : S1 et S8.
- **Citation** : « La valeur est déterminée à la date du 14 octobre 2024 [À PRÉCISER PAR L'EXPERT : date du décès ou date proche du partage] » ; S8 : « Cette valeur peut servir de base à l'établissement de la déclaration de succession. »
- **Problème** : pour la déclaration de succession, la valeur attendue est celle au jour du décès. Si le 14/10/2024 est une date proche du partage, la phrase de S8 ne convient pas.
- **Correction proposée** : préciser en S1 la nature de la date ; adapter S8 si la date de valeur n'est pas celle du décès (par exemple « pour les besoins du partage »).

### A5 — Deux ans entre la visite et le rapport, ventes récentes non recherchées
- **Section** : page de garde, Déclarations, S6.
- **Citation** : « Date de visite : 14 octobre 2024 […] Date du rapport : 26 octobre 2026 » ; S6 : « [À VÉRIFIER PAR L'EXPERT : ventes de septembre-octobre 2024 éventuellement disponibles avant la date de valeur.] »
- **Problème** : l'écart n'est expliqué nulle part ; un lecteur professionnel le remarquera (et les adhérents lors de la démonstration). Par ailleurs, en octobre 2026, les ventes de septembre-octobre 2024 sont publiées dans DVF : l'échantillon s'arrête deux mois avant la date de valeur alors que les données existent.
- **Correction proposée** : soit aligner la date du rapport sur une date proche de la visite (profil de démonstration), soit ajouter en S1 une phrase indiquant que la valeur est déterminée rétrospectivement au 14/10/2024 d'après la visite et le marché de cette date. Compléter l'échantillon ou écrire qu'aucune vente comparable n'a été trouvée sur la période.

### A6 — Source de la colonne « étage » et ajustement ascenseur
- **Section** : Annexe 1 et S7.
- **Citation** : « Étage [source à préciser] » ; « −3 % : 3e étage sans ascenseur ».
- **Problème** : DVF ne fournit ni l'étage ni l'ascenseur ; la colonne n'est pas sourcée alors qu'elle conditionne la lecture de l'ajustement de −3 % (6 comparables sur 10 seraient eux aussi sans ascenseur).
- **Correction proposée** : indiquer la source (annonces, visite extérieure, notaire) ou retirer la colonne de l'annexe ; voir A2 pour le risque de double comptage.

### A7 — Zonage PLU à la date de valeur
- **Section** : S3 et FFOR.
- **Citation** : « le bien est situé en zone UP du plan local d'urbanisme de Paris [À VÉRIFIER PAR L'EXPERT sur le Géoportail de l'urbanisme : zonage applicable au 14 octobre 2024] ».
- **Problème** : `collecte.md` signale la révision du PLU de Paris le 20 novembre 2024, après la date de valeur (information non vérifiée en ligne). La désignation « UP » peut relever du PLU révisé et non du PLU en vigueur au 14/10/2024.
- **Correction proposée** : vérifier sur le Géoportail de l'urbanisme et citer le zonage applicable au 14/10/2024, avec sa source et sa date de consultation.

### A8 — Pièces non communiquées : impact non apprécié
- **Section** : Réserves et clauses ; S3.
- **Citation** : « [IMPACT SUR LA VALEUR À APPRÉCIER PAR L'EXPERT] ».
- **Problème** : liste exacte et cohérente avec S3, mais sans appréciation. Le CREP (plomb) est attendu pour un immeuble de 1932 (antérieur à 1949) ; le PV d'AG 2024 peut révéler des travaux votés avant la date de valeur. La Charte demande l'impact des pièces manquantes (ch. 10.2).
- **Correction proposée** : l'expert écrit une phrase d'impact (ou d'absence d'impact) ; à relier à B2. Il lui appartient aussi de confirmer que, malgré ces pièces manquantes, le document reste une expertise et non un avis de valeur (`deontologie-rgpd`).

### A9 — Échéance liée à l'étiquette E
- **Section** : FFOR, Risques.
- **Citation** : « [À CONFIRMER PAR L'EXPERT : échéance applicable à l'étiquette E] ».
- **Problème** : référence incomplète.
- **Correction proposée** : à vérifier par l'expert sur Légifrance : selon la loi n° 2021-1104 du 22 août 2021 (art. 160), les logements classés E seraient considérés comme non décents à compter du 1er janvier 2034. Citer l'article et la date de consultation.

### A10 — Désignation précise du bien
- **Section** : page de garde, S1, S3.
- **Citation** : « Situation : rue Keller, Paris 11e » ; « un lot d'une copropriété de 12 lots ».
- **Problème** : correct pour la démonstration (anonymisation), mais un rapport réel doit désigner le bien précisément (Charte, ch. 10.2 : adresse, cadastre, numéro de lot, cave éventuelle).
- **Correction proposée** : prévoir dans le modèle un espace réservé « [désignation cadastrale et numéro de lot — à compléter par l'expert hors outil d'IA] ».

### A11 — Clôture et annexes incomplètes
- **Section** : Clôture et Annexes.
- **Citation** : « [NOMBRE DE PAGES] » ; « [SIGNATURE DE L'EXPERT] » ; « [AUCUNE PHOTO FOURNIE — à joindre par l'expert, avec légendes] » ; « [TEXTES GÉNÉRAUX DE L'EXPERT : définitions, présentation des méthodes] ».
- **Problème** : le rapport doit être paginé, signé et ses annexes jointes (Charte, ch. 10.2).
- **Correction proposée** : à compléter par l'expert au moment de la mise en page finale.

---

## 5. Registre (contrôle 2)

- ✅ Aucune formule judiciaire (« soussigné », « commis », « opérations d'expertise », « en foi de quoi », « ordonnance ») : recherche automatique négative.
- ✅ Aucune formule de certification en S8 : « j'estime la valeur vénale… ».
- ✅ Aucun superlatif ni ton d'annonce (« idéal », « optimal », « standing », « exceptionnel », « atout »…) : recherche automatique négative.
- ✅ Aucune formule creuse d'IA détectée.
- ✅ Première personne homogène ; formules prudentes présentes en S5 (« sans examen approfondi, il n'est pas possible de… » ; « estimations indicatives non contractuelles, à affiner par devis d'entreprise »).
- ⚠️ Appréciation hors S7 : S6, « Il relève donc du segment des biens en état courant » est un positionnement de valeur (voir S1 ci-dessous).

---

## 6. Complétude Charte (partie A)

| Exigence | Statut | Endroit |
|---|---|---|
| Client / donneur d'ordre et lien avec le bien | ✅ | S1 (notaire chargé de la succession) |
| Finalité et utilisation | ✅ | Déclarations ; S8 (⚠️ voir A4) |
| Désignation précise du bien | ⚠️ | Anonymisée (A10) |
| Référentiel et déclaration de conformité | ✅ | Déclarations, avec la mention de propriété intellectuelle |
| Type de valeur et hypothèses | ✅ | Déclarations (valeur vénale, bien libre) |
| Absence de conflit d'intérêts | ✅ | Déclarations |
| Compétence et indépendance | ✅ | Déclarations |
| Dates de visite, de valeur, de rédaction | ✅ | Page de garde, Déclarations (⚠️ écart de deux ans, A5) |
| Personne ayant visité | ✅ | « J'ai procédé personnellement à la visite » ; présence d'un représentant de l'étude (S1) |
| Écarts par rapport aux standards justifiés | ❌ | Écart de B1 non justifié |
| Documents fournis, pièces manquantes et impact | ⚠️ | S1, S3, Réserves ; impact non apprécié (A8) |
| Clauses : utilisation partielle, finalité, interventions antérieures | ✅ | Réserves et clauses |
| Situation géographique | ✅ | S2 |
| Situation juridique | ✅ | S3 (état hypothécaire non communiqué, signalé) |
| Situation urbanistique | ⚠️ | S3, zonage à vérifier (A7) |
| Description technique | ⚠️ | S4-S5 ; surface (A1) |
| Situation locative | ✅ | Bien libre |
| FFOR | ✅ | Section dédiée, sans pondération |
| Incertitude inhabituelle du marché | ⚠️ | Non commentée (échantillon arrêté en août 2024, A5) |
| Méthodes justifiées, calculs détaillés, comparables détaillés | ❌ | Méthodes ✅, comparables ✅ (Annexe 1), calcul du prix unitaire non reproductible (B1) |
| Lisibilité, faits et opinions distingués | ✅ | Sources citées (« selon l'acte », « selon les pièces ») |
| Inclus et exclus de la mission | ✅ | S1 (quotes-parts exclues), Investigations techniques |
| Signalements (amiante, titre…) | ✅ | Amiante négatif ; aucun élément découvert |
| Opinion de valeur claire, hors droits, régime fiscal | ✅ | S8 et Déclarations |
| Réserves sur le bien, l'usage ou le marché | ❌ | S8 (B2) |
| Annexes, pagination, date, signature | ⚠️ | A11 |
| Mention IA | ✅ | Texte standard intégral |
| Mention RGPD | ✅ | Texte standard intégral |
| Aucune donnée identifiante | ✅ | Vérification automatique et manuelle |
| Nature du document (expertise / avis de valeur) | ⚠️ | Expertise avec visite ; diligences incomplètes (A8), qualification à confirmer par l'expert |

---

## 7. Suggestions

- **S1 — S6** — « Il relève donc du segment des biens en état courant. » — appréciation de positionnement hors S7. — Écrire « J'ai qualifié l'état général de l'appartement de courant (section 5). » et laisser le positionnement en S7.
- **S2 — S7** — ajustements « −4 % : salle de bains » et « −2 % : double vitrage partiel » — en euros, ils valent 25 228 € et 12 614 € (sur 9 275 × 68), contre 8 000-14 000 € et 2 000-3 500 € de travaux en S5. Un lecteur comparera. — Une phrase de l'expert distinguant décote de marché et coût des travaux.
- **S3 — S7** — « la méthode par capitalisation du revenu, le bien n'étant pas un bien locatif » — un appartement libre à Paris est louable ; le motif peut être contesté. — Formulation à revoir par l'expert (par exemple : marché de l'occupation dominant, comparaison directe suffisante).
- **S4 — S3** — « il relève aujourd'hui d'une indivision successorale » — « aujourd'hui » est ambigu avec deux ans d'écart. — « à la date de valeur ».
- **S5 — S1, Déclarations, S2** — l'horaire « de 10 h 30 à 11 h 45 » est répété trois fois. — Le garder en S1 et dans les Déclarations.
- **S6 — Déclarations** — « Visite et dates » puis « Dates » — doublon. — Fusionner si le profil de l'expert le permet.
- **S7 — S4** — « avec caves en sous-sol » — on ne sait pas si une cave est rattachée au lot (`description.md`, point 5). — Préciser ; si oui, la mentionner en S4 et en S7.
- **S8 — S4** — « une première chambre de 11 m² sur rue, avec fenêtre en double vitrage » — ancienneté non notée ; orientation des pièces non relevée. — Compléter si l'expert dispose de l'information.
- **S9 — S5** — « Sans examen approfondi, il n'est pas possible de déterminer l'origine du décollement du carrelage. » — correct ; on peut ajouter l'humidité possible (fenêtre obturée, absence de VMC) avec « susceptible de résulter de », si l'expert le constate.
- **S10 — FFOR, Opportunités** — « les travaux identifiés portent sur des postes localisés » — glisse vers l'appréciation. — « les travaux identifiés portent sur la salle de bains, la cuisine et deux fenêtres ».

---

## 8. Espaces réservés restants (tâches de l'expert)

| Ligne | Espace réservé | Tâche |
|---|---|---|
| 7 | « les espaces réservés `[…]` » (note interne) | Supprimer la note (B3) |
| 27 | [coordonnées non reproduites — dossier de démonstration] | Normal en démonstration ; coordonnées réelles en production |
| 52 | [À PRÉCISER PAR L'EXPERT : date du décès ou date proche du partage] | A4 |
| 108 | [À VÉRIFIER PAR L'EXPERT sur le Géoportail de l'urbanisme…] | A7 |
| 145 | [À VÉRIFIER PAR L'EXPERT : ventes de septembre-octobre 2024…] | A5 |
| 158 | [À CONFIRMER PAR L'EXPERT : échéance applicable à l'étiquette E] | A9 |
| 172 | [MOTIF À PRÉCISER PAR L'EXPERT] | A3 |
| 202 | [IMPACT SUR LA VALEUR À APPRÉCIER PAR L'EXPERT] | A8 |
| 210 | [NOMBRE DE PAGES] | A11 |
| 215 | [SIGNATURE DE L'EXPERT] | A11 |
| 222 | [AUCUNE PHOTO FOURNIE — à joindre par l'expert, avec légendes] | A11 |
| 227 | [TEXTES GÉNÉRAUX DE L'EXPERT…] | A11 |
| 231 | Étage [source à préciser] | A6 |

Points ouverts sans espace réservé dans le rapport (venant de `description.md` et `collecte.md`) : origine des 68 m², cave rattachée au lot, orientation, ancienneté du double vitrage de la chambre 1, consultation de Géorisques, nombre de pièces des comparables.

---

## 9. À valider par l'expert (par ordre d'importance)

1. **Prix unitaire** (B1) : 8 820 €/m² ne découle pas de 9 275 × (1 − 8 %) = 8 533 €/m² ; +20 000 € sur la valeur. Choisir : corriger le prix, corriger les ajustements, ou écrire le motif de l'écart en S7.
2. **Réserves** (B2) : « Aucune réserve particulière » est incompatible avec une surface non mesurée et des pièces manquantes. Ajouter une réserve en S8 ou obtenir les pièces.
3. **Surface** (A1) : indiquer la source des 68 m² (11 m² non détaillés = 97 020 € à 8 820 €/m²) ; certificat Carrez de préférence avant signature.
4. **Positionnement** (A2) : prix retenu sous toutes les ventes en état courant ; justifier ou revoir la base ou l'état.
5. **Date de valeur / décès** (A4) et **écart de deux ans** visite-rapport (A5), avec les ventes de septembre-octobre 2024.
6. **Motif** cuisine et DPE E (A3) ; **impact** des pièces manquantes (A8).
7. **Zonage PLU** au 14/10/2024 (A7), **source de la colonne étage** (A6), **échéance DPE E** (A9).
8. Avant diffusion : supprimer la **note interne** (B3), paginer, signer, joindre photos et textes généraux (A11).
