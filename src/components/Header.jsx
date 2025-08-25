import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { label: 'Início', path: '/' },
    { label: 'Serviços', path: '/servicos' },
    { label: 'Atendimento 24h', path: '/atendimento-24h' },
    { label: 'Por que escolher?', path: '/por-que-escolher' },
    { label: 'Depoimentos', path: '/depoimentos' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contato', path: '/contato' },
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(false);
    // Scroll to top when navigating
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className="bg-orange-600 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-16">
          {/* Logo e Nome */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logoImg} 
              alt="Desentupidora Solução" 
              className="w-12 h-12 md:w-12 md:h-12 rounded-full bg-white p-1"
            />
            <span className="font-bold text-lg md:text-xl text-white">Desentupidora Solução</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium hover:text-orange-200 transition-colors ${
                  isActive(item.path) ? 'text-orange-200 border-b-2 border-orange-200' : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Botões de Contato */}
          <div className="flex items-center space-x-2">
            <a
              href="tel:71996904202"
              className="hidden sm:flex items-center space-x-1 bg-green-600 hover:bg-green-700 px-3 py-2 rounded text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden md:block">(71) 9 9690-4202</span>
            </a>
            
            <a
              href="https://wa.me/5571996904202"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 bg-green-600 hover:bg-green-700 px-3 py-2 rounded text-sm font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-blue-800 py-4">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleMenuClick}
                  className={`block px-3 py-2 text-base hover:bg-blue-800 rounded transition-colors ${
                    isActive(item.path) ? 'bg-blue-800 text-blue-200' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

