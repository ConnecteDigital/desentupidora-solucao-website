export function slugify(texto) {
  return texto
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/['’`]/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const cidadesBrutas = [
  {
    nome: 'Salvador',
    bairros: [
      'Itapuã', 'Pituba', 'Pernambués', 'Brotas', 'São Cristóvão',
      'Beiru/Tancredo Neves', 'Federação', 'Fazenda Grande do Retiro', 'São Marcos',
      'Pau da Lima', 'Liberdade', 'Cabula', 'Sussuarana', 'Paripe', 'Periperi',
      'São Caetano', 'Nordeste de Amaralina', 'Boca do Rio', 'Engomadeira', 'Mussurunga',
    ],
  },
  {
    nome: 'Lauro de Freitas',
    bairros: [
      'Itinga', 'Portão', 'Vida Nova', 'Caji', 'Vilas do Atlântico', 'Buraquinho',
      'Ipitanga', 'Vila Praiana', 'Centro', 'Caixa D’Água', 'Areia Branca', 'Jambeiro',
      'Quingoma', 'Capelão', 'Parque São Paulo', 'Pitangueiras', 'Recreio Ipitanga',
      'Aracuí', 'Barro Duro',
    ],
  },
  {
    nome: 'Camaçari',
    bairros: [
      'Centro', 'Jardim Limoeiro', 'Gleba A', 'Gleba B', 'Gleba C', 'Gleba E', 'Gleba H',
      'Camaçari de Dentro', 'Ponto Certo', 'Gravatá', 'Lama Preta', 'Mangueiral',
      'Nova Vitória', 'Parque Verde I', 'Parque Verde II', 'Verdes Horizontes',
      'Nova Aliança — PHOC I', 'Renascer — PHOC II', 'Tancredo Neves — PHOC III',
      'Parque das Mangabas',
    ],
  },
];

export const cidades = cidadesBrutas.map((cidade) => ({
  nome: cidade.nome,
  slug: slugify(cidade.nome),
  bairros: cidade.bairros,
}));

export const bairros = cidadesBrutas.flatMap((cidade) => {
  const cidadeSlug = slugify(cidade.nome);
  return cidade.bairros.map((bairroNome) => {
    const bairroSlug = slugify(bairroNome);
    return {
      nome: bairroNome,
      slug: `desentupidora-${bairroSlug}-${cidadeSlug}`,
      cidadeNome: cidade.nome,
      cidadeSlug,
      metaTitle: `Desentupidora no ${bairroNome}, ${cidade.nome} | 24h | Desentupidora Solução`,
      metaDescription: `Desentupidora no ${bairroNome}, ${cidade.nome}. Atendimento 24 horas: desentupimento de pia, vaso, ralo, esgoto, caixa de gordura e limpa fossa. Chegamos em 20 minutos. Orçamento grátis!`,
      heroText: `Precisa de desentupidora no ${bairroNome}, em ${cidade.nome}? A Desentupidora Solução atende o ${bairroNome} 24 horas por dia, com equipe profissional, equipamentos modernos e garantia no serviço. Chegamos rápido em qualquer endereço do bairro.`,
    };
  });
});
