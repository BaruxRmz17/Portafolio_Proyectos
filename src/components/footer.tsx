import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 relative overflow-hidden">
      {/* Fondo con efecto sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-transparent opacity-90 z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Baruc Ramirez</span>. Todos los derechos reservados.
          </p>

          <div className="flex gap-6">
            <a
              href="https://github.com/BaruxRmz17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#00ffcc] hover:shadow-[0_0_10px_#00ffcc] transition-all duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 hover:shadow-[0_0_10px_#00f] transition-all duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=barucramirez0617@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 hover:shadow-[0_0_10px_#a0f] transition-all duration-300"
            >
              <FaEnvelope size={24} />
            </a>

          </div>
        </div>

        <div className="mt-6 border-t border-gray-800 pt-4 text-center">
          <p className="text-gray-500 text-xs">
            Hecho con <span className="text-red-500">♥</span> usando React, TailwindCSS y TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;