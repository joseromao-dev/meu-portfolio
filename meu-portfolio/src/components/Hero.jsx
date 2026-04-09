import React from 'react';
import perfil from '../assets/perfil.png';

const Hero = () => {
  return (
    <section id="sobre" className="pt-24 pb-16 px-4 md:px-8 bg-gradient-to-b from-white to-[#f3f4f6]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#1e3a8a] shadow-xl animate-float shrink-0 animate-fadeInLeft">
          <img 
            src={perfil} 
            alt="José Julante Romão" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left space-y-6 animate-fadeInRight">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1e3a8a] animate-fadeInUp">
            José Julante Romão
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium animate-fadeInUp delay-100">
            Desenvolvedor TI | Front-end | Analista de Dados
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl animate-fadeInUp delay-200">
            Profissional de TI com experiência em desenvolvimento front-end (Laravel, React.js, Next.js) e suporte técnico (Help Desk). Atualmente focado em análise e visualização de dados (SQL, Python, Power BI) para suporte na tomada de decisão.
          </p>
          <div className="text-lg text-gray-600 font-medium flex flex-col gap-2 animate-fadeInUp delay-300">
            <p>📍 Lunda, Angola - Hoji ya henda</p>
            <p>📞 +244 938 320 134</p>
          </div>
          <div className="pt-4 animate-fadeInUp delay-400">
            <a 
              href="#projetos" 
              className="inline-block px-8 py-3 bg-[#1e3a8a] text-white font-semibold rounded-lg shadow-md hover:bg-[#3b82f6] hover:scale-110 transition-all duration-300 active:scale-95 animate-pulse-glow"
            >
              Ver Projetos ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
