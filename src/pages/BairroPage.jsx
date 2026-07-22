import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, MessageCircle, MapPin, Check, ArrowLeft } from 'lucide-react';
import DiferenciaisSeo from '@/components/seo/DiferenciaisSeo';
import DepoimentosSeo from '@/components/seo/DepoimentosSeo';
import FaqSeo from '@/components/seo/FaqSeo';
import { bairros, cidades } from '@/data/bairros';
import { servicos } from '@/data/servicos';
import { NOME_EMPRESA, TELEFONE_DISPLAY, TELEFONE_LINK, linkWhatsapp } from '@/data/negocio';

const BairroPage = ({ slug: slugProp }) => {
  const params = useParams();
  const slug = slugProp ?? params.slug;
  const bairro = bairros.find((b) => b.slug === slug);

  if (!bairro) return <Navigate to="/" replace />;

  const cidade = cidades.find((c) => c.slug === bairro.cidadeSlug);
  const outrosDoMesmoBairro = bairros.filter(
    (b) => b.cidadeSlug === bairro.cidadeSlug && b.slug !== bairro.slug
  );
  const bairrosProximos =
    outrosDoMesmoBairro.length > 0
      ? [outrosDoMesmoBairro[0], outrosDoMesmoBairro[1 % outrosDoMesmoBairro.length], outrosDoMesmoBairro[2 % outrosDoMesmoBairro.length]].filter(
          (b, i, arr) => b && arr.findIndex((x) => x.slug === b.slug) === i
        )
      : [];

  const url = `https://www.solucoesdesentupidora.com.br/${bairro.slug}`;
  const mensagemWhatsapp = `Olá, vim pelo site e preciso de atendimento no ${bairro.nome}, ${bairro.cidadeNome}!`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${NOME_EMPRESA} — ${bairro.nome}, ${bairro.cidadeNome}`,
    url,
    telephone: '+5571996904202',
    priceRange: '$$',
    areaServed: `${bairro.nome}, ${bairro.cidadeNome}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: bairro.cidadeNome,
      addressRegion: 'BA',
      addressCountry: 'BR',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{bairro.metaTitle}</title>
        <meta name="description" content={bairro.metaDescription} />
        <link rel="canonical" href={url} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium">
              <MapPin className="h-3.5 w-3.5" /> Atendemos o {bairro.nome} e região
            </span>
            <h1 className="mb-4 text-3xl font-bold md:text-5xl">
              Desentupidora no {bairro.nome} — {bairro.cidadeNome} 24 Horas
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">{bairro.heroText}</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={linkWhatsapp(mensagemWhatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 rounded-lg bg-green-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-700"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Chamar no WhatsApp</span>
              </a>
              <a
                href={TELEFONE_LINK}
                className="flex items-center justify-center space-x-2 rounded-lg bg-orange-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
              >
                <Phone className="h-5 w-5" />
                <span>{TELEFONE_DISPLAY}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <DiferenciaisSeo />

      {/* Conteúdo local SEO */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
            Serviços de Desentupimento no {bairro.nome}
          </h2>
          <p className="mb-8 leading-relaxed text-gray-600">
            A {NOME_EMPRESA} realiza todos os tipos de desentupimento no {bairro.nome}, em {bairro.cidadeNome}:
            desentupimento de vaso sanitário, pia, ralo, canos, caixa de gordura, rede de esgoto e limpeza de fossa
            séptica. Atendemos residências, comércios, condomínios e indústrias no {bairro.nome} com equipes
            disponíveis 24 horas por dia para emergências.
          </p>

          <h3 className="mb-4 text-xl font-semibold text-gray-800">
            Nossos Serviços no {bairro.nome}
          </h3>
          <ul className="mb-10 grid gap-2 sm:grid-cols-2">
            {servicos.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/${s.slug}`}
                  className="flex items-center gap-2 text-sm text-gray-700 transition-colors hover:text-orange-600"
                >
                  <Check className="h-4 w-4 shrink-0 text-orange-600" />
                  {s.nome} no {bairro.nome}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mb-3 text-xl font-semibold text-gray-800">
            Por que escolher a {NOME_EMPRESA} no {bairro.nome}?
          </h3>
          <p className="mb-8 leading-relaxed text-gray-600">
            Com anos de experiência atendendo Salvador, Lauro de Freitas e Camaçari, oferecemos no {bairro.nome}:
            atendimento 24 horas todos os dias, orçamento gratuito sem compromisso, técnicos qualificados,
            equipamentos de alta pressão e garantia no serviço realizado.
          </p>

          <a
            href={linkWhatsapp(mensagemWhatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-700"
          >
            <MessageCircle className="h-5 w-5" />
            Solicitar orçamento grátis no {bairro.nome}
          </a>
        </div>
      </section>

      <DepoimentosSeo />
      <FaqSeo contexto={`${bairro.nome}, ${bairro.cidadeNome}`} />

      {/* Bairros próximos */}
      <section className="border-t bg-white py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            Outros Bairros que Atendemos em {bairro.cidadeNome}
          </h2>
          {bairrosProximos.length > 0 && (
            <div className="mb-6 grid gap-3 sm:grid-cols-3">
              {bairrosProximos.map((b) => (
                <Link
                  key={b.slug}
                  to={`/${b.slug}`}
                  className="rounded-lg border bg-gray-50 p-3 text-sm font-medium text-orange-700 transition-colors hover:bg-orange-50"
                >
                  Desentupidora no {b.nome}
                </Link>
              ))}
            </div>
          )}
          <div className="flex flex-wrap items-center gap-4">
            {cidade && (
              <Link
                to={`/${cidade.rota}`}
                className="text-xs font-medium text-orange-600 hover:text-orange-700"
              >
                Ver todos os bairros de {cidade.nome} →
              </Link>
            )}
            <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-orange-600">
              <ArrowLeft className="h-3.5 w-3.5" />
              Voltar para página inicial
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Precisa de Atendimento Emergencial?</h2>
          <p className="mb-8 text-xl text-orange-100">
            Entre em contato agora mesmo! Atendemos 24 horas no {bairro.nome} e toda a região.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={linkWhatsapp(mensagemWhatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-green-700"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp</span>
            </a>
            <a
              href={TELEFONE_LINK}
              className="flex items-center justify-center space-x-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-orange-600 transition-colors hover:bg-gray-100"
            >
              <Phone className="h-5 w-5" />
              <span>{TELEFONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BairroPage;
