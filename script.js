// Smooth scrolling for navbar and hero button
document.querySelectorAll('.nav-links a, .btn-gold').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if(targetSection){
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Fade-in animation on scroll
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply to all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});
