import React from 'react';
import { Home, Sparkles, Truck, Check } from 'lucide-react';
import { ServiceItem } from '../types';
import { useScrollAnimation } from '../utils/animations';

const Services: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const services: ServiceItem[] = [
    {
      title: "Limpeza Padrão",
      description: "Ideal para manutenção semanal. Inclui pó, aspiração, limpeza de banheiros e cozinha.",
      icon: Home,
    },
    {
      title: "Limpeza Pesada",
      description: "Perfeita para casas que não são limpas há mais de um mês. Foco em detalhes profundos e sujeira acumulada.",
      icon: Sparkles,
      popular: true
    },
    {
      title: "Mudança (In/Out)",
      description: "Para quem está chegando ou saindo. Deixamos o imóvel pronto para a entrega das chaves.",
      icon: Truck,
    }
  ];

  return (
    <section id="services" ref={ref} className="py-20 relative">
      <div className={`container mx-auto px-6 relative z-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm bg-white/10 px-3 py-1 rounded-full border border-white/10">Nossas Soluções</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-6">
            O Serviço Ideal para Sua Necessidade
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`glass-card p-8 relative flex flex-col transition-all duration-300 hover:-translate-y-2 ${
                service.popular ? 'border-secondary/50 shadow-[0_0_30px_rgba(0,212,255,0.2)]' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-secondary to-blue-500 text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg tracking-wide">
                  MAIS POPULAR
                </div>
              )}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner ${
                service.popular 
                  ? 'bg-gradient-to-br from-primary to-secondary text-white' 
                  : 'bg-white/10 text-white'
              }`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-blue-100/80 mb-8 min-h-[80px]">{service.description}</p>
              
              <ul className="space-y-4 mb-8 text-blue-100 text-sm flex-grow">
                <li className="flex items-center gap-3">
                    <div className="bg-white/10 rounded-full p-1"><Check className="w-3 h-3 text-secondary" /></div>
                    Equipe uniformizada
                </li>
                <li className="flex items-center gap-3">
                    <div className="bg-white/10 rounded-full p-1"><Check className="w-3 h-3 text-secondary" /></div>
                    Produtos incluídos
                </li>
                <li className="flex items-center gap-3">
                    <div className="bg-white/10 rounded-full p-1"><Check className="w-3 h-3 text-secondary" /></div>
                    Seguro contra danos
                </li>
              </ul>
              
              <a href="#contact" className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${
                service.popular 
                  ? 'glass-button shadow-lg' 
                  : 'bg-white/5 text-white hover:bg-white/20 border border-white/10'
              }`}>
                Escolher {service.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;