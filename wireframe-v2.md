# IOMI Landing v2 — Wireframe (validé sur 14 inspirations)

Design system inchangé : dark IOMI, Archivo, #26BC4B, surfaces #111212/#161717/#1E1F1F.
Ratio produit : 2 sections avec UI (Dashboard + AI) + 1 bento à mini-extraits. Tout le reste = texte, cards, photo, preuve.
`[PHOTO]` = image d'inspiration laissée en placeholder, à générer par le designer.

---

## 1. NAV — inchangée
Logo · AI · Dashboard · Goals · Pricing · [Create account]

## 2. HERO — *inspiration : saas-site-06 + finix-07 (headline centré, 1 seul visuel), arc conservé (signature IOMI)*
- Eyebrow chip : `● The AI Wealth OS for founders & operators`
- H1 (2 lignes) : **"Wealth that grows with your ambition."**
  (alt A : "Your wealth. Finally under control." / alt B : garder "Your wealth, intelligently organized.")
- Sub (1 ligne seulement) : "Personal, business, real estate, crypto — one dashboard, one score, one plan."
- CTA : [Create your account] [▶ Watch the tour]  · "1-month free trial · No credit card required"
- Visuel : Bank Stack Arc conservé + 2 micro-stats flottantes
- **Supprimé du hero : rien d'autre. Le dashboard n'est PAS dans le hero.**

## 3. TRUST BAR — *inspiration : saas-site-06 ("Trusted by 4,000+ Growing Companies")*
- Ligne : **"Trusted by 500+ founders & operators"**
- 6 logos gris (Chase, Fidelity, Vanguard, Schwab, Coinbase, Plaid) + "12,000+ institutions"
- Remplace l'actuelle stripe (même contenu, présentation logos gris à plat, pas de chips)

## 4. MANIFESTE / PROBLÈME — *inspiration : zerion-03 (bloc typo plein écran) + finlyx-05 (mots colorés)*
- Grande typo centrée, 3 temps, mots clés en vert :
  **"Your money is everywhere. Your **clarity** is nowhere.**
  **Bank apps show fragments. Spreadsheets show the past.**
  **IOMI shows the **whole picture** — live."**
- Pas d'UI, pas de card. Lignes révélées au scroll (existant, resserré de 6 à 3 lignes).

## 5. "WHAT IOMI DOES" — 3 CARDS TEXTE — *inspiration : panyoo-04 "Managing Your Finances Is Now Easy" (3 cards icône+texte, zéro UI)*
- Header gauche : **"Managing your wealth is now simple."** + sub court + [Learn more]
- 3 cards (icône ronde verte, titre, 2 lignes) :
  1. **See everything** — "Every account, asset and liability in one live dashboard. Personal and business, never mixed."
  2. **Understand instantly** — "One score — your CES — tells you how hard your capital is working, and what's dragging it."
  3. **Act with confidence** — "AI recommendations ranked by impact. Simulate any move before you make it."
- **Ces 3 cards remplacent 3 sections de mocks actuelles (Goals détaillés, Capital Ideas, Performance) dans le flux principal.**

## 6. MOMENT PRODUIT #1 : LE DASHBOARD — *inspiration : panyoo-04 hero-mock (un seul grand mock centré) — section actuelle conservée mais seule*
- Header : **"Every asset. One view."** + toggle Personal/Business
- Le grand dashboard mock existant (avec double courbe Business, donuts, compteurs)
- 3 bullets texte sous le mock (au lieu de sections séparées) :
  "● Live sync via Plaid · ● Business & personal separated · ● Valuation + book value per entity"

## 7. STATS ROW — *inspiration : finlyx-05 (1M+/70%/30sec avec descriptions) — existante, reformulée*
- **$2.5B+** Assets tracked across all classes
- **12,000+** Institutions connected via Plaid
- **30 sec** From sync to first insight
- **99.9%** Uptime SLA

## 8. MOMENT PRODUIT #2 : L'IA — *section AI actuelle conservée telle quelle (chat typewriter + CES ring + Daily Brief)*
- Header : **"An analyst that never sleeps."**
- C'est le 2e et DERNIER grand moment UI de la page.

## 9. BENTO FEATURES — *inspiration : panyoo-04 "We Provide Many Interesting Features" + finix-07 "Smarter Finance Simplified" (grille asymétrique, mini-extraits d'UI)*
- Header : **"Everything else you'd expect. And a few things you wouldn't."**
- Grille asymétrique 2 rangées (grande carte + petite, puis inversé) :
  1. **Goals with an AI plan** (large) — mini-extrait : 1 barre striée + pill "89% probability"
  2. **Next Dollar Allocation** (small) — mini-extrait : 2 tuiles $25K/$13K
  3. **Benchmark vs market** (small) — mini-extrait : 2 courbes + "+3.6% alpha"
  4. **Daily Briefing** (large) — mini-extrait : carte brief-bg réduite
- Chaque card = titre + 1 ligne + mini-visuel ≤ 120px de haut. Pas de mock fenêtré complet.

## 10. WHO IS IT FOR — *inspiration : finlyx-06 "Who is it for" (3 cards personas, centre en blanc/highlight)*
- Header : **"Built for people whose finances outgrew the apps."**
- 3 cards : **Founders** (bullets: entity separation, valuation vs book value, idle cash detection) · **Operators & executives** (centre, highlight vert : equity + RSU tracking, CES, daily brief) · **Self-directed investors** (multi-broker, crypto, benchmark & alpha)
- CTA sur la card centrale : [Start free trial]

## 11. CALCULATEUR IDLE CASH — *inspiration : zerion-12 "Estimate your ROI" (card claire sur fond photo dramatique vert)*
- Fond : brief-bg.png (déjà exporté de Figma) plein écran assombri
- Header : **"How much is your idle cash costing you?"**
- Card : slider "Cash sitting in low-yield accounts: $180k" → résultat live : **"$10,800/yr"** "left on the table — every year you wait"
- CTA : [Put it to work →]
- (Statique acceptable en v1 : 3 presets $50k/$180k/$500k)

## 12. SECURITY — *inspiration : finlyx-06 "Security & Trust — Built into the system" (titre + bullets + card System overview)*
- H2 : **"Security & trust, built into the system."**
- Gauche : paragraphe + [See the full security overview]
- Droite : 3 bullets (Read-only by design · AES-256 encrypted · AI privacy: no identifiers shared) + card sombre "System overview" (contenu sécurité existant condensé)
- `[PHOTO]` visuel abstrait 3D (placeholder : image pipes de finlyx-06)

## 13. TESTIMONIALS — *inspiration : zerion-03 + panyoo-05 (carrousel, card centrale en vert)*
- Header : **"What do our members say?"**
- Carrousel existant, card centrale re-stylée fond vert #26BC4B texte noir (signature zerion)
- Spotlight testimonial existant (citation $180k) fusionné : il devient la card centrale

## 14. COMPARISON — *inspiration : zerion-08 (colonne verte highlight) — table existante conservée*
- Header reformulé : **"Maximize your money's potential."** + sub "Spreadsheets had a good run."
- (Le morph spreadsheet actuel est retiré du flux — remplacé par cette ligne de sub. Option : le garder en mini au-dessus de la table.)

## 15. PRICING — existant (2 cards + bloc "What actually changes" + risk reversal)
- Ajout badge sur Business : "Most popular" (pattern saas-site/finix)

## 16. FAQ — *inspiration : finlyx-06 / zerion (accordéon 2 colonnes : titre à gauche, questions à droite)*
- H2 gauche : **"Answers, with structure."** + sub
- Droite : accordéon existant (7 questions)

## 17. FINAL CTA — *inspiration : panyoo-05 + saas-site-06 (« Ready to pull the trigger? Get a quote today »)*
- H2 : **"Ready to see your whole picture?"**
- Sub : "Your account is 10 minutes away. Your clarity, permanent."
- [Create your account] + trial note + "As seen in" (existant)

## 18. FOOTER — *inspiration : zerion (wordmark géant gradient + bloc newsletter "Key insights")*
- Bloc gauche : **"Key insights and updates you value."** + [Subscribe]
- Colonnes liens existantes + disclaimers existants
- **Wordmark "iomi" géant en bas, gradient vert fondu** (signature zerion adaptée)

---

## Ce qui sort du flux principal (rien n'est perdu)
- How-it-works 3 steps → absorbé par la section 5 (3 cards) et le calculateur
- Goals 3-steps scroll narrative → condensé dans le bento (card "Goals with an AI plan") ; la version longue peut vivre sur une page /features
- Capital Ideas + Performance sections complètes → bento cards 2 et 3
- Morph spreadsheet → remplacé par le sub de la comparison (option mini)
- Problem agitate 6 lignes → manifeste 3 lignes

## Rythme final
impact (hero) → preuve (logos) → émotion (manifeste) → promesse (3 cards) → PRODUIT (dashboard) → preuve (stats) → PRODUIT (IA) → features (bento léger) → identification (personas) → interaction (calculateur) → confiance (security) → preuve sociale (testimonials) → objection (comparison) → vente (pricing) → réassurance (FAQ) → conversion (CTA) → marque (footer wordmark)

→ Plus jamais deux sections mock à la suite. UI visible : 2 moments + 1 bento.
