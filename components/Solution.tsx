import React from 'react';
import { CheckCircle, FlaskConical, ShieldCheck, Clock } from 'lucide-react';
import { useScrollAnimation } from '../utils/animations';

const Solution = () => {
  const { ref, isVisible } = useScrollAnimation();

  const features = [
    {
      icon: "🇩🇪",
      title: "Tecnologia Alemã Exclusiva",
      description: "Sistema de extração a seco mais avançado do mundo"
    },
    {
      icon: "✅",
      title: "Higienização a Seco",
      description: "Sem molhar - use seus móveis imediatamente"
    },
    {
      icon: "🦠",
      title: "99,9% de Eliminação",
      description: "Ácaros, bactérias e microrganismos"
    },
    {
      icon: "🛡️",
      title: "Proteção 2 Anos",
      description: "Barreira antimicrobiana de longa duração"
    },
    {
      icon: "💧",
      title: "Impermeabilização Premium",
      description: "Proteção contra manchas futuras inclusa"
    },
    {
      icon: "👶",
      title: "100% Seguro",
      description: "Atóxico para crianças e pets"
    }
  ];

  const process = [
    {
      step: "01",
      title: "ANÁLISE",
      description: "Inspeção detalhada e teste de tecido",
      icon: <FlaskConical className="w-8 h-8" />
    },
    {
      step: "02", 
      title: "HIGIENIZAÇÃO",
      description: "Tecnologia alemã de extração profunda",
      icon: <Clock className="w-8 h-8" />
    },
    {
      step: "03",
      title: "PROTEÇÃO",
      description: "Aplicação de barreira antimicrobiana",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      step: "04",
      title: "IMPERMEABILIZAÇÃO",
      description: "Proteção contra manchas futuras",
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  return (
    <section id="solution" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-400 rounded-full opacity-10 animate-float" style={{animationDelay: '3s'}}></div>

      <div className={`container mx-auto px-6 relative z-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="glass-card inline-flex items-center space-x-2 px-6 py-3 mb-6">
            <FlaskConical className="w-6 h-6 text-blue-400" />
            <span className="text-blue-400 font-semibold">TECNOLOGIA AVANÇADA</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Apresentamos o
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Método WIPECLEAN</span>
            <br />
            A Única Higienização Premium Que
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Elimina 99,9%</span>
            <br />
            Dos Microrganismos Sem Molhar!
          </h2>
        </div>

        {/* USP Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-6 text-center hover:scale-105 transition-all duration-300"
              style={{transitionDelay: `${index * 100}ms`}}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Processo em 4 Etapas */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Nosso Processo Tecnológico em
            <span className="text-cyan-400"> 4 Etapas</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="glass-card p-6 text-center h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="text-blue-400 mb-4 mt-4 flex justify-center">
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                
                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Pronto Para Experimentar a
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Tecnologia Mais Avançada</span>
              <br />
              Em Higienização de Estofados?
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass-button bg-gradient-to-r from-blue-500 to-cyan-500 text-lg px-8 py-4">
                🚀 QUERO A TECNOLOGIA ALEMÃ
              </button>
              
              <button className="glass-card px-8 py-4 text-white font-medium hover:bg-white/20 transition-all">
                📞 Falar com Especialista
              </button>
            </div>
            
            {/* Garantia Rápida */}
            <div className="mt-6 flex items-center justify-center space-x-2 text-green-400">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-semibold">Garantia Total de Satisfação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;