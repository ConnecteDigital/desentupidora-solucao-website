# Desentupidora Solução - Site Institucional

Site institucional moderno e responsivo para a Desentupidora Solução, desenvolvido em React com foco em conversão e experiência do usuário.

## 🚀 Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Performance Otimizada**: Build otimizado com Vite para carregamento rápido
- **SEO Friendly**: Estrutura otimizada para mecanismos de busca
- **Conversão Focada**: CTAs estratégicos em todas as páginas
- **Blog Integrado**: 3 posts completos para SEO orgânico

## 📱 Páginas Incluídas

1. **Home** - Página inicial com hero section impactante
2. **Serviços** - 6 serviços detalhados com imagens e CTAs
3. **Depoimentos** - 12 depoimentos reais de clientes
4. **Atendimento 24h** - Informações sobre atendimento emergencial
5. **Por que Escolher** - Diferenciais competitivos
6. **Contato** - Múltiplas formas de contato
7. **Blog** - 3 posts educativos sobre prevenção
8. **Posts Individuais** - Páginas detalhadas de cada post

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **React Router DOM** - Roteamento SPA
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones modernos
- **Vite** - Build tool e dev server

## 📦 Instalação e Uso

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre no diretório
cd desentupidora-solucao-react

# Instale as dependências
npm install --legacy-peer-deps

# Execute em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🎨 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/           # Componentes UI reutilizáveis
│   ├── Header.jsx    # Cabeçalho do site
│   ├── Footer.jsx    # Rodapé do site
│   ├── Layout.jsx    # Layout principal
│   └── WhatsAppButton.jsx # Botão flutuante WhatsApp
├── pages/            # Páginas da aplicação
├── assets/           # Imagens e recursos
└── App.jsx          # Componente principal
```

## 📞 Informações de Contato

- **Telefone**: (71) 9 9721-7825
- **WhatsApp**: (71) 9 9721-7825
- **Atendimento**: 24 horas por dia

## 🎯 Funcionalidades Principais

### CTAs Estratégicos
- Botões de WhatsApp em todas as páginas
- Links de telefone clicáveis
- Formulários de contato otimizados

### SEO e Performance
- Meta tags otimizadas
- Imagens comprimidas e otimizadas
- Carregamento lazy de imagens
- Estrutura semântica HTML5

### Responsividade
- Design mobile-first
- Breakpoints otimizados
- Touch-friendly em dispositivos móveis

## 🚀 Deploy

O projeto está pronto para deploy em qualquer plataforma:

- **Vercel**: `npm run build` + upload da pasta `dist`
- **Netlify**: `npm run build` + upload da pasta `dist`
- **GitHub Pages**: Configure para servir a pasta `dist`
- **Servidor próprio**: Upload da pasta `dist` para o servidor web

## 📝 Customização

### Cores da Marca
As cores principais estão definidas no Tailwind CSS:
- Azul: `blue-600`, `blue-700`, `blue-800`, `blue-900`
- Laranja: `orange-400`, `orange-500`, `orange-600`
- Verde WhatsApp: `green-600`, `green-700`

### Conteúdo
- Textos podem ser editados diretamente nos componentes
- Imagens estão na pasta `src/assets/images/`
- Informações de contato centralizadas nos componentes

## 🔧 Manutenção

### Atualizando Conteúdo
1. **Serviços**: Edite o array `services` em `src/pages/Servicos.jsx`
2. **Depoimentos**: Edite o array `testimonials` em `src/pages/Depoimentos.jsx`
3. **Blog**: Adicione novos posts em `src/pages/BlogPost.jsx`

### Adicionando Novas Páginas
1. Crie o componente em `src/pages/`
2. Adicione a rota em `src/App.jsx`
3. Atualize a navegação em `src/components/Header.jsx`

## 📊 Analytics e Tracking

O site está preparado para receber:
- Google Analytics
- Facebook Pixel
- Google Tag Manager
- Ferramentas de chat online

## 🛡️ Segurança

- Validação de formulários
- Sanitização de inputs
- Links externos com `rel="noopener noreferrer"`
- HTTPS ready

## 📈 Otimizações Implementadas

- Lazy loading de imagens
- Code splitting automático
- Compressão de assets
- Cache de recursos estáticos
- Minificação de CSS e JS

---

**Desenvolvido para Desentupidora Solução**  
Site profissional focado em conversão e experiência do usuário.

