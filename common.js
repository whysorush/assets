// Common navigation and footer for all pages
// Wait for full DOM ready and a small delay for any preloaders
function initCommonElements() {
    // Add navigation
    const header = `
<header id="header" class="normal" style="background: #ffffff !important; box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08) !important; border-bottom: 1px solid #e2e8f0 !important;">
    <div class="container nav-wrapper">
        <!-- LOGO -->
        <div class="logo_main">
            <a href="index.html">
                <img src="assets/logo_bg.png" alt="Growthally Advisors" loading="lazy">
            </a>
            <p class="registered_mark">®</p>
        </div>

        <!-- MOBILE TOGGLE -->
        <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <!-- MAIN MENU -->
        <nav id="menu_main" role="navigation" aria-label="Main navigation">
            <ul class="nav-links" role="menubar">
                <li role="none"><a href="index.html#home" role="menuitem">Home</a></li>
                <li role="none" class="nav-dropdown">
                    <a href="#" role="menuitem" class="dropdown-trigger" aria-haspopup="true" aria-expanded="false">
                        About Us <i class="fas fa-chevron-down dropdown-icon"></i>
                    </a>
                    <ul class="dropdown-menu" role="menu">
                        <li role="none"><a href="index.html#about" role="menuitem">Our Story</a></li>
                        <li role="none"><a href="philosophy.html" role="menuitem">Our Philosophy & Vision</a></li>
                        <li role="none"><a href="why-growthally.html" role="menuitem">Why Growthally?</a></li>
                        <li role="none"><a href="gallery.html" role="menuitem">Leadership Team</a></li>
                        <li role="none"><a href="growthally-advisors.html" role="menuitem">GrowthAlly Advisors</a></li>
                        <li role="none"><a href="spark-fund.html" role="menuitem">GrowthAlly Spark Fund (AIF)</a></li>
                        <li role="none"><a href="growlease.html" role="menuitem">GrowLease (Leasing Solutions)</a></li>
                    </ul>
                </li>
                <li role="none"><a href="index.html#services" role="menuitem">Services</a></li>
                <li role="none" class="nav-dropdown">
                    <a href="#" role="menuitem" class="dropdown-trigger" aria-haspopup="true" aria-expanded="false">
                        Insights <i class="fas fa-chevron-down dropdown-icon"></i>
                    </a>
                    <ul class="dropdown-menu" role="menu">
                        <li role="none"><a href="blogs.html" role="menuitem">Blogs</a></li>
                        <li role="none"><a href="media.html" role="menuitem">Events & Media Coverage</a></li>
                        <li role="none"><a href="index.html#brochure" role="menuitem">Downloads</a></li>
                    </ul>
                </li>
                <li role="none"><a href="index.html#careers" role="menuitem">Careers</a></li>
                <li role="none"><a href="contact.html" role="menuitem">Contact</a></li>
            </ul>
        </nav>

        <a href="contact.html" class="nav-cta">Consult Now</a>
    </div>
</header>`;

    // Add footer
    const footer = `
<footer>
    <div class="container footer-wrapper">
        <div class="footer-top">
            <div class="footer-brand">
                <img src="./assets/logo_bg.png" alt="Growthally Advisors" loading="lazy">
                <p class="footer-tagline">A Friend for Growth</p>
                <a href="contact.html" class="footer-cta">
                    <span>Schedule a Call</span>
                    <i class="fas fa-arrow-right"></i>
                </a>
                <div class="social-links">
                    <a href="https://www.linkedin.com/company/growthally" target="_blank" rel="noopener" title="LinkedIn">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.facebook.com/growthally" target="_blank" rel="noopener" title="Facebook">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/growthally" target="_blank" rel="noopener" title="Twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/growthally" target="_blank" rel="noopener" title="Instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>

            <div class="footer-columns">
                <div class="footer-column">
                    <h5>Quick Links</h5>
                    <ul>
                        <li><a href="index.html#home">Home</a></li>
                        <li><a href="index.html#about">About</a></li>
                        <li><a href="index.html#services">Services</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h5>Solutions</h5>
                    <ul>
                        <li><a href="index.html#services">Debt Syndication</a></li>
                        <li><a href="index.html#services">Equity Advisory</a></li>
                        <li><a href="index.html#services">M&A Advisory</a></li>
                        <li><a href="index.html#services">Financial Consulting</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h5>Contact</h5>
                    <ul class="footer-contact">
                        <li><i class="fas fa-phone"></i> +91-75062-36027</li>
                        <li><i class="fas fa-envelope"></i> info@growthally.org</li>
                        <li><i class="fas fa-map-marker-alt"></i> Mumbai, India</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} Growthally Advisors. All rights reserved.</p>
        </div>
    </div>
</footer>

<!-- WhatsApp Sticky Button -->
<a href="https://wa.me/917506236027?text=Hi" 
   class="whatsapp-sticky-btn" 
   target="_blank" 
   rel="noopener noreferrer"
   aria-label="Chat with us on WhatsApp"
   style="position: fixed; bottom: 20px; right: 20px; z-index: 9999; width: 60px; height: 60px; background: #25D366; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4); transition: all 0.3s ease; text-decoration: none;">
    <i class="fab fa-whatsapp" style="font-size: 32px; color: #ffffff;"></i>
</a>
<style>
.whatsapp-sticky-btn:hover {
    transform: scale(1.1) translateY(-3px);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6) !important;
    background: #20BA5A !important;
}
.whatsapp-sticky-btn:active {
    transform: scale(0.95);
}
</style>`;
    // Insert header at the beginning of wrapper_main
    const wrapperMain = document.getElementById('wrapper_main');
    if (wrapperMain) {
        wrapperMain.insertAdjacentHTML('afterbegin', header);
    } else {
        console.warn('wrapper_main not found - header not inserted');
        return; // Exit if wrapper_main doesn't exist
    }

    // Insert footer after main element (inside wrapper_main but after main closes)
    const mainElement = document.querySelector('main, #wrapper_scroll');
    if (mainElement) {
        mainElement.insertAdjacentHTML('afterend', footer);
        console.log('Footer inserted after main element');
    } else if (wrapperMain) {
        // Fallback: insert at end of wrapper_main if main not found
        wrapperMain.insertAdjacentHTML('beforeend', footer);
        console.log('Footer inserted at end of wrapper_main (fallback)');
    }

    // Small delay to ensure DOM is ready for event listeners
    setTimeout(() => {
        initializeNavigation();
    }, 50);
}

// Separate function for navigation initialization
function initializeNavigation() {
    console.log('initializeNavigation() called');
    
    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.nav-toggle');
    const mainMenu = document.getElementById('menu_main');
    
    console.log('menuToggle:', menuToggle);
    console.log('mainMenu:', mainMenu);
    
    if (menuToggle && mainMenu) {
        // Ensure menu starts closed
        mainMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        
        const toggleMenu = (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Toggle menu clicked!');
            
            const isActive = mainMenu.classList.contains('active');
            console.log('Current isActive:', isActive);
            
            if (isActive) {
                mainMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            } else {
                mainMenu.classList.add('active');
                menuToggle.classList.add('active');
                menuToggle.setAttribute('aria-expanded', 'true');
                document.body.style.overflow = 'hidden';
            }
            
            console.log('After toggle - menuToggle classes:', menuToggle.className);
            console.log('After toggle - mainMenu classes:', mainMenu.className);
        };

        // Remove any existing listeners first
        menuToggle.replaceWith(menuToggle.cloneNode(true));
        const newMenuToggle = document.querySelector('.nav-toggle');
        newMenuToggle.addEventListener('click', toggleMenu);
        newMenuToggle.addEventListener('touchend', toggleMenu);
        
        console.log('Click listener added to menu toggle');

        // Close menu when clicking on links
        mainMenu.querySelectorAll('a:not(.dropdown-trigger)').forEach(link => {
            link.addEventListener('click', () => {
                mainMenu.classList.remove('active');
                newMenuToggle.classList.remove('active');
                newMenuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mainMenu.contains(e.target) && !newMenuToggle.contains(e.target)) {
                if (mainMenu.classList.contains('active')) {
                    mainMenu.classList.remove('active');
                    newMenuToggle.classList.remove('active');
                    newMenuToggle.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = '';
                }
            }
        });
    } else {
        console.error('Menu toggle or main menu not found!');
        console.error('menuToggle element:', menuToggle);
        console.error('mainMenu element:', mainMenu);
    }

    // Dropdown functionality - Hover for desktop, Click for all
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    
    console.log('Found', dropdowns.length, 'dropdowns');
    
    if (dropdowns.length === 0) {
        console.warn('No dropdowns found');
        return;
    }
    
    // Check if device is mobile
    const isMobile = () => window.innerWidth <= 991;
    
    // Ensure all dropdowns start closed
    dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
        const trigger = dropdown.querySelector('.dropdown-trigger');
        if (trigger) {
            trigger.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Handle dropdown interactions
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.dropdown-trigger');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        if (trigger && dropdownMenu) {
            console.log('Setting up dropdown:', dropdown);
            console.log('Dropdown menu element:', dropdownMenu);
            
            // Hover functionality for desktop only
            dropdown.addEventListener('mouseenter', () => {
                if (!isMobile()) {
                    dropdown.classList.add('active');
                    trigger.setAttribute('aria-expanded', 'true');
                    console.log('Desktop hover - dropdown opened');
                }
            });
            
            dropdown.addEventListener('mouseleave', () => {
                if (!isMobile()) {
                    dropdown.classList.remove('active');
                    trigger.setAttribute('aria-expanded', 'false');
                    console.log('Desktop hover - dropdown closed');
                }
            });
            
            // Click functionality - works for both mobile and desktop
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('=== Dropdown trigger clicked! ===');
                console.log('Window width:', window.innerWidth);
                console.log('isMobile:', isMobile());
                console.log('Dropdown element:', dropdown);
                console.log('Current classes:', dropdown.className);
                
                const isOpen = dropdown.classList.contains('active');
                console.log('Is currently open:', isOpen);
                
                // Close all other dropdowns
                dropdowns.forEach(d => {
                    if (d !== dropdown) {
                        d.classList.remove('active');
                        const t = d.querySelector('.dropdown-trigger');
                        if (t) t.setAttribute('aria-expanded', 'false');
                    }
                });
                
                // Toggle current dropdown
                if (!isOpen) {
                    dropdown.classList.add('active');
                    trigger.setAttribute('aria-expanded', 'true');
                    console.log('✓ Dropdown OPENED');
                    console.log('New classes:', dropdown.className);
                    console.log('Dropdown menu display:', window.getComputedStyle(dropdownMenu).display);
                    console.log('Dropdown menu maxHeight:', window.getComputedStyle(dropdownMenu).maxHeight);
                    console.log('Dropdown menu visibility:', window.getComputedStyle(dropdownMenu).visibility);
                    console.log('Dropdown menu opacity:', window.getComputedStyle(dropdownMenu).opacity);
                } else {
                    dropdown.classList.remove('active');
                    trigger.setAttribute('aria-expanded', 'false');
                    console.log('✓ Dropdown CLOSED');
                    console.log('New classes:', dropdown.className);
                }
            });
        }
    });

    // Close dropdowns when clicking outside (mobile only)
    document.addEventListener('click', (e) => {
        if (isMobile() && !e.target.closest('.nav-dropdown')) {
            console.log('Click outside dropdowns - closing all');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
                const trigger = dropdown.querySelector('.dropdown-trigger');
                if (trigger) trigger.setAttribute('aria-expanded', 'false');
            });
        }
    });
    
    console.log('Navigation initialized successfully');
}

// Initialize on DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('DOMContentLoaded - Initializing common elements');
        initCommonElements();
    });
} else {
    // DOM is already loaded
    console.log('DOM already loaded - Initializing common elements');
    initCommonElements();
}

// Also ensure it runs after window load (for index.html with preloader)
window.addEventListener('load', function() {
    console.log('Window loaded - Checking if header exists');
    // Check if elements were already inserted
    if (!document.getElementById('header')) {
        console.log('Header not found - Initializing common elements');
        initCommonElements();
    } else {
        console.log('Header already exists');
        // Ensure navigation is initialized even if header exists
        const dropdowns = document.querySelectorAll('.nav-dropdown');
        if (dropdowns.length > 0) {
            console.log('Re-initializing navigation for', dropdowns.length, 'dropdowns');
            initializeNavigation();
        }
    }
});
