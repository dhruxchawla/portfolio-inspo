

  // Dark Mode Toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  const toggleText = document.querySelector('.toggle-text');
  
  // Check for saved preference
  if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
      if (toggleText) toggleText.textContent = 'light';
  }
  
  darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDark);
      
      if (toggleText) {
          toggleText.textContent = isDark ? 'light' : 'dark';
      }
  });
  
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
