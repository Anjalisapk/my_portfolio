// Theme Toggle Functionality
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.setTheme(this.currentTheme);
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
}

// Mobile Menu Functionality
class MobileMenu {
    constructor() {
        this.menuToggle = document.getElementById('mobileMenuToggle');
        this.mobileNav = document.getElementById('mobileNav');
        this.mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        this.init();
    }

    init() {
        this.menuToggle.addEventListener('click', () => this.toggleMenu());
        this.mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
    }

    toggleMenu() {
        this.menuToggle.classList.toggle('active');
        this.mobileNav.classList.toggle('active');
    }

    closeMenu() {
        this.menuToggle.classList.remove('active');
        this.mobileNav.classList.remove('active');
    }
}

// Smooth Scrolling for Navigation Links
class SmoothScroll {
    constructor() {
        this.navLinks = document.querySelectorAll('a[href^="#"]');
        this.init();
    }

    init() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleClick(e));
        });
    }

    handleClick(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
}

// Contact Form Handler
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this.form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        // Simulate form submission
        this.showLoading();
        
        setTimeout(() => {
            this.showSuccess();
            this.form.reset();
        }, 1500);
    }

    showLoading() {
        const submitBtn = this.form.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
    }

    showSuccess() {
        const submitBtn = this.form.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.background = '#10b981';
        
        setTimeout(() => {
            submitBtn.textContent = 'Send Message';
            submitBtn.disabled = false;
            submitBtn.style.background = '';
        }, 3000);
    }
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new MobileMenu();
    new SmoothScroll();
    new ContactForm();
});