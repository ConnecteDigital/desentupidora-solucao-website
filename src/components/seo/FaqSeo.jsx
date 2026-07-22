import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { pergunta: 'Vocês atendem 24 horas?', resposta: 'Sim! Nosso atendimento funciona 24 horas por dia, 7 dias por semana, incluindo feriados e finais de semana.' },
  { pergunta: 'Qual o tempo de chegada?', resposta: 'Nossa equipe chega em até 20 minutos na sua localização em Salvador, Lauro de Freitas e Camaçari.' },
  { pergunta: 'O orçamento é gratuito?', resposta: 'Sim, o orçamento é totalmente gratuito e sem compromisso. Ligue ou mande mensagem no WhatsApp.' },
  { pergunta: 'Quais formas de pagamento?', resposta: 'Aceitamos dinheiro, PIX, cartão de débito e crédito.' },
  { pergunta: 'O serviço tem garantia?', resposta: 'Sim, todos os nossos serviços possuem garantia. O prazo varia de acordo com o tipo de serviço realizado.' },
];

const FaqSeo = ({ contexto }) => (
  <section className="py-12 md:py-16">
    <div className="container mx-auto max-w-2xl px-4">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">
          Perguntas Frequentes{contexto ? ` — ${contexto}` : ''}
        </h2>
        <p className="text-sm text-gray-600">Tire suas dúvidas sobre nossos serviços</p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-left text-sm">{faq.pergunta}</AccordionTrigger>
            <AccordionContent className="text-xs text-gray-600">{faq.resposta}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FaqSeo;
