import React from 'react';
import { Clock, Frown, AlertTriangle } from 'lucide-react';
import { useScrollAnimation } from '../utils/animations';

const Problems: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const problems = [
    {
      icon: Clock,
      title: "Fim de Semana Perdido",
      description: "Você passa horas esfregando e limpando em vez de aproveitar seu tempo livre com a família e amigos."
    },
    {
      icon: AlertTriangle,
      title: "Alergias e Poeira",
      description: "A limpeza superficial não remove ácaros e poeira profunda, prejudicando a saúde da sua família."
    },
    {
      icon: Frown,
      title: "Estresse Constante",
      description: "Chegar em casa depois de um dia cansativo e encontrar bagunça e sujeira aumenta sua ansiedade."
    }
  ];

  return (
    <section ref={ref} className="py-20 relative">
      <div className={`container mx-auto px-6 relative z-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">
            Cansado de gastar sua vida limpando?
          </h2>
          <p className="text-lg text-blue-100">
            Você merece mais do que passar seus dias de folga com uma vassoura na mão. Identifique-se com algum desses problemas?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <div key={index} className="glass-card p-8 hover:bg-white/15 group transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 border border-white/10 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8 text-red-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center md:text-left group-hover:text-secondary transition-colors">
                {item.title}
              </h3>
              <p className="text-blue-100/80 leading-relaxed text-center md:text-left">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;