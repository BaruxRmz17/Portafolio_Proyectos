import React from 'react';
import { FaTrophy, FaAward, FaCertificate, FaGraduationCap } from 'react-icons/fa'; // Íconos para los logros

// Definimos el tipo para los logros
type Achievement = {
  title: string;
  description: string;
  icon: JSX.Element;
  neonColor: string;
  date: string;
};

// Lista de logros (personaliza con tus propios logros)
const achievements: Achievement[] = [
  {
    title: 'Participacion en Hackathon 2023',
    description: 'Particiamos en el Hackaton de fundacion Pro-Futuro donde creamos una web con Inteligencia Artificial  para que personas con discapacidad pudieran aprender cosas',
    icon: <FaTrophy />,
    neonColor: '#ffd700', // Dorado
    date: 'Octubre 2024',
  },
  {
    title: 'Certificación en Bases de Datos',
    description: 'Completé con éxito un curso de Base de Datos y obtuve una certificación oficial de Capacitate Para el Empleo.',
    icon: <FaCertificate />,
    neonColor: '#00ffcc', // Cyan
    date: 'Junio 2023',
  },
  {
    title: 'Certificación en Diagramas de Flujo ',
    description: 'Completé con éxito un curso de Pensamiento Logico y Diagramas de Flujo y obtuve una certificación oficial de Platzi.',
    icon: <FaCertificate />,
    neonColor: '#00ffcc', // Cyan
    date: 'Junio 2023',
  },
  {
    title: 'Trabajar Con Empresas Reales',
    description: 'He Tenido la oportunidad de colaborar con empresas reales donde se le han creado web para ayudar a mejorar las ventas de la empresa.',
    icon: <FaAward />,
    neonColor: '#ff007a', // Rosa neón
    date: 'Marzo 2024',
  },
  {
    title: 'Mejor Alumno de EdgeHub',
    description: 'Finalicé mi primer semestre de mi Ingenieria en Inteligencia Artificial donde obtube el reconocimiento como mejor alumno, graduándome con honores.',
    icon: <FaGraduationCap />,
    neonColor: '#a0f', // Púrpura
    date: 'Diciembre 2024',
  },
];

function Achievements() {
  return (
    <section id="achievements" className="bg-black text-white py-16 relative overflow-hidden">
      {/* Fondo con efecto sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-80 z-0"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Título de la sección */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-200 mb-12 animate-fade-in">
          Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Logros</span>
        </h2>

        {/* Grid de logros */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_var(--neon-color)]"
              style={{ '--neon-color': achievement.neonColor } as React.CSSProperties}
            >
              {/* Ícono del logro */}
              <div className="flex justify-center mb-4">
                <div className="text-5xl text-gray-300 group-hover:text-[var(--neon-color)] transition-colors duration-300">
                  {achievement.icon}
                </div>
              </div>

              {/* Contenido del logro */}
              <h3 className="text-xl font-semibold text-white text-center group-hover:text-[var(--neon-color)] transition-colors duration-300">
                {achievement.title}
              </h3>
              <p className="mt-2 text-gray-400 text-center">{achievement.description}</p>
              <p className="mt-4 text-gray-500 text-sm text-center">{achievement.date}</p>

              {/* Borde neón al hacer hover */}
              <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-[var(--neon-color)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;