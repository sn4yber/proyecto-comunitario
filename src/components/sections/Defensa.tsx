"use client";

import { FadeIn } from "../animations/FadeIn";

const ejes = [
  {
    title: "Consulta previa",
    desc: "Derecho fundamental afrodescendiente reconocido por la OIT.",
  },
  {
    title: "Procesos jurídicos",
    desc: "Acompañamiento legal continuo para la defensa de derechos.",
  },
  {
    title: "Soberanía territorial",
    desc: "Autonomía y autodeterminación sobre el territorio ancestral.",
  },
  {
    title: "Vigilancia de Mamonal",
    desc: "Monitoreo del impacto ambiental y social del corredor industrial.",
  },
];

export function Defensa() {
  return (
    <section id="defensa" className="w-full bg-makeba-black text-makeba-cream relative overflow-hidden py-16 lg:py-48">
      {/* Elemento gráfico de fondo */}
      <div className="absolute right-[-20%] top-[20%] w-[80vw] h-[80vw] border border-makeba-cream/5 rounded-full pointer-events-none" />
      <div className="absolute right-[-10%] top-[30%] w-[60vw] h-[60vw] border border-makeba-cream/5 rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Cabecera */}
        <FadeIn direction="up">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 justify-between items-start lg:items-end mb-16 lg:mb-32 border-b border-makeba-cream/10 pb-8 lg:pb-16">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-makeba-cream/40 mb-8 block">
                Territorio & Justicia Étnica
              </span>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
                Defender el territorio <br/>
                <span className="text-makeba-cream/40 italic">es defender la vida.</span>
              </h2>
            </div>
            <div className="max-w-sm">
              <p className="text-sm font-light font-sans text-makeba-cream/60 leading-relaxed">
                Lideramos procesos jurídicos frente al impacto industrial de Mamonal. La lucha de Membrillal es la lucha por los derechos colectivos afrodescendientes en Colombia.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Sentencia T-237 */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-16 lg:mb-32">
          <FadeIn direction="up" delay={0.2} className="w-full lg:w-5/12 relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              {/* Foto real de la comunidad */}
              <img
                src="/assets/comunidad3.jpg"
                alt="Comunidad de Membrillal"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-makeba-black/40" />

              {/* Badge animado superpuesto */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 animate-[spin_40s_linear_infinite]">
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-makeba-yellow/70">
                      <path id="circle-defensa" d="M 50, 50 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" fill="none" />
                      <text fontSize="8" letterSpacing="4" className="uppercase font-sans font-bold">
                        <textPath href="#circle-defensa">
                          • Corte Constitucional • Amparo de Derechos
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-[9px] uppercase tracking-[0.3em] font-sans text-makeba-yellow mb-2 block">
                      Hito Jurídico
                    </span>
                    <h3 className="font-serif text-5xl text-makeba-cream">
                      T-237
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="w-full lg:w-7/12">
            <FadeIn direction="up" delay={0.3}>
              <h4 className="font-serif text-3xl mb-6">Amparo Institucional</h4>
              <p className="font-sans font-light text-makeba-cream/60 leading-relaxed mb-10 max-w-xl">
                En 2024, la Corte Constitucional de Colombia falló a favor del Consejo Comunitario, protegiendo los derechos fundamentales a la participación comunitaria, diversidad étnica, debido proceso y consulta previa.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "Participación comunitaria",
                  "Diversidad étnica",
                  "Debido proceso",
                  "Consulta previa",
                ].map((derecho, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="w-1 h-1 rounded-full bg-makeba-yellow" />
                    <span className="font-sans text-[11px] uppercase tracking-widest text-makeba-cream/80">
                      {derecho}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Ejes de trabajo (Grilla minimalista) */}
        <FadeIn direction="up" delay={0.4}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
            {ejes.map((eje, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-serif text-4xl text-makeba-cream/20 mb-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-makeba-cream mb-3">
                  {eje.title}
                </h4>
                <p className="font-sans text-xs font-light text-makeba-cream/50 leading-relaxed">
                  {eje.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
