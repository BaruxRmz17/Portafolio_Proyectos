import React from 'react';
import { FaGithub, FaLinkedin, FaCode, FaJs, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiFlutter, SiMysql, SiDart } from 'react-icons/si';

function Home() {
  const languages = [
    { name: 'JavaScript', icon: <FaJs />, neonColor: '#f7df1e', percentage: 70 },
    { name: 'React', icon: <FaReact />, neonColor: '#61dafb', percentage: 60 },
    { name: 'Node.js', icon: <FaNodeJs />, neonColor: '#68a063', percentage: 60 },
    { name: 'TypeScript', icon: <SiTypescript />, neonColor: '#3178c6', percentage: 60 },
    { name: 'TailwindCSS', icon: <SiTailwindcss />, neonColor: '#38bdf8', percentage: 60 },
    { name: 'Python', icon: <FaPython />, neonColor: '#3776ab', percentage: 90 },
    { name: 'Flutter', icon: <SiFlutter />, neonColor: '#02569B', percentage: 50 },
    { name: 'Dart', icon: <SiDart />, neonColor: '#0175C2', percentage: 50 },
    { name: 'SQL', icon: <SiMysql />, neonColor: '#FFFF00', percentage: 90 },
  ];

  return (
    <section id="home" className="bg-black text-white flex flex-col px-4 py-12 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-80 z-0"></div>
      
      {/* Encabezado fijo en móviles */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mt-16 sticky top-0 bg-black/95 backdrop-blur-sm md:static md:bg-transparent">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Baruc Ramirez</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-300">
          Desarrollador | Creador | Apasionado por la tecnología
        </p>
        <div className="mt-8 flex justify-center gap-4 pb-4 md:pb-0">
          <a href="/Proyectos" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300">
            Ver Proyectos
          </a>
          <a href="/sobre-mi" className="border-2 border-purple-500 text-purple-500 px-6 py-3 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
            Sobre mí
          </a>
        </div>
      </div>

      {/* Lenguajes y Tecnologías */}
      <div className="relative z-10 mt-12 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-200">Lenguajes y Tecnologías</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {languages.map((language, index) => (
            <div key={index} className="group bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-[0_0_15px_var(--neon-color)] transition-all duration-300" style={{ '--neon-color': language.neonColor }}>
              <div className="flex flex-col items-center">
                <div className="text-4xl text-gray-300 group-hover:text-[var(--neon-color)] transition-colors duration-300">
                  {language.icon}
                </div>
                <p className="mt-2 text-gray-300 group-hover:text-[var(--neon-color)] transition-colors duration-300">
                  {language.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mis Habilidades */}
      <div className="relative z-10 mt-12 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-200">Mis Habilidades</h2>
        <p className="text-gray-400 text-lg mt-4">Soy un apasionado del desarrollo de software con experiencia en múltiples tecnologías.</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {languages.map((language, index) => (
            <div key={index} className="group bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-[0_0_15px_var(--neon-color)] transition-all duration-300" style={{ '--neon-color': language.neonColor }}>
              <div className="flex flex-col items-center">
                <div className="text-4xl text-gray-300 group-hover:text-[var(--neon-color)] transition-colors duration-300">
                  {language.icon}
                </div>
                <p className="mt-2 text-gray-300 group-hover:text-[var(--neon-color)] transition-colors duration-300">
                  {language.name}
                </p>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2 relative">
                  <div className="bg-[var(--neon-color)] h-2 rounded-full" style={{ width: `${language.percentage}%` }}></div>
                </div>
                <p className="text-gray-400 mt-1">{language.percentage}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Card de GitHub Mejorada - Corregida */}
      <div className="relative z-10 mt-12 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-200">Mi GitHub</h2>
        <div className="mt-6">
          <a
            href="https://github.com/BaruxRmz17"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 border-4 border-transparent group-hover:border-blue-500 group-hover:ring-4 group-hover:ring-blue-500"
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white">
              <FaGithub className="text-6xl" />
              <p className="mt-4 text-2xl font-semibold">Visítame en GitHub</p>
              <p className="mt-2 text-md font-light opacity-80">
                Explora mis proyectos, contribuciones y más.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;