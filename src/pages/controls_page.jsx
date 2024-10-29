// src/pages/controls_page.jsx
import React from 'react';
import '../stylesheets/controls-page/controls-page.scss';
import scaleIcon from '../assets/scale-icon.png';
import heightIcon from '../assets/height-icon.png';
import headIcon from '../assets/head-icon.png';
import TherapyCard from '../components/TherapyCard';
import nutritionIcon from '../assets/nutrition-icon.png';
import hormoneIcon from '../assets/hormone-icon.png';
import physioIcon from '../assets/physio-icon.png';
import occupationIcon from '../assets/occupation-icon.png';
import stimulationIcon from '../assets/stimulation-icon.png';
import medicalIcon from '../assets/medical-icon.png';


const ControlCard = ({ date, description, icon }) => (
  <div className="control-card">
    <div className="control-card__icon">
      <img src={icon} alt="Icono de control" />
    </div>
    <div className="control-card__info">
      <h3>{date}</h3>
      <p>{description}</p>
      <button>Button</button>
    </div>
  </div>
);

const ControlsPage = () => {
  return (
    <div className="controls-page">
      <h1>Controles</h1>
      <p>Para agendar una hora tiene que consultar con la Secretaria</p>

      <section className="controls-page__list">
        <h2>Visitas agendadas</h2>
        <p>Controles pendientes</p>
        <ControlCard
          date="12/09/2024"
          description="El peso de tu bebé es como un termómetro de su salud. Nos indica si está recibiendo la alimentación adecuada y si está creciendo de manera saludable."
          icon={scaleIcon}
        />
        <ControlCard
          date="23/09/2024"
          description="La talla de tu hijo nos habla de su crecimiento en altura. Al compararla con otras de su edad, podemos ver si está siguiendo una curva de crecimiento normal."
          icon={heightIcon}
        />
        <ControlCard
          date="10/10/2024"
          description="La circunferencia de la cabeza de tu bebé nos da pistas sobre el desarrollo de su cerebro. Es importante medirla regularmente para detectar cualquier anomalía."
          icon={headIcon}
        />
      </section>
      <section className="controls-page__therapies">
        <h2>Cuidemos a nuestros niños</h2>
        <p>Información general</p>
        <div className="therapies-grid">
          <TherapyCard
            icon={nutritionIcon}
            title="Terapia Nutricional"
            description="Se enfoca en ajustar la dieta del niño para asegurar que reciba los nutrientes necesarios para un crecimiento óptimo."
          />
          <TherapyCard
            icon={hormoneIcon}
            title="Tratamiento Hormonal"
            description="Se utiliza cuando hay una deficiencia hormonal que afecta el crecimiento."
          />
          <TherapyCard
            icon={physioIcon}
            title="Fisioterapia"
            description="Ayuda a mejorar la fuerza muscular, la coordinación y la movilidad del niño."
          />
          <TherapyCard
            icon={occupationIcon}
            title="Terapia Ocupacional"
            description="Se enfoca en desarrollar las habilidades necesarias para las actividades de la vida diaria."
          />
          <TherapyCard
            icon={stimulationIcon}
            title="Estimulación Temprana"
            description="Actividades para estimular el desarrollo sensorial, motor, cognitivo y social."
          />
          <TherapyCard
            icon={medicalIcon}
            title="Seguimiento Médico"
            description="Incluye controles periódicos con el pediatra para monitorear el crecimiento y ajustar tratamientos."
          />
        </div>
      </section>
    </div>
  );
};

export default ControlsPage;
