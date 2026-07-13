import React from 'react';

interface VSKLogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  customHeight?: number;
  customWidth?: number;
  textColor?: string;
}

export default function VSKLogo({
  className = '',
  iconOnly = false,
  size = 'md',
  customHeight,
  customWidth,
  textColor = '#E31B1B'
}: VSKLogoProps) {
  // Determine dimensions based on size presets
  let width = 160;
  let height = 50;

  if (iconOnly) {
    width = 50;
    height = 50;
    if (size === 'sm') { width = 32; height = 32; }
    else if (size === 'md') { width = 48; height = 48; }
    else if (size === 'lg') { width = 80; height = 80; }
    else if (size === 'xl') { width = 140; height = 140; }
  } else {
    if (size === 'sm') { width = 120; height = 38; }
    else if (size === 'md') { width = 180; height = 56; }
    else if (size === 'lg') { width = 280; height = 88; }
    else if (size === 'xl') { width = 420; height = 130; }
  }

  // Override if custom values are provided
  if (customWidth) width = customWidth;
  if (customHeight) height = customHeight;

  // Render the official high-fidelity SVG representation of VSK logo
  return (
    <svg
      width={width}
      height={height}
      viewBox={iconOnly ? "0 0 120 120" : "0 0 540 160"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
    >
      <defs>
        {/* Clip paths for the four diamonds when rotated 45deg around center (60, 60) */}
        {/* We define them relative to the rotated group transform for perfect alignments */}
        <clipPath id="blue-diamond-clip">
          <rect x="-41" y="-41" width="38" height="38" rx="2" />
        </clipPath>
        <clipPath id="yellow-diamond-clip">
          <rect x="3" y="-41" width="38" height="38" rx="2" />
        </clipPath>
        <clipPath id="green-diamond-clip">
          <rect x="-41" y="3" width="38" height="38" rx="2" />
        </clipPath>
        <clipPath id="red-diamond-clip">
          <rect x="3" y="3" width="38" height="38" rx="2" />
        </clipPath>

        {/* Drop shadow filter for the entire icon */}
        <filter id="logo-shadow" x="-10%" y="-10%" width="120%" height="120%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0f172a" floodOpacity="0.08" />
        </filter>
      </defs>

      {/* Main Logo Group */}
      <g filter="url(#logo-shadow)">
        
        {/* ICON COMPONENT: The 4-diamond cluster centered at (60, 60) in 120x120 container */}
        <g transform="translate(60, 60) rotate(45)">
          
          {/* 1. BLUE DIAMOND (Top when rotated 45deg) - Sanitaryware/Bath/Bubbles concept */}
          <g clipPath="url(#blue-diamond-clip)">
            {/* Background */}
            <rect x="-41" y="-41" width="38" height="38" fill="#0056C6" />
            {/* Bubble Pattern */}
            <circle cx="-33" cy="-33" r="5" fill="#003580" opacity="0.8" />
            <circle cx="-13" cy="-13" r="6" fill="#003580" opacity="0.8" />
            <circle cx="-23" cy="-23" r="8.5" fill="#002d70" />
            <circle cx="-23" cy="-23" r="4.5" fill="#0056C6" opacity="0.4" />
            <circle cx="-13" cy="-33" r="3.5" fill="#003580" opacity="0.8" />
            <circle cx="-33" cy="-13" r="4" fill="#003580" opacity="0.8" />
            <circle cx="-23" cy="-35" r="2.5" fill="#003580" opacity="0.7" />
            <circle cx="-35" cy="-23" r="2.5" fill="#003580" opacity="0.7" />
            <circle cx="-11" cy="-23" r="2" fill="#003580" opacity="0.7" />
            <circle cx="-23" cy="-11" r="2" fill="#003580" opacity="0.7" />
          </g>

          {/* 2. GREEN DIAMOND (Left when rotated 45deg) - Modern Rectangular Floor Tiles */}
          <g clipPath="url(#green-diamond-clip)">
            {/* Background */}
            <rect x="-41" y="3" width="38" height="38" fill="#009A44" />
            {/* Elegant Tile Grid Lines */}
            <line x1="-41" y1="12.5" x2="-3" y2="12.5" stroke="#005a26" strokeWidth="1" />
            <line x1="-41" y1="22" x2="-3" y2="22" stroke="#005a26" strokeWidth="1" />
            <line x1="-41" y1="31.5" x2="-3" y2="31.5" stroke="#005a26" strokeWidth="1" />
            
            <line x1="-31.5" y1="3" x2="-31.5" y2="41" stroke="#005a26" strokeWidth="1" />
            <line x1="-22" y1="3" x2="-22" y2="41" stroke="#005a26" strokeWidth="1" />
            <line x1="-12.5" y1="3" x2="-12.5" y2="41" stroke="#005a26" strokeWidth="1" />
          </g>

          {/* 3. YELLOW DIAMOND (Right when rotated 45deg) - Hexagonal Honeycomb/Decor Tiles */}
          <g clipPath="url(#yellow-diamond-clip)">
            {/* Background */}
            <rect x="3" y="-41" width="38" height="38" fill="#FFC000" />
            
            {/* Honeycomb cells (Hexagonal pattern lines) */}
            {/* Row 1 */}
            <path d="M 5 -36 L 9 -38.3 L 14 -38.3 L 18 -36 L 14 -33.7 L 9 -33.7 Z" stroke="#C69000" strokeWidth="0.8" fill="none" />
            <path d="M 18 -36 L 22 -38.3 L 27 -38.3 L 31 -36 L 27 -33.7 L 22 -33.7 Z" stroke="#C69000" strokeWidth="0.8" fill="none" />
            <path d="M 31 -36 L 35 -38.3 L 40 -38.3 L 44 -36 L 40 -33.7 L 35 -33.7 Z" stroke="#C69000" strokeWidth="0.8" fill="none" />
            
            {/* Row 2 (offset) */}
            <path d="M 11.5 -27.5 L 15.5 -29.8 L 20.5 -29.8 L 24.5 -27.5 L 20.5 -25.2 L 15.5 -25.2 Z" stroke="#C69000" strokeWidth="0.8" fill="none" />
            <path d="M 24.5 -27.5 L 28.5 -29.8 L 33.5 -29.8 L 37.5 -27.5 L 33.5 -25.2 L 28.5 -25.2 Z" stroke="#C69000" strokeWidth="0.8" fill="none" />
            
            {/* Row 3 */}
            <path d="M 5 -19 L 9 -21.3 L 14 -21.3 L 18 -19 L 14 -16.7 L 9 -16.7 Z" stroke="#C69000" strokeWidth="0.8" fill="none" />
            <path d="M 18 -19 L 22 -21.3 L 27 -21.3 L 31 -19 L 27 -16.7 L 22 -16.7 Z" stroke="#C69000" strokeWidth="0.8" fill="none" />
            <path d="M 31 -19 L 35 -21.3 L 40 -21.3 L 44 -19 L 40 -16.7 L 35 -16.7 Z" stroke="#C69000" strokeWidth="0.8" fill="none" />

            {/* Row 4 (offset) */}
            <path d="M 11.5 -10.5 L 15.5 -12.8 L 20.5 -12.8 L 24.5 -10.5 L 20.5 -8.2 L 15.5 -8.2 Z" stroke="#C69000" strokeWidth="0.8" fill="none" />
            <path d="M 24.5 -10.5 L 28.5 -12.8 L 33.5 -12.8 L 37.5 -10.5 L 33.5 -8.2 L 28.5 -8.2 Z" stroke="#C69000" strokeWidth="0.8" fill="none" />

            {/* Row 5 */}
            <path d="M 5 -2 L 9 -4.3 L 14 -4.3 L 18 -2 L 14 0.3 L 9 0.3 Z" stroke="#C69000" strokeWidth="0.8" fill="none" />
            <path d="M 18 -2 L 22 -4.3 L 27 -4.3 L 31 -2 L 27 0.3 L 22 0.3 Z" stroke="#C69000" strokeWidth="0.8" fill="none" />
            <path d="M 31 -2 L 35 -4.3 L 40 -4.3 L 44 -2 L 40 0.3 L 35 0.3 Z" stroke="#C69000" strokeWidth="0.8" fill="none" />
          </g>

          {/* 4. RED DIAMOND (Bottom when rotated 45deg) - Checkerboard Ceramic Tile Mosaic */}
          <g clipPath="url(#red-diamond-clip)">
            {/* Background */}
            <rect x="3" y="3" width="38" height="38" fill="#E31B1B" />
            
            {/* Checker Tiles (Draw smaller square grid with alternate color shades) */}
            <rect x="3" y="3" width="9.5" height="9.5" fill="#C11010" />
            <rect x="22" y="3" width="9.5" height="9.5" fill="#C11010" />
            
            <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#C11010" />
            <rect x="31.5" y="12.5" width="9.5" height="9.5" fill="#C11010" />
            
            <rect x="3" y="22" width="9.5" height="9.5" fill="#C11010" />
            <rect x="22" y="22" width="9.5" height="9.5" fill="#C11010" />
            
            <rect x="12.5" y="31.5" width="9.5" height="9.5" fill="#C11010" />
            <rect x="31.5" y="31.5" width="9.5" height="9.5" fill="#C11010" />

            {/* Grid Line Separators */}
            <line x1="3" y1="12.5" x2="41" y2="12.5" stroke="#9A0505" strokeWidth="0.8" />
            <line x1="3" y1="22" x2="41" y2="22" stroke="#9A0505" strokeWidth="0.8" />
            <line x1="3" y1="31.5" x2="41" y2="31.5" stroke="#9A0505" strokeWidth="0.8" />
            
            <line x1="12.5" y1="3" x2="12.5" y2="41" stroke="#9A0505" strokeWidth="0.8" />
            <line x1="22" y1="3" x2="22" y2="41" stroke="#9A0505" strokeWidth="0.8" />
            <line x1="31.5" y1="3" x2="31.5" y2="41" stroke="#9A0505" strokeWidth="0.8" />
          </g>

        </g>

        {/* TYPOGRAPHY COMPONENT: Only rendered when iconOnly = false */}
        {!iconOnly && (
          <g id="vsk-logo-text">
            {/* Heavy "VSK" brand letters */}
            <text
              x="138"
              y="94"
              fill={textColor}
              fontFamily="'Inter', 'Arial Black', sans-serif"
              fontSize="106"
              fontWeight="900"
              letterSpacing="-2px"
            >
              VSK
            </text>

            {/* Subtext description tagline: "VIJAYA SAI KRISHNA AGENCIES" */}
            <text
              x="142"
              y="126"
              fill={textColor}
              fontFamily="'Inter', 'Arial', sans-serif"
              fontSize="16.5"
              fontWeight="800"
              letterSpacing="2.8px"
            >
              VIJAYA SAI KRISHNA AGENCIES
            </text>
          </g>
        )}

      </g>
    </svg>
  );
}
