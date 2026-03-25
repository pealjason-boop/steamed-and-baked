# SteamedAndBaked.net

**Dark Psychedelic Neon-Cyberpunk Creative Showcase**

---

## Overview

SteamedAndBaked.net is a digital showcase for experimental fiction, poetry, comics, and essays. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, fast by default.

---

## Stack

| Layer | Tech |
|---|---|
| Markup | HTML5 (semantic) |
| Styles | CSS3 with custom properties |
| Scripts | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — Outfit + Inter |
| Icons | Font Awesome 6.4 |
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
│   ├── logo-main.png       # Transparent logo PNG
│   ├── hero-arcade.png     # Homepage hero banner
│   └── brand-overview.png  # Brand reference
├── index.html              # Homepage
├── fiction.html            # Stories archive
├── poetry.html             # Poetry archive
├── comics.html             # Comics & art
├── essays.html             # Essays & blog
├── about.html              # About page
├── 404.html                # Custom error page
├── .htaccess               # Apache config (HTTPS, compression, security)
├── .gitignore
└── README.md
```

---

## Design System

### Colors
| Name | Hex |
|---|---|
| Deep Violet | `#8B5CF6` |
| Hot Pink | `#EC4899` |
| Electric Teal | `#14B8A6` |
| Rich Black | `#0A0A0F` |
| Dark Gray | `#1A1A1A` |

### Typography
- **Headings** — Outfit (700, 800)
- **Body** — Inter (400, 500, 600)

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

Upload all files via SFTP to `~/steamedandbaked.net/` or use git pull on the server.

File permissions: files `644`, directories `755`.

---

## Adding Content

Edit the relevant HTML file and add a new card block to the content grid. Copy an existing card, update the title, description, date, and tags.

---

© 2026 SteamedAndBaked. All content original and protected.
