// DOM Elements
const header = document.querySelector('.header');
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('section');
const contactForm = document.getElementById('contactForm');
const themeToggle = document.getElementById('theme-toggle-checkbox');

// Theme Management
function initializeTheme() {
  // Check for saved theme preference or default to light mode
  const savedTheme = sessionStorage.getItem('theme') || 'light';
  
  // Apply the theme
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  // Update toggle switch position
  themeToggle.checked = savedTheme === 'dark';
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  // Apply new theme
  document.documentElement.setAttribute('data-theme', newTheme);
  
  // Save preference
  sessionStorage.setItem('theme', newTheme);
  
  // Add a smooth transition effect
  document.body.style.transition = 'all 0.3s ease';
  setTimeout(() => {
    document.body.style.transition = '';
  }, 300);
}

// Theme toggle event listener
themeToggle.addEventListener('change', toggleTheme);

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initializeTheme);

// Mobile Navigation Toggle
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('nav__list--active');
  menuToggle.classList.toggle('menu-toggle--active');
  
  // Create animation for menu toggle
  const spans = menuToggle.querySelectorAll('span');
  if (menuToggle.classList.contains('menu-toggle--active')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    
    // Add mobile nav styles dynamically
    navList.style.display = 'flex';
    navList.style.flexDirection = 'column';
    navList.style.position = 'absolute';
    navList.style.top = '100%';
    navList.style.left = '0';
    navList.style.width = '100%';
    navList.style.backgroundColor = 'var(--color-surface)';
    navList.style.padding = 'var(--space-16)';
    navList.style.boxShadow = 'var(--shadow-md)';
    navList.style.zIndex = '999';
    navList.style.borderTop = '1px solid var(--color-border)';
    
    // Animate nav items
    navLinks.forEach((link, index) => {
      link.style.opacity = '0';
      link.style.transform = 'translateY(20px)';
      setTimeout(() => {
        link.style.opacity = '1';
        link.style.transform = 'translateY(0)';
        link.style.transition = 'all 0.3s ease';
      }, 100 * index);
    });
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
    
    // Reset nav styles
    setTimeout(() => {
      navList.style.display = '';
      navList.style.flexDirection = '';
      navList.style.position = '';
      navList.style.top = '';
      navList.style.left = '';
      navList.style.width = '';
      navList.style.backgroundColor = '';
      navList.style.padding = '';
      navList.style.boxShadow = '';
      navList.style.zIndex = '';
      navList.style.borderTop = '';
    }, 300);
  }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (navList.classList.contains('nav__list--active') && 
      !navList.contains(e.target) && 
      !menuToggle.contains(e.target)) {
    navList.classList.remove('nav__list--active');
    menuToggle.classList.remove('menu-toggle--active');
    
    // Reset toggle button
    const spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
    
    // Reset nav styles with delay
    setTimeout(() => {
      navList.style.display = '';
      navList.style.flexDirection = '';
      navList.style.position = '';
      navList.style.top = '';
      navList.style.left = '';
      navList.style.width = '';
      navList.style.backgroundColor = '';
      navList.style.padding = '';
      navList.style.boxShadow = '';
      navList.style.zIndex = '';
      navList.style.borderTop = '';
    }, 300);
  }
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navList.classList.contains('nav__list--active')) {
      navList.classList.remove('nav__list--active');
      menuToggle.classList.remove('menu-toggle--active');
      
      // Reset toggle button
      const spans = menuToggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
      
      // Reset nav styles with delay
      setTimeout(() => {
        navList.style.display = '';
        navList.style.flexDirection = '';
        navList.style.position = '';
        navList.style.top = '';
        navList.style.left = '';
        navList.style.width = '';
        navList.style.backgroundColor = '';
        navList.style.padding = '';
        navList.style.boxShadow = '';
        navList.style.zIndex = '';
        navList.style.borderTop = '';
      }, 300);
    }
  });
});

// Scroll Event - Header Shadow and Active Link
window.addEventListener('scroll', () => {
  // Add shadow to header on scroll
  if (window.scrollY > 0) {
    header.style.boxShadow = 'var(--shadow-md)';
    header.style.backgroundColor = 'rgba(var(--color-surface), 0.95)';
  } else {
    header.style.boxShadow = 'none';
    header.style.backgroundColor = 'var(--color-surface)';
  }
  
  // Active link based on scroll position
  updateActiveLink();
});

// Update active link based on scroll position
function updateActiveLink() {
  const scrollPosition = window.scrollY + 100;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Initial call to set active link on page load
updateActiveLink();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = header.offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Contact Form Handling
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let isValid = true;
    
    // Check for empty fields
    if (!name) {
      showError('name', 'Please enter your name');
      isValid = false;
    } else {
      clearError('name');
    }
    
    if (!email) {
      showError('email', 'Please enter your email');
      isValid = false;
    } else if (!isValidEmail(email)) {
      showError('email', 'Please enter a valid email address');
      isValid = false;
    } else {
      clearError('email');
    }
    
    if (!message) {
      showError('message', 'Please enter your message');
      isValid = false;
    } else {
      clearError('message');
    }
    
    if (isValid) {
      // Simulate form submission success
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      
      // Simulate API call with timeout
      setTimeout(() => {
        // Reset form
        contactForm.reset();
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'status status--success';
        successMessage.style.marginTop = 'var(--space-16)';
        successMessage.textContent = 'Message sent successfully!';
        
        contactForm.appendChild(successMessage);
        
        // Reset button
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        
        // Remove success message after 5 seconds
        setTimeout(() => {
          successMessage.remove();
        }, 5000);
      }, 1500);
    }
  });
}

// Helper function to show form error
function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  
  // Clear any existing error
  clearError(fieldId);
  
  // Create and add error message
  const errorMessage = document.createElement('div');
  errorMessage.className = 'form-error';
  errorMessage.textContent = message;
  errorMessage.style.color = 'var(--color-error)';
  errorMessage.style.fontSize = 'var(--font-size-sm)';
  errorMessage.style.marginTop = 'var(--space-4)';
  
  // Add error styles to input
  field.style.borderColor = 'var(--color-error)';
  
  // Insert error message after the input
  field.parentNode.appendChild(errorMessage);
}

// Helper function to clear form error
function clearError(fieldId) {
  const field = document.getElementById(fieldId);
  const existingError = field.parentNode.querySelector('.form-error');
  
  if (existingError) {
    existingError.remove();
  }
  
  // Reset input styles
  field.style.borderColor = '';
}

// Helper function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Project card animations
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px)';
    card.style.boxShadow = 'var(--shadow-lg)';
    card.style.borderColor = 'var(--color-primary)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
    card.style.borderColor = '';
  });
});

// Skill tag animations
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach(tag => {
  tag.addEventListener('mouseenter', () => {
    tag.style.background = 'var(--color-primary)';
    tag.style.color = 'var(--color-btn-primary-text)';
    tag.style.transform = 'translateY(-2px)';
  });
  
  tag.addEventListener('mouseleave', () => {
    tag.style.background = '';
    tag.style.color = '';
    tag.style.transform = '';
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe project cards and skill tags for scroll animations
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.project-card, .skill-tag');
  
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// Keyboard navigation for theme toggle
document.addEventListener('keydown', (e) => {
  // Toggle theme with Ctrl/Cmd + Shift + T
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
    e.preventDefault();
    themeToggle.checked = !themeToggle.checked;
    toggleTheme();
  }
});

// Add focus styles for better accessibility
document.addEventListener('DOMContentLoaded', () => {
  // Add focus-visible polyfill behavior for better keyboard navigation
  const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
  
  focusableElements.forEach(el => {
    el.addEventListener('focus', (e) => {
      if (e.target.matches(':focus-visible')) {
        e.target.style.outline = '2px solid var(--color-primary)';
        e.target.style.outlineOffset = '2px';
      }
    });
    
    el.addEventListener('blur', (e) => {
      e.target.style.outline = '';
      e.target.style.outlineOffset = '';
    });
  });
});

// Enhanced scroll performance
let ticking = false;

function updateOnScroll() {
  // Add shadow to header on scroll
  if (window.scrollY > 0) {
    header.style.boxShadow = 'var(--shadow-md)';
    header.style.backgroundColor = 'var(--color-surface)';
  } else {
    header.style.boxShadow = 'none';
    header.style.backgroundColor = 'var(--color-surface)';
  }
  
  // Active link based on scroll position
  updateActiveLink();
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(updateOnScroll);
    ticking = true;
  }
});

// Add loading state management
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Add a subtle entrance animation to the hero section
  const heroContent = document.querySelector('.hero__content');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
      heroContent.style.transition = 'all 0.8s ease';
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 100);
  }
});