import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SelecionarTecnico = () => {
  const [tecnicos] = useState([
    'JOSEFRAN DOS SANTOS SOARES',
    'FRANCISCO SAMUEL DAS CHAGAS',
    'DANIEL WALYSSON DE MOURA LAVOR',
    'JONATA JOAO DE CARVALHO'
  ]);
  
  const [tecnicoSelecionado, setTecnicoSelecionado] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (event) => {
    setTecnicoSelecionado(event.target.value);
  };

  const selecionarTecnico = () => {
    if (tecnicoSelecionado) {
      navigate('/selecionar-servico', { state: { ...location.state, tecnico: tecnicoSelecionado } });
    }
  };

  return (
    <div>
      <h2>Selecionar Técnico</h2>
      {/* <button onClick={adicionarTecnico}>Adicionar Técnico</button> */}
      <div>
        <label htmlFor="tecnico-select">Escolha um técnico:</label>
        <select
          id="tecnico-select"
          value={tecnicoSelecionado}
          onChange={handleChange}
        >
          <option value="">Selecione um técnico</option>
          {tecnicos.map((tecnico, index) => (
            <option key={index} value={tecnico}>
              {tecnico}
            </option>
          ))}
        </select>
        <button onClick={selecionarTecnico} disabled={!tecnicoSelecionado}>
          Confirmar Seleção
        </button>
      </div>
    </div>
  );
};

export default SelecionarTecnico;
