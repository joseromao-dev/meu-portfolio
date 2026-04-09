import React from 'react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projetos" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12 animate-fadeInUp">
          Meus Projetos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors animate-fadeInUp">
                  {project.title}
                </h3>
                <p className="text-gray-600 line-clamp-2 animate-fadeInUp delay-100">
                  {project.description}
                </p>
                <div className="flex gap-4 pt-2 animate-fadeInUp delay-200">
                  <a 
                    href={project.link} 
                    className="flex-1 text-center py-2 bg-primary text-white text-sm font-semibold rounded hover:bg-secondary transition-all duration-300 transform hover:scale-105"
                  >
                    Ver Projeto
                  </a>
                  <a 
                    href={project.github} 
                    className="flex-1 text-center py-2 border border-primary text-primary text-sm font-semibold rounded hover:bg-accent transition-all duration-300 transform hover:scale-105"
                  >
                    Mais
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
