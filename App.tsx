import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solution from './components/Solution';
import Services from './components/Services';
import Urgency from './components/Urgency';
import Testimonials from './components/Testimonials';
import Guarantees from './components/Guarantees';
import Comparison from './components/Comparison';
import FAQ from './components/FAQ';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans text-white selection:bg-primary selection:text-white overflow-x-hidden">
      <Header />
      <main className="relative">
        <Hero />
        <Problems />
        <Solution />
        <Services />
        <Urgency />
        <Comparison />
        <Testimonials />
        <Guarantees />
        <FAQ />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;