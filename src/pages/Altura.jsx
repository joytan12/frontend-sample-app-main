import React, { useState } from 'react';
import GrowthChart from './GrowthChart'; // Asegúrate de que tu componente GrowthChart esté importado correctamente

const TablaValores1 = () => {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Altura</th>
            <th>Edad (Meses)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>53</td>
            <td>0</td>
          </tr>
          <tr>
            <td>57</td>
            <td>1</td>
          </tr>
          <tr>
            <td>60</td>
            <td>2</td>
          </tr>
          <tr>
            <td>62</td>
            <td>3</td>
          </tr>
          <tr>
            <td>64</td>
            <td>4</td>
          </tr>
          <tr>
            <td>66</td>
            <td>5</td>
          </tr>
          <tr>
            <td>69</td>
            <td>6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const TablaValores2 = () => {
  return (
    <div>
      <table border="1">
        <tr>
          <th>Altura</th>
          <th>Edad (Meses)</th>
        </tr>
        <tr>
          <td>72</td>
          <td>6</td>
        </tr>
        <tr>
          <td>74</td>
          <td>7</td>
        </tr>
        <tr>
          <td>76</td>
          <td>8</td>
        </tr>
        <tr>
          <td>78</td>
          <td>9</td>
        </tr>
        <tr>
          <td>80</td>
          <td>10</td>
        </tr>
        <tr>
          <td>82</td>
          <td>11</td>
        </tr>
        <tr>
          <td>84</td>
          <td>12</td>
        </tr>
        <tr>
          <td>86</td>
          <td>13</td>
        </tr>
        <tr>
          <td>88</td>
          <td>14</td>
        </tr>
        <tr>
          <td>90</td>
          <td>15</td>
        </tr>
        <tr>
          <td>92</td>
          <td>16</td>
        </tr>
      </table>
    </div>
  );
};


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

    <div class="contenedor">
      <div class = "grafico">
      <div>
        <button onClick={() => handleChildSelection(1)}>juan</button>
        <button onClick={() => handleChildSelection(2)}>laura</button>
      </div>
      {selectedChild === 1 ? (
        <GrowthChart data={data1} />
      ) : (
        <GrowthChart data={data2} />
      )}  
      </div>
      <div class="lado-derecho">
        <div class="ejemplo">
          <p>
            Los percentiles en un gráfico de crecimiento infantil indican cómo se compara el crecimiento de un niño
            con respecto a una población de referencia de la misma edad y género. Por ejemplo, si un niño está en el
            percentil 50, significa que su altura o peso está en la media, es decir, que aproximadamente el 50% de
            los niños de su misma edad y género tienen un tamaño similar o menor, mientras que el otro 50% es mayor.
            El percentil +3 representa un nivel de crecimiento superior, donde solo un pequeño porcentaje de la
            población tiene un tamaño mayor. En cambio, el percentil -3 indica un nivel de crecimiento menor al de
            la mayoría, con solo unos pocos niños de su edad y género siendo más pequeños.
          </p>
        </div>
        <div class="parrafo">
          <h3>Tabla de valoras de nuestro hijo</h3>
          {selectedChild === 1 ? (
          <TablaValores1 />
          ) : (
            <TablaValores2 />
          )}  
        </div>
      </div>
    </div>

  );
}

export default Altura;
