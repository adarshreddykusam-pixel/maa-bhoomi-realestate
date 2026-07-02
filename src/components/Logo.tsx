import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'emblem';
  theme?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'full', theme = 'light' }) => {
  // Theme styling configurations
  const isDark = theme === 'dark';

  const roofStroke = isDark ? '#ffffff' : '#1A2B5C';
  const textPrimary = isDark ? '#ffffff' : '#1A2B5C';
  const textSecondary = isDark ? '#cbd5e1' : '#0F52BA';
  const lineStroke = isDark ? '#6FBE44' : '#0F52BA'; // Brand green for dark accent, blue for light
  const buildingFillLeft = isDark ? '#ffffff' : 'url(#buildingGradLeft)';
  const buildingFillRight = isDark ? '#cbd5e1' : 'url(#buildingGradRight)'; // Secondary shading to prevent blob effect
  const windowFill = isDark ? '#1A2B5C' : '#000000'; // Match footer navy in dark, black in light
  const birdFill = isDark ? '#ffffff' : '#000000';
  const separatorLineStroke = isDark ? '#ffffff' : '#000000';

  if (variant === 'emblem') {
    return (
      <svg 
        viewBox="0 0 500 320" 
        className={`h-10 sm:h-12 w-auto ${className}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="buildingGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1A2B5C" />
            <stop offset="100%" stopColor="#0F52BA" />
          </linearGradient>
          <linearGradient id="buildingGradRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F52BA" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        <g transform="translate(0, 20)">
          {/* Tall Left Building */}
          <path d="M 191 260 L 191 105 L 231 75 L 249 93 L 249 260 Z" fill={buildingFillLeft} />
          <rect x="198" y="115" width="4.5" height="135" fill={windowFill} />
          <rect x="208" y="108" width="4.5" height="142" fill={windowFill} />
          <rect x="218" y="100" width="4.5" height="150" fill={windowFill} />
          <rect x="228" y="93" width="4.5" height="157" fill={windowFill} />
          <rect x="238" y="98" width="4.5" height="152" fill={windowFill} />

          {/* Shorter Right Building */}
          <path d="M 248 260 L 248 135 L 268 123 L 308 143 L 308 260 Z" fill={buildingFillRight} />
          <rect x="256" y="145" width="4.5" height="105" fill={windowFill} />
          <rect x="266" y="140" width="4.5" height="110" fill={windowFill} />
          <rect x="276" y="145" width="4.5" height="105" fill={windowFill} />
          <rect x="286" y="150" width="4.5" height="100" fill={windowFill} />
          <rect x="296" y="155" width="4.5" height="95" fill={windowFill} />

          {/* Birds */}
          <path d="M 258 75 Q 260 71 263 74 Q 266 71 268 75 Q 265 76 263 74 Q 261 76 258 75 Z" fill={birdFill} />
          <path d="M 270 60 Q 272 56 275 59 Q 278 56 280 60 Q 277 61 275 59 Q 273 61 270 60 Z" fill={birdFill} />
          <path d="M 284 68 Q 286 64 289 67 Q 292 64 294 68 Q 291 69 289 67 Q 287 69 284 68 Z" fill={birdFill} />
          <path d="M 268 85 Q 270 81 273 84 Q 276 81 278 85 Q 275 86 273 84 Q 271 86 268 85 Z" fill={birdFill} />
          <path d="M 292 80 Q 294 76 297 79 Q 300 76 302 80 Q 299 81 297 79 Q 295 81 292 80 Z" fill={birdFill} />

          {/* Left Roof */}
          <path d="M 50 280 L 180 150 L 310 280" fill="none" stroke={roofStroke} strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="163" y="197" width="14" height="14" fill={windowFill} />
          <rect x="181" y="197" width="14" height="14" fill={windowFill} />
          <rect x="163" y="215" width="14" height="14" fill={windowFill} />
          <rect x="181" y="215" width="14" height="14" fill={windowFill} />
          <line x1="179.5" y1="197" x2="179.5" y2="229" stroke={roofStroke} strokeWidth="2.5" />
          <line x1="163" y1="211" x2="195" y2="211" stroke={roofStroke} strokeWidth="2.5" />

          {/* Right Roof */}
          <path d="M 190 280 L 320 150 L 450 280" fill="none" stroke={roofStroke} strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="306" y="204" width="12" height="12" fill={windowFill} />
          <rect x="321" y="204" width="12" height="12" fill={windowFill} />
          <rect x="306" y="219" width="12" height="12" fill={windowFill} />
          <rect x="321" y="219" width="12" height="12" fill={windowFill} />
          <line x1="319.5" y1="204" x2="319.5" y2="231" stroke={roofStroke} strokeWidth="2" />
          <line x1="306" y1="216" x2="333" y2="216" stroke={roofStroke} strokeWidth="2" />

          {/* Separator line */}
          <line x1="50" y1="285" x2="450" y2="285" stroke={separatorLineStroke} strokeWidth="4.5" />
        </g>
      </svg>
    );
  }

  return (
    <svg 
      viewBox="0 0 600 120" 
      className={`h-12 sm:h-16 w-auto ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="buildingGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A2B5C" />
          <stop offset="100%" stopColor="#0F52BA" />
        </linearGradient>
        <linearGradient id="buildingGradRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F52BA" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      {/* Emblem Scaled Down and Placed Left */}
      <g transform="translate(10, -5) scale(0.35)">
        {/* Tall Left Building */}
        <path d="M 191 260 L 191 105 L 231 75 L 249 93 L 249 260 Z" fill={buildingFillLeft} />
        <rect x="198" y="115" width="4.5" height="135" fill={windowFill} />
        <rect x="208" y="108" width="4.5" height="142" fill={windowFill} />
        <rect x="218" y="100" width="4.5" height="150" fill={windowFill} />
        <rect x="228" y="93" width="4.5" height="157" fill={windowFill} />
        <rect x="238" y="98" width="4.5" height="152" fill={windowFill} />

        {/* Shorter Right Building */}
        <path d="M 248 260 L 248 135 L 268 123 L 308 143 L 308 260 Z" fill={buildingFillRight} />
        <rect x="256" y="145" width="4.5" height="105" fill={windowFill} />
        <rect x="266" y="140" width="4.5" height="110" fill={windowFill} />
        <rect x="276" y="145" width="4.5" height="105" fill={windowFill} />
        <rect x="286" y="150" width="4.5" height="100" fill={windowFill} />
        <rect x="296" y="155" width="4.5" height="95" fill={windowFill} />

        {/* Birds */}
        <path d="M 258 75 Q 260 71 263 74 Q 266 71 268 75 Q 265 76 263 74 Q 261 76 258 75 Z" fill={birdFill} />
        <path d="M 270 60 Q 272 56 275 59 Q 278 56 280 60 Q 277 61 275 59 Q 273 61 270 60 Z" fill={birdFill} />
        <path d="M 284 68 Q 286 64 289 67 Q 292 64 294 68 Q 291 69 289 67 Q 287 69 284 68 Z" fill={birdFill} />
        <path d="M 268 85 Q 270 81 273 84 Q 276 81 278 85 Q 275 86 273 84 Q 271 86 268 85 Z" fill={birdFill} />
        <path d="M 292 80 Q 294 76 297 79 Q 300 76 302 80 Q 299 81 297 79 Q 295 81 292 80 Z" fill={birdFill} />

        {/* Left House Roof */}
        <path d="M 50 280 L 180 150 L 310 280" fill="none" stroke={roofStroke} strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="163" y="197" width="14" height="14" fill={windowFill} />
        <rect x="181" y="197" width="14" height="14" fill={windowFill} />
        <rect x="163" y="215" width="14" height="14" fill={windowFill} />
        <rect x="181" y="215" width="14" height="14" fill={windowFill} />
        <line x1="179.5" y1="197" x2="179.5" y2="229" stroke={roofStroke} strokeWidth="2.5" />
        <line x1="163" y1="211" x2="195" y2="211" stroke={roofStroke} strokeWidth="2.5" />

        {/* Right House Roof */}
        <path d="M 190 280 L 320 150 L 450 280" fill="none" stroke={roofStroke} strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="306" y="204" width="12" height="12" fill={windowFill} />
        <rect x="321" y="204" width="12" height="12" fill={windowFill} />
        <rect x="306" y="219" width="12" height="12" fill={windowFill} />
        <rect x="321" y="219" width="12" height="12" fill={windowFill} />
        <line x1="319.5" y1="204" x2="319.5" y2="231" stroke={roofStroke} strokeWidth="2" />
        <line x1="306" y1="216" x2="333" y2="216" stroke={roofStroke} strokeWidth="2" />

        {/* Horizontal separator line */}
        <line x1="50" y1="285" x2="450" y2="285" stroke={separatorLineStroke} strokeWidth="4.5" />
      </g>

      {/* Typography Placed to the Right of Emblem */}
      {/* "MAA Bhoomi Real Estate" in Serif style */}
      <text x="175" y="62" fontFamily="'Times New Roman', Georgia, serif" fontWeight="bold" fontSize="34" fill={textPrimary} letterSpacing="0.5">MAA Bhoomi Real Estate</text>

      {/* "MARKETING SERVICES" in Sans-serif style */}
      <text x="175" y="96" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontWeight="800" fontSize="13" fill={textSecondary} letterSpacing="2.5">MARKETING SERVICES</text>

      {/* Horizontal lines around "MARKETING SERVICES" */}
      <line x1="175" y1="84" x2="335" y2="84" stroke={lineStroke} strokeWidth="1.5" />
      <line x1="175" y1="104" x2="335" y2="104" stroke={lineStroke} strokeWidth="1.5" />
    </svg>
  );
};

export default Logo;
