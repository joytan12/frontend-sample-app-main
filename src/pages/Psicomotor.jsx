import React, { useState }  from 'react';
import MilestonesChart from './MilestonesChart';
import ReferenceGraphic from './ReferencieGraphic';

const TablaValores1 = () => {
    return (
      <div>
         <table border="1">
        <tr>
            <th>Desarrollo Psicomotor</th>
            <th>Edad (Meses)</th>
        </tr>
        <tr>
            <td>Caminar solo</td>
            <td>15</td>
        </tr>
        <tr>
            <td>De pie sin apoyo</td>
            <td>11</td>
        </tr>
        <tr>
            <td>Caminar con asistencia</td>
            <td>10</td>
        </tr>
        <tr>
            <td>Arrastrándose con manos y rodillas</td>
            <td>8</td>
        </tr>
        <tr>
            <td>Estar de pie con asistencia</td>
            <td>7</td>
        </tr>
        <tr>
            <td>Sentado sin apoyo</td>
            <td>6</td>
        </tr>
        </table>
      </div>
    );
  };
  
  const TablaValores2 = () => {
    return (
      <div>
         <table border="1">
        <tr>
            <th>Desarrollo Psicomotor</th>
            <th>Edad (Meses)</th>
        </tr>
        <tr>
            <td>Caminar solo</td>
            <td>0</td>
        </tr>
        <tr>
            <td>De pie sin apoyo</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Caminar con asistencia</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Arrastrándose con manos y rodillas</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Estar de pie con asistencia</td>
            <td>5</td>
        </tr>
        <tr>
            <td>Sentado sin apoyo</td>
            <td>4</td>
        </tr>
        </table>
      </div>
    );
  };

function Psicomotor() {
    const [selectedChild, setSelectedChild] = useState(1);

    const valoresPromedio = [0, 0, 0, 0, 5, 4]; 

    const handleChildSelection = (child) => {
        setSelectedChild(child);
    };

    return (

        <div class="contenedor">
            {/* <div class = "grafico">
                <MilestonesChart promedioData={valoresPromedio}/>
            </div> */}
            <div class = "grafico">
                <div>
                    <button onClick={() => handleChildSelection(1)}>Juan</button>
                    <button onClick={() => handleChildSelection(2)}>Laura</button>
                </div>
                {selectedChild === 1 ? (
                    <MilestonesChart promedioData={valoresPromedio}/>
                ) : (
                    <MilestonesChart />
                )}  
            </div>
            <div class="lado-derecho">
                <h1>Grafico Psicomotor</h1>
                <div class="ejemplo"><ReferenceGraphic /></div>
                <div class="parrafo">
                {selectedChild === 1 ? (
                    <TablaValores2 />
                ) : (
                    <TablaValores1 />
                )}  
                </div>
                <p style={{ color: 'red', fontWeight: 'bold' }}>Si los datos en la table son 0 es que no se a logrado</p>
            </div>
        </div>
        
    );
}

export default Psicomotor;