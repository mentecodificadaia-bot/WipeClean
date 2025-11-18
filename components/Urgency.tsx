import React from 'react';
import { Timer } from 'lucide-react';
import { useScrollAnimation } from '../utils/animations';

const Urgency: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-12 relative overflow-hidden my-10">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-30"></div>
      <div className={`container mx-auto px-6 relative z-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="glass-card bg-white/10 border-white/20 flex flex-col md:flex-row items-center justify-between gap-8 p-8 backdrop-blur-xl">
          <div className="flex items-center gap-6">
            <div className="bg-white/20 p-4 rounded-full animate-pulse shadow-lg border border-white/30">
              <Timer className="w-10 h-10 text-warning-orange drop-shadow" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Oferta Especial de Primeira Limpeza</h3>
              <p className="text-blue-100 text-lg">Agende nas próximas 24 horas e ganhe <strong className="text-warning-orange bg-white/10 px-2 py-0.5 rounded">15% de desconto</strong>.</p>
            </div>
          </div>
          <a 
            href="#contact" 
            className="glass-button bg-white hover:bg-blue-50 text-primary px-10 py-4 rounded-xl font-bold shadow-lg transition-all hover:scale-105 whitespace-nowrap !border-none"
            style={{ background: 'white', color: '#0066FF' }}
          >
            Quero meu Desconto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Urgency;