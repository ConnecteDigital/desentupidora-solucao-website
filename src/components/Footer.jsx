import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';
import { servicos } from '../data/servicos';
import { cidades, bairros } from '../data/bairros';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Informações da Empresa */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logoImg}
                alt="Desentupidora Solução"
                className="w-10 h-10 rounded-full bg-white p-1"
              />
              <h3 className="text-lg font-bold">Desentupidora Solução</h3>
            </div>
            <p className="text-blue-200 mb-4">
              Desentupidora profissional especializada em serviços de desentupimento e limpa fossa. Atendimento 24 horas, 7 dias por semana.
            </p>
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="w-4 h-4 text-blue-300" />
              <span className="text-sm">24 horas por dia, 7 dias por semana</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-blue-300" />
              <span className="text-sm">Salvador, Lauro de Freitas e Camaçari</span>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2 text-blue-200">
              {servicos.map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} className="hover:text-white transition-colors">• {s.nome}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Entre em Contato</h4>
            <div className="space-y-3">
              <a
                href="tel:71996904202"
                className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(71) 9 9690-4202</span>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5571996904202&text=Olá! Vim através do site da Desentupidora Solução e preciso de atendimento."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: (71) 9 9721-7825</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bairros Atendidos */}
        <div className="border-t border-blue-800 mt-8 pt-6">
          <h4 className="text-lg font-semibold mb-4">Bairros Atendidos</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {cidades.map((cidade) => (
              <div key={cidade.slug}>
                <Link
                  to={`/${cidade.rota}`}
                  className="block text-sm font-semibold text-orange-300 mb-2 hover:text-orange-200 transition-colors"
                >
                  {cidade.nome}
                </Link>
                <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-blue-200">
                  {bairros
                    .filter((b) => b.cidadeSlug === cidade.slug)
                    .map((b) => (
                      <li key={b.slug}>
                        <Link to={`/${b.slug}`} className="hover:text-white transition-colors">
                          {b.nome}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-6 text-center">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2024 Desentupidora Solução. Todos os direitos reservados.</p>
            <p className="mt-1">
              Site desenvolvido por{' '}
              <a 
                href="https://connectedigital.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 transition-colors"
              >
                Connect Digital
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

