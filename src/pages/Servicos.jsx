import { MessageCircle, CheckCircle, Clock, Shield, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Importando as imagens
import desentupimentoPiaImg from '../assets/images/desentupimento-pia.webp';
import desentupimentoVasoImg from '../assets/images/desentupimento-vaso.jpg';
import limpaFossaImg from '../assets/images/limpa-fossa-new.png';
import hidrojateamentoImg from "../assets/images/hidrojateamento-new.jpg";
import limpezaCaixaGorduraImg from '../assets/images/limpeza-caixa-gordura.jpg';
import desentupimentoEsgotoImg from '../assets/images/desentupimento-esgoto.jpg';
import desentupimentoRaloImg from '../assets/images/desentupimento-ralo-new.jpg';
import desentupimentoCanosImg from '../assets/images/desentupimento-canos.jpg';

const Servicos = () => {
  const services = [
    {
      title: "Desentupimento de Pias",
      description: "Desentupimento profissional de pias de cozinha e banheiro com equipamentos especializados. Removemos gordura, restos de comida e outros resíduos sem quebras desnecessárias.",
      image: desentupimentoPiaImg,
      features: [
        "Sem quebra de pisos ou azulejos",
        "Equipamentos modernos e eficientes", 
        "Chegamos em 20 minutos",
        "Limpeza completa do local",
        "Atendimento 24 horas"
      ],
      details: "Utilizamos equipamentos de última geração para desentupir pias de forma rápida e eficiente. Nossa equipe especializada identifica a causa do entupimento e aplica a técnica mais adequada para cada situação."
    },
    {
      title: "Desentupimento de Vasos Sanitários",
      description: "Desentupimento especializado de vasos sanitários com total higiene e segurança. Resolvemos entupimentos simples e complexos com equipamentos apropriados.",
      image: desentupimentoVasoImg,
      features: [
        "Higiene total durante o serviço",
        "Equipamentos sanitários específicos",
        "Resultado imediato",
        "Desinfecção completa",
        "Profissionais experientes"
      ],
      details: "Nossos profissionais são treinados para lidar com entupimentos de vasos sanitários mantendo os mais altos padrões de higiene e segurança."
    },
    {
      title: "Desentupimento de Ralos",
      description: "Limpeza e desentupimento de ralos de banheiro, cozinha e área de serviço. Removemos cabelos, sabão e detritos acumulados com máxima eficiência.",
      image: desentupimentoRaloImg,
      features: [
        "Remoção de cabelos e detritos",
        "Prevenção de maus odores",
        "Limpeza profunda",
        "Atendimento rápido",
        "Serviço duradouro"
      ],
      details: "Especializados na limpeza de ralos entupidos por cabelos, sabão e outros resíduos. Utilizamos técnicas específicas para cada tipo de ralo."
    },
    {
      title: "Desentupimento de Canos",
      description: "Desobstrução completa de tubulações e canos com hidrojateamento de alta pressão. Removemos incrustações, raízes e qualquer tipo de obstrução.",
      image: desentupimentoCanosImg,
      features: [
        "Hidrojateamento de alta pressão",
        "Diagnóstico preciso com câmera",
        "Remoção de raízes e incrustações",
        "Técnicas avançadas",
        "Limpeza completa da tubulação"
      ],
      details: "Utilizamos equipamentos de hidrojateamento e câmeras para diagnosticar e resolver problemas em tubulações de forma definitiva."
    },
    {
      title: "Limpeza de Fossa Séptica",
      description: "Limpeza e manutenção completa de fossas sépticas com caminhão limpa fossa equipado. Serviço completo com descarte ecológico adequado.",
      image: limpaFossaImg,
      features: [
        "Caminhão limpa fossa especializado",
        "Descarte ecológico adequado",
        "Manutenção preventiva",
        "Inspeção completa",
        "Relatório de serviço"
      ],
      details: "Realizamos limpeza completa de fossas sépticas seguindo todas as normas ambientais. Nosso caminhão limpa fossa possui equipamentos modernos para um serviço eficiente."
    },
    {
      title: "Hidrojateamento de Alta Pressão",
      description: "Limpeza profunda de tubulações com jato de água de alta pressão. Remove incrustações, gordura e resíduos de forma eficiente e ecológica.",
      image: hidrojateamentoImg,
      features: [
        "Jato de água de alta pressão",
        "Ecologicamente correto",
        "Limpeza profunda das tubulações",
        "Remove incrustações antigas",
        "Não utiliza produtos químicos"
      ],
      details: "O hidrojateamento é a técnica mais eficaz para limpeza de tubulações, utilizando apenas água em alta pressão para remover qualquer tipo de obstrução."
    },
    {
      title: "Limpeza de Caixa de Gordura",
      description: "Limpeza profissional de caixas de gordura residenciais e comerciais. Evita entupimentos e elimina maus odores na sua cozinha.",
      image: limpezaCaixaGorduraImg,
      features: [
        "Remoção completa da gordura",
        "Prevenção de entupimentos",
        "Eliminação de maus odores",
        "Manutenção preventiva",
        "Atendimento residencial e comercial"
      ],
      details: "A limpeza regular da caixa de gordura é essencial para evitar entupimentos na rede de esgoto. Realizamos o serviço com equipamentos adequados."
    },
    {
      title: "Desentupimento de Esgoto",
      description: "Desobstrução de redes de esgoto predial e residencial. Utilizamos caminhões limpa fossa e equipamentos de hidrojateamento para soluções definitivas.",
      image: desentupimentoEsgotoImg,
      features: [
        "Equipamentos pesados especializados",
        "Solução definitiva para o problema",
        "Atendimento 24 horas",
        "Diagnóstico com câmera",
        "Limpeza completa da rede"
      ],
      details: "Para problemas mais complexos de esgoto, utilizamos equipamentos pesados e técnicas avançadas para garantir uma solução definitiva."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl text-orange-100 mb-8">
              Soluções completas para todos os tipos de entupimentos e limpeza de fossas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5571996904202?text=Olá! Gostaria de solicitar um orçamento. Quero o desconto de 20%!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Solicitar Orçamento - 20% Desconto</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-8">
                  <CardTitle className="text-2xl mb-4 text-gray-800">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Características do serviço:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {service.details}
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/5571996904202?text=Olá! Gostaria de solicitar o serviço de ${service.title}. Quero o desconto de 20%!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Solicitar via WhatsApp</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Por que escolher nossos serviços?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Qualidade, rapidez e confiabilidade em todos os nossos atendimentos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Chegamos em 20 Minutos
              </h3>
              <p className="text-gray-600">
                Atendimento emergencial rápido. Chegamos ao local em até 20 minutos para resolver sua urgência.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Equipamentos Modernos
              </h3>
              <p className="text-gray-600">
                Utilizamos tecnologia de ponta para resolver problemas sem quebras desnecessárias.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                20% Desconto no WhatsApp
              </h3>
              <p className="text-gray-600">
                Ganhe desconto especial ao solicitar nossos serviços através do WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Precisa de Atendimento Emergencial?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Entre em contato agora mesmo! Atendemos 24 horas em toda região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5571996904202?text=Olá! Preciso de atendimento emergencial. Quero o desconto de 20%!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp - 20% Desconto</span>
              </a>
              <a
                href="tel:71996904202"
                className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <span>(71) 9 9690-4202</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicos;

