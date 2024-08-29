import { useContext } from 'react';
import RelatorioContext from '../context/Contexto';

const RelatorioCompleto = () => {
  const { relatorio, enviarRelatorioParaTelegram } = useContext(RelatorioContext);

  // Função para calcular os totais de pontos e peso por técnico
  const calcularTotaisPorTecnico = (relatorios) => {
    return relatorios.reduce((totais, item) => {
      if (!totais[item.tecnico]) {
        totais[item.tecnico] = { pontos: 0, peso: 0 };
      }
      item.servicos.forEach(servico => {
        totais[item.tecnico].pontos += servico.pontos * servico.quantidade;
        totais[item.tecnico].peso += servico.peso * servico.quantidade;
      });
      return totais;
    }, {});
  };

  const totaisPorTecnico = calcularTotaisPorTecnico(relatorio);

  const enviarParaTelegram = () => {
    if (relatorio.length === 0) {
      alert('Nenhum relatório disponível para enviar.');
      return;
    }

    // Supondo que `enviarRelatorioParaTelegram` seja uma função que lida com o envio
    enviarRelatorioParaTelegram(relatorio)
      .then(() => alert('Relatórios enviados para o Telegram!'))
      .catch(() => alert('Erro ao enviar relatórios.'));
  };

  return (
    <div>
      <h2>Relatórios de Todos os Técnicos</h2>
      {relatorio.length === 0 ? (
        <p>Nenhum relatório disponível.</p>
      ) : (
        <>
          <ul>
            {relatorio.map((item, index) => (
              <li key={index}>
                <h3>Técnico: {item.tecnico}</h3>
                <ul>
                  {item.servicos.map((servico, idx) => (
                    <li key={idx}>
                      {servico.nome} - Quantidade: {servico.quantidade} - Justificativa: {servico.justificativa} - Peso: {servico.peso} - Pontos: {servico.pontos}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <h3>Totais por Técnico:</h3>
          <ul>
            {Object.keys(totaisPorTecnico).map((tecnico, index) => (
              <li key={index}>
                <h4>Técnico: {tecnico}</h4>
                <p><strong>Total de Pontos:</strong> {totaisPorTecnico[tecnico].pontos}</p>
                <p><strong>Total de Peso:</strong> {totaisPorTecnico[tecnico].peso}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      <button onClick={enviarParaTelegram}>Enviar para Telegram</button>
    </div>
  );
};

export default RelatorioCompleto;
