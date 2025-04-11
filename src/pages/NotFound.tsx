
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    document.documentElement.style.setProperty('--scroll-position', '50%');
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center gradient-background">
      <div className="text-center z-10">
        <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl text-gray-300 mb-4">Упс! Страница не найдена</p>
        <a href="/" className="text-leti-gold hover:text-white underline transition-colors">
          Вернуться на главную
        </a>
      </div>
    </div>
  );
};

export default NotFound;
