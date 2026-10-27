# Vidéo de secours de la démonstration

La vidéo (`expertise-augmentee-video-secours.mp4`, 1920 × 1080, 4 min 25, sans son, sous-titrée) rejoue le script de démonstration sur la page « Expertise augmentée » : phase 1, arbitrage et écart de +287 €/m², blocage du Rédacteur, maintien, 3 bloquants du Contrôleur, correction en direct (réserve, puis 8 533 €/m² → 580 000 €), contrôle d'un rapport de tiers, mention IA/RGPD.

Elle est conservée sur le disque (dossier `app/video/`), pas sur GitHub (fichier trop lourd).

Pour la refaire après une modification de la page : `record.js` pilote la page avec Playwright et capture l'écran image par image ; il lui faut les polices (paquets npm @fontsource) et marked 4.3.0 installés à côté du script, puis un montage ffmpeg de `frames.txt` en H.264.
