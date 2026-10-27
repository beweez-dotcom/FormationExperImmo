// Enregistrement de la vidéo de secours de la démo « Expertise augmentée ».
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const DIR = __dirname;
const PAGE = '/home/claude/formationexperimmo/app/demo/index.html';
const FRAMES = path.join(DIR, 'frames');
const W = 1440, H = 810, OW = 1920, OH = 1080;

const sleep = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  fs.rmSync(FRAMES, { recursive: true, force: true });
  fs.mkdirSync(FRAMES);
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 4 / 3, locale: 'fr-FR', colorScheme: 'light' });
  const page = await context.newPage();

  await page.route('**/*', async route => {
    const u = route.request().url();
    if (u.startsWith('https://demo.local/')) return route.fulfill({ contentType: 'text/html; charset=utf-8', body: fs.readFileSync(PAGE) });
    if (u.includes('fonts.googleapis.com/css2')) return route.fulfill({ contentType: 'text/css', body: fs.readFileSync(path.join(DIR, 'fonts.css')) });
    if (u.includes('fonts.googleapis.com/f/')) return route.fulfill({ contentType: 'font/woff2', body: fs.readFileSync(path.join(DIR, 'f', u.split('/f/')[1])) });
    if (u.includes('marked.min.js')) return route.fulfill({ contentType: 'application/javascript', body: fs.readFileSync(path.join(DIR, 'node_modules/marked/marked.min.js')) });
    return route.abort();
  });

  await page.goto('https://demo.local/');
  await page.evaluate(() => document.fonts.ready);

  // Calque : sous-titres, curseur, cartons
  await page.addStyleTag({ content: `
    #cap { position: fixed; left: 50%; bottom: 28px; transform: translateX(-50%); max-width: 1180px; width: max-content;
      background: rgba(20,24,32,.92); color: #fff; font: 500 25px/1.35 'IBM Plex Sans Condensed', sans-serif; padding: 14px 26px;
      border-radius: 8px; z-index: 9999; text-align: center; opacity: 0; transition: opacity .35s; box-shadow: 0 6px 24px rgba(0,0,0,.25); }
    #cap.on { opacity: 1; }
    #cap b { color: #ffd27a; font-weight: 600; }
    #cur { position: fixed; left: 0; top: 0; width: 22px; height: 22px; margin: -11px 0 0 -11px; border-radius: 50%;
      background: rgba(220,60,40,.35); border: 2px solid rgb(220,60,40); z-index: 10000; pointer-events: none;
      transition: left .7s cubic-bezier(.4,0,.2,1), top .7s cubic-bezier(.4,0,.2,1); }
    #cur.click::after { content: ''; position: absolute; inset: -10px; border-radius: 50%; border: 3px solid rgb(220,60,40); animation: ring .5s ease-out; }
    @keyframes ring { from { transform: scale(.4); opacity: 1 } to { transform: scale(1.4); opacity: 0 } }
    #card { position: fixed; inset: 0; background: #1b2430; color: #fff; z-index: 10001; display: grid; place-content: center; text-align: center;
      gap: 18px; font-family: 'IBM Plex Sans Condensed', sans-serif; opacity: 0; transition: opacity .6s; pointer-events: none; padding: 40px; }
    #card.on { opacity: 1; }
    #card h1 { font: 700 64px/1.1 'Source Serif 4', serif; margin: 0; }
    #card p { font-size: 30px; margin: 0; color: #d7dde6; max-width: 1100px; }
    #card .sig { font-size: 40px; color: #ffd27a; font-weight: 600; }
    .hl { outline: 4px solid rgb(220,60,40) !important; outline-offset: 4px; border-radius: 4px; transition: outline .3s; }
  `});
  await page.evaluate(() => {
    for (const id of ['cap', 'cur', 'card']) { const d = document.createElement('div'); d.id = id; document.body.appendChild(d); }
    const c = document.getElementById('cur'); c.style.left = '800px'; c.style.top = '450px';
  });

  // Capture image par image (protocole du navigateur), horodatée
  const cdp = await context.newCDPSession(page);
  const frames = [];
  cdp.on('Page.screencastFrame', async f => {
    const n = String(frames.length).padStart(6, '0');
    fs.writeFileSync(path.join(FRAMES, n + '.jpg'), Buffer.from(f.data, 'base64'));
    frames.push({ file: n + '.jpg', t: f.metadata.timestamp });
    try { await cdp.send('Page.screencastFrameAck', { sessionId: f.sessionId }); } catch (e) {}
  });
  await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 92, maxWidth: OW, maxHeight: OH, everyNthFrame: 1 });

  // Outils de mise en scène
  const cap = async (html, ms = 4500) => {
    await page.evaluate(h => { const c = document.getElementById('cap'); c.classList.remove('on'); setTimeout(() => { c.innerHTML = h; c.classList.add('on'); }, h ? 250 : 0); if (!h) c.innerHTML = ''; }, html);
    await sleep(ms);
  };
  const card = async (html, ms) => {
    await page.evaluate(h => { const c = document.getElementById('card'); c.innerHTML = h; c.classList.add('on'); }, html);
    await sleep(ms);
    await page.evaluate(() => document.getElementById('card').classList.remove('on'));
    await sleep(700);
  };
  const point = async (sel, ms = 800) => {
    const el = page.locator(sel).first();
    await el.scrollIntoViewIfNeeded();
    const b = await el.boundingBox();
    await page.evaluate(([x, y]) => { const c = document.getElementById('cur'); c.style.left = x + 'px'; c.style.top = y + 'px'; }, [b.x + b.width / 2, b.y + b.height / 2]);
    await sleep(ms);
  };
  const click = async (sel, ms = 900) => {
    await point(sel);
    await page.evaluate(() => { const c = document.getElementById('cur'); c.classList.remove('click'); void c.offsetWidth; c.classList.add('click'); });
    await page.locator(sel).first().click();
    await sleep(ms);
  };
  const hl = async (sel, on = true) => page.evaluate(([s, o]) => document.querySelectorAll('.hl').forEach(e => e.classList.remove('hl')) || (o && document.querySelector(s) && document.querySelector(s).classList.add('hl')), [sel, on]);
  const scrollY = async (y, ms = 1400) => { await page.evaluate(v => window.scrollTo({ top: v, behavior: 'smooth' }), y); await sleep(ms); };
  const scrollToText = async (tag, text, offset = 90, ms = 1600) => {
    await page.evaluate(([t, x, o]) => {
      const el = [...document.querySelectorAll('#panel ' + t)].find(e => e.textContent.includes(x));
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - o, behavior: 'smooth' });
    }, [tag, text, offset]);
    await sleep(ms);
    await page.evaluate(([t, x, o]) => {
      const el = [...document.querySelectorAll('#panel ' + t)].find(e => e.textContent.includes(x));
      if (el && Math.abs(el.getBoundingClientRect().top - o) > 20) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - o, behavior: 'smooth' });
    }, [tag, text, offset]);
    await sleep(700);
  };
  const tab = async t => { await page.evaluate(() => { const c = document.getElementById('cap'); c.classList.remove('on'); }); await click('.tab[data-t="' + t + '"]', 700); };

  // ---------- Scénario ----------
  await card('<h1>Expertise augmentée</h1><p>Une équipe d’agents prépare le rapport d’expertise.<br>L’expert décide de la valeur, et signe.</p><p class="sig">L’IA rédige. L’expert signe.</p>', 6500);

  await cap('Le dossier : un <b>T3 rue Keller, Paris 11e</b>, en succession, à la demande d’un notaire. Données fictives.', 5500);
  await point('.facts', 600);
  await cap('L’expert fournit sa lettre de mission, ses <b>notes de visite</b> et un tableau de <b>10 ventes</b>. Rien d’autre.', 5000);

  // Phase 1
  await click('#reset', 800);
  await cap('<b>Phase 1</b> : quatre agents préparent le dossier. On lance.', 3000);
  await click('#run', 300);
  await cap('<b>Mission</b> lit la lettre de mission et liste les pièces… et celles qui manquent.', 3700);
  await cap('<b>Collecte</b> calcule le marché pendant que <b>Visite</b> rédige la description.', 3600);
  await cap('<b>Rédacteur</b> assemble les sections 1 à 6, les mentions et les clauses.', 4200);
  await page.waitForFunction(() => document.querySelector('.step[data-k="expert"]').dataset.state === 'wait');
  await cap('Les sections 7 et 8 — la méthode et la valeur — <b>restent vides</b> : elles attendent l’expert.', 5000);

  // Description
  await tab('visite');
  await cap('Les notes abrégées de la visite deviennent un texte d’expert, à la <b>première personne</b>.', 4500);
  await scrollToText('h2', '4', 90, 1800);
  await sleep(2500);
  await scrollToText('h2', '5', 90, 1800);
  await cap('Les points faibles sont écrits <b>sans les adoucir</b> : salle de bains, cuisine, simple vitrage.', 5000);
  await page.evaluate(() => document.getElementById('cap').classList.remove('on'));
  await scrollY(0, 1000);

  // Marché
  await tab('collecte');
  await cap('Le marché : <b>médiane 9 275 €/m²</b>. Chaque chiffre est <b>calculé</b>, jamais écrit de mémoire.', 5000);
  await scrollToText('table', '', 140, 1800);
  await sleep(2500);
  await cap('À ce stade, <b>aucune valeur</b> n’est écrite dans le rapport.', 4000);
  await page.evaluate(() => document.getElementById('cap').classList.remove('on'));
  await scrollY(0, 1000);

  // Arbitrage
  await tab('arbitrage');
  await cap('<b>Temps fort n° 1 — l’expert décide.</b> Base, ajustements, prix au m², arrondi : c’est son formulaire.', 6000);
  await point('#adj-asc', 500); await point('#adj-sdb', 500); await point('#adj-vit', 500); await point('#adj-parq', 700);
  await cap('Ses ajustements : −3 %, −4 %, −2 %, +1 %. Il retient <b>8 820 €/m²</b> sur <b>68 m²</b>.', 5000);
  await page.evaluate(() => document.getElementById('calcbox').scrollIntoView({ behavior: 'smooth', block: 'center' }));
  await sleep(1200);
  await hl('#calcbox');
  await point('#calcbox .gap', 600);
  await cap('Mais ses propres ajustements donnent <b>8 533 €/m²</b>. La page affiche l’écart en rouge : <b>+287 €/m²</b>.', 6500);
  await hl('', false);

  // Blocage
  await cap('<b>Temps fort n° 2.</b> Je retire la case « Je maintiens mes valeurs », et je valide.', 4000);
  await click('#f-maint', 900);
  await click('#validate', 300);
  await page.waitForFunction(() => document.querySelector('.step[data-k="redac2"]').dataset.state === 'block');
  await scrollY(0, 900);
  await point('.step[data-k="redac2"]', 600);
  await hl('.step[data-k="redac2"]');
  await cap('Le <b>Rédacteur refuse d’écrire</b> la conclusion : il ne corrige pas le chiffre à la place de l’expert, il ne le recopie pas en silence.', 7000);
  await cap('Il demande à l’expert de <b>trancher</b>.', 3500);
  await hl('', false);

  // Maintien
  await cap('L’expert maintient ses valeurs, <b>en connaissance de cause</b>, et relance.', 4000);
  await click('#f-maint', 900);
  await click('#validate', 300);
  await page.waitForFunction(() => document.querySelector('.step[data-k="controleur"]').dataset.state === 'done', null, { timeout: 30000 });
  await sleep(800);

  // Rapport S7 / S8
  await tab('rapport');
  await scrollToText('h2', '7. Méthode', 90, 2000);
  await cap('Les sections 7 et 8 s’écrivent avec les décisions de l’expert, telles qu’il les a arrêtées.', 5000);
  await scrollToText('h2', '8. Conclusion', 90, 1800);
  await cap('Valeur : <b>600 000 €</b>, en chiffres et en lettres. « Aucune réserve particulière ».', 5500);
  await page.evaluate(() => document.getElementById('cap').classList.remove('on'));
  await scrollY(0, 1000);

  // Contrôle
  await tab('controle');
  await cap('<b>Temps fort n° 3.</b> Le Contrôleur recalcule tout et relit comme un confrère exigeant.', 5000);
  await hl('.tally');
  await cap('<b>3 points bloquants</b>, sur un rapport qui avait l’air terminé.', 4500);
  await hl('', false);
  await point('.findings .finding.crit >> nth=0', 500);
  await cap('1. Le prix au m² <b>ne découle pas</b> du calcul annoncé.', 4500);
  await point('.findings .finding.crit >> nth=1', 500);
  await cap('2. « Aucune réserve » alors que les 68 m² <b>ne sont pas mesurés</b> (57 m² détaillés) et que des pièces manquent.', 6500);
  await point('.findings .finding.crit >> nth=2', 500);
  await cap('3. Une note interne à retirer avant diffusion.', 4000);
  await point('.findings .finding.warn >> nth=0', 500);
  await cap('Et un point de méthode : 8 820 €/m² est <b>sous toutes les ventes en état courant</b>. Risque de double comptage.', 6500);
  await scrollY(0, 900);

  // Correction en direct
  await tab('arbitrage');
  await cap('L’expert corrige. D’abord, il ajoute la <b>réserve</b> : certificat Carrez et pièces non communiquées.', 4500);
  await click('#f-res', 800);
  await tab('controle');
  await hl('.tally');
  await cap('Un bloquant disparaît.', 3500);
  await hl('', false);
  await tab('arbitrage');
  await cap('Puis il aligne son prix sur son propre calcul : <b>8 533 €/m²</b>.', 3500);
  await point('#f-prix', 400);
  await page.locator('#f-prix').click({ clickCount: 3 });
  await page.keyboard.type('8533', { delay: 220 });
  await sleep(600);
  await page.evaluate(() => document.getElementById('calcbox').scrollIntoView({ behavior: 'smooth', block: 'center' }));
  await sleep(1100);
  await hl('#calcbox');
  await cap('L’écart disparaît. La valeur passe à <b>580 000 €</b>. C’est l’expert qui l’a fait bouger, pas la machine.', 6500);
  await hl('', false);
  await page.evaluate(() => document.getElementById('cap').classList.remove('on'));
  await scrollY(0, 900);
  await tab('controle');
  await hl('.tally');
  await cap('<b>Zéro bloquant.</b> Le rapport peut être relu, puis signé.', 5000);
  await hl('', false);
  await tab('rapport');
  await scrollToText('h2', '8. Conclusion', 90, 1800);
  await cap('La conclusion est à jour : <b>580 000 €</b>, avec sa réserve.', 5000);
  await scrollY(0, 900);
  await cap('', 300);

  // Fin
  await card('<p>Le même Contrôleur peut aussi relire le rapport d’un confrère :<br>une mission prévue par la Charte de l’expertise (Titre II, ch. 6).</p>', 6500);
  await card('<p>Le rapport mentionne l’usage d’outils d’IA et la protection des données (RGPD),<br>conformément au chapitre 6 de la Charte.</p>', 6000);
  await card('<h1>Expertise augmentée</h1><p class="sig">L’IA rédige. L’expert signe.</p>', 6000);
  await page.evaluate(() => document.getElementById('card').classList.add('on'));
  await sleep(1500);

  await cdp.send('Page.stopScreencast');
  await sleep(300);
  const end = Date.now() / 1000;
  // Liste ffmpeg : durée de chaque image = écart jusqu'à la suivante
  let list = '';
  frames.forEach((f, i) => {
    const next = i + 1 < frames.length ? frames[i + 1].t : frames[i].t + 1.5;
    list += "file '" + path.join(FRAMES, f.file) + "'\nduration " + Math.max(0.001, next - f.t).toFixed(4) + '\n';
  });
  list += "file '" + path.join(FRAMES, frames[frames.length - 1].file) + "'\n";
  fs.writeFileSync(path.join(DIR, 'frames.txt'), list);
  console.log('images', frames.length, 'durée', (frames[frames.length - 1].t - frames[0].t + 1.5).toFixed(1), 's');
  await browser.close();
})();
