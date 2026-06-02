import { useEffect } from 'react';

function useRevealOnScroll(dependency) {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('[data-reveal]'));

    if (!targets.length) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -42px 0px',
        threshold: 0.14,
      }
    );

    targets.forEach((target, index) => {
      target.classList.remove('is-visible');
      target.style.setProperty('--reveal-delay', `${Math.min(index * 45, 320)}ms`);
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, [dependency]);
}

export default useRevealOnScroll;
