import React from 'react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-accent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4 animate-fadeInUp">
          Entre em Contato
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg animate-fadeInUp delay-100">Estou sempre disponível para novas oportunidades e projetos</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Links de Contato */}
          <div className="space-y-6 flex flex-col justify-center animate-fadeInLeft">
            <div className="flex items-center gap-4 p-5 rounded-xl bg-white border-2 border-gray-100 hover:border-primary hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInUp delay-200">
              <div className="w-14 h-14 bg-primary text-white flex items-center justify-center rounded-lg text-2xl shadow-md">
                ✉️
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Email</p>
                <a href="mailto:jjosejulante@gmail.com" className="text-lg font-semibold text-dark hover:text-primary transition-colors">
                  jjosejulante@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 rounded-xl bg-white border-2 border-gray-100 hover:border-secondary hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInUp delay-300">
              <div className="w-14 h-14 bg-secondary text-white flex items-center justify-center rounded-lg text-2xl shadow-md">
                💼
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">LinkedIn</p>
                <a href="https://linkedin.com/in/jose-julante-romao" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-secondary hover:text-primary transition-colors">
                  José Julante Romão
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 rounded-xl bg-white border-2 border-gray-100 hover:border-dark hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInUp delay-400">
              <div className="w-14 h-14 bg-dark text-white flex items-center justify-center rounded-lg text-2xl shadow-md">
                🔗
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">GitHub</p>
                <a href="https://github.com/joseromao-dev" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-dark hover:text-primary transition-colors">
                  github.com/joseromao-dev
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 rounded-xl bg-white border-2 border-gray-100 hover:border-primary hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInUp delay-500">
              <div className="w-14 h-14 bg-primary text-white flex items-center justify-center rounded-lg text-2xl shadow-md">
                📱
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Telefone</p>
                <a href="tel:+244938320134" className="text-lg font-semibold text-dark hover:text-primary transition-colors">
                  +244 938 320 134
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 rounded-xl bg-white border-2 border-gray-100 hover:border-primary hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fadeInUp">
              <div className="w-14 h-14 bg-primary text-white flex items-center justify-center rounded-lg text-2xl shadow-md">
                📍
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Localização</p>
                <p className="text-lg font-semibold text-dark">
                  Lunda, Angola
                </p>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <form className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 space-y-5 animate-fadeInRight">
            <div className="animate-fadeInUp delay-200">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Nome Completo</label>
              <input 
                type="text" 
                placeholder="Seu nome" 
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                required
              />
            </div>
            <div className="animate-fadeInUp delay-300">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                placeholder="seu.email@exemplo.com" 
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all"
                required
              />
            </div>
            <div className="animate-fadeInUp delay-400">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mensagem</label>
              <textarea 
                placeholder="Sua mensagem aqui..." 
                rows="4"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all resize-none"
                required
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:translate-y-0 transform hover:scale-105 animate-fadeInUp delay-500"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
