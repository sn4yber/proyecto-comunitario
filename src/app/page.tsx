import { Hero } from "@/components/sections/Hero";
import { Historia } from "@/components/sections/Historia";
import { Defensa } from "@/components/sections/Defensa";
import { Cultura } from "@/components/sections/Cultura";
import { Cooperacion } from "@/components/sections/Cooperacion";
import { Digital } from "@/components/sections/Digital";
import { Galeria } from "@/components/sections/Galeria";
import { Navbar } from "@/components/ui/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-makeba-yellow selection:text-makeba-black">

      {/* Navbar fija */}
      <Navbar />

      {/* Secciones */}
      <div className="w-full">
        <Hero />
        <Historia />
        <Defensa />
        <Cultura />
        <Cooperacion />
        <Digital />
        <Galeria />

        {/* Footer */}
        <footer id="contacto" className="bg-makeba-black text-makeba-cream">
          <div className="container mx-auto px-6 lg:px-20 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
              
              {/* Logo e Info */}
              <div className="lg:col-span-3">
                <img 
                  src="/assets/logo.jpeg" 
                  alt="Logo Consejo Comunitario Miriam Makeba"
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <h3 className="font-serif text-lg mb-1 leading-tight">
                  Consejo Comunitario de<br />
                  Negritudes de Membrillal<br />
                  <em>"Miriam Makeba"</em>
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-makeba-cream/30 mt-4">
                  Certificación #60 · Min. Interior
                </p>
              </div>

              {/* Ubicación */}
              <div className="lg:col-span-2">
                <p className="label-overline text-[10px] uppercase tracking-widest text-makeba-cream/30 mb-4">Ubicación</p>
                <p className="text-sm font-light text-makeba-cream/70 leading-relaxed">
                  Membrillal<br />
                  Calle Los Laureles<br />
                  Mz F · Lt 11<br />
                  Pasacaballos, Cartagena
                </p>
              </div>

              {/* Contacto */}
              <div className="lg:col-span-2">
                <p className="label-overline text-[10px] uppercase tracking-widest text-makeba-cream/30 mb-4">Contacto</p>
                <p className="text-sm font-light text-makeba-cream/70 leading-relaxed">
                  300 572 8869<br />
                  310 650 9863<br />
                  ccmembrillalmm@gmail.com
                </p>
              </div>

              {/* Redes */}
              <div className="lg:col-span-2">
                <p className="label-overline text-[10px] uppercase tracking-widest text-makeba-cream/30 mb-4">Redes</p>
                <div className="flex flex-col gap-2">
                  {["Instagram", "Facebook", "YouTube", "TikTok"].map((r) => (
                    <span
                      key={r}
                      className="text-sm font-light text-makeba-cream/60 hover:text-makeba-green transition-colors cursor-pointer"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mapa Cuadrado Compacto */}
              <div className="lg:col-span-3">
                <div className="w-full aspect-square rounded-2xl overflow-hidden bg-makeba-black/50 border border-makeba-cream/10">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15694.020297079213!2d-75.5147814!3d10.3341855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef628670c5388c5%3A0xbcc0e2b1ea1b0883!2sPasacaballos%2C%20Cartagena%20de%20Indias%2C%20Bol%C3%ADvar!5e0!3m2!1ses!2sco!4v1715400000000!5m2!1ses!2sco" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

            </div>

            {/* Kente stripe */}
            <div className="h-[3px] w-full bg-gradient-to-r from-makeba-red via-makeba-yellow to-makeba-green mb-8" />

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-makeba-cream/30 font-bold tracking-[0.2em] uppercase">
              <span>© 2026 · Consejo Comunitario Miriam Makeba · Todos los derechos reservados</span>
              <span>Desarrollado por Snayber Madrid Ibarra</span>
            </div>
          </div>
        </footer>
      </div>

    </main>
  );
}
