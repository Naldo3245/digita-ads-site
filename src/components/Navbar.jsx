import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logotipo da Digita Ads */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/pdv-janaina-diniz.appspot.com/o/Digita%20Ads.png?alt=media"
            alt="Logotipo Digita Ads"
            className="h-10 w-auto"
          />
        </a>

        {/* Menu de Navegação */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-blue-600 transition">Início</a></li>
          <li><a href="#servicos" className="hover:text-blue-600 transition">Serviços</a></li>
          <li><a href="#projetos" className="hover:text-blue-600 transition">Projetos</a></li>
          <li><a href="#sobre" className="hover:text-blue-600 transition">Sobre</a></li>
          <li><a href="#contato" className="hover:text-blue-600 transition">Contato</a></li>
        </ul>

        {/* Botão WhatsApp (mobile e desktop) */}
        <a
          href="https://wa.me/5511983012748"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition"
        >
          WhatsApp
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
