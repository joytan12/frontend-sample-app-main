import React, { useState }  from 'react';
import MilestonesChart from './MilestonesChart';
import ReferenceGraphic from './ReferencieGraphic';

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
            </div>
        </div>
        
    );
}

export default Psicomotor;