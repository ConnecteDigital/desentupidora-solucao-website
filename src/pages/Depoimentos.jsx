import { Star, Quote, CheckCircle, Phone, MessageCircle, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Depoimentos = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      location: "Salvador - BA",
      service: "Desentupimento de Vaso Sanitário",
      rating: 5,
      date: "Janeiro 2025",
      text: "Excelente atendimento! O técnico chegou em menos de 40 minutos, mesmo sendo sábado à noite. Resolveu o problema rapidamente e o preço foi muito justo. Super recomendo a Desentupidora Solução!",
      image: "👩‍💼"
    },
    {
      name: "João Silva",
      location: "Lauro de Freitas - BA", 
      service: "Desentupimento de Pia",
      rating: 5,
      date: "Dezembro 2024",
      text: "Minha pia da cozinha estava completamente entupida. A equipe foi muito profissional, explicou todo o processo e deixou tudo limpinho. Serviço de qualidade com garantia!",
      image: "👨‍🔧"
    },
    {
      name: "Ana Costa",
      location: "Camaçari - BA",
      service: "Hidrojateamento de Esgoto",
      rating: 5,
      date: "Novembro 2024", 
      text: "Problema complexo no esgoto do prédio foi resolvido em uma manhã. Equipamentos modernos e técnicos muito experientes. Já indiquei para vários vizinhos!",
      image: "👩‍💻"
    },
    {
      name: "Carlos Oliveira",
      location: "Salvador - BA",
      service: "Limpeza de Caixa de Gordura",
      rating: 5,
      date: "Janeiro 2025",
      text: "Atendimento 24h funcionou perfeitamente! Liguei às 2h da madrugada com problema na caixa de gordura e às 3h já estava resolvido. Preço honesto e serviço impecável.",
      image: "👨‍💼"
    },
    {
      name: "Fernanda Lima",
      location: "Lauro de Freitas - BA",
      service: "Limpa Fossa",
      rating: 5,
      date: "Dezembro 2024",
      text: "Serviço de limpeza da fossa foi executado com total profissionalismo. Equipe pontual, educada e deixou tudo funcionando perfeitamente. Empresa de confiança!",
      image: "👩‍🦰"
    },
    {
      name: "Roberto Mendes",
      location: "Camaçari - BA",
      service: "Desentupimento de Esgoto",
      rating: 5,
      date: "Novembro 2024",
      text: "Tive um problema sério de esgoto e eles resolveram com equipamentos modernos. Não sujaram nada da minha casa e o preço foi muito justo. Recomendo!",
      image: "👨‍🔧"
    },
    {
      name: "Juliana Rocha",
      location: "Salvador - BA",
      service: "Hidrojateamento",
      rating: 5,
      date: "Outubro 2024",
      text: "Precisei do hidrojateamento para limpeza das tubulações e fiquei impressionada com a eficiência. Trabalho limpo, rápido e com garantia. Voltarei a contratar!",
      image: "👩‍💼"
    },
    {
      name: "Pedro Almeida",
      location: "Lauro de Freitas - BA",
      service: "Desentupimento de Pia",
      rating: 5,
      date: "Setembro 2024",
      text: "Atendimento excelente desde o primeiro contato. Técnico muito educado e competente. Resolveu o entupimento sem quebrar nada. Preço justo e serviço de qualidade!",
      image: "👨‍💻"
    },
    {
      name: "Luciana Barbosa",
      location: "Camaçari - BA",
      service: "Limpeza de Caixa de Gordura",
      rating: 5,
      date: "Agosto 2024",
      text: "Já é a terceira vez que contrato os serviços da Desentupidora Solução. Sempre pontuais, educados e fazem um trabalho impecável. Empresa séria e confiável!",
      image: "👩‍🔬"
    },
    {
      name: "Marcos Vieira",
      location: "Salvador - BA",
      service: "Desentupimento de Vaso Sanitário",
      rating: 5,
      date: "Julho 2024",
      text: "Problema no vaso sanitário foi resolvido rapidamente. Técnico muito profissional, explicou tudo e ainda deu dicas para evitar novos entupimentos. Recomendo!",
      image: "👨‍⚕️"
    },
    {
      name: "Carla Nascimento",
      location: "Lauro de Freitas - BA",
      service: "Limpa Fossa",
      rating: 5,
      date: "Junho 2024",
      text: "Serviço de limpa fossa executado com perfeição. Caminhão moderno, equipe experiente e descarte ecológico. Cumpriram todos os prazos combinados!",
      image: "👩‍🎓"
    },
    {
      name: "Anderson Silva",
      location: "Camaçari - BA",
      service: "Hidrojateamento de Alta Pressão",
      rating: 5,
      date: "Maio 2024",
      text: "Hidrojateamento resolveu completamente o problema das tubulações do meu estabelecimento. Trabalho profissional, equipamentos modernos e preço competitivo!",
      image: "👨‍🍳"
    }
  ];

  const stats = [
    { number: "500+", label: "Clientes Atendidos" },
    { number: "98%", label: "Satisfação" },
    { number: "24h", label: "Atendimento" },
    { number: "90", label: "Dias de Garantia" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Depoimentos dos Nossos Clientes
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Veja o que nossos clientes falam sobre nossos serviços
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

      {/* Depoimentos Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 relative">
                <CardContent className="p-6">
                  <div className="absolute top-4 right-4">
                    <Quote className="w-8 h-8 text-blue-200" />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">
                      {testimonial.image}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.location}
                      </p>
                      <p className="text-xs text-blue-600 font-medium">
                        {testimonial.service}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {testimonial.date}
                    </span>
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Avaliação Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Avaliação dos Clientes
            </h2>
            <div className="flex justify-center items-center mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-800 ml-4">4.9/5</span>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              Baseado em mais de 500 avaliações de clientes satisfeitos
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <p className="text-gray-600">Clientes Satisfeitos</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <p className="text-gray-600">Recomendariam</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">92%</div>
                <p className="text-gray-600">Voltariam a Contratar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Seja o Próximo Cliente Satisfeito!
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Junte-se aos centenas de clientes que confiam em nossos serviços
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5571997217825?text=Olá! Vi os depoimentos no site e gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Solicitar Orçamento</span>
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

export default Depoimentos;

