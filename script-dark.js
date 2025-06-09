// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = 70; // Height of fixed header
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile menu toggle (add this if you want a responsive hamburger menu)
    const menuBtn = document.createElement('div');
    menuBtn.className = 'menu-btn';
    menuBtn.innerHTML = '<div class="bar"></div><div class="bar"></div><div class="bar"></div>';
    
    const nav = document.querySelector('nav');
    const navUl = document.querySelector('nav ul');
    
    if (nav && navUl) {
        nav.insertBefore(menuBtn, navUl);
        
        menuBtn.addEventListener('click', function() {
            navUl.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });
        
        // Close mobile menu when a link is clicked
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', function() {
                navUl.classList.remove('active');
                menuBtn.classList.remove('active');
            });
        });
    }
    
    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.project-card, .profile-photo, .skills-grid');
    
    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.8;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('show');
            }
        });
    }
    
    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Check on initial load
});