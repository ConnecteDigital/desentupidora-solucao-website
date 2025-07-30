import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';

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
              <li><Link to="/servicos" className="hover:text-white transition-colors">• Desentupimento de Pias</Link></li>
              <li><Link to="/servicos" className="hover:text-white transition-colors">• Desentupimento de Vasos Sanitários</Link></li>
              <li><Link to="/servicos" className="hover:text-white transition-colors">• Limpeza de Fossa Séptica</Link></li>
              <li><Link to="/servicos" className="hover:text-white transition-colors">• Hidrojateamento de Alta Pressão</Link></li>
              <li><Link to="/servicos" className="hover:text-white transition-colors">• Limpeza de Caixa de Gordura</Link></li>
              <li><Link to="/servicos" className="hover:text-white transition-colors">• Desentupimento de Esgoto</Link></li>
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

