import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, MessageCircle, MapPin, Check, ArrowLeft } from 'lucide-react';
import DiferenciaisSeo from '@/components/seo/DiferenciaisSeo';
import DepoimentosSeo from '@/components/seo/DepoimentosSeo';
import FaqSeo from '@/components/seo/FaqSeo';
import { cidades, bairros } from '@/data/bairros';
import { servicos } from '@/data/servicos';
import { NOME_EMPRESA, TELEFONE_DISPLAY, TELEFONE_LINK, linkWhatsapp } from '@/data/negocio';

const CidadePage = ({ slug: slugProp }) => {
  const params = useParams();
  const rota = slugProp ?? params.slug;
  const cidade = cidades.find((c) => c.rota === rota);

  if (!cidade) return <Navigate to="/" replace />;

  const bairrosDaCidade = bairros.filter((b) => b.cidadeSlug === cidade.slug);
  const outrasCidades = cidades.filter((c) => c.slug !== cidade.slug);

  const url = `https://www.desentupidorasolucao.com.br/${cidade.rota}`;
  const mensagemWhatsapp = `Olá, vim pelo site e preciso de atendimento em ${cidade.nome}!`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${NOME_EMPRESA} — ${cidade.nome}`,
    url,
    telephone: '+5571996904202',
    priceRange: '$$',
    areaServed: bairrosDaCidade.map((b) => b.nome),
    address: {
      '@type': 'PostalAddress',
      addressLocality: cidade.nome,
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
        <title>{cidade.metaTitle}</title>
        <meta name="description" content={cidade.metaDescription} />
        <link rel="canonical" href={url} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium">
              <MapPin className="h-3.5 w-3.5" /> Atendemos {cidade.nome} e região
            </span>
            <h1 className="mb-4 text-3xl font-bold md:text-5xl">
              Desentupidora em {cidade.nome} — 24 Horas
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">{cidade.heroText}</p>
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

      {/* Serviços */}
      <section className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
            Serviços de Desentupimento em {cidade.nome}
          </h2>
          <p className="mb-8 leading-relaxed text-gray-600">
            A {NOME_EMPRESA} realiza todos os tipos de desentupimento em {cidade.nome}: desentupimento
            de vaso sanitário, pia, ralo, canos, caixa de gordura, rede de esgoto e limpeza de fossa
            séptica. Atendemos residências, comércios, condomínios e indústrias em toda a cidade, com
            equipes disponíveis 24 horas por dia para emergências.
          </p>

          <ul className="mb-4 grid gap-2 sm:grid-cols-2">
            {servicos.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/${s.slug}`}
                  className="flex items-center gap-2 text-sm text-gray-700 transition-colors hover:text-orange-600"
                >
                  <Check className="h-4 w-4 shrink-0 text-orange-600" />
                  {s.nome} em {cidade.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bairros atendidos */}
      <section className="border-t bg-white py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">
            Bairros Atendidos em {cidade.nome}
          </h2>
          <p className="mb-6 text-sm text-gray-600">
            Clique no seu bairro para ver o atendimento local da {NOME_EMPRESA}.
          </p>
          <div className="flex flex-wrap gap-2">
            {bairrosDaCidade.map((b) => (
              <Link
                key={b.slug}
                to={`/${b.slug}`}
                className="rounded-full border bg-gray-50 px-3 py-1.5 text-sm text-gray-700 transition-colors hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700"
              >
                {b.nome}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DepoimentosSeo />
      <FaqSeo contexto={cidade.nome} />

      {/* Outras cidades */}
      <section className="border-t bg-white py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-4 text-lg font-semibold text-gray-800">Outras Cidades que Atendemos</h2>
          <div className="mb-6 grid gap-3 sm:grid-cols-2">
            {outrasCidades.map((c) => (
              <Link
                key={c.slug}
                to={`/${c.rota}`}
                className="rounded-lg border bg-gray-50 p-3 text-sm font-medium text-orange-700 transition-colors hover:bg-orange-50"
              >
                Desentupidora em {c.nome}
              </Link>
            ))}
          </div>
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-orange-600">
            <ArrowLeft className="h-3.5 w-3.5" />
            Voltar para página inicial
          </Link>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Precisa de Atendimento Emergencial?</h2>
          <p className="mb-8 text-xl text-orange-100">
            Entre em contato agora mesmo! Atendemos 24 horas em {cidade.nome} e toda a região.
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

export default CidadePage;
