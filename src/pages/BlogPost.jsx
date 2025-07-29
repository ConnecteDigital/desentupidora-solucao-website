import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, MessageCircle, Phone, Share2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Importando as imagens dos posts
import blogPrevencaoImg from '../assets/images/blog-prevencao.jpg';
import blogFossaImg from '../assets/images/blog-fossa.jpg';
import blogCaixaGorduraImg from '../assets/images/blog-caixa-gordura.jpg';

const BlogPost = () => {
  const { slug } = useParams();

  const blogPosts = {
    'como-prevenir-entupimentos': {
      title: 'Como Prevenir Entupimentos na Sua Casa',
      image: blogPrevencaoImg,
      author: 'Desentupidora Solução',
      date: '15 de Janeiro, 2025',
      readTime: '5 min de leitura',
      category: 'Prevenção',
      content: `
        <p>Entupimentos são um dos problemas mais comuns e inconvenientes que podem ocorrer em qualquer residência. Felizmente, a maioria deles pode ser evitada com algumas práticas simples de prevenção. Neste artigo, vamos compartilhar dicas valiosas para manter suas tubulações funcionando perfeitamente e evitar dores de cabeça desnecessárias.</p>

        <h2>1. Cuidados com a Pia da Cozinha</h2>
        <p>A pia da cozinha é um dos locais mais propensos a entupimentos devido ao acúmulo de gordura e restos de comida. Para prevenir problemas:</p>
        <ul>
          <li><strong>Nunca despeje gordura ou óleo na pia:</strong> Deixe esfriar e descarte no lixo comum ou em recipientes adequados para reciclagem.</li>
          <li><strong>Use um ralo protetor:</strong> Instale uma tela ou protetor para capturar restos de comida antes que cheguem ao ralo.</li>
          <li><strong>Raspe os pratos:</strong> Sempre remova os restos de comida dos pratos antes de lavá-los.</li>
          <li><strong>Use água quente regularmente:</strong> Despeje água quente pelo ralo semanalmente para dissolver pequenos acúmulos de gordura.</li>
        </ul>

        <h2>2. Prevenção em Pias de Banheiro</h2>
        <p>As pias de banheiro frequentemente entopem devido ao acúmulo de cabelos, produtos de higiene e sabão. Para evitar problemas:</p>
        <ul>
          <li><strong>Instale um protetor de ralo:</strong> Use telas específicas para capturar cabelos e outros detritos.</li>
          <li><strong>Limpe regularmente:</strong> Remova cabelos e resíduos do protetor de ralo semanalmente.</li>
          <li><strong>Evite produtos em excesso:</strong> Use quantidades moderadas de pasta de dente, sabonete líquido e outros produtos.</li>
          <li><strong>Faça limpeza preventiva:</strong> Use bicarbonato de sódio e vinagre mensalmente para manter as tubulações limpas.</li>
        </ul>

        <h2>3. Cuidados com o Vaso Sanitário</h2>
        <p>O vaso sanitário deve ser usado apenas para sua finalidade específica. Para prevenir entupimentos:</p>
        <ul>
          <li><strong>Não descarte objetos inadequados:</strong> Nunca jogue fraldas, absorventes, preservativos, fio dental ou outros objetos no vaso.</li>
          <li><strong>Use papel higiênico com moderação:</strong> Evite usar quantidades excessivas de papel de uma só vez.</li>
          <li><strong>Ensine as crianças:</strong> Oriente as crianças sobre o uso correto do vaso sanitário.</li>
          <li><strong>Verifique a descarga:</strong> Certifique-se de que a descarga está funcionando adequadamente, com pressão suficiente.</li>
        </ul>

        <h2>4. Manutenção Preventiva dos Ralos</h2>
        <p>Os ralos de banheiro e área de serviço também merecem atenção especial:</p>
        <ul>
          <li><strong>Limpeza regular:</strong> Remova cabelos e detritos dos ralos semanalmente.</li>
          <li><strong>Use produtos naturais:</strong> Bicarbonato de sódio e vinagre são excelentes para limpeza preventiva.</li>
          <li><strong>Evite produtos químicos agressivos:</strong> Produtos muito fortes podem danificar as tubulações.</li>
          <li><strong>Instale telas protetoras:</strong> Use proteções adequadas para cada tipo de ralo.</li>
        </ul>

        <h2>5. Sinais de Alerta</h2>
        <p>Fique atento aos primeiros sinais de problemas nas tubulações:</p>
        <ul>
          <li>Escoamento lento da água</li>
          <li>Gorgolejos ou ruídos estranhos</li>
          <li>Maus odores vindos dos ralos</li>
          <li>Água retornando pelos ralos</li>
          <li>Nível de água alterado no vaso sanitário</li>
        </ul>

        <h2>6. Quando Chamar um Profissional</h2>
        <p>Mesmo com todos os cuidados preventivos, alguns problemas podem surgir. É importante chamar um profissional quando:</p>
        <ul>
          <li>O entupimento persiste após tentativas de desobstrução</li>
          <li>Há retorno de esgoto pelos ralos</li>
          <li>Múltiplos pontos estão entupidos simultaneamente</li>
          <li>Há suspeita de problemas na rede principal</li>
          <li>Odores persistem mesmo após limpeza</li>
        </ul>
      `
    },
    'quando-limpar-fossa-septica': {
      title: 'Quando Fazer a Limpeza da Fossa Séptica',
      image: blogFossaImg,
      author: 'Desentupidora Solução',
      date: '10 de Janeiro, 2025',
      readTime: '7 min de leitura',
      category: 'Manutenção',
      content: `
        <p>A fossa séptica é um sistema fundamental para o tratamento de esgoto em residências que não possuem acesso à rede pública de coleta. Para garantir seu funcionamento adequado e evitar problemas graves de saúde e meio ambiente, é essencial realizar a limpeza e manutenção regular. Neste artigo, você aprenderá a identificar quando sua fossa precisa de atenção e a importância da manutenção preventiva.</p>

        <h2>O que é uma Fossa Séptica</h2>
        <p>A fossa séptica é um tanque subterrâneo projetado para receber e tratar os dejetos provenientes de banheiros, cozinhas e lavanderias. Ela funciona através de um processo de sedimentação e decomposição anaeróbica, onde as bactérias naturalmente presentes no esgoto decompõem a matéria orgânica.</p>
        <p>O sistema é composto basicamente por três camadas: a camada superior (escuma), formada por óleos e gorduras; a camada intermediária (efluente líquido); e a camada inferior (lodo), onde se acumulam os sólidos sedimentados.</p>

        <h2>Sinais de que sua Fossa Precisa de Limpeza</h2>
        <p>Existem vários indicadores que sinalizam a necessidade de limpeza da fossa séptica. Fique atento aos seguintes sinais:</p>
        <ul>
          <li><strong>Maus odores persistentes:</strong> Cheiros desagradáveis vindos dos ralos, banheiros ou da área onde está localizada a fossa.</li>
          <li><strong>Escoamento lento:</strong> Água demorando para escoar em pias, chuveiros e ralos.</li>
          <li><strong>Retorno de esgoto:</strong> Esgoto voltando pelos ralos ou vasos sanitários, especialmente em pontos mais baixos da casa.</li>
          <li><strong>Água parada no quintal:</strong> Formação de poças ou áreas encharcadas próximas à fossa ou sumidouro.</li>
          <li><strong>Gorgolejos nos encanamentos:</strong> Ruídos estranhos vindos das tubulações quando a água escoa.</li>
          <li><strong>Vegetação exuberante:</strong> Crescimento anormal de plantas na área da fossa, indicando vazamentos.</li>
        </ul>

        <h2>Frequência Recomendada para Limpeza</h2>
        <p>A frequência de limpeza da fossa séptica varia de acordo com alguns fatores importantes:</p>
        <ul>
          <li><strong>Tamanho da fossa:</strong> Fossas menores precisam de limpeza mais frequente.</li>
          <li><strong>Número de pessoas na residência:</strong> Mais moradores significa maior produção de esgoto.</li>
          <li><strong>Hábitos de consumo:</strong> Uso de produtos químicos e descarte inadequado aceleram o enchimento.</li>
          <li><strong>Idade do sistema:</strong> Sistemas mais antigos podem precisar de manutenção mais frequente.</li>
        </ul>
        <p><strong>Recomendação geral:</strong> A limpeza deve ser realizada a cada 2 a 4 anos para residências com uso normal. Em casos de uso intenso ou fossas menores, pode ser necessária limpeza anual.</p>

        <h2>Processo de Limpeza Profissional</h2>
        <p>A limpeza da fossa séptica deve sempre ser realizada por profissionais especializados, que possuem equipamentos adequados e conhecimento técnico. O processo inclui:</p>
        <ul>
          <li><strong>Inspeção inicial:</strong> Avaliação do estado geral da fossa e identificação de problemas.</li>
          <li><strong>Esgotamento:</strong> Remoção de todo o conteúdo líquido e sólido usando caminhão auto-vácuo.</li>
          <li><strong>Limpeza das paredes:</strong> Remoção de crostas e resíduos aderidos às paredes internas.</li>
          <li><strong>Inspeção final:</strong> Verificação da integridade estrutural e funcionamento do sistema.</li>
          <li><strong>Descarte adequado:</strong> Destinação correta dos resíduos conforme normas ambientais.</li>
        </ul>

        <h2>Riscos da Falta de Manutenção</h2>
        <p>Negligenciar a manutenção da fossa séptica pode resultar em consequências graves:</p>
        <ul>
          <li><strong>Contaminação ambiental:</strong> Poluição do solo e águas subterrâneas.</li>
          <li><strong>Riscos à saúde:</strong> Proliferação de doenças transmitidas por água contaminada.</li>
          <li><strong>Problemas estruturais:</strong> Danos ao sistema que podem exigir substituição completa.</li>
          <li><strong>Multas ambientais:</strong> Penalidades por descumprimento de normas ambientais.</li>
          <li><strong>Custos elevados:</strong> Reparos emergenciais são sempre mais caros que manutenção preventiva.</li>
        </ul>
      `
    },
    'cuidados-caixa-gordura': {
      title: 'Cuidados com a Caixa de Gordura',
      image: blogCaixaGorduraImg,
      author: 'Desentupidora Solução',
      date: '5 de Janeiro, 2025',
      readTime: '6 min de leitura',
      category: 'Manutenção',
      content: `
        <p>A caixa de gordura é um componente essencial do sistema hidráulico de qualquer cozinha, seja residencial ou comercial. Sua função principal é reter óleos e gorduras antes que cheguem à rede de esgoto, evitando entupimentos e problemas ambientais. Neste artigo, você aprenderá como manter sua caixa de gordura funcionando adequadamente e evitar transtornos desnecessários.</p>

        <h2>O que é e Como Funciona a Caixa de Gordura</h2>
        <p>A caixa de gordura é um reservatório instalado entre a pia da cozinha e a rede de esgoto. Ela funciona através do princípio da diferença de densidade: como a gordura é mais leve que a água, ela flutua na superfície, permitindo que apenas a água passe para o esgoto.</p>
        <p>O sistema é composto por uma entrada (onde chega a água da pia), uma saída (que leva a água tratada para o esgoto) e um compartimento onde a gordura fica retida. Com o tempo, essa gordura se acumula e precisa ser removida para manter o funcionamento adequado.</p>

        <h2>Sinais de que a Caixa de Gordura Precisa de Limpeza</h2>
        <p>Identificar quando sua caixa de gordura precisa de manutenção é fundamental para evitar problemas maiores. Fique atento aos seguintes sinais:</p>
        <ul>
          <li><strong>Escoamento lento na pia:</strong> A água demora para escoar ou fica empoçada na pia.</li>
          <li><strong>Maus odores:</strong> Cheiros desagradáveis vindos do ralo da pia ou da área da caixa de gordura.</li>
          <li><strong>Retorno de água suja:</strong> Água com resíduos voltando pelo ralo da pia.</li>
          <li><strong>Transbordamento:</strong> Gordura ou água saindo pela tampa da caixa de gordura.</li>
          <li><strong>Presença de insetos:</strong> Moscas ou outros insetos na área da cozinha ou próximo à caixa.</li>
          <li><strong>Camada espessa de gordura:</strong> Visualmente, você pode ver uma camada grossa de gordura na superfície.</li>
        </ul>

        <h2>Frequência de Limpeza Recomendada</h2>
        <p>A frequência de limpeza da caixa de gordura varia conforme o uso e o tipo de estabelecimento:</p>
        <ul>
          <li><strong>Residencial (família pequena):</strong> A cada 6 meses</li>
          <li><strong>Residencial (família grande):</strong> A cada 3-4 meses</li>
          <li><strong>Restaurantes pequenos:</strong> Mensalmente</li>
          <li><strong>Restaurantes grandes:</strong> Quinzenalmente</li>
          <li><strong>Lanchonetes:</strong> A cada 2 meses</li>
        </ul>

        <h2>Como Fazer a Limpeza Básica</h2>
        <p>Embora a limpeza profissional seja recomendada, você pode fazer uma manutenção básica seguindo estes passos:</p>
        <ul>
          <li><strong>Desligue a água:</strong> Feche o registro da água para evitar que mais resíduos entrem durante a limpeza.</li>
          <li><strong>Remova a tampa:</strong> Abra cuidadosamente a tampa da caixa de gordura.</li>
          <li><strong>Retire a gordura sólida:</strong> Use uma colher ou espátula para remover a camada de gordura da superfície.</li>
          <li><strong>Descarte adequadamente:</strong> Coloque a gordura em recipiente adequado para descarte no lixo comum.</li>
          <li><strong>Lave com água morna:</strong> Use água morna e detergente neutro para limpar as paredes internas.</li>
          <li><strong>Enxágue bem:</strong> Certifique-se de remover todo o detergente antes de fechar a caixa.</li>
        </ul>

        <h2>Cuidados Preventivos no Dia a Dia</h2>
        <p>Algumas práticas simples podem prolongar significativamente o tempo entre as limpezas:</p>
        <ul>
          <li><strong>Raspe os pratos:</strong> Sempre remova restos de comida antes de lavar a louça.</li>
          <li><strong>Use papel absorvente:</strong> Limpe panelas e pratos com papel antes de lavá-los.</li>
          <li><strong>Descarte óleo corretamente:</strong> Nunca despeje óleo de cozinha na pia; guarde em recipientes para descarte adequado.</li>
          <li><strong>Use água morna:</strong> Água muito quente pode derreter a gordura, mas ela se solidifica novamente nas tubulações.</li>
          <li><strong>Instale um ralo protetor:</strong> Use telas para capturar restos de comida antes que cheguem à caixa.</li>
          <li><strong>Evite detergentes em excesso:</strong> Use quantidades moderadas de detergente para não sobrecarregar o sistema.</li>
        </ul>

        <h2>Quando Chamar um Profissional</h2>
        <p>Algumas situações exigem intervenção profissional:</p>
        <ul>
          <li>Entupimentos recorrentes mesmo após limpeza</li>
          <li>Problemas estruturais na caixa de gordura</li>
          <li>Necessidade de substituição do sistema</li>
          <li>Vazamentos ou infiltrações</li>
          <li>Odores que persistem após limpeza adequada</li>
          <li>Estabelecimentos comerciais com alto volume de gordura</li>
        </ul>
      `
    }
  };

  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post não encontrado</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-800">
            Voltar ao Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Blog
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
              <span className="bg-blue-800 text-blue-200 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center text-blue-200">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
              <div className="flex items-center text-blue-200">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center text-blue-200">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center space-x-2 bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Compartilhar</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Imagem do Post */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Conteúdo do Post */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  style={{
                    lineHeight: '1.8',
                  }}
                />
                
                {/* CTA dentro do post */}
                <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Precisa de Ajuda Profissional?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Se mesmo seguindo essas dicas você está enfrentando problemas, a Desentupidora Solução está aqui para ajudar! Nossa equipe especializada oferece atendimento 24 horas com equipamentos modernos e técnicas eficazes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={`https://wa.me/5571997217825?text=Olá! Li o artigo "${post.title}" e preciso de ajuda profissional.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Fale Conosco via WhatsApp</span>
                    </a>
                    <a
                      href="tel:71997217825"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Ligue: (71) 9 9721-7825</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Posts Relacionados */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Outros Artigos
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(blogPosts)
                .filter(([key]) => key !== slug)
                .slice(0, 2)
                .map(([key, relatedPost]) => (
                  <Card key={key} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-32 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        {relatedPost.date}
                      </div>
                      <Link 
                        to={`/blog/${key}`}
                        className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                      >
                        Ler artigo
                        <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;

