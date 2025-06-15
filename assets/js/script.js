
    // Time-based theme
    function setTimeBasedTheme() {
        const hour = new Date().getHours();
        const body = document.body;

        body.classList.remove('morning', 'day', 'evening', 'night');

        if (hour >= 6 && hour < 12) {
            body.classList.add('morning');
        } else if (hour >= 12 && hour < 18) {
            body.classList.add('day');
        } else if (hour >= 18 && hour < 21) {
            body.classList.add('evening');
        } else {
            body.classList.add('night');
        }
    }

    // Initialize time-based theme
    setTimeBasedTheme();
    setInterval(setTimeBasedTheme, 60000);

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeText = document.querySelector('#darkModeToggle .toggle-text');

    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        darkModeText.textContent = 'light';
    }

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark);
        darkModeText.textContent = isDark ? 'light' : 'dark';
    });

    // Font Color Toggle
    const fontColorToggle = document.getElementById('fontColorToggle');
    const fontColorText = document.querySelector('#fontColorToggle .toggle-text');

    fontColorToggle.addEventListener('click', () => {
        document.body.classList.toggle('force-white-text');
        document.body.classList.toggle('force-black-text');
        
        const isWhite = document.body.classList.contains('force-white-text');
        fontColorText.textContent = isWhite ? 'black text' : 'white text';
        localStorage.setItem('forceWhiteText', isWhite);
    });

    // Check for saved font color preference
    if (localStorage.getItem('forceWhiteText') === 'true') {
        document.body.classList.add('force-white-text');
        document.querySelector('#fontColorToggle .toggle-text').textContent = 'black text';
    } else if (localStorage.getItem('forceWhiteText') === 'false') {
        document.body.classList.add('force-black-text');
        document.querySelector('#fontColorToggle .toggle-text').textContent = 'white text';
    }

    // Reading Progress
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        document.querySelector('.reading-progress').style.width = `${progress}%`;
    });

    // Remove typing indicator
    setTimeout(() => {
        const typingIndicator = document.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.style.opacity = '0';
            setTimeout(() => typingIndicator.remove(), 500);
        }
    }, 3000);

    // Project hover effects
    document.querySelectorAll('.project').forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.style.transform = 'translateX(20px) scale(1.02)';
            project.style.paddingLeft = '20px';
        });
        project.addEventListener('mouseleave', () => {
            project.style.transform = '';
            project.style.paddingLeft = '';
        });
    });

    // Set animation delays
    document.querySelectorAll('.section').forEach((section, index) => {
        section.style.animationDelay = `${index * 0.1 + 0.2}s`;
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    // Update copyright year
    document.querySelector('footer p').innerHTML = `© ${new Date().getFullYear()} Dhruv Chawla. All rights reserved.`;

    // Console greeting
    console.log('%c👋 Hello fellow developer!', 'font-family: sans-serif; font-size: 14px; color: #333; background: #f5f5f5; padding: 5px 10px; border-radius: 3px;');
    console.log('%cLooking for something interesting?', 'font-family: sans-serif; font-size: 14px; color: #333; background: #f5f5f5; padding: 5px 10px; border-radius: 3px;');
