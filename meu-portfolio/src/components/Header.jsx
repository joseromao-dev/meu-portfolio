import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1e3a8a] text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold tracking-tight cursor-default">José Julante Romão</span>
          </div>
          
          {/* Menu Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 text-sm font-medium">
              <a href="#sobre" className="hover:text-blue-300 relative group py-2">
                Sobre
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#projetos" className="hover:text-blue-300 relative group py-2">
                Projetos
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#skills" className="hover:text-blue-300 relative group py-2">
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contato" className="hover:text-blue-300 relative group py-2">
                Contato
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>

          {/* Menu Hamburger Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#1e3a8a] border-t border-blue-600 animate-slideDown">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#sobre"
              onClick={handleLinkClick}
              className="text-white hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all"
            >
              Sobre
            </a>
            <a
              href="#projetos"
              onClick={handleLinkClick}
              className="text-white hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all"
            >
              Projetos
            </a>
            <a
              href="#skills"
              onClick={handleLinkClick}
              className="text-white hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all"
            >
              Skills
            </a>
            <a
              href="#contato"
              onClick={handleLinkClick}
              className="text-white hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all"
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
