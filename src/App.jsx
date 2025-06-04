// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ClientesEServicos from './pages/ClientesEServicos';
import WhatsappButton from './components/WhatsappButton';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <ClientesEServicos />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  );
}

export default App;
