import { Star, User } from 'lucide-react';

const depoimentos = [
  { nome: 'Maria Silva', local: 'Pituba, Salvador', texto: 'Atendimento excelente! Chegaram rápido e resolveram o problema da minha pia sem quebrar nada. Muito profissionais.' },
  { nome: 'João Santos', local: 'Itapuã, Salvador', texto: 'Precisei do serviço de limpa fossa e fiquei muito satisfeito. Chegaram no horário combinado e fizeram um trabalho impecável.' },
  { nome: 'Ana Costa', local: 'Vilas do Atlântico, Lauro de Freitas', texto: 'Atendimento 24h realmente funciona! Tive problema de madrugada e eles vieram rapidamente. Recomendo!' },
  { nome: 'Carlos Oliveira', local: 'Centro, Camaçari', texto: 'Profissionais muito competentes. Explicaram todo o processo e deixaram tudo limpo. Preço honesto e serviço de qualidade.' },
];

const DepoimentosSeo = () => (
  <section className="py-12 md:py-16">
    <div className="container mx-auto px-4">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">O que Nossos Clientes Dizem</h2>
        <p className="text-sm text-gray-600">Clientes satisfeitos em Salvador, Lauro de Freitas e Camaçari</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {depoimentos.map((d) => (
          <div key={d.nome} className="rounded-xl border bg-white p-5 shadow-sm">
            <div className="mb-2 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-orange-500 text-orange-500" />
              ))}
            </div>
            <p className="mb-3 text-xs leading-relaxed text-gray-600">"{d.texto}"</p>
            <div className="flex items-center gap-2">
              <User className="h-6 w-6 text-gray-400" />
              <div>
                <p className="text-xs font-semibold text-gray-800">{d.nome}</p>
                <p className="text-[11px] text-gray-500">{d.local}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DepoimentosSeo;
