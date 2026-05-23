"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";

export function Hero() {
  return (
    <section id="inicio" className="relative w-full bg-makeba-cream overflow-hidden">

      {/* ===== MOBILE LAYOUT ===== */}
      <div className="flex flex-col lg:hidden w-full">

        {/* Imagen hero - ocupa toda la pantalla en mobile */}
        <div className="relative w-full h-[70vh]">
          <motion.img
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/assets/miriam makeba.jpg"
            alt="Miriam Makeba"
            className="w-full h-full object-cover object-top"
          />
          {/* Gradiente inferior para legibilidad del texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-makeba-black/70 via-makeba-black/20 to-transparent" />

          {/* Título sobre la imagen en mobile */}
          <motion.h1
            className="absolute bottom-6 left-6 right-6 font-serif text-makeba-cream text-[3.5rem] sm:text-[5rem] leading-[0.85] tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Miriam<br />Makeba.
          </motion.h1>

          {/* Sello circular - pequeño en mobile */}
          <motion.div
            className="absolute top-6 right-6 w-16 h-16 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <img src="/assets/pattern-circle.png" alt="Sello Cultural" className="w-full h-full object-contain" />
          </motion.div>
        </div>

        {/* Bloque de texto debajo de la imagen en mobile */}
        <div className="px-6 py-10 bg-makeba-cream">
          <FadeIn direction="up">
            <h3 className="font-serif italic text-xl text-makeba-black leading-snug mb-4">
              Consejo Comunitario de Membrillal
            </h3>
            <p className="text-xs font-sans text-makeba-black/50 uppercase tracking-widest mb-1">Sentencia T-237</p>
            <p className="text-xs font-sans text-makeba-black/30 uppercase tracking-widest mb-8">Cartagena de Indias</p>
            <a
              href="#historia"
              className="inline-block px-8 py-3 border border-makeba-black/30 text-makeba-black rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-makeba-black hover:text-makeba-cream transition-colors"
            >
              Conoce más
            </a>
          </FadeIn>
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden lg:flex flex-row w-full min-h-screen">

        {/* Mitad Izquierda */}
        <div className="w-[55%] pt-36 pb-16 px-16 xl:px-24 flex flex-col justify-between relative z-10">


          <FadeIn direction="up" delay={0.4}>
            <div>
              <h3 className="font-serif italic text-3xl text-makeba-black leading-snug mb-5">
                Consejo Comunitario<br />de Membrillal
              </h3>
              <p className="text-xs font-sans text-makeba-black/50 uppercase tracking-widest mb-1">Sentencia T-237</p>
              <p className="text-xs font-sans text-makeba-black/30 uppercase tracking-widest">Cartagena de Indias</p>
            </div>
          </FadeIn>

          {/* Texto vertical decorativo */}
          <div className="absolute left-8 bottom-20 flex flex-col items-center gap-4 text-makeba-black/30 text-[9px] tracking-[0.35em] uppercase">
            <span style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>Descubre</span>
            <div className="w-px h-14 bg-makeba-black/15" />
            <span className="text-makeba-yellow">↓</span>
          </div>
        </div>

        {/* Mitad Derecha (Imagen) */}
        <div className="w-[45%] h-screen relative overflow-hidden">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/assets/miriam makeba.jpg"
            alt="Miriam Makeba"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-makeba-black/10 mix-blend-multiply" />

          {/* Sello circular */}
          <motion.div
            className="absolute top-10 right-10 w-28 xl:w-32 h-28 xl:h-32 pointer-events-none z-30"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <img src="/assets/pattern-circle.png" alt="Sello Cultural" className="w-full h-full object-contain drop-shadow-xl" />
          </motion.div>

          {/* Botón CTA */}
          <div className="absolute bottom-10 right-10 z-30">
            <a
              href="#historia"
              className="px-8 py-3 border border-makeba-yellow text-makeba-yellow bg-makeba-black/20 backdrop-blur-sm rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-makeba-yellow hover:text-makeba-black transition-colors"
            >
              Conoce más
            </a>
          </div>
        </div>

        {/* Título Gigante superpuesto - SOLO desktop */}
        <motion.h1
          className="absolute top-1/2 left-[5%] -translate-y-1/2 font-serif text-makeba-black text-[8vw] xl:text-[9vw] leading-[0.82] tracking-tight pointer-events-none z-20 w-[85%]"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Miriam<br />Makeba.
        </motion.h1>

      </div>

    </section>
  );
}
