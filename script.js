document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.glitch-section');
    const glitchOverlay = document.createElement('div');
    glitchOverlay.classList.add('glitch-overlay');
    document.body.appendChild(glitchOverlay);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                glitchTransition(() => {
                    entry.target.classList.add('glitch-active');
                });
            } else {
                glitchTransition(() => {
                    entry.target.classList.remove('glitch-active');
                });
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });

    function glitchTransition(callback) {
        glitchOverlay.classList.add('active');
        glitchOverlay.style.animation = 'rgb-shift 0.3s steps(3) infinite';
        
        setTimeout(() => {
            callback();
            setTimeout(() => {
                glitchOverlay.classList.remove('active');
                glitchOverlay.style.animation = 'none';
            }, 300);
        }, 300);
    }

    // Add glitch effect to headings and navbar links
    const headings = document.querySelectorAll('h2');
    const navLinks = document.querySelectorAll('.vhs-menu a');
    
    [...headings, ...navLinks].forEach(element => {
        element.classList.add('glitch-text');
        element.setAttribute('data-text', element.textContent);
    });

    // ScrollReveal animations
    ScrollReveal().reveal('.glitch-section', {
        delay: 200,
        distance: '50px',
        duration: 1000,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        interval: 0,
        opacity: 0,
        origin: 'bottom',
        scale: 0.9,
        cleanup: true,
        container: document.documentElement,
        mobile: true,
        reset: false,
        useDelay: 'always',
        viewFactor: 0.2,
        viewOffset: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        afterReveal: function (domEl) {
            domEl.classList.add('revealed');
        }
    });

     // Project details handling
    const projectLinks = document.querySelectorAll('.project-list a');
    const projectDetails = document.getElementById('project-details');

    const projectContent = {
        'movie-tracker': `
            <h3>React Movie Tracker</h3>
            <p>A web application built with React to track and rate movies you've watched.</p>
            <p><a class="link" href="https://github.com/luwke1/react-movie-tracker">https://github.com/luwke1/react-movie-tracker</a></p>
            
            <ul>
                <li>Developed a responsive ReactJS web app using HTML, CSS, and JavaScript</li>
                <li>Integrated external APIs (TMDB for movie data, OpenAI for smart recommendations)</li>
                <li>Implemented dynamic movie catalog with rating and watchlist features</li>
                <li>Utilized RESTful API calls for fetching and displaying movie data</li>
            </ul>
        `,
        'letterboxd': `
            <h3>LetterBoxd TasteMeter Extension</h3>
            <p>A browser extension that enhances the LetterBoxd experience with additional metrics.</p>
            <p><a class="link" href="https://github.com/luwke1/letterboxd-tastemeter-extension">https://github.com/luwke1/letterboxd-tastemeter-extension</a></p>
            <ul>
            
                <li>Built a chrome extension that generates a similarity score between you and another user based on all movie ratings</li>
                <li>Integrated various web APIs to fetch and process user data and learned to work with RESTful services and JSON data</li>
                <li>Utilized data processing and analysis algorithms to calculate and compare user ratings to determine similarity scores</li>
            </ul>
        `,
        'video-editing': `
            <h3>Video Editing</h3>
            <p>A collection of video editing projects showcasing various techniques and styles.</p>
            <p>Seoul, Korea (2024)</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/yOXr7wK0jj0?si=d9F5nP6d_SGmTzWk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>Busan, Korea (2024)</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dcXYg02MpgM?si=5mI02cFewNDM-jFW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>Japan (Coming Soon)</p>
        `
    };

    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = link.getAttribute('data-project');
            
            // Remove 'selected' class from all links
            projectLinks.forEach(l => l.classList.remove('selected'));
            
            // Add 'selected' class to clicked link
            link.classList.add('selected');
            
            glitchTransition(() => {
                projectDetails.innerHTML = projectContent[projectId];
            });
        });
    });

    function glitchTransition(callback) {
        glitchOverlay.classList.add('active');
        glitchOverlay.style.animation = 'rgb-shift 0.3s steps(3) infinite';
        
        setTimeout(() => {
            callback();
            setTimeout(() => {
                glitchOverlay.classList.remove('active');
                glitchOverlay.style.animation = 'none';
            }, 300);
        }, 300);
    }
});