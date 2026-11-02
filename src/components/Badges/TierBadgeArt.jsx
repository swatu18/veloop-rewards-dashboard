import React from 'react';

/* ═══════════════════════════════════════════════════════════════════════════
   TierBadgeArt.jsx  –  AAA Gaming Tier Badges
   Gold, Silver, Bronze & Platinum Metallic Finishes | Multi-Layer 3D Bevels
   Authentic Rarity Levels: Common, Uncommon, Rare, Epic, Legendary, Mythic
═══════════════════════════════════════════════════════════════════════════ */

export const TIER_METADATA = {
  1: {
    name: 'Bronze Scout',
    themeName: 'Bronze Legionnaire',
    rarity: 'COMMON',
    rarityColor: '#CD7F32',
    finish: 'Hammered Bronze',
    primary: '#CD7F32',
    secondary: '#8B4513',
    highlight: '#FFE4C4',
    dark: '#3A1E0B',
    glow: 'rgba(205, 127, 50, 0.65)',
    shape: 'Norman Knight Shield',
    stars: 1,
    description: 'Awarded to initiates who begin their journey across the VELOOP realm.',
  },
  2: {
    name: 'Silver Pioneer',
    themeName: 'Titanium Aegis',
    rarity: 'UNCOMMON',
    rarityColor: '#E2E8F0',
    finish: 'Polished Titanium Silver',
    primary: '#E2E8F0',
    secondary: '#94A3B8',
    highlight: '#FFFFFF',
    dark: '#1E293B',
    glow: 'rgba(226, 232, 240, 0.65)',
    shape: 'Winged Titanium Chevron',
    stars: 2,
    description: 'Forged from tempered titanium for trailblazers completing early daily missions.',
  },
  3: {
    name: 'Gold Vanguard',
    themeName: 'Imperial Aureus',
    rarity: 'RARE',
    rarityColor: '#F59E0B',
    finish: '24K Mirrored Gold',
    primary: '#F59E0B',
    secondary: '#B45309',
    highlight: '#FFFBEB',
    dark: '#451A03',
    glow: 'rgba(245, 158, 11, 0.75)',
    shape: 'Laurel Octagon Crest',
    stars: 3,
    description: 'Wreathed in imperial gold laurels, earned by consistent weekly high scorers.',
  },
  4: {
    name: 'Platinum Elite',
    themeName: 'Cyber Platinum',
    rarity: 'EPIC',
    rarityColor: '#38BDF8',
    finish: 'Frosted Cyber Platinum',
    primary: '#38BDF8',
    secondary: '#0284C7',
    highlight: '#E0F2FE',
    dark: '#082F49',
    glow: 'rgba(56, 189, 248, 0.75)',
    shape: 'Faceted Diamond Hexagon',
    stars: 3,
    description: 'Infused with cyan power conduits, reserved for elite tactical performers.',
  },
  5: {
    name: 'Diamond Champion',
    themeName: 'Celestial Diamond',
    rarity: 'LEGENDARY',
    rarityColor: '#FBBF24',
    finish: 'Celestial Gold & Diamond',
    primary: '#67E8F9',
    goldPrimary: '#F59E0B',
    secondary: '#0891B2',
    highlight: '#FFFBEB',
    dark: '#083344',
    glow: 'rgba(245, 158, 11, 0.85)',
    shape: 'Winged Sun-Shield Plaque',
    stars: 4,
    description: 'The pinnacle of active achievement. Adorned with radiant gold wings and 4 stars.',
  },
  6: {
    name: 'Master Sovereign',
    themeName: 'Imperial Sovereign',
    rarity: 'MYTHIC',
    rarityColor: '#C084FC',
    finish: 'Royal Amethyst & Gold',
    primary: '#C084FC',
    secondary: '#7E22CE',
    highlight: '#FAF5FF',
    dark: '#3B0764',
    glow: 'rgba(192, 132, 252, 0.8)',
    shape: 'Crowned Sovereign Crest',
    stars: 4,
    description: 'Unlocks the Milestone Vault with +500 VEs, +25 Gems, and exclusive high-tier privileges.',
  },
  7: {
    name: 'Grand Ascendant',
    themeName: 'Sapphire Ascendant',
    rarity: 'MYTHIC',
    rarityColor: '#60A5FA',
    finish: 'Star Sapphire & Platinum',
    primary: '#60A5FA',
    secondary: '#1D4ED8',
    highlight: '#EFF6FF',
    dark: '#172554',
    glow: 'rgba(96, 165, 250, 0.8)',
    shape: 'Dual-Winged Star',
    stars: 5,
    description: 'Channeling astral sapphire resonance, granting top conversion multipliers.',
  },
  8: {
    name: 'Mythic Vanguard',
    themeName: 'Emerald Dragoncrest',
    rarity: 'MYTHIC',
    rarityColor: '#34D399',
    finish: 'Prismatic Dragon Emerald',
    primary: '#34D399',
    secondary: '#059669',
    highlight: '#ECFDF5',
    dark: '#064E3B',
    glow: 'rgba(52, 211, 153, 0.8)',
    shape: 'Dragonscale Shield',
    stars: 5,
    description: 'Infused with ancient dragon scales, unlocking limitless daily rewards.',
  },
  9: {
    name: 'Cosmic Overlord',
    themeName: 'Nebula Stargate',
    rarity: 'DIVINE',
    rarityColor: '#F472B6',
    finish: 'Nebula Stargate Glass',
    primary: '#F472B6',
    secondary: '#A21CAF',
    highlight: '#FDF2F8',
    dark: '#4A044E',
    glow: 'rgba(244, 114, 182, 0.85)',
    shape: 'Stargate Ring',
    stars: 5,
    description: 'Pours cosmic energy through a rotating celestial ring of infinite multiplier power.',
  },
  10: {
    name: 'Immortal Legend',
    themeName: 'Solar Divinity',
    rarity: 'DIVINE',
    rarityColor: '#FBBF24',
    finish: 'Solar Molten Gold',
    primary: '#FBBF24',
    secondary: '#B45309',
    highlight: '#FFFBEB',
    dark: '#2A1800',
    glow: 'rgba(251, 191, 36, 0.95)',
    shape: '12-Point Sunburst',
    stars: 5,
    description: 'The supreme rank of VELOOP. A blinding 12-point solar crest forged in molten starlight.',
  },
};

/* ─── Level 1: Bronze Scout (Hammered Bronze Knight Shield) ──────────────── */
function ArtLevel1({ id }) {
  return (
    <>
      <defs>
        <linearGradient id={`l1-bronze-outer-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="25%" stopColor="#D9822B" />
          <stop offset="60%" stopColor="#A0522D" />
          <stop offset="90%" stopColor="#6E2C00" />
          <stop offset="100%" stopColor="#3E1400" />
        </linearGradient>
        <linearGradient id={`l1-bronze-plate-${id}`} x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#8C4A1E" />
          <stop offset="40%" stopColor="#663110" />
          <stop offset="80%" stopColor="#4A1E06" />
          <stop offset="100%" stopColor="#2E1102" />
        </linearGradient>
        <linearGradient id={`l1-sheen-${id}`} x1="0%" y1="0%" x2="100%" y2="80%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="45%" stopColor="#FFE4C4" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {/* Heavy 3D Cast Shadow */}
      <path d="M 60 12 L 102 28 L 102 72 C 102 100 60 118 60 118 C 60 118 18 100 18 72 L 18 28 Z"
        fill="#000000" opacity="0.6" filter="blur(4px)" />
      {/* Outer Bronze Shield Rim with Bevel */}
      <path d="M 60 8 L 100 24 L 100 70 C 100 96 60 114 60 114 C 60 114 20 96 20 70 L 20 24 Z"
        fill={`url(#l1-bronze-outer-${id})`} stroke="#FFE4C4" strokeWidth="1.2" />
      {/* Inner Recessed Bronze Plate */}
      <path d="M 60 14 L 94 28 L 94 68 C 94 90 60 106 60 106 C 60 106 26 90 26 68 L 26 28 Z"
        fill={`url(#l1-bronze-plate-${id})`} stroke="#3E1400" strokeWidth="1.5" />
      {/* Metallic Sheen Overlay */}
      <path d="M 60 14 L 94 28 L 94 68 C 94 90 60 106 60 106 Z"
        fill={`url(#l1-sheen-${id})`} opacity="0.6" />
      {/* Embossed Knight Crossed Swords */}
      <g stroke="#D9822B" strokeWidth="2" strokeLinecap="round" opacity="0.45">
        <line x1="38" y1="42" x2="82" y2="86" />
        <line x1="38" y1="86" x2="82" y2="42" />
        <circle cx="60" cy="64" r="5" fill="#A0522D" stroke="#FFE4C4" strokeWidth="1" />
      </g>
      {/* Beveled Rim Rivets */}
      <circle cx="60" cy="18" r="2.4" fill="#FFE4C4" stroke="#6E2C00" strokeWidth="0.8" />
      <circle cx="90" cy="32" r="2.4" fill="#FFE4C4" stroke="#6E2C00" strokeWidth="0.8" />
      <circle cx="30" cy="32" r="2.4" fill="#FFE4C4" stroke="#6E2C00" strokeWidth="0.8" />
      <circle cx="60" cy="100" r="2.4" fill="#FFE4C4" stroke="#6E2C00" strokeWidth="0.8" />
    </>
  );
}

/* ─── Level 2: Silver Pioneer (Polished Titanium Silver Chevron) ─────────── */
function ArtLevel2({ id }) {
  return (
    <>
      <defs>
        <linearGradient id={`l2-silver-rim-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#E2E8F0" />
          <stop offset="60%" stopColor="#94A3B8" />
          <stop offset="90%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
        <linearGradient id={`l2-silver-plate-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="50%" stopColor="#334155" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
        <linearGradient id={`l2-chrome-facet-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#CBD5E1" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#64748B" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {/* Drop Shadow */}
      <polygon points="60,14 100,32 100,76 60,116 20,76 20,32" fill="#000000" opacity="0.6" filter="blur(4px)" />
      {/* Side Wing Blades */}
      <path d="M 14 36 L 24 24 L 30 46 L 14 72 Z" fill={`url(#l2-silver-rim-${id})`} stroke="#FFFFFF" strokeWidth="0.8" />
      <path d="M 106 36 L 96 24 L 90 46 L 106 72 Z" fill={`url(#l2-silver-rim-${id})`} stroke="#FFFFFF" strokeWidth="0.8" />
      {/* Main Chevron Outer Shield */}
      <polygon points="60,10 98,28 98,72 60,112 22,72 22,28"
        fill={`url(#l2-silver-rim-${id})`} stroke="#FFFFFF" strokeWidth="1.2" />
      {/* Recessed Titanium Plate */}
      <polygon points="60,16 92,32 92,70 60,104 28,70 28,32"
        fill={`url(#l2-silver-plate-${id})`} stroke="#1E293B" strokeWidth="1.5" />
      {/* Polished Chrome Chevron Facet Overlays */}
      <polygon points="60,16 92,32 60,70" fill={`url(#l2-chrome-facet-${id})`} />
      <path d="M 38 48 L 60 60 L 82 48" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M 44 88 L 60 98 L 76 88" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* Silver Chrome Rivets */}
      <circle cx="60" cy="18" r="2.5" fill="#FFFFFF" stroke="#475569" strokeWidth="0.8" />
      <circle cx="92" cy="34" r="2.5" fill="#FFFFFF" stroke="#475569" strokeWidth="0.8" />
      <circle cx="28" cy="34" r="2.5" fill="#FFFFFF" stroke="#475569" strokeWidth="0.8" />
    </>
  );
}

/* ─── Level 3: Gold Vanguard (24K Mirrored Gold Laurel Octagon) ─────────── */
function ArtLevel3({ id }) {
  return (
    <>
      <defs>
        <linearGradient id={`l3-gold-rim-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="25%" stopColor="#FDE68A" />
          <stop offset="55%" stopColor="#F59E0B" />
          <stop offset="85%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
        <linearGradient id={`l3-gold-plate-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#78350F" />
          <stop offset="40%" stopColor="#5B2406" />
          <stop offset="100%" stopColor="#351402" />
        </linearGradient>
        <radialGradient id={`l3-gold-glow-${id}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#78350F" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Laurel Wings Left */}
      <g stroke={`url(#l3-gold-rim-${id})`} strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M 30 38 Q 16 60 26 84" />
        <circle cx="20" cy="52" r="3" fill="#FDE68A" stroke="#78350F" strokeWidth="0.8" />
        <circle cx="18" cy="68" r="3" fill="#FDE68A" stroke="#78350F" strokeWidth="0.8" />
      </g>
      {/* Laurel Wings Right */}
      <g stroke={`url(#l3-gold-rim-${id})`} strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M 90 38 Q 104 60 94 84" />
        <circle cx="100" cy="52" r="3" fill="#FDE68A" stroke="#78350F" strokeWidth="0.8" />
        <circle cx="102" cy="68" r="3" fill="#FDE68A" stroke="#78350F" strokeWidth="0.8" />
      </g>
      {/* Main 24K Gold Octagon */}
      <polygon points="40,10 80,10 102,32 102,88 80,110 40,110 18,88 18,32"
        fill={`url(#l3-gold-rim-${id})`} stroke="#FFFBEB" strokeWidth="1.5" />
      {/* Inner Recessed Golden Plate */}
      <polygon points="42,14 78,14 97,33 97,85 78,104 42,104 23,85 23,33"
        fill={`url(#l3-gold-plate-${id})`} stroke="#451A03" strokeWidth="1.5" />
      {/* Radiant Amber Core Glow */}
      <polygon points="42,14 78,14 97,33 97,85 78,104 42,104 23,85 23,33"
        fill={`url(#l3-gold-glow-${id})`} />
      {/* Inset Gold Line Pattern */}
      <polygon points="45,18 75,18 92,35 92,82 75,98 45,98 28,82 28,35"
        stroke="#FDE68A" strokeWidth="1.2" fill="none" opacity="0.6" strokeDasharray="5 3" />
      {/* Top Center Ruby Medallion */}
      <polygon points="60,14 65,21 60,28 55,21" fill="#DC2626" stroke="#FFFBEB" strokeWidth="1" />
    </>
  );
}

/* ─── Level 4: Platinum Elite (Cyber Platinum Faceted Hexagon) ───────────── */
function ArtLevel4({ id }) {
  return (
    <>
      <defs>
        <linearGradient id={`l4-plat-outer-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#E0F2FE" />
          <stop offset="60%" stopColor="#38BDF8" />
          <stop offset="85%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
        <linearGradient id={`l4-plat-core-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0C4A6E" />
          <stop offset="50%" stopColor="#073047" />
          <stop offset="100%" stopColor="#031A29" />
        </linearGradient>
        <radialGradient id={`l4-cyan-aura-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0369A1" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Outer Cyan Conduit Ring */}
      <polygon points="60,4 106,30 106,90 60,116 14,90 14,30"
        stroke="#38BDF8" strokeWidth="1.5" fill="none" opacity="0.5" strokeDasharray="6 3" />
      {/* Main Platinum Hexagon Shield */}
      <polygon points="60,10 100,33 100,87 60,110 20,87 20,33"
        fill={`url(#l4-plat-outer-${id})`} stroke="#FFFFFF" strokeWidth="1.5" />
      {/* Recessed Cyan-Infused Platinum Plate */}
      <polygon points="60,15 94,35 94,83 60,103 26,83 26,35"
        fill={`url(#l4-plat-core-${id})`} stroke="#03253B" strokeWidth="1.5" />
      {/* Radiant Cyan Core */}
      <polygon points="60,15 94,35 94,83 60,103 26,83 26,35"
        fill={`url(#l4-cyan-aura-${id})`} />
      {/* Cross Conduit Laser Lines */}
      <line x1="60" y1="18" x2="60" y2="100" stroke="#7DD3FC" strokeWidth="1.2" opacity="0.45" />
      <line x1="28" y1="59" x2="92" y2="59" stroke="#7DD3FC" strokeWidth="1.2" opacity="0.45" />
      {/* Top Cyan Diamond Gem */}
      <polygon points="60,12 67,22 60,32 53,22" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.2" />
    </>
  );
}

/* ─── Level 5: Diamond Champion (Celestial Gold & Diamond Sun-Shield) ────── */
function ArtLevel5({ id }) {
  return (
    <>
      <defs>
        {/* 24K Mirrored Gold Frame */}
        <linearGradient id={`l5-gold-frame-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="20%" stopColor="#FFFBEB" />
          <stop offset="45%" stopColor="#FDE68A" />
          <stop offset="70%" stopColor="#F59E0B" />
          <stop offset="90%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
        {/* Deep Royal Gold Plate */}
        <linearGradient id={`l5-core-plate-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#451A03" />
          <stop offset="35%" stopColor="#2E1102" />
          <stop offset="70%" stopColor="#1E0B01" />
          <stop offset="100%" stopColor="#0F0500" />
        </linearGradient>
        {/* Diamond Refractive Highlight */}
        <radialGradient id={`l5-sun-aura-${id}`} cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#78350F" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Flanking Golden Tier Wing Blades */}
      <g fill={`url(#l5-gold-frame-${id})`} stroke="#FFFBEB" strokeWidth="0.8">
        {/* Left Wing Blades */}
        <path d="M 12 36 L 24 22 L 32 44 L 14 74 Z" />
        <path d="M 6 50 L 16 40 L 22 58 L 8 76 Z" opacity="0.8" />
        {/* Right Wing Blades */}
        <path d="M 108 36 L 96 22 L 88 44 L 106 74 Z" />
        <path d="M 114 50 L 104 40 L 98 58 L 112 76 Z" opacity="0.8" />
      </g>

      {/* Main Beveled Gold Sun-Shield Plaque */}
      <polygon points="42,10 78,10 102,30 102,86 78,108 42,108 18,86 18,30"
        fill={`url(#l5-gold-frame-${id})`} stroke="#FFFBEB" strokeWidth="1.8" />

      {/* Inner Recessed Obsidian Gold Plate */}
      <polygon points="44,14 76,14 97,32 97,84 76,104 44,104 23,84 23,32"
        fill={`url(#l5-core-plate-${id})`} stroke="#451A03" strokeWidth="1.5" />

      {/* Radiant Sun Aura Core */}
      <polygon points="44,14 76,14 97,32 97,84 76,104 44,104 23,84 23,32"
        fill={`url(#l5-sun-aura-${id})`} />

      {/* Inset Gold Bevel Trim */}
      <polygon points="47,18 73,18 92,35 92,81 73,100 47,100 28,81 28,35"
        stroke="#FDE68A" strokeWidth="1.2" fill="none" opacity="0.65" strokeDasharray="4 2" />

      {/* Top Radiant Diamond Gem */}
      <polygon points="60,10 68,22 60,34 52,22" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="1.2" />
      <polygon points="60,10 68,22 60,26 52,22" fill="#FFFFFF" opacity="0.9" />

      {/* Gold Corner Studs */}
      <circle cx="43" cy="15" r="2.2" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.8" />
      <circle cx="77" cy="15" r="2.2" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.8" />
      <circle cx="96" cy="33" r="2.2" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.8" />
      <circle cx="24" cy="33" r="2.2" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.8" />
      <circle cx="96" cy="83" r="2.2" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.8" />
      <circle cx="24" cy="83" r="2.2" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.8" />
    </>
  );
}

/* ─── Level 6: Master Sovereign (Royal Crowned Amethyst & Gold Crest) ─────── */
function ArtLevel6({ id }) {
  return (
    <>
      <defs>
        <linearGradient id={`l6-amethyst-outer-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAF5FF" />
          <stop offset="25%" stopColor="#E9D5FF" />
          <stop offset="55%" stopColor="#C084FC" />
          <stop offset="85%" stopColor="#7E22CE" />
          <stop offset="100%" stopColor="#3B0764" />
        </linearGradient>
        <linearGradient id={`l6-amethyst-core-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3B0764" />
          <stop offset="50%" stopColor="#250540" />
          <stop offset="100%" stopColor="#130222" />
        </linearGradient>
        <radialGradient id={`l6-purple-glow-${id}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#C084FC" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7E22CE" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Triple Sovereign Crown Finials on Top */}
      <polygon points="60,4 65,14 55,14" fill="#FDE68A" stroke="#78350F" strokeWidth="0.8" />
      <polygon points="40,8 44,16 36,16" fill="#FDE68A" stroke="#78350F" strokeWidth="0.8" />
      <polygon points="80,8 84,16 76,16" fill="#FDE68A" stroke="#78350F" strokeWidth="0.8" />

      {/* Crown Rim Bar */}
      <rect x="32" y="14" width="56" height="5" rx="2" fill="url(#l6-amethyst-outer-${id})" stroke="#FAF5FF" strokeWidth="0.8" />

      {/* Main Sovereign Shield */}
      <polygon points="34,18 86,18 102,40 102,78 60,114 18,78 18,40"
        fill={`url(#l6-amethyst-outer-${id})`} stroke="#FAF5FF" strokeWidth="1.6" />

      {/* Inner Recessed Amethyst Core */}
      <polygon points="37,22 83,22 97,42 97,76 60,108 23,76 23,42"
        fill={`url(#l6-amethyst-core-${id})`} stroke="#3B0764" strokeWidth="1.5" />

      {/* Purple Glow */}
      <polygon points="37,22 83,22 97,42 97,76 60,108 23,76 23,42"
        fill={`url(#l6-purple-glow-${id})`} />

      {/* Central Glowing Amethyst Diamond */}
      <polygon points="60,26 69,40 60,54 51,40" fill="#E9D5FF" stroke="#C084FC" strokeWidth="1.2" />
    </>
  );
}

/* ─── Levels 7-10 Art Helpers ────────────────────────────────────────────── */
function ArtLevel7({ id }) {
  return (
    <>
      <polygon points="60,6 74,38 108,38 82,60 92,94 60,74 28,94 38,60 12,38 46,38"
        fill="#3B82F6" stroke="#93C5FD" strokeWidth="2" />
      <polygon points="60,18 70,42 96,42 76,58 84,84 60,68 36,84 44,58 24,42 50,42"
        fill="#1E3A8A" stroke="#60A5FA" strokeWidth="1.5" />
    </>
  );
}

function ArtLevel8({ id }) {
  return (
    <>
      <polygon points="60,8 96,26 104,74 60,112 16,74 24,26"
        fill="#10B981" stroke="#A7F3D0" strokeWidth="2" />
      <polygon points="60,14 90,30 98,72 60,106 22,72 30,30"
        fill="#064E3B" stroke="#34D399" strokeWidth="1.5" />
    </>
  );
}

function ArtLevel9({ id }) {
  return (
    <>
      <circle cx="60" cy="60" r="50" fill="#BE185D" stroke="#F472B6" strokeWidth="3" />
      <circle cx="60" cy="60" r="42" fill="#500724" stroke="#FBCFE8" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="32" stroke="#F472B6" strokeWidth="2" strokeDasharray="6 4" fill="none" />
    </>
  );
}

function ArtLevel10({ id }) {
  return (
    <>
      <polygon points="60,2 68,24 90,8 84,32 108,28 92,48 114,60 92,72 108,92 84,88 90,112 68,96 60,118 52,96 30,112 36,88 12,92 28,72 6,60 28,48 12,28 36,32 30,8 52,24"
        fill="#F59E0B" stroke="#FFFBEB" strokeWidth="1.8" />
      <circle cx="60" cy="60" r="36" fill="#78350F" stroke="#FDE68A" strokeWidth="2" />
      <circle cx="60" cy="60" r="28" fill="#451A03" stroke="#F59E0B" strokeWidth="1" />
    </>
  );
}

/* ─── Dispatcher Function ────────────────────────────────────────────────── */
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
