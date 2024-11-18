import React, { useState } from 'react';
import GrowthChart from './GrowthChart'; // Asegúrate de que tu componente GrowthChart esté importado correctamente

const TablaValores1 = () => {
  return (
    <div className='tabla'>
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
    <div className='tabla'>
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
  labels: ['6', '7', '8', '9', '10', '11', '12', '13', '14'], // Meses de edad
  percentile3: [75, 77, 79, 81, 83, 85, 87, 89, 91],   // Percentil +3
  percentile2: [73, 75, 77, 79, 81, 83, 85, 87, 89],   // Percentil +2
  percentile0: [70, 72, 74, 76, 78, 80, 82, 84, 86],   // Percentil 0
  percentileMinus2: [68, 70, 72, 74, 76, 78, 80, 82, 84], // Percentil -2
  percentileMinus3: [65, 67, 69, 71, 73, 75, 77, 79, 81], // Percentil -3
  hijo: [72, 74, 76, 78, 80, 82, 84, 86, 88] // Alturas reales del segundo hijo en cada mes
};


  const handleChildSelection = (child) => {
    setSelectedChild(child);
  };

  return (
    <div class="contenedor">
        <div className="dropdown">
          <label htmlFor="childSelector">Selecciona un niño:</label>
          <select
          id="childSelector"
          value={selectedChild} // Vinculamos el estado
          onChange={(event) => setSelectedChild(Number(event.target.value))}
          >
          <option value="1">Juan</option>
          <option value="2">Laura</option>
          </select>
        </div>
      <h1 class="titulo_grafico">Gráficos de Altura</h1>
      <div class = "grafico">
      {selectedChild === 1 ? (
        <GrowthChart data={data1} />
      ) : (
        <GrowthChart data={data2} />
      )}  
      </div>
      <div class="lado-derecho">
        <div class="ejemplo">
        <p>
          En el gráfico, los <strong>percentiles</strong> muestran cómo se compara el crecimiento de tu hijo con el de otros niños de la misma edad y género. 
          <br />
          <span style={{ color: 'blue', fontWeight: 'bold' }}>La línea azul</span> representa el crecimiento de tu hijo. 
          Si su línea coincide con el <span style={{ color: 'green', fontWeight: 'bold' }}>percentil 0</span>, significa que su crecimiento está en el promedio, es decir, que aproximadamente la mitad de los niños tienen un tamaño similar o menor, y la otra mitad es mayor. 
          <br />
          Los <span style={{ color: 'red', fontWeight: 'bold' }}>percentiles +2 y -2</span> (en rojo) indican niveles ligeramente por encima o por debajo del promedio.
          <br />
          Los <span style={{ color: 'black', fontWeight: 'bold' }}>percentiles +3 y -3</span> (en negro) representan extremos: un crecimiento superior o inferior al de la mayoría de los niños. Solo un pequeño porcentaje de niños estaría por encima del <span style={{ color: 'black', fontWeight: 'bold' }}>+3</span> o por debajo del <span style={{ color: 'black', fontWeight: 'bold' }}>-3</span>.
        </p>
        </div>
        <div class="parrafo">
          <h3>Tabla de valores de nuestro hijo</h3>
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
