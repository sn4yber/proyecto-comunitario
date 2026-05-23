import React from 'react';

interface AfricanPatternProps {
  className?: string;
  colors?: {
    green?: string;
    yellow?: string;
    red?: string;
    black?: string;
  };
  complexity?: number;
}

export function AfricanPattern({ 
  className = "", 
  colors = {
    green: "var(--color-makeba-green)",
    yellow: "var(--color-makeba-yellow)",
    red: "var(--color-makeba-red)",
    black: "var(--color-makeba-black)"
  },
  complexity = 5 // Number of rings
}: AfricanPatternProps) {
  
  // Center of our SVG
  const cx = 500;
  const cy = 500;
  
  // Create arrays for zigzag and triangle calculations
  const renderZigZagRing = (radius: number, color?: string, points: number = 30) => {
    let d = "";
    const angleStep = (Math.PI * 2) / points;
    for (let i = 0; i <= points; i++) {
      const angle = i * angleStep;
      // Alternate radius between inner and outer to create zig zag
      const r = i % 2 === 0 ? radius : radius + 20;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      d += `${i === 0 ? 'M' : 'L'} ${x} ${y} `;
    }
    return <path d={d} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />;
  };

  const renderDottedRing = (radius: number, color?: string, dots: number = 40) => {
    return (
      <circle 
        cx={cx} 
        cy={cy} 
        r={radius} 
        fill="none" 
        stroke={color} 
        strokeWidth="12" 
        strokeDasharray="1 30" 
        strokeLinecap="round" 
      />
    );
  };

  const renderDashedRing = (radius: number, color?: string) => {
    return (
      <circle 
        cx={cx} 
        cy={cy} 
        r={radius} 
        fill="none" 
        stroke={color} 
        strokeWidth="15" 
        strokeDasharray="40 20" 
      />
    );
  };

  return (
    <svg 
      viewBox="0 0 1000 1000" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        {/* Core Center */}
        <circle cx={cx} cy={cy} r="30" fill={colors.red} />
        <circle cx={cx} cy={cy} r="60" fill="none" stroke={colors.green} strokeWidth="10" />
        
        {/* Ring 1 - Yellow Zig Zag */}
        {renderZigZagRing(90, colors.yellow, 40)}
        
        {/* Ring 2 - Red Dashes */}
        {renderDashedRing(150, colors.red)}
        
        {/* Ring 3 - Green Dots */}
        {renderDottedRing(190, colors.green, 60)}
        
        {/* Ring 4 - Yellow Outer Solid Line */}
        <circle cx={cx} cy={cy} r="220" fill="none" stroke={colors.yellow} strokeWidth="4" />
        
        {/* Ring 5 - Red large Zigzag */}
        {renderZigZagRing(240, colors.red, 60)}

        {/* Ring 6 - Green massive dashes */}
        {renderDashedRing(300, colors.green)}

        {/* Ring 7 - Yellow dotted outer ring */}
        {renderDottedRing(340, colors.yellow, 90)}

        {/* Ring 8 - Outer boundary line */}
        <circle cx={cx} cy={cy} r="380" fill="none" stroke={colors.red} strokeWidth="6" />
        
        {/* Ring 9 - Outer massive zig zag */}
        {renderZigZagRing(400, colors.green, 80)}
      </g>
    </svg>
  );
}
