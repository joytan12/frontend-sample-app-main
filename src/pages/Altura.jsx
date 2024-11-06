import React, { useState } from 'react';
import GrowthChart from './GrowthChart'; // Asegúrate de que tu componente GrowthChart esté importado correctamente

function Altura() {
  const [selectedChild, setSelectedChild] = useState(1);

  const data1 = {
  max: 45,
  min: 75,
  labels: ['0', '1', '2', '3', '4', '5', '6'], // Meses de edad
  percentile3: [58, 60, 62, 64, 66, 68, 70],    // Percentil +3
  percentile2: [57, 59, 61, 63, 65, 67, 69],    // Percentil +2
  percentile0: [55, 57, 59, 61, 63, 65, 67],    // Percentil 0
  percentileMinus2: [53, 55, 57, 59, 61, 63, 65], // Percentil -2
  percentileMinus3: [51, 53, 55, 57, 59, 61, 63], // Percentil -3
  hijo: [53, 57, 60, 62, 64, 66, 69] // Alturas reales del primer hijo en cada mes
};

const data2 = {
  max: 55,
  min: 100,
  labels: ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'], // Meses de edad
  percentile3: [75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95],   // Percentil +3
  percentile2: [73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93],   // Percentil +2
  percentile0: [70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90],   // Percentil 0
  percentileMinus2: [68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88], // Percentil -2
  percentileMinus3: [65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85], // Percentil -3
  hijo: [72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92] // Alturas reales del segundo hijo en cada mes
};


  const handleChildSelection = (child) => {
    setSelectedChild(child);
  };

  return (
    <div>
      <h1>Gráfico de crecimiento</h1>
      <p>
        Los percentiles en un gráfico de crecimiento infantil indican cómo se compara el crecimiento de un niño
        con respecto a una población de referencia de la misma edad y género. Por ejemplo, si un niño está en el
        percentil 50, significa que su altura o peso está en la media, es decir, que aproximadamente el 50% de
        los niños de su misma edad y género tienen un tamaño similar o menor, mientras que el otro 50% es mayor.
        El percentil +3 representa un nivel de crecimiento superior, donde solo un pequeño porcentaje de la
        población tiene un tamaño mayor. En cambio, el percentil -3 indica un nivel de crecimiento menor al de
        la mayoría, con solo unos pocos niños de su edad y género siendo más pequeños.
      </p>
      <div>
        <button onClick={() => handleChildSelection(1)}>Hijo 1</button>
        <button onClick={() => handleChildSelection(2)}>Hijo 2</button>
      </div>
      {selectedChild === 1 ? (
        <GrowthChart data={data1} />
      ) : (
        <GrowthChart data={data2} />
      )}
    </div>
  );
}

export default Altura;
