// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="text-center py-20 px-4 bg-gradient-to-r from-blue-50 to-white scroll-mt-20"
    >
      <h2 className="text-4xl font-bold text-blue-600 mb-4">
        Transformamos sua presença digital
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        A Digita Ads é especializada em tráfego pago, criação de sites profissionais e gestão de
        anúncios no Google e Meta. Conectamos marcas a resultados reais com estratégias
        inteligentes e criativas.
      </p>
      <a
        href="https://wa.me/5511983012748"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
          Fale com um especialista
        </button>
      </a>
    </section>
  );
};

export default Home;
