import React from 'react';
import { Check, X } from 'lucide-react';
import { ComparisonFeature } from '../types';
import { useScrollAnimation } from '../utils/animations';

const Comparison: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const features: ComparisonFeature[] = [
    { feature: "Profissionais Segurados", wipeClean: true, others: "Variável", freelancers: false },
    { feature: "Checklist de 50 pontos", wipeClean: true, others: false, freelancers: false },
    { feature: "Produtos Inclusos", wipeClean: true, others: true, freelancers: false },
    { feature: "Garantia de Satisfação", wipeClean: true, others: "Algumas", freelancers: false },
    { feature: "Pagamento Online Seguro", wipeClean: true, others: true, freelancers: false },
    { feature: "Atendimento 24/7", wipeClean: true, others: false, freelancers: false },
  ];

  const renderValue = (val: boolean | string, isWipeClean = false) => {
    if (val === true) return <div className="flex justify-center"><div className={`rounded-full p-1 ${isWipeClean ? 'bg-success-green/20' : 'bg-white/5'}`}><Check className={`w-5 h-5 font-bold ${isWipeClean ? 'text-success-green' : 'text-white/60'}`} /></div></div>;
    if (val === false) return <div className="flex justify-center"><X className="w-6 h-6 text-error-red/60" /></div>;
    return <div className="text-blue-100/70 font-medium text-sm">{val}</div>;
  };

  return (
    <section ref={ref} className="py-20">
      <div className={`container mx-auto px-6 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Por que escolher a <span className="text-secondary">WipeClean</span>?
        </h2>

        <div className="glass-card overflow-hidden border-0 p-0 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-6 px-8 text-blue-100 font-bold uppercase text-sm tracking-wider">Benefícios</th>
                  <th className="py-6 px-8 bg-gradient-to-b from-primary/20 to-transparent text-white text-xl font-bold w-1/4 backdrop-blur-sm border-x border-white/5 shadow-inner">WipeClean</th>
                  <th className="py-6 px-8 text-white/60 font-semibold w-1/4">Empresas Comuns</th>
                  <th className="py-6 px-8 text-white/60 font-semibold w-1/4">Autônomos</th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                    <td className="py-5 px-8 text-white font-medium group-hover:text-blue-200 transition-colors">{item.feature}</td>
                    <td className="py-5 px-8 bg-primary/5 text-center border-x border-white/5 backdrop-blur-[2px]">
                      {renderValue(item.wipeClean, true)}
                    </td>
                    <td className="py-5 px-8 text-center">{renderValue(item.others)}</td>
                    <td className="py-5 px-8 text-center">{renderValue(item.freelancers)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;