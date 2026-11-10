import React from 'react';

/* ═══════════════════════════════════════════════════════════════════════════
   TierBadgeArt.jsx – AAA Gaming-Grade 3D Metallic Progression Badges
   Featuring sculpted metallic frames, custom heraldic gaming iconography,
   multi-stop gradients, dimensional bevels, and radiant glowing auras.
   Tiers 1 to 10:
     Lvl 1:  Bronze Scout      – Crossed Broadswords & Studded Bronze Shield
     Lvl 2:  Silver Pioneer    – Titanium Aegis & Compass Star with Cyan Core
     Lvl 3:  Gold Vanguard     – Imperial 24K Gold Crest, Eagle Wings & Ruby Core
     Lvl 4:  Platinum Elite    – Cyber Diamond Matrix & Neon Circuit Prongs
     Lvl 5:  Diamond Champion  – Sovereign Sun-Shield, Golden Wings & Brilliant Diamond
     Lvl 6:  Master Sovereign  – Imperial Crown, Royal Scepters & Amethyst Crystal
     Lvl 7:  Grand Ascendant   – Astral Sapphire 8-Point Star & Celestial Wings
     Lvl 8:  Mythic Vanguard   – Draconian Horns, Emerald Dragonscales & Jade Flame
     Lvl 9:  Cosmic Overlord   – Nebula Stargate Ring, Planetary Orbit & Dark Matter
     Lvl 10: Immortal Legend   – Solar Divinity Phoenix, 12 Sunflares & Molten Halo
═══════════════════════════════════════════════════════════════════════════ */

export const TIER_METADATA = {
  1: {
    name: 'Bronze Scout',
    themeName: 'Bronze Legionnaire',
    rarity: 'COMMON',
    rarityColor: '#CD7F32',
    finish: 'Hammered Bronze & Steel',
    primary: '#CD7F32',
    secondary: '#8B4513',
    highlight: '#FFE4C4',
    dark: '#2A1408',
    glow: 'rgba(205, 127, 50, 0.45)',
    shape: 'Norman Knight Shield',
    emblem: 'Crossed Broadswords',
    stars: 1,
    description: 'Awarded to initiates who begin their journey across the VELOOP realm.',
  },
  2: {
    name: 'Silver Pioneer',
    themeName: 'Titanium Aegis',
    rarity: 'UNCOMMON',
    rarityColor: '#38BDF8',
    finish: 'Polished Titanium & Cyan Energy',
    primary: '#E2E8F0',
    secondary: '#0284C7',
    highlight: '#FFFFFF',
    dark: '#0F172A',
    glow: 'rgba(56, 189, 248, 0.45)',
    shape: 'Winged Titanium Chevron',
    emblem: 'Compass Star & Energy Gem',
    stars: 2,
    description: 'Forged from tempered titanium for trailblazers completing early daily missions.',
  },
  3: {
    name: 'Gold Vanguard',
    themeName: 'Imperial Aureus',
    rarity: 'RARE',
    rarityColor: '#F59E0B',
    finish: '24K Mirrored Gold & Lionheart Ruby',
    primary: '#F59E0B',
    secondary: '#DC2626',
    highlight: '#FFFBEB',
    dark: '#351402',
    glow: 'rgba(245, 158, 11, 0.5)',
    shape: 'Imperial Gold Sunburst',
    emblem: 'Golden Eagle & Ruby Heart',
    stars: 3,
    description: 'Wreathed in imperial gold, earned by consistent weekly high scorers.',
  },
  4: {
    name: 'Platinum Elite',
    themeName: 'Cyber Platinum',
    rarity: 'EPIC',
    rarityColor: '#38BDF8',
    finish: 'Frosted Cyber Platinum & Neon Arcs',
    primary: '#38BDF8',
    secondary: '#0369A1',
    highlight: '#E0F2FE',
    dark: '#031F33',
    glow: 'rgba(56, 189, 248, 0.55)',
    shape: 'Cybernetic Diamond Hex',
    emblem: 'Prismatic Energy Core',
    stars: 3,
    description: 'Infused with cyan power conduits, reserved for elite tactical performers.',
  },
  5: {
    name: 'Diamond Champion',
    themeName: 'Celestial Diamond',
    rarity: 'LEGENDARY',
    rarityColor: '#FBBF24',
    finish: '24K Gold, Obsidian & Brilliant Diamond',
    primary: '#F59E0B',
    goldPrimary: '#F59E0B',
    secondary: '#38BDF8',
    highlight: '#FFFBEB',
    dark: '#111424',
    glow: 'rgba(245, 158, 11, 0.65)',
    shape: 'Sovereign Sun-Shield',
    emblem: 'Brilliant Diamond & Golden Wings',
    stars: 4,
    description: 'The pinnacle of active achievement. A sovereign gold-beveled shield with diamond core.',
  },
  6: {
    name: 'Master Sovereign',
    themeName: 'Imperial Sovereign',
    rarity: 'MYTHIC',
    rarityColor: '#C084FC',
    finish: 'Royal Amethyst & Gilded Scepters',
    primary: '#C084FC',
    secondary: '#7E22CE',
    highlight: '#FAF5FF',
    dark: '#250540',
    glow: 'rgba(192, 132, 252, 0.6)',
    shape: 'Crowned Sovereign Crest',
    emblem: '5-Spire Crown & Nebula Crystal',
    stars: 4,
    description: 'Unlocks the Milestone Vault with +500 VEs, +25 Gems, and exclusive high-tier privileges.',
  },
  7: {
    name: 'Grand Ascendant',
    themeName: 'Sapphire Ascendant',
    rarity: 'MYTHIC',
    rarityColor: '#60A5FA',
    finish: 'Star Sapphire & Platinum Astrolabe',
    primary: '#60A5FA',
    secondary: '#1D4ED8',
    highlight: '#EFF6FF',
    dark: '#0F1E4A',
    glow: 'rgba(96, 165, 250, 0.6)',
    shape: '8-Point Astral Starburst',
    emblem: 'Starlight Core & Orbital Wings',
    stars: 5,
    description: 'Channeling astral sapphire resonance, granting top conversion multipliers.',
  },
  8: {
    name: 'Mythic Vanguard',
    themeName: 'Emerald Dragoncrest',
    rarity: 'MYTHIC',
    rarityColor: '#34D399',
    finish: 'Dragon Emerald & Scaled Horns',
    primary: '#34D399',
    secondary: '#059669',
    highlight: '#ECFDF5',
    dark: '#063B2C',
    glow: 'rgba(52, 211, 153, 0.6)',
    shape: 'Draconian Horned Crest',
    emblem: 'Dragon Horns & Jade Flame Core',
    stars: 5,
    description: 'Infused with ancient dragon scales, unlocking limitless daily rewards.',
  },
  9: {
    name: 'Cosmic Overlord',
    themeName: 'Nebula Stargate',
    rarity: 'DIVINE',
    rarityColor: '#F472B6',
    finish: 'Nebula Stargate & Dark Matter Pulsar',
    primary: '#F472B6',
    secondary: '#A21CAF',
    highlight: '#FDF2F8',
    dark: '#3A033D',
    glow: 'rgba(244, 114, 182, 0.65)',
    shape: 'Cosmic Stargate Ring',
    emblem: 'Planetary Rings & Cosmic Vortex',
    stars: 5,
    description: 'Pours cosmic energy through a rotating celestial ring of infinite multiplier power.',
  },
  10: {
    name: 'Immortal Legend',
    themeName: 'Solar Divinity',
    rarity: 'DIVINE',
    rarityColor: '#FBBF24',
    finish: 'Solar Molten 24K Gold & Phoenix Wings',
    primary: '#FBBF24',
    secondary: '#DC2626',
    highlight: '#FFFBEB',
    dark: '#2A1800',
    glow: 'rgba(251, 191, 36, 0.75)',
    shape: '12-Ray Solar Divinity Crest',
    emblem: 'Solar Phoenix & Triple Crown Halo',
    stars: 5,
    description: 'The supreme rank of VELOOP. A blazing solar phoenix crest forged in molten starlight.',
  },
  11: {
    name: 'Ruby Warmaster',
    themeName: 'Crimson Warmaster',
    rarity: 'MYTHIC',
    rarityColor: '#EF4444',
    finish: 'Forged Titanium & Crimson Ruby Blades',
    primary: '#EF4444',
    secondary: '#991B1B',
    highlight: '#FEE2E2',
    dark: '#2A0404',
    glow: 'rgba(239, 68, 68, 0.65)',
    shape: 'Crimson Knight Aegis',
    emblem: 'Twin Ruby Blades & Flame Core',
    stars: 4,
    description: 'Imbued with warrior flame, granting higher battle XP multipliers.',
  },
  12: {
    name: 'Topaz Sentinel',
    themeName: 'Sunstone Sentinel',
    rarity: 'MYTHIC',
    rarityColor: '#F59E0B',
    finish: 'Amber Sunstone & Solar Brass',
    primary: '#F59E0B',
    secondary: '#B45309',
    highlight: '#FEF3C7',
    dark: '#241400',
    glow: 'rgba(245, 158, 11, 0.65)',
    shape: 'Sunstone Octagon',
    emblem: 'Amber Crystal Core & Solar Aegis',
    stars: 4,
    description: 'Forged from radiant amber crystals with reinforced defensive shields.',
  },
  13: {
    name: 'Emerald Warlord',
    themeName: 'Jade Dragonlord',
    rarity: 'MYTHIC',
    rarityColor: '#10B981',
    finish: 'Draconian Emerald & Scaled Wings',
    primary: '#10B981',
    secondary: '#047857',
    highlight: '#D1FAE5',
    dark: '#022417',
    glow: 'rgba(16, 185, 129, 0.65)',
    shape: 'Draconic Dragoncrest',
    emblem: 'Twin Dragon Wings & Jade Flame',
    stars: 5,
    description: 'Infused with ancient dragon scales, commanding unlimited streak power.',
  },
  14: {
    name: 'Obsidian Knight',
    themeName: 'Darksteel Knight',
    rarity: 'MYTHIC',
    rarityColor: '#818CF8',
    finish: 'Deep Obsidian & Darksteel Claymore',
    primary: '#818CF8',
    secondary: '#4338CA',
    highlight: '#E0E7FF',
    dark: '#0C0E1E',
    glow: 'rgba(129, 140, 248, 0.65)',
    shape: 'Darksteel Claymore Shield',
    emblem: 'Crossed Claymores & Obsidian Shield',
    stars: 5,
    description: 'Master of darksteel blades and impenetrable knightly armor.',
  },
  15: {
    name: 'Prismatic Sovereign',
    themeName: 'Rainbow Prismatic',
    rarity: 'DIVINE',
    rarityColor: '#38BDF8',
    finish: '8-Facet Prismatic Diamond & Gold Laurel',
    primary: '#38BDF8',
    secondary: '#8B5CF6',
    highlight: '#FFFFFF',
    dark: '#0D152A',
    glow: 'rgba(56, 189, 248, 0.75)',
    shape: 'Prismatic Diamond Star',
    emblem: 'Rainbow Crystal Core & Golden Laurel',
    stars: 5,
    description: 'Channels prismatic spectrum refraction with boundless multiplier energy.',
  },
  16: {
    name: 'Quantum Striker',
    themeName: 'Neon Quantum Grid',
    rarity: 'DIVINE',
    rarityColor: '#06B6D4',
    finish: 'Frosted Cyber Platinum & Cyan Arcs',
    primary: '#06B6D4',
    secondary: '#0E7490',
    highlight: '#CFFAFE',
    dark: '#021C24',
    glow: 'rgba(6, 182, 212, 0.75)',
    shape: 'Quantum Hexagon Matrix',
    emblem: 'Pulsing Quantum Core & Circuit Nodes',
    stars: 5,
    description: 'Surges with subatomic quantum energy for lightning-fast progression.',
  },
  17: {
    name: 'Hyperion Titan',
    themeName: 'Molten Hyperion',
    rarity: 'DIVINE',
    rarityColor: '#F97316',
    finish: 'Volcanic Molten Gold & Firebrand Horns',
    primary: '#F97316',
    secondary: '#C2410C',
    highlight: '#FFEDD5',
    dark: '#2A0B02',
    glow: 'rgba(249, 115, 22, 0.75)',
    shape: 'Volcanic Titan Shield',
    emblem: 'Molten Core & Blazing Horns',
    stars: 5,
    description: 'Forged inside a stellar furnace with volcanic magma channels.',
  },
  18: {
    name: 'Vortex Commander',
    themeName: 'Dark Matter Vortex',
    rarity: 'DIVINE',
    rarityColor: '#A855F7',
    finish: 'Singularity Vortex & Violet Gravity Core',
    primary: '#A855F7',
    secondary: '#7E22CE',
    highlight: '#F3E8FF',
    dark: '#200533',
    glow: 'rgba(168, 85, 247, 0.75)',
    shape: 'Gravitational Singularity Ring',
    emblem: 'Cosmic Vortex & Orbiting Pulsars',
    stars: 5,
    description: 'Bends space-time to accelerate daily reward accumulation.',
  },
  19: {
    name: 'Eclipse Archon',
    themeName: 'Solar Eclipse Archon',
    rarity: 'DIVINE',
    rarityColor: '#EAB308',
    finish: 'Black Sun Eclipse Corona & Gilded Wings',
    primary: '#EAB308',
    secondary: '#854D0E',
    highlight: '#FEF9C3',
    dark: '#1C1600',
    glow: 'rgba(234, 179, 8, 0.75)',
    shape: 'Eclipse Corona Starburst',
    emblem: 'Black Sun & Blazing Solar Corona',
    stars: 5,
    description: 'Commands the total solar eclipse with twin celestial halos.',
  },
  20: {
    name: 'Chrono Sovereign',
    themeName: 'Chrono Time Lord',
    rarity: 'TRANSCENDENT',
    rarityColor: '#FBBF24',
    finish: 'Ancient Golden Time Dial & Hourglass Star',
    primary: '#FBBF24',
    secondary: '#B45309',
    highlight: '#FFFBEB',
    dark: '#241400',
    glow: 'rgba(251, 191, 36, 0.85)',
    shape: 'Celestial Time Dial',
    emblem: 'Golden Clockwork Gears & Star Hourglass',
    stars: 5,
    description: 'Master of temporal velocity, freezing streak timers permanently.',
  },
  21: {
    name: 'Nova Luminary',
    themeName: 'Supernova Luminary',
    rarity: 'TRANSCENDENT',
    rarityColor: '#EC4899',
    finish: 'Blazing Supernova Starlight & Diamond Flares',
    primary: '#EC4899',
    secondary: '#BE185D',
    highlight: '#FCE7F3',
    dark: '#300418',
    glow: 'rgba(236, 72, 153, 0.85)',
    shape: 'Supernova 8-Ray Star',
    emblem: 'Blazing Starburst & Prismatic Crown',
    stars: 5,
    description: 'Pours stellar nova light through a cascade of glowing diamond rays.',
  },
  22: {
    name: 'Starlight Paragon',
    themeName: 'Pleiades Starlight',
    rarity: 'TRANSCENDENT',
    rarityColor: '#60A5FA',
    finish: 'Constellation Sapphire & Platinum Astrolabe',
    primary: '#60A5FA',
    secondary: '#1D4ED8',
    highlight: '#EFF6FF',
    dark: '#081738',
    glow: 'rgba(96, 165, 250, 0.85)',
    shape: 'Astral Constellation Compass',
    emblem: 'Pleiades Star Cluster & Orbital Astrolabe',
    stars: 5,
    description: 'Guided by the celestial navigation of ancient star navigators.',
  },
  23: {
    name: 'Nebula Monarch',
    themeName: 'Cosmic Spiral Galaxy',
    rarity: 'TRANSCENDENT',
    rarityColor: '#C084FC',
    finish: 'Spiral Galaxy Nebula & Prismatic Dust',
    primary: '#C084FC',
    secondary: '#6B21A8',
    highlight: '#FAF5FF',
    dark: '#1D062E',
    glow: 'rgba(192, 132, 252, 0.85)',
    shape: 'Spiral Galaxy Crest',
    emblem: 'Galaxy Arms & Magenta Nebula Core',
    stars: 5,
    description: 'Reigns supreme over spiral galaxy clusters with boundless energy.',
  },
  24: {
    name: 'Pulsar Dominator',
    themeName: 'Magnetic Pulsar',
    rarity: 'TRANSCENDENT',
    rarityColor: '#38BDF8',
    finish: 'Twin Magnetic Energy Beams & Cyan Pulsar',
    primary: '#38BDF8',
    secondary: '#0369A1',
    highlight: '#F0F9FF',
    dark: '#041624',
    glow: 'rgba(56, 189, 248, 0.85)',
    shape: 'Magnetic Pulsar Star',
    emblem: 'Twin Energy Beams & Core Pulsar Gem',
    stars: 5,
    description: 'Emits periodic pulses of ultra-dense progression energy.',
  },
  25: {
    name: 'Galactic Emperor',
    themeName: 'Milky Way Emperor',
    rarity: 'TRANSCENDENT',
    rarityColor: '#F59E0B',
    finish: 'Imperial Milky Way Orb & Platinum Laurels',
    primary: '#F59E0B',
    secondary: '#92400E',
    highlight: '#FFFBEB',
    dark: '#281300',
    glow: 'rgba(245, 158, 11, 0.85)',
    shape: 'Imperial Galactic Crest',
    emblem: 'Milky Way Orb & Sovereign Golden Cape',
    stars: 5,
    description: 'Sovereign ruler of the galactic progression empire.',
  },
  26: {
    name: 'Astral Demiurge',
    themeName: 'Celestial Titan Crown',
    rarity: 'ETERNAL',
    rarityColor: '#F43F5E',
    finish: 'Titan Crown with 7 Gem Spikes & Red Gold',
    primary: '#F43F5E',
    secondary: '#9F1239',
    highlight: '#FFE4E6',
    dark: '#30030E',
    glow: 'rgba(244, 63, 94, 0.9)',
    shape: '7-Spire Titan Crown',
    emblem: 'Titan Crown & Ruby Starlight Scepter',
    stars: 5,
    description: 'Arch-architect of worlds, wreathed in ruby starlight.',
  },
  27: {
    name: 'Void Sovereign',
    themeName: 'Event Horizon Void',
    rarity: 'ETERNAL',
    rarityColor: '#A78BFA',
    finish: 'Event Horizon Black Hole & Golden Accretion',
    primary: '#A78BFA',
    secondary: '#5B21B6',
    highlight: '#EDE9FE',
    dark: '#16082B',
    glow: 'rgba(167, 139, 250, 0.9)',
    shape: 'Event Horizon Crest',
    emblem: 'Void Singularity & Golden Accretion Ring',
    stars: 5,
    description: 'Harnesses infinite gravitational density beyond the cosmic event horizon.',
  },
  28: {
    name: 'Genesis Seraph',
    themeName: 'Six-Wing Archangel',
    rarity: 'ETERNAL',
    rarityColor: '#FDE047',
    finish: 'Six Golden Seraph Wings & Divine Halos',
    primary: '#FDE047',
    secondary: '#CA8A04',
    highlight: '#FEF9C3',
    dark: '#241E00',
    glow: 'rgba(253, 224, 71, 0.9)',
    shape: 'Six-Wing Seraph Crest',
    emblem: 'Triple Halo & Outstretched Golden Feathers',
    stars: 5,
    description: 'Holy angelic guardian of infinite platform prestige and honor.',
  },
  29: {
    name: 'Eternal Overlord',
    themeName: 'Infinite Ouroboros',
    rarity: 'ETERNAL',
    rarityColor: '#34D399',
    finish: 'Emerald Dragon Ouroboros & Starlight Ring',
    primary: '#34D399',
    secondary: '#065F46',
    highlight: '#ECFDF5',
    dark: '#022418',
    glow: 'rgba(52, 211, 153, 0.9)',
    shape: 'Infinite Ouroboros Ring',
    emblem: 'Twin Emerald Dragons & Infinity Loop',
    stars: 5,
    description: 'The eternal cycle of infinite achievement and endless ascension.',
  },
  30: {
    name: 'Omni Immortal',
    themeName: 'Divine VELOOP Godtier',
    rarity: 'SUPREME',
    rarityColor: '#F59E0B',
    finish: 'Supreme 24K Solar Divinity & 16 Sunflares',
    primary: '#F59E0B',
    secondary: '#DC2626',
    highlight: '#FFFFFF',
    dark: '#1E0C00',
    glow: 'rgba(245, 158, 11, 0.95)',
    shape: '16-Ray Supreme Solar Crest',
    emblem: 'Triple Crown Halo, Phoenix Wings & Prismatic Core',
    stars: 5,
    description: 'The absolute zenith of VELOOP. An immortal celestial divinity wreathed in perpetual starlight.',
  },
};

/* ─── Level 1: Bronze Scout (Crossed Broadswords & Studded Bronze Shield) ── */
function ArtLevel1({ id }) {
  return (
    <>
      <defs>
        <radialGradient id={`l1-glow-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D9822B" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#CD7F32" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`l1-bronze-rim-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE4C4" />
          <stop offset="20%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#B45309" />
          <stop offset="80%" stopColor="#78350F" />
          <stop offset="100%" stopColor="#3E1400" />
        </linearGradient>
        <linearGradient id={`l1-steel-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#CBD5E1" />
          <stop offset="70%" stopColor="#64748B" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
        <linearGradient id={`l1-plate-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2E170C" />
          <stop offset="50%" stopColor="#1C0E07" />
          <stop offset="100%" stopColor="#0E0703" />
        </linearGradient>
      </defs>

      {/* Radiant Bronze Aura */}
      <circle cx="60" cy="60" r="54" fill={`url(#l1-glow-${id})`} />

      {/* 3D Depth Shadow */}
      <path d="M 60 10 L 102 26 L 102 72 C 102 102 60 120 60 120 C 60 120 18 102 18 72 L 18 26 Z"
        fill="#000000" opacity="0.5" filter="blur(4px)" />

      {/* Heavy Sculpted Bronze Shield Frame */}
      <path d="M 60 8 L 100 24 L 100 70 C 100 98 60 116 60 116 C 60 116 20 98 20 70 L 20 24 Z"
        fill={`url(#l1-bronze-rim-${id})`} stroke="#FFE4C4" strokeWidth="1.5" />

      {/* Inner Recessed Bronze Core */}
      <path d="M 60 14 L 94 28 L 94 68 C 94 92 60 108 60 108 C 60 108 26 92 26 68 L 26 28 Z"
        fill={`url(#l1-plate-${id})`} stroke="#451A03" strokeWidth="1.2" />

      {/* Heraldic Crossed Steel Swords */}
      <g opacity="0.95">
        {/* Sword 1: Top-Left to Bottom-Right */}
        <line x1="34" y1="34" x2="86" y2="86" stroke={`url(#l1-steel-${id})`} strokeWidth="4.5" strokeLinecap="round" />
        <line x1="34" y1="34" x2="86" y2="86" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        <line x1="42" y1="30" x2="30" y2="42" stroke={`url(#l1-bronze-rim-${id})`} strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="28" cy="28" r="3" fill="#FFE4C4" stroke="#78350F" strokeWidth="1" />

        {/* Sword 2: Top-Right to Bottom-Left */}
        <line x1="86" y1="34" x2="34" y2="86" stroke={`url(#l1-steel-${id})`} strokeWidth="4.5" strokeLinecap="round" />
        <line x1="86" y1="34" x2="34" y2="86" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        <line x1="78" y1="30" x2="90" y2="42" stroke={`url(#l1-bronze-rim-${id})`} strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="92" cy="28" r="3" fill="#FFE4C4" stroke="#78350F" strokeWidth="1" />
      </g>

      {/* Central Bronze Boss / Medallion */}
      <circle cx="60" cy="60" r="14" fill={`url(#l1-bronze-rim-${id})`} stroke="#FFE4C4" strokeWidth="1.5" />
      <polygon points="60,50 63,57 70,60 63,63 60,70 57,63 50,60 57,57" fill="#FFE4C4" />

      {/* Rivet Studs */}
      <circle cx="60" cy="18" r="2.2" fill="#FFE4C4" stroke="#78350F" strokeWidth="0.8" />
      <circle cx="92" cy="32" r="2.2" fill="#FFE4C4" stroke="#78350F" strokeWidth="0.8" />
      <circle cx="28" cy="32" r="2.2" fill="#FFE4C4" stroke="#78350F" strokeWidth="0.8" />
      <circle cx="60" cy="102" r="2.2" fill="#FFE4C4" stroke="#78350F" strokeWidth="0.8" />
    </>
  );
}

/* ─── Level 2: Silver Pioneer (Winged Titanium Aegis & Compass Star) ─────── */
function ArtLevel2({ id }) {
  return (
    <>
      <defs>
        <radialGradient id={`l2-glow-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`l2-silver-rim-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#E2E8F0" />
          <stop offset="50%" stopColor="#94A3B8" />
          <stop offset="75%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
        <linearGradient id={`l2-cyan-energy-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#7DD3FC" />
          <stop offset="70%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
        <linearGradient id={`l2-plate-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="50%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#060911" />
        </linearGradient>
      </defs>

      {/* Cyber Cyan Ambient Aura */}
      <circle cx="60" cy="60" r="54" fill={`url(#l2-glow-${id})`} />

      {/* Depth Shadow */}
      <polygon points="60,12 102,32 102,78 60,118 18,78 18,32" fill="#000000" opacity="0.5" filter="blur(4px)" />

      {/* Sculpted Winged Flairs on Sides */}
      <path d="M 18 36 L 6 48 L 18 64 Z" fill={`url(#l2-silver-rim-${id})`} stroke="#FFFFFF" strokeWidth="1" />
      <path d="M 102 36 L 114 48 L 102 64 Z" fill={`url(#l2-silver-rim-${id})`} stroke="#FFFFFF" strokeWidth="1" />

      {/* Main Titanium Chevron Beveled Frame */}
      <polygon points="60,10 100,30 100,76 60,114 20,76 20,30"
        fill={`url(#l2-silver-rim-${id})`} stroke="#FFFFFF" strokeWidth="1.6" />

      {/* Inner Obsidian Plate */}
      <polygon points="60,16 94,33 94,72 60,106 26,72 26,33"
        fill={`url(#l2-plate-${id})`} stroke="#334155" strokeWidth="1.2" />

      {/* Neon Cyan Energy Inset Lines */}
      <polygon points="60,22 88,37 88,68 60,98 32,68 32,37"
        stroke="#38BDF8" strokeWidth="1.4" fill="none" opacity="0.65" strokeDasharray="6 3" />

      {/* Central 8-Pointed Pioneer Compass Star */}
      <g>
        {/* Diamond Compass Star */}
        <polygon points="60,40 64,56 80,60 64,64 60,80 56,64 40,60 56,56"
          fill={`url(#l2-cyan-energy-${id})`} stroke="#FFFFFF" strokeWidth="1" />
        <polygon points="60,46 62,58 74,60 62,62 60,74 58,62 46,60 58,58"
          fill="#FFFFFF" opacity="0.9" />
        <circle cx="60" cy="60" r="3.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1" />
      </g>

      {/* Corner Titanium Studs */}
      <circle cx="60" cy="18" r="2.2" fill="#FFFFFF" stroke="#475569" strokeWidth="0.8" />
      <circle cx="94" cy="34" r="2.2" fill="#FFFFFF" stroke="#475569" strokeWidth="0.8" />
      <circle cx="26" cy="34" r="2.2" fill="#FFFFFF" stroke="#475569" strokeWidth="0.8" />
    </>
  );
}

/* ─── Level 3: Gold Vanguard (Imperial 24K Gold Crest & Lionheart Ruby) ──── */
function ArtLevel3({ id }) {
  return (
    <>
      <defs>
        <radialGradient id={`l3-glow-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#B45309" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`l3-gold-rim-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="15%" stopColor="#FFFBEB" />
          <stop offset="40%" stopColor="#FDE68A" />
          <stop offset="65%" stopColor="#F59E0B" />
          <stop offset="85%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
        <linearGradient id={`l3-ruby-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FECACA" />
          <stop offset="30%" stopColor="#EF4444" />
          <stop offset="70%" stopColor="#B91C1C" />
          <stop offset="100%" stopColor="#7F1D1D" />
        </linearGradient>
        <linearGradient id={`l3-plate-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2F1C07" />
          <stop offset="50%" stopColor="#1B0F03" />
          <stop offset="100%" stopColor="#0B0601" />
        </linearGradient>
      </defs>

      {/* Radiant Golden Sunburst Aura */}
      <circle cx="60" cy="60" r="54" fill={`url(#l3-glow-${id})`} />

      {/* Depth Shadow */}
      <polygon points="40,12 80,12 104,34 104,88 80,112 40,112 16,88 16,34" fill="#000000" opacity="0.5" filter="blur(4px)" />

      {/* Imperial Side Wings */}
      <path d="M 16 38 C 4 48 4 64 16 74 L 20 66 C 12 58 12 48 20 44 Z" fill={`url(#l3-gold-rim-${id})`} />
      <path d="M 104 38 C 116 48 116 64 104 74 L 100 66 C 108 58 108 48 100 44 Z" fill={`url(#l3-gold-rim-${id})`} />

      {/* 24K Mirrored Gold Octagon Frame */}
      <polygon points="40,10 80,10 102,32 102,86 80,110 40,110 18,86 18,32"
        fill={`url(#l3-gold-rim-${id})`} stroke="#FFFBEB" strokeWidth="1.8" />

      {/* Inner Obsidian Gold Plate */}
      <polygon points="42,14 78,14 96,33 96,84 78,104 42,104 24,84 24,33"
        fill={`url(#l3-plate-${id})`} stroke="#78350F" strokeWidth="1.2" />

      {/* Gilded Inset Line */}
      <polygon points="45,18 75,18 91,35 91,81 75,98 45,98 29,81 29,35"
        stroke="#FDE68A" strokeWidth="1.2" fill="none" opacity="0.75" />

      {/* Imperial Golden Eagle Wings & Ruby Heartstone */}
      <g>
        {/* Outstretched Stylized Eagle Wings */}
        <path d="M 32 56 Q 44 48 60 54 Q 76 48 88 56 Q 76 66 60 62 Q 44 66 32 56 Z"
          fill={`url(#l3-gold-rim-${id})`} stroke="#FFFBEB" strokeWidth="1" />
        {/* Faceted Lionheart Ruby Diamond */}
        <polygon points="60,46 72,58 60,76 48,58"
          fill={`url(#l3-ruby-${id})`} stroke="#FFFFFF" strokeWidth="1.2" />
        <polygon points="60,49 68,58 60,71 52,58" fill="#EF4444" opacity="0.8" />
        <polygon points="56,52 64,52 60,48" fill="#FFFFFF" opacity="0.9" />
      </g>

      {/* Gold Corner Accents */}
      <circle cx="41" cy="13" r="2" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.8" />
      <circle cx="79" cy="13" r="2" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.8" />
      <circle cx="98" cy="33" r="2" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.8" />
      <circle cx="22" cy="33" r="2" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.8" />
    </>
  );
}

/* ─── Level 4: Platinum Elite (Cyber Platinum Matrix & Neon Circuit Prongs) ─ */
function ArtLevel4({ id }) {
  return (
    <>
      <defs>
        <radialGradient id={`l4-glow-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`l4-plat-rim-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#E0F2FE" />
          <stop offset="55%" stopColor="#38BDF8" />
          <stop offset="85%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#034971" />
        </linearGradient>
        <linearGradient id={`l4-crystal-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#BAE6FD" />
          <stop offset="70%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id={`l4-plate-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#082136" />
          <stop offset="50%" stopColor="#031320" />
          <stop offset="100%" stopColor="#01080E" />
        </linearGradient>
      </defs>

      {/* Radiant Electric Cyan Aura */}
      <circle cx="60" cy="60" r="54" fill={`url(#l4-glow-${id})`} />

      {/* Depth Shadow */}
      <polygon points="60,12 102,36 102,88 60,112 18,88 18,36" fill="#000000" opacity="0.5" filter="blur(4px)" />

      {/* Cybernetic Energy Prongs (Top & Sides) */}
      <polygon points="60,4 66,12 54,12" fill={`url(#l4-plat-rim-${id})`} stroke="#FFFFFF" strokeWidth="0.8" />
      <polygon points="106,34 98,38 102,46" fill={`url(#l4-plat-rim-${id})`} stroke="#FFFFFF" strokeWidth="0.8" />
      <polygon points="14,34 22,38 18,46" fill={`url(#l4-plat-rim-${id})`} stroke="#FFFFFF" strokeWidth="0.8" />

      {/* Frosted Platinum Hexagon Plaque Frame */}
      <polygon points="60,10 100,34 100,86 60,110 20,86 20,34"
        fill={`url(#l4-plat-rim-${id})`} stroke="#FFFFFF" strokeWidth="1.8" />

      {/* Inner Recessed Cyber Core */}
      <polygon points="60,15 94,36 94,82 60,103 26,82 26,36"
        fill={`url(#l4-plate-${id})`} stroke="#0284C7" strokeWidth="1.2" />

      {/* High-Tech Circuit Matrix Channels */}
      <path d="M 60 22 L 60 42 M 60 78 L 60 96 M 34 50 L 46 60 L 34 70 M 86 50 L 74 60 L 86 70"
        stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />

      {/* Central Faceted Prismatic Platinum Energy Core */}
      <g>
        <polygon points="60,44 76,60 60,76 44,60"
          fill={`url(#l4-crystal-${id})`} stroke="#FFFFFF" strokeWidth="1.4" />
        <polygon points="60,48 71,60 60,72 49,60" fill="#38BDF8" opacity="0.6" />
        <circle cx="60" cy="60" r="4.5" fill="#FFFFFF" />
      </g>

      {/* Neon Cyber Rivets */}
      <circle cx="60" cy="16" r="2.2" fill="#E0F2FE" stroke="#0284C7" strokeWidth="0.8" />
      <circle cx="94" cy="36" r="2.2" fill="#E0F2FE" stroke="#0284C7" strokeWidth="0.8" />
      <circle cx="26" cy="36" r="2.2" fill="#E0F2FE" stroke="#0284C7" strokeWidth="0.8" />
    </>
  );
}

/* ─── Level 5: Diamond Champion (Sovereign 24K Shield, Angel Wings & Brilliant Diamond) ─ */
function ArtLevel5({ id }) {
  return (
    <>
      <defs>
        {/* Radiant Multi-Stop Solar Halo */}
        <radialGradient id={`l5-sun-flare-${id}`} cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="20%" stopColor="#FDE68A" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.25" />
          <stop offset="85%" stopColor="#38BDF8" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
        </radialGradient>

        {/* 24K Mirror-Polished Gold Frame Gradient */}
        <linearGradient id={`l5-gold-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="12%" stopColor="#FFFBEB" />
          <stop offset="28%" stopColor="#FDE68A" />
          <stop offset="55%" stopColor="#F59E0B" />
          <stop offset="82%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>

        {/* Multi-Facet Brilliant Diamond Facet Gradients */}
        <linearGradient id={`l5-dia-table-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F0F9FF" />
          <stop offset="100%" stopColor="#BAE6FD" />
        </linearGradient>

        <linearGradient id={`l5-dia-facet-left-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0F2FE" />
          <stop offset="60%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>

        <linearGradient id={`l5-dia-facet-right-${id}`} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#7DD3FC" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>

        <linearGradient id={`l5-dia-pavilion-${id}`} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="40%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#075985" />
        </linearGradient>

        {/* Deep Luxury Obsidian Core Shield */}
        <linearGradient id={`l5-obsidian-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E2235" />
          <stop offset="50%" stopColor="#0F1322" />
          <stop offset="100%" stopColor="#080A14" />
        </linearGradient>

        {/* Wing Feather Fevel Gradient */}
        <linearGradient id={`l5-wing-bevel-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#FEF08A" />
          <stop offset="65%" stopColor="#EAB308" />
          <stop offset="100%" stopColor="#854D0E" />
        </linearGradient>
      </defs>

      {/* ── 1. Radiant Solar Flare Background ── */}
      <circle cx="60" cy="52" r="54" fill={`url(#l5-sun-flare-${id})`} />

      {/* ── 2. 3D Drop Shadow for Shield & Wings ── */}
      <path
        d="M 60 12 L 86 16 L 108 36 L 108 72 C 108 92 86 108 60 114 C 34 108 12 92 12 72 L 12 36 L 34 16 Z"
        fill="#000000"
        opacity="0.55"
        filter="blur(5px)"
      />

      {/* ── 3. Sweeping Multi-Layered Majestic Golden Angel Wings ── */}
      <g>
        {/* Left Wing - 4 Sculpted Tiered Feathers */}
        <path d="M 30 26 C 6 18 0 42 10 66 C 16 58 20 42 30 32 Z" fill={`url(#l5-wing-bevel-${id})`} stroke="#FFFBEB" strokeWidth="0.8" />
        <path d="M 26 34 C 4 32 0 54 12 76 C 18 68 22 52 28 40 Z" fill={`url(#l5-gold-${id})`} stroke="#FDE68A" strokeWidth="0.8" />
        <path d="M 24 44 C 6 48 4 68 18 84 C 22 76 24 62 26 50 Z" fill={`url(#l5-wing-bevel-${id})`} stroke="#FFFBEB" strokeWidth="0.8" />
        <path d="M 22 56 C 10 66 8 80 24 90 C 26 82 26 72 24 62 Z" fill={`url(#l5-gold-${id})`} stroke="#D97706" strokeWidth="0.6" />

        {/* Right Wing - Symmetrical 4 Feathers */}
        <path d="M 90 26 C 114 18 120 42 110 66 C 104 58 100 42 90 32 Z" fill={`url(#l5-wing-bevel-${id})`} stroke="#FFFBEB" strokeWidth="0.8" />
        <path d="M 94 34 C 116 32 120 54 108 76 C 102 68 98 52 92 40 Z" fill={`url(#l5-gold-${id})`} stroke="#FDE68A" strokeWidth="0.8" />
        <path d="M 96 44 C 114 48 116 68 102 84 C 98 76 96 62 94 50 Z" fill={`url(#l5-wing-bevel-${id})`} stroke="#FFFBEB" strokeWidth="0.8" />
        <path d="M 98 56 C 110 66 112 80 96 90 C 94 82 94 72 96 62 Z" fill={`url(#l5-gold-${id})`} stroke="#D97706" strokeWidth="0.6" />
      </g>

      {/* ── 4. Outer 24K Gold Beveled Champion Shield ── */}
      <path
        d="M 60 10 L 86 14 L 104 32 L 104 68 C 104 88 84 104 60 110 C 36 104 16 88 16 68 L 16 32 L 34 14 Z"
        fill={`url(#l5-gold-${id})`}
        stroke="#FFFFFF"
        strokeWidth="1.8"
      />

      {/* Top Polished Chamfer Reflection */}
      <path d="M 34 14 L 60 10 L 86 14 L 82 18 L 60 14 L 38 18 Z" fill="#FFFFFF" opacity="0.9" />

      {/* Deep Obsidian Core Shield Face */}
      <path
        d="M 60 15 L 82 19 L 98 35 L 98 66 C 98 84 80 98 60 104 C 40 98 22 84 22 66 L 22 35 L 38 19 Z"
        fill={`url(#l5-obsidian-${id})`}
        stroke="#78350F"
        strokeWidth="1.2"
      />

      {/* Gilded Inner Filigree Border */}
      <path
        d="M 60 19 L 79 23 L 93 37 L 93 64 C 93 79 78 92 60 97 C 42 92 27 79 27 64 L 27 37 L 41 23 Z"
        fill="none"
        stroke="#FDE68A"
        strokeWidth="1"
        strokeDasharray="4 2"
        opacity="0.85"
      />

      {/* ── 5. Magnificent Large Faceted Brilliant Diamond ── */}
      <g filter={`drop-shadow(0 4px 10px rgba(14, 165, 233, 0.6))`}>
        {/* Diamond Outer Table & Girdle Base */}
        <polygon
          points="60,26 84,44 60,78 36,44"
          fill={`url(#l5-dia-pavilion-${id})`}
          stroke="#FFFFFF"
          strokeWidth="1.6"
        />

        {/* Upper Table Facet (Flat Brilliant Top) */}
        <polygon
          points="46,34 74,34 84,44 60,44 36,44"
          fill={`url(#l5-dia-table-${id})`}
        />
        <polygon
          points="50,34 70,34 60,44"
          fill="#FFFFFF"
          opacity="0.95"
        />

        {/* Left Kite / Crown Facet */}
        <polygon
          points="36,44 46,34 50,34 60,44"
          fill={`url(#l5-dia-facet-left-${id})`}
        />

        {/* Right Kite / Crown Facet */}
        <polygon
          points="84,44 74,34 70,34 60,44"
          fill={`url(#l5-dia-facet-right-${id})`}
        />

        {/* Lower Left Pavilion Facet */}
        <polygon
          points="36,44 60,44 60,78"
          fill={`url(#l5-dia-facet-left-${id})`}
          opacity="0.9"
        />

        {/* Lower Right Pavilion Facet */}
        <polygon
          points="84,44 60,44 60,78"
          fill={`url(#l5-dia-facet-right-${id})`}
          opacity="0.95"
        />

        {/* Central Vertical Crystal Spine */}
        <line x1="60" y1="26" x2="60" y2="78" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.9" />

        {/* Brilliant Light Refraction Glints */}
        <circle cx="52" cy="38" r="2" fill="#FFFFFF" />
        <circle cx="68" cy="46" r="1.4" fill="#FFFFFF" />

        {/* Sparkling 8-Point Diamond Flare */}
        <g transform="translate(48, 36)">
          <line x1="-8" y1="0" x2="8" y2="0" stroke="#FFFFFF" strokeWidth="1.4" />
          <line x1="0" y1="-8" x2="0" y2="8" stroke="#FFFFFF" strokeWidth="1.4" />
          <line x1="-4" y1="-4" x2="4" y2="4" stroke="#E0F2FE" strokeWidth="1" />
          <line x1="-4" y1="4" x2="4" y2="-4" stroke="#E0F2FE" strokeWidth="1" />
          <circle cx="0" cy="0" r="1.8" fill="#FFFFFF" />
        </g>
      </g>

      {/* ── 6. Sculpted 24K Gold Dais Ribbon at Base with 3 Stars ── */}
      <g>
        <path
          d="M 36 94 L 46 106 L 60 102 L 74 106 L 84 94 L 60 90 Z"
          fill={`url(#l5-gold-${id})`}
          stroke="#FFFFFF"
          strokeWidth="1"
          filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))"
        />
        {/* 3 Gold Stars Embedded in the Dais */}
        <polygon points="50,97 51.5,100 54.5,100.5 52,102.5 53,105.5 50,104 47,105.5 48,102.5 45.5,100.5 48.5,100" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.4" />
        <polygon points="60,95 61.8,98.5 65.5,99 62.5,101.5 63.5,105 60,103.5 56.5,105 57.5,101.5 54.5,99 58.2,98.5" fill="#FFFFFF" stroke="#78350F" strokeWidth="0.4" />
        <polygon points="70,97 71.5,100 74.5,100.5 72,102.5 73,105.5 70,104 67,105.5 68,102.5 65.5,100.5 68.5,100" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.4" />
      </g>

      {/* ── 7. Corner 24K Gold Hexagonal Rivets ── */}
      <circle cx="35" cy="17" r="2" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.8" />
      <circle cx="85" cy="17" r="2" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.8" />
      <circle cx="100" cy="33" r="2" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.8" />
      <circle cx="20" cy="33" r="2" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.8" />
    </>
  );
}

/* ─── Level 6: Master Sovereign (Imperial Amethyst Crown & Royal Scepters) ── */
function ArtLevel6({ id }) {
  return (
    <>
      <defs>
        <radialGradient id={`l6-glow-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C084FC" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#581C87" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`l6-purple-rim-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAF5FF" />
          <stop offset="20%" stopColor="#E9D5FF" />
          <stop offset="50%" stopColor="#C084FC" />
          <stop offset="80%" stopColor="#7E22CE" />
          <stop offset="100%" stopColor="#3B0764" />
        </linearGradient>
        <linearGradient id={`l6-gold-acc-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
        <linearGradient id={`l6-plate-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2A0845" />
          <stop offset="50%" stopColor="#18042B" />
          <stop offset="100%" stopColor="#0A0112" />
        </linearGradient>
      </defs>

      {/* Royal Amethyst Aura */}
      <circle cx="60" cy="60" r="54" fill={`url(#l6-glow-${id})`} />

      {/* Depth Shadow */}
      <polygon points="36,14 84,14 102,36 102,86 60,114 18,86 18,36" fill="#000000" opacity="0.55" filter="blur(4px)" />

      {/* Main Amethyst Sovereign Plaque */}
      <polygon points="36,12 84,12 102,34 102,84 60,112 18,84 18,34"
        fill={`url(#l6-purple-rim-${id})`} stroke="#FAF5FF" strokeWidth="1.8" />

      {/* Inner Obsidian Amethyst Core */}
      <polygon points="39,16 81,16 97,36 97,80 60,106 23,80 23,36"
        fill={`url(#l6-plate-${id})`} stroke="#581C87" strokeWidth="1.2" />

      {/* Gilded Inset Detail Line */}
      <polygon points="42,20 78,20 92,38 92,76 60,100 28,76 28,38"
        stroke="#E9D5FF" strokeWidth="1.2" fill="none" opacity="0.65" strokeDasharray="5 2.5" />

      {/* Grand 5-Spired Sovereign Crown */}
      <g>
        {/* Crown Base */}
        <rect x="42" y="66" width="36" height="5" rx="1.5" fill={`url(#l6-gold-acc-${id})`} stroke="#FAF5FF" strokeWidth="0.8" />
        <circle cx="48" cy="68.5" r="1.5" fill="#C084FC" />
        <circle cx="60" cy="68.5" r="1.5" fill="#FAF5FF" />
        <circle cx="72" cy="68.5" r="1.5" fill="#C084FC" />
        {/* 5 Crown Spires */}
        <polygon points="42,66 45,46 51,62 60,38 69,62 75,46 78,66"
          fill={`url(#l6-gold-acc-${id})`} stroke="#FAF5FF" strokeWidth="1" />
        {/* Spire Jewels */}
        <circle cx="45" cy="45" r="2.2" fill="#E9D5FF" stroke="#581C87" strokeWidth="0.8" />
        <circle cx="60" cy="37" r="3" fill="#FAF5FF" stroke="#F59E0B" strokeWidth="1" />
        <circle cx="75" cy="45" r="2.2" fill="#E9D5FF" stroke="#581C87" strokeWidth="0.8" />
      </g>

      {/* Amethyst Rivets */}
      <circle cx="38" cy="14" r="2" fill="#FAF5FF" stroke="#3B0764" strokeWidth="0.8" />
      <circle cx="82" cy="14" r="2" fill="#FAF5FF" stroke="#3B0764" strokeWidth="0.8" />
      <circle cx="98" cy="36" r="2" fill="#FAF5FF" stroke="#3B0764" strokeWidth="0.8" />
      <circle cx="22" cy="36" r="2" fill="#FAF5FF" stroke="#3B0764" strokeWidth="0.8" />
    </>
  );
}

/* ─── Level 7: Grand Ascendant (8-Point Astral Star & Star Sapphire) ──────── */
function ArtLevel7({ id }) {
  return (
    <>
      <defs>
        <radialGradient id={`l7-glow-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`l7-blue-rim-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#BFDBFE" />
          <stop offset="55%" stopColor="#60A5FA" />
          <stop offset="85%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#172554" />
        </linearGradient>
        <linearGradient id={`l7-plate-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#172554" />
          <stop offset="50%" stopColor="#0B132B" />
          <stop offset="100%" stopColor="#040817" />
        </linearGradient>
      </defs>

      {/* Deep Sapphire Aura */}
      <circle cx="60" cy="60" r="54" fill={`url(#l7-glow-${id})`} />

      {/* Depth Shadow */}
      <polygon points="60,10 102,34 102,86 60,114 18,86 18,34" fill="#000000" opacity="0.55" filter="blur(4px)" />

      {/* 8-Point Astral Astrolabe Ray Backplate */}
      <g opacity="0.85">
        <polygon points="60,6 66,30 90,16 76,38 114,60 88,68 104,92 78,86 60,114 42,86 16,92 32,68 6,60 44,38 30,16 54,30"
          fill={`url(#l7-blue-rim-${id})`} stroke="#EFF6FF" strokeWidth="0.8" />
      </g>

      {/* Main Sapphire Shield Frame */}
      <polygon points="60,10 98,32 98,82 60,110 22,82 22,32"
        fill={`url(#l7-blue-rim-${id})`} stroke="#FFFFFF" strokeWidth="1.8" />

      {/* Inner Recessed Night Sky Core */}
      <polygon points="60,16 92,36 92,78 60,102 28,78 28,36"
        fill={`url(#l7-plate-${id})`} stroke="#1E3A8A" strokeWidth="1.2" />

      {/* Star Sapphire Faceted Starlight Core */}
      <g>
        {/* 8-Point Brilliant Core Star */}
        <polygon points="60,40 65,55 80,60 65,65 60,80 55,65 40,60 55,55"
          fill="#FFFFFF" stroke="#93C5FD" strokeWidth="1.2" />
        <circle cx="60" cy="60" r="6" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="60" cy="60" r="2.5" fill="#FFFFFF" />
      </g>

      {/* Corner Studs */}
      <circle cx="60" cy="14" r="2" fill="#EFF6FF" stroke="#1E3A8A" strokeWidth="0.8" />
      <circle cx="94" cy="34" r="2" fill="#EFF6FF" stroke="#1E3A8A" strokeWidth="0.8" />
      <circle cx="26" cy="34" r="2" fill="#EFF6FF" stroke="#1E3A8A" strokeWidth="0.8" />
    </>
  );
}

/* ─── Level 8: Mythic Vanguard (Draconian Horns & Jade Flame Dragoncrest) ── */
function ArtLevel8({ id }) {
  return (
    <>
      <defs>
        <radialGradient id={`l8-glow-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#34D399" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#064E3B" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`l8-emerald-rim-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ECFDF5" />
          <stop offset="25%" stopColor="#A7F3D0" />
          <stop offset="55%" stopColor="#34D399" />
          <stop offset="85%" stopColor="#059669" />
          <stop offset="100%" stopColor="#064E3B" />
        </linearGradient>
        <linearGradient id={`l8-plate-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#064E3B" />
          <stop offset="50%" stopColor="#022C22" />
          <stop offset="100%" stopColor="#01140F" />
        </linearGradient>
      </defs>

      {/* Emerald Dragonfire Aura */}
      <circle cx="60" cy="60" r="54" fill={`url(#l8-glow-${id})`} />

      {/* Depth Shadow */}
      <polygon points="60,10 100,30 104,80 60,114 16,80 20,30" fill="#000000" opacity="0.55" filter="blur(4px)" />

      {/* Sweeping Draconian Horns */}
      <g>
        {/* Left Horn */}
        <path d="M 28 32 C 12 18 10 38 4 28 C 8 46 22 46 26 50 Z"
          fill={`url(#l8-emerald-rim-${id})`} stroke="#ECFDF5" strokeWidth="1" />
        {/* Right Horn */}
        <path d="M 92 32 C 108 18 110 38 116 28 C 112 46 98 46 94 50 Z"
          fill={`url(#l8-emerald-rim-${id})`} stroke="#ECFDF5" strokeWidth="1" />
      </g>

      {/* Main Draconian Shield Frame */}
      <polygon points="60,8 98,28 102,78 60,112 18,78 22,28"
        fill={`url(#l8-emerald-rim-${id})`} stroke="#ECFDF5" strokeWidth="1.8" />

      {/* Inner Obsidian Dragon Plate */}
      <polygon points="60,14 92,32 96,74 60,104 24,74 28,32"
        fill={`url(#l8-plate-${id})`} stroke="#064E3B" strokeWidth="1.2" />

      {/* Interlocking Dragon Scale Inset */}
      <g opacity="0.75" stroke="#6EE7B7" strokeWidth="1.2" fill="none">
        <path d="M 45 42 Q 60 52 75 42" />
        <path d="M 38 54 Q 60 66 82 54" />
        <path d="M 46 66 Q 60 76 74 66" />
      </g>

      {/* Central Jade Dragon-Fire Core */}
      <g>
        <polygon points="60,42 74,58 60,78 46,58"
          fill="#34D399" stroke="#ECFDF5" strokeWidth="1.4" />
        <polygon points="60,48 68,58 60,70 52,58" fill="#FFFFFF" opacity="0.8" />
        <circle cx="60" cy="58" r="3" fill="#064E3B" />
      </g>

      {/* Dragon Emerald Studs */}
      <circle cx="60" cy="14" r="2" fill="#ECFDF5" stroke="#064E3B" strokeWidth="0.8" />
      <circle cx="94" cy="30" r="2" fill="#ECFDF5" stroke="#064E3B" strokeWidth="0.8" />
      <circle cx="26" cy="30" r="2" fill="#ECFDF5" stroke="#064E3B" strokeWidth="0.8" />
    </>
  );
}

/* ─── Level 9: Cosmic Overlord (Nebula Stargate Ring & Celestial Vortex) ──── */
function ArtLevel9({ id }) {
  return (
    <>
      <defs>
        <radialGradient id={`l9-glow-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F472B6" stopOpacity="0.7" />
          <stop offset="60%" stopColor="#A21CAF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#4C0519" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`l9-pink-rim-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF1F2" />
          <stop offset="25%" stopColor="#FBCFE8" />
          <stop offset="55%" stopColor="#F472B6" />
          <stop offset="85%" stopColor="#BE185D" />
          <stop offset="100%" stopColor="#831843" />
        </linearGradient>
        <linearGradient id={`l9-plate-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4C0519" />
          <stop offset="50%" stopColor="#25020D" />
          <stop offset="100%" stopColor="#0B0004" />
        </linearGradient>
      </defs>

      {/* Cosmic Nebula Halo */}
      <circle cx="60" cy="60" r="56" fill={`url(#l9-glow-${id})`} />

      {/* Depth Shadow */}
      <polygon points="40,12 80,12 104,34 104,88 80,112 40,112 16,88 16,34" fill="#000000" opacity="0.55" filter="blur(4px)" />

      {/* Orbiting Planetary Stargate Ring */}
      <ellipse cx="60" cy="60" rx="52" ry="24"
        stroke={`url(#l9-pink-rim-${id})`} strokeWidth="1.8" fill="none" transform="rotate(-25 60 60)" />
      <circle cx="16" cy="48" r="3.5" fill="#F472B6" stroke="#FFFFFF" strokeWidth="1" />
      <circle cx="104" cy="72" r="3" fill="#A21CAF" stroke="#FFFFFF" strokeWidth="1" />

      {/* Main Cosmic Octagon Plaque */}
      <polygon points="40,10 80,10 102,32 102,88 80,110 40,110 18,88 18,32"
        fill={`url(#l9-pink-rim-${id})`} stroke="#FDF2F8" strokeWidth="1.8" />

      {/* Inner Recessed Dark Matter Plate */}
      <polygon points="42,14 78,14 97,33 97,85 78,104 42,104 23,85 23,33"
        fill={`url(#l9-plate-${id})`} stroke="#831843" strokeWidth="1.2" />

      {/* Rotating Stargate Warp Core */}
      <g>
        <circle cx="60" cy="60" r="18" fill="none" stroke="#F472B6" strokeWidth="2" strokeDasharray="8 4" />
        <circle cx="60" cy="60" r="10" fill={`url(#l9-pink-rim-${id})`} stroke="#FFFFFF" strokeWidth="1.5" />
        <polygon points="60,48 64,56 72,60 64,64 60,72 56,64 48,60 56,56" fill="#FFFFFF" />
      </g>

      {/* Cosmic Rivets */}
      <circle cx="42" cy="14" r="2" fill="#FDF2F8" stroke="#831843" strokeWidth="0.8" />
      <circle cx="78" cy="14" r="2" fill="#FDF2F8" stroke="#831843" strokeWidth="0.8" />
    </>
  );
}

/* ─── Level 10: Immortal Legend (Solar Divinity Phoenix & 12 Sunflares) ──── */
function ArtLevel10({ id }) {
  return (
    <>
      <defs>
        {/* Blazing Solar Corona */}
        <radialGradient id={`l10-corona-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFBEB" stopOpacity="0.9" />
          <stop offset="25%" stopColor="#FBBF24" stopOpacity="0.75" />
          <stop offset="60%" stopColor="#F59E0B" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#78350F" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`l10-sun-gold-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="15%" stopColor="#FEF3C7" />
          <stop offset="35%" stopColor="#FBBF24" />
          <stop offset="60%" stopColor="#F59E0B" />
          <stop offset="85%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
        <linearGradient id={`l10-plate-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2E1B00" />
          <stop offset="50%" stopColor="#1A0F00" />
          <stop offset="100%" stopColor="#080400" />
        </linearGradient>
      </defs>

      {/* Supreme Blazing Solar Corona */}
      <circle cx="60" cy="60" r="58" fill={`url(#l10-corona-${id})`} />

      {/* 12 Radiant Solar Flares */}
      <g opacity="0.9">
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = i * 30;
          return (
            <polygon
              key={i}
              points="60,4 64,18 56,18"
              fill={`url(#l10-sun-gold-${id})`}
              stroke="#FFFBEB"
              strokeWidth="0.8"
              transform={`rotate(${angle} 60 60)`}
            />
          );
        })}
      </g>

      {/* Depth Shadow */}
      <polygon points="42,12 78,12 104,32 104,88 78,110 42,110 16,88 16,32" fill="#000000" opacity="0.6" filter="blur(4px)" />

      {/* Divine Phoenix Double Wing Flairs */}
      <g>
        <path d="M 22 36 C 4 32 2 54 12 72 C 16 64 18 50 24 44 Z" fill={`url(#l10-sun-gold-${id})`} stroke="#FFFBEB" strokeWidth="1" />
        <path d="M 98 36 C 116 32 118 54 108 72 C 104 64 102 50 96 44 Z" fill={`url(#l10-sun-gold-${id})`} stroke="#FFFBEB" strokeWidth="1" />
      </g>

      {/* Outer 24K Molten Gold Shield */}
      <polygon points="42,10 78,10 102,30 102,86 78,108 42,108 18,86 18,30"
        fill={`url(#l10-sun-gold-${id})`} stroke="#FFFFFF" strokeWidth="2" />

      {/* Inner Obsidian Solar Plate */}
      <polygon points="44,14 76,14 97,32 97,84 76,104 44,104 23,84 23,32"
        fill={`url(#l10-plate-${id})`} stroke="#78350F" strokeWidth="1.2" />

      {/* Supreme Solar Divinity Phoenix Head & Halo Emblem */}
      <g>
        {/* Triple Halo Rings */}
        <circle cx="60" cy="56" r="16" fill="none" stroke="#FDE68A" strokeWidth="1.5" strokeDasharray="6 3" />
        <circle cx="60" cy="56" r="11" fill={`url(#l10-sun-gold-${id})`} stroke="#FFFFFF" strokeWidth="1.5" />
        {/* Blazing Core Star */}
        <polygon points="60,42 63,52 73,56 63,60 60,70 57,60 47,56 57,52" fill="#FFFFFF" />
        <circle cx="60" cy="56" r="3" fill="#DC2626" />
      </g>

      {/* Molten Gold Rivets */}
      <circle cx="43" cy="13" r="2.2" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.8" />
      <circle cx="77" cy="13" r="2.2" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.8" />
      <circle cx="98" cy="31" r="2.2" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.8" />
      <circle cx="22" cy="31" r="2.2" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.8" />
    </>
  );
}

/* ─── Procedural High-Tier Badge (Levels 11 to 30) ────────────────────────── */
function ArtProceduralTier({ level, id }) {
  const meta = TIER_METADATA[level] || TIER_METADATA[30];
  const isCosmic = level >= 21;
  const isDivine = level >= 26;
  const isCyber  = level >= 16 && level < 21;
  const isGem    = level >= 11 && level < 16;

  return (
    <>
      <defs>
        {/* Dynamic Multi-Stop Flare Halo */}
        <radialGradient id={`pt-flare-${id}`} cx="50%" cy="50%" r="52%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="25%" stopColor={meta.highlight} stopOpacity="0.6" />
          <stop offset="55%" stopColor={meta.primary} stopOpacity="0.3" />
          <stop offset="100%" stopColor={meta.secondary} stopOpacity="0" />
        </radialGradient>

        {/* Outer 24K Gold & Metallic Bevel Gradient */}
        <linearGradient id={`pt-metal-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="20%" stopColor={meta.highlight} />
          <stop offset="50%" stopColor={meta.primary} />
          <stop offset="80%" stopColor={meta.secondary} />
          <stop offset="100%" stopColor={meta.dark} />
        </linearGradient>

        {/* Gem Core Gradient */}
        <linearGradient id={`pt-core-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor={meta.highlight} />
          <stop offset="70%" stopColor={meta.primary} />
          <stop offset="100%" stopColor={meta.secondary} />
        </linearGradient>

        {/* Deep Obsidian Core Plate */}
        <linearGradient id={`pt-obsidian-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E2235" />
          <stop offset="50%" stopColor="#0F1322" />
          <stop offset="100%" stopColor="#080A14" />
        </linearGradient>
      </defs>

      {/* ── 1. Solar Radiant Flare Halo ── */}
      <circle cx="60" cy="54" r="54" fill={`url(#pt-flare-${id})`} />

      {/* ── 2. 3D Drop Shadow ── */}
      <polygon
        points="40,10 80,10 106,32 106,86 80,112 40,112 14,86 14,32"
        fill="#000000"
        opacity="0.55"
        filter="blur(5px)"
      />

      {/* ── 3. Divine / Archangel Wing Flairs (For Levels 21–30) ── */}
      {isCosmic && (
        <g opacity="0.9">
          <path d="M 24 28 C 4 18 0 46 12 72 C 18 62 20 44 26 36 Z" fill={`url(#pt-metal-${id})`} stroke="#FFFFFF" strokeWidth="0.8" />
          <path d="M 96 28 C 116 18 120 46 108 72 C 102 62 100 44 94 36 Z" fill={`url(#pt-metal-${id})`} stroke="#FFFFFF" strokeWidth="0.8" />
          {isDivine && (
            <>
              <path d="M 18 42 C 2 36 2 64 16 86 C 20 76 22 58 24 48 Z" fill={`url(#pt-metal-${id})`} stroke="#FFFBEB" strokeWidth="0.6" />
              <path d="M 102 42 C 118 36 118 64 104 86 C 100 76 98 58 96 48 Z" fill={`url(#pt-metal-${id})`} stroke="#FFFBEB" strokeWidth="0.6" />
            </>
          )}
        </g>
      )}

      {/* ── 4. Main Beveled Heraldic Shield Frame ── */}
      <polygon
        points="42,8 78,8 104,30 104,82 78,106 42,106 16,82 16,30"
        fill={`url(#pt-metal-${id})`}
        stroke="#FFFFFF"
        strokeWidth="1.8"
      />

      {/* Top Mirror Chamfer Reflection */}
      <polygon points="42,8 78,8 74,13 46,13" fill="#FFFFFF" opacity="0.9" />

      {/* ── 5. Recessed Obsidian Face Plate ── */}
      <polygon
        points="44,13 76,13 98,33 98,78 76,101 44,101 22,78 22,33"
        fill={`url(#pt-obsidian-${id})`}
        stroke={meta.primary}
        strokeWidth="1.2"
      />

      {/* Inner Filigree Dashed Trim */}
      <polygon
        points="46,17 74,17 93,36 93,74 74,96 46,96 27,74 27,36"
        fill="none"
        stroke={meta.highlight}
        strokeWidth="0.9"
        strokeDasharray="4 2"
        opacity="0.85"
      />

      {/* ── 6. Central Heraldic Iconography ── */}
      {isGem && (
        /* Faceted Large Gemstone Core (Levels 11–15) */
        <g filter={`drop-shadow(0 4px 10px ${meta.glow})`}>
          <polygon points="60,28 84,46 60,76 36,46" fill={`url(#pt-core-${id})`} stroke="#FFFFFF" strokeWidth="1.5" />
          <polygon points="46,36 74,36 84,46 60,46 36,46" fill="#FFFFFF" opacity="0.8" />
          <polygon points="50,36 70,36 60,46" fill={meta.highlight} />
          <polygon points="36,46 60,46 60,76" fill={meta.secondary} opacity="0.85" />
          <polygon points="84,46 60,46 60,76" fill={meta.primary} opacity="0.95" />
          <circle cx="50" cy="40" r="1.8" fill="#FFFFFF" />
          {/* Starlight Glint */}
          <line x1="60" y1="28" x2="60" y2="76" stroke="#FFFFFF" strokeWidth="1" opacity="0.8" />
        </g>
      )}

      {isCyber && (
        /* Cyber Quantum Core & Orbit Arcs (Levels 16–20) */
        <g filter={`drop-shadow(0 0 12px ${meta.glow})`}>
          <circle cx="60" cy="52" r="18" fill="none" stroke={meta.primary} strokeWidth="1.8" strokeDasharray="6 3" />
          <polygon points="60,34 74,52 60,70 46,52" fill={`url(#pt-core-${id})`} stroke="#FFFFFF" strokeWidth="1.5" />
          <circle cx="60" cy="52" r="6" fill="#FFFFFF" />
          <circle cx="60" cy="52" r="3" fill={meta.dark} />
          {/* Circuit matrix channels */}
          <line x1="38" y1="52" x2="46" y2="52" stroke="#FFFFFF" strokeWidth="1.4" />
          <line x1="74" y1="52" x2="82" y2="52" stroke="#FFFFFF" strokeWidth="1.4" />
        </g>
      )}

      {isCosmic && !isDivine && (
        /* Stargate Cosmic Galaxy (Levels 21–25) */
        <g filter={`drop-shadow(0 0 12px ${meta.glow})`}>
          <ellipse cx="60" cy="52" rx="34" ry="14" stroke={`url(#pt-metal-${id})`} strokeWidth="1.6" fill="none" transform="rotate(-20 60 52)" />
          <circle cx="60" cy="52" r="14" fill={`url(#pt-core-${id})`} stroke="#FFFFFF" strokeWidth="1.5" />
          <polygon points="60,38 64,48 74,52 64,56 60,66 56,56 46,52 56,48" fill="#FFFFFF" />
          <circle cx="30" cy="46" r="2.5" fill="#FFFFFF" />
          <circle cx="90" cy="58" r="2.5" fill="#FFFFFF" />
        </g>
      )}

      {isDivine && (
        /* Supreme Divine Celestial Crown & Halo (Levels 26–30) */
        <g filter={`drop-shadow(0 0 14px ${meta.glow})`}>
          {/* Radiant Halo Rays */}
          <circle cx="60" cy="50" r="20" fill="none" stroke="#FDE68A" strokeWidth="1.5" strokeDasharray="5 2.5" />
          {/* 7-Spire Crown */}
          <path
            d="M 38 64 L 40 44 L 48 52 L 60 38 L 72 52 L 80 44 L 82 64 Z"
            fill={`url(#pt-metal-${id})`}
            stroke="#FFFFFF"
            strokeWidth="1.4"
          />
          {/* Crown Jewels */}
          <circle cx="60" cy="40" r="2.5" fill="#FFFFFF" />
          <circle cx="48" cy="52" r="1.8" fill={meta.secondary} />
          <circle cx="72" cy="52" r="1.8" fill={meta.secondary} />
          <circle cx="40" cy="44" r="1.8" fill="#FFFFFF" />
          <circle cx="80" cy="44" r="1.8" fill="#FFFFFF" />
          {/* Center Divinity Crystal */}
          <polygon points="60,48 68,58 60,68 52,58" fill={`url(#pt-core-${id})`} stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="60" cy="58" r="2.2" fill="#FFFFFF" />
        </g>
      )}

      {/* ── 7. Sculpted 24K Gold Dais Ribbon at Base ── */}
      <g>
        <path
          d="M 36 94 L 46 104 L 60 100 L 74 104 L 84 94 L 60 90 Z"
          fill={`url(#pt-metal-${id})`}
          stroke="#FFFFFF"
          strokeWidth="1"
          filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))"
        />
        {/* Gold Stars Embedded in Dais */}
        <polygon points="50,96 51.5,99 54.5,99.5 52,101.5 53,104.5 50,103 47,104.5 48,101.5 45.5,99.5 48.5,99" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.3" />
        <polygon points="60,94 61.8,97.5 65.5,98 62.5,100.5 63.5,104 60,102.5 56.5,104 57.5,100.5 54.5,98 58.2,97.5" fill="#FFFFFF" stroke="#78350F" strokeWidth="0.3" />
        <polygon points="70,96 71.5,99 74.5,99.5 72,101.5 73,104.5 70,103 67,104.5 68,101.5 65.5,99.5 68.5,99" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.3" />
      </g>

      {/* ── 8. Corner Metallic Rivets ── */}
      <circle cx="43" cy="11" r="2" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.7" />
      <circle cx="77" cy="11" r="2" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.7" />
      <circle cx="100" cy="32" r="2" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.7" />
      <circle cx="20" cy="32" r="2" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.7" />
    </>
  );
}

/* ─── Unified Dispatcher Function ────────────────────────────────────────── */
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
    default: return <ArtProceduralTier level={level} id={id} />;
  }
}
