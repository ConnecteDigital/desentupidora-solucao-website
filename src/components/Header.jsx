import { Phone, MessageCircle, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';
import { servicos } from '../data/servicos';
import { cidades, bairros } from '../data/bairros';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicosOpen, setServicosOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileServicosOpen, setMobileServicosOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { label: 'Início', path: '/' },
    { label: 'Atendimento 24h', path: '/atendimento-24h' },
    { label: 'Por que escolher?', path: '/por-que-escolher' },
    { label: 'Depoimentos', path: '/depoimentos' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contato', path: '/contato' },
  ];

  const handleMenuClick = () => {
    setIsMenuOpen(false);
    setMobileServicosOpen(false);
    setMobileAreasOpen(false);
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
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className={`text-sm font-medium px-3 py-2 hover:text-orange-200 transition-colors ${
                isActive('/') ? 'text-orange-200 border-b-2 border-orange-200' : 'text-white'
              }`}
            >
              Início
            </Link>

            {/* Serviços dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicosOpen(true)}
              onMouseLeave={() => setServicosOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium px-3 py-2 text-white hover:text-orange-200 transition-colors">
                Serviços <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {servicosOpen && (
                <div className="absolute left-0 top-full w-72 rounded-lg border bg-white p-2 shadow-xl">
                  {servicos.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/${s.slug}`}
                      onClick={() => setServicosOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 transition-colors"
                    >
                      {s.nome}
                    </Link>
                  ))}
                  <div className="my-1 border-t" />
                  <Link
                    to="/servicos"
                    onClick={() => setServicosOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-orange-600 hover:bg-orange-50 transition-colors"
                  >
                    Ver todos os serviços
                  </Link>
                </div>
              )}
            </div>

            {/* Áreas de Atendimento dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium px-3 py-2 text-white hover:text-orange-200 transition-colors">
                Áreas de Atendimento <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {areasOpen && (
                <div className="absolute left-1/2 top-full flex w-[640px] -translate-x-1/2 gap-4 rounded-lg border bg-white p-4 shadow-xl">
                  {cidades.map((cidade) => (
                    <div key={cidade.slug} className="flex-1">
                      <Link
                        to={`/${cidade.rota}`}
                        onClick={() => setAreasOpen(false)}
                        className="mb-2 block text-sm font-semibold text-orange-700 hover:underline"
                      >
                        {cidade.nome}
                      </Link>
                      <ul className="max-h-56 space-y-1 overflow-y-auto pr-1">
                        {bairros
                          .filter((b) => b.cidadeSlug === cidade.slug)
                          .map((b) => (
                            <li key={b.slug}>
                              <Link
                                to={`/${b.slug}`}
                                onClick={() => setAreasOpen(false)}
                                className="block rounded px-1.5 py-1 text-xs text-gray-600 hover:bg-orange-50 hover:text-orange-700 transition-colors"
                              >
                                {b.nome}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {menuItems.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium px-3 py-2 hover:text-orange-200 transition-colors ${
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
          <div className="lg:hidden border-t border-orange-800 py-4">
            <nav className="flex flex-col space-y-1">
              <Link
                to="/"
                onClick={handleMenuClick}
                className={`block px-3 py-2 text-base text-white hover:bg-orange-700 rounded transition-colors ${
                  isActive('/') ? 'bg-orange-700' : ''
                }`}
              >
                Início
              </Link>

              <button
                onClick={() => setMobileServicosOpen(!mobileServicosOpen)}
                className="flex items-center justify-between px-3 py-2 text-base text-white hover:bg-orange-700 rounded transition-colors"
              >
                Serviços
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicosOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicosOpen && (
                <div className="ml-4 flex flex-col space-y-1">
                  {servicos.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/${s.slug}`}
                      onClick={handleMenuClick}
                      className="block px-3 py-1.5 text-sm text-orange-100 hover:bg-orange-700 rounded transition-colors"
                    >
                      {s.nome}
                    </Link>
                  ))}
                  <Link
                    to="/servicos"
                    onClick={handleMenuClick}
                    className="block px-3 py-1.5 text-sm font-medium text-white hover:bg-orange-700 rounded transition-colors"
                  >
                    Ver todos os serviços
                  </Link>
                </div>
              )}

              <button
                onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                className="flex items-center justify-between px-3 py-2 text-base text-white hover:bg-orange-700 rounded transition-colors"
              >
                Áreas de Atendimento
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileAreasOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileAreasOpen && (
                <div className="ml-4 flex max-h-72 flex-col space-y-3 overflow-y-auto pr-1">
                  {cidades.map((cidade) => (
                    <div key={cidade.slug}>
                      <Link
                        to={`/${cidade.rota}`}
                        onClick={handleMenuClick}
                        className="block px-3 py-1 text-sm font-semibold text-white hover:underline"
                      >
                        {cidade.nome}
                      </Link>
                      <div className="ml-2 flex flex-wrap gap-x-2 gap-y-1 px-3 py-1">
                        {bairros
                          .filter((b) => b.cidadeSlug === cidade.slug)
                          .map((b) => (
                            <Link
                              key={b.slug}
                              to={`/${b.slug}`}
                              onClick={handleMenuClick}
                              className="text-xs text-orange-100 hover:text-white hover:underline"
                            >
                              {b.nome}
                            </Link>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {menuItems.slice(1).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleMenuClick}
                  className={`block px-3 py-2 text-base text-white hover:bg-orange-700 rounded transition-colors ${
                    isActive(item.path) ? 'bg-orange-700' : ''
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
