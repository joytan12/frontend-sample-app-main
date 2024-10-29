import React from 'react';
import ProfileCard from './ProfileCard';

const teamMembers = [
    {
        title: "Pediatra",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2m2hhOEYC9vrfpETFw3Qu-lwHfu1JaqGk3g&s",
        description: "Médico especializado en el cuidado de la salud y el desarrollo de los niños."
    },
    {
        title: "Enfermera pediátrica",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2m2hhOEYC9vrfpETFw3Qu-lwHfu1JaqGk3g&s",
        description: "Encargada de brindar cuidados directos a los bebés."
    },
    {
        title: "Nutricionista",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2m2hhOEYC9vrfpETFw3Qu-lwHfu1JaqGk3g&s",
        description: "Especialista en alimentación"
    },
    {
        title: "Psicólogo Infantil",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2m2hhOEYC9vrfpETFw3Qu-lwHfu1JaqGk3g&s",
        description: "Especialista en el desarrollo emocional y conductual de los niños"
    },
    {
        title: "Terapeuta Ocupacional",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2m2hhOEYC9vrfpETFw3Qu-lwHfu1JaqGk3g&s",
        description: "Ayuda a los niños con dificultades para adquirir habilidades motoras"
    },
    {
        title: "Fonoaudiólogo",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2m2hhOEYC9vrfpETFw3Qu-lwHfu1JaqGk3g&s",
        description: "Especialista en el desarrollo del habla y el lenguaje"
    },
];

const TeamSection = () => {
    return (
        <section className="team-section">
            <h1>Bienvenido a MyChildStats</h1>
            <h2>Conoce nuestro equipo</h2>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member">
                        <ProfileCard
                            title={member.title}
                            image={member.image}
                            description={member.description}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;
