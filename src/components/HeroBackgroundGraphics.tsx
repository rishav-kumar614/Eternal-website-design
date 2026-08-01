import React from 'react';

export const HeroBackgroundGraphics: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      
      {/* 1. Flowing Gold Silk Waves (Tribute in Motion Vector Curves) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 sm:opacity-25"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="goldWaveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#F3E5AB" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8B6914" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="goldWaveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#AA820A" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#D4AF37" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Sweeping Wave 1 */}
        <path
          d="M-100,250 C300,100 600,450 1100,180 C1300,70 1500,200 1600,250"
          fill="none"
          stroke="url(#goldWaveGrad1)"
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDuration: '6s' }}
        />

        {/* Sweeping Wave 2 */}
        <path
          d="M-150,380 C250,220 700,520 1200,280 C1400,180 1550,320 1650,350"
          fill="none"
          stroke="url(#goldWaveGrad2)"
          strokeWidth="1.5"
        />

        {/* Sweeping Wave 3 (Accent Ribbon) */}
        <path
          d="M-50,480 C350,320 800,600 1300,400 C1450,340 1600,420 1700,450"
          fill="none"
          stroke="url(#goldWaveGrad1)"
          strokeWidth="1"
          strokeDasharray="8,6"
        />
      </svg>

      {/* 2. Royal Lotus Emblem & Crest Watermark (Behind Vehicle on Right) */}
      <div className="absolute top-1/2 right-[5%] sm:right-[10%] -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] opacity-10 sm:opacity-15 pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full animate-spin-slow"
          style={{ animationDuration: '90s' }}
        >
          <defs>
            <radialGradient id="lotusGold" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF5D6" />
              <stop offset="60%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#8B6914" />
            </radialGradient>
          </defs>

          {/* Outer Ornamental Ring */}
          <circle cx="100" cy="100" r="92" fill="none" stroke="url(#lotusGold)" strokeWidth="0.75" strokeDasharray="4 3" />
          <circle cx="100" cy="100" r="84" fill="none" stroke="url(#lotusGold)" strokeWidth="0.5" />

          {/* 8 Lotus Petal Symmetry */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
            <g key={idx} transform={`rotate(${angle} 100 100)`}>
              <path
                d="M100,20 C112,50 115,75 100,100 C85,75 88,50 100,20 Z"
                fill="none"
                stroke="url(#lotusGold)"
                strokeWidth="0.8"
              />
              <circle cx="100" cy="40" r="2" fill="url(#lotusGold)" />
            </g>
          ))}

          {/* Inner Crest Core */}
          <circle cx="100" cy="100" r="30" fill="none" stroke="url(#lotusGold)" strokeWidth="1" />
          <circle cx="100" cy="100" r="12" fill="url(#lotusGold)" opacity="0.4" />
        </svg>
      </div>

    </div>
  );
};
