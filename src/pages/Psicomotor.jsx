import React from 'react';
import MilestonesChart from './MilestonesChart';

function Pcicomotor() {
    return (
        <div>
            <MilestonesChart />
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
}

export default Pcicomotor;