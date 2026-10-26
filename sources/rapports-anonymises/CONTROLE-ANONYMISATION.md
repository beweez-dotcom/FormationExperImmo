# Contrôle de l'anonymisation — 26 octobre 2026

Ce document décrit ce qui a été retiré des 3 rapports, **sans reprendre les données d'origine** (sinon il annulerait l'anonymisation).

## Les fichiers

| Fichier | Source | Contenu |
|---|---|---|
| `expert1-rapport1-valeur-venale-villa-financement` (.pdf + .md) | Rapport 1 (scanné) | Valeur vénale d'une villa, Var, 2025, demande de financement |
| `expert2-rapport1-valeur-locative-hotel-bail-commercial` (.pdf + .md) | Rapport 2 | Valeur locative d'un hôtel-restaurant, Var, expertise amiable dans un litige de bail commercial |
| `expert2-rapport2-valeur-venale-appartement-succession` (.pdf + .md) | Rapport 3 | Valeur vénale d'un T3 avec cave et parking, Var, succession (calcul de soulte) |

Le **.pdf** garde la mise en page, pour la lecture humaine. Le **.md** est la version texte qui servira aux agents.

## Ce qui a été remplacé

| Catégorie | Remplacé par |
|---|---|
| Clients, héritiers, conjoints, anciens propriétaires | Monsieur A, Madame B… (une lettre par personne, constante dans le rapport) |
| Les deux experts, l'expert associé, leurs cabinets | [Expert 1], [Expert 2], [Cabinet de l'expert 2] |
| Experts judiciaires, notaires, avocat, géomètre, autres experts cités | l'expert judiciaire 1 / 2, un notaire, l'avocat, le géomètre-expert |
| Société propriétaire et hôtel exploitant (rapport 2) | SCI X, Hôtel Y |
| Adresses des biens, rues, résidence, lotissement, quartier voisin, cours d'eau | [adresse du bien], [résidence], boulevard principal, promenade du front de mer… |
| Adresses, téléphones, emails, site web, SIRET, n° d'assurance et d'agrément des experts | [adresse…], [tél.], [email], [SIRET]… |
| Références cadastrales, numéros de lots, n° de permis de construire, n° ADEME, n° de dossier | [réf. cadastrale], [parcelle], lot [n°], [n° de permis], [n° ADEME] |
| Agence et syndic cités comme sources (rapport 3) | une agence locale, [syndic] |

**Conservé volontairement** : communes, types de biens, surfaces, dates, prix, comparables, méthodes, calculs, valeurs, structure et style de rédaction. C'est la matière utile aux agents.

## Images retirées

- Rapport 1 : photo de couverture de la villa, plan cadastral, cartes de situation (pages 5, 7, 13, 14, 15, 16, 23), photos extérieures (pages 25 à 27), signatures et cachets, pied de page de l'expert sur toutes les pages.
- Rapport 2 : photo de l'hôtel (enseigne lisible), plan cadastral, cartes et vues aériennes situant l'hôtel, cachet et signature.
- Rapport 3 : photo de la résidence, vues aériennes et photo d'entrée (adresse lisible), plan cadastral, plan de zonage avec la parcelle, cachet et signature, **filigrane au nom du cabinet** sur toutes les pages.

Conservées : photos intérieures (rapport 1), photos générales de la ville (rapport 2), plan de l'appartement (rapport 3), annonces de biens concurrents, graphiques.

## Méthode et vérifications

- **Rapports 2 et 3** : suppression réelle du texte dans le PDF, pas un cache posé dessus. Propriétés cachées du fichier vidées (le titre interne du rapport 2 contenait le nom de la société).
- **Rapport 1** (pages scannées) : lecture automatique de chaque page, puis masquage des mots sensibles directement dans l'image.
- **Contrôle final** : relecture automatique des fichiers produits à la recherche de chacun des termes sensibles. Aucun n'a été retrouvé.

## Points d'attention

1. **Les originaux contenaient de faux caviardages.** Dans les rapports 2 et 3, certains noms et montants avaient été rendus invisibles à l'écran, mais ils restaient lisibles par simple copier-coller. Ils sont maintenant réellement supprimés. C'est un bon exemple à montrer aux experts.
2. **Le rapport 2 reste reconnaissable** par un connaisseur local. Un hôtel historique en front de mer, dans une ville donnée, se devine même sans son nom. Il peut servir de modèle aux agents, mais ne doit pas être projeté en démonstration publique.
3. **Le rapport 1 a été lu par OCR.** Le texte .md contient quelques erreurs de lecture, sans conséquence pour son usage de modèle.
4. **Les originaux** ne doivent pas rester dans ce dossier synchronisé : voir la note à Rob'r.
