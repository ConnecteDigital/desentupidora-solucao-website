import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, MessageCircle, Check, ArrowLeft } from 'lucide-react';
import DiferenciaisSeo from '@/components/seo/DiferenciaisSeo';
import FaqSeo from '@/components/seo/FaqSeo';
import { servicos } from '@/data/servicos';
import { cidades, bairros } from '@/data/bairros';
import { NOME_EMPRESA, TELEFONE_DISPLAY, TELEFONE_LINK, linkWhatsapp } from '@/data/negocio';

const ServicoPage = ({ slug: slugProp }) => {
  const params = useParams();
  const slug = slugProp ?? params.slug;
  const servico = servicos.find((s) => s.slug === slug);

  if (!servico) return <Navigate to="/" replace />;

  const outrosServicos = servicos.filter((s) => s.slug !== slug);
  const mensagemWhatsapp = `Olá, vim pelo site e preciso do serviço de ${servico.nome}!`;
  const url = `https://www.solucoesdesentupidora.com.br/${servico.slug}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{`${servico.nome} 24h | Salvador, Lauro de Freitas e Camaçari | ${NOME_EMPRESA}`}</title>
        <meta
          name="description"
          content={`${servico.nome} 24 horas em Salvador, Lauro de Freitas e Camaçari. ${servico.resumo} Orçamento grátis! Chame no WhatsApp.`}
        />
        <link rel="canonical" href={url} />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[380px] overflow-hidden">
        <img src={servico.imagem} alt={servico.nome} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-blue-950/80" />
        <div className="container relative mx-auto flex min-h-[380px] flex-col items-center justify-center px-4 py-12 text-center text-white">
          <Link to="/servicos" className="mb-4 flex items-center gap-1 text-xs text-white/70 hover:text-white">
            <ArrowLeft className="h-3 w-3" /> Ver todos os serviços
          </Link>
          <h1 className="mb-3 text-3xl font-bold md:text-5xl">{servico.nome}</h1>
          <p className="mx-auto mb-6 max-w-xl text-white/85">{servico.descricao}</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <a
              href={TELEFONE_LINK}
              className="flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
            >
              <Phone className="h-4 w-4" />
              Ligar Agora: {TELEFONE_DISPLAY}
            </a>
            <a
              href={linkWhatsapp(mensagemWhatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700"
            >
              <MessageCircle className="h-4 w-4" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <DiferenciaisSeo />

      {/* Conteúdo */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="grid gap-8 md:grid-cols-[1fr_280px]">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-gray-800">
                {servico.nome} em Salvador, Lauro de Freitas e Camaçari
              </h2>
              <div className="text-gray-600">
                {servico.conteudo.split('\n\n').map((paragrafo, i) => {
                  if (paragrafo.startsWith('**') && paragrafo.endsWith('**')) {
                    return (
                      <h3 key={i} className="mb-2 mt-6 text-lg font-semibold text-gray-800">
                        {paragrafo.replace(/\*\*/g, '')}
                      </h3>
                    );
                  }
                  if (paragrafo.startsWith('- ')) {
                    return (
                      <ul key={i} className="mb-4 space-y-1.5">
                        {paragrafo.split('\n').map((linha, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
                            {linha.replace('- ', '')}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={i} className="mb-4 text-sm leading-relaxed">
                      {paragrafo}
                    </p>
                  );
                })}
              </div>
            </div>

            <aside className="space-y-4">
              <div className="rounded-xl border bg-white p-4">
                <h3 className="mb-3 text-sm font-semibold text-gray-800">Outros Serviços</h3>
                <ul className="space-y-1.5">
                  {outrosServicos.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/${s.slug}`} className="text-xs text-gray-600 transition-colors hover:text-orange-600">
                        → {s.nome}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
                <h3 className="mb-2 text-sm font-semibold text-orange-700">Precisa desse serviço?</h3>
                <p className="mb-3 text-xs text-gray-600">Orçamento grátis e sem compromisso.</p>
                <a
                  href={linkWhatsapp(mensagemWhatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-green-600 py-2 text-xs font-semibold text-white transition-colors hover:bg-green-700"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Áreas atendidas para este serviço */}
      <section className="border-t bg-white py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">
            {servico.nome} em Todos os Bairros que Atendemos
          </h2>
          <p className="mb-6 text-sm text-gray-600">
            Clique no seu bairro para ver o atendimento local de {servico.nome.toLowerCase()}.
          </p>
          <div className="space-y-6">
            {cidades.map((cidade) => (
              <div key={cidade.slug}>
                <h3 className="mb-2 text-sm font-semibold text-orange-700">
                  <Link to={`/${cidade.rota}`} className="hover:underline">
                    {cidade.nome}
                  </Link>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {bairros
                    .filter((b) => b.cidadeSlug === cidade.slug)
                    .map((b) => (
                      <Link
                        key={b.slug}
                        to={`/${b.slug}`}
                        className="rounded-full border bg-gray-50 px-3 py-1 text-xs text-gray-700 transition-colors hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700"
                      >
                        {b.nome}
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSeo contexto={servico.nome} />

      {/* CTA final */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Precisa de {servico.nome} Agora?</h2>
          <p className="mb-8 text-xl text-orange-100">Não espere o problema piorar. Atendemos 24 horas!</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={linkWhatsapp(mensagemWhatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-green-700"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
            <a
              href={TELEFONE_LINK}
              className="flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-orange-600 transition-colors hover:bg-gray-100"
            >
              <Phone className="h-5 w-5" />
              {TELEFONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicoPage;
