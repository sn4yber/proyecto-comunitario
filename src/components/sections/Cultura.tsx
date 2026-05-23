"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";

const expresiones = [
  { label: "Medicina Ancestral", desc: "Saberes botánicos y sanación espiritual guiada por parteras y rezanderos." },
  { label: "Agricultura y Agua", desc: "Cultivos de pancoger y la fuerte relación comunitaria con el arroyo local." },
  { label: "Fogón Comunitario", desc: "Sancocho a la leña, dulces y fritos como actos de cohesión y resistencia." },
  { label: "Tradición Oral", desc: "Transmisión de historias y normas guiadas por el respeto a los Mayores." },
  { label: "Fiesta y Resistencia", desc: "El toque del tambor y festividades como Ángeles Somos en noviembre." },
  { label: "Coexistencia Étnica", desc: "Vecindad e intercambio cultural armónico con el Cabildo Indígena Zenú." },
];

export function Cultura() {
  return (
    <section id="cultura" className="w-full bg-[#E5E5DE] relative overflow-hidden py-16 lg:py-48">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          
          {/* Columna Izquierda: Imagen y Cita */}
          <div className="w-full lg:w-1/2 relative">
            <FadeIn direction="up">
              <div className="relative h-[70vh] w-full group overflow-hidden">
                <img 
                  src="/assets/cantaoras.png" 
                  alt="Cantadoras afrodescendientes"
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="mt-12 lg:absolute lg:top-[10%] lg:right-[-15%] lg:w-80 bg-[#E5E5DE]/90 backdrop-blur-sm p-8 border border-[#0d0c09]/5 z-20">
                <span className="text-4xl text-makeba-red font-serif leading-none opacity-50 mb-4 block">"</span>
                <p className="font-serif italic text-[#0d0c09]/80 text-lg leading-relaxed">
                  Cuando la cantadora alza la voz, no canta ella sola; cantan los abuelos, canta el río y canta la tierra que nos sostiene.
                </p>
                <span className="block mt-6 font-sans text-[10px] uppercase tracking-widest text-[#0d0c09]/40">
                  — Sabiduría Popular de Membrillal
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Columna Derecha: Títulos y Expresiones */}
          <div className="w-full lg:w-1/2 lg:pl-16 flex flex-col justify-center">
            <FadeIn direction="up" delay={0.1}>
              <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-[#0d0c09]/40 mb-6 block">
                Cultura Viva
              </span>
              <h2 className="font-serif text-5xl md:text-7xl text-[#0d0c09] leading-[1.1] mb-16">
                El canto como <br/>
                <span className="text-makeba-red italic font-light">resistencia.</span>
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {expresiones.map((exp, i) => (
                <FadeIn direction="up" delay={0.3 + i * 0.1} key={i}>
                  <div className="border-t border-[#0d0c09]/10 pt-6">
                    <h4 className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-[#0d0c09] mb-3">
                      {exp.label}
                    </h4>
                    <p className="font-sans text-sm font-light text-[#0d0c09]/60 leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
