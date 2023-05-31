import React, { useState, useEffect } from 'react';

const PowerliftingRankings = () => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    // Lógica para obtener los datos de los rankings desde una API o cualquier otra fuente de datos
    fetchRankings();
  }, []);

  const fetchRankings = async () => {
    try {
      // Realizar una petición a la API para obtener los datos de los rankings
      const response = await fetch('https://api.example.com/powerlifting/rankings');
      const data = await response.json();
      setRankings(data);
    } catch (error) {
      console.log('Error al obtener los rankings:', error);
    }
  };

  return (
    <div>
      <h1>Powerlifting Rankings</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Sex</th>
            <th>Weight</th>
            <th>Class</th>
            <th>Age</th>
            <th>Date</th>
            <th>PR Bench</th>
            <th>PR Deadlift</th>
            <th>Total Lifted</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map((athlete, index) => (
            <tr key={athlete.id}>
            <td>{index + 1}</td>
            <td>{athlete.name}</td>
            <td>{athlete.sex}</td>
            <td>{athlete.weight}</td>
            <td>{athlete.class}</td>
            <td>{athlete.age}</td>
            <td>{athlete.date}</td>
            <td>{athlete.prBench}</td>
            <td>{athlete.prSquat}</td>
            <td>{athlete.prDeadlift}</td>
            <td>{athlete.totalLifted}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PowerliftingRankings;
