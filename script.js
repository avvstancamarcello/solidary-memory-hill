// Solidary Memory Hill - Interactive Features

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation clicks
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to header
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // Add click handlers to CTA buttons
    const ctaButtons = document.querySelectorAll('.btn');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add a ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Handle button actions
            if (this.textContent.includes('Visit Sanctuary')) {
                scrollToSection('#sanctuary');
            } else if (this.textContent.includes('Create Memorial')) {
                // This could open a modal or navigate to a form
                alert('Memorial creation feature coming soon!');
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature, .sanctuary-section, .roses-section, .memories-section');
    animateElements.forEach(el => observer.observe(el));

    // Add floating roses animation
    createFloatingRoses();
});

// Helper function to scroll to a section
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Create floating roses animation
function createFloatingRoses() {
    const hero = document.querySelector('.hero');
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const rose = document.createElement('div');
            rose.innerHTML = '🌹';
            rose.style.position = 'absolute';
            rose.style.fontSize = '2rem';
            rose.style.opacity = '0.3';
            rose.style.left = Math.random() * 100 + '%';
            rose.style.top = '100%';
            rose.style.pointerEvents = 'none';
            rose.style.zIndex = '0';
            rose.style.animation = `floatUp ${5 + Math.random() * 5}s linear forwards`;
            
            hero.appendChild(rose);
            
            // Remove rose after animation
            setTimeout(() => {
                rose.remove();
            }, 10000);
        }, i * 2000);
    }
    
    // Repeat the animation
    setTimeout(createFloatingRoses, 10000);
}

// Add CSS for animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        from {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
        }
        to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .animate-in {
        animation: slideInFromBottom 0.8s ease-out;
    }
    
    @keyframes slideInFromBottom {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

document.head.appendChild(style);

// Console message for developers
console.log('🌹 Welcome to Solidary Memory Hill - A digital sanctuary for peace and remembrance');
console.log('Built with love for eternal memory');