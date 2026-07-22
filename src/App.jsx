import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import Atendimento24h from "./pages/Atendimento24h";
import PorQueEscolher from "./pages/PorQueEscolher";
import Depoimentos from "./pages/Depoimentos";
import Contato from "./pages/Contato";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BairroPage from "./pages/BairroPage";
import ServicoPage from "./pages/ServicoPage";
import CidadePage from "./pages/CidadePage";
import NotFound from "./pages/NotFound";
import { bairros, cidades } from "./data/bairros";
import { servicos } from "./data/servicos";
import './App.css';

const App = () => (
  <HelmetProvider>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/atendimento-24h" element={<Atendimento24h />} />
          <Route path="/por-que-escolher" element={<PorQueEscolher />} />
          <Route path="/depoimentos" element={<Depoimentos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {cidades.map((cidade) => (
            <Route key={cidade.rota} path={`/${cidade.rota}`} element={<CidadePage slug={cidade.rota} />} />
          ))}
          {bairros.map((bairro) => (
            <Route key={bairro.slug} path={`/${bairro.slug}`} element={<BairroPage slug={bairro.slug} />} />
          ))}
          {servicos.map((servico) => (
            <Route key={servico.slug} path={`/${servico.slug}`} element={<ServicoPage slug={servico.slug} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;

