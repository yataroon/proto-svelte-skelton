import { readable } from 'svelte/store';

export const useMediaQuery = (mediaQuery: string) => {
  const matches = readable(null, (set) => {
    const m = window.matchMedia(mediaQuery);
    set(m.matches);

    const el = (e) => set(e.matches);
    m.addEventListener('change', el);

    // ? cleanup?
    return () => {
      m.removeEventListener('change', el);
    };
  });
  return matches;
};
