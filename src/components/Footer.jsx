// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#141c2b] text-white py-6 mt-10 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Digita Ads - Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
