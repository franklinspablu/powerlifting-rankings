import React, { useState, useEffect } from 'react';
import RankingTable from './components/RankingTable';

const App = () => {
  const [lifters, setLifters] = useState([]);
  const [classFilter, setClassFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  useEffect(() => {
    fetch('/data/liftersData.json') // Ajusta la ruta según la ubicación de tu archivo JSON
      .then((response) => response.json())
      .then((data) => setLifters(data));
  }, []);
  

  const handleClassFilterChange = (event) => {
    setClassFilter(event.target.value);
  };

  const handleGenderFilterChange = (event) => {
    setGenderFilter(event.target.value);
  };

  const handleDateFilterChange = (event) => {
    setDateFilter(event.target.value);
  };

  return (
    <div>
      <h1>Powerlifting Ranking</h1>
      <div>
        <label htmlFor="classFilter">Clase:</label>
        <select id="classFilter" value={classFilter} onChange={handleClassFilterChange}>
          <option value="">Todos</option>
          <option value="lightweight">Lightweight</option>
          <option value="middleweight">Middleweight</option>
          {/* Agrega más opciones de filtro de clase */}
        </select>
      </div>
      <div>
        <label htmlFor="genderFilter">Sexo:</label>
        <select id="genderFilter" value={genderFilter} onChange={handleGenderFilterChange}>
          <option value="">Todos</option>
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
          {/* Agrega más opciones de filtro de sexo */}
        </select>
      </div>
      <div>
        <label htmlFor="dateFilter">Fecha:</label>
        <input
          type="date"
          id="dateFilter"
          value={dateFilter}
          onChange={handleDateFilterChange}
        />
      </div>
      <RankingTable lifters={lifters} classFilter={classFilter} genderFilter={genderFilter} dateFilter={dateFilter} />
    </div>
  );
};

export default App;
