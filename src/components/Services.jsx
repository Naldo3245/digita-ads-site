// src/components/Services.jsx
import React from 'react';

const services = [
  {
    title: 'Tráfego Pago Google e Meta',
    description: 'Campanhas inteligentes para atrair clientes qualificados no Google Ads e Meta Ads.',
    icon: '💼',
  },
  {
    title: 'Criação de Sites Profissionais',
    description: 'Sites modernos, rápidos e responsivos com foco em conversão e performance.',
    icon: '💻',
  },
  {
    title: 'Design de Logotipo',
    description: 'Identidade visual marcante para destacar sua marca no mercado.',
    icon: '🎨',
  },
  {
    title: 'Gestão de Negócios Online',
    description: 'Configurações de Google Meu Negócio, iFood, domínio e hospedagem.',
    icon: '🛠️',
  },
  {
    title: 'Criação de Cardápios Digitais',
    description: 'Cardápios práticos, atrativos e atualizados para restaurantes, pizzarias e delivery.',
    icon: '🍕',
  },
  {
    title: 'Consultoria para E-commerce',
    description: 'Apoio completo para vender mais em marketplaces e loja própria.',
    icon: '🛒',
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Nossos Serviços</h2>
        <p className="text-gray-600 mb-12">
          Soluções completas para transformar sua presença digital em resultados reais.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-left"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
