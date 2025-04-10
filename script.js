
document.addEventListener('DOMContentLoaded', () => {
  // Set current year in the footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Cache DOM elements to improve performance
  const navbar = document.querySelector('.navbar');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.nav-mobile .nav-link');
  const darkModeToggle = document.getElementById('darkModeToggle');
  const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');
  const scrollToTopBtn = document.getElementById('scrollToTop');
  const allRevealElements = document.querySelectorAll('.reveal-element');
  const progressBars = document.querySelectorAll('.progress-bar');
  const progressGlows = document.querySelectorAll('.progress-glow');
  const skillsSection = document.getElementById('skills-section');
  
  // Debounce function to limit scroll event firing
  function debounce(func, wait = 10) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }
  
  // Check for saved dark mode preference
  function initDarkMode() {
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      if (darkModeToggle) darkModeToggle.checked = true;
      if (darkModeToggleMobile) darkModeToggleMobile.checked = true;
    }
  }
  
  // Dark mode toggle functionality
  function setupDarkModeToggles() {
    const toggleDarkMode = (checked) => {
      if (checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
      }
    };
    
    if (darkModeToggle) {
      darkModeToggle.addEventListener('change', () => {
        toggleDarkMode(darkModeToggle.checked);
        if (darkModeToggleMobile) darkModeToggleMobile.checked = darkModeToggle.checked;
      });
    }
    
    if (darkModeToggleMobile) {
      darkModeToggleMobile.addEventListener('change', () => {
        toggleDarkMode(darkModeToggleMobile.checked);
        if (darkModeToggle) darkModeToggle.checked = darkModeToggleMobile.checked;
      });
    }
  }
  
  // Handle navbar scroll
  const handleScroll = debounce(() => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Check elements in viewport with throttled performance
    checkElementsInViewport();
    
    // Show/hide scroll to top button
    if (window.scrollY > 500) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  }, 5);
  
  // Check elements in viewport with IntersectionObserver for better performance
  function setupIntersectionObservers() {
    // Observer for reveal elements
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.getAttribute('data-delay') || 0;
          setTimeout(() => {
            el.classList.add('visible');
          }, delay);
          revealObserver.unobserve(el); // Only animate once
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });
    
    allRevealElements.forEach(el => {
      revealObserver.observe(el);
    });
    
    // Observer for skills section
    if (skillsSection) {
      const skillsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress') || 0;
            bar.style.width = `${progress}%`;
          });
          
          progressGlows.forEach((glow, index) => {
            const progress = progressBars[index]?.getAttribute('data-progress') || 0;
            glow.style.width = `${progress}%`;
          });
        }
      }, { threshold: 0.1 });
      
      skillsObserver.observe(skillsSection);
    }
  }
  
  // Legacy function for browsers that don't support IntersectionObserver
  function checkElementsInViewport() {
    if ('IntersectionObserver' in window) return; // Skip if using modern observers
    
    // Check for elements in viewport (fallback)
    allRevealElements.forEach(el => {
      if (isInViewport(el) && !el.classList.contains('visible')) {
        const delay = el.getAttribute('data-delay') || 0;
        setTimeout(() => {
          el.classList.add('visible');
        }, delay);
      }
    });
    
    // Update progress bars when skills section is visible
    if (skillsSection && isInViewport(skillsSection)) {
      progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress') || 0;
        bar.style.width = `${progress}%`;
      });
      
      progressGlows.forEach((glow, index) => {
        const progress = progressBars[index]?.getAttribute('data-progress') || 0;
        glow.style.width = `${progress}%`;
      });
    }
  }
  
  // Mobile menu toggle
  function setupMobileMenu() {
    if (!menuToggle || !mobileMenu) return;
    
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('menu-open');
      mobileMenu.classList.toggle('open');
      document.body.classList.toggle('no-scroll');
    });
    
    // Close mobile menu when clicking a link
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('menu-open');
        mobileMenu.classList.remove('open');
        document.body.classList.remove('no-scroll');
      });
    });
  }
  
  // Project filtering
  function setupProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active filter button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        // Filter projects
        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          
          if (filterValue === 'all' || filterValue === category) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
  
  // Handle contact form submission
  function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    const toast = document.getElementById('toast');
    const toastClose = document.querySelector('.toast-close');
    
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show submitting state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Sending...</span>';
        
        // Simulate form submission delay
        setTimeout(() => {
          // Reset form
          contactForm.reset();
          
          // Reset button
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
          
          // Show toast notification
          showToast('Message sent successfully!');
        }, 1500);
      });
    }
    
    // Handle toast close
    if (toastClose) {
      toastClose.addEventListener('click', () => {
        hideToast();
      });
    }
    
    // Show toast notification
    function showToast(message) {
      const messageElement = document.getElementById('toast-message');
      if (messageElement) {
        messageElement.textContent = message;
      }
      toast.classList.add('show');
      
      // Auto hide after 5 seconds
      setTimeout(() => {
        hideToast();
      }, 5000);
    }
    
    // Hide toast notification
    function hideToast() {
      toast.classList.remove('show');
    }
  }
  
  // Handle scroll to top
  function setupScrollToTop() {
    if (scrollToTopBtn) {
      scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }
  
  // Helper function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
      rect.bottom >= 0
    );
  }
  
  // Optimize images by setting loading="lazy" attribute
  function optimizeImages() {
    document.querySelectorAll('img').forEach(img => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
    });
  }
  
  // Add subtle 3D effect on hover for project cards
  function enhanceProjectCards() {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        if (window.innerWidth < 768) return; // Disable on mobile
        
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top; // y position within the element
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate rotation based on mouse position
        // Reduce intensity for smoother effect
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        card.style.transition = 'transform 0.5s ease';
      });
    });
  }
  
  // Initialize all functions
  function init() {
    initDarkMode();
    setupDarkModeToggles();
    setupMobileMenu();
    setupProjectFilters();
    setupContactForm();
    setupScrollToTop();
    optimizeImages();
    
    // Use modern intersection observers if supported
    if ('IntersectionObserver' in window) {
      setupIntersectionObservers();
    }
    
    // Add enhanced 3D effects
    enhanceProjectCards();
    
    // Initialize scroll handler
    handleScroll(); // Call once on load
    window.addEventListener('scroll', handleScroll);
    
    // Handle window resize
    window.addEventListener('resize', debounce(() => {
      handleScroll();
    }, 100));
  }
  
  // Run initialization
  init();
});
