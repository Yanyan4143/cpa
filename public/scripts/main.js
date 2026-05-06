            }
        }
    });
}

function initSkillBars() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll('.skill-fill');
                bars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const skillCategories = document.querySelectorAll('.skills-category');
    skillCategories.forEach(category => observer.observe(category));
}

function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    const animatedElements = document.querySelectorAll('.exp-card, .skills-category, .project-card, .contact-item');
    animatedElements.forEach(el => observer.observe(el));
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initTypingEffect();
    initMobileMenu();
    initContactForm();
    initSkillBars();
    initAnimations();
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
