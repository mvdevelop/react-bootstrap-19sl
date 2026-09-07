import { useState, useEffect } from 'react';

/**
 * Custom hook that tracks which section is currently visible in the viewport.
 * Used to highlight the active navigation link based on scroll position.
 *
 * @param sectionIds - Array of section IDs to observe
 * @param offset - Pixels from top of viewport to consider "active"
 * @returns The ID of the currently active section
 */
export const useScrollSpy = (sectionIds: string[], offset = 100): string => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(sectionIds[i]);
          return;
        }
      }

      setActiveId('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
};