import React from 'react';
import { FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaFigma, FaJava } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMysql, SiVsco, SiCss3, SiHtml5  } from 'react-icons/si';

// Definimos el tipo para las habilidades
type Skill = {
  name: string;
  icon: JSX.Element;
  neonColor: string;
};

// Definimos el tipo para las categorías de habilidades
type SkillCategory = {
  category: string;
  skills: Skill[];
};

// Lista de habilidades organizadas por categorías
const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'JavaScript', icon: <FaJs />, neonColor: '#f7df1e' }, // Amarillo
      { name: 'React', icon: <FaReact />, neonColor: '#61dafb' }, // Cyan
      { name: 'TypeScript', icon: <SiTypescript />, neonColor: '#3178c6' }, // Azul
      { name: 'TailwindCSS', icon: <SiTailwindcss />, neonColor: '#38bdf8' }, // Celeste
      { name: 'Css3', icon: <SiCss3 />, neonColor: '#A020F0' }, // Morado
      { name: 'HTML', icon: <SiHtml5 />, neonColor: '#FFA500' }, // Naranaj


    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, neonColor: '#68a063' }, // Verde
      { name: 'SQL', icon: <SiMysql />, neonColor: '#FFFF00'},      
      { name: 'Python', icon: <FaPython />, neonColor: '#3776ab' }, // Azul oscuro
      { name: 'Java', icon: <FaJava />, neonColor: '#f05032' }, // Azul oscuro

    ],
  },
  {
    category: 'Herramientas',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, neonColor: '#f05032' }, // Naranja
      { name: 'VS Code', icon: <SiVsco />, neonColor: '#007acc' }, // Azul
      { name: 'Figma', icon: <FaFigma />, neonColor: '#f24e1e' }, // Naranja-rojo
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-black text-white py-16 relative overflow-hidden">
      {/* Fondo con efecto sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-80 z-0"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Título de la sección */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-200 mb-12 animate-fade-in">
          Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Habilidades</span>
        </h2>

        {/* Categorías de habilidades */}
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              {/* Título de la categoría */}
              <h3 className="text-2xl md:text-3xl font-semibold text-center text-gray-300 mb-6">
                {category.category}
              </h3>

              {/* Grid de habilidades */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group bg-gray-900 p-6 rounded-lg shadow-lg transition-all duration-300 relative overflow-hidden"
                    style={{ '--neon-color': skill.neonColor } as React.CSSProperties}
                  >
                    <div className="flex flex-col items-center">
                      <div className="text-4xl text-gray-300 group-hover:text-[var(--neon-color)] transition-colors duration-300">
                        {skill.icon}
                      </div>
                      <p className="mt-2 text-gray-300 group-hover:text-[var(--neon-color)] transition-colors duration-300">
                        {skill.name}
                      </p>
                    </div>

                    {/* Contorno que se ilumina al pasar el puntero */}
                    <div className="absolute inset-0 rounded-lg border-4 border-transparent group-hover:border-[var(--neon-color)] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
