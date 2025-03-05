import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) return; // No hacer nada si el menú está abierto

      if (window.scrollY > lastScrollY && window.innerWidth <= 768) {
        setIsVisible(false); // Oculta el navbar solo en móviles si hace scroll hacia abajo
      } else {
        setIsVisible(true); // Muestra el navbar si hace scroll hacia arriba
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  return (
    <header
      className={`bg-gray-900 text-white fixed w-full top-0 z-20 shadow-lg transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="/" className="text-2xl md:text-3xl font-bold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Baruc Ramirez
          </span>
        </a>
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className="hidden md:flex space-x-6">
          {['Inicio', 'Sobre Mi', 'Proyectos', 'Habilidades', 'Logros'].map((item) => (
            <Link
              key={item}
              to={item === 'Inicio' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} // Ruta para cada componente
              className="text-gray-300 hover:text-blue-400 hover:shadow-[0_0_10px_#00f] transition-all duration-300 px-3 py-1 rounded"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-gray-900 absolute top-full left-0 w-full shadow-lg transition-all duration-300`}
      >
        <div className="flex flex-col items-center py-4">
          {['Inicio', 'Sobre Mi', 'Proyectos', 'Habilidades', 'Logros'].map((item) => (
            <Link
              key={item}
              to={item === 'Inicio' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} // Ruta para cada componente
              className="text-gray-300 hover:text-blue-400 hover:shadow-[0_0_10px_#00f] transition-all duration-300 py-2 w-full text-center"
              onClick={() => {
                toggleMenu();
                setIsVisible(true); // Asegurar que el navbar se mantenga visible después de cerrar el menú
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
