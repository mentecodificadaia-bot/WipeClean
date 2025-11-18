import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, ShieldCheck, Star } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-400 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-cyan-400 rounded-full opacity-20 animate-float" style={{animationDelay: '4s'}}></div>

      <div className="container mx-auto px-6 relative z-10 pt-24 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Conteúdo Principal */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            
            {/* Badge de Credibilidade */}
            <div className="glass-card inline-flex items-center space-x-2 px-4 py-2">
              <ShieldCheck className="w-5 h-5 text-green-400" />
              <span className="text-white text-sm font-medium">10 Anos de Experiência • 5000+ Clientes</span>
            </div>

            {/* Headline Principal */}
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Seus Sofás
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Limpos</span>,
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Protegidos</span>
              <br />
              e Livres de Ácaros
              <span className="text-cyan-400"> em 2h</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl text-gray-300 leading-relaxed">
              A única empresa em São Paulo com <strong className="text-white">tecnologia alemã a seco</strong>, 
              garantindo <strong className="text-cyan-400">99,9% de eliminação</strong> de ácaros e bactérias 
              + <strong className="text-purple-400">2 anos de proteção</strong> antimicrobiana.
            </p>

            {/* Features Rápidas */}
            <div className="flex flex-wrap gap-4">
              {[
                "🇩🇪 Tecnologia Alemã",
                "⚡ Secagem Instantânea", 
                "🛡️ Proteção 2 Anos",
                "👶 Seguro para Crianças"
              ].map((feature, index) => (
                <div key={index} className="glass-card px-4 py-2">
                  <span className="text-white text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="glass-button text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500">
                🔥 QUERO MINHA HIGIENIZAÇÃO PREMIUM
              </button>
              
              <button className="glass-card px-8 py-4 text-white font-medium hover:bg-white/20 transition-all flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Ver Como Funciona</span>
              </button>
            </div>

            {/* Prova Social Rápida */}
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-2 border-white"></div>
                ))}
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm">5000+ clientes satisfeitos</p>
              </div>
            </div>
          </div>

          {/* Visual/Vídeo */}
          <div className={`relative ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
            <div className="glass-card p-8 relative">
              
              {/* Placeholder para Vídeo/Imagem */}
              <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass-card p-4 animate-pulse">
                    <Play className="w-16 h-16 text-white fill-white" />
                  </div>
                </div>
                
                {/* Overlay com Estatísticas */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass-card p-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-cyan-400">99.9%</div>
                        <div className="text-xs text-gray-300">Eliminação</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-400">2h</div>
                        <div className="text-xs text-gray-300">Tempo</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-400">2 anos</div>
                        <div className="text-xs text-gray-300">Proteção</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elementos Decorativos */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;