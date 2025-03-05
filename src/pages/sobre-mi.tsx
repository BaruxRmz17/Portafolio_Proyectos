import { FaDownload } from 'react-icons/fa'; // Para un botón de descargar CV
import { useState } from 'react';
import React from 'react';

function About() {
  // Estado para manejar la interacción de las fotos
  const [activePhoto, setActivePhoto] = useState(0);

  // Lista de fotos (reemplaza las URLs con las rutas a tus imágenes)
  const photos = [
    '/img1.png',
    '/img2.png'  ];

  // Función para cambiar la foto activa
  const handlePhotoChange = (index: number) => {
    setActivePhoto(index);
  };

  return (
    <section id="about" className="bg-black text-white py-16 relative overflow-hidden">
      {/* Fondo con efecto sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-80 z-0"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Título de la sección */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-200 mb-12 animate-fade-in">
          Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Mí</span>
        </h2>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna de texto */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Mi nombre es <span className="font-semibold text-blue-400">Baruc Ramirez</span>, un desarrollador web con más de 4 años de experiencia en la creación de aplicaciones modernas y funcionales. Me apasiona transformar ideas en soluciones digitales que no solo sean eficientes, sino también visualmente impactantes. Actualmente, estoy cursando Ingeniería en Inteligencia Artificial y me especializo en tecnologías como Python, Supabase, Flutter, React, Astro.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              A lo largo de mi carrera, he trabajado en proyectos que van desde aplicaciones web interactivas hasta plataformas empresariales, utilizando tecnologías como React, TypeScript y TailwindCSS. Mi enfoque se centra en escribir código limpio, optimizado y escalable, mientras mantengo una comunicación efectiva con equipos y clientes. Estoy también enfocado en obtener certificaciones en bases de datos, lo que me permite tener un conocimiento más profundo en la gestión y optimización de datos.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Además de programar, disfruto explorar nuevas tecnologías, compartir conocimientos a través de comunidades de desarrollo y trabajar en proyectos personales que me desafíen. Estoy comprometido con el aprendizaje continuo y con ofrecer soluciones de alta calidad que superen las expectativas. Mi objetivo es seguir creciendo como desarrollador y profesional en Inteligencia Artificial.
            </p>


            {/* Botón de descargar CV */}
            <div className="mt-8">
              <a
                href="/path/to/your/cv.pdf" // Reemplaza con la ruta a tu CV
                download
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 hover:shadow-[0_0_15px_#00f] transition-all duration-300"
              >
                Descargar CV <FaDownload />
              </a>
            </div>
          </div>

          {/* Columna de fotos interactivas */}
          <div className="flex flex-col items-center">
            {/* Foto principal */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src={photos[activePhoto]}
                alt="Foto de [Tu Nombre]"
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              {/* Overlay con efecto neón al hacer hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">¡Hola, soy yo!</p>
              </div>
            </div>

            {/* Miniaturas de fotos */}
            <div className="mt-6 flex gap-4">
              {photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => handlePhotoChange(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    activePhoto === index ? 'border-blue-400 shadow-[0_0_10px_#00f]' : 'border-gray-600'
                  }`}
                >
                  <img
                    src={photo}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Datos adicionales (interactivos) */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-8">
            Algunos datos sobre mí
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="group bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-[0_0_15px_#00ffcc] transition-all duration-300">
              <h4 className="text-xl font-semibold text-white group-hover:text-[#00ffcc] transition-colors duration-300">
                Experiencia
              </h4>
              <p className="mt-2 text-gray-400">Mas de 4 años trabajando como desarrollador web y movil. Ademas me encuentro cursando La Ingenieria en Inteligencia Artificial en EdgeHub. </p>
            </div>
            <div className="group bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-[0_0_15px_#00f] transition-all duration-300">
              <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                Proyectos
              </h4>
              <p className="mt-2 text-gray-400">He tenido gran cantidad de proyectos completados con éxito</p>
            </div>
            <div className="group bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-[0_0_15px_#a0f] transition-all duration-300">
              <h4 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                Colaboraciones
              </h4>
              <p className="mt-2 text-gray-400">He trabajado con grandes empresas algunas de ellas son "Ococalli", "Israel Bienes Racies", "Rehielete La Paz B.C.S", "Obelie Pasteleria", "Tacos de Colores Yorch".</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;