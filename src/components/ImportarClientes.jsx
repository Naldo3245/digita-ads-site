// src/components/ImportarClientes.jsx
import React from 'react';

const logos = [
  {
    nome: 'Império Som',
    url: 'https://firebasestorage.googleapis.com/v0/b/digita-ads.firebasestorage.app/o/Imperio.png?alt=media&token=e278615d-eada-4dcc-b018-6721ca295227'
  },
  {
    nome: 'Janaina Dinis',
    url: 'https://firebasestorage.googleapis.com/v0/b/digita-ads.firebasestorage.app/o/Janaina.png?alt=media&token=b3d9c409-209f-4595-96bc-2afd841c08cd'
  },
  {
    nome: 'Pizzaria Skalone',
    url: 'https://firebasestorage.googleapis.com/v0/b/digita-ads.firebasestorage.app/o/Skalone.jpg?alt=media&token=60732605-2c71-4889-a5ea-79a7634eb909'
  },
  {
    nome: 'Studio409',
    url: 'https://firebasestorage.googleapis.com/v0/b/digita-ads.firebasestorage.app/o/Studio409.png?alt=media&token=ddfa0950-7a5f-4d15-a5c9-e0bdffb2365b'
  },
  {
    nome: 'Só Baratei',
    url: 'https://firebasestorage.googleapis.com/v0/b/digita-ads.firebasestorage.app/o/S%C3%B3%20Baratei.png?alt=media&token=c9ed92b8-32a8-4a44-9805-c66931ba8c95'
  }
];

export default function ImportarClientes() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 justify-center items-center animate-fade-in">
      {logos.map((cliente, index) => (
        <div key={index} className="flex justify-center">
          <img
            src={cliente.url}
            alt={cliente.nome}
            title={cliente.nome}
            className="h-20 object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
}
