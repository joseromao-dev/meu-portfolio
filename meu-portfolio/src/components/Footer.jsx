import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-dark to-[#0f172a] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">José Julante Romão</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Desenvolvedor Front-end | Analista de Dados</p>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-bold mb-4">Navegação</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#sobre" className="text-gray-400 hover:text-secondary transition-colors">Sobre Mim</a>
              <a href="#projetos" className="text-gray-400 hover:text-secondary transition-colors">Projetos</a>
              <a href="#skills" className="text-gray-400 hover:text-secondary transition-colors">Habilidades</a>
              <a href="#contato" className="text-gray-400 hover:text-secondary transition-colors">Contato</a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg font-bold mb-4">Conecte-se</h4>
            <div className="flex gap-4 justify-center md:justify-end">
              <a href="https://linkedin.com/in/jose-julante-romao" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full hover:bg-secondary transition-all duration-300 text-lg">
                💼
              </a>
              <a href="https://github.com/joseromao-dev" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full hover:bg-secondary transition-all duration-300 text-lg">
                🔗
              </a>
              <a href="mailto:jjosejulante@gmail.com" className="w-10 h-10 bg-gray-700 flex items-center justify-center rounded-full hover:bg-secondary transition-all duration-300 text-lg">
                ✉️
              </a>
            </div>
          </div>
        </div>
      
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} José Julante Romão. Todos os direitos reservados.</p>
          <p className="mt-2 text-xs">Desenvolvido com <span className="text-red-500">❤️</span> usando React e TailwindCSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
