export const NOME_EMPRESA = 'Desentupidora Solução';
export const TELEFONE_DISPLAY = '(71) 9 9690-4202';
export const TELEFONE_LINK = 'tel:71996904202';
export const WHATSAPP_NUMBER = '5571996904202';

export const linkWhatsapp = (mensagem) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
