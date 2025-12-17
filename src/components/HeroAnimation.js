import gsap from 'gsap';

export function initHeroAnimations() {
  // Timeline for hero animations
  const tl = gsap.timeline({
    defaults: {
      ease: 'power4.out',
      duration: 1,
    }
  });

  // Animate text lines with stagger
  const heroTexts = document.querySelectorAll('.hero-text');
  heroTexts.forEach((text) => {
    const delay = parseFloat(text.getAttribute('data-delay') || '0');
    
    gsap.fromTo(text, 
      {
        opacity: 0,
        y: 40,
        clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)'
      },
      {
        opacity: 1,
        y: 0,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        duration: 1.2,
        delay: delay,
        ease: 'power4.out'
      }
    );
  });

  // Animate fade-in elements
  const fadeElements = document.querySelectorAll('.hero-fade');
  fadeElements.forEach((el) => {
    const delay = parseFloat(el.getAttribute('data-delay') || '0');
    
    gsap.fromTo(el,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: delay,
        ease: 'power3.out'
      }
    );
  });

  // Animate hero image
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    const delay = parseFloat(heroImage.getAttribute('data-delay') || '0');
    
    gsap.fromTo(heroImage,
      {
        opacity: 0,
        scale: 0.8,
        rotate: -5
      },
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 1.2,
        delay: delay,
        ease: 'power3.out'
      }
    );

    // Floating animation for image
    gsap.to(heroImage, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 1.5
    });
  }
}

// Scroll-triggered animations
export function initScrollAnimations() {
  const fadeInElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        gsap.fromTo(entry.target,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
          }
        );
        
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeInElements.forEach(el => observer.observe(el));
}
