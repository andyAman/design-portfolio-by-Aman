
document.addEventListener('DOMContentLoaded', () => {
  // Set current year in the footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.nav-mobile .nav-link');

  // Scroll reveal elements
  const allRevealElements = document.querySelectorAll('.reveal-element');
  
  // Progress bars
  const progressBars = document.querySelectorAll('.progress-bar');
  const progressGlows = document.querySelectorAll('.progress-glow');
  
  // Contact form
  const contactForm = document.getElementById('contactForm');
  const toast = document.getElementById('toast');
  const toastClose = document.querySelector('.toast-close');
  
  // Filter buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  // Scroll to top button
  const scrollToTopBtn = document.getElementById('scrollToTop');
  
  // Handle navbar scroll
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Check for elements in viewport
    allRevealElements.forEach(el => {
      if (isInViewport(el)) {
        const delay = el.getAttribute('data-delay') || 0;
        setTimeout(() => {
          el.classList.add('visible');
        }, delay);
      }
    });
    
    // Update progress bars when skills section is visible
    const skillsSection = document.getElementById('skills-section');
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
  
  // Project filtering
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
  
  // Handle contact form submission
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
  
  // Handle scroll to top
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Helper function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
      rect.bottom >= 0
    );
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
  
  // Initialize
  handleScroll(); // Call once on load
  window.addEventListener('scroll', handleScroll);
  
  // Initialize reveal animations for elements already in viewport
  allRevealElements.forEach(el => {
    if (isInViewport(el)) {
      setTimeout(() => {
        el.classList.add('visible');
      }, 300);
    }
  });
});
