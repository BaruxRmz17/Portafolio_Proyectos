import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Función para navegar y desplazar al inicio con animación
  const handleNavigation = (path: string) => {
    navigate(path); // Navega a la ruta
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplazamiento suave
    }, 100); // Retraso de 100ms para que la nueva página cargue
    setIsOpen(false); // Cierra el menú móvil si está abierto
  };

  // Lista de opciones del menú, incluyendo "Ramirez Tech"
  const menuItems = ['Inicio', 'Sobre Mi', 'Proyectos', 'Habilidades', 'Logros', 'Ramirez Tech'];

  return (
    <header className="bg-gray-900 text-white fixed w-full top-0 z-20 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a
          href="/"
          className="text-2xl md:text-3xl font-bold tracking-tight"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation('/');
          }}
        >
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
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item === 'Inicio' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              className="text-gray-300 hover:text-blue-400 hover:shadow-[0_0_10px_#00f] transition-all duration-300 px-3 py-1 rounded"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(
                  item === 'Inicio' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`
                );
              }}
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
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item === 'Inicio' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
              className="text-gray-300 hover:text-blue-400 hover:shadow-[0_0_10px_#00f] transition-all duration-300 py-2 w-full text-center"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(
                  item === 'Inicio' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`
                );
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