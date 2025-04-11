
import { useState } from 'react';
import { Menu, X, BookOpen, Clock, Users, BookOpenCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-leti-blue mr-2" />
            <span className="font-playfair text-xl font-bold text-leti-blue">Виртуальный тур по истории ЛЭТИ</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#timeline" className="text-gray-700 hover:text-leti-blue font-medium flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              Хронология
            </a>
            <a href="#figures" className="text-gray-700 hover:text-leti-blue font-medium flex items-center">
              <Users className="w-4 h-4 mr-1" />
              Личности
            </a>
            <a href="#quiz" className="text-gray-700 hover:text-leti-blue font-medium flex items-center">
              <BookOpenCheck className="w-4 h-4 mr-1" />
              Проверь себя
            </a>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMobileMenu} className="p-2">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t">
            <ul className="flex flex-col space-y-4">
              <li>
                <a 
                  href="#timeline" 
                  className="flex items-center text-gray-700 hover:text-leti-blue font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Хронология
                </a>
              </li>
              <li>
                <a 
                  href="#figures" 
                  className="flex items-center text-gray-700 hover:text-leti-blue font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Users className="w-4 h-4 mr-2" />
                  Личности
                </a>
              </li>
              <li>
                <a 
                  href="#quiz" 
                  className="flex items-center text-gray-700 hover:text-leti-blue font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <BookOpenCheck className="w-4 h-4 mr-2" />
                  Проверь себя
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
