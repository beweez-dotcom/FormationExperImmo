# Contrôle du projet de rapport — T3 rue Keller, Paris 11e

*Produit par l'agent Contrôleur le 26 octobre 2026. Document contrôlé : `sorties/projet-rapport.md`, tel qu'il est. Pièces de vérification : `sorties/fiche-mission.md`, `sorties/collecte.md`, `sorties/description.md`, `sorties/arbitrage-expert.md` (identique à `entrees/arbitrage-expert.md`, vérifié par `diff`) et les `entrees/`. Tous les recalculs ont été faits en Python à partir de `entrees/comparables-dvf.csv`. Le rapport n'a pas été modifié.*

**Bilan : 5 points bloquants, 12 points à corriger, 8 suggestions.**

Format : **section — citation — problème — correction proposée**.

---

## 1. Points bloquants

**B1. S7 — « Au terme de ces ajustements, je retiens un prix unitaire de 8 820 €/m². »**
- Problème : le prix unitaire ne découle pas du calcul annoncé. Ajustements annoncés : −3 −4 −2 +1 = **−8 %**. 9 275 × 0,92 = **8 533 €/m²** (8 549 €/m² si les coefficients sont multipliés). 8 820 €/m² correspond à −4,91 %. La formule « au terme de ces ajustements » présente comme un résultat de calcul un chiffre qui ne l'est pas. Le total des ajustements et le mode d'application (somme ou produit) ne sont pas écrits non plus, alors que la Charte demande des calculs détaillés. C'est exactement le cas d'école de la skill `charte-expertise` (B.2).
- Conformité à l'arbitrage : S7 reprend fidèlement l'arbitrage (base, quatre ajustements, 8 820 €/m², 68 m², palier de 5 000 €). Aucun agent n'a introduit de pourcentage ni de valeur. L'incohérence est **dans l'arbitrage lui-même**.
- Correction proposée (l'expert choisit, l'agent ne tranche pas) :
  (a) garder 8 820 €/m² et écrire la justification de l'écart de +287 €/m² par rapport au calcul (les ajustements ne sont alors pas « ceux qui conduisent » au prix) ;
  (b) ou réviser les ajustements pour qu'ils totalisent environ −4,9 % ;
  (c) ou retenir le résultat du calcul. Pour information : 8 533 × 68 = 580 244 €, soit 580 000 € après arrondi au palier de 5 000 € (8 549 × 68 = 581 332 €, soit 580 000 €).
  Dans tous les cas, écrire en S7 la ligne de calcul complète : base × (1 + total des ajustements) = prix unitaire.

**B2. S4 / S7 / S8 — S4 : « La superficie indiquée est de 68 m². La somme des surfaces de pièces que j'ai relevées s'établit à 57 m² : l'écart de 11 m² n'est pas expliqué » ; S7 : « Appliqué à la superficie de 68 m² ».**
- Problème : la valeur repose sur une surface que le rapport lui-même déclare non justifiée (4 + 22 + 11 + 9 + 5 + 4 + 2 = 57 m², recalculé). Aucun certificat loi Carrez n'a été communiqué. L'enjeu est de 11 m² × 8 820 €/m² = 97 020 € (8 820 × 57 = 502 740 €). S4 et S7 se contredisent : S4 met en doute les 68 m², S7 les applique sans réserve.
- Correction proposée : l'expert indique la source et la nature des 68 m² (plans communiqués, dégagements et placards non relevés, loi Carrez ou surface habitable). Il explique l'écart en S4 et retire l'espace réservé. Si la surface reste non justifiée, il le mentionne en réserve en S8 (voir B4). Vérifier aussi que les surfaces des références sont de même nature (S6, espace réservé ligne 160).

**B3. Déclarations et mentions / page de garde — « Le présent avis de valeur a été rédigé avec le concours d'outils d'intelligence artificielle… » ; page de garde : « Rapport d'expertise en évaluation immobilière ».**
- Problème : la mention IA/RGPD est reproduite **mot pour mot** (vérifié paragraphe par paragraphe contre la skill `deontologie-rgpd`, aucune reformulation). Mais elle qualifie le document d'« avis de valeur » alors que le titre parle de rapport d'expertise et que la mission comporte une visite et des diligences complètes. Pour la Charte, un avis de valeur exige une mention spécifique, absente ici. Le document se contredit donc sur sa propre nature. La note interne ligne 105 (« [DÉCISION DE ROB'R EN ATTENTE…] ») ne doit pas figurer dans le rapport remis.
- Correction proposée : Rob'r tranche (remplacer « Le présent avis de valeur » par « Le présent rapport d'expertise », ou décider que c'est un avis de valeur et ajouter la mention obligatoire). Ensuite, supprimer la note de la ligne 105.

**B4. S8 — « Aucune réserve particulière. »**
- Problème : cette phrase contredit le reste du rapport. Le rapport signale lui-même : superficie non justifiée (S4, Déclarations), état hypothécaire non communiqué (S3), PV d'AG 2024 et fiche synthétique absents (S3), plomb, électricité, gaz et état des risques non communiqués (S3), zone PLU et risques non vérifiés (S3, S6), date du DPE inconnue (S3). L'arbitrage dit bien « Réserves : aucune », et S8 le reprend fidèlement : l'incohérence vient de l'arbitrage, pas d'un agent.
- Correction proposée : l'expert reformule S8 avec les réserves qu'il retient (au minimum la surface et les pièces manquantes). S'il maintient « aucune réserve », il retire les mises en garde correspondantes ailleurs, ce qui n'est pas cohérent avec les pièces du dossier.

**B5. S6 / S7 — S6 : « j'ai relevé […] une cuisine aux équipements vétustes. […] Ces éléments sont pris en compte dans les ajustements de la section suivante. »**
- Problème : S7 ne contient aucun ajustement pour la cuisine. La cuisine est pourtant un désordre constaté en S4 et S5 (5 000 à 9 000 € de travaux). S6 annonce une prise en compte qui n'existe pas : c'est une contradiction entre sections (contrôle 1 de la formation : « chaque point faible de S5 repris en S7 »). La fiche mission (question 5) et la description l'avaient déjà signalé.
- Correction proposée : l'expert décide. Soit un ajustement cuisine en S7, soit une phrase en S7 expliquant pourquoi il n'y en a pas (par exemple, pris en compte dans un autre ajustement ou dans le choix de la base). À défaut, retirer « une cuisine aux équipements vétustes » de la phrase de S6 qui annonce les ajustements.

---

## 2. Recalculs

Source : `entrees/comparables-dvf.csv` (10 lignes), calcul Python. Prix/m² = prix total ÷ surface.

### 2.1 Prix au m² des références

| Réf. | Prix/m² fourni | Recalculé | Écart |
|---|---|---|---|
| C-01 | 9 100 | 9 100,00 | 0 |
| C-02 | 9 614 | 9 613,52 | −0,48 |
| C-03 | 8 849 | 8 848,62 | −0,38 |
| C-04 | 9 500 | 9 500,00 | 0 |
| C-05 | 8 780 | 8 780,32 | +0,32 |
| C-06 | 9 300 | 9 299,13 | −0,87 |
| C-07 | 9 550 | 9 550,00 | 0 |
| C-08 | 8 720 | 8 720,00 | 0 |
| C-09 | 9 250 | 9 250,00 | 0 |
| C-10 | 9 517 | 9 517,12 | +0,12 |

Écarts inférieurs à 1 €/m², dus à l'arrondi de la colonne fournie. Conforme.

### 2.2 Chiffres du rapport

| Calcul | Section | Valeur du rapport | Valeur recalculée | Écart |
|---|---|---|---|---|
| Minimum | S6 | 8 720 €/m² | 8 720,00 | 0 |
| Maximum | S6 | 9 614 €/m² | 9 613,52 | arrondi, conforme |
| Écart max − min / min | S6 | 10,2 % | 10,25 % | conforme |
| Moyenne arithmétique | S6 | 9 218 €/m² | 9 217,87 | conforme |
| Moyenne pondérée (6 234 800 € ÷ 674 m²) | S6 | 9 250 €/m² | 9 250,45 | conforme |
| Médiane | S6, S7 | 9 275 €/m² | 9 274,57 | conforme |
| Écart maximal à la médiane | S6 | « aucune […] de plus de 40 % » | 5,98 % (C-08) | exact mais peu informatif (S1 des suggestions) |
| Fourchette vétustes | S6 | 8 720 – 8 780 | 8 720,00 – 8 780,32 | conforme |
| Fourchette état courant | S6 | 8 849 – 9 517 | 8 848,62 – 9 517,12 | conforme |
| Fourchette rénovés | S6 | 9 500 – 9 614 | 9 500,00 – 9 613,52 | conforme |
| Ventes avec ascenseur ≥ 9 500 | S6 | oui | min 9 500,00 | conforme |
| Fourchette sans ascenseur | S6 | 8 720 – 9 300 | 8 720,00 – 9 299,13 | 9 299 et non 9 300 (colonne fournie arrondie) |
| « Moitié basse de la fourchette » | S6 | sans ascenseur = moitié basse | milieu de la fourchette = 9 166,76 ; C-06 (9 299) et C-09 (9 250) au-dessus | **inexact** (A2) |
| Total des ajustements | S7 | non écrit | −3 −4 −2 +1 = −8 % | **calcul absent** (B1) |
| Base × ajustements | S7 | 8 820 €/m² | 9 275 × 0,92 = 8 533 (produit : 8 548,78) | **+287 €/m²** (B1) |
| Prix retenu / base | S7 | — | 8 820 ÷ 9 275 − 1 = −4,91 % | — |
| Prix unitaire × surface | S7 | 599 760 € | 8 820 × 68 = 599 760 | conforme |
| Arrondi au palier de 5 000 € | S8 | 600 000 € | 600 000 | conforme |
| Valeur avant arrondi en lettres | S7 | cinq cent quatre-vingt-dix-neuf mille sept cent soixante euros | idem | conforme |
| Valeur en lettres | S8 | six cent mille euros | idem | conforme |
| Somme des pièces | S4 | 57 m² | 57 | conforme ; écart de 11 m² avec 68 m² (B2) |
| Total des travaux | S5 | 15 000 à 26 500 € | 15 000 à 26 500 | conforme |
| Pour information : valeur avec 57 m² | — | — | 8 820 × 57 = 502 740 € | B2 |
| Pour information : valeur au prix calculé | — | — | 8 533 × 68 = 580 244 €, soit 580 000 € | B1 |

---

## 3. Cohérence entre sections (contrôle 1)

| Point | Résultat |
|---|---|
| Surface S4 = S7 = S8 | 68 m² partout en S7, mais S4 la met en doute (57 m²) : **contradiction** (B2) |
| Date de valeur S1 = S8 | 14 octobre 2024 partout : conforme |
| Chronologie | Visite = valeur = 14/10/2024 ; références de janvier à août 2024, toutes antérieures : conforme. Date du rapport et de la lettre de mission non renseignées (A9) |
| Adresse, étage, pièces, occupation | rue Keller, 75011, 3e étage sans ascenseur, T3, libre : identiques partout, conforme |
| État S5 / positionnement S7 | État général non qualifié en S5 (espace réservé) : le contrôle est impossible (A8) |
| Ajustement −3 % (étage sans ascenseur) | documenté en S4 : conforme |
| Ajustement −4 % (salle de bains) | documenté en S4 et S5 : conforme |
| Ajustement −2 % (simple vitrage) | documenté en S4 et S5 : conforme |
| Ajustement +1 % (parquet chêne) | documenté en S4 et S5, mais seulement pour l'entrée de 4 m² (S3 des suggestions) |
| Désordre cuisine (S4, S5) → S7 | **absent de S7**, alors que S6 annonce sa prise en compte (B5) |
| DPE E (S3, S6) → S7 | non discuté en S7 (A4) |
| Réserves (S1, S3, S6) → S8 | S8 : « Aucune réserve particulière » : **contradiction** (B4) |
| S7/S8 = arbitrage de l'expert | conforme : comparables (10), base médiane 9 275, quatre ajustements, 8 820 €/m², 68 m², palier de 5 000 €, valeur libre, aucune réserve. Aucun pourcentage ni aucune valeur ajoutés par un agent. Seule exception : l'appréciation « moitié basse de la fourchette » en S6 (A2) |
| S6 du rapport = projet de S6 de `collecte.md` | identique |
| Sommaire = numérotation réelle | conforme |

---

## 4. Registre (contrôle 2)

| Point | Résultat |
|---|---|
| Formules judiciaires (« soussigné », « commis », « ordonnance », « en foi de quoi », « opérations d'expertise ») | aucune (recherche automatique) : conforme |
| Formule de certification en S8 | aucune : conforme |
| Superlatifs et ton d'annonce (« idéal », « standing », « généreux », « optimal ») | aucun : conforme |
| Formules creuses d'IA | aucune |
| Première personne pour les constats | appliquée partout : conforme |
| Formules prudentes en S5 | « susceptible de résulter de », « sans examen approfondi, il n'est pas possible de », « estimations indicatives non contractuelles, à affiner par devis d'entreprise » : conforme |
| Appréciations de valeur hors S7 | S6 : « Ces caractéristiques le rapprochent des références sans ascenseur […] dans la moitié basse de la fourchette » est un positionnement du bien, donc une appréciation de valeur (A2). Le tableau Forces / Faiblesses classe aussi des faits (charges de 2 200 €/an en faiblesse ; S4 des suggestions) |
| Notes internes dans le corps du rapport | lignes 3, 7 et 105, et renvoi à `sorties/collecte.md` en annexe 3 (A1, A7) |

---

## 5. Complétude Charte (partie A)

| Exigence | Statut | Endroit |
|---|---|---|
| Client / donneur d'ordre et lien avec le bien | ✅ | S1 (notaire chargé de la succession) |
| Finalité et utilisation prévue | ✅ | Déclarations |
| Désignation du bien | ⚠️ | Déclarations : pas de référence de lot ni de cadastre (normal en dossier anonymisé, à compléter dans le rapport définitif) ; rattachement de la cave à vérifier (S3) |
| Référentiel et déclaration de conformité | ❌ | Espace réservé (Déclarations) |
| Type de valeur et hypothèses | ⚠️ | Valeur vénale, bien libre : oui ; hors droits et régime fiscal : espaces réservés |
| Absence de conflit d'intérêts | ❌ | Espace réservé |
| Compétence et indépendance | ❌ | Espace réservé |
| Dates de visite, de valeur, de rédaction | ⚠️ | Visite et valeur : oui ; rédaction : espace réservé |
| Personne ayant visité | ⚠️ | Nom et qualité : espace réservé |
| Écarts aux standards justifiés | ❌ | Espace réservé |
| Documents fournis, pièces manquantes, incidence | ⚠️ | Liste présente ; incidence : espace réservé |
| Clauses (utilisation partielle, finalité, interventions consécutives) | ❌ | Espaces réservés |
| Situation géographique | ✅ | S2 |
| Situation juridique | ⚠️ | S3 : état hypothécaire absent, cave à vérifier |
| Situation urbanistique | ⚠️ | S3 : zone « UP » à vérifier (A6) |
| Description technique | ⚠️ | S4, S5 : surface non justifiée (B2), état général non qualifié (A8) |
| Situation locative | ✅ | Bien libre (S1) |
| Analyse de marché (forces, faiblesses, opportunités, risques) | ✅ | S6 |
| Incertitude inhabituelle du marché | ❌ | Espace réservé (fin de S6) |
| Méthodes justifiées, calculs détaillés | ❌ | S7 : calcul du prix unitaire non détaillé et non cohérent (B1) ; motif d'exclusion de la capitalisation discutable (A5) |
| Compréhensible, raisonnement suivi | ⚠️ | Rupture entre les ajustements et le prix unitaire (B1) |
| Faits et opinions distingués | ⚠️ | Appréciation en S6 (A2) |
| Inclus et exclus de la mission | ⚠️ | Quotes-parts exclues : oui ; limites de la mission : espace réservé |
| Signalements (matériaux dangereux, titre, anomalies) | ⚠️ | Amiante négatif ; plomb non communiqué pour un immeuble de 1932, signalé mais sans conclusion |
| Opinion de valeur claire, hors droits, régime fiscal | ⚠️ | 600 000 € clair ; hors droits et fiscalité en espaces réservés |
| Réserves | ❌ | « Aucune réserve particulière » en contradiction avec le dossier (B4) |
| Annexes, pagination, date, signature | ⚠️ | Liste présente ; photos absentes ; pages, date et signature en espaces réservés |
| Mention IA | ⚠️ | Présente, mot pour mot ; « avis de valeur » à trancher (B3) |
| Mention RGPD | ✅ | Présente, mot pour mot |
| Aucune donnée identifiante | ✅ | Notaire désigné par sa qualité, pas de numéro de rue, pas de nom (voir S7 des suggestions) |
| Nature du document (expertise ou avis de valeur) | ⚠️ | Contradiction titre / mention (B3) |

---

## 6. Liste détaillée des points à corriger et des suggestions

### À corriger

**A1. En-tête — ligne 7 : « Écart signalé à l'expert le 26/10/2026 […] — arbitrage maintenu par l'expert. »** Je n'ai trouvé aucune trace de cette confirmation dans le dossier. `arbitrage-expert.md` dit seulement « valeurs de la formation, maintenues telles quelles pour la démonstration ». La fiche mission (question 5) dit : « option 3 […] apparemment choisie : à confirmer par Rob'r ». → Obtenir la confirmation écrite de l'expert ou de Rob'r et la consigner dans `memoire/journal-decisions.md`. Supprimer cette ligne, ainsi que la ligne 3 (« Projet préparé par l'agent Rédacteur… »), du rapport remis.

**A2. S6 — « Ces caractéristiques le rapprochent des références sans ascenseur, dont les prix se situent entre 8 720 et 9 300 €/m², dans la moitié basse de la fourchette. »** Le chiffre est inexact : le milieu de la fourchette vaut 9 166,76 €/m², et C-06 (9 299) et C-09 (9 250) sont au-dessus, et même au-dessus de la médiane (9 275). C'est en outre un positionnement de valeur, qui relève de S7. → Écrire le fait (« les six références sans mention d'ascenseur se situent entre 8 720 et 9 299 €/m² ») et laisser le positionnement à l'expert en S7.

**A3. S8 — « [HORS DROITS ET FRAIS : À CONFIRMER PAR L'EXPERT] » ; Déclarations : « Régime fiscal retenu : [À COMPLÉTER] ».** La Charte demande une opinion hors droits et frais et le régime fiscal. → Compléter (et « acte en main » si le notaire le demande).

**A4. S7 — DPE E (265 kWh/m²/an, GES E)** : il figure en S3 et en S6 (faiblesses et risques), mais S7 ne le discute pas (contrôle B.12). → L'expert ajoute un ajustement, ou une phrase expliquant pourquoi il n'en retient pas.

**A5. S7 — « J'ai écarté la méthode par capitalisation du revenu, s'agissant d'un bien non locatif. »** Un T3 libre à Paris est louable : le motif ne tient pas en l'état. L'arbitrage le reprend tel quel. → L'expert précise le motif (par exemple : usage d'habitation, marché de références directement comparables suffisant ; ou capitalisation conduite à titre de recoupement).

**A6. S3 — « l'immeuble est situé en zone UP du plan local d'urbanisme de Paris ».** `collecte.md` (partie 3) signale que le PLU bioclimatique de Paris a été approuvé le 20 novembre 2024, donc après la date de valeur, et qu'il ne comporte pas de zone « UP » selon la source consultée. Le rapport ne transmet pas cette information. → L'expert vérifie sur le Géoportail de l'urbanisme le document applicable au 14 octobre 2024 et la dénomination exacte de la zone.

**A7. Annexes — « 3. Tableau des références de ventes DVF […] — `sorties/collecte.md`, parties 1.1 à 1.5 ».** Ce renvoi pointe vers un fichier de travail, illisible pour le mandant. → Joindre le tableau des 10 références et les calculs (moyenne, médiane, pondérée) en annexe.

**A8. S5 — « État général : [QUALIFICATION À ARRÊTER PAR L'EXPERT…] ».** Sans cette qualification, on ne peut pas vérifier la cohérence entre l'état décrit en S5 et le positionnement retenu en S7 (contrôle 1). → L'expert qualifie l'état général.

**A9. Déclarations / S8 — « Date d'ouverture de la succession : [NON COMMUNIQUÉE…] » ; S8 : « Cette valeur peut servir de base à l'établissement de la déclaration de succession. »** Si la date de valeur (14 octobre 2024) n'est pas celle retenue pour la succession, la phrase finale peut induire le mandant en erreur. → Confirmer la date de valeur avec le notaire, puis maintenir ou adapter la phrase.

**A10. S6, tableau FFOR — « calendrier légal d'interdiction de mise en location des logements classés E ».** La règle est citée sans source ni échéance (règle d'or n° 2 : toute donnée de réglementation cite sa source). → L'expert ajoute la référence du texte et la date d'échéance applicable aux logements classés E, après vérification.

**A11. Déclarations — « Incidence des pièces manquantes et réserves sur les données invérifiables : [À RÉDIGER PAR L'EXPERT…] ».** Ce paragraphe conditionne B2 et B4. → À rédiger en priorité.

**A12. Annexes — « 5. Photographies [AUCUNE PHOTOGRAPHIE FOURNIE] ».** Le dossier `entrees/photos/` est vide. → Fournir les photos de la visite, au minimum salle de bains, cuisine et fenêtres en simple vitrage, puisque ce sont les points ajustés.

### Suggestions

**S1. S6 — « Aucune vente ne s'écarte de plus de 40 % de la médiane. »** C'est exact, mais la formule paraît technique et peu parlante. → « Toutes les ventes se situent à moins de 6 % de la médiane. »

**S2. S6 — « entre 8 720 et 9 300 €/m² ».** La valeur recalculée est 9 299 €/m² (colonne fournie arrondie). → Harmoniser sur les prix recalculés, comme pour les autres chiffres.

**S3. S7 — « +1 % au titre du parquet en chêne ancien, que j'ai relevé en bon état ».** S4 ne qualifie de « chêne ancien en bon état » que le parquet de l'entrée (4 m²). Séjour et chambres sont seulement « parquetés ». → L'expert précise l'étendue du parquet en chêne, ou la portée de l'ajustement.

**S4. S6, FFOR — « Charges de copropriété de 2 200 €/an » classées en faiblesse ; opportunités (« une vente d'un appartement vétuste dans la même rue », « surface au centre de la plage »).** Ce classement est une appréciation sans point de comparaison, et les « opportunités » listées ne sont pas des opportunités pour le bien. → Ramener les charges en €/m²/an (32,35 €/m²/an) ou les déplacer en faits neutres. L'expert peut formuler l'opportunité réelle (par exemple, potentiel après travaux).

**S5. S6 — « à proximité du bien, entre janvier et août 2024 ».** Le rapport ne donne ni rayon de recherche, ni explication à l'absence de vente en septembre et octobre 2024. → Préciser le périmètre et la période de recherche.

**S6. Volume.** Le cœur S1 à S8 compte environ 2 060 mots (FFOR compris), contre 1 400 à 1 700 visés par la formation. S3 (256 mots) et S5 (296 mots) sont les sections les plus longues. → Resserrer si l'expert le souhaite.

**S7. S3 — « copropriété de 12 lots […] quote-part 187/10 000 tantièmes ».** Combinées à la rue, à l'étage et à la valeur, ces données rendent le lot identifiable. C'est normal dans le rapport remis au notaire, mais à surveiller dans le dossier synchronisé (règle d'or n° 3). Dossier fictif : pas d'action dans ce cas.

**S8. Chronologie.** Le projet est daté du 26 octobre 2026 pour une valeur au 14 octobre 2024. Si le rapport définitif est signé longtemps après la date de valeur, préciser qu'il s'agit d'une valeur rétrospective, établie sur des données antérieures à cette date.

---

## 7. Espaces réservés restants (tâches de l'expert)

| Ligne | Espace réservé |
|---|---|
| 13 | Intitulé du document (lié à B3) |
| 23, 79, 223 | Date du rapport |
| 25 | Coordonnées de l'expert, organisme, assurance RC professionnelle |
| 67 | Hors droits et frais / acte en main ; régime fiscal |
| 69 | Référentiel et déclaration de conformité |
| 71 | Absence de conflit d'intérêts |
| 73 | Compétence et indépendance |
| 75 | Nombre d'interventions consécutives sur le bien |
| 77 | Nom et qualité de l'expert ayant visité |
| 79 | Date de la lettre de mission ; date d'ouverture de la succession |
| 91 | Incidence des pièces manquantes, réserves (dont la surface) |
| 93 | Justification des écarts aux standards |
| 105 | Décision de Rob'r sur « avis de valeur » (note interne à supprimer) |
| 121 | Rattachement de la cave au lot |
| 123 | Zone PLU applicable au 14 octobre 2024 |
| 129 | Superficie retenue et sa source |
| 137 | Qualification de l'état général |
| 160 | Source de la colonne « étage / ascenseur » ; nature des surfaces des références |
| 187 | Incertitude inhabituelle du marché, ou « néant » |
| 207 | Hors droits et frais en S8 |
| 213, 215, 217 | Clauses : utilisation partielle, usage limité, limites de la mission |
| 223 | Lieu |
| 225 | Nombre de pages |
| 227 | Signature et cachet |
| 237 | Photographies |
| 238 | Textes généraux (définitions, méthodes) |

---

## 8. À valider par l'expert (par ordre d'importance)

1. **Prix unitaire** : 8 820 €/m² contre 8 533 €/m² issus des ajustements annoncés (−8 %). Justifier l'écart, ou mettre en cohérence ajustements et prix, puis écrire le calcul complet en S7 (B1).
2. **Surface** : 68 m² ou 57 m² ? Source et nature (loi Carrez ou habitable). Enjeu de 97 020 € (B2).
3. **Nature du document** : « rapport d'expertise » ou « avis de valeur » dans la mention IA (décision de Rob'r), puis suppression des notes internes (B3, A1).
4. **Réserves en S8** : remplacer « Aucune réserve particulière » par les réserves réellement retenues (B4, A11).
5. **Cuisine et DPE E** : ajustement en S7 ou justification de leur absence, et correction de la phrase d'annonce en S6 (B5, A4).
6. **Hors droits, régime fiscal, date de valeur au regard de la succession** (A3, A9).
7. **Zone PLU applicable au 14 octobre 2024** et motif d'exclusion de la capitalisation (A6, A5).
8. **Qualification de l'état général** en S5, textes standard, signature (A8, partie 7).
