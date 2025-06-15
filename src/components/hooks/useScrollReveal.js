import { useEffect, useRef, useState } from 'react';

export default function useScrollReveal({ threshold = 0.1 } = {}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    console.log('[useScrollReveal] efecto montado, ref.current =', ref.current);
    const el = ref.current;
    if (!el) {
      console.log('[useScrollReveal] ref.current aún es null, saliendo.');
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        console.log('[useScrollReveal] IntersectionObserver callback', entries);
        if (entries[0].isIntersecting) {
          console.log('[useScrollReveal] ¡elemento en vista! Revelando…');
          setRevealed(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => {
      console.log('[useScrollReveal] limpiando observer');
      observer.disconnect();
    };
  }, [threshold]);

  return [ref, revealed];
}