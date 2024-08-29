import { createContext, useState } from 'react';

const RelatorioContext = createContext();

const RelatorioProvider = ({ children }) => {
  const [relatorio, setRelatorio] = useState([]);

  const adicionarRelatorio = (tecnico, servicos) => {
    setRelatorio([...relatorio, { tecnico, servicos }]);
  };

  const enviarRelatorioParaTelegram = (relatorios) => {
    // Implemente a lógica para enviar relatórios para o Telegram
    return new Promise((resolve, reject) => {
      // Exemplo de simulação de envio
      setTimeout(() => {
        // Simule sucesso ou falha do envio
        Math.random() > 0.5 ? resolve() : reject();
      }, 1000);
    });
  };

  return (
    <RelatorioContext.Provider value={{ relatorio, adicionarRelatorio, enviarRelatorioParaTelegram }}>
      {children}
    </RelatorioContext.Provider>
  );
};

export { RelatorioProvider };
export default RelatorioContext;
