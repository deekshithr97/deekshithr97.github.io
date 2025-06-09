# Updated JavaScript Code (script.js)

```javascript
// Theme switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeSwitch.checked = true;
    } else {
        body.setAttribute('data-theme', 'light');
        themeSwitch.checked = false;
    }
    
    // Theme switch event listener
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add animation on scroll (optional enhancement)
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Mobile menu functionality (for future enhancement)
function toggleMobileMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('mobile-active');
}

// Console message
console.log("Welcome to Deekshith's Portfolio! Theme switching enabled.");

// Optional: Add keyboard shortcuts for theme switching
document.addEventListener('keydown', function(e) {
    // Ctrl + Shift + T to toggle theme
    if (e.ctrlKey && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        const themeSwitch = document.getElementById('theme-switch');
        themeSwitch.click();
    }
});
```

## How to Implement the Changes

### Step 1: Update Your HTML File
Replace your existing `index.html` content with the updated HTML code above. The key changes include:
- Removed the "Deekshith" logo/name from the header
- Added a theme toggle switch in the top left corner
- Updated navigation structure to accommodate the toggle

### Step 2: Update Your CSS File
Replace your existing `style.css` content with the updated CSS code above. The improvements include:
- CSS custom properties for both light and dark themes
- Smooth transitions between themes
- Responsive theme toggle switch design
- Complete color scheme variables for easy customization

### Step 3: Update Your JavaScript File
Replace your existing `script.js` content with the updated JavaScript code above. The new functionality includes:
- Theme switching logic with localStorage persistence
- Smooth scrolling for navigation links
- Optional scroll animations
- Keyboard shortcut support (Ctrl+Shift+T)

### Key Features Added

**Theme Toggle Switch:**
- Located in the top left corner as requested
- Emoji-based sun/moon icons for visual clarity
- Smooth sliding animation
- Remembers user preference using localStorage

**Light Mode:**
- Clean white background with dark text
- Professional blue accent color (#3498db)
- Light grey sections for visual separation

**Dark Mode:**
- Deep black background (#111) with white text
- Cyan blue accent color (#00bfff) for better visibility
- Dark grey card backgrounds for content separation

**Responsive Design:**
- Works seamlessly on all device sizes
- Mobile-friendly navigation layout
- Optimized toggle switch for touch devices

### Usage Instructions

1. **Save the Files:** Create three files (`index.html`, `style.css`, `script.js`) with the respective code
2. **Test Locally:** Open `index.html` in your browser to see the theme toggle in action
3. **Deploy:** Upload to your web hosting service or GitHub Pages
4. **Customize:** Adjust colors in the CSS variables section to match your preferences

The website now provides a professional dual-theme experience with the theme toggle prominently placed in the top left corner, replacing the previous name/logo placement as requested.