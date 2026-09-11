# IOMI Blog (self-hosted)

Static blog served at `www.iomifinance.com/blog`, replacing the AutoSEO-hosted `blog.iomifinance.com`.

## How it works

- `blog/_posts/*.md` — one markdown file per article, frontmatter: `title, slug, date, status, source, target_keyword, description, hero_image, word_count`. Synced from the vault (`Second Brain/2 CAPS/Iomi/1 PROJETS/SEO:SEA:AEO/Content/Blog/`), which is the editorial source of truth.
- `blog/assets/` — hero images (`<slug>.jpg`). No image → article renders without a hero (cards fall back to text).
- `blog/_theme.css` — blog styles, mirrors the landing design system (why-iomi shell). Inlined into every page at build.
- `scripts/build-blog.mjs` — renders `blog/<slug>.html`, `blog/index.html` (+ `blog/page/N.html`, 12 posts/page), and refreshes the `<!-- blog:auto -->` block in `sitemap.xml`. Adds per-article TOC, Key Takeaways card, Article/Breadcrumb/FAQ JSON-LD, prev/next links, CTA.
- **Scheduled publishing**: only posts with `date <= today` are rendered. `.github/workflows/blog-publish.yml` rebuilds daily at 10:00 UTC and pushes if a post went live; Vercel redeploys.

## Commands

```sh
./scripts/sync-blog.sh      # vault -> repo + rebuild (local, after writing new posts)
node scripts/build-blog.mjs # rebuild only
```

## Cutover from AutoSEO (one-time, after this branch deploys)

1. Verify `/blog` renders on the production deployment.
2. Add `blog.iomifinance.com` as a domain on the Vercel project.
3. Cloudflare: point `blog.iomifinance.com` CNAME to `cname.vercel-dns.com` (replaces `blogs.getautoseo.com`). `vercel.json` then 301s `blog.iomifinance.com/post/:slug` → `www.iomifinance.com/blog/:slug` (all 25 legacy URLs preserved).
4. Cancel the AutoSEO subscription.
