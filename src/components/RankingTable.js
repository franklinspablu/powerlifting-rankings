import React from 'react';

const RankingTable = ({ lifters, classFilter, genderFilter, dateFilter }) => {
  // Aplica los filtros a los datos de los levantadores
  const filteredLifters = lifters.filter((lifter) => {
    if (classFilter && lifter.class !== classFilter) {
      return false;
    }
    if (genderFilter && lifter.gender !== genderFilter) {
      return false;
    }
    if (dateFilter && lifter.date !== dateFilter) {
      return false;
    }
    return true;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Rango</th>
          <th>Nombre</th>
          <th>Sexo</th>
          <th>Peso</th>
          <th>Clase</th>
          <th>Edad</th>
          <th>Fecha</th>
          <th>RR en Bench</th>
          <th>PR en Squat</th>
          <th>PR en Deadlift</th>
          <th>Total Levantado</th>
        </tr>
      </thead>
      <tbody>
        {filteredLifters.map((lifter) => (
          <tr key={lifter.id}>
            <td>{lifter.rank}</td>
            <td>{lifter.name}</td>
            <td>{lifter.gender}</td>
            <td>{lifter.weight}</td>
            <td>{lifter.class}</td>
            <td>{lifter.age}</td>
            <td>{lifter.date}</td>
            <td>{lifter.rrBench}</td>
            <td>{lifter.prSquat}</td>
            <td>{lifter.prDeadlift}</td>
            <td>{lifter.totalLifted}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RankingTable;
