#!/bin/sh
# Sync blog posts (published/ + waiting/) and hero assets from the vault, then rebuild.
# Repo gets ALL posts; build-blog.mjs publishes by date, so waiting posts go live
# automatically on their date via the daily GitHub Action even if this machine is off.
set -e
SRC="/Users/sebastiengabucci/Library/CloudStorage/Dropbox/WORKSPACE/Cowork OS/Second Brain/2 CAPS/Iomi/1 PROJETS/SEO:SEA:AEO/Content/Blog"
cd "$(dirname "$0")/.."
rm -f blog/_posts/*.md
cp "$SRC/published/"*.md blog/_posts/ 2>/dev/null || true
cp "$SRC/waiting/"*.md blog/_posts/ 2>/dev/null || true
rsync -a "$SRC/assets/" blog/assets/
node scripts/build-blog.mjs
