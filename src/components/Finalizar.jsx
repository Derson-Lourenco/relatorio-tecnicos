import { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import RelatorioContext from '../context/Contexto'; // Atualize o caminho para o novo nome do arquivo

const Finalizar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { tecnicoInterno, data, tecnico, servicos } = location.state;

  const { adicionarRelatorio } = useContext(RelatorioContext); // Use o nome correto do contexto

  const finalizar = () => {
    // Simulação de envio com alerta
    alert('Relatório enviado!');
    adicionarRelatorio(tecnico, servicos); // Adiciona o relatório ao contexto
  };

  const adicionarOutro = () => {
    navigate('/selecionar-tecnico', { state: { tecnicoInterno, data } });
  };

  const verRelatorioCompleto = () => {
    navigate('/relatorio-completo');
  };

  return (
    <div>
      <h2>Relatório</h2>
      <p><strong>Técnico Interno:</strong> {tecnicoInterno}</p>
      <p><strong>Data:</strong> {data}</p>
      <p><strong>Técnico:</strong> {tecnico}</p>
      <h3>Serviços Adicionados:</h3>
      <ul>
        {servicos.map((servico, index) => (
          <li key={index}>
            {servico.nome} - Quantidade: {servico.quantidade} - Justificativa: {servico.justificativa}
          </li>
        ))}
      </ul>
      <button onClick={finalizar}>Enviar para Telegram</button>
      <button onClick={adicionarOutro}>Adicionar Outro Técnico</button>
      <button onClick={verRelatorioCompleto}>Ver Relatório Completo</button>
    </div>
  );
};

export default Finalizar;
