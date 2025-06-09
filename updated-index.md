# Updated HTML Code (index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deekshith - Python Full Stack Developer</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body>

    <header>
        <nav>
            <!-- Theme Toggle Switch (Top Left) -->
            <div class="theme-toggle">
                <input type="checkbox" id="theme-switch" class="theme-switch">
                <label for="theme-switch" class="theme-label">
                    <span class="sun-icon">☀️</span>
                    <span class="moon-icon">🌙</span>
                    <div class="toggle-slider"></div>
                </label>
            </div>
            
            <!-- Navigation Menu -->
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="Deekshith-Resume.pdf" class="cta-button" target="_blank">View Resume</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <!-- Hero Section -->
        <section id="hero">
            <div class="hero-content">
                <h1>Hi, I'm Deekshith</h1>
                <p class="subtitle">Python Full-Stack Developer passionate about building responsive web apps and impactful tech solutions.</p>
                <a href="#projects" class="cta-button">See My Work</a>
            </div>
        </section>

        <!-- About Section -->
        <section id="about">
            <h2>About Me</h2>
            <div class="about-container">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888" alt="A professional photo of Deekshith" class="profile-photo">
                <div class="about-text">
                    <p>
                        I'm a passionate software developer with hands-on experience in full-stack web development. Skilled in building responsive web apps, creating RESTful APIs, and working with databases. Quick learner with a problem-solving mindset, eager to contribute to impactful tech solutions.
                    </p>
                    <h3>My Tech Stack:</h3>
                    <div class="skills-grid">
                        <span>Python</span>
                        <span>Django</span>
                        <span>Flask</span>
                        <span>React.js</span>
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>JavaScript</span>
                        <span>SQL/MySQL</span>
                        <span>FastAPI</span>
                        <span>Git & GitHub</span>
                        <span>AWS (basic)</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects">
            <h2>My Projects</h2>
            <div class="projects-grid">
                <!-- Project 1 -->
                <div class="project-card">
                    <img src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070" alt="Screenshot of Student Management System">
                    <h3>Student Management System</h3>
                    <p>A full-stack web app to manage student records with real-time frontend using React and RESTful APIs built in Flask/Django with SQL.</p>
                    <div class="project-links">
                        <a href="#" target="_blank">Live Demo</a>
                        <a href="#" target="_blank">GitHub</a>
                    </div>
                </div>

                <!-- Project 2 -->
                <div class="project-card">
                    <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070" alt="Screenshot of Task Tracker">
                    <h3>Online Task Tracker</h3>
                    <p>User login and role-based access for managing tasks. Backend built with Flask and SQL for secure task and user data storage.</p>
                    <div class="project-links">
                        <a href="#" target="_blank">Live Demo</a>
                        <a href="#" target="_blank">GitHub</a>
                    </div>
                </div>
                
                <!-- Project 3 -->
                <div class="project-card">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070" alt="Screenshot of Face Mask Detector">
                    <h3>Real-Time Face Mask Detector</h3>
                    <p>CNN-based AI system to detect face masks in real-time, integrating OpenCV for webcam input and displaying predictions.</p>
                    <div class="project-links">
                        <a href="#" target="_blank">Live Demo</a>
                        <a href="#" target="_blank">GitHub</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact">
            <h2>Get In Touch</h2>
            <p>I'm currently seeking new opportunities and would love to connect. Feel free to reach out via email or on social media!</p>
            <a href="mailto:deekshithr99@gmail.com" class="cta-button">Say Hello</a>
            <div class="social-links">
                <a href="https://linkedin.com/in/deekshith-r-656618248" target="_blank">LinkedIn</a> |
                <a href="https://github.com/deekshithr97" target="_blank">GitHub</a>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Deekshith. Built from scratch with HTML, CSS, and ❤️.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```