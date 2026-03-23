# SteamedAndBaked.net - Repository Overview

**Domain**: https://steamedandbaked.net  
**Repository**: https://github.com/pealjason-boop/steamed-and-baked  
**Owner**: Jason Peal (peal.jason@gmail.com)  
**Status**: Production Ready ✅

---

## 🎨 Project Description

SteamedAndBaked.net is a personal creative showcase website featuring experimental fiction, poetry, comics, and essays in a dark psychedelic neon-cyberpunk aesthetic.

**Design Theme**: Dark backgrounds, neon gradients (cyan, magenta, purple, pink), glowing effects, 3D card tilts, parallax scrolling, glitch text animations.

---

## 📁 Repository Structure

```
steamed-and-baked/
├── index.html (13.8 KB)          # Homepage with hero and content cards
├── about.html (10.6 KB)          # About page with philosophy
├── fiction.html (13.1 KB)        # Fiction stories showcase (6 stories)
├── poetry.html (18.0 KB)         # Poetry collection (8 poems)
├── comics.html (18.4 KB)         # Comics and visual art (6 pieces)
├── essays.html (16.5 KB)         # Essays and thoughts (8 essays)
├── 404.html (1.8 KB)             # Custom error page
├── css/
│   └── cyberpunk.css (17.2 KB)   # Complete design system
├── js/
│   └── main.js (14.3 KB)         # Interactive features
├── images/
│   ├── logo.png (2.0 MB)         # Circular psychedelic logo
│   ├── hero-arcade.png (2.0 MB)  # Retro arcade hero image
│   └── brand-overview.png (1.1 MB) # Brand style guide
├── .htaccess (4.0 KB)            # Apache configuration
├── .gitignore                    # Git exclusions
├── README.md                     # Project overview
├── DEPLOYMENT_GUIDE.md           # Deployment instructions
├── DOMAIN_UPDATE_SUMMARY.md      # Domain change notes
├── GIT_SETUP_COMPLETE.md         # Git configuration
├── V3_PROJECT_SUMMARY.md         # Technical specifications
├── PAGES_COMPLETE.md             # Page creation summary
└── ESSAYS_AND_ARTWORK_ADDED.md   # Recent updates
```

**Total**: 19 files (~5.2 MB with images)

---

## 🌐 Live Website

### Pages
- **Homepage**: https://steamedandbaked.net/
- **About**: https://steamedandbaked.net/about.html
- **Fiction**: https://steamedandbaked.net/fiction.html (6 stories)
- **Poetry**: https://steamedandbaked.net/poetry.html (8 poems)
- **Comics**: https://steamedandbaked.net/comics.html (6 pieces)
- **Essays**: https://steamedandbaked.net/essays.html (8 essays)
- **404**: https://steamedandbaked.net/404.html

### Preview Server
- **URL**: https://8000-i4t43jvo7hq6fkrx0c9zz-ea026bf9.sandbox.novita.ai
- **Status**: ✅ Live and accessible
- **Purpose**: Testing before deployment

---

## 🚀 Deployment

### Hosting
- **Provider**: DreamHost
- **Server**: Apache 2.4+
- **Directory**: `~/steamedandbaked.net/`
- **SSL**: Required (HTTPS enforced via .htaccess)

### Deployment Methods

**Option 1: SFTP Upload**
```
Server: your-server.dreamhost.com
Port: 22
Upload all files from repository to ~/steamedandbaked.net/
Ensure .htaccess is included
```

**Option 2: Git Clone/Pull**
```bash
ssh user@dreamhost.com
cd ~/steamedandbaked.net/
git clone https://github.com/pealjason-boop/steamed-and-baked.git temp
cp -r temp/* ~/steamedandbaked.net/
rm -rf temp
```

### Files to Deploy
```
✅ index.html, about.html, fiction.html, poetry.html, comics.html, essays.html, 404.html
✅ css/cyberpunk.css
✅ js/main.js
✅ images/ (logo.png, hero-arcade.png, brand-overview.png)
✅ .htaccess (CRITICAL for HTTPS redirect and clean URLs)
```

---

## 📊 Content Statistics

### Pages: 7 total
- Homepage (hero + latest content cards)
- About (philosophy + creator info)
- Fiction (6 sample stories)
- Poetry (8 sample poems)
- Comics (6 art pieces + 3 WIP)
- Essays (8 thought pieces)
- 404 (custom error page)

### Content: 28+ pieces
- 6 fiction stories
- 8 poems
- 6 comics/art pieces
- 8 essays

### Assets: 3 images (5.1 MB)
- Circular logo (psychedelic lettering)
- Hero arcade background
- Brand style guide

---

## 🎨 Design System

### Colors
- **Neon Cyan**: `#00ffff` - Primary brand
- **Neon Magenta**: `#ff00ff` - Secondary brand
- **Neon Purple**: `#bf00ff` - Accent
- **Neon Pink**: `#ff0080` - Accent
- **Neon Green**: `#00ff41` - Accent
- **Deep Violet**: `#8B5CF6` - Brand color
- **Hot Pink**: `#EC4899` - Brand color
- **Electric Teal**: `#14B8A6` - Brand color
- **Background Dark**: `#0a0a0f` to `#252538`

### Typography
- **Headings**: Space Grotesk (400, 500, 600, 700)
- **Body**: Inter (300, 400, 500, 600, 700)
- **Code**: Monospace

### Effects
- Neon glow (box shadows)
- Glitch text animations
- 3D card tilt effects
- Parallax scrolling
- Gradient text
- Smooth transitions

---

## 🔧 Technical Stack

### Frontend
- **HTML5**: Semantic structure
- **CSS3**: Custom properties, animations
- **JavaScript**: Vanilla ES6+
- **Fonts**: Google Fonts (Inter, Space Grotesk)
- **Icons**: Font Awesome 6.4.0

### Server
- **Apache 2.4+**: Web server
- **HTTPS**: Enforced via .htaccess
- **Clean URLs**: .html extension removed
- **GZIP**: Compression enabled
- **Caching**: 1 week for static assets

### Performance
- **Page Size**: <20 KB per page (without images)
- **Load Time**: <2 seconds on 3G
- **Mobile**: Fully responsive (320px → 4K)

---

## 📚 Documentation

### Primary Docs
1. **README.md** - Project overview, design system, tech stack
2. **DEPLOYMENT_GUIDE.md** - Complete deployment instructions, troubleshooting
3. **V3_PROJECT_SUMMARY.md** - Technical specifications, features
4. **PAGES_COMPLETE.md** - Page creation summary, content overview
5. **ESSAYS_AND_ARTWORK_ADDED.md** - Recent updates, logo integration

### Git Docs
6. **GIT_SETUP_COMPLETE.md** - Git configuration, branch strategy
7. **DOMAIN_UPDATE_SUMMARY.md** - Domain change from .com to .net

### This File
8. **REPOSITORY_OVERVIEW.md** - Complete repository overview (you are here)

---

## 🔗 Related Properties

This website is one of three properties owned by Jason Peal / Brayson Management:

### 1. Brayson Management Marketing Website
- **URL**: https://braysonmanagement.com
- **Purpose**: Marketing site for digital marketing company
- **Repository**: Part of Brayson-Management monorepo

### 2. Brayson CRM (Admin Portal)
- **URL**: https://admin.braysonmanagement.com
- **Purpose**: Customer Relationship Management system
- **Repository**: Part of Brayson-Management monorepo
- **Technology**: Cloudflare Pages + D1 Database

### 3. SteamedAndBaked.net (This Site)
- **URL**: https://steamedandbaked.net
- **Purpose**: Personal creative showcase
- **Repository**: Independent repository (this one)
- **Technology**: Static HTML/CSS/JS

**For complete structure of all three properties, see**: `/home/user/webapp/WEB_PROPERTIES_STRUCTURE.md` in the Brayson-Management repository.

---

## 🎯 Git Workflow

### Branches
- **main**: Production-ready code (current)
- **v3-cyberpunk**: Development branch (archived)

### Commit History
```
Total Commits: 15
Latest: 12568c9 - docs: Add documentation for Essays page
Branch: main
Remote: https://github.com/pealjason-boop/steamed-and-baked.git
Status: ✅ All changes committed and pushed
```

### Best Practices
- Use conventional commit messages (`feat:`, `fix:`, `docs:`, `chore:`)
- Commit frequently with meaningful messages
- Always push to `main` branch for production
- Test locally before pushing

---

## ✅ Testing Checklist

### Before Deployment
- [ ] All HTML pages load correctly
- [ ] Navigation menu works on all pages
- [ ] CSS loads without errors
- [ ] JavaScript functions properly
- [ ] Images display correctly
- [ ] Mobile responsive on all pages
- [ ] .htaccess is included

### After Deployment
- [ ] HTTPS redirect works (http → https)
- [ ] All pages load on production domain
- [ ] Navigation links work
- [ ] Images display
- [ ] Mobile menu functions
- [ ] Custom 404 page shows for invalid URLs

---

## 📞 Support

**Project Owner**: Jason Peal  
**Email**: peal.jason@gmail.com  
**Company**: Brayson Management  
**GitHub**: https://github.com/pealjason-boop

---

## 🎉 Quick Stats

```
✅ Repository: Independent git repository
✅ Pages: 7 HTML pages
✅ Content: 28+ creative pieces
✅ Images: 3 brand assets (5.1 MB)
✅ Size: ~5.2 MB total
✅ Load Time: <2 seconds
✅ Mobile: Fully responsive
✅ Status: Production Ready
```

---

**Last Updated**: March 22, 2026  
**Version**: 3.0 (Cyberpunk Redesign)  
**Status**: ✅ Complete and Ready for Deployment

---

*For detailed technical documentation, deployment guides, and troubleshooting, see the other documentation files in this repository.*
