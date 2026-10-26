---
name: donnees-marche
description: Comment obtenir, nettoyer, calculer et présenter les données de marché d'une expertise (DVF, PERVAL, observatoires) et les données publiques (PLU, risques), sans jamais inventer un prix. À utiliser pour toute collecte ou analyse de données de marché et pour la section 6.
---

# Données de marché et d'environnement

> Source : module 3 de la formation (« L'IA ne doit jamais être la source des données de marché. Elle les interprète, les synthétise, les rédige — mais les chiffres viennent toujours de sources vérifiables. »)

## Règle absolue
**Aucun prix de marché sans tableau fourni.** Les chiffres « de mémoire » d'une IA ont 18 à 24 mois de retard et peuvent s'écarter de 5 à 15 % du marché. Sans tableau dans `entrees/` : `[TABLEAU DES COMPARABLES À FOURNIR PAR L'EXPERT]`.

## Les sources
| Source | Ce qu'elle apporte | Limites |
|---|---|---|
| **DVF Etalab** (app.dvf.etalab.gouv.fr) | Ventes réelles depuis 2014, filtres, export CSV. Recommandée. | Mises à jour périodiques ; adresse approximative |
| DVF brut (data.gouv.fr) | Fichier complet par département | Volumineux, pour usage avancé |
| Patrim (impots.gouv.fr) | Recherche par rayon autour d'une adresse | Accès réservé, pas d'export |
| **PERVAL / BIEN** (notaires) | Prix certifié **et** état, étage, ascenseur, annexes, DPE | Payant |
| MeilleursAgents, observatoires, FNAIM | Tendances et contexte | Ce sont des indices, pas des ventes |
| Annonces (SeLoger, PAP…) | État déclaré, photos d'un bien vendu | Non officiel ; prix affiché ≠ prix de vente |
| Géoportail de l'urbanisme | Zone PLU | À vérifier par certificat d'urbanisme |
| Géorisques | Risques naturels et technologiques | — |

**DVF ne donne pas** l'état du bien, l'étage, l'ascenseur, l'orientation, le DPE. Une colonne « état » dans un tableau vient de PERVAL, d'une annonce ou du jugement de l'expert : sa source doit être indiquée. **Ne jamais compléter une colonne vide.**

## Préparer le tableau (workflow de la formation)
1. Filtrer : type de local (appartement / maison), nature « Vente », nombre de pièces ±1, période et périmètre adaptés. Viser 10 à 15 références.
2. Colonnes utiles : date, adresse approximative, surface réelle bâtie, prix total, nombre de pièces, **prix/m² calculé** (prix ÷ surface), et l'état si une source le permet.
3. Écarter les aberrations : prix/m² inférieur à 60 % ou supérieur à 140 % de la médiane (vente atypique, viager, lot avec dépendances). Lister les ventes écartées et le motif.
4. Succession : prendre la période qui correspond à la **date de valeur** (date du décès si la mission le prévoit).

## Calculer — toujours AVANT de rédiger, et en les montrant
- Fourchette (min–max) et écart en %.
- Moyenne arithmétique **et** moyenne pondérée par la surface (Σ prix ÷ Σ surfaces).
- Médiane (n pair : moyenne des deux valeurs centrales).
- Segmentation par état si la colonne existe et est sourcée.
- Tendance chronologique sur la période.
- Comparable le plus proche du bien expertisé.

Utiliser un outil de calcul (pas de calcul mental) et vérifier que le texte reprend **exactement** les résultats.

## Présenter
- Tableau : réf., date, adresse approximative, surface, prix, prix/m², source (et état, étage si sourcés).
- Toujours citer la source et la période. Ne pas présenter des annonces comme des ventes.
- Positionner le bien dans la fourchette **sans en tirer de valeur** : la valeur vient de l'arbitrage de l'expert (phase 2).
