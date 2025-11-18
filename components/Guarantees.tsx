import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useScrollAnimation } from '../utils/animations';

const Guarantees: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 relative">
      <div className={`container mx-auto px-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="glass-card p-10 text-center relative overflow-hidden max-w-4xl mx-auto border-secondary/30">
          {/* Background shine effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-secondary/10 blur-[60px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-white/10 to-white/5 rounded-full shadow-lg mb-6 border border-white/10 backdrop-blur-md">
              <ShieldCheck className="w-12 h-12 text-secondary drop-shadow-md" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Garantia de Satisfação 100%</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-0 leading-relaxed">
              Se você não ficar satisfeito com qualquer aspecto da nossa limpeza, avise-nos em até 24 horas e voltaremos para corrigir sem custo adicional. Sua paz de espírito é nossa prioridade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantees;