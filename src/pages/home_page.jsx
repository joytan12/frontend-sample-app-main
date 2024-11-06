import React from 'react';
import '../stylesheets/home-page/home-page.scss';

export const HomePage = () => {
  return (
    <>
      <div className="titulo-central">
        <h1>Bienvenido a MyChildStats</h1>
        <p>
          Aquí podrás ver todos los avances en el crecimiento de tus hijos, incluyendo gráficos de peso, altura e informes comparativos con estándares de salud. Selecciona en el menú la información que deseas consultar.
        </p>
      </div>

      <div className="funcionalidades">
        <h2>¿Qué puedes hacer aquí?</h2>
        <div className="funcionalidad-item">
          <h3>📈 Gráficos de Peso y Altura</h3>
          <p>Revisa la evolución en el crecimiento de cada uno de tus hijos.</p>
        </div>
        <div className="funcionalidad-item">
          <h3>📊 Informe Comparativo</h3>
          <p>Consulta si el desarrollo de tu hijo(a) sigue los estándares de la OMS.</p>
        </div>
      </div>

      <div className="acceso-rapido">
        <h2>Acceso Rápido</h2>
        <button onClick={() => window.location.href = '/altura'}>Ver Gráficos de Altura</button>
        <button onClick={() => window.location.href = '/psicomotor'}>Ver Avance Psicomotor</button>
      </div>

      <div className="mensaje-motivador">
        <p>
          "Cada etapa es única y especial. Acompaña el crecimiento de tus hijos y asegúrate de que estén en el camino hacia una vida saludable."
        </p>
      </div>
    </>
  );
}

export default HomePage;
