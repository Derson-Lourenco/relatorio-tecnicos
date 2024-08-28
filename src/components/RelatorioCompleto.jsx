import { useContext } from 'react';
import RelatorioContext from '../context/Contexto';

// const { adicionarRelatorio } = useContext(RelatorioContext)

// const finalizar = () => {
//   // Simulação de envio com alerta
//   alert('Relatório enviado!');
//   adicionarRelatorio(tecnico, servicos); // Adiciona o relatório ao contexto
// };

const RelatorioCompleto = () => {
  const { relatorio } = useContext(RelatorioContext);
  
  return (
    <div>
      <h2>Relatórios de Todos os Técnicos</h2>
      {relatorio.length === 0 ? (
        <p>Nenhum relatório disponível.</p>
      ) : (
        <ul>
          {relatorio.map((item, index) => (
            <li key={index}>
              <h3>Técnico: {item.tecnico}</h3>
              <ul>
                {item.servicos.map((servico, idx) => (
                  <li key={idx}>
                    {servico.nome} - Quantidade: {servico.quantidade} - Justificativa: {servico.justificativa}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
      <button>Enviar para Telegram</button>
    </div>
  );
};

export default RelatorioCompleto;
