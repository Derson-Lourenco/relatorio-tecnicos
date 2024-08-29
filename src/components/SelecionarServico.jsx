import { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import RelatorioContext from '../context/Contexto';

const SelecionarServico = () => {
  const [servicos] = useState([
    { nome: 'AT', peso: 2, pontos: 1 },
    { nome: 'ME', peso: 2, pontos: 1 },
    { nome: 'MMA', peso: 2, pontos: 1 },
    { nome: 'AT Virtex Tv c/ Box', peso: 3, pontos: 4 },
    { nome: 'AT Virtex Tv s/ Box', peso: 2, pontos: 3 },
    { nome: 'Suporte', peso: 1, pontos: 1 },
    { nome: 'DES. PORTA', peso: 0.25, pontos: 0.25 }
  ]);
  const [quantidade, setQuantidade] = useState(1);
  const [justificativa, setJustificativa] = useState('');
  const [servicosSelecionados, setServicosSelecionados] = useState([]);
  const [servicoAtual, setServicoAtual] = useState(servicos[0]);
  const navigate = useNavigate();
  const location = useLocation();
  const { adicionarRelatorio } = useContext(RelatorioContext);

  const adicionarServico = () => {
    if (servicoAtual && quantidade > 0) {
      const servicoDetalhado = servicos.find(s => s.nome === servicoAtual);
      const novoServico = {
        nome: servicoAtual,
        quantidade,
        justificativa,
        peso: servicoDetalhado.peso,
        pontos: servicoDetalhado.pontos
      };
      setServicosSelecionados([...servicosSelecionados, novoServico]);
      setQuantidade(1);
      setJustificativa('');
    }
  };

  const seguir = () => {
    adicionarRelatorio(location.state.tecnico, servicosSelecionados);
    navigate('/finalizar', {
      state: {
        tecnicoInterno: location.state.tecnicoInterno,
        data: location.state.data,
        tecnico: location.state.tecnico,
        servicos: servicosSelecionados
      }
    });
  };

  const voltar = () => {
    navigate('/selecionar-tecnico'); 
  };

  return (
    <div>
      <h2>Selecionar Serviço</h2>
      <select value={servicoAtual} onChange={(e) => setServicoAtual(e.target.value)}>
        {servicos.map((servico, index) => (
          <option key={index} value={servico.nome}>
            {servico.nome}
          </option>
        ))}
      </select>
      <input
        type="number"
        min="1"
        value={quantidade}
        onChange={(e) => setQuantidade(Number(e.target.value))}
      />
      <div>
        <input
          type="text"
          placeholder="Justificativa"
          value={justificativa}
          onChange={(e) => setJustificativa(e.target.value)}
        />
      </div>
      <div>
        <button onClick={adicionarServico}>Adicionar Serviço</button>
      </div>
      <div>
        <h3>Serviços Selecionados:</h3>
        <ul>
          {servicosSelecionados.map((servico, index) => (
            <li key={index}>
              {servico.nome} - Quantidade: {servico.quantidade} - Justificativa: {servico.justificativa} - Peso: {servico.peso} - Pontos: {servico.pontos}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={voltar}>Voltar</button>
        <button onClick={seguir} disabled={servicosSelecionados.length === 0}>
          Seguir
        </button>
      </div>
    </div>
  );
};

export default SelecionarServico;
