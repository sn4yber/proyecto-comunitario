"use client";

import { FadeIn } from "../animations/FadeIn";

const fotos = [
  {
    label: "Comunidad de Membrillal",
    img: "/assets/comunidad.jpg",
    size: "col-span-2 row-span-2",
  },
  {
    label: "Cantaoras",
    img: "/assets/cantaoras.png",
    size: "col-span-1 row-span-1",
  },
  {
    label: "Vida Comunitaria",
    img: "/assets/comunidad3.jpg",
    size: "col-span-1 row-span-1",
  },
  {
    label: "Cantaoras en Acción",
    img: "/assets/cantaoras2.jpg",
    size: "col-span-1 row-span-1",
  },
  {
    label: "Comunidad Unida",
    img: "/assets/comunidad4.jpeg",
    size: "col-span-1 row-span-1",
  },
  {
    label: "Territorio Ancestral",
    img: "/assets/comunidad 4.png",
    size: "col-span-1 row-span-1",
  },
];

export function Galeria() {
  return (
    <section id="galeria" className="w-full bg-makeba-black text-makeba-cream relative overflow-hidden py-16 lg:py-48">
      <div className="container mx-auto px-6 relative z-10">

        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 border-b border-makeba-cream/10 pb-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-makeba-green mb-6 block">
                Archivo Fotográfico
              </span>
              <h2 className="font-serif text-5xl md:text-6xl text-makeba-cream">
                Vida comunitaria.
              </h2>
            </div>
            
            {/* Indicador de archivo fotográfico */}
            <div className="flex gap-8">
              <span className="text-[10px] uppercase tracking-[0.2em] font-sans pb-2 border-b-2 text-makeba-cream border-makeba-green">
                Archivo Fotográfico
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Masonry grid */}
        <FadeIn direction="up" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-3 md:gap-6">
            {fotos.map((foto, i) => (
              <div key={i} className={`relative group overflow-hidden bg-makeba-cream/5 ${foto.size}`}>
                <img
                  src={foto.img}
                  alt={foto.label}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-makeba-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute bottom-4 left-4 text-[9px] uppercase tracking-[0.2em] font-sans text-makeba-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {foto.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.4}>
          <p className="text-[10px] uppercase tracking-[0.2em] font-sans text-makeba-cream/20 mt-12 text-center">
            Archivo fotográfico · Consejo Comunitario Miriam Makeba
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
