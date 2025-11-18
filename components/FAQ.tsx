import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';
import { useScrollAnimation } from '../utils/animations';

const FAQ: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const faqs: FaqItem[] = [
    {
      question: "Eu preciso fornecer os produtos de limpeza?",
      answer: "Não! A WipeClean leva todos os equipamentos e produtos necessários, todos de alta qualidade e seguros."
    },
    {
      question: "Preciso estar em casa durante a limpeza?",
      answer: "Não é necessário. Muitos clientes nos deixam uma chave ou código de acesso. Todos os nossos profissionais são rigorosamente verificados."
    },
    {
      question: "E se eu tiver animais de estimação?",
      answer: "Amamos pets! Basta nos avisar no momento do agendamento. Nossos produtos são pet-friendly."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "O pagamento é feito de forma segura online via cartão de crédito ou PIX após o agendamento."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" ref={ref} className="py-20">
      <div className={`container mx-auto px-6 max-w-3xl transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="flex items-center justify-center gap-3 mb-12">
          <HelpCircle className="w-8 h-8 text-secondary" />
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
            Dúvidas Frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`glass-card overflow-hidden transition-all duration-300 ${openIndex === idx ? 'bg-white/15 border-secondary/50' : 'hover:bg-white/10'}`}>
              <button 
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold text-white text-lg pr-8">{faq.question}</span>
                {openIndex === idx ? <ChevronUp className="text-secondary flex-shrink-0" /> : <ChevronDown className="text-white/50 flex-shrink-0" />}
              </button>
              
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === idx ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-blue-100 leading-relaxed border-t border-white/10 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;