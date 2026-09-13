#!/usr/bin/env node
// Build the IOMI blog: blog/_posts/*.md -> blog/<slug>.html + blog/index.html (+ pages) + sitemap entries.
// Only posts with date <= today are rendered, so future-dated posts publish on a later rebuild.
// Usage: node scripts/build-blog.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const POSTS_DIR = path.join(ROOT, 'blog', '_posts');
const ASSETS_DIR = path.join(ROOT, 'blog', 'assets');
const OUT_DIR = path.join(ROOT, 'blog');
const SITE = 'https://www.iomifinance.com';
const PER_PAGE = 12;
const TODAY = new Date().toISOString().slice(0, 10);
const THEME = fs.readFileSync(path.join(ROOT, 'blog', '_theme.css'), 'utf8');

// ---------- helpers ----------
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slugify = s => s.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const fmtDate = d => new Date(d + 'T12:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
const plain = md => md.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/[*_`#>]/g, '').replace(/\s+/g, ' ').trim();

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    if (i < 0) continue;
    let v = line.slice(i + 1).trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    fm[line.slice(0, i).trim()] = v;
  }
  return { fm, body: m[2] };
}

// ---------- load posts ----------
const posts = [];
for (const f of fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'))) {
  const parsed = parseFrontmatter(fs.readFileSync(path.join(POSTS_DIR, f), 'utf8'));
  if (!parsed) { console.warn(`skip (no frontmatter): ${f}`); continue; }
  const { fm, body } = parsed;
  if (!fm.slug || !fm.date) { console.warn(`skip (missing slug/date): ${f}`); continue; }
  if (fm.date > TODAY) continue; // scheduled for later
  posts.push({ ...fm, body });
}
posts.sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
const liveSlugs = new Set(posts.map(p => p.slug));
console.log(`${posts.length} posts to render (today: ${TODAY})`);

// ---------- shared shell ----------
// The navbar is the shared site header (assets/nav.snippet.html + nav.css) —
// one source for blog and tools pages, visual twin of the landing navbar.
const NAV = fs.readFileSync(path.join(ROOT, 'assets', 'nav.snippet.html'), 'utf8');
const NAVCSS = fs.readFileSync(path.join(ROOT, 'assets', 'nav.css'), 'utf8');

const FOOTER = `<footer><div class="ft-wrap">
  <div class="ft-grid">
    <div class="ft-brand">
      <img loading="lazy" decoding="async" src="/assets/iomi-logo.png" alt="IOMI" style="height:32px;width:auto">
      <p class="ft-tag">Your entire net worth — personal and business — in one live dashboard.</p>
    </div>
    <div class="ft-col"><div class="ft-h">Product</div>
      <a href="/#process">Features</a><a href="/#ai">AI</a><a href="/#pricing">Pricing</a><a href="/#faq">FAQ</a><a href="/tools/wealth-simulator">Wealth Simulator</a><a href="/tools/capital-efficiency-score">Capital Efficiency Score</a></div>
    <div class="ft-col"><div class="ft-h">Compare</div>
        <a href="/why-iomi">Why IOMI</a>
        <a href="/compare/monarch">IOMI vs Monarch</a>
        <a href="/compare/kubera">IOMI vs Kubera</a>
        <details class="ft-more"><summary>See more</summary>
          <a href="/compare/copilot">IOMI vs Copilot Money</a>
          <a href="/compare/nova">IOMI vs Nova Net Worth</a>
          <a href="/compare/wealthfront">IOMI vs Wealthfront</a>
          <a href="/compare/chatgpt">IOMI vs ChatGPT</a>
          <a href="/compare/claude">IOMI vs Claude</a>
          <a href="/compare/microsoft-copilot">IOMI vs Microsoft Copilot</a>
        </details>
      </div>
    <div class="ft-col"><div class="ft-h">Company</div>
      <a href="/about">About</a><a href="/blog">Blog</a><a href="/legal/terms-of-service">Terms of Service</a><a href="/legal/privacy-policy">Privacy Policy</a></div>
  </div>
  <div class="ft-bot"><span>© 2026 Iomi Technology Inc.</span>
    <div class="ft-soc">
      <a href="https://www.linkedin.com/company/iomifinance" target="_blank" rel="noopener" aria-label="LinkedIn"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.31h4.52V23H.24V8.31zM8.34 8.31h4.33v2h.06c.6-1.14 2.07-2.34 4.27-2.34 4.57 0 5.41 3 5.41 6.91V23h-4.51v-7.1c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V23H8.34V8.31z"/></svg></a>
      <a href="https://www.youtube.com/@iomifinance" target="_blank" rel="noopener" aria-label="YouTube"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z"/></svg></a>
      <a href="https://www.instagram.com/iomiapp/" target="_blank" rel="noopener" aria-label="Instagram"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.4 2.3.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.3.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.4-2.3-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.2-1.9.4-2.3.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.3-.4 1.2-.1 1.6-.1 4.8-.1zm0 2c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.2.8-.4.4-.6.7-.8 1.2-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.2.4.4.7.6 1.2.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.2-.8.4-.4.6-.7.8-1.2.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.2-.4-.4-.7-.6-1.2-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.4a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8zm0 7.2a2.9 2.9 0 1 0 0-5.7 2.9 2.9 0 0 0 0 5.7zm5.6-7.4a1 1 0 1 1-2.1 0 1 1 0 0 1 2.1 0z"/></svg></a>
    </div>
  </div>
</div></footer>`;

const head = ({ title, desc, canonical, og, jsonld }) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}" />
<link rel="canonical" href="${canonical}" />
<link rel="icon" href="/favicon.ico" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(desc)}" />
<meta property="og:url" content="${canonical}" />
<meta property="og:type" content="${og.type}" />
<meta property="og:image" content="${og.image}" />
<meta property="og:site_name" content="IOMI" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(title)}" />
<meta name="twitter:description" content="${esc(desc)}" />
<meta name="twitter:image" content="${og.image}" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&display=swap" rel="stylesheet">
${jsonld.map(o => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n')}
<style>
${THEME}</style>
<style>
${NAVCSS}</style>
</head>
<body>`;

// ---------- render articles ----------
for (let i = 0; i < posts.length; i++) {
  const p = posts[i];
  const url = `${SITE}/blog/${p.slug}`;
  let md = p.body.replace(/^#\s.*\n/m, ''); // title rendered from frontmatter
  md = md.replace(/^##\s+Table of Contents\s*\n[\s\S]*?(?=^##\s)/gm, ''); // dead scraped TOCs; we rebuild ours

  // FAQ JSON-LD from "## Frequently Asked Questions"
  const faq = [];
  const faqMd = md.match(/^##\s+Frequently Asked Questions\s*\n([\s\S]*?)(?=^##\s|$(?![\s\S]))/m);
  if (faqMd) {
    for (const qa of faqMd[1].split(/^###\s+/m).slice(1)) {
      const nl = qa.indexOf('\n');
      const q = plain(qa.slice(0, nl));
      const a = plain(qa.slice(nl + 1).split(/^##\s/m)[0]).slice(0, 1200);
      if (q && a) faq.push({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } });
    }
  }

  let html = marked.parse(md);
  // heading ids + TOC
  const toc = [];
  html = html.replace(/<h([23])>(.*?)<\/h\1>/g, (_, lvl, inner) => {
    const id = slugify(inner.replace(/<[^>]+>/g, ''));
    if (lvl === '2') toc.push({ id, label: inner.replace(/<[^>]+>/g, '') });
    return `<h${lvl} id="${id}">${inner}</h${lvl}>`;
  });
  // Key Takeaways -> styled card
  html = html.replace(/<h2 id="key-takeaways">([\s\S]*?)<\/h2>\s*<ul>([\s\S]*?)<\/ul>/, '<div class="takeaways"><h2 id="key-takeaways">$1</h2><ul>$2</ul></div>');
  // tables scroll on mobile
  html = html.replace(/<table>/g, '<div class="tw"><table>').replace(/<\/table>/g, '</table></div>');
  // cross-links to posts not yet published render as plain text until they go live
  html = html.replace(/<a href="\/blog\/([a-z0-9-]+)"[^>]*>([\s\S]*?)<\/a>/g, (m, slug, text) => liveSlugs.has(slug) ? m : text);

  const tocItems = toc.filter(t => t.id !== 'key-takeaways' && t.id !== 'table-of-contents');
  const tocHtml = tocItems.length > 2
    ? `<details class="toc" open><summary>Table of Contents</summary><ol>${tocItems.map(t => `<li><a href="#${t.id}">${t.label}</a></li>`).join('')}</ol></details>` : '';

  const heroFile = ['jpg', 'png', 'webp'].map(e => `${p.slug}.${e}`).find(f => fs.existsSync(path.join(ASSETS_DIR, f)));
  const heroUrl = heroFile ? `${SITE}/blog/assets/${heroFile}` : `${SITE}/assets/og-card.png`;
  const readMin = Math.max(1, Math.round((p.word_count || plain(p.body).split(' ').length) / 200));

  const jsonld = [
    {
      '@context': 'https://schema.org', '@type': 'Article',
      headline: p.title, description: p.description, image: heroUrl, datePublished: p.date,
      mainEntityOfPage: url,
      author: { '@type': 'Organization', name: 'IOMI', url: SITE },
      publisher: { '@type': 'Organization', name: 'IOMI', url: SITE, logo: { '@type': 'ImageObject', url: `${SITE}/assets/iomi-logo.png` } },
    },
    {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Blog', item: `${SITE}/blog` },
        { '@type': 'ListItem', position: 2, name: p.title, item: url },
      ],
    },
  ];
  if (faq.length) jsonld.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq });

  const newer = posts[i - 1], older = posts[i + 1];
  const pn = (newer || older) ? `<nav class="pn">
    ${older ? `<a href="/blog/${older.slug}"><div class="lbl">← Older</div><div class="t">${esc(older.title)}</div></a>` : '<span></span>'}
    ${newer ? `<a href="/blog/${newer.slug}"><div class="lbl">Newer →</div><div class="t">${esc(newer.title)}</div></a>` : ''}
  </nav>` : '';

  const page = `${head({ title: `${p.title} | IOMI Blog`, desc: p.description, canonical: url, og: { type: 'article', image: heroUrl }, jsonld })}
${NAV}
<main>
<article class="article">
  <div class="glow" aria-hidden="true"></div>
  <nav class="crumb" aria-label="Breadcrumb"><a href="/blog">Blog</a> <span aria-hidden="true">/</span> ${esc(p.title)}</nav>
  <h1>${esc(p.title)}</h1>
  <div class="ameta"><time datetime="${p.date}">${fmtDate(p.date)}</time><span aria-hidden="true">·</span><span>${readMin} min read</span></div>
  ${heroFile ? `<figure class="hero"><img src="/blog/assets/${heroFile}" alt="${esc(p.title)}" loading="eager"></figure>` : ''}
  ${tocHtml}
  ${html}
  ${pn}
  <div class="cta-zone">
    <div class="glow" aria-hidden="true"></div>
    <h3>See your entire net worth in one place</h3>
    <a href="https://app.iomifinance.com/create-account" class="dotcta dotcta-green" style="padding:13px 26px;font-size:14.5px"><span class="dc-in"><span class="dc-dot" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="dc-label">Start free — no card required</span><span class="dc-arr"><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span></span></a>
    <p class="micro">1-month free trial · Read-only via Plaid · Cancel anytime</p>
  </div>
</article>
</main>
${FOOTER}
</body>
</html>`;
  fs.writeFileSync(path.join(OUT_DIR, `${p.slug}.html`), page);
}

// ---------- index pages ----------
const pages = [];
for (let i = 0; i < posts.length; i += PER_PAGE) pages.push(posts.slice(i, i + PER_PAGE));
if (!pages.length) pages.push([]);
fs.mkdirSync(path.join(OUT_DIR, 'page'), { recursive: true });

pages.forEach((chunk, pi) => {
  const n = pi + 1;
  const canonical = n === 1 ? `${SITE}/blog` : `${SITE}/blog/page/${n}`;
  const cards = chunk.map(p => {
    const heroFile = ['jpg', 'png', 'webp'].map(e => `${p.slug}.${e}`).find(f => fs.existsSync(path.join(ASSETS_DIR, f)));
    return `<a class="bcard" href="/blog/${p.slug}">
      ${heroFile ? `<img class="thumb" src="/blog/assets/${heroFile}" alt="" loading="lazy" decoding="async">` : ''}
      <span class="chip">${esc((p.target_keyword || 'wealth intelligence').replace(/\s*\(branded\)/, ''))}</span>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.description || '')}</p>
      <span class="bmeta">${fmtDate(p.date)}</span>
    </a>`;
  }).join('\n');

  const nav = pages.length > 1 ? `<nav class="pagenav" aria-label="Pagination">
    ${n > 1 ? `<a href="${n === 2 ? '/blog' : `/blog/page/${n - 1}`}">← Prev</a>` : ''}
    ${pages.map((_, j) => j + 1 === n ? `<span class="cur">${j + 1}</span>` : `<a href="${j === 0 ? '/blog' : `/blog/page/${j + 1}`}">${j + 1}</a>`).join('')}
    ${n < pages.length ? `<a href="/blog/page/${n + 1}">Next →</a>` : ''}
  </nav>` : '';

  const page = `${head({
    title: n === 1 ? 'IOMI Blog — Wealth Intelligence for Founders' : `IOMI Blog — Page ${n}`,
    desc: 'Guides on net worth tracking, asset consolidation, capital efficiency, and AI-powered wealth intelligence for founders and business owners.',
    canonical, og: { type: 'website', image: `${SITE}/assets/og-card.png` },
    jsonld: [{ '@context': 'https://schema.org', '@type': 'Blog', name: 'IOMI Blog', url: `${SITE}/blog`, publisher: { '@type': 'Organization', name: 'IOMI', url: SITE } }],
  })}
${NAV}
<main>
<div class="phero">
  <div class="glow" aria-hidden="true"></div>
  <div class="kick">IOMI Blog</div>
  <h1>Wealth intelligence for founders</h1>
  <p class="sub">Net worth tracking, asset consolidation, capital efficiency, and what to do next with your money — personal and business, side by side.</p>
</div>
<div class="container">
  <div class="blog-grid">
${cards}
  </div>
  ${nav}
</div>
</main>
${FOOTER}
</body>
</html>`;
  fs.writeFileSync(pi === 0 ? path.join(OUT_DIR, 'index.html') : path.join(OUT_DIR, 'page', `${n}.html`), page);
});
// drop stale pagination files (posts count can shrink while iterating locally)
for (const f of fs.readdirSync(path.join(OUT_DIR, 'page'))) {
  if (parseInt(f) > pages.length) fs.unlinkSync(path.join(OUT_DIR, 'page', f));
}

// ---------- sitemap ----------
const SM = path.join(ROOT, 'sitemap.xml');
let sm = fs.readFileSync(SM, 'utf8');
const entries = [
  `  <url>\n    <loc>${SITE}/blog</loc>\n    <lastmod>${posts[0]?.date || TODAY}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`,
  ...posts.map(p => `  <url>\n    <loc>${SITE}/blog/${p.slug}</loc>\n    <lastmod>${p.date}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>`),
].join('\n');
const block = `<!-- blog:auto -->\n${entries}\n<!-- /blog:auto -->`;
sm = sm.includes('<!-- blog:auto -->')
  ? sm.replace(/<!-- blog:auto -->[\s\S]*?<!-- \/blog:auto -->/, block)
  : sm.replace('</urlset>', `${block}\n</urlset>`);
fs.writeFileSync(SM, sm);
console.log(`built ${posts.length} articles, ${pages.length} index page(s), sitemap updated`);
