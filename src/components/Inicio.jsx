import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Inicio = () => {
  const [tecnicoInterno, setTecnicoInterno] = useState('');
  const [data, setData] = useState('');

  const navigate = useNavigate();

  // Lista de técnicos internos disponíveis
  const tecnicos = [
    'ANDERSON LOURENÇO RODRIGUES',
  ];

  const handleSubmit = () => {
    if (tecnicoInterno && data) {
      navigate('/selecionar-tecnico', { state: { tecnicoInterno, data } });
    }
  };

  return (
    <div>
      <h2>Relatório de Técnicos</h2>
      <select
        value={tecnicoInterno}
        onChange={(e) => setTecnicoInterno(e.target.value)}
      >
        <option value="" disabled>Selecione o Técnico Interno</option>
        {tecnicos.map((tecnico, index) => (
          <option key={index} value={tecnico}>
            {tecnico}
          </option>
        ))}
      </select>
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
