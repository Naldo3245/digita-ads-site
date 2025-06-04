// src/components/EmailContactForm.jsx
import React, { useState } from 'react';

export default function EmailContactForm() {
  const [form, setForm] = useState({
    email: '',
    whatsapp: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEnviar = (e) => {
    e.preventDefault();
    const { email, whatsapp, mensagem } = form;

    const mailto = `mailto:adsdigita@gmail.com?subject=Contato via site&body=Email: ${email}%0AWhatsApp: ${whatsapp}%0AMensagem: ${mensagem}`;
    window.location.href = mailto;
  };

  return (
    <section className="bg-white shadow-md p-8 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Fale com a Digita Ads</h2>
      <form onSubmit={handleEnviar} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="text"
          name="whatsapp"
          placeholder="WhatsApp com DDD"
          value={form.whatsapp}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <textarea
          name="mensagem"
          rows="4"
          placeholder="Descreva seu projeto ou dúvida"
          value={form.mensagem}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded font-semibold"
          >
            Enviar Mensagem
          </button>
        </div>
      </form>
    </section>
  );
}
