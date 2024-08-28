import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Inicio = () => {
  const [tecnicoInterno, setTecnicoInterno] = useState('');
  const [data, setData] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (tecnicoInterno && data) {
      navigate('/selecionar-tecnico', { state: { tecnicoInterno, data } });
    }
  };

  return (
    <div>
      <h2>Relatório de Técnicos</h2>
      <input
        type="text"
        placeholder="Nome do Técnico Interno"
        value={tecnicoInterno}
        onChange={(e) => setTecnicoInterno(e.target.value)}
      />
      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleSubmit}>Próximo</button>
    </div>
  );
};

export default Inicio;
