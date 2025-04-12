'use client';

import { useEffect } from 'react';

const setLinkStates = (section: string) => {
  const items = document.querySelectorAll('.nav a');

  items.forEach((item) => {
    const sectionName = item.getAttribute('data-section');
    item.setAttribute('data-active', (sectionName === section).toString());
  });
};

export const NavState = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visibleSection = entries
        .find((entry) => entry.isIntersecting)?.target;

      if (visibleSection) {
        setLinkStates(visibleSection.id);
      }
    }, { rootMargin: '-50% 0%' });

    const sections = document.querySelectorAll('section[data-section]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return false;
};
