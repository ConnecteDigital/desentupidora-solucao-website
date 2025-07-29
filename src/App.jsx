import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import Atendimento24h from "./pages/Atendimento24h";
import PorQueEscolher from "./pages/PorQueEscolher";
import Depoimentos from "./pages/Depoimentos";
import Contato from "./pages/Contato";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import './App.css';

const App = () => (
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;

