import { Phone, MessageCircle, Clock, Shield, Users, CheckCircle, Star, Wrench, Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

// Importando as imagens
import desentupimentoPiaImg from '../assets/images/desentupimento-pia.webp';
import desentupimentoVasoImg from '../assets/images/desentupimento-vaso.jpg';
import limpaFossaImg from '../assets/images/limpa-fossa.jpg';
import hidrojateamentoImg from "../assets/images/hidrojateamento-home-v2.jpeg";
import limpezaCaixaGorduraImg from '../assets/images/limpeza-caixa-gordura.jpg';
import desentupimentoEsgotoImg from '../assets/images/desentupimento-esgoto.jpg';
import desentupimentoRaloImg from '../assets/images/desentupimento-ralo-home-v2.jpeg';
import desentupimentoCanosImg from '../assets/images/desentupimento-canos.jpg';
import heroBackground from '../assets/images/hero-background-new.png';

// Importando as imagens do blog
import blogPrevencaoImg from '../assets/images/blog-prevencao.jpg';
import blogFossaImg from "../assets/images/blog-fossa-new.jpg";
import blogCaixaGorduraImg from "../assets/images/blog-caixa-gordura-new.jpg";

const Home = () => {
  const services = [
    {
      title: "Desentupimento de Pias",
      description: "Desentupimento profissional de pias de cozinha e banheiro. Utilizamos equipamentos especializados para remover gordura, restos de comida e outros resíduos.",
      image: desentupimentoPiaImg,
      features: ["Sem quebra", "Chegamos em 20 minutos", "Equipamentos modernos"]
    },
    {
      title: "Desentupimento de Vasos Sanitários", 
      description: "Desentupimento especializado de vasos sanitários com equipamentos apropriados. Resolvemos entupimentos simples e complexos com higiene total.",
      image: desentupimentoVasoImg,
      features: ["Higiene total", "Equipamentos sanitários", "Resultado imediato"]
    },
    {
      title: "Desentupimento de Ralos",
      description: "Limpeza e desentupimento de ralos de banheiro, cozinha e área de serviço. Removemos cabelos, sabão e detritos acumulados com eficiência.",
      image: desentupimentoRaloImg,
      features: ["Atendimento rápido", "Prevenção de odores", "Serviço duradouro"]
    },
    {
      title: "Desentupimento de Canos",
      description: "Desobstrução completa de tubulações com hidrojateamento de alta pressão. Removemos incrustações, raízes e qualquer tipo de entupimento.",
      image: desentupimentoCanosImg,
      features: ["Diagnóstico preciso", "Técnicas avançadas", "Limpeza completa"]
    },
    {
      title: "Limpeza de Fossa Séptica",
      description: "Limpeza e manutenção de fossas sépticas com caminhão limpa fossa equipado. Serviço completo com descarte ecológico adequado.",
      image: limpaFossaImg,
      features: ["Caminhão especializado", "Descarte ecológico", "Manutenção preventiva"]
    },
    {
      title: "Hidrojateamento de Alta Pressão",
      description: "Limpeza de tubulações com jato de água de alta pressão. Remove incrustações, gordura e resíduos de forma eficiente e ecológica.",
      image: hidrojateamentoImg,
      features: ["Alta pressão", "Ecologicamente correto", "Limpeza profunda"]
    },
    {
      title: "Limpeza de Caixa de Gordura",
      description: "Limpeza profissional de caixas de gordura residenciais e comerciais. Evita entupimentos e maus odores na sua cozinha.",
      image: limpezaCaixaGorduraImg,
      features: ["Atendimento rápido", "Prevenção de odores", "Serviço duradouro"]
    },
    {
      title: "Desentupimento de Esgoto",
      description: "Desobstrução de redes de esgoto predial e residencial. Utilizamos caminhões limpa fossa e equipamentos de hidrojateamento.",
      image: desentupimentoEsgotoImg,
      features: ["Equipamentos pesados", "Solução definitiva", "Atendimento 24h"]
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      rating: 5,
      comment: "Excelente atendimento! Resolveram o problema da minha pia em menos de 1 hora. Muito profissionais e preço justo.",
      service: "Desentupimento de Pia"
    },
    {
      name: "João Santos",
      rating: 5,
      comment: "Precisei do serviço de limpa fossa e fiquei muito satisfeito. Chegaram no horário combinado e fizeram um trabalho impecável.",
      service: "Limpa Fossa"
    },
    {
      name: "Ana Costa",
      rating: 5,
      comment: "Atendimento 24h realmente funciona! Tive problema no domingo à noite e eles vieram rapidamente. Recomendo!",
      service: "Desentupimento de Vaso"
    },
    {
      name: "Carlos Oliveira",
      rating: 5,
      comment: "Profissionais muito competentes. Explicaram todo o processo e deixaram tudo limpo. Preço honesto e serviço de qualidade.",
      service: "Hidrojateamento"
    },
    {
      name: "Fernanda Lima",
      rating: 5,
      comment: "Já é a segunda vez que contrato os serviços. Sempre pontuais, educados e resolvem o problema rapidamente.",
      service: "Limpeza Caixa de Gordura"
    },
    {
      name: "Roberto Mendes",
      rating: 5,
      comment: "Tive um problema sério de esgoto e eles resolveram com equipamentos modernos. Não sujaram nada e o preço foi justo.",
      service: "Desentupimento de Esgoto"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Clock className="w-8 h-8 text-orange-600" />,
      title: "Chegamos em 20 Minutos",
      description: "Atendimento rápido e eficiente. Chegamos ao local em até 20 minutos para resolver sua emergência."
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-orange-600" />,
      title: "20% Desconto no WhatsApp",
      description: "Ganhe 20% de desconto ao solicitar nossos serviços através do WhatsApp. Economia garantida!"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Equipe Especializada",
      description: "Profissionais treinados e experientes com equipamentos de última geração."
    },
    {
      icon: <Wrench className="w-8 h-8 text-orange-600" />,
      title: "Equipamentos Modernos",
      description: "Utilizamos tecnologia avançada para resolver problemas sem quebras desnecessárias."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Desentupidora <span className="text-orange-400">Solução</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Atendimento 24 horas • Chegamos em 20 minutos • 20% desconto no WhatsApp
            </p>
            <p className="text-lg mb-10 text-blue-200 max-w-2xl mx-auto">
              Especialistas em desentupimento e limpa fossa. Resolvemos seu problema com rapidez, qualidade e preço justo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5571997217825?text=Olá! Preciso de atendimento emergencial para desentupimento. Quero o desconto de 20%!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp - 20% Desconto</span>
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

      {/* Serviços Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas para todos os tipos de entupimentos e limpeza de fossas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-3 text-gray-800">
                    {service.title}
                  </CardTitle>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/5571997217825?text=Olá! Gostaria de solicitar o serviço de ${service.title}. Quero o desconto de 20%!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Solicitar via WhatsApp</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Por que escolher Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Por que escolher a Desentupidora Solução?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Somos referência em qualidade, rapidez e confiabilidade
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atendimento 24h Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Clock className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Atendimento 24 Horas
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Problemas de entupimento não escolhem hora para acontecer. Por isso, estamos disponíveis 24 horas por dia, 7 dias por semana, incluindo feriados.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Calendar className="w-8 h-8 text-white mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Todos os Dias</h3>
                <p className="text-orange-200">Segunda a Domingo</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-white mx-auto mb-2" />
                <h3 className="font-semibold mb-1">24 Horas</h3>
                <p className="text-orange-200">Atendimento ininterrupto</p>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 text-white mx-auto mb-2" />
                <h3 className="font-semibold mb-1">Chegamos em 20 min</h3>
                <p className="text-orange-200">Atendimento rápido</p>
              </div>
            </div>
            <a
              href="tel:71997217825"
              className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center space-x-2 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Ligue Agora: (71) 9 9721-7825</span>
            </a>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Centenas de clientes satisfeitos confiam em nossos serviços
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <User className="w-10 h-10 text-gray-400 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.service}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Dicas e Informações
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Aprenda como prevenir entupimentos e manter suas tubulações sempre funcionando
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <img 
                  src={desentupimentoPiaImg} 
                  alt="Como Prevenir Entupimentos"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Como Prevenir Entupimentos
                </h3>
                <p className="text-gray-600 mb-4">
                  Dicas simples e eficazes para evitar entupimentos em pias, ralos e vasos sanitários.
                </p>
                <Link 
                  to="/blog/como-prevenir-entupimentos"
                  className="text-orange-600 hover:text-orange-800 font-medium inline-flex items-center"
                >
                  Ler mais <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <img 
                  src={blogFossaImg} 
                  alt="Quando Limpar a Fossa Séptica"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Quando Limpar a Fossa Séptica
                </h3>
                <p className="text-gray-600 mb-4">
                  Saiba identificar os sinais de que sua fossa precisa de limpeza e manutenção.
                </p>
                <Link 
                  to="/blog/quando-limpar-fossa-septica"
                  className="text-orange-600 hover:text-orange-800 font-medium inline-flex items-center"
                >
                  Ler mais <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <img 
                  src={blogCaixaGorduraImg} 
                  alt="Cuidados com a Caixa de Gordura"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Cuidados com a Caixa de Gordura
                </h3>
                <p className="text-gray-600 mb-4">
                  Aprenda como manter sua caixa de gordura funcionando corretamente.
                </p>
                <Link 
                  to="/blog/cuidados-caixa-gordura"
                  className="text-orange-600 hover:text-orange-800 font-medium inline-flex items-center"
                >
                  Ler mais <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
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
                href="https://wa.me/5571997217825?text=Olá! Preciso de atendimento emergencial. Quero o desconto de 20%!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp - 20% Desconto</span>
              </a>
              <a
                href="tel:71997217825"
                className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
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

export default Home;

