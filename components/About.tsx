import React from 'react';
import { useScrollAnimation } from '../utils/animations';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 relative">
      <div className={`container mx-auto px-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 relative">
                <div className="absolute inset-0 bg-secondary/20 rounded-3xl blur-lg transform rotate-3 translate-y-2"></div>
                <img 
                    src="https://picsum.photos/600/400?random=99" 
                    alt="Nossa equipe" 
                    className="glass-card p-2 rounded-3xl w-full relative z-10 transform hover:-rotate-1 transition-transform duration-500"
                />
            </div>
            <div className="md:w-1/2">
                <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-1 rounded-full border border-white/10 text-sm font-bold text-secondary mb-4">
                  Nossa História
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">Mais que Limpeza, <br/><span className="text-secondary">Cuidado com seu Lar.</span></h2>
                <div className="space-y-4">
                  <p className="text-lg text-blue-100/90 leading-relaxed">
                      Fundada em 2020, a WipeClean nasceu com a missão de profissionalizar o mercado de limpeza residencial no Brasil. Acreditamos que um ambiente limpo é a base para uma vida saudável e feliz.
                  </p>
                  <p className="text-lg text-blue-100/90 leading-relaxed">
                      Valorizamos nossos profissionais com treinamento contínuo e salários acima da média do mercado, o que se reflete diretamente na qualidade e no carinho do serviço entregue na sua casa.
                  </p>
                </div>
                
                <div className="flex gap-8 mt-8 border-t border-white/10 pt-8">
                  <div>
                    <p className="text-3xl font-bold text-white">5000+</p>
                    <p className="text-sm text-blue-200">Limpezas Realizadas</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">4.9/5</p>
                    <p className="text-sm text-blue-200">Nota Média</p>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;