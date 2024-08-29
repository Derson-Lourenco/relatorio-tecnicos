import { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import RelatorioContext from '../context/Contexto'; // Atualize o caminho para o novo nome do arquivo

const Finalizar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { tecnicoInterno, data, tecnico, servicos } = location.state || {}; // Verifique se location.state está definido

  const { adicionarRelatorio } = useContext(RelatorioContext); // Use o nome correto do contexto

  // Função para calcular os totais
  const calcularTotais = (servicos) => {
    return servicos.reduce(
      (acumulador, servico) => {
        acumulador.pontos += servico.pontos * servico.quantidade;
        acumulador.peso += servico.peso * servico.quantidade;
        return acumulador;
      },
      { pontos: 0, peso: 0 }
    );
  };

  const totais = calcularTotais(servicos);

  const finalizar = () => {
    if (!tecnico || !servicos || servicos.length === 0) {
      alert('Não há informações suficientes para enviar o relatório.');
      return;
    }

    // Simulação de envio com alerta
    alert('Relatório enviado!');
    adicionarRelatorio(tecnico, servicos); // Adiciona o relatório ao contexto
    navigate('/relatorio-completo'); // Navega para a página do relatório completo após enviar
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
        {servicos && servicos.length > 0 ? (
          servicos.map((servico, index) => (
            <li key={index}>
              {servico.nome} - Quantidade: {servico.quantidade} - Justificativa: {servico.justificativa} - Peso: {servico.peso} - Pontos: {servico.pontos}
            </li>
          ))
        ) : (
          <li>Nenhum serviço adicionado.</li>
        )}
      </ul>
      <h3>Totais:</h3>
      <p><strong>Total de Pontos:</strong> {totais.pontos}</p>
      <p><strong>Total de Peso:</strong> {totais.peso}</p>
      <button onClick={finalizar}>Enviar para Telegram</button>
      <button onClick={adicionarOutro}>Adicionar Outro Técnico</button>
      <button onClick={verRelatorioCompleto}>Ver Relatório Completo</button>
    </div>
  );
};

export default Finalizar;
