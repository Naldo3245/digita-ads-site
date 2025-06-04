// src/components/ClientesCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const logos = [
  {
    nome: "Império Som",
    url: "https://firebasestorage.googleapis.com/v0/b/digita-ads.firebasestorage.app/o/Imp%C3%A9rio%20Som.png?alt=media&token=fcef0a6f-90da-4846-8bee-80fc427082bb"
  },
  {
    nome: "Janaina Diniz",
    url: "https://firebasestorage.googleapis.com/v0/b/digita-ads.firebasestorage.app/o/Janaina%20Diniz.png?alt=media&token=ab0700d8-7ae2-4f0d-ad6b-1e51ca210448"
  },
  {
    nome: "Pizzaria Skalone",
    url: "https://firebasestorage.googleapis.com/v0/b/digita-ads.firebasestorage.app/o/Skalone.png?alt=media&token=3dd013ff-13e6-4a0a-a2e7-647f79d668f3"
  },
  {
    nome: "Studio 409",
    url: "https://firebasestorage.googleapis.com/v0/b/digita-ads.firebasestorage.app/o/Studio409.png?alt=media&token=b5d0a89b-442c-4621-a826-36f691de708b"
  },
  {
    nome: "Só Baratei",
    url: "https://firebasestorage.googleapis.com/v0/b/digita-ads.firebasestorage.app/o/S%C3%B3%20Baratei.png?alt=media&token=3e43b7b1-134f-4b4c-af07-b9d9bb6cabbb"
  }
];

export default function ClientesCarousel() {
  return (
    <section id="clients" className="bg-[#141c2b] py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Marcas que confiam na Digita Ads</h2>
        <p className="text-white/80 mb-8">
          Conheça algumas das empresas que já aceleraram seus resultados com nossas estratégias.
        </p>

        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          modules={[Autoplay]}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-20 w-full">
                <div className="w-24 h-16 flex items-center justify-center">
                  <img
                    src={logo.url}
                    alt={logo.nome}
                    className="h-full w-full object-contain grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
