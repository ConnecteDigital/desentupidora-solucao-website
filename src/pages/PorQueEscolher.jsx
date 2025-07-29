import { Shield, Clock, Users, Wrench, Star, CheckCircle, Award, Phone, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PorQueEscolher = () => {
  const reasons = [
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "Atendimento 24 Horas",
      description: "Disponível todos os dias da semana, incluindo feriados e madrugadas. Emergências não esperam!",
      details: [
        "Atendimento ininterrupto",
        "Resposta em até 30 minutos",
        "Equipe de plantão 24h",
        "Sem taxa adicional por horário"
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Garantia de 90 Dias",
      description: "Todos os nossos serviços possuem garantia. Sua tranquilidade é nossa prioridade.",
      details: [
        "Garantia de 90 dias",
        "Sem custos adicionais",
        "Atendimento pós-serviço",
        "Compromisso com qualidade"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Equipe Especializada",
      description: "Profissionais treinados e experientes com equipamentos de última geração.",
      details: [
        "Técnicos certificados",
        "Treinamento constante",
        "Experiência comprovada",
        "Atendimento profissional"
      ]
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: "Equipamentos Modernos",
      description: "Utilizamos tecnologia avançada para resolver problemas sem quebras desnecessárias.",
      details: [
        "Tecnologia de ponta",
        "Equipamentos importados",
        "Manutenção preventiva",
        "Soluções sem quebra"
      ]
    },
    {
      icon: <Star className="w-12 h-12 text-blue-600" />,
      title: "Excelência no Atendimento",
      description: "Mais de 500 clientes satisfeitos e avaliação 4.9/5 em satisfação.",
      details: [
        "98% de satisfação",
        "Atendimento personalizado",
        "Comunicação clara",
        "Pontualidade garantida"
      ]
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "Preços Justos",
      description: "Orçamento transparente e preços competitivos sem surpresas.",
      details: [
        "Orçamento gratuito",
        "Preços transparentes",
        "Sem taxas ocultas",
        "Melhor custo-benefício"
      ]
    }
  ];

  const stats = [
    { number: "500+", label: "Clientes Atendidos" },
    { number: "98%", label: "Satisfação" },
    { number: "24h", label: "Atendimento" },
    { number: "90", label: "Dias de Garantia" },
    { number: "5", label: "Anos de Experiência" },
    { number: "100%", label: "Profissionalismo" }
  ];

  const certifications = [
    {
      title: "Licença Ambiental",
      description: "Descarte ecológico conforme normas ambientais"
    },
    {
      title: "Técnicos Certificados",
      description: "Profissionais com certificação em desentupimento"
    },
    {
      title: "Equipamentos Aprovados",
      description: "Equipamentos certificados pelos órgãos competentes"
    },
    {
      title: "Seguro de Responsabilidade",
      description: "Cobertura total para eventuais danos"
    }
  ];

  const testimonialHighlights = [
    {
      text: "Atendimento excepcional! Resolveram meu problema em menos de 1 hora.",
      author: "Maria Santos"
    },
    {
      text: "Preço justo e serviço de qualidade. Recomendo para todos!",
      author: "João Silva"
    },
    {
      text: "Equipe muito profissional e pontual. Já contratei várias vezes.",
      author: "Ana Costa"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Por que escolher a Desentupidora Solução?
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Somos referência em qualidade, rapidez e confiabilidade na região
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-200">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principais Motivos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              6 Motivos Para Nos Escolher
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubra por que somos a melhor escolha para seus problemas de desentupimento
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {reason.description}
                  </p>
                  <ul className="space-y-2">
                    {reason.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificações */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Certificações e Licenças
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trabalhamos dentro das normas legais e ambientais
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Trabalho */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Nosso Processo de Trabalho
              </h2>
              <p className="text-lg text-gray-600">
                Metodologia comprovada para resolver seu problema com eficiência
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Contato
                </h3>
                <p className="text-gray-600 text-sm">
                  Você entra em contato conosco
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Diagnóstico
                </h3>
                <p className="text-gray-600 text-sm">
                  Identificamos o problema
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Orçamento
                </h3>
                <p className="text-gray-600 text-sm">
                  Apresentamos o orçamento
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Execução
                </h3>
                <p className="text-gray-600 text-sm">
                  Realizamos o serviço
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  5
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Garantia
                </h3>
                <p className="text-gray-600 text-sm">
                  Oferecemos 90 dias de garantia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Destacados */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Centenas de clientes satisfeitos comprovam nossa qualidade
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialHighlights.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-gray-800">
                    {testimonial.author}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparação com Concorrentes */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Desentupidora Solução vs Concorrentes
              </h2>
              <p className="text-lg text-gray-600">
                Veja por que somos a melhor opção do mercado
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Características</th>
                      <th className="px-6 py-4 text-center">Desentupidora Solução</th>
                      <th className="px-6 py-4 text-center">Concorrentes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-6 py-4 font-medium">Atendimento 24h</td>
                      <td className="px-6 py-4 text-center">
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center text-gray-400">Limitado</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-6 py-4 font-medium">Garantia de 90 dias</td>
                      <td className="px-6 py-4 text-center">
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center text-gray-400">30 dias</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 font-medium">Equipamentos modernos</td>
                      <td className="px-6 py-4 text-center">
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center text-gray-400">Básicos</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-6 py-4 font-medium">Orçamento gratuito</td>
                      <td className="px-6 py-4 text-center">
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center text-gray-400">Cobram taxa</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-6 py-4 font-medium">Técnicos certificados</td>
                      <td className="px-6 py-4 text-center">
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                      </td>
                      <td className="px-6 py-4 text-center text-gray-400">Nem sempre</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Convencido? Faça a Escolha Certa!
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Junte-se aos centenas de clientes satisfeitos que escolheram a Desentupidora Solução
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5571997217825?text=Olá! Quero contratar os serviços da Desentupidora Solução."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contratar Agora</span>
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

export default PorQueEscolher;

