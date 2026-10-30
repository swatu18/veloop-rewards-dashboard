import React from 'react';

/* ═══════════════════════════════════════════════════════════════════════════
   TierBadgeArt.jsx  –  Unique Handcrafted SVG Badge Art for All 10 Levels
   VELOOP Rewards Gaming Theme | Authentic Shapes, Depth, Bevels & Gradients
═══════════════════════════════════════════════════════════════════════════ */

export const TIER_METADATA = {
  1: {
    name: 'Bronze Scout',
    themeName: 'Bronze Legionnaire',
    primary: '#CD7F32',
    secondary: '#8B4513',
    highlight: '#F5D0A9',
    dark: '#3A1E0B',
    glow: 'rgba(205, 127, 50, 0.6)',
    shape: 'Norman Shield',
    stars: 1,
  },
  2: {
    name: 'Silver Pioneer',
    themeName: 'Titanium Aegis',
    primary: '#D4D4D8',
    secondary: '#71717A',
    highlight: '#FFFFFF',
    dark: '#18181B',
    glow: 'rgba(212, 212, 216, 0.55)',
    shape: 'Winged Chevron',
    stars: 2,
  },
  3: {
    name: 'Gold Vanguard',
    themeName: 'Imperial Aureus',
    primary: '#F59E0B',
    secondary: '#B45309',
    highlight: '#FFFBEB',
    dark: '#2E1503',
    glow: 'rgba(245, 158, 11, 0.7)',
    shape: 'Laurel Octagon',
    stars: 3,
  },
  4: {
    name: 'Platinum Elite',
    themeName: 'Cyber Platinum',
    primary: '#38BDF8',
    secondary: '#0284C7',
    highlight: '#E0F2FE',
    dark: '#082F49',
    glow: 'rgba(56, 189, 248, 0.65)',
    shape: 'Faceted Hexagon',
    stars: 3,
  },
  5: {
    name: 'Diamond Champion',
    themeName: 'Celestial Diamond',
    primary: '#67E8F9',
    goldPrimary: '#F59E0B',
    secondary: '#0891B2',
    highlight: '#FFFBEB',
    dark: '#083344',
    glow: 'rgba(103, 232, 249, 0.75)',
    shape: 'Winged Diamond Plaque',
    stars: 4,
  },
  6: {
    name: 'Master Sovereign',
    themeName: 'Imperial Sovereign',
    primary: '#C084FC',
    secondary: '#7E22CE',
    highlight: '#FAF5FF',
    dark: '#3B0764',
    glow: 'rgba(192, 132, 252, 0.7)',
    shape: 'Crowned Crest',
    stars: 4,
  },
  7: {
    name: 'Grand Ascendant',
    themeName: 'Sapphire Ascendant',
    primary: '#60A5FA',
    secondary: '#1D4ED8',
    highlight: '#EFF6FF',
    dark: '#172554',
    glow: 'rgba(96, 165, 250, 0.7)',
    shape: 'Dual-Winged Star',
    stars: 5,
  },
  8: {
    name: 'Mythic Vanguard',
    themeName: 'Emerald Dragoncrest',
    primary: '#34D399',
    secondary: '#047857',
    highlight: '#ECFDF5',
    dark: '#022C22',
    glow: 'rgba(52, 211, 153, 0.7)',
    shape: 'Dragon Aegis',
    stars: 5,
  },
  9: {
    name: 'Cosmic Overlord',
    themeName: 'Nebula Stargate',
    primary: '#F472B6',
    secondary: '#A21CAF',
    highlight: '#FDF2F8',
    dark: '#4A044E',
    glow: 'rgba(244, 114, 182, 0.75)',
    shape: 'Stargate Ring',
    stars: 5,
  },
  10: {
    name: 'Immortal Legend',
    themeName: 'Solar Divinity',
    primary: '#FBBF24',
    secondary: '#B45309',
    highlight: '#FFFBEB',
    dark: '#2A1800',
    glow: 'rgba(251, 191, 36, 0.9)',
    shape: '12-Point Sunburst',
    stars: 5,
  },
};

/* ─── Level 1: Bronze Scout (Norman Knight Shield) ───────────────────────── */
function ArtLevel1({ id }) {
  return (
    <>
      <defs>
        <linearGradient id={`l1-bronze-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D0A9" />
          <stop offset="30%" stopColor="#CD7F32" />
          <stop offset="70%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#451A03" />
        </linearGradient>
        <radialGradient id={`l1-inner-${id}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#2A180B" />
          <stop offset="70%" stopColor="#170D06" />
          <stop offset="100%" stopColor="#0B0603" />
        </radialGradient>
      </defs>
      {/* Outer shield rim */}
      <path d="M 60 8 L 100 24 L 100 70 C 100 96 60 114 60 114 C 60 114 20 96 20 70 L 20 24 Z"
        fill={`url(#l1-bronze-${id})`} filter="drop-shadow(0 4px 12px rgba(205,127,50,0.4))" />
      {/* Inner shield dark plate */}
      <path d="M 60 14 L 94 28 L 94 68 C 94 90 60 106 60 106 C 60 106 26 90 26 68 L 26 28 Z"
        fill={`url(#l1-inner-${id})`} />
      {/* Bevel inset line */}
      <path d="M 60 18 L 90 31 L 90 66 C 90 85 60 99 60 99 C 60 99 30 85 30 66 L 30 31 Z"
        stroke={`url(#l1-bronze-${id})`} strokeWidth="1" fill="none" opacity="0.4" strokeDasharray="3 2" />
      {/* Crossed Swords Engraving in background */}
      <path d="M 38 42 L 82 86 M 38 86 L 82 42" stroke="#CD7F32" strokeWidth="1.5" opacity="0.25" strokeLinecap="round" />
      {/* Bronze Corner Rivets */}
      <circle cx="60" cy="18" r="2" fill="#F5D0A9" />
      <circle cx="90" cy="32" r="2" fill="#F5D0A9" />
      <circle cx="30" cy="32" r="2" fill="#F5D0A9" />
      <circle cx="60" cy="98" r="2" fill="#F5D0A9" />
    </>
  );
}

/* ─── Level 2: Silver Pioneer (Winged Titanium Chevron) ─────────────────── */
function ArtLevel2({ id }) {
  return (
    <>
      <defs>
        <linearGradient id={`l2-silver-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#E4E4E7" />
          <stop offset="70%" stopColor="#A1A1AA" />
          <stop offset="100%" stopColor="#3F3F46" />
        </linearGradient>
        <radialGradient id={`l2-inner-${id}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#27272A" />
          <stop offset="60%" stopColor="#18181B" />
          <stop offset="100%" stopColor="#09090B" />
        </radialGradient>
      </defs>
      {/* Flanking Wing Blades */}
      <path d="M 16 38 L 26 26 L 32 46 L 16 70 Z" fill={`url(#l2-silver-${id})`} opacity="0.8" />
      <path d="M 104 38 L 94 26 L 88 46 L 104 70 Z" fill={`url(#l2-silver-${id})`} opacity="0.8" />
      {/* Outer Chevron Shield */}
      <polygon points="60,10 98,28 98,72 60,112 22,72 22,28"
        fill={`url(#l2-silver-${id})`} filter="drop-shadow(0 4px 12px rgba(212,212,216,0.35))" />
      {/* Inner Dark Core */}
      <polygon points="60,16 92,32 92,70 60,104 28,70 28,32"
        fill={`url(#l2-inner-${id})`} />
      {/* Double Chevron Accent Line */}
      <path d="M 40 45 L 60 55 L 80 45" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M 44 95 L 60 102 L 76 95" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.4" />
      {/* Silver Rivets */}
      <circle cx="60" cy="16" r="2.2" fill="#FFFFFF" />
      <circle cx="92" cy="32" r="2" fill="#FFFFFF" />
      <circle cx="28" cy="32" r="2" fill="#FFFFFF" />
    </>
  );
}

/* ─── Level 3: Gold Vanguard (Laurel Octagon Crest) ─────────────────────── */
function ArtLevel3({ id }) {
  return (
    <>
      <defs>
        <linearGradient id={`l3-gold-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="25%" stopColor="#FDE68A" />
          <stop offset="55%" stopColor="#F59E0B" />
          <stop offset="85%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
        <radialGradient id={`l3-inner-${id}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#2E1B0A" />
          <stop offset="60%" stopColor="#1A0F05" />
          <stop offset="100%" stopColor="#0B0602" />
        </radialGradient>
      </defs>
      {/* Laurel Wreath Left */}
      <path d="M 32 38 Q 18 60 28 84" stroke={`url(#l3-gold-${id})`} strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="22" cy="52" r="2.5" fill="#FFFBEB" />
      <circle cx="20" cy="70" r="2.5" fill="#FFFBEB" />
      {/* Laurel Wreath Right */}
      <path d="M 88 38 Q 102 60 92 84" stroke={`url(#l3-gold-${id})`} strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="98" cy="52" r="2.5" fill="#FFFBEB" />
      <circle cx="100" cy="70" r="2.5" fill="#FFFBEB" />
      {/* Main Beveled Octagon */}
      <polygon points="40,10 80,10 102,32 102,88 80,110 40,110 18,88 18,32"
        fill={`url(#l3-gold-${id})`} filter="drop-shadow(0 4px 14px rgba(245,158,11,0.5))" />
      {/* Inner Dark Core */}
      <polygon points="42,14 78,14 97,33 97,85 78,104 42,104 23,85 23,33"
        fill={`url(#l3-inner-${id})`} />
      {/* Inset Gold Line */}
      <polygon points="44,18 76,18 92,34 92,82 76,98 44,98 28,82 28,34"
        stroke={`url(#l3-gold-${id})`} strokeWidth="1" fill="none" opacity="0.4" strokeDasharray="4 2" />
      {/* Top Center Ruby Gem */}
      <circle cx="60" cy="18" r="3" fill="#DC2626" stroke="#FFFBEB" strokeWidth="0.8" />
    </>
  );
}

/* ─── Level 4: Platinum Elite (Cyber Platinum Hexagon) ──────────────────── */
function ArtLevel4({ id }) {
  return (
    <>
      <defs>
        <linearGradient id={`l4-plat-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#E0F2FE" />
          <stop offset="70%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <radialGradient id={`l4-inner-${id}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#0C253B" />
          <stop offset="60%" stopColor="#081827" />
          <stop offset="100%" stopColor="#030A12" />
        </radialGradient>
      </defs>
      {/* Outer Cyan Halo Ring */}
      <polygon points="60,4 106,30 106,90 60,116 14,90 14,30"
        stroke="#38BDF8" strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="5 3" />
      {/* Main Platinum Hexagon */}
      <polygon points="60,10 100,33 100,87 60,110 20,87 20,33"
        fill={`url(#l4-plat-${id})`} filter="drop-shadow(0 4px 14px rgba(56,189,248,0.5))" />
      {/* Inner Dark Hexagon */}
      <polygon points="60,15 94,35 94,83 60,103 26,83 26,35"
        fill={`url(#l4-inner-${id})`} />
      {/* Circuit Diamond Facets */}
      <line x1="60" y1="18" x2="60" y2="100" stroke="#7DD3FC" strokeWidth="0.8" opacity="0.25" />
      <line x1="26" y1="60" x2="94" y2="60" stroke="#7DD3FC" strokeWidth="0.8" opacity="0.25" />
      {/* Top Cyan Diamond Gem */}
      <polygon points="60,14 65,22 60,30 55,22" fill="#E0F2FE" />
    </>
  );
}

/* ─── Level 5: Diamond Champion (Winged Crystal Diamond Plaque - SCREEN 1) ─ */
function ArtLevel5({ id }) {
  return (
    <>
      <defs>
        {/* Rich 24K Gold Bevel Gradient */}
        <linearGradient id={`l5-gold-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="20%" stopColor="#FDE68A" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="80%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>

        {/* Refractive Cyan Diamond Gradient */}
        <linearGradient id={`l5-cyan-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#67E8F9" />
          <stop offset="50%" stopColor="#E0F2FE" />
          <stop offset="100%" stopColor="#0EA5E9" />
        </linearGradient>

        {/* Deep Obsidian Radial Core */}
        <radialGradient id={`l5-inner-${id}`} cx="50%" cy="38%" r="65%">
          <stop offset="0%" stopColor="#1E2338" />
          <stop offset="55%" stopColor="#111424" />
          <stop offset="100%" stopColor="#080911" />
        </radialGradient>
      </defs>

      {/* ── Flanking Side Wings (Screen 1 & 5 signature) ── */}
      <path d="M 12 36 L 22 24 L 26 48 L 12 68 Z" fill={`url(#l5-gold-${id})`} opacity="0.75" />
      <path d="M 108 36 L 98 24 L 94 48 L 108 68 Z" fill={`url(#l5-gold-${id})`} opacity="0.75" />

      {/* ── Outer Golden Beveled Frame (Screen 1 exact silhouette) ── */}
      <polygon
        points="30,8 90,8 104,24 104,96 90,112 30,112 16,96 16,24"
        fill={`url(#l5-gold-${id})`}
        filter="drop-shadow(0 6px 18px rgba(245,158,11,0.55))"
      />

      {/* ── Inner Deep Obsidian Plate ── */}
      <polygon
        points="32,11 88,11 99,25 99,94 88,107 32,107 21,94 21,25"
        fill={`url(#l5-inner-${id})`}
      />

      {/* ── Delicate Gold Inset Dash Ring ── */}
      <polygon
        points="34,16 86,16 93,27 93,90 86,101 34,101 27,90 27,27"
        stroke={`url(#l5-gold-${id})`}
        strokeWidth="1.2"
        fill="none"
        opacity="0.4"
        strokeDasharray="4 2"
      />

      {/* ── Top Center Diamond Gem Emblem ── */}
      <polygon
        points="60,11 67,20 60,29 53,20"
        fill={`url(#l5-cyan-${id})`}
        filter="drop-shadow(0 0 6px #67E8F9)"
      />
      <polygon points="60,13 65,20 60,27 55,20" fill="#FFFFFF" opacity="0.7" />

      {/* ── Corner 24K Gold Studs ── */}
      <circle cx="31" cy="12" r="1.6" fill="#FFFBEB" />
      <circle cx="89" cy="12" r="1.6" fill="#FFFBEB" />
      <circle cx="31" cy="106" r="1.6" fill="#FFFBEB" />
      <circle cx="89" cy="106" r="1.6" fill="#FFFBEB" />
    </>
  );
}

/* ─── Level 6: Master Sovereign (Imperial Crowned Crest - NEXT TARGET) ───── */
function ArtLevel6({ id }) {
  return (
    <>
      <defs>
        <linearGradient id={`l6-purple-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F3E8FF" />
          <stop offset="35%" stopColor="#C084FC" />
          <stop offset="70%" stopColor="#7E22CE" />
          <stop offset="100%" stopColor="#3B0764" />
        </linearGradient>
        <linearGradient id={`l6-gold-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
        <radialGradient id={`l6-inner-${id}`} cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#25083B" />
          <stop offset="70%" stopColor="#140321" />
          <stop offset="100%" stopColor="#08010E" />
        </radialGradient>
      </defs>
      {/* Imperial Crown on Top */}
      <path d="M 40 28 L 40 18 L 48 24 L 60 10 L 72 24 L 80 18 L 80 28 Z"
        fill={`url(#l6-gold-${id})`} filter="drop-shadow(0 2px 8px rgba(245,158,11,0.6))" />
      <circle cx="60" cy="10" r="2.5" fill="#FAF5FF" />
      <circle cx="40" cy="18" r="1.8" fill="#F59E0B" />
      <circle cx="80" cy="18" r="1.8" fill="#F59E0B" />
      {/* Main Royal Shield Body */}
      <polygon points="60,26 98,38 98,84 60,114 22,84 22,38"
        fill={`url(#l6-purple-${id})`} filter="drop-shadow(0 4px 16px rgba(168,85,247,0.55))" />
      {/* Inner Dark Royal Core */}
      <polygon points="60,32 92,42 92,80 60,106 28,80 28,42"
        fill={`url(#l6-inner-${id})`} />
      {/* Gold Royal Trim Inset */}
      <polygon points="60,36 86,45 86,76 60,98 34,76 34,45"
        stroke={`url(#l6-gold-${id})`} strokeWidth="1.2" fill="none" opacity="0.45" strokeDasharray="4 2" />
      {/* Amethyst Heart Gem */}
      <polygon points="60,40 66,48 60,56 54,48" fill="#F3E8FF" filter="drop-shadow(0 0 6px #C084FC)" />
    </>
  );
}

/* ─── Level 7: Grand Ascendant (Dual-Winged Star Crest) ──────────────────── */
function ArtLevel7({ id }) {
  return (
    <>
      <defs>
        <linearGradient id={`l7-blue-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EFF6FF" />
          <stop offset="30%" stopColor="#60A5FA" />
          <stop offset="70%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#172554" />
        </linearGradient>
        <radialGradient id={`l7-inner-${id}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#0B1A3B" />
          <stop offset="70%" stopColor="#060F24" />
          <stop offset="100%" stopColor="#02050D" />
        </radialGradient>
      </defs>
      {/* Upward Ascendant Wings */}
      <path d="M 24 16 L 36 28 L 22 52 Z" fill={`url(#l7-blue-${id})`} opacity="0.8" />
      <path d="M 96 16 L 84 28 L 98 52 Z" fill={`url(#l7-blue-${id})`} opacity="0.8" />
      {/* Diamond-Point Shield Body */}
      <polygon points="60,8 104,42 104,80 60,114 16,80 16,42"
        fill={`url(#l7-blue-${id})`} filter="drop-shadow(0 4px 16px rgba(59,130,246,0.6))" />
      <polygon points="60,15 97,45 97,76 60,105 23,76 23,45"
        fill={`url(#l7-inner-${id})`} />
      {/* Starburst Cross */}
      <polygon points="60,20 64,34 78,38 64,42 60,56 56,42 42,38 56,34" fill="#60A5FA" opacity="0.6" />
    </>
  );
}

/* ─── Level 8: Mythic Vanguard (Emerald Dragoncrest) ─────────────────────── */
function ArtLevel8({ id }) {
  return (
    <>
      <defs>
        <linearGradient id={`l8-emerald-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ECFDF5" />
          <stop offset="30%" stopColor="#34D399" />
          <stop offset="70%" stopColor="#047857" />
          <stop offset="100%" stopColor="#022C22" />
        </linearGradient>
        <radialGradient id={`l8-inner-${id}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#042F1F" />
          <stop offset="70%" stopColor="#021C13" />
          <stop offset="100%" stopColor="#010D09" />
        </radialGradient>
      </defs>
      {/* Dragon Flame Horns */}
      <path d="M 28 8 Q 38 24 22 40" stroke="#34D399" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 92 8 Q 82 24 98 40" stroke="#34D399" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Main Scaled Shield */}
      <polygon points="60,12 102,32 102,86 60,114 18,86 18,32"
        fill={`url(#l8-emerald-${id})`} filter="drop-shadow(0 4px 16px rgba(16,185,129,0.65))" />
      <polygon points="60,18 95,36 95,81 60,106 25,81 25,36"
        fill={`url(#l8-inner-${id})`} />
      {/* Runic Energy Core */}
      <circle cx="60" cy="24" r="3.5" fill="#ECFDF5" filter="drop-shadow(0 0 6px #34D399)" />
    </>
  );
}

/* ─── Level 9: Cosmic Overlord (Nebula Stargate Ring) ─────────────────────── */
function ArtLevel9({ id }) {
  return (
    <>
      <defs>
        <linearGradient id={`l9-pink-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDF2F8" />
          <stop offset="35%" stopColor="#F472B6" />
          <stop offset="75%" stopColor="#A21CAF" />
          <stop offset="100%" stopColor="#4A044E" />
        </linearGradient>
        <radialGradient id={`l9-inner-${id}`} cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#2E0433" />
          <stop offset="70%" stopColor="#19021C" />
          <stop offset="100%" stopColor="#0A010C" />
        </radialGradient>
      </defs>
      {/* Orbiting Stargate Rings */}
      <ellipse cx="60" cy="60" rx="55" ry="32" stroke="#F472B6" strokeWidth="1.5" fill="none" opacity="0.5" transform="rotate(-25 60 60)" />
      <ellipse cx="60" cy="60" rx="55" ry="32" stroke="#A21CAF" strokeWidth="1" fill="none" opacity="0.4" transform="rotate(25 60 60)" />
      {/* 8-Point Stargate Body */}
      <polygon points="60,8 74,28 108,28 92,60 108,92 74,92 60,112 46,92 12,92 28,60 12,28 46,28"
        fill={`url(#l9-pink-${id})`} filter="drop-shadow(0 4px 18px rgba(244,114,182,0.7))" />
      <polygon points="60,18 70,34 96,34 84,60 96,86 70,86 60,102 50,86 24,86 36,60 24,34 50,34"
        fill={`url(#l9-inner-${id})`} />
      {/* Event Horizon Core */}
      <circle cx="60" cy="24" r="3" fill="#FFF" filter="drop-shadow(0 0 8px #F472B6)" />
    </>
  );
}

/* ─── Level 10: Immortal Legend (12-Point Radiant Sunburst) ──────────────── */
function ArtLevel10({ id }) {
  return (
    <>
      <defs>
        <linearGradient id={`l10-sun-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="25%" stopColor="#FDE68A" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="75%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
        <linearGradient id={`l10-rainbow-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F472B6" />
          <stop offset="25%" stopColor="#60A5FA" />
          <stop offset="50%" stopColor="#34D399" />
          <stop offset="75%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F472B6" />
        </linearGradient>
        <radialGradient id={`l10-inner-${id}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#2E1802" />
          <stop offset="70%" stopColor="#140A00" />
          <stop offset="100%" stopColor="#080400" />
        </radialGradient>
      </defs>
      {/* Rainbow Aura Ring */}
      <circle cx="60" cy="60" r="54" stroke={`url(#l10-rainbow-${id})`} strokeWidth="2.5" fill="none" opacity="0.8" />
      {/* 12-Point Sunburst */}
      <polygon points="60,4 66,32 94,14 84,42 116,48 90,66 112,94 82,90 76,116 60,94 44,116 38,90 8,94 30,66 4,48 36,42 26,14 54,32"
        fill={`url(#l10-sun-${id})`} filter="drop-shadow(0 4px 20px rgba(245,158,11,0.85))" />
      {/* Inner Solar Shield */}
      <polygon points="60,16 64,36 86,24 78,45 102,50 82,65 98,86 74,83 68,102 60,86 52,102 46,83 22,86 38,65 18,50 42,45 34,24 56,36"
        fill={`url(#l10-inner-${id})`} />
      {/* Infinity Symbol Top Gem */}
      <circle cx="60" cy="22" r="3.5" fill="#FFFBEB" filter="drop-shadow(0 0 8px #FBBF24)" />
    </>
  );
}

/* ─── Level Artwork Dispatcher ───────────────────────────────────────────── */
export function renderTierSvg(level, id) {
  switch (level) {
    case 1:  return <ArtLevel1 id={id} />;
    case 2:  return <ArtLevel2 id={id} />;
    case 3:  return <ArtLevel3 id={id} />;
    case 4:  return <ArtLevel4 id={id} />;
    case 5:  return <ArtLevel5 id={id} />;
    case 6:  return <ArtLevel6 id={id} />;
    case 7:  return <ArtLevel7 id={id} />;
    case 8:  return <ArtLevel8 id={id} />;
    case 9:  return <ArtLevel9 id={id} />;
    case 10: return <ArtLevel10 id={id} />;
    default: return <ArtLevel5 id={id} />;
  }
}
