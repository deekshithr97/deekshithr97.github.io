# Updated CSS Code (style.css)

```css
/* ===== LIGHT & DARK MODE CSS VARIABLES ===== */
:root {
    /* Light Mode Colors */
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    --background-color: #ffffff;
    --text-color: #34495e;
    --light-grey: #f8f9fa;
    --white: #ffffff;
    --card-bg: #ffffff;
    --header-bg: #ffffff;
    --projects-bg: #f8f9fa;
    --shadow-color: rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] {
    /* Dark Mode Colors */
    --primary-color: #00bfff;
    --secondary-color: #222;
    --background-color: #111;
    --text-color: #fff;
    --light-grey: #333;
    --white: #fff;
    --card-bg: #222;
    --header-bg: #222;
    --projects-bg: #1a1a1a;
    --shadow-color: rgba(0, 191, 255, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
}

/* ===== THEME TOGGLE SWITCH ===== */
.theme-toggle {
    position: relative;
}

.theme-switch {
    display: none;
}

.theme-label {
    display: flex;
    align-items: center;
    background: var(--light-grey);
    border-radius: 50px;
    padding: 8px;
    cursor: pointer;
    position: relative;
    width: 70px;
    height: 36px;
    transition: background-color 0.3s ease;
}

.sun-icon, .moon-icon {
    font-size: 16px;
    z-index: 2;
    transition: opacity 0.3s ease;
}

.sun-icon {
    margin-right: auto;
}

.moon-icon {
    margin-left: auto;
}

.toggle-slider {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 28px;
    height: 28px;
    background: var(--primary-color);
    border-radius: 50%;
    transition: transform 0.3s ease;
    z-index: 1;
}

.theme-switch:checked + .theme-label .toggle-slider {
    transform: translateX(34px);
}

.theme-switch:checked + .theme-label .sun-icon {
    opacity: 0.5;
}

.theme-switch:not(:checked) + .theme-label .moon-icon {
    opacity: 0.5;
}

/* ===== GENERAL STYLES ===== */
h1, h2, h3 {
    color: var(--text-color);
    font-weight: 600;
}

h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    position: relative;
}

h2::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: var(--primary-color);
    margin: 10px auto 0;
    border-radius: 2px;
}

section {
    padding: 80px 20px;
    max-width: 1100px;
    margin: 0 auto;
}

.cta-button {
    display: inline-block;
    background-color: var(--primary-color);
    color: var(--white);
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px var(--shadow-color);
}

.cta-button:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px var(--shadow-color);
}

/* ===== HEADER & NAVIGATION ===== */
header {
    background-color: var(--header-bg);
    box-shadow: 0 2px 5px var(--shadow-color);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    transition: background-color 0.3s ease;
}

nav {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}

nav ul {
    list-style: none;
    display: flex;
    align-items: center;
}

nav ul li {
    margin-left: 30px;
}

nav ul li a {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 500;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: var(--primary-color);
}

nav ul li a.cta-button {
    color: var(--white);
    box-shadow: none;
}

nav ul li a.cta-button:hover {
    color: var(--white);
}

/* ===== HERO SECTION ===== */
#hero {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    text-align: center;
    color: var(--white);
    background: linear-gradient(rgba(34,34,34,0.7), rgba(17,17,17,0.8)), url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070') center/cover no-repeat fixed;
}

#hero h1 {
    font-size: 4rem;
    color: var(--white);
    margin-bottom: 1rem;
}

#hero .subtitle {
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    color: var(--white);
}

/* ===== ABOUT SECTION ===== */
.about-container {
    display: flex;
    align-items: center;
    gap: 3rem;
}

.profile-photo {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    border: 7px solid var(--primary-color);
    box-shadow: 0 0 20px var(--shadow-color);
}

.about-text {
    flex: 1;
}

.about-text h3 {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.skills-grid span {
    background-color: var(--light-grey);
    color: var(--text-color);
    padding: 8px 18px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    transition: background-color 0.3s ease;
}

/* ===== PROJECTS SECTION ===== */
#projects {
    background-color: var(--projects-bg);
    transition: background-color 0.3s ease;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
}

.project-card {
    background-color: var(--card-bg);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px var(--shadow-color);
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
    display: flex;
    flex-direction: column;
}

.project-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 16px var(--shadow-color);
}

.project-card img {
    width: 100%;
    height: 220px;
    object-fit: cover;
}

.project-card h3 {
    padding: 1.5rem 1.5rem 0.5rem 1.5rem;
    font-size: 1.25rem;
    color: var(--primary-color);
}

.project-card p {
    padding: 0 1.5rem 1.5rem 1.5rem;
    font-size: 0.95rem;
    flex-grow: 1;
    color: var(--text-color);
}

.project-links {
    padding: 0 1.5rem 1.5rem 1.5rem;
    margin-top: auto;
}

.project-links a {
    text-decoration: none;
    color: var(--primary-color);
    font-weight: 600;
    margin-right: 20px;
    transition: color 0.3s ease;
}

.project-links a:hover {
    text-decoration: underline;
}

/* ===== CONTACT SECTION ===== */
#contact {
    text-align: center;
}

#contact p {
    max-width: 500px;
    margin: 0 auto 2rem auto;
    font-size: 1.1rem;
}

.social-links {
    margin-top: 2.5rem;
}

.social-links a {
    margin: 0 15px;
    text-decoration: none;
    color: var(--text-color);
    font-weight: 600;
    font-size: 1.1rem;
    transition: color 0.3s ease;
}

.social-links a:hover {
    color: var(--primary-color);
}

/* ===== FOOTER ===== */
footer {
    text-align: center;
    padding: 2rem;
    background-color: var(--light-grey);
    color: var(--text-color);
    font-size: 0.9rem;
    transition: background-color 0.3s ease;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
    nav {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }
    
    nav ul {
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
    }
    
    nav ul li {
        margin-left: 0;
    }
    
    #hero h1 {
        font-size: 2.5rem;
    }
    
    #hero .subtitle {
        font-size: 1.1rem;
    }
    
    .about-container {
        flex-direction: column;
        text-align: center;
    }
    
    h2 {
        font-size: 2rem;
    }
    
    section {
        padding: 60px 15px;
    }
}

@media (max-width: 480px) {
    .theme-toggle {
        margin-bottom: 10px;
    }
    
    #hero {
        padding: 0 15px;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
    }
}
```