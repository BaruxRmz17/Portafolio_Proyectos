import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutRamirezTech: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    { title: 'Desarrollo Web', desc: 'Sitios modernos, responsivos y optimizados para tu negocio.' },
    { title: 'Apps Móviles', desc: 'Aplicaciones personalizadas para iOS y Android.' },
    { title: 'Consultoría', desc: 'Estrategias tecnológicas para impulsar tu éxito.' },
    { title: 'Soporte Técnico', desc: 'Mantenimiento y apoyo continuo para tus soluciones.' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-800 via-black to-gray-900 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Ramirez Tech</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Innovación tecnológica que transforma tus ideas en soluciones digitales excepcionales.
          </p>
          <a href="https://ramireztech.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition-all duration-300">
            Explora Nuestro Sitio
            <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold">¿Quiénes Somos?</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              <strong >Ramirez Tech</strong> es una empresa dedicada a la innovación tecnológica, liderada por <strong>Baruc Ramirez</strong>. Con más de 4 años de experiencia, ofrecemos soluciones de desarrollo web, aplicaciones móviles y consultoría tecnológica que combinan creatividad y eficiencia.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/icon.png" 
              alt="Logo de Ramirez Tech" 
              className="w-72 h-72 md:w-96 md:h-96 rounded-full shadow-lg transition-all duration-300 hover:shadow-[0_0_40px_#00f]"
            />
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-gray-900 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12">
          {[{ title: 'Nuestra Misión', desc: 'Transformar ideas en soluciones digitales innovadoras que superen las expectativas de nuestros clientes.' },
            { title: 'Nuestra Visión', desc: 'Ser líderes globales en innovación tecnológica, ofreciendo soluciones que impulsen el progreso empresarial y social.' }].map((item, index) => (
              <div key={index} className="md:w-1/2 bg-gray-900 p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl font-semibold mb-6">{item.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default AboutRamirezTech;
