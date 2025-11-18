import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#services' },
    { name: 'Como Funciona', href: '#solution' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-card rounded-none border-t-0 border-x-0 py-3 bg-opacity-80' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-2xl font-bold text-white">
          <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg shadow-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="tracking-tight">WipeClean</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-medium text-blue-100 hover:text-white transition-colors hover:drop-shadow-md text-sm uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="glass-button !py-2 !px-6 !text-sm"
          >
            Orçamento Grátis
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-card rounded-none border-t border-white/10 py-6 px-6 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-white font-medium py-3 border-b border-white/5 hover:bg-white/5 px-4 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="glass-button w-full text-center mt-4"
            onClick={() => setIsOpen(false)}
          >
            Solicitar Orçamento
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;