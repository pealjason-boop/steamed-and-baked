# SteamedAndBaked.net

**Dark Psychedelic Neon-Cyberpunk Creative Showcase** — v3.1

---

## Overview

SteamedAndBaked.net is a digital showcase for experimental fiction, poetry, comics, essays, and videos. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, fast by default.

---

## Stack

| Layer | Tech |
|---|---|
| Markup | HTML5 (semantic) |
| Styles | CSS3 with custom properties |
| Scripts | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — Outfit + Inter |
| Icons | Font Awesome 6.7.2 |
| Hosting | DreamHost (Apache) |
| Version Control | Git / GitHub |

---

## Structure

```
steamed-and-baked/
├── css/
│   └── cyberpunk.css       # Full design system + layout
├── js/
│   └── main.js             # Navigation, animations, scroll effects
├── images/
│   ├── logo-main.png       # Transparent logo PNG (512px)
│   ├── favicon.png         # Large favicon (512×512)
│   ├── favicon-32.png      # Browser tab favicon (32×32)
│   ├── hero-arcade.png     # Homepage hero banner
│   └── brand-overview.png  # OG/Twitter card image
├── index.html              # Homepage
├── fiction.html            # Stories archive
├── poetry.html             # Poetry archive
├── comics.html             # Comics & art
├── essays.html             # Essays & blog
├── videos.html             # Videos archive
├── about.html              # About page
├── 404.html                # Custom error page
├── deploy.php              # GitHub webhook auto-deploy (DreamHost)
├── robots.txt              # Search engine crawl rules
├── sitemap.xml             # XML sitemap for all canonical URLs
├── .htaccess               # Apache config (HTTPS, compression, security)
├── .gitattributes          # Line-ending normalization
├── .gitignore
├── HUB-PROMPTS.md          # AI assistant context prompts
└── README.md
```

---

## Design System

### Colors
| Name | Hex |
|---|---|
| Neon Cyan | `#00ffff` |
| Neon Magenta | `#ff00ff` |
| Neon Pink | `#ff0080` |
| Neon Green | `#00ff41` |
| Neon Purple | `#bf00ff` |
| Neon Blue | `#0080ff` |
| Neon Orange | `#ff6600` |
| Neon Yellow | `#ffff00` |
| Rich Black | `#0a0a0f` |
| Dark Gray | `#131318` |

### Typography
- **Headings** — Outfit (400–800)
- **Body** — Inter (300–700)

---

## Local Development

```bash
# Clone
git clone https://github.com/pealjason-boop/steamed-and-baked.git
cd steamed-and-baked

# Serve locally (any of these)
python3 -m http.server 8080
npx http-server -p 8080
```

Open `http://localhost:8080`

---

## Deployment (DreamHost)

### Option A — SSH / git pull (recommended)

```bash
ssh user@steamedandbaked.net
cd ~/steamedandbaked.net
git pull origin main
```

### Option B — GitHub Webhook Auto-Deploy

Push to `main`. The `deploy.php` webhook handler pulls automatically.

> **Security note:** Set the `DEPLOY_SECRET` environment variable on the server
> (via `.htaccess` `SetEnv` or a secrets file outside the document root).
> Do **not** hard-code the secret in `deploy.php`.

File permissions: files `644`, directories `755`.

---

## Adding Content

Edit the relevant HTML file and add a new card block to the content grid.
Copy an existing card, update the title, description, date, and tags.
See `HUB-PROMPTS.md` for card templates and the full deployment workflow.

---

## CHANGELOG

### v3.1.1 — 2026-04-11
- **Security:** Removed hard-coded webhook secret from `deploy.php` — now reads from `DEPLOY_SECRET` env var
- **Security:** Removed `unsafe-inline` from `script-src` in Content-Security-Policy header
- **Dependencies:** Upgraded Font Awesome 6.4.0 → 6.7.2 (SRI hash updated on all pages)
- **Accessibility:** Added `@media (prefers-reduced-motion: reduce)` CSS rule to disable decorative animations (WCAG 2.1 — 2.3.3)
- **Consistency:** Added `Videos` link to footer nav on all inner pages (fiction, poetry, comics, essays, about)
- **Consistency:** Standardised footer copyright line to "Consume the Unconventional" across all pages
- **SEO:** Updated `sitemap.xml` `lastmod` dates to 2026-04-11
- **SEO/Robots:** Fixed `robots.txt` — removed invalid `.htaccess` Disallow entry; added `deploy.php` Disallow
- **Favicon:** Added explicit `sizes="32x32"` favicon reference alongside the 512px icon on all pages
- **CSS:** Fixed duplicate `padding-left` / `padding` on `blockquote` rule
- **JS:** Moved `setupKeyboardShortcuts()` and `setupEasterEgg()` inside DOMContentLoaded guard
- **Docs:** Updated `HUB-PROMPTS.md` homepage card template to match current CSS-gradient disc-card format
- **Docs:** Updated `README.md` — version, stack (FA 6.7.2), structure, deployment notes, CHANGELOG

### v3.1 — 2026-04-04
- Removed Unsplash external images; replaced with CSS gradient thumbnails
- Added orange card variant for homepage discoveries grid
- Added tablet breakpoints (`max-width: 1024px`) for 2-column grid
- Enforced 44px touch targets on nav links, buttons, footer links, and social icons
- Added HSTS header to `.htaccess`

### v3.0 — 2025 (tagged)
- Full cyberpunk redesign
- Hero banner with cinematic pan + scanline animations
- Neon hover effects on nav and hero headline
- Videos section added

---

© 2026 SteamedAndBaked. All content original and protected.
