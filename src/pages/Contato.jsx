import { Phone, MessageCircle, Clock, MapPin, Mail, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contato = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: "Telefone",
      info: "(71) 9 9721-7825",
      description: "Ligue diretamente para atendimento imediato",
      action: "tel:71997217825",
      buttonText: "Ligar Agora"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-600" />,
      title: "WhatsApp",
      info: "(71) 9 9721-7825",
      description: "Converse conosco pelo WhatsApp",
      action: "https://wa.me/5571997217825?text=Olá! Gostaria de solicitar um orçamento.",
      buttonText: "Abrir WhatsApp"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-600" />,
      title: "Horário de Atendimento",
      info: "24 horas por dia",
      description: "Todos os dias da semana, incluindo feriados",
      action: null,
      buttonText: null
    }
  ];

  const serviceAreas = [
    "Salvador",
    "Lauro de Freitas", 
    "Camaçari",
    "Simões Filho",
    "Candeias",
    "Dias d'Ávila",
    "Madre de Deus",
    "São Francisco do Conde"
  ];

  const emergencySteps = [
    {
      step: "1",
      title: "Entre em Contato",
      description: "Ligue ou mande mensagem descrevendo o problema"
    },
    {
      step: "2", 
      title: "Diagnóstico Rápido",
      description: "Nossa equipe faz o diagnóstico e passa o orçamento"
    },
    {
      step: "3",
      title: "Atendimento Imediato",
      description: "Chegamos ao local em até 30 minutos"
    },
    {
      step: "4",
      title: "Problema Resolvido",
      description: "Resolvemos com garantia de 90 dias"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Estamos prontos para resolver seu problema de desentupimento
            </p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Atendimento 24 horas, 7 dias por semana. Entre em contato agora mesmo e receba atendimento imediato!
            </p>
          </div>
        </div>
      </section>

      {/* Métodos de Contato */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Como Entrar em Contato
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Escolha a forma mais conveniente para você
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">
                    {method.info}
                  </p>
                  <p className="text-gray-600 mb-6">
                    {method.description}
                  </p>
                  {method.action && (
                    <a
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : undefined}
                      rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                        method.title === 'WhatsApp' 
                          ? 'bg-green-600 hover:bg-green-700 text-white'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      {method.buttonText}
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Atendimento de Emergência */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Atendimento de Emergência
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Como funciona nosso atendimento emergencial 24 horas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {emergencySteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5571997217825?text=Olá! Tenho uma emergência e preciso de atendimento imediato."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>EMERGÊNCIA - WhatsApp</span>
              </a>
              <a
                href="tel:71997217825"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>EMERGÊNCIA - Ligar</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atendimento */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Áreas de Atendimento
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Atendemos em toda região metropolitana de Salvador
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-800 font-medium">{area}</span>
                </div>
              ))}
            </div>
            
            <p className="text-gray-600 mb-6">
              Não encontrou sua cidade? Entre em contato conosco para verificar disponibilidade.
            </p>
            
            <a
              href="https://wa.me/5571997217825?text=Olá! Gostaria de saber se vocês atendem na minha região."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Consultar Atendimento</span>
            </a>
          </div>
        </div>
      </section>

      {/* Informações Adicionais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-6 h-6 text-blue-600 mr-2" />
                    Horários de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Segunda a Domingo:</span>
                      <span>24 horas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Feriados:</span>
                      <span>24 horas</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Emergências:</span>
                      <span className="text-red-600 font-semibold">24 horas</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Importante:</strong> Atendemos emergências 24 horas sem taxa adicional por horário.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Send className="w-6 h-6 text-blue-600 mr-2" />
                    Formas de Pagamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span>Dinheiro</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span>Cartão de Débito</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span>Cartão de Crédito</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span>PIX</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span>Transferência Bancária</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Facilidade:</strong> Parcelamos no cartão de crédito para sua comodidade.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Não Perca Tempo!
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Entre em contato agora mesmo e resolva seu problema rapidamente
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5571997217825?text=Olá! Preciso de atendimento para desentupimento."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:71997217825"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(71) 9 9721-7825</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;

