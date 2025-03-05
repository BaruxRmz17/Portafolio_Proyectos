import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Íconos para GitHub y enlace externo

// Definimos el tipo para los proyectos
type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
};

// Lista de proyectos (puedes personalizarla con tus propios proyectos)
const projects: Project[] = [
  {
    title: 'Aplicación de Bienes Raices',
    description: 'Una pagina web la cual ayua a gestionar la venta de casas y terrenos, ademas ayuda a la comunicacion entre usuarios y el vendedor y con la oportunidad de poder dejar comentarios.',
    image: '/web1.png', // Reemplaza con la ruta a tu imagen
    technologies: ['React', 'TypeScript', 'Supabase', 'TailwindCSS'],
    githubLink: 'https://github.com/BaruxRmz17/web_bienes_raices_I.git',
    liveLink: 'https://bienesraicesisrael.netlify.app/',
  },
  {
    title: 'Portafolio Personal',
    description: 'Mi propio portafolio web, diseñado con un tema oscuro y efectos neón. Muestra mis proyectos, habilidades y logros de manera interactiva.',
    image: '/web2.png', // Reemplaza con la ruta a tu imagen
    technologies: ['React', 'TailwindCSS', 'TypeScript'],
    liveLink: 'https://portafoliobaruc.netlify.app',
    githubLink: 'https://github.com/tuusuario/portfolio',
  },
  {
    title: 'Colegio Rehielete La Paz',
    description: 'Una web donde se muestra la oferta academica del jardin. Ademas se muestra la ubicacion de las escuelas, caractirizticas, uniformes y de mas',
    image: '/web4.png', // Reemplaza con la ruta a tu imagen
    technologies: ['TypeScript', 'React', 'TailwindCSS'],
    githubLink: 'https://github.com/BaruxRmz17/web_rehilete.git',
  },
  {
    title: 'Punto de Venta Barberia',
    description: 'Este fue un punto de venta donde se registraban las ventas, productos, clientes y empleados. Ademas se puede hacer el corte de caja de cada empleado.',
    image: '/web3.png', // Reemplaza con la ruta a tu imagen
    technologies: ['TypeScript', 'React', 'Supabase', 'TailwindCSS'],
    liveLink: 'https://puntobarberpelitos.netlify.app',
    githubLink: 'https://github.com/BaruxRmz17/PuntoBarber_Pelitos.git',

  },
  {
    title: 'Ococalli Logistica',
    description: 'Esta fue una pagina donde el dueño de Ococalli puede tener una mejor logistica de esta manera ayuda a eficientar sus tiempos y un mayor registro de sus ventas y clientes.',
    image: '/web5.png', // Reemplaza con la ruta a tu imagen
    technologies: ['TypeScript', 'React', 'Supabase', 'TailwindCSS'],
    liveLink: 'https://ococallilogistica.netlify.app/',
    githubLink: 'https://github.com/yosoyemi/ococalli-logistica.git',

  },
  {
    title: 'PastList',
    description: 'Es una Aplicacion movil realizada en Flutter con la finalidad de que a los alumnos y profesores les sea mas facil el pasar lista a los alumnos.',
    image: '/web5.png', // Reemplaza con la ruta a tu imagen
    technologies: ['Flutter', 'Dart', 'Firebase'],
    githubLink: 'https://github.com/AndreyyMunoz/Pass_List_168.git',

  },
];

function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-16 relative overflow-hidden">
      {/* Fondo con efecto sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-80 z-0"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Título de la sección */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-200 mb-12 animate-fade-in">
          Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Proyectos</span>
        </h2>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#00ffcc]"
            >
              {/* Imagen del proyecto */}
              <div className="relative w-full h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                />
                {/* Overlay con efecto neón */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Contenido de la card */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white group-hover:text-[#00ffcc] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-400">{project.description}</p>

                {/* Tecnologías usadas */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full group-hover:bg-gray-700 group-hover:text-blue-400 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enlaces */}
                <div className="mt-6 flex gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#00ffcc] hover:scale-110 transition-all duration-300"
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-blue-400 hover:scale-110 transition-all duration-300"
                    >
                      <FaExternalLinkAlt size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;