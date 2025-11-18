import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TestimonialItem } from '../types';
import { useScrollAnimation } from '../utils/animations';

const Testimonials: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      name: "Mariana Souza",
      role: "Arquiteta",
      content: "Simplesmente incrível. Cheguei em casa e parecia que tinha entrado em um hotel 5 estrelas. O cheirinho de limpeza é maravilhoso!",
      rating: 5,
      image: "https://picsum.photos/100/100?random=1"
    },
    {
      id: 2,
      name: "Roberto Almeida",
      role: "Empresário",
      content: "A equipe da WipeClean é muito profissional. Pontuais, discretos e eficientes. Recomendo para qualquer escritório.",
      rating: 5,
      image: "https://picsum.photos/100/100?random=2"
    },
    {
      id: 3,
      name: "Carla Mendes",
      role: "Mãe de 2 filhos",
      content: "Com duas crianças e um cachorro, minha casa era um caos. A WipeClean devolveu minha sanidade. O serviço de limpeza profunda é milagroso.",
      rating: 5,
      image: "https://picsum.photos/100/100?random=3"
    }
  ];

  return (
    <section id="testimonials" ref={ref} className="py-20 relative">
      <div className={`container mx-auto px-6 relative z-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16 drop-shadow-md">
          O Que Nossos Clientes Dizem
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="glass-card p-8 relative hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-white/10" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-warning-orange text-warning-orange drop-shadow-sm" />
                ))}
              </div>
              
              <p className="text-blue-50 mb-8 italic leading-relaxed opacity-90">"{item.content}"</p>
              
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-secondary/50 shadow-lg"
                />
                <div>
                  <p className="font-bold text-white text-lg">{item.name}</p>
                  <p className="text-xs text-blue-200 uppercase tracking-wide font-medium">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;