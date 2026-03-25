// Parçacık efekti
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const count = 40;
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(212, 168, 83, ${0.1 + Math.random() * 0.3});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        container.appendChild(particle);
    }

    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translate(0, 0); opacity: 0.3; }
            25% { transform: translate(10px, -20px); opacity: 0.6; }
            50% { transform: translate(-5px, -40px); opacity: 0.4; }
            75% { transform: translate(15px, -60px); opacity: 0.2; }
        }
    `;
    document.head.appendChild(style);
}

// Navbar scroll efekti
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Mobil menü toggle
function initMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');

    toggle?.addEventListener('click', () => {
        links.classList.toggle('active');
    });
}

// Yumuşak scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target?.scrollIntoView({ behavior: 'smooth' });
    });
});

// Başlat
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initNavbar();
    initMobileMenu();
});
