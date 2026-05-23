"use client";

import { FadeIn } from "../animations/FadeIn";

const timeline = [
  {
    year: "1993",
    label: "Ley 70",
    desc: "Marco legal que reconoce los derechos colectivos de las comunidades negras.",
  },
  {
    year: "2018",
    label: "Fundación",
    desc: "Constitución del Consejo Comunitario de Negritudes Miriam Makeba.",
  },
  {
    year: "2024",
    label: "Sentencia T-237",
    desc: "Amparo de derechos fundamentales frente al corredor de Mamonal.",
  },
];

// Solo imágenes con prefijo "comunidad"
const imagenes = [
  { src: "/assets/comunidad.jpg",   alt: "Comunidad de Membrillal" },
  { src: "/assets/comunidad3.jpg",  alt: "Comunidad reunida" },
  { src: "/assets/comunidad4.jpeg", alt: "Vida comunitaria" },
  { src: "/assets/comunidad 4.png", alt: "Comunidad en acción" },
];

export function Historia() {
  return (
    <section id="historia" className="w-full bg-makeba-cream relative overflow-hidden py-24 lg:py-48">
      <div className="absolute top-20 right-[-10%] w-[40vw] h-[40vw] bg-makeba-yellow/10 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-20 left-[-10%] w-[60vw] h-[60vw] bg-makeba-green/5 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Cabecera */}
        <FadeIn direction="up">
          <div className="flex flex-col items-center text-center mb-16 lg:mb-32">
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-makeba-black/40 mb-4 block">
              Nuestra Historia
            </span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-8xl text-makeba-black leading-none">
              Una comunidad que <br />
              <span className="italic font-light text-makeba-black/60">nombra su origen.</span>
            </h2>
          </div>
        </FadeIn>

        {/* ===== MOBILE: grid de imágenes 2x2 ===== */}
        <div className="grid grid-cols-2 gap-3 mb-12 lg:hidden">
          {imagenes.map((img, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.1}>
              <div className="aspect-square overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Texto mobile */}
        <div className="lg:hidden mb-12 px-1">
          <p className="font-serif italic text-lg text-makeba-black/70 leading-relaxed mb-4">
            Membrillal es una vereda rural del corregimiento de Pasacaballos, en Cartagena de Indias.
          </p>
          <p className="font-sans font-light text-sm text-makeba-black/50 leading-relaxed">
            Aquí habita una comunidad afrodescendiente de vocación agrícola, organizada en Asamblea General, que defiende su territorio colectivo frente al avance de la Zona Industrial de Mamonal.
          </p>
        </div>

        {/* Timeline mobile */}
        <div className="flex flex-col gap-8 border-l border-makeba-black/10 pl-6 mb-12 lg:hidden">
          {timeline.map((item, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.1}>
              <div className="relative">
                <div className="absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-makeba-yellow" />
                <span className="font-serif text-2xl text-makeba-black block mb-1">{item.year}</span>
                <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-makeba-black/60 font-bold mb-1">{item.label}</h4>
                <p className="font-sans text-xs font-light text-makeba-black/50 leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ===== DESKTOP: Layout editorial con imágenes solapadas ===== */}
        <div className="hidden lg:flex flex-row gap-20 xl:gap-32 items-start">

          {/* Columna izquierda: imágenes editoriales solapadas */}
          <div className="w-1/2 relative h-[640px] flex-shrink-0">
            {/* Imagen grande fondo */}
            <FadeIn direction="up" delay={0.1} className="absolute top-0 left-0 w-3/4 h-[400px] z-10">
              <img src={imagenes[0].src} alt={imagenes[0].alt}
                className="w-full h-full object-cover shadow-xl transition-all duration-700" />
            </FadeIn>
            {/* Imagen mediana derecha */}
            <FadeIn direction="up" delay={0.2} className="absolute bottom-0 right-0 w-[55%] h-[320px] z-20">
              <img src={imagenes[1].src} alt={imagenes[1].alt}
                className="w-full h-full object-cover shadow-2xl transition-all duration-700" />
            </FadeIn>
            {/* Imagen pequeña superpuesta centro */}
            <FadeIn direction="up" delay={0.3} className="absolute top-44 left-24 w-[45%] h-[240px] z-30">
              <img src={imagenes[2].src} alt={imagenes[2].alt}
                className="w-full h-full object-cover shadow-2xl border-4 border-makeba-cream transition-all duration-700" />
            </FadeIn>

            {/* Texto decorativo lateral */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[9px] tracking-[0.5em] uppercase text-makeba-black/25 font-sans whitespace-nowrap hidden xl:block">
              Memoria · Resistencia · Territorio
            </div>
          </div>

          {/* Columna derecha: texto y timeline */}
          <div className="w-1/2 pt-8">
            <FadeIn direction="up" delay={0.3}>
              <p className="text-xl font-light text-makeba-black/70 leading-relaxed mb-6 font-serif italic">
                Membrillal es una vereda del corregimiento de Pasacaballos. Aquí habita una comunidad afrodescendiente de vocación agrícola que coexiste armónicamente con el Cabildo Indígena Zenú.
              </p>
              <p className="text-sm text-makeba-black/50 leading-relaxed font-sans font-light mb-6">
                Organizados democráticamente a través de su Asamblea General y representados por su Junta Directiva, su historia reciente se ha forjado en la férrea defensa de su propiedad colectiva frente a la voraz expansión de la Zona Industrial de Mamonal.
              </p>
              <p className="text-sm text-makeba-black/50 leading-relaxed font-sans font-light mb-16">
                Lejos de ser un asentamiento pasivo, el Consejo Comunitario "Miriam Makeba" es un ejemplo vivo de arraigo. Han basado su sustento histórico en la agricultura de pancoger y mantienen una relación inquebrantable con sus fuentes de agua y la preservación de su ecosistema natural.
              </p>
            </FadeIn>

            <div className="flex flex-col gap-10 border-l border-makeba-black/10 pl-8">
              {timeline.map((item, i) => (
                <FadeIn direction="up" delay={0.4 + i * 0.1} key={i}>
                  <div className="relative">
                    <div className="absolute -left-[37px] top-1.5 w-2 h-2 rounded-full bg-makeba-yellow" />
                    <span className="font-serif text-3xl text-makeba-black block mb-2">{item.year}</span>
                    <h4 className="font-sans text-[11px] uppercase tracking-[0.2em] text-makeba-black/60 font-bold mb-2">{item.label}</h4>
                    <p className="font-sans text-sm font-light text-makeba-black/50 leading-relaxed">{item.desc}</p>
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
