import { Clock, Phone, MessageCircle, Calendar, MapPin, Shield, Users, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Atendimento24h = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-orange-600" />,
      title: "24 Horas por Dia",
      description: "Atendimento ininterrupto todos os dias da semana, incluindo feriados e madrugadas."
    },
    {
      icon: <Calendar className="w-8 h-8 text-orange-600" />,
      title: "7 Dias por Semana",
      description: "Segunda a domingo, sempre prontos para atender suas emergências."
    },
    {
      icon: <Phone className="w-8 h-8 text-orange-600" />,
      title: "Chegamos em 20 Minutos",
      description: "Tempo de resposta rápido para resolver sua emergência o mais rápido possível."
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      title: "Equipe Especializada",
      description: "Profissionais treinados e experientes disponíveis a qualquer hora."
    }
  ];

  const emergencyTypes = [
    {
      title: "Entupimento de Vaso Sanitário",
      description: "Problema urgente que não pode esperar até o dia seguinte.",
      urgency: "Alta"
    },
    {
      title: "Transbordamento de Esgoto",
      description: "Situação de emergência que requer atendimento imediato.",
      urgency: "Crítica"
    },
    {
      title: "Entupimento de Pia Principal",
      description: "Quando compromete o funcionamento da cozinha ou banheiro.",
      urgency: "Alta"
    },
    {
      title: "Problemas na Fossa Séptica",
      description: "Transbordamento ou mau funcionamento da fossa.",
      urgency: "Alta"
    },
    {
      title: "Entupimento de Ralo",
      description: "Quando causa alagamento ou mau cheiro intenso.",
      urgency: "Média"
    },
    {
      title: "Problemas na Caixa de Gordura",
      description: "Transbordamento ou entupimento que afeta o esgoto.",
      urgency: "Média"
    }
  ];

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'Crítica': return 'text-red-600 bg-red-100';
      case 'Alta': return 'text-orange-600 bg-orange-100';
      case 'Média': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Clock className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Atendimento 24 Horas
            </h1>
            <p className="text-xl text-orange-100 mb-8">
              Problemas de entupimento não escolhem hora para acontecer. Estamos sempre prontos para ajudar!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://api.whatsapp.com/send?phone=5571996904202&text=Olá! Preciso de atendimento emergencial 24h. Quero o desconto de 20%!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Emergencial - 20% Desconto</span>
              </a>
              <a
                href="tel:71996904202"
                className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(71) 9 9721-7825</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Por que escolher nosso atendimento 24h?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estamos preparados para atender suas emergências a qualquer hora do dia ou da noite
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Tipos de Emergências que Atendemos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Identificamos e priorizamos diferentes tipos de emergências para oferecer o melhor atendimento
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyTypes.map((emergency, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {emergency.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(emergency.urgency)}`}>
                      {emergency.urgency}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {emergency.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Como Funciona o Atendimento Emergencial
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Processo rápido e eficiente para resolver sua emergência
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Entre em Contato
              </h3>
              <p className="text-gray-600 text-sm">
                Ligue ou mande WhatsApp descrevendo o problema
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Avaliação Rápida
              </h3>
              <p className="text-gray-600 text-sm">
                Nossa equipe avalia a urgência e prioridade do atendimento
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Deslocamento Rápido
              </h3>
              <p className="text-gray-600 text-sm">
                Chegamos ao local em até 20 minutos com equipamentos
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Solução Imediata
              </h3>
              <p className="text-gray-600 text-sm">
                Resolvemos o problema rapidamente e com qualidade
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Precisa de Atendimento Agora?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Não espere o problema piorar! Entre em contato agora mesmo.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <Phone className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="text-xl font-semibold mb-2">Ligação Direta</h3>
                <p className="text-orange-100 mb-3">Fale diretamente com nossa central</p>
                <a
                  href="tel:71996904202"
                  className="text-white font-semibold text-lg hover:text-orange-200 transition-colors"
                >
                  (71) 9 9721-7825
                </a>
              </div>
              
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <MessageCircle className="w-8 h-8 text-white mx-auto mb-3" />
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-orange-100 mb-3">Ganhe 20% de desconto</p>
                <a
                  href="https://api.whatsapp.com/send?phone=5571996904202&text=Olá! Preciso de atendimento emergencial 24h. Quero o desconto de 20%!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-orange-200 text-sm">
                ⏰ Atendimento 24 horas • 📅 7 dias por semana • 🚀 Chegamos em 20 minutos
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Atendimento24h;

