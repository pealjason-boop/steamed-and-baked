# SteamedAndBaked.net v3.0

**Dark Psychedelic Neon-Cyberpunk Aesthetic**  
**Digital Showcase for Experimental Creative Work**

---

## 🎨 Project Overview

SteamedAndBaked.net is a single-creator digital showcase for experimental fiction, poetry, comics, and visual narratives. The site emphasizes a dark psychedelic neon-cyberpunk aesthetic with a focus on high-quality content presentation and anonymous community engagement.

### Key Features

✅ **Cyberpunk Visual Design** - Neon colors, dark backgrounds, glowing effects  
✅ **Content Showcase** - Fiction, poetry, and comics displays  
✅ **Responsive Layout** - Mobile-first, fully responsive design  
✅ **Modern JavaScript** - Smooth animations, interactions, easter eggs  
✅ **Performance Optimized** - Fast loading, efficient code  
✅ **SEO Ready** - Semantic HTML, meta tags, clean URLs  
✅ **Accessibility** - ARIA labels, keyboard navigation  

---

## 🚀 Technology Stack

| Component | Technology |
|-----------|-----------|
| **Frontend** | HTML5, CSS3 (Custom Properties), Vanilla JavaScript |
| **Fonts** | Google Fonts (Inter, Space Grotesk) |
| **Icons** | Font Awesome 6.4.0 |
| **Server** | Apache (DreamHost) |
| **Version Control** | Git |

---

## 📁 Directory Structure

```
steamed-and-baked/
├── css/
│   └── cyberpunk.css          # Main stylesheet with cyberpunk aesthetic
├── js/
│   └── main.js                # Core JavaScript functionality
├── images/                    # Image assets
├── assets/
│   ├── fonts/                 # Custom fonts (if needed)
│   └── icons/                 # Custom icons
├── content/
│   ├── fiction/               # Fiction content
│   ├── poetry/                # Poetry content
│   └── comics/                # Comics content
├── index.html                 # Homepage
├── about.html                 # About page
├── 404.html                   # Custom 404 error page
├── .htaccess                  # Apache configuration
├── .gitignore                 # Git ignore rules
└── README.md                  # This file
```

---

## 🎨 Design System

### Color Palette

**Neon Colors:**
- Cyan: `#00ffff` - Primary brand color
- Magenta: `#ff00ff` - Secondary brand color
- Pink: `#ff0080` - Accent color
- Purple: `#bf00ff`
- Green: `#00ff41`
- Blue: `#0080ff`
- Orange: `#ff6600`
- Yellow: `#ffff00`

**Dark Backgrounds:**
- Primary: `#0a0a0f`
- Secondary: `#131318`
- Tertiary: `#1a1a24`
- Card: `#1f1f2e`
- Elevated: `#252538`

**Text Colors:**
- Primary: `#e0e0ff`
- Secondary: `#a0a0c0`
- Muted: `#606080`
- Highlight: Cyan

### Typography

- **Headings**: Space Grotesk (monospace feel)
- **Body**: Inter (clean, modern)
- **Code**: Fira Code (monospace)

### Visual Effects

- **Neon Glow**: Box shadows with blur
- **Glitch Effect**: Text animation with color shifting
- **Gradient Text**: Cyan to magenta gradients
- **Card Hover**: 3D tilt effect with glow
- **Animations**: Smooth transitions, fade-ins

---

## 🌐 Pages

### Completed Pages

1. **index.html** - Homepage
   - Hero section with glitch effect
   - Latest content showcase
   - Category exploration
   - About preview

2. **about.html** - About page
   - Project description
   - Creator information
   - Aesthetic philosophy
   - Technical details
   - Contact information

3. **404.html** - Custom error page
   - Cyberpunk-styled 404
   - Navigation options

### Planned Pages

- `fiction.html` - Fiction archive/listing
- `poetry.html` - Poetry archive/listing
- `comics.html` - Comics/visual art showcase
- `archive.html` - Complete content archive
- `privacy.html` - Privacy policy
- Individual content pages (stories, poems, comics)

---

## ⚙️ Features

### Current Features

✅ **Responsive Navigation** - Mobile hamburger menu with smooth transitions  
✅ **Hero Section** - Animated gradient text with glitch effect  
✅ **Content Cards** - Hover effects with 3D tilt  
✅ **Smooth Scrolling** - Anchor link smooth scroll  
✅ **Parallax Effect** - Hero parallax on scroll  
✅ **Keyboard Shortcuts** - ESC to close menus  
✅ **Easter Eggs** - Konami code activation  
✅ **Performance Monitoring** - Console logging of load times  
✅ **Animated Background** - Subtle radial gradients  

### Planned Features

⏳ **Content Management** - Backend for managing posts  
⏳ **Comment System** - Anonymous discussion  
⏳ **Search Functionality** - Full-text content search  
⏳ **RSS Feed** - XML feed for content updates  
⏳ **Newsletter** - Email subscription  
⏳ **Dark/Light Toggle** - User preference (currently dark-only)  
⏳ **Reading Progress** - Scroll indicator for articles  
⏳ **Social Sharing** - Share buttons for content  

---

## 🚀 Deployment Guide

### DreamHost Deployment

1. **Upload via SFTP:**
   ```
   Host: your-server.dreamhost.com
   Port: 22
   Username: your-username
   Directory: ~/steamedandbaked.com/
   ```

2. **Upload all files** to the web directory

3. **Verify .htaccess** is uploaded (enables clean URLs, HTTPS, compression)

4. **Set permissions:**
   - Files: 644
   - Directories: 755

5. **Test:**
   - Visit https://steamedandbaked.com
   - Check all pages load correctly
   - Verify HTTPS redirect works
   - Test mobile responsiveness

### Git Deployment (Alternative)

```bash
# On server
ssh username@server.dreamhost.com
cd ~/steamedandbaked.com
git clone https://github.com/username/repo.git .

# Updates
git pull origin v3-cyberpunk
```

---

## 💻 Local Development

### Setup

1. **Clone repository:**
   ```bash
   git clone https://github.com/username/repo.git
   cd steamed-and-baked
   git checkout v3-cyberpunk
   ```

2. **Start local server:**
   ```bash
   # Python 3
   python3 -m http.server 8000
   
   # PHP
   php -S localhost:8000
   
   # Node.js
   npx http-server -p 8000
   ```

3. **Open browser:**
   ```
   http://localhost:8000
   ```

### Development Workflow

1. Make changes to HTML/CSS/JS files
2. Refresh browser to see changes
3. Test on multiple screen sizes
4. Commit changes with clear messages
5. Push to repository
6. Deploy to DreamHost

---

## 🎯 Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+
- **Mobile** iOS Safari 14+, Chrome Mobile 90+

---

## 🔧 Customization

### Changing Colors

Edit `/css/cyberpunk.css` and update CSS custom properties:

```css
:root {
    --neon-cyan: #00ffff;
    --neon-magenta: #ff00ff;
    --primary: var(--neon-cyan);
    --secondary: var(--neon-magenta);
}
```

### Changing Fonts

Update Google Fonts link in HTML and CSS variables:

```css
:root {
    --font-primary: 'Your Font', sans-serif;
    --font-heading: 'Your Heading Font', monospace;
}
```

### Adding Content

1. Create new HTML file in root directory
2. Use existing page as template
3. Update navigation links
4. Add to footer
5. Update sitemap

---

## 📈 Performance

### Current Metrics

- **CSS**: ~17KB (cyberpunk.css)
- **JavaScript**: ~14KB (main.js)
- **Total Page Weight**: <100KB (without images)
- **Load Time**: <2 seconds (on fast connection)

### Optimization Tips

- Minify CSS and JS for production
- Compress images (WebP format)
- Use CDN for external resources
- Enable GZIP compression (already in .htaccess)
- Lazy load images
- Preload critical resources

---

## 🔒 Security

### Implemented

✅ HTTPS enforcement (.htaccess)  
✅ Security headers (X-Frame-Options, CSP, etc.)  
✅ File protection (.git, .htaccess)  
✅ Directory browsing disabled  
✅ Bad bot blocking  

### Recommendations

- Keep Apache/PHP updated
- Use strong passwords
- Monitor error logs
- Regular backups
- Enable 2FA on hosting account

---

## 📝 Content Guidelines

### Adding New Content

1. **Fiction**: Create HTML file in `/content/fiction/`
2. **Poetry**: Create HTML file in `/content/poetry/`
3. **Comics**: Create HTML file in `/content/comics/`

### Content Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Title | SteamedAndBaked</title>
    <link rel="stylesheet" href="/css/cyberpunk.css">
</head>
<body>
    <!-- Include navigation -->
    <!-- Your content here -->
    <!-- Include footer -->
    <script src="/js/main.js"></script>
</body>
</html>
```

---

## 🐛 Troubleshooting

### Common Issues

**Issue:** Fonts not loading  
**Solution:** Check Google Fonts link in HTML

**Issue:** CSS not applying  
**Solution:** Clear browser cache, check CSS path

**Issue:** JavaScript not working  
**Solution:** Check browser console for errors

**Issue:** 404 errors  
**Solution:** Verify .htaccess is uploaded and working

**Issue:** HTTPS not working  
**Solution:** Check .htaccess rewrite rules, verify SSL cert

---

## 📞 Support

**Project Location:** `/home/user/webapp/steamed-and-baked`  
**Branch:** `v3-cyberpunk`  
**Backup:** `/home/user/webapp/steamed-and-baked-v1-backup`

---

## 📜 Version History

### v3.0 (March 22, 2026) - Cyberpunk Rebuild

**Complete redesign with:**
- Dark psychedelic neon-cyberpunk aesthetic
- New color scheme (cyan, magenta, purple neons)
- Glitch effects and animations
- Content-focused layout
- Modern JavaScript interactions
- Performance optimizations

### v1.0 (Previous Version)

- Clean restaurant/bakery design
- Light colors and traditional layout
- Backed up to `/steamed-and-baked-v1-backup/`

---

## 📄 License

All content is original and protected. © 2026 SteamedAndBaked

---

## 🚀 Quick Commands

```bash
# Navigate to project
cd /home/user/webapp/steamed-and-baked

# Check git status
git status

# View git log
git log --oneline

# Switch branches
git checkout v3-cyberpunk

# Create new branch
git checkout -b feature-name

# Commit changes
git add .
git commit -m "Your message"

# Push to remote
git push origin v3-cyberpunk
```

---

**Status:** ✅ v3.0 Complete - Ready for Content Integration  
**Aesthetic:** Dark Psychedelic Neon-Cyberpunk  
**Last Updated:** March 22, 2026
