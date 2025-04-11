
import { BookOpen, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-leti-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-leti-gold mr-2" />
              <span className="font-playfair text-xl font-bold">История ЛЭТИ</span>
            </div>
            <p className="text-gray-300 mb-4">
              Виртуальный тур по истории Санкт-Петербургского государственного электротехнического университета.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Полезные ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://etu.ru/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Официальный сайт ЛЭТИ
                </a>
              </li>
              <li>
                <a 
                  href="https://etu.ru/ru/muzej/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Музей истории ЛЭТИ
                </a>
              </li>
              <li>
                <a 
                  href="https://library.etu.ru/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white flex items-center"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Библиотека ЛЭТИ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <address className="not-italic text-gray-300">
              <p>Санкт-Петербург, ул. Профессора Попова, 5</p>
              <p className="mt-2">
                <a href="tel:+78123464446" className="hover:text-white">
                  +7 (812) 346-44-46
                </a>
              </p>
              <p className="mt-2">
                <a 
                  href="mailto:info@etu.ru" 
                  className="text-gray-300 hover:text-white flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  info@etu.ru
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Виртуальный тур по истории ЛЭТИ. Все права защищены.</p>
          <p className="mt-2 text-sm">
            Создано в образовательных целях. Данный проект является учебной работой.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
