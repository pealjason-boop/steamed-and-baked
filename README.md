# SteamedAndBaked.com Website

**Domain:** steamedandbaked.com  
**Hosting:** DreamHost VPS  
**Repository:** https://github.com/pealjason-boop/Brayson-Management (steamed-and-baked directory)  
**Version:** 1.0  
**Last Updated:** March 22, 2026

---

## Project Overview

SteamedAndBaked.com is a static marketing website for a culinary business specializing in steamed and baked goods. The site is built with HTML5, CSS3, and vanilla JavaScript, optimized for performance and SEO, and designed to be deployed on DreamHost's Apache hosting environment.

### Technology Stack

| Component | Technology |
|-----------|-----------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Server** | Apache (DreamHost VPS) |
| **Icons** | Font Awesome 6.4.0 (CDN) |
| **Version Control** | Git |

---

## Directory Structure

```
steamed-and-baked/
├── css/
│   └── style.css              # Main stylesheet with responsive design
├── js/
│   ├── main.js                # Core functionality (navigation, forms, animations)
│   └── error-logger.js        # Client-side error tracking
├── images/                    # Image assets (to be added)
│   ├── logo.svg               # Main logo (SVG)
│   ├── logo.png               # Logo fallback (PNG)
│   ├── favicon.svg            # Favicon
│   └── [other images]
├── index.html                 # Homepage
├── about.html                 # About page
├── contact.html               # Contact page
├── thank-you.html             # Form submission thank you page
├── 404.html                   # Custom 404 error page
├── .htaccess                  # Apache configuration
├── .gitignore                 # Git ignore rules
└── README.md                  # This file
```

---

## Pages

### Completed Pages

1. **index.html** - Homepage
   - Hero section
   - Features showcase (4 feature cards)
   - About preview section
   - CTA section
   - Full navigation and footer

2. **about.html** - About Page
   - Our story section
   - Mission & vision cards
   - Core values (6 value cards)
   - Team member profiles (placeholder)

3. **contact.html** - Contact Page
   - Contact information cards
   - Contact form with validation
   - Business hours display
   - Map placeholder

4. **thank-you.html** - Form Submission Confirmation
   - Success message
   - Navigation options

5. **404.html** - Custom Error Page
   - User-friendly error message
   - Navigation to home/contact

### Pending Pages

- **menu.html** - Menu/product showcase (not yet created)
- **services.html** - Services page (not yet created)
- **privacy.html** - Privacy policy (not yet created)
- **terms.html** - Terms of service (not yet created)

---

## Design Tokens

### Colors (PLACEHOLDER - Replace with Brand Colors)

The following color variables in `css/style.css` need to be replaced with actual brand colors from the design assets:

```css
--color-primary: #e67e22;        /* Main brand color */
--color-primary-dark: #d35400;   /* Darker variant */
--color-primary-light: #f39c12;  /* Lighter variant */
--color-secondary: #3498db;      /* Secondary color */
--color-secondary-dark: #2980b9; /* Darker variant */
--color-secondary-light: #5dade2; /* Lighter variant */
```

### Typography (PLACEHOLDER - Replace with Brand Fonts)

Current fonts are system defaults. Replace with actual brand fonts:

```css
--font-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
--font-heading: 'Georgia', 'Times New Roman', serif;
```

To add custom fonts:
1. Add font files (.woff2 format) to `/fonts/` directory
2. Update font-face declarations in CSS
3. Update CSS variables

---

## Missing Design Assets

### Critical Assets (Phase 1 - Pre-Dev Handoff)

According to the Developer Handoff Checklist, the following assets are still needed:

**Logo Files:**
- [ ] logo.svg (vector, scalable) - **CRITICAL**
- [ ] logo.png (transparent, min 512×512px) - **CRITICAL**
- [ ] logo-dark.svg (dark mode variant) - HIGH

**Favicon Package:**
- [ ] favicon.svg
- [ ] favicon.ico
- [ ] apple-touch-icon.png (180×180px)
- [ ] site.webmanifest

**Brand Colors:**
- [ ] Full hex code list for light mode - **CRITICAL**
- [ ] Dark mode hex codes - **CRITICAL**

**Typography:**
- [ ] Font names or font files (.woff2) - **CRITICAL**

**Images:**
- [ ] Hero background image/pattern
- [ ] About section images
- [ ] Team member photos
- [ ] Product/food photography
- [ ] Open Graph image (1200×630px)
- [ ] Twitter card image (1200×600px)

---

## Features

### Current Features

✅ Fully responsive design (mobile, tablet, desktop)  
✅ Modern CSS with CSS custom properties  
✅ Mobile-first navigation with hamburger menu  
✅ Smooth scrolling and animations  
✅ Contact form with client-side validation  
✅ Client-side error logging system  
✅ SEO-optimized meta tags  
✅ Open Graph and Twitter Card meta tags  
✅ Font Awesome icons integration  
✅ Apache .htaccess configuration  
✅ Custom 404 error page  
✅ Browser caching and compression  
✅ Security headers  
✅ HTTPS enforcement  

### Pending Features

⏳ Form backend integration (currently client-side only)  
⏳ Newsletter signup integration  
⏳ Google Maps integration  
⏳ Menu/product catalog  
⏳ Online ordering system  
⏳ Blog/news section  
⏳ Dark mode support  

---

## Deployment Guide

### Prerequisites

- SSH access to DreamHost server
- Git installed on server
- Domain configured (steamedandbaked.com)

### Initial Setup on DreamHost

1. **SSH into your DreamHost server:**
   ```bash
   ssh username@your-server.dreamhost.com
   ```

2. **Navigate to website directory:**
   ```bash
   cd ~/steamedandbaked.com
   ```

3. **Clone repository (if using git deployment):**
   ```bash
   git clone https://github.com/pealjason-boop/Brayson-Management.git temp
   mv temp/steamed-and-baked/* ./
   rm -rf temp
   ```

4. **Or upload files via SFTP:**
   - Use FileZilla, Cyberduck, or similar
   - Upload all files to `~/steamedandbaked.com/`
   - Ensure .htaccess is uploaded

5. **Set correct permissions:**
   ```bash
   find . -type f -exec chmod 644 {} \;
   find . -type d -exec chmod 755 {} \;
   chmod 644 .htaccess
   ```

6. **Verify .htaccess is working:**
   ```bash
   cat .htaccess
   ```

### Updating the Website

**Option 1: Git Pull (Recommended)**
```bash
ssh username@your-server.dreamhost.com
cd ~/steamedandbaked.com
git pull origin main
```

**Option 2: SFTP Upload**
- Upload changed files via SFTP client
- Overwrite existing files

**Option 3: Rsync (Advanced)**
```bash
rsync -avz --exclude='.git' ./steamed-and-baked/ username@your-server.dreamhost.com:~/steamedandbaked.com/
```

### Post-Deployment Checklist

After deploying, verify:

- [ ] Homepage loads correctly
- [ ] All pages are accessible
- [ ] Navigation works on mobile and desktop
- [ ] Contact form validation works
- [ ] HTTPS is enforced (check redirect)
- [ ] Images load (once added)
- [ ] 404 page displays for invalid URLs
- [ ] No console errors in browser
- [ ] Responsive design works on mobile

---

## Development Workflow

### Local Development

1. **Start a local server:**
   ```bash
   # Python 3
   python3 -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # PHP
   php -S localhost:8000
   
   # Node.js (with http-server)
   npx http-server -p 8000
   ```

2. **Open in browser:**
   ```
   http://localhost:8000
   ```

3. **Make changes and test**

4. **Commit changes:**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

### Testing Checklist

Before deploying:

- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile devices
- [ ] Validate HTML (https://validator.w3.org/)
- [ ] Check console for JavaScript errors
- [ ] Test contact form validation
- [ ] Verify all links work
- [ ] Check responsive breakpoints

---

## Configuration

### .htaccess Configuration

The `.htaccess` file includes:

- **HTTPS enforcement** - All traffic redirected to HTTPS
- **URL rewriting** - Clean URLs without .html extension
- **Security headers** - X-Frame-Options, CSP, etc.
- **Compression** - GZIP compression for text files
- **Caching** - Browser caching for static assets
- **Custom error pages** - 404, 500 error handling
- **Hotlink protection** - Prevent image hotlinking (commented out)

To modify:
1. Edit `.htaccess` file
2. Test changes carefully
3. Keep backup of working version

### Security Features

- HTTPS enforcement via .htaccess
- Security headers (X-Frame-Options, X-XSS-Protection, etc.)
- Content Security Policy (CSP)
- Protection of sensitive files (.git, .htaccess, .env)
- Bad bot blocking
- Directory browsing disabled

---

## JavaScript Functionality

### main.js

**Features:**
- Mobile navigation toggle
- Smooth scrolling for anchor links
- Form validation
- Scroll animations with Intersection Observer
- Lazy loading images
- Notification system

**Available Functions:**
- Auto-initialized on page load
- No manual initialization required

### error-logger.js

**Features:**
- Captures JavaScript errors
- Logs unhandled promise rejections
- Monitors resource loading errors
- Tracks performance metrics
- Stores errors in localStorage

**Available Commands (Console):**
```javascript
getErrorLog()       // View all logged errors
clearErrorLog()     // Clear error log
exportErrorLog()    // Export errors to JSON file
logCustomError(message, data)  // Log custom error
```

**Configuration:**
Edit config object in `error-logger.js`:
```javascript
const config = {
    enableConsoleLog: true,
    enableRemoteLog: false,  // Enable when backend ready
    remoteEndpoint: '/api/log-error',
    maxErrors: 50
};
```

---

## Browser Support

### Desktop Browsers

✅ Chrome 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Edge 90+

### Mobile Browsers

✅ iOS Safari 14+  
✅ Chrome Mobile 90+  
✅ Samsung Internet 14+  
✅ Firefox Mobile 88+

### Graceful Degradation

- Intersection Observer fallback for older browsers
- CSS Grid fallback to flexbox
- Modern CSS features with fallbacks

---

## Performance Optimization

### Current Optimizations

- Minified CSS (can create minified version)
- Optimized .htaccess caching rules
- GZIP compression enabled
- Lazy loading for images
- CDN for Font Awesome icons
- Efficient CSS selectors
- Minimal JavaScript

### Recommendations

1. **Image Optimization:**
   - Use WebP format with JPEG/PNG fallbacks
   - Compress images (TinyPNG, ImageOptim)
   - Use responsive images with srcset

2. **CSS Optimization:**
   - Create minified version: `style.min.css`
   - Remove unused CSS rules

3. **JavaScript Optimization:**
   - Create minified versions
   - Consider bundling with Webpack/Rollup

4. **CDN Integration:**
   - Consider Cloudflare for static assets
   - Already using CDN for Font Awesome

---

## SEO Optimization

### Current SEO Features

✅ Semantic HTML5 markup  
✅ Meta descriptions on all pages  
✅ Open Graph meta tags  
✅ Twitter Card meta tags  
✅ Alt text placeholders for images  
✅ Clean URL structure  
✅ Mobile-friendly design  
✅ Fast load times  

### SEO Checklist

- [ ] Add actual brand images to Open Graph tags
- [ ] Update meta descriptions with real content
- [ ] Add structured data (Schema.org)
- [ ] Create XML sitemap
- [ ] Submit sitemap to Google Search Console
- [ ] Verify with Google Search Console
- [ ] Set up Google Analytics
- [ ] Create robots.txt file
- [ ] Add canonical URLs
- [ ] Optimize images with descriptive filenames

---

## Next Steps

### Phase 1 - Design Assets Integration

1. Receive logo files from designer
2. Receive brand colors and fonts
3. Update CSS variables with brand colors
4. Integrate custom fonts
5. Add favicon package
6. Update all placeholder images

### Phase 2 - Content Population

1. Replace placeholder text with real content
2. Add product/food photography
3. Update team member profiles
4. Add menu/product catalog
5. Write and add blog content

### Phase 3 - Backend Integration

1. Set up form submission backend (email service)
2. Integrate newsletter signup (Mailchimp, etc.)
3. Add Google Maps integration
4. Set up analytics tracking
5. Implement contact form spam protection

### Phase 4 - Additional Features

1. Create menu/services pages
2. Add online ordering system (if needed)
3. Implement blog/news section
4. Add customer testimonials
5. Create photo gallery
6. Add dark mode support

---

## Maintenance

### Regular Tasks

**Weekly:**
- Check error logs via console commands
- Review analytics (once set up)
- Test contact form

**Monthly:**
- Update dependencies (Font Awesome CDN)
- Review and update content
- Check broken links
- Verify SSL certificate
- Review server logs

**Quarterly:**
- Security audit
- Performance review
- Content refresh
- SEO review

---

## Troubleshooting

### Common Issues

**Issue:** .htaccess rules not working
- **Solution:** Check if mod_rewrite is enabled on server
- Contact DreamHost support if needed

**Issue:** Images not loading
- **Solution:** Check file paths and permissions
- Ensure images directory has 755 permissions

**Issue:** Form not submitting
- **Solution:** Form is currently client-side only
- Backend integration needed for actual submission

**Issue:** CSS not updating
- **Solution:** Clear browser cache or use hard refresh (Ctrl+F5)
- Check .htaccess caching rules

---

## Support & Contact

**Project Owner:** Jason Peal, Brayson Management  
**Email:** peal.jason@gmail.com  
**Repository:** https://github.com/pealjason-boop/Brayson-Management  
**DreamHost Support:** https://panel.dreamhost.com/support

---

## License

All rights reserved. © 2026 Steamed and Baked

---

## Changelog

### Version 1.0 (March 22, 2026)

**Initial Release:**
- Created homepage with hero, features, and CTA sections
- Built about page with mission, vision, and values
- Developed contact page with form and business hours
- Implemented responsive navigation
- Added error logging system
- Created Apache configuration
- Set up Git repository
- Comprehensive documentation

**Pending:**
- Design asset integration
- Menu and services pages
- Backend form integration
- Content population

---

**Status:** Ready for Design Asset Integration 🎨  
**Next Milestone:** Complete Phase 1 - Add brand colors, logos, and fonts
