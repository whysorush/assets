// Common navigation and footer for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Add navigation
    const header = `
<header id="header" class="normal initial-load">
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
                <li role="none"><a href="index.html#ab" role="menuitem">About Us</a></li>
                <li role="none"><a href="index.html#ser" role="menuitem">Services</a></li>
                <li role="none"><a href="index.html#team" role="menuitem">Team</a></li>
                <li role="none"><a href="blogs.html" role="menuitem">Blogs</a></li>
                <li role="none"><a href="media.html" role="menuitem">Media</a></li>
                <li role="none"><a href="gallery.html" role="menuitem">Gallery</a></li>
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
                <a href="index.html#con" class="footer-cta">
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
                        <li><a href="index.html#ab">About</a></li>
                        <li><a href="index.html#ser">Services</a></li>
                        <li><a href="index.html#con">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h5>Solutions</h5>
                    <ul>
                        <li><a href="index.html#ser">Debt Syndication</a></li>
                        <li><a href="index.html#ser">Equity Advisory</a></li>
                        <li><a href="index.html#ser">M&A Advisory</a></li>
                        <li><a href="index.html#ser">Financial Consulting</a></li>
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
    }

    // Insert footer before the end of wrapper_main
    if (wrapperMain) {
        wrapperMain.insertAdjacentHTML('beforeend', footer);
    }

    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.nav-toggle');
    const mainMenu = document.getElementById('menu_main');
    
    if (menuToggle && mainMenu) {
        const toggleMenu = () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', (!isExpanded).toString());
            menuToggle.classList.toggle('active');
            mainMenu.classList.toggle('active');
        };

        menuToggle.addEventListener('click', toggleMenu);

        mainMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                mainMenu.classList.remove('active');
            });
        });
    }

    // Header scroll behavior to match index.html experience
    const headerElement = document.getElementById('header');
    if (headerElement) {
        headerElement.classList.add('initial-load');

        const updateHeaderState = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const headerHeight = headerElement.offsetHeight || 60;

            if (scrollTop > headerHeight) {
                headerElement.classList.remove('initial-load');
                headerElement.classList.add('scrolled');
            } else {
                headerElement.classList.remove('scrolled');
                if (scrollTop === 0) {
                    headerElement.classList.add('initial-load');
                }
            }
        };

        updateHeaderState();
        window.addEventListener('scroll', updateHeaderState);
    }
});
