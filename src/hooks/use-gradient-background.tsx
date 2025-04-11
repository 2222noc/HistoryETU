
import { useEffect } from "react";

export const useGradientBackground = () => {
  useEffect(() => {
    const updateScrollPosition = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.min(100, Math.max(0, (scrollPosition / maxScroll) * 100));
      
      document.documentElement.style.setProperty('--scroll-position', `${scrollPercentage}%`);
    };
    
    window.addEventListener('scroll', updateScrollPosition);
    updateScrollPosition();
    
    return () => window.removeEventListener('scroll', updateScrollPosition);
  }, []);
};

export default useGradientBackground;
