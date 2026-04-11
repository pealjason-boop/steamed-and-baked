/**
 * SteamedAndBaked.net v3.1 — Cyberpunk Edition
 * Main JavaScript functionality
 */

(function () {
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
        const navMenu   = document.getElementById('nav-menu');

        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                const isOpen = navMenu.classList.toggle('active');
                navToggle.setAttribute('aria-expanded', String(isOpen));
                const icon = navToggle.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-bars',  !isOpen);
                    icon.classList.toggle('fa-times', isOpen);
                }
            });

            // Close menu on nav-link click
            navMenu.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                    const icon = navToggle.querySelector('i');
                    if (icon) {
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-times');
                    }
                });
            });

            // Close on Escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                    const icon = navToggle.querySelector('i');
                    if (icon) {
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-times');
                    }
                    navToggle.focus();
                }
            });
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href.length > 1) {
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            });
        });
    }

    // ========================================
    // UTILITY FUNCTIONS
    // ========================================

    function setCurrentYear() {
        const currentYear = new Date().getFullYear();
        document.querySelectorAll('#current-year').forEach(el => {
            el.textContent = currentYear;
        });
    }

    // ========================================
    // SCROLL EFFECTS
    // ========================================

    function setupScrollEffects() {
        // Navbar background on scroll
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            const onScroll = () => {
                if (window.scrollY > 100) {
                    navbar.style.background        = 'rgba(10, 10, 15, 0.97)';
                    navbar.style.backdropFilter    = 'blur(20px)';
                } else {
                    navbar.style.background        = 'rgba(10, 10, 15, 0.9)';
                    navbar.style.backdropFilter    = 'blur(10px)';
                }
            };
            window.addEventListener('scroll', onScroll, { passive: true });
        }
    }

    // ========================================
    // CARD HOVER (3-D TILT)
    // ========================================

    function setupCardHoverEffects() {
        // Respect reduced-motion preference
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return;

        document.querySelectorAll('.card, .content-item').forEach(card => {
            card.addEventListener('mousemove', function (e) {
                const rect    = this.getBoundingClientRect();
                const x       = e.clientX - rect.left;
                const y       = e.clientY - rect.top;
                const centerX = rect.width  / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            });

            card.addEventListener('mouseleave', function () {
                this.style.transform = '';
            });
        });
    }

    // ========================================
    // GLITCH EFFECT
    // ========================================

    function setupGlitchEffect() {
        document.querySelectorAll('.glitch').forEach(element => {
            if (!element.hasAttribute('data-text')) {
                element.setAttribute('data-text', element.textContent);
            }
        });
    }

    // ========================================
    // INTERSECTION OBSERVER ANIMATIONS
    // ========================================

    function initializeAnimations() {
        // Respect reduced-motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        if (!('IntersectionObserver' in window)) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

        document.querySelectorAll('.card, .content-item').forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    }

    // ========================================
    // CUSTOM CURSOR (opt-in)
    // Uncomment createCursorEffect() below to activate.
    // ========================================

    function createCursorEffect() {
        if (window.matchMedia('(hover: none)').matches) return; // skip touch devices

        const cursor = document.createElement('div');
        cursor.setAttribute('aria-hidden', 'true');
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
            cursor.style.left = (e.clientX - 10) + 'px';
            cursor.style.top  = (e.clientY - 10) + 'px';
        });

        document.addEventListener('mousedown', () => {
            cursor.style.transform  = 'scale(1.5)';
            cursor.style.boxShadow  = '0 0 20px var(--neon-cyan), 0 0 40px var(--neon-cyan)';
        });

        document.addEventListener('mouseup', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.boxShadow = 'none';
        });
    }

    // ========================================
    // TYPING EFFECT (helper utility)
    // ========================================

    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        element.style.opacity = '1';
        (function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i++);
                setTimeout(type, speed);
            }
        })();
    }

    // ========================================
    // GLITCH TEXT (hover utility)
    // ========================================

    function glitchText(element) {
        const chars        = '!<>-_\\/[]{}—=+*^?#________';
        const originalText = element.textContent;
        let   iterations   = 0;

        const interval = setInterval(() => {
            element.textContent = originalText
                .split('')
                .map((char, index) => {
                    if (index < iterations) return originalText[index];
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
    // PERFORMANCE LOGGING
    // ========================================

    function logPerformance() {
        if (!('performance' in window) || !('getEntriesByType' in window.performance)) return;

        // Use PerformanceObserver for the navigation entry (modern approach)
        const navEntries = performance.getEntriesByType('navigation');
        if (navEntries.length > 0) {
            const nav  = navEntries[0];
            const load = Math.round(nav.loadEventEnd - nav.startTime);
            const dom  = Math.round(nav.domContentLoadedEventEnd - nav.startTime);
            if (load > 0) {
                console.log('%c\uD83D\uDE80 Performance Metrics', 'color:#00ffff;font-size:14px;font-weight:bold;');
                console.log('Page Load: ' + load + 'ms');
                console.log('DOM Ready: ' + dom + 'ms');
            }
        }
    }

    // ========================================
    // EASTER EGG — Konami Code
    // ========================================

    function setupEasterEgg() {
        const konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
        let idx = 0;

        document.addEventListener('keydown', (e) => {
            if (e.key === konamiCode[idx]) {
                idx++;
                if (idx === konamiCode.length) {
                    activateEasterEgg();
                    idx = 0;
                }
            } else {
                idx = 0;
            }
        });
    }

    function activateEasterEgg() {
        const style = document.createElement('style');
        style.textContent = '@keyframes _rainbow{0%{filter:hue-rotate(0deg)}100%{filter:hue-rotate(360deg)}}';
        document.head.appendChild(style);
        document.body.style.animation = '_rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
            style.remove();
        }, 5000);
        console.log('%c\uD83C\uDF89 EASTER EGG ACTIVATED!', 'color:#ff00ff;font-size:20px;font-weight:bold;');
    }

    // ========================================
    // KEYBOARD SHORTCUTS
    // ========================================

    function setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K — quick search (future feature placeholder)
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                // Reserved for future search modal
            }
        });
    }

    // ========================================
    // BOOT SEQUENCE
    // ========================================

    // setupKeyboardShortcuts and setupEasterEgg only attach document-level
    // keydown listeners and do not depend on the DOM being fully parsed,
    // but wrapping them inside the DOMContentLoaded guard is safer and
    // prevents any edge-case race conditions on very fast renders.
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            init();
            setupKeyboardShortcuts();
            setupEasterEgg();
        });
    } else {
        init();
        setupKeyboardShortcuts();
        setupEasterEgg();
    }

    window.addEventListener('load', logPerformance);

    // Uncomment to enable neon cursor:
    // createCursorEffect();

    // Public API
    window.SteamedAndBaked = {
        glitchText,
        typeWriter,
        version:   '3.1',
        aesthetic: 'cyberpunk'
    };

    console.log('%cSteamedAndBaked v3.1', 'color:#00ffff;font-size:24px;font-weight:bold;text-shadow:0 0 10px #00ffff;');
    console.log('%cDark Psychedelic Neon-Cyberpunk Aesthetic', 'color:#ff00ff;font-size:12px;');

})();
