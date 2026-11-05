import React from 'react';

/* ═══════════════════════════════════════════════════════════════════════════
   TierBadgeArt.jsx  –  Executive Luxury 3D Metallic Gaming Plaques
   Clean, balanced, realistic, professional badges with precision bevels,
   subtle metallic highlights, and balanced glows.
   NO excessive, blinding bloom. Clean geometric finishes.
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
    dark: '#2A1408',
    glow: 'rgba(205, 127, 50, 0.25)',
    shape: 'Norman Beveled Plaque',
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
    glow: 'rgba(226, 232, 240, 0.25)',
    shape: 'Titanium Chevron Plaque',
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
    dark: '#351402',
    glow: 'rgba(245, 158, 11, 0.28)',
    shape: 'Octagonal Gold Plaque',
    stars: 3,
    description: 'Wreathed in imperial gold, earned by consistent weekly high scorers.',
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
    dark: '#031F33',
    glow: 'rgba(56, 189, 248, 0.28)',
    shape: 'Faceted Hexagon Plaque',
    stars: 3,
    description: 'Infused with cyan power conduits, reserved for elite tactical performers.',
  },
  5: {
    name: 'Diamond Champion',
    themeName: 'Celestial Diamond',
    rarity: 'LEGENDARY',
    rarityColor: '#FBBF24',
    finish: '24K Gold & Obsidian Plaque',
    primary: '#F59E0B',
    goldPrimary: '#F59E0B',
    secondary: '#D97706',
    highlight: '#FFFBEB',
    dark: '#111424',
    glow: 'rgba(245, 158, 11, 0.35)',
    shape: 'Executive Sun-Shield Plaque',
    stars: 4,
    description: 'The pinnacle of active achievement. A clean, luxury gold-beveled plaque.',
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
    dark: '#250540',
    glow: 'rgba(192, 132, 252, 0.32)',
    shape: 'Crowned Sovereign Plaque',
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
    dark: '#0F1E4A',
    glow: 'rgba(96, 165, 250, 0.3)',
    shape: 'Sapphire Crest Plaque',
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
    dark: '#063B2C',
    glow: 'rgba(52, 211, 153, 0.3)',
    shape: 'Dragonscale Shield Plaque',
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
    dark: '#3A033D',
    glow: 'rgba(244, 114, 182, 0.32)',
    shape: 'Stargate Ring Plaque',
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
    glow: 'rgba(251, 191, 36, 0.4)',
    shape: '12-Point Sunburst Plaque',
    stars: 5,
    description: 'The supreme rank of VELOOP. A clean, high-precision solar crest forged in molten starlight.',
  },
};

/* ─── Level 1: Bronze Scout (Realistic Burnished Bronze Plaque) ──────────── */
function ArtLevel1({ id }) {
  return (
    <>
      <defs>
        <linearGradient id={`l1-bronze-rim-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="25%" stopColor="#D9822B" />
          <stop offset="60%" stopColor="#A0522D" />
          <stop offset="90%" stopColor="#6E2C00" />
          <stop offset="100%" stopColor="#3E1400" />
        </linearGradient>
        <linearGradient id={`l1-bronze-plate-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2E170C" />
          <stop offset="50%" stopColor="#1E0E06" />
          <stop offset="100%" stopColor="#120803" />
        </linearGradient>
      </defs>
      {/* Subtle Depth Shadow */}
      <path d="M 60 12 L 102 28 L 102 72 C 102 100 60 118 60 118 C 60 118 18 100 18 72 L 18 28 Z"
        fill="#000000" opacity="0.4" filter="blur(3px)" />
      {/* Heavy Beveled Metallic Rim */}
      <path d="M 60 8 L 100 24 L 100 70 C 100 96 60 114 60 114 C 60 114 20 96 20 70 L 20 24 Z"
        fill={`url(#l1-bronze-rim-${id})`} stroke="#FFE4C4" strokeWidth="1.2" />
      {/* Deep Brushed Core Plate */}
      <path d="M 60 14 L 94 28 L 94 68 C 94 90 60 106 60 106 C 60 106 26 90 26 68 L 26 28 Z"
        fill={`url(#l1-bronze-plate-${id})`} stroke="#3E1400" strokeWidth="1.2" />
      {/* Inset Metallic Bevel Frame */}
      <path d="M 60 18 L 90 32 L 90 66 C 90 86 60 101 60 101 C 60 101 30 86 30 66 L 30 32 Z"
        stroke="#D9822B" strokeWidth="1" fill="none" opacity="0.4" strokeDasharray="4 2" />
      {/* Corner Studs */}
      <circle cx="60" cy="18" r="2" fill="#FFE4C4" stroke="#6E2C00" strokeWidth="0.6" />
      <circle cx="90" cy="32" r="2" fill="#FFE4C4" stroke="#6E2C00" strokeWidth="0.6" />
      <circle cx="30" cy="32" r="2" fill="#FFE4C4" stroke="#6E2C00" strokeWidth="0.6" />
      <circle cx="60" cy="100" r="2" fill="#FFE4C4" stroke="#6E2C00" strokeWidth="0.6" />
    </>
  );
}

/* ─── Level 2: Silver Pioneer (Realistic Titanium Silver Plaque) ─────────── */
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
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="50%" stopColor="#131B27" />
          <stop offset="100%" stopColor="#0B1019" />
        </linearGradient>
      </defs>
      {/* Subtle Depth Shadow */}
      <polygon points="60,14 100,32 100,76 60,116 20,76 20,32" fill="#000000" opacity="0.4" filter="blur(3px)" />
      {/* Beveled Metallic Border */}
      <polygon points="60,10 98,28 98,72 60,112 22,72 22,28"
        fill={`url(#l2-silver-rim-${id})`} stroke="#FFFFFF" strokeWidth="1.2" />
      {/* Inner Obsidian Titanium Plate */}
      <polygon points="60,16 92,32 92,70 60,104 28,70 28,32"
        fill={`url(#l2-silver-plate-${id})`} stroke="#1E293B" strokeWidth="1.2" />
      {/* Inner Inset Silver Line */}
      <polygon points="60,20 88,35 88,68 60,98 32,68 32,35"
        stroke="#E2E8F0" strokeWidth="1" fill="none" opacity="0.4" strokeDasharray="4 2" />
      {/* Corner Studs */}
      <circle cx="60" cy="18" r="2" fill="#FFFFFF" stroke="#475569" strokeWidth="0.6" />
      <circle cx="92" cy="34" r="2" fill="#FFFFFF" stroke="#475569" strokeWidth="0.6" />
      <circle cx="28" cy="34" r="2" fill="#FFFFFF" stroke="#475569" strokeWidth="0.6" />
    </>
  );
}

/* ─── Level 3: Gold Vanguard (24K Mirrored Gold Plaque) ──────────────────── */
function ArtLevel3({ id }) {
  return (
    <>
      <defs>
        <linearGradient id={`l3-gold-rim-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="20%" stopColor="#FFFBEB" />
          <stop offset="45%" stopColor="#FDE68A" />
          <stop offset="70%" stopColor="#F59E0B" />
          <stop offset="90%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
        <linearGradient id={`l3-gold-plate-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2E1B0A" />
          <stop offset="50%" stopColor="#1A0F05" />
          <stop offset="100%" stopColor="#0E0802" />
        </linearGradient>
      </defs>
      {/* Subtle Depth Shadow */}
      <polygon points="40,12 80,12 104,34 104,90 80,112 40,112 16,90 16,34" fill="#000000" opacity="0.4" filter="blur(3px)" />
      {/* Heavy 24K Gold Beveled Octagon */}
      <polygon points="40,10 80,10 102,32 102,88 80,110 40,110 18,88 18,32"
        fill={`url(#l3-gold-rim-${id})`} stroke="#FFFBEB" strokeWidth="1.4" />
      {/* Recessed Obsidian Gold Plate */}
      <polygon points="42,14 78,14 97,33 97,85 78,104 42,104 23,85 23,33"
        fill={`url(#l3-gold-plate-${id})`} stroke="#451A03" strokeWidth="1.2" />
      {/* Inset Gold Line */}
      <polygon points="45,18 75,18 92,35 92,82 75,98 45,98 28,82 28,35"
        stroke="#FDE68A" strokeWidth="1" fill="none" opacity="0.5" strokeDasharray="4 2" />
      {/* Corner Accents */}
      <circle cx="42" cy="14" r="1.8" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.6" />
      <circle cx="78" cy="14" r="1.8" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.6" />
      <circle cx="97" cy="33" r="1.8" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.6" />
      <circle cx="23" cy="33" r="1.8" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.6" />
    </>
  );
}

/* ─── Level 4: Platinum Elite (Frosted Cyber Platinum Plaque) ───────────── */
function ArtLevel4({ id }) {
  return (
    <>
      <defs>
        <linearGradient id={`l4-plat-rim-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#E0F2FE" />
          <stop offset="60%" stopColor="#38BDF8" />
          <stop offset="85%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
        <linearGradient id={`l4-plat-plate-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0C2A40" />
          <stop offset="50%" stopColor="#071926" />
          <stop offset="100%" stopColor="#030C13" />
        </linearGradient>
      </defs>
      {/* Subtle Depth Shadow */}
      <polygon points="60,12 102,35 102,89 60,112 18,89 18,35" fill="#000000" opacity="0.4" filter="blur(3px)" />
      {/* Main Platinum Hexagon Plaque */}
      <polygon points="60,10 100,33 100,87 60,110 20,87 20,33"
        fill={`url(#l4-plat-rim-${id})`} stroke="#FFFFFF" strokeWidth="1.4" />
      {/* Inner Recessed Plate */}
      <polygon points="60,15 94,35 94,83 60,103 26,83 26,35"
        fill={`url(#l4-plat-plate-${id})`} stroke="#03253B" strokeWidth="1.2" />
      {/* Inset Line */}
      <polygon points="60,19 90,38 90,80 60,98 30,80 30,38"
        stroke="#7DD3FC" strokeWidth="1" fill="none" opacity="0.4" strokeDasharray="4 2" />
      {/* Corner Studs */}
      <circle cx="60" cy="15" r="2" fill="#FFFFFF" stroke="#0369A1" strokeWidth="0.6" />
      <circle cx="94" cy="35" r="2" fill="#FFFFFF" stroke="#0369A1" strokeWidth="0.6" />
      <circle cx="26" cy="35" r="2" fill="#FFFFFF" stroke="#0369A1" strokeWidth="0.6" />
    </>
  );
}

/* ─── Level 5: Diamond Champion (EXACT SCREEN 1 LUXURY GOLD PLAQUE) ──────── */
function ArtLevel5({ id }) {
  return (
    <>
      <defs>
        {/* Realistic 24K Mirrored Gold Bevel */}
        <linearGradient id={`l5-luxury-gold-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="15%" stopColor="#FFFBEB" />
          <stop offset="40%" stopColor="#FDE68A" />
          <stop offset="65%" stopColor="#F59E0B" />
          <stop offset="85%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>

        {/* Deep Luxury Obsidian Inner Plate */}
        <linearGradient id={`l5-obsidian-core-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1A1D2E" />
          <stop offset="50%" stopColor="#10121F" />
          <stop offset="100%" stopColor="#080A12" />
        </linearGradient>

        {/* Golden Chamfer Highlight */}
        <linearGradient id={`l5-chamfer-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#FDE68A" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#D97706" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      {/* Subtle 3D Depth Shadow */}
      <polygon points="42,12 78,12 104,32 104,88 78,110 42,110 16,88 16,32"
        fill="#000000" opacity="0.45" filter="blur(3px)" />

      {/* Outer 24K Gold Beveled Chamfer Frame (Exact Screen 1 Shape) */}
      <polygon points="42,10 78,10 102,30 102,86 78,108 42,108 18,86 18,30"
        fill={`url(#l5-luxury-gold-${id})`} stroke="#FFFFFF" strokeWidth="1.4" />

      {/* Top Chamfer Light Reflection */}
      <polygon points="42,10 78,10 76,14 44,14" fill={`url(#l5-chamfer-${id})`} />

      {/* Deep Obsidian Core Plate */}
      <polygon points="44,14 76,14 97,32 97,84 76,104 44,104 23,84 23,32"
        fill={`url(#l5-obsidian-core-${id})`} stroke="#451A03" strokeWidth="1.2" />

      {/* Inset Gold Bevel Trim Line */}
      <polygon points="47,18 73,18 92,35 92,81 73,100 47,100 28,81 28,35"
        stroke="#FDE68A" strokeWidth="1" fill="none" opacity="0.6" strokeDasharray="5 2.5" />

      {/* Gold Precision Corner Rivets */}
      <circle cx="44" cy="16" r="1.8" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.6" />
      <circle cx="76" cy="16" r="1.8" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.6" />
      <circle cx="95" cy="34" r="1.8" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.6" />
      <circle cx="25" cy="34" r="1.8" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.6" />
      <circle cx="95" cy="82" r="1.8" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.6" />
      <circle cx="25" cy="82" r="1.8" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.6" />
      <circle cx="44" cy="102" r="1.8" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.6" />
      <circle cx="76" cy="102" r="1.8" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.6" />
    </>
  );
}

/* ─── Level 6: Master Sovereign (Royal Amethyst & Gold Plaque) ───────────── */
function ArtLevel6({ id }) {
  return (
    <>
      <defs>
        <linearGradient id={`l6-amethyst-rim-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAF5FF" />
          <stop offset="25%" stopColor="#E9D5FF" />
          <stop offset="55%" stopColor="#C084FC" />
          <stop offset="85%" stopColor="#7E22CE" />
          <stop offset="100%" stopColor="#3B0764" />
        </linearGradient>
        <linearGradient id={`l6-amethyst-core-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#250540" />
          <stop offset="50%" stopColor="#170329" />
          <stop offset="100%" stopColor="#0B0114" />
        </linearGradient>
      </defs>

      {/* Main Sovereign Beveled Plaque */}
      <polygon points="36,12 84,12 102,34 102,84 60,112 18,84 18,34"
        fill={`url(#l6-amethyst-rim-${id})`} stroke="#FAF5FF" strokeWidth="1.4" />

      {/* Inner Recessed Core */}
      <polygon points="39,16 81,16 97,36 97,80 60,106 23,80 23,36"
        fill={`url(#l6-amethyst-core-${id})`} stroke="#3B0764" strokeWidth="1.2" />

      {/* Inset Line */}
      <polygon points="42,20 78,20 92,38 92,76 60,100 28,76 28,38"
        stroke="#E9D5FF" strokeWidth="1" fill="none" opacity="0.5" strokeDasharray="4 2" />

      {/* Corner Studs */}
      <circle cx="39" cy="16" r="1.8" fill="#FAF5FF" stroke="#3B0764" strokeWidth="0.6" />
      <circle cx="81" cy="16" r="1.8" fill="#FAF5FF" stroke="#3B0764" strokeWidth="0.6" />
      <circle cx="97" cy="36" r="1.8" fill="#FAF5FF" stroke="#3B0764" strokeWidth="0.6" />
      <circle cx="23" cy="36" r="1.8" fill="#FAF5FF" stroke="#3B0764" strokeWidth="0.6" />
    </>
  );
}

/* ─── Level 7: Grand Ascendant (Sapphire & Platinum Crest) ─────────────────── */
function ArtLevel7({ id }) {
  return (
    <>
      <defs>
        <linearGradient id={`l7-sapphire-rim-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#BFDBFE" />
          <stop offset="60%" stopColor="#60A5FA" />
          <stop offset="85%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient id={`l7-sapphire-core-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#172554" />
          <stop offset="50%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#080D1A" />
        </linearGradient>
      </defs>
      <polygon points="60,8 100,32 100,84 60,112 20,84 20,32"
        fill={`url(#l7-sapphire-rim-${id})`} stroke="#EFF6FF" strokeWidth="1.4" />
      <polygon points="60,14 94,36 94,80 60,104 26,80 26,36"
        fill={`url(#l7-sapphire-core-${id})`} stroke="#1E3A8A" strokeWidth="1.2" />
      <polygon points="60,18 90,38 90,76 60,98 30,76 30,38"
        stroke="#93C5FD" strokeWidth="1" fill="none" opacity="0.45" strokeDasharray="4 2" />
      <circle cx="60" cy="14" r="1.8" fill="#EFF6FF" stroke="#1E3A8A" strokeWidth="0.6" />
      <circle cx="94" cy="36" r="1.8" fill="#EFF6FF" stroke="#1E3A8A" strokeWidth="0.6" />
      <circle cx="26" cy="36" r="1.8" fill="#EFF6FF" stroke="#1E3A8A" strokeWidth="0.6" />
    </>
  );
}

/* ─── Level 8: Mythic Vanguard (Emerald Dragoncrest Plaque) ──────────────── */
function ArtLevel8({ id }) {
  return (
    <>
      <defs>
        <linearGradient id={`l8-emerald-rim-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ECFDF5" />
          <stop offset="25%" stopColor="#A7F3D0" />
          <stop offset="55%" stopColor="#34D399" />
          <stop offset="85%" stopColor="#059669" />
          <stop offset="100%" stopColor="#064E3B" />
        </linearGradient>
        <linearGradient id={`l8-emerald-core-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#064E3B" />
          <stop offset="50%" stopColor="#022C22" />
          <stop offset="100%" stopColor="#01140F" />
        </linearGradient>
      </defs>
      <polygon points="60,8 98,28 102,78 60,112 18,78 22,28"
        fill={`url(#l8-emerald-rim-${id})`} stroke="#ECFDF5" strokeWidth="1.4" />
      <polygon points="60,14 92,32 96,74 60,104 24,74 28,32"
        fill={`url(#l8-emerald-core-${id})`} stroke="#064E3B" strokeWidth="1.2" />
      <polygon points="60,18 88,34 91,71 60,98 29,71 32,34"
        stroke="#6EE7B7" strokeWidth="1" fill="none" opacity="0.45" strokeDasharray="4 2" />
      <circle cx="60" cy="14" r="1.8" fill="#ECFDF5" stroke="#064E3B" strokeWidth="0.6" />
      <circle cx="92" cy="32" r="1.8" fill="#ECFDF5" stroke="#064E3B" strokeWidth="0.6" />
      <circle cx="28" cy="32" r="1.8" fill="#ECFDF5" stroke="#064E3B" strokeWidth="0.6" />
    </>
  );
}

/* ─── Level 9: Cosmic Overlord (Nebula Stargate Ring Plaque) ─────────────── */
function ArtLevel9({ id }) {
  return (
    <>
      <defs>
        <linearGradient id={`l9-pink-rim-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF1F2" />
          <stop offset="25%" stopColor="#FBCFE8" />
          <stop offset="55%" stopColor="#F472B6" />
          <stop offset="85%" stopColor="#BE185D" />
          <stop offset="100%" stopColor="#831843" />
        </linearGradient>
        <linearGradient id={`l9-pink-core-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4C0519" />
          <stop offset="50%" stopColor="#25020D" />
          <stop offset="100%" stopColor="#120106" />
        </linearGradient>
      </defs>
      <polygon points="40,10 80,10 102,32 102,88 80,110 40,110 18,88 18,32"
        fill={`url(#l9-pink-rim-${id})`} stroke="#FDF2F8" strokeWidth="1.4" />
      <polygon points="42,14 78,14 97,33 97,85 78,104 42,104 23,85 23,33"
        fill={`url(#l9-pink-core-${id})`} stroke="#831843" strokeWidth="1.2" />
      <polygon points="45,18 75,18 92,35 92,82 75,98 45,98 28,82 28,35"
        stroke="#F472B6" strokeWidth="1" fill="none" opacity="0.45" strokeDasharray="4 2" />
      <circle cx="42" cy="14" r="1.8" fill="#FDF2F8" stroke="#831843" strokeWidth="0.6" />
      <circle cx="78" cy="14" r="1.8" fill="#FDF2F8" stroke="#831843" strokeWidth="0.6" />
    </>
  );
}

/* ─── Level 10: Immortal Legend (Solar Divinity Plaque) ──────────────────── */
function ArtLevel10({ id }) {
  return (
    <>
      <defs>
        <linearGradient id={`l10-sun-rim-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="20%" stopColor="#FEF3C7" />
          <stop offset="45%" stopColor="#FBBF24" />
          <stop offset="70%" stopColor="#F59E0B" />
          <stop offset="90%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
        <linearGradient id={`l10-sun-core-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2A1800" />
          <stop offset="50%" stopColor="#170D00" />
          <stop offset="100%" stopColor="#0B0600" />
        </linearGradient>
      </defs>
      <polygon points="42,10 78,10 102,30 102,86 78,108 42,108 18,86 18,30"
        fill={`url(#l10-sun-rim-${id})`} stroke="#FFFBEB" strokeWidth="1.6" />
      <polygon points="44,14 76,14 97,32 97,84 76,104 44,104 23,84 23,32"
        fill={`url(#l10-sun-core-${id})`} stroke="#78350F" strokeWidth="1.2" />
      <polygon points="47,18 73,18 92,35 92,81 73,100 47,100 28,81 28,35"
        stroke="#FDE68A" strokeWidth="1" fill="none" opacity="0.6" strokeDasharray="4 2" />
      <circle cx="44" cy="16" r="1.8" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.6" />
      <circle cx="76" cy="16" r="1.8" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.6" />
      <circle cx="95" cy="34" r="1.8" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.6" />
      <circle cx="25" cy="34" r="1.8" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.6" />
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
