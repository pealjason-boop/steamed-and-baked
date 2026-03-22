/**
 * Error Logger for Steamed and Baked
 * Captures and logs client-side errors
 * Version: 1.0
 */

(function() {
    'use strict';
    
    /**
     * Configuration
     */
    const config = {
        enableConsoleLog: true,
        enableRemoteLog: false, // Set to true when backend endpoint is ready
        remoteEndpoint: '/api/log-error',
        maxErrors: 50,
        sessionId: generateSessionId()
    };
    
    /**
     * Error storage
     */
    let errorLog = [];
    
    /**
     * Generate unique session ID
     */
    function generateSessionId() {
        return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }
    
    /**
     * Get browser information
     */
    function getBrowserInfo() {
        return {
            userAgent: navigator.userAgent,
            language: navigator.language,
            platform: navigator.platform,
            vendor: navigator.vendor,
            screenResolution: `${screen.width}x${screen.height}`,
            viewport: `${window.innerWidth}x${window.innerHeight}`,
            referrer: document.referrer,
            url: window.location.href
        };
    }
    
    /**
     * Format error object
     */
    function formatError(errorData) {
        return {
            timestamp: new Date().toISOString(),
            sessionId: config.sessionId,
            type: errorData.type || 'unknown',
            message: errorData.message || 'No message',
            filename: errorData.filename || 'unknown',
            line: errorData.line || 0,
            column: errorData.column || 0,
            stack: errorData.stack || null,
            browser: getBrowserInfo()
        };
    }
    
    /**
     * Log error
     */
    function logError(errorData) {
        const formattedError = formatError(errorData);
        
        // Add to error log
        errorLog.push(formattedError);
        
        // Limit error log size
        if (errorLog.length > config.maxErrors) {
            errorLog.shift();
        }
        
        // Save to localStorage
        try {
            localStorage.setItem('errorLog', JSON.stringify(errorLog));
        } catch (e) {
            console.warn('Failed to save error log to localStorage:', e);
        }
        
        // Console log if enabled
        if (config.enableConsoleLog) {
            console.error('Logged error:', formattedError);
        }
        
        // Send to remote endpoint if enabled
        if (config.enableRemoteLog) {
            sendErrorToServer(formattedError);
        }
    }
    
    /**
     * Send error to server
     */
    function sendErrorToServer(errorData) {
        // Use sendBeacon if available (more reliable for page unload)
        if (navigator.sendBeacon) {
            const blob = new Blob([JSON.stringify(errorData)], { type: 'application/json' });
            navigator.sendBeacon(config.remoteEndpoint, blob);
        } else {
            // Fallback to fetch
            fetch(config.remoteEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(errorData),
                keepalive: true
            }).catch(err => {
                console.warn('Failed to send error to server:', err);
            });
        }
    }
    
    /**
     * Global error handler
     */
    window.addEventListener('error', function(event) {
        logError({
            type: 'javascript',
            message: event.message,
            filename: event.filename,
            line: event.lineno,
            column: event.colno,
            stack: event.error ? event.error.stack : null
        });
    });
    
    /**
     * Unhandled promise rejection handler
     */
    window.addEventListener('unhandledrejection', function(event) {
        logError({
            type: 'promise',
            message: event.reason ? event.reason.message || event.reason : 'Promise rejection',
            stack: event.reason ? event.reason.stack : null
        });
    });
    
    /**
     * Resource loading error handler
     */
    window.addEventListener('error', function(event) {
        if (event.target && (event.target.tagName === 'IMG' || event.target.tagName === 'SCRIPT' || event.target.tagName === 'LINK')) {
            logError({
                type: 'resource',
                message: `Failed to load resource: ${event.target.src || event.target.href}`,
                filename: event.target.src || event.target.href
            });
        }
    }, true);
    
    /**
     * Manual error logging function
     */
    window.logCustomError = function(message, data) {
        logError({
            type: 'custom',
            message: message,
            data: data
        });
    };
    
    /**
     * Get error log
     */
    window.getErrorLog = function() {
        return errorLog;
    };
    
    /**
     * Clear error log
     */
    window.clearErrorLog = function() {
        errorLog = [];
        try {
            localStorage.removeItem('errorLog');
        } catch (e) {
            console.warn('Failed to clear error log from localStorage:', e);
        }
        console.log('Error log cleared');
    };
    
    /**
     * Export error log
     */
    window.exportErrorLog = function() {
        const dataStr = JSON.stringify(errorLog, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `error-log-${config.sessionId}.json`;
        link.click();
        URL.revokeObjectURL(url);
    };
    
    /**
     * Load previous errors from localStorage
     */
    function loadPreviousErrors() {
        try {
            const storedErrors = localStorage.getItem('errorLog');
            if (storedErrors) {
                errorLog = JSON.parse(storedErrors);
                if (config.enableConsoleLog) {
                    console.log(`Loaded ${errorLog.length} previous errors from localStorage`);
                }
            }
        } catch (e) {
            console.warn('Failed to load previous errors from localStorage:', e);
        }
    }
    
    /**
     * Monitor performance
     */
    function monitorPerformance() {
        if ('performance' in window && 'getEntriesByType' in window.performance) {
            window.addEventListener('load', function() {
                setTimeout(function() {
                    const perfData = window.performance.timing;
                    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                    const domContentLoadedTime = perfData.domContentLoadedEventEnd - perfData.navigationStart;
                    const domInteractiveTime = perfData.domInteractive - perfData.navigationStart;
                    
                    if (config.enableConsoleLog) {
                        console.log('Performance Metrics:', {
                            pageLoadTime: `${pageLoadTime}ms`,
                            domContentLoadedTime: `${domContentLoadedTime}ms`,
                            domInteractiveTime: `${domInteractiveTime}ms`
                        });
                    }
                    
                    // Log slow page loads
                    if (pageLoadTime > 5000) {
                        logError({
                            type: 'performance',
                            message: `Slow page load: ${pageLoadTime}ms`,
                            data: {
                                pageLoadTime,
                                domContentLoadedTime,
                                domInteractiveTime
                            }
                        });
                    }
                }, 0);
            });
        }
    }
    
    /**
     * Initialize error logger
     */
    function init() {
        loadPreviousErrors();
        monitorPerformance();
        
        if (config.enableConsoleLog) {
            console.log('Error Logger initialized. Session ID:', config.sessionId);
            console.log('Available commands:');
            console.log('  - getErrorLog(): View all logged errors');
            console.log('  - clearErrorLog(): Clear error log');
            console.log('  - exportErrorLog(): Export errors to JSON file');
            console.log('  - logCustomError(message, data): Log custom error');
        }
    }
    
    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();
