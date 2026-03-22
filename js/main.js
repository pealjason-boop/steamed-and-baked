/**
 * SteamedAndBaked.com v3.0 - Cyberpunk Edition
 * Main JavaScript functionality
 */

(function() {
    'use strict';
    
    // ========================================
    // INITIALIZATION
    // ========================================
    
    function init() {
        setupNavigation();
        setCurrentYear();
        setupScrollEffects();
        setupCardHoverEffects();
        setupGlitchEffect();
        initializeAnimations();
    }
    
    // ========================================
    // NAVIGATION
    // ========================================
    
    function setupNavigation() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                const icon = navToggle.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-bars');
                    icon.classList.toggle('fa-times');
                }
            });
            
            // Close menu on link click
            const navLinks = navMenu.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    const icon = navToggle.querySelector('i');
                    if (icon) {
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-times');
                    }
                });
            });
            
            // Close on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    const icon = navToggle.querySelector('i');
                    if (icon) {
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-times');
                    }
                }
            });
        }
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href.length > 1) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }
    
    // ========================================
    // UTILITY FUNCTIONS
    // ========================================
    
    function setCurrentYear() {
        const yearElements = document.querySelectorAll('#current-year');
        const currentYear = new Date().getFullYear();
        yearElements.forEach(el => el.textContent = currentYear);
    }
    
    // ========================================
    // SCROLL EFFECTS
    // ========================================
    
    function setupScrollEffects() {
        // Navbar transparency on scroll
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            let lastScroll = 0;
            
            window.addEventListener('scroll', () => {
                const currentScroll = window.pageYOffset;
                
                if (currentScroll > 100) {
                    navbar.style.background = 'rgba(10, 10, 15, 0.95)';
                    navbar.style.backdropFilter = 'blur(20px)';
                } else {
                    navbar.style.background = 'rgba(10, 10, 15, 0.9)';
                    navbar.style.backdropFilter = 'blur(10px)';
                }
                
                lastScroll = currentScroll;
            });
        }
        
        // Parallax effect on hero
        const hero = document.querySelector('.hero');
        if (hero) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const parallax = scrolled * 0.5;
                hero.style.transform = `translateY(${parallax}px)`;
            });
        }
    }
    
    // ========================================
    // CARD HOVER EFFECTS
    // ========================================
    
    function setupCardHoverEffects() {
        const cards = document.querySelectorAll('.card, .content-item');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.3s ease';
            });
            
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });
    }
    
    // ========================================
    // GLITCH EFFECT
    // ========================================
    
    function setupGlitchEffect() {
        const glitchElements = document.querySelectorAll('.glitch');
        
        glitchElements.forEach(element => {
            const text = element.textContent;
            element.setAttribute('data-text', text);
            
            // Random glitch trigger
            setInterval(() => {
                if (Math.random() > 0.95) {
                    element.style.animation = 'none';
                    setTimeout(() => {
                        element.style.animation = 'glitch 0.3s infinite';
                        setTimeout(() => {
                            element.style.animation = 'glitch 2s infinite';
                        }, 300);
                    }, 10);
                }
            }, 2000);
        });
    }
    
    // ========================================
    // INTERSECTION OBSERVER ANIMATIONS
    // ========================================
    
    function initializeAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe cards and content items
        document.querySelectorAll('.card, .content-item').forEach(element => {
            element.style.opacity = '0';
            observer.observe(element);
        });
    }
    
    // ========================================
    // NEON CURSOR EFFECT (Optional)
    // ========================================
    
    function createCursorEffect() {
        const cursor = document.createElement('div');
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: var(--neon-cyan);
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: screen;
            opacity: 0.5;
            transition: transform 0.2s ease;
        `;
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });
        
        document.addEventListener('mousedown', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.boxShadow = '0 0 20px var(--neon-cyan), 0 0 40px var(--neon-cyan)';
        });
        
        document.addEventListener('mouseup', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.boxShadow = 'none';
        });
    }
    
    // ========================================
    // TYPING EFFECT (For hero subtitle)
    // ========================================
    
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        element.style.opacity = '1';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // ========================================
    // KEYBOARD SHORTCUTS
    // ========================================
    
    function setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K for quick search (future feature)
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                console.log('Quick search triggered (future feature)');
            }
            
            // Escape to close modals/menus
            if (e.key === 'Escape') {
                const activeMenu = document.querySelector('.nav-menu.active');
                if (activeMenu) {
                    activeMenu.classList.remove('active');
                }
            }
        });
    }
    
    // ========================================
    // RANDOM GLITCH TEXT
    // ========================================
    
    function glitchText(element) {
        const chars = '!<>-_\\/[]{}—=+*^?#________';
        const originalText = element.textContent;
        let iterations = 0;
        
        const interval = setInterval(() => {
            element.textContent = originalText
                .split('')
                .map((char, index) => {
                    if (index < iterations) {
                        return originalText[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join('');
            
            iterations += 1 / 3;
            
            if (iterations >= originalText.length) {
                clearInterval(interval);
                element.textContent = originalText;
            }
        }, 30);
    }
    
    // ========================================
    // PERFORMANCE MONITORING
    // ========================================
    
    function monitorPerformance() {
        if ('performance' in window && 'getEntriesByType' in window.performance) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.timing;
                    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                    const domContentLoadedTime = perfData.domContentLoadedEventEnd - perfData.navigationStart;
                    
                    console.log(`%c🚀 Performance Metrics`, 'color: #00ffff; font-size: 14px; font-weight: bold;');
                    console.log(`Page Load: ${pageLoadTime}ms`);
                    console.log(`DOM Ready: ${domContentLoadedTime}ms`);
                }, 0);
            });
        }
    }
    
    // ========================================
    // EASTER EGGS
    // ========================================
    
    function setupEasterEggs() {
        // Konami Code easter egg
        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        let konamiIndex = 0;
        
        document.addEventListener('keydown', (e) => {
            if (e.key === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    activateEasterEgg();
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }
        });
    }
    
    function activateEasterEgg() {
        document.body.style.animation = 'rainbow 2s linear infinite';
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            document.body.style.animation = '';
            style.remove();
        }, 5000);
        
        console.log('%c🎉 EASTER EGG ACTIVATED!', 'color: #ff00ff; font-size: 20px; font-weight: bold;');
    }
    
    // ========================================
    // INIT ON DOM READY
    // ========================================
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Optional: Enable custom cursor
    // Uncomment to activate
    // createCursorEffect();
    
    // Setup keyboard shortcuts
    setupKeyboardShortcuts();
    
    // Setup easter eggs
    setupEasterEggs();
    
    // Monitor performance
    monitorPerformance();
    
    // Expose some functions globally for debugging
    window.SteamedAndBaked = {
        glitchText,
        version: '3.0',
        aesthetic: 'cyberpunk'
    };
    
    console.log('%cSteamedAndBaked v3.0', 'color: #00ffff; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px #00ffff;');
    console.log('%cDark Psychedelic Neon-Cyberpunk Aesthetic', 'color: #ff00ff; font-size: 12px;');
    
})();
