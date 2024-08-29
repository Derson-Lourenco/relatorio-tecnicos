import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RelatorioProvider } from './context/Contexto';
import SelecionarTecnico from './components/SelecionarTecnico';
import SelecionarServico from './components/SelecionarServico';
import Finalizar from './components/Finalizar';
import RelatorioCompleto from './components/RelatorioCompleto';
import Inicio from './components/Inicio'; // Importar o componente Inicio

function App() {
  return (
    <RelatorioProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} /> {/* Rota inicial */}
          <Route path="/selecionar-tecnico" element={<SelecionarTecnico />} />
          <Route path="/selecionar-servico" element={<SelecionarServico />} />
          <Route path="/finalizar" element={<Finalizar />} />
          <Route path="/relatorio-completo" element={<RelatorioCompleto />} />
        </Routes>
      </Router>
    </RelatorioProvider>
  );
}

export default App;
