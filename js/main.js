// Theme Toggle
const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('light');
});

// Project Filter
const filterButtons = document.querySelectorAll('.project-filters button');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            const categories = card.getAttribute('data-category').split(' ');
            if (filter === 'all' || categories.includes(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Basic Form Submission (placeholder)
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted! (This is a placeholder)');
    contactForm.reset();
});

// Scroll Animation for Sections (on page load)
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once visible
        }
    });
}, {
    threshold: 0.2 // Trigger when 20% of the section is visible
});

sections.forEach(section => {
    observer.observe(section);
});

// Navigation Link Animation
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href').substring(1); // Remove '#'
        const targetSection = document.getElementById(targetId);

        // Smooth scroll to the section
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Trigger highlight animation
        targetSection.classList.remove('highlight'); // Reset animation
        void targetSection.offsetWidth; // Force reflow to restart animation
        targetSection.classList.add('highlight');

        // Remove highlight class after animation completes (0.8s)
        setTimeout(() => {
            targetSection.classList.remove('highlight');
        }, 800);
    });
});