import React, { useState } from 'react';
import { Phone, MapPin, Calendar, Clock } from 'lucide-react';
import { useScrollAnimation } from '../utils/animations';

const ContactForm = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    neighborhood: '',
    service: '',
    date: '',
    time: '',
    coupon: 'PREMIUM30'
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const services = [
    'Higienização de Sofás',
    'Impermeabilização',
    'Limpeza de Carpetes', 
    'Hidratação de Couro',
    'Pacote Completo'
  ];

  const timeSlots = [
    '08:00 - 10:00',
    '10:00 - 12:00',
    '14:00 - 16:00',
    '16:00 - 18:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envio do formulário
    console.log('Form submitted:', formData);
    alert('Obrigado! Recebemos sua solicitação.');
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
      
      <div className={`container mx-auto px-6 relative z-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Agende Sua Higienização Premium
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> em 30 Segundos</span>
            </h2>
            
            {/* Progress Bar */}
            <div className="glass-card p-4 mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">Progresso</span>
                <span className="text-cyan-400 font-bold">{currentStep}/{totalSteps}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Formulário Multi-Step */}
          <div className="glass-card p-8">
            <form onSubmit={handleSubmit}>
              
              {/* Step 1: Informações Básicas */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Phone className="w-6 h-6 mr-2 text-cyan-400" />
                    Suas Informações
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Nome Completo</label>
                      <input
                        type="text"
                        className="glass-input"
                        placeholder="Digite seu nome"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">WhatsApp</label>
                      <input
                        type="tel"
                        className="glass-input"
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Bairro</label>
                    <input
                      type="text"
                      className="glass-input"
                      placeholder="Ex: Vila Madalena, Moema, etc."
                      value={formData.neighborhood}
                      onChange={(e) => setFormData({...formData, neighborhood: e.target.value})}
                      required
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Serviço */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Qual serviço você precisa?
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <label key={index} className="cursor-pointer">
                        <input
                          type="radio"
                          name="service"
                          value={service}
                          className="sr-only"
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                        />
                        <div className={`glass-card p-4 transition-all ${formData.service === service ? 'bg-blue-500/30 border-blue-400' : ''}`}>
                          <span className="text-white font-medium">{service}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Agendamento */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Calendar className="w-6 h-6 mr-2 text-cyan-400" />
                    Quando você prefere?
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Melhor Data</label>
                      <input
                        type="date"
                        className="glass-input"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">Horário Preferido</label>
                      <select
                        className="glass-input"
                        value={formData.time}
                        onChange={(e) => setFormData({...formData, time: e.target.value})}
                        required
                      >
                        <option value="">Selecione um horário</option>
                        {timeSlots.map((slot, index) => (
                          <option key={index} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  {/* Cupom de Desconto */}
                  <div className="glass-card p-4 bg-green-500/20 border-green-400">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 font-bold">🎁 CUPOM ATIVO:</span>
                      <code className="text-white font-mono bg-green-500/30 px-2 py-1 rounded">PREMIUM30</code>
                      <span className="text-green-400">- 30% OFF</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="glass-card px-6 py-3 text-white hover:bg-white/20 transition-all"
                  >
                    ← Voltar
                  </button>
                )}
                
                <div className="ml-auto">
                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="glass-button bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3"
                    >
                      Próximo →
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="glass-button bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-3 text-lg"
                    >
                      🚀 AGENDAR HIGIENIZAÇÃO PREMIUM
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* Garantias Rápidas */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: "⚡", text: "Atendimento em 24h" },
              { icon: "💰", text: "Orçamento sem compromisso" },
              { icon: "🎁", text: "30% de desconto garantido" }
            ].map((item, index) => (
              <div key={index} className="glass-card p-4 text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <span className="text-white font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;