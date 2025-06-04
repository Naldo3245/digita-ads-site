// src/components/ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ email: '', whatsapp: '', assunto: '' });
  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simula envio (ex: via backend ou EmailJS)
    try {
      const params = new URLSearchParams(form);
      window.open(`mailto:adsdigita@gmail.com?subject=Contato via site Digita Ads&body=E-mail: ${form.email}%0AWhatsApp: ${form.whatsapp}%0AAssunto: ${form.assunto}`);
      setMensagem('Mensagem enviada com sucesso!');
      setForm({ email: '', whatsapp: '', assunto: '' });
    } catch (error) {
      setMensagem('Erro ao enviar. Tente novamente.');
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Solicite contato da Digita Ads</h2>

        {mensagem && (
          <div className="text-center mb-4 text-green-700 font-semibold">{mensagem}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            name="whatsapp"
            placeholder="Seu WhatsApp"
            value={form.whatsapp}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          />
          <textarea
            name="assunto"
            placeholder="Descreva sua necessidade"
            rows="4"
            value={form.assunto}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded"
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
