import { Clock, Timer, FileText, Phone } from 'lucide-react';

const diferenciais = [
  { icon: Clock, titulo: '24 Horas', descricao: 'Atendimento 24 horas por dia, 7 dias por semana, inclusive feriados.' },
  { icon: Timer, titulo: '20 Minutos', descricao: 'Chegamos em até 20 minutos na sua localização.' },
  { icon: FileText, titulo: 'Orçamento Grátis', descricao: 'Orçamento sem compromisso e sem custo.' },
  { icon: Phone, titulo: 'Atendimento Imediato', descricao: 'Ligue ou chame no WhatsApp e seja atendido na hora.' },
];

const DiferenciaisSeo = () => (
  <section className="border-y bg-gray-50 py-10">
    <div className="container mx-auto px-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {diferenciais.map((d) => (
          <div key={d.titulo} className="flex items-center gap-3 rounded-lg border bg-white p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100">
              <d.icon className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">{d.titulo}</p>
              <p className="text-xs text-gray-600">{d.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DiferenciaisSeo;
