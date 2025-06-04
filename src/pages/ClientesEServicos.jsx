import React from 'react';
import Services from '../components/Services';
import ClientesCarousel from '../components/ClientesCarousel';
import EmailContactForm from '../components/EmailContactForm';

export default function ClientesEServicos() {
  return (
    <div className="space-y-16">
      {/* Seção de Serviços */}
      <section id="services" className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Nossos Serviços</h2>
          <p className="text-center text-gray-600 mb-10">Confira tudo que a Digita Ads pode fazer por você</p>
          <Services />
        </div>
      </section>

      {/* Seção de Clientes */}
      <ClientesCarousel />

      {/* Formulário de Contato */}
      <section id="contact" className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <EmailContactForm />
        </div>
      </section>
    </div>
  );
}
