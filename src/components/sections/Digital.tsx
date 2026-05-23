"use client";

import { FadeIn } from "../animations/FadeIn";

const pilares = [
  {
    num: "01",
    title: "Apropiación",
    desc: "Capacitar a la comunidad en el uso de herramientas digitales para fortalecer procesos organizativos.",
    color: "text-makeba-yellow",
  },
  {
    num: "02",
    title: "Preservación",
    desc: "Digitalizar el patrimonio cultural: fotografías, relatos orales, videos y documentos históricos.",
    color: "text-makeba-green",
  },
  {
    num: "03",
    title: "Inclusión",
    desc: "Facilitar el acceso equitativo a plataformas digitales para jóvenes y mujeres líderes.",
    color: "text-makeba-red",
  },
  {
    num: "04",
    title: "Proyección",
    desc: "Construir una base tecnológica escalable para las próximas fases del ecosistema digital.",
    color: "text-makeba-blue",
  },
];

export function Digital() {
  return (
    <section className="w-full bg-makeba-cream text-makeba-black relative overflow-hidden py-16 lg:py-48">
      {/* Círculo sutil decorativo */}
      <div className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] border border-makeba-black/5 rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <FadeIn direction="up">
          <div className="flex flex-col text-center items-center mb-16 lg:mb-32">
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-makeba-black/40 mb-6 block">
              Transformación Digital
            </span>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] max-w-4xl">
              La memoria también <br/>
              <span className="italic font-light text-makeba-green">se digitaliza.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-24">
          {pilares.map((p, i) => (
            <FadeIn direction="up" delay={0.2 + i * 0.1} key={i}>
              <div className="group flex flex-col h-full border border-makeba-black/5 p-8 lg:p-10 hover:border-makeba-black/15 transition-colors bg-white/40 backdrop-blur-sm relative overflow-hidden">
                <span className={`font-serif text-6xl opacity-10 absolute top-4 right-6 group-hover:scale-110 transition-transform ${p.color}`}>
                  {p.num}
                </span>
                
                <div className="mt-auto pt-20">
                  <h4 className="font-serif text-2xl text-makeba-black mb-4">
                    {p.title}
                  </h4>
                  <p className="font-sans text-xs font-light text-makeba-black/60 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.4}>
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center border-t border-makeba-black/10 pt-10">
            <p className="font-sans font-light text-makeba-black/50 text-xs max-w-lg leading-relaxed text-center md:text-left">
              Esta plataforma representa la Fase 1 del ecosistema digital comunitario. Las fases siguientes incluirán gestión cultural interactiva y archivo digital.
            </p>
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-makeba-black/30 whitespace-nowrap">
              Fase 1 · 2026
            </span>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
