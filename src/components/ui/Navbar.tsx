"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Nuestra Historia", href: "#historia" },
  { label: "Territorio & Justicia", href: "#defensa" },
  { label: "Cultura Viva", href: "#cultura" },
  { label: "Alianzas", href: "#alianzas" },
  { label: "Galería", href: "#galeria" },
  { label: "Contáctanos", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-makeba-cream/95 backdrop-blur-md py-4 shadow-sm"
            : "bg-transparent py-6"
        } px-6 lg:px-20 flex items-center justify-between`}
      >
        {/* Logo */}
        <a href="#inicio" className="flex items-center">
          <img
            src="/assets/logo.jpeg"
            alt="Logo Miriam Makeba"
            className="h-10 md:h-12 rounded-full object-cover"
          />
        </a>

        {/* Links Desktop */}
        <div className="hidden lg:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-sans font-medium text-makeba-yellow">
          {links.slice(0, 4).map((l) => (
            <a key={l.href} href={l.href} className="hover:text-makeba-red transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Derecha Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#contacto" className="text-[10px] uppercase tracking-[0.2em] font-sans font-medium text-makeba-yellow hover:text-makeba-red transition-colors">
            Contáctanos
          </a>
          <a
            href="#contacto"
            className="w-8 h-8 rounded-full bg-makeba-yellow text-makeba-black flex items-center justify-center text-xs hover:scale-110 transition-transform"
          >
            →
          </a>
        </div>

        {/* Hamburger Mobile */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <motion.span
            className="block w-6 h-[1.5px] bg-makeba-black origin-center"
            animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-[1.5px] bg-makeba-black origin-center"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-6 h-[1.5px] bg-makeba-black origin-center"
            animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-makeba-cream flex flex-col justify-center px-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* Acento decorativo */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-makeba-red via-makeba-yellow to-makeba-green" />

            <nav className="flex flex-col gap-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  className="font-serif text-4xl text-makeba-black/80 hover:text-makeba-yellow transition-colors"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            <div className="mt-16 flex flex-col gap-2 text-xs font-sans text-makeba-black/30 uppercase tracking-widest">
              <span>Cartagena de Indias · Colombia</span>
              <span>ccmembrillalmm@gmail.com</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
