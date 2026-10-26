# Arbitrage de l'expert — valeurs de la formation (À VALIDER PAR ROB'R)

Ce sont les décisions d'expert utilisées dans la formation (module 5 bis, prompt 5). **Elles ne doivent pas être placées dans `entrees/` avant validation**, car elles contiennent un écart :

| | Formation | Recalcul |
|---|---|---|
| Base | Médiane 9 275 €/m² | 9 275 €/m² ✅ |
| Ajustements | −3 % (3e sans ascenseur), −4 % (SDB vétuste), −2 % (double vitrage partiel), +1 % (parquet) | Total **−8 %** |
| Prix unitaire | **8 820 €/m²** | 9 275 × 0,92 = **8 533 €/m²** (8 820 correspond à −4,9 %) |
| Valeur avant arrondi | 8 820 × 68 = 599 760 € | 8 533 × 68 = **580 244 €** |
| Valeur arrondie (palier 5 000 €) | 600 000 € | **580 000 €** |

## Trois options pour la démo
1. **Corriger le prix** : garder les ajustements (−8 %), retenir 8 533 €/m² → 580 000 €.
2. **Corriger les ajustements** : garder 8 820 €/m² et 600 000 €, avec des ajustements totalisant environ −5 % (à choisir par Rob'r).
3. **Garder l'écart volontairement** pour montrer en direct que l'agent Contrôleur le détecte. Attention : des participants de la formation pourraient reconnaître l'erreur dans le support.

Une fois l'option choisie, copier le formulaire rempli dans `entrees/arbitrage-expert.md`.

## Formulaire (valeurs de la formation)
- Comparables retenus : les 10 (aucun écarté)
- Base : médiane 9 275 €/m²
- Méthode retenue : comparaison directe par le marché
- Méthodes écartées : capitalisation (bien non locatif) ; coût de remplacement (immeuble ancien, marché de comparables disponible)
- Ajustements : −3 % 3e étage sans ascenseur ; −4 % SDB vétuste, remise en état complète ; −2 % double vitrage partiel (ch. 2 et cuisine) ; +1 % parquet chêne ancien en bon état
- Prix unitaire retenu : 8 820 €/m² ⚠️
- Surface : 68 m² — Palier d'arrondi : 5 000 €
- Qualification : valeur vénale libre
- Réserves : aucune
