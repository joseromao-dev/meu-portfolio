import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Desenvolvimento",
      skills: ["React.js", "Next.js", "Laravel", "TailwindCSS", "Vite"]
    },
    {
      title: "Data Analytics",
      skills: ["SQL", "Python", "Power BI", "Pandas", "Excel"]
    },
    {
      title: "TI / Suporte",
      skills: ["Help Desk", "Suporte de TI", "Hardware", "Windows Server"]
    },
    {
      title: "Idiomas",
      skills: ["Inglês (Intermediário)", "Português (Nativo)"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-accent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Minhas Habilidades
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:shadow-2xl hover:border-primary transition-all duration-300">
              <h3 className="text-lg font-bold text-dark mb-4 border-b-2 border-primary pb-2 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded-full border border-secondary/30 hover:bg-secondary hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
