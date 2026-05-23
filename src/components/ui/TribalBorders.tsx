import React from "react";

export function TribalBorders() {
  // SVG pattern horizontal (Top and Bottom)
  // Contiene 4 franjas ricas en detalle inspiradas en la imagen:
  // 1. Naranja con chevrons negros
  // 2. Verde con soles amarillos
  // 3. Rojo con triángulos verdes y puntos
  // 4. Amarillo con zigzag negro
  const svgH = encodeURIComponent(`
    <svg width='200' height='80' viewBox='0 0 200 80' xmlns='http://www.w3.org/2000/svg'>
      <rect x='0' y='0' width='200' height='20' fill='#e65c00'/>
      <pattern id='ph1' width='20' height='20' patternUnits='userSpaceOnUse'>
        <path d='M0 20 L10 0 L20 20 Z' fill='#0d0c09'/>
        <path d='M3 20 L10 6 L17 20 Z' fill='#e65c00'/>
      </pattern>
      <rect x='0' y='0' width='200' height='20' fill='url(#ph1)'/>

      <rect x='0' y='20' width='200' height='20' fill='#1b6b38'/>
      <pattern id='ph2' width='30' height='20' patternUnits='userSpaceOnUse'>
        <circle cx='15' cy='10' r='3.5' fill='#e8b400'/>
        <path d='M15 2 L15 5 M15 15 L15 18 M7 10 L10 10 M20 10 L23 10 M9 4 L11 6 M19 16 L21 18 M9 16 L11 14 M19 4 L21 6' stroke='#e8b400' stroke-width='1.5'/>
      </pattern>
      <rect x='0' y='20' width='200' height='20' fill='url(#ph2)'/>

      <rect x='0' y='40' width='200' height='20' fill='#be2a24'/>
      <pattern id='ph3' width='20' height='20' patternUnits='userSpaceOnUse'>
        <path d='M0 20 L10 0 L20 20 Z' fill='#1b6b38'/>
        <circle cx='10' cy='13' r='2' fill='#e8b400'/>
      </pattern>
      <rect x='0' y='40' width='200' height='20' fill='url(#ph3)'/>

      <rect x='0' y='60' width='200' height='20' fill='#e8b400'/>
      <pattern id='ph4' width='20' height='20' patternUnits='userSpaceOnUse'>
        <path d='M0 5 L10 15 L20 5' stroke='#0d0c09' stroke-width='2' fill='none'/>
        <circle cx='5' cy='5' r='2.5' fill='#0d0c09'/>
        <circle cx='15' cy='15' r='2.5' fill='#0d0c09'/>
      </pattern>
      <rect x='0' y='60' width='200' height='20' fill='url(#ph4)'/>
    </svg>
  `).replace(/'/g, '%27').replace(/"/g, '%22');

  // SVG pattern vertical (Left and Right)
  const svgV = encodeURIComponent(`
    <svg width='80' height='200' viewBox='0 0 80 200' xmlns='http://www.w3.org/2000/svg'>
      <rect x='0' y='0' width='20' height='200' fill='#e65c00'/>
      <pattern id='pv1' width='20' height='20' patternUnits='userSpaceOnUse'>
        <path d='M20 0 L0 10 L20 20 Z' fill='#0d0c09'/>
        <path d='M20 3 L6 10 L20 17 Z' fill='#e65c00'/>
      </pattern>
      <rect x='0' y='0' width='20' height='200' fill='url(#pv1)'/>

      <rect x='20' y='0' width='20' height='200' fill='#1b6b38'/>
      <pattern id='pv2' width='20' height='30' patternUnits='userSpaceOnUse'>
        <circle cx='10' cy='15' r='3.5' fill='#e8b400'/>
        <path d='M10 7 L10 10 M10 20 L10 23 M2 15 L5 15 M15 15 L18 15 M4 9 L6 11 M14 21 L16 19 M4 21 L6 19 M14 9 L16 11' stroke='#e8b400' stroke-width='1.5'/>
      </pattern>
      <rect x='20' y='0' width='20' height='200' fill='url(#pv2)'/>

      <rect x='40' y='0' width='20' height='200' fill='#be2a24'/>
      <pattern id='pv3' width='20' height='20' patternUnits='userSpaceOnUse'>
        <path d='M20 0 L0 10 L20 20 Z' fill='#1b6b38'/>
        <circle cx='13' cy='10' r='2' fill='#e8b400'/>
      </pattern>
      <rect x='40' y='0' width='20' height='200' fill='url(#pv3)'/>

      <rect x='60' y='0' width='20' height='200' fill='#e8b400'/>
      <pattern id='pv4' width='20' height='20' patternUnits='userSpaceOnUse'>
        <path d='M5 0 L15 10 L5 20' stroke='#0d0c09' stroke-width='2' fill='none'/>
        <circle cx='5' cy='5' r='2.5' fill='#0d0c09'/>
        <circle cx='15' cy='15' r='2.5' fill='#0d0c09'/>
      </pattern>
      <rect x='60' y='0' width='20' height='200' fill='url(#pv4)'/>
    </svg>
  `).replace(/'/g, '%27').replace(/"/g, '%22');

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideX {
          from { background-position: 0 0; }
          to { background-position: 200px 0; }
        }
        @keyframes slideY {
          from { background-position: 0 0; }
          to { background-position: 0 200px; }
        }
        
        .tribal-margin {
          position: fixed;
          z-index: 9999;
          pointer-events: none;
          background-repeat: repeat;
          opacity: 0.5;
          mix-blend-mode: multiply;
        }

        /* 
          8px de borde, delicado y sutil, que enmarca todo el contenido
        */
        .margin-top { 
          top: 0; left: 0; right: 0; height: 8px; 
          background-image: url("data:image/svg+xml;charset=UTF-8,${svgH}");
          background-size: auto 8px;
          animation: slideX 10s linear infinite; 
        }
        .margin-bottom { 
          bottom: 0; left: 0; right: 0; height: 8px; 
          background-image: url("data:image/svg+xml;charset=UTF-8,${svgH}");
          background-size: auto 8px;
          animation: slideX 10s linear infinite reverse; 
        }
        .margin-left { 
          top: 0; bottom: 0; left: 0; width: 8px; 
          background-image: url("data:image/svg+xml;charset=UTF-8,${svgV}");
          background-size: 8px auto;
          animation: slideY 10s linear infinite; 
        }
        .margin-right { 
          top: 0; bottom: 0; right: 0; width: 8px; 
          background-image: url("data:image/svg+xml;charset=UTF-8,${svgV}");
          background-size: 8px auto;
          animation: slideY 10s linear infinite reverse; 
        }

        .margin-inner-border {
          position: fixed;
          top: 8px; bottom: 8px; left: 8px; right: 8px;
          border: 1px solid rgba(13, 12, 9, 0.05);
          z-index: 9998;
          pointer-events: none;
        }
      `}} />
      <div className="tribal-margin margin-top" />
      <div className="tribal-margin margin-bottom" />
      <div className="tribal-margin margin-left" />
      <div className="tribal-margin margin-right" />
      <div className="margin-inner-border" />
    </>
  );
}
