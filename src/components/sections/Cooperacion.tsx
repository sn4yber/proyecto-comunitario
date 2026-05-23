"use client";

import { FadeIn } from "../animations/FadeIn";

const alianzas = [
  { sigla: "OIM", nombre: "Organización Internacional para las Migraciones", tipo: "Internacional" },
  { sigla: "MIN. INTERIOR", nombre: "Ministerio del Interior", tipo: "Nacional" },
  { sigla: "ALCALDÍA", nombre: "Alcaldía Mayor de Cartagena", tipo: "Local" },
  { sigla: "UNESCO", nombre: "Organización de las NN. UU. para la Cultura", tipo: "Internacional" },
  { sigla: "PNUD", nombre: "Programa de Naciones Unidas para el Desarrollo", tipo: "Internacional" },
  { sigla: "ICANH", nombre: "Instituto Colombiano de Antropología e Historia", tipo: "Nacional" },
  { sigla: "AECID", nombre: "Agencia Española de Cooperación Internacional", tipo: "Internacional" },
  { sigla: "CORTE C.", nombre: "Corte Constitucional de Colombia", tipo: "Nacional" },
];

export function Cooperacion() {
  return (
    <section id="alianzas" className="w-full bg-[#E5E5DE] text-makeba-black relative overflow-hidden py-16 lg:py-48">
      
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between items-start lg:items-end mb-16 lg:mb-24 border-b border-makeba-black/10 pb-12 lg:pb-20">
          <FadeIn direction="up" className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-makeba-black/50 mb-6 block">
              Cooperación Institucional
            </span>
            <h2 className="font-serif text-5xl md:text-7xl leading-[1.1]">
              No caminamos <br/>
              <span className="text-makeba-green italic font-light">solas.</span>
            </h2>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2} className="max-w-sm flex flex-col gap-8">
            {/* Foto card del logo */}
            <div className="flex items-center gap-5 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-makeba-black/5 shadow-sm">
              <img 
                src="/assets/logo.jpeg" 
                alt="Logo Miriam Makeba" 
                className="w-16 h-16 rounded-full object-cover shadow-inner"
              />
              <div>
                <p className="font-serif text-sm font-bold text-makeba-black leading-tight">Consejo Comunitario</p>
                <p className="font-sans text-[10px] uppercase tracking-widest text-makeba-black/50 mt-1">Miriam Makeba</p>
              </div>
            </div>

            <p className="text-sm font-light font-sans text-makeba-black/70 leading-relaxed">
              Tejemos redes con organizaciones locales, nacionales e internacionales alrededor de la inclusión social, la cultura afrodescendiente y la justicia étnica. La solidaridad es nuestra estrategia comunitaria.
            </p>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.3}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {alianzas.map((a, i) => (
              <div key={i} className="group p-6 lg:p-8 border border-makeba-black/10 bg-makeba-cream/50 hover:bg-makeba-cream transition-colors cursor-default relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-makeba-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-[9px] uppercase tracking-[0.2em] font-sans text-makeba-black/40 mb-4">
                  {a.tipo}
                </p>
                <h4 className="font-sans text-sm uppercase tracking-widest font-bold text-makeba-black mb-2 group-hover:text-makeba-green transition-colors">
                  {a.sigla}
                </h4>
                <p className="font-sans text-xs font-light text-makeba-black/60 leading-relaxed">
                  {a.nombre}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
