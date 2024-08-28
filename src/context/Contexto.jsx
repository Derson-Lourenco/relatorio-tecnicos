import { createContext, useState } from 'react';

const RelatorioContext = createContext();

export const RelatorioProvider = ({ children }) => {
  const [relatorio, setRelatorio] = useState([]);

  const adicionarRelatorio = (tecnico, servicos) => {
    setRelatorio([...relatorio, { tecnico, servicos }]);
  };

  return (
    <RelatorioContext.Provider value={{ relatorio, adicionarRelatorio }}>
      {children}
    </RelatorioContext.Provider>
  );
};

export default RelatorioContext;
