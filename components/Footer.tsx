import React from 'react';
import { Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="glass-card rounded-none border-x-0 border-b-0 text-slate-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-2xl font-bold text-white mb-6">
              <div className="bg-gradient-to-br from-primary to-secondary p-1.5 rounded shadow-lg">
                 <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span>WipeClean</span>
            </div>
            <p className="text-sm text-blue-200/70 leading-relaxed">
              Transformando ambientes e devolvendo seu tempo livre desde 2020. Profissionais confiáveis e resultados impecáveis para sua casa ou empresa.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Empresa</h4>
            <ul className="space-y-3 text-sm text-blue-200/70">
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Carreiras</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Blog</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Imprensa</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Serviços</h4>
            <ul className="space-y-3 text-sm text-blue-200/70">
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Limpeza Residencial</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Limpeza Comercial</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Pós-Obra</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Mudanças</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Legal</h4>
            <ul className="space-y-3 text-sm text-blue-200/70">
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-sm text-blue-200/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} WipeClean Serviços de Limpeza Ltda.</p>
          <p>Feito com carinho para sua casa brilhar.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;