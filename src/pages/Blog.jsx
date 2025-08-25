import { Calendar, User, ArrowRight, Clock, MessageCircle, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

// Importando as imagens dos posts
import blogPrevencaoImg from '../assets/images/blog-prevencao.jpg';
import blogFossaImg from '../assets/images/blog-fossa.jpg';
import blogCaixaGorduraImg from '../assets/images/blog-caixa-gordura.jpg';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      slug: 'como-prevenir-entupimentos',
      title: 'Como Prevenir Entupimentos na Sua Casa',
      excerpt: 'Descubra dicas simples e eficazes para evitar entupimentos em pias, ralos e vasos sanitários. Prevenção é sempre o melhor remédio!',
      content: 'Entupimentos são um dos problemas mais comuns e inconvenientes que podem ocorrer em qualquer residência. Felizmente, a maioria deles pode ser evitada com algumas práticas simples de prevenção...',
      image: blogPrevencaoImg,
      author: 'Desentupidora Solução',
      date: '15 de Janeiro, 2025',
      readTime: '5 min de leitura',
      category: 'Prevenção',
      tags: ['prevenção', 'dicas', 'manutenção', 'casa']
    },
    {
      id: 2,
      slug: 'quando-limpar-fossa-septica',
      title: 'Quando Fazer a Limpeza da Fossa Séptica',
      excerpt: 'Saiba identificar os sinais de que sua fossa precisa de limpeza e entenda a importância da manutenção regular para evitar problemas.',
      content: 'A fossa séptica é um sistema fundamental para o tratamento de esgoto em residências que não possuem acesso à rede pública de coleta...',
      image: blogFossaImg,
      author: 'Desentupidora Solução',
      date: '10 de Janeiro, 2025',
      readTime: '7 min de leitura',
      category: 'Manutenção',
      tags: ['fossa séptica', 'limpeza', 'manutenção', 'esgoto']
    },
    {
      id: 3,
      slug: 'cuidados-caixa-gordura',
      title: 'Cuidados com a Caixa de Gordura',
      excerpt: 'Aprenda como manter sua caixa de gordura funcionando corretamente e evite entupimentos e maus odores na sua cozinha.',
      content: 'A caixa de gordura é um componente essencial do sistema hidráulico de qualquer cozinha, seja residencial ou comercial...',
      image: blogCaixaGorduraImg,
      author: 'Desentupidora Solução',
      date: '5 de Janeiro, 2025',
      readTime: '6 min de leitura',
      category: 'Manutenção',
      tags: ['caixa de gordura', 'limpeza', 'cozinha', 'prevenção']
    }
  ];

  const categories = ['Todos', 'Prevenção', 'Manutenção', 'Dicas'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog da Desentupidora Solução
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Dicas, informações e guias para manter suas tubulações sempre funcionando
            </p>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Aprenda com nossos especialistas como prevenir entupimentos, fazer manutenções e cuidar do sistema hidráulico da sua casa ou empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <CardHeader className="p-0">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl mb-3 text-gray-800 line-clamp-2">
                    {post.title}
                  </CardTitle>
                  
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Ler artigo completo
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Receba Dicas Exclusivas
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Cadastre-se para receber dicas de prevenção e manutenção diretamente no seu WhatsApp
            </p>
            <a
              href="https://wa.me/5571996904202?text=Olá! Gostaria de receber dicas de prevenção e manutenção no WhatsApp."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold inline-flex items-center space-x-2 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Receber Dicas no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Mais Informações Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Temas Mais Procurados
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">Prevenção de Entupimentos</h3>
                <p className="text-gray-600 text-sm">Dicas para evitar problemas antes que aconteçam</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">Manutenção de Fossas</h3>
                <p className="text-gray-600 text-sm">Como e quando fazer a limpeza adequada</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">Cuidados com Tubulações</h3>
                <p className="text-gray-600 text-sm">Mantenha seu sistema hidráulico em perfeito estado</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">Emergências</h3>
                <p className="text-gray-600 text-sm">O que fazer em situações de emergência</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">Equipamentos</h3>
                <p className="text-gray-600 text-sm">Conheça as tecnologias que utilizamos</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">Sustentabilidade</h3>
                <p className="text-gray-600 text-sm">Práticas ecológicas em nossos serviços</p>
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
              Precisa de Ajuda Profissional?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Mesmo seguindo todas as dicas, às vezes é necessário chamar os especialistas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://api.whatsapp.com/send?phone=5571996904202?text=Olá! Li os artigos do blog e preciso de ajuda profissional."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Fale Conosco</span>
              </a>
              <a
                href="tel:71996904202"
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

export default Blog;

