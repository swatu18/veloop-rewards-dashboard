import React from 'react';
import styles from './Badge.module.css';

/* ─── Per-tier accent config (matching VELoop theme) ─────────────────────── */
const TIER_THEMES = {
  1: { name: 'Bronze Scout', primary: '#CD7F32', highlight: '#F5D0A9', shadow: '#78350F', glow: 'rgba(205,127,50,0.5)' },
  2: { name: 'Silver Pioneer', primary: '#D4D4D8', highlight: '#FFFFFF', shadow: '#52525B', glow: 'rgba(212,212,216,0.45)' },
  3: { name: 'Gold Vanguard', primary: '#F59E0B', highlight: '#FDE68A', shadow: '#92400E', glow: 'rgba(245,158,11,0.6)' },
  4: { name: 'Platinum Elite', primary: '#38BDF8', highlight: '#E0F2FE', shadow: '#0369A1', glow: 'rgba(56,189,248,0.55)' },
  5: { name: 'Diamond Champion', primary: '#FBBF24', highlight: '#FFFBEB', shadow: '#B45309', glow: 'rgba(251,191,36,0.7)' },
  6: { name: 'Master Sovereign', primary: '#A855F7', highlight: '#F3E8FF', shadow: '#6B21A8', glow: 'rgba(168,85,247,0.6)' },
  7: { name: 'Grand Ascendant', primary: '#3B82F6', highlight: '#DBEAFE', shadow: '#1D4ED8', glow: 'rgba(59,130,246,0.6)' },
  8: { name: 'Mythic Vanguard', primary: '#10B981', highlight: '#D1FAE5', shadow: '#065F46', glow: 'rgba(16,185,129,0.6)' },
  9: { name: 'Cosmic Overlord', primary: '#EC4899', highlight: '#FCE7F3', shadow: '#9D174D', glow: 'rgba(236,72,153,0.65)' },
  10: { name: 'Immortal Legend', primary: '#F59E0B', highlight: '#FFFBEB', shadow: '#78350F', glow: 'rgba(245,158,11,0.85)' },
};

export const LevelBadge = ({
  level = 5,
  size = 'normal',
  showStars = true,
  withLaurel = false,
  animated = false,
}) => {
  const theme = TIER_THEMES[level] || TIER_THEMES[5];
  const formattedLevel = level < 10 ? `0${level}` : `${level}`;
  const uid = `badge-${level}-${size}-${withLaurel ? 'l' : 'b'}`;

  // If withLaurel is true (used in Level Up modal and Challenge Complete), render the grand laurel crest
  if (withLaurel) {
    return (
      <div className={`${styles.laurelWrapper} ${styles[size]} ${animated ? styles.animated : ''}`}>
        <div className={styles.laurelGlowAura} style={{ background: `radial-gradient(circle, ${theme.glow} 0%, transparent 70%)` }} />
        
        <svg viewBox="0 0 200 170" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.laurelSvg}>
          <defs>
            <linearGradient id={`goldGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFBEB" />
              <stop offset="25%" stopColor="#FDE68A" />
              <stop offset="55%" stopColor="#F59E0B" />
              <stop offset="85%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>

            <linearGradient id={`metalBevel-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFBEB" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#451A03" />
            </linearGradient>

            <radialGradient id={`darkInner-${uid}`} cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#1E2338" />
              <stop offset="60%" stopColor="#121526" />
              <stop offset="100%" stopColor="#0A0B14" />
            </radialGradient>

            <filter id={`bloom-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* ── Outer Golden Rays / Wings ── */}
          {/* Left Wing Leaves */}
          <g filter={`url(#bloom-${uid})`}>
            {/* Left Laurel Leaves */}
            <path d="M 52 110 C 25 88 28 50 56 36" stroke={`url(#goldGrad-${uid})`} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 40 76 Q 26 78 35 88" stroke={`url(#goldGrad-${uid})`} strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <path d="M 45 60 Q 30 60 40 70" stroke={`url(#goldGrad-${uid})`} strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <path d="M 52 46 Q 38 42 48 54" stroke={`url(#goldGrad-${uid})`} strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <circle cx="34" cy="84" r="3" fill="#FFFBEB" />
            <circle cx="38" cy="66" r="3" fill="#FFFBEB" />
            <circle cx="47" cy="49" r="3" fill="#FFFBEB" />

            {/* Right Laurel Leaves */}
            <path d="M 148 110 C 175 88 172 50 144 36" stroke={`url(#goldGrad-${uid})`} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 160 76 Q 174 78 165 88" stroke={`url(#goldGrad-${uid})`} strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <path d="M 155 60 Q 170 60 160 70" stroke={`url(#goldGrad-${uid})`} strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <path d="M 148 46 Q 162 42 152 54" stroke={`url(#goldGrad-${uid})`} strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <circle cx="166" cy="84" r="3" fill="#FFFBEB" />
            <circle cx="162" cy="66" r="3" fill="#FFFBEB" />
            <circle cx="153" cy="49" r="3" fill="#FFFBEB" />
          </g>

          {/* ── Base Golden Pedestal & Ribbon (from Screen 5) ── */}
          <path
            d="M 68 132 L 60 144 L 80 140 L 100 144 L 120 140 L 140 144 L 132 132 Z"
            fill={`url(#goldGrad-${uid})`}
            filter={`url(#bloom-${uid})`}
          />
          <path d="M 72 134 L 100 138 L 128 134" stroke="#FFFBEB" strokeWidth="1.5" fill="none" />

          {/* ── Central Shield Plaque (Screen 1 & 5) ── */}
          {/* Beveled Plaque Outer Gold Rim */}
          <polygon
            points="70,22 130,22 144,38 144,114 130,128 70,128 56,114 56,38"
            fill={`url(#goldGrad-${uid})`}
            filter={`url(#bloom-${uid})`}
          />

          {/* Beveled Plaque Inner Dark Background */}
          <polygon
            points="72,25 128,25 140,39 140,112 128,125 72,125 60,112 60,39"
            fill={`url(#darkInner-${uid})`}
          />

          {/* Thin Gold Inset Bevel Line */}
          <polygon
            points="74,29 126,29 136,41 136,109 126,121 74,121 64,109 64,41"
            stroke={`url(#goldGrad-${uid})`}
            strokeWidth="1"
            fill="none"
            opacity="0.45"
            strokeDasharray="4 2"
          />

          {/* Top Gold Corner Studs */}
          <circle cx="72" cy="27" r="1.5" fill="#FFFBEB" />
          <circle cx="128" cy="27" r="1.5" fill="#FFFBEB" />
          <circle cx="72" cy="123" r="1.5" fill="#FFFBEB" />
          <circle cx="128" cy="123" r="1.5" fill="#FFFBEB" />
        </svg>

        {/* Text Content Overlay */}
        <div className={styles.laurelContent}>
          <span className={styles.plaqueLevelLabel}>LEVEL</span>
          <span className={styles.plaqueLevelNum}>{formattedLevel}</span>
          {showStars && (
            <div className={styles.plaqueStars}>
              <span>★</span>
              <span className={styles.centerStar}>★</span>
              <span>★</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Standard Beveled Plaque Badge (Exactly like Screen 1)
  return (
    <div
      className={[
        styles.plaqueWrapper,
        styles[size],
        animated ? styles.animated : '',
      ].join(' ')}
      style={{ '--tier-glow': theme.glow, '--tier-primary': theme.primary }}
    >
      {/* Ambient Glow */}
      <div className={styles.glowAura} style={{ background: `radial-gradient(circle, ${theme.glow} 0%, transparent 70%)` }} />

      {/* SVG Plaque Shape */}
      <svg
        viewBox="0 0 110 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.plaqueSvg}
      >
        <defs>
          <linearGradient id={`goldBorder-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFBEB" />
            <stop offset="20%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="80%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          <linearGradient id={`goldBevel-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFBEB" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#451A03" />
          </linearGradient>

          <radialGradient id={`innerDarkBg-${uid}`} cx="50%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#1E2338" />
            <stop offset="55%" stopColor="#121526" />
            <stop offset="100%" stopColor="#090A12" />
          </radialGradient>

          <filter id={`plaqueGlow-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ── Outer Golden Beveled Frame (Screen 1 exact shape) ── */}
        <polygon
          points="20,6 90,6 104,22 104,106 90,122 20,122 6,106 6,22"
          fill={`url(#goldBorder-${uid})`}
          filter={`url(#plaqueGlow-${uid})`}
        />

        {/* ── Inner Deep Obsidian Plate ── */}
        <polygon
          points="22,9 88,9 99,22 99,104 88,118 22,118 11,104 11,22"
          fill={`url(#innerDarkBg-${uid})`}
        />

        {/* ── Delicate Gold Accent Inset Line ── */}
        <polygon
          points="24,14 86,14 94,24 94,101 86,113 24,113 16,101 16,24"
          stroke={`url(#goldBorder-${uid})`}
          strokeWidth="1"
          fill="none"
          opacity="0.35"
          strokeDasharray="4 2"
        />

        {/* Top Gold Bar Highlight */}
        <line x1="26" y1="12" x2="84" y2="12" stroke="#FFFBEB" strokeWidth="1.2" opacity="0.6" />

        {/* Corner Metallic Rivets */}
        <circle cx="21" cy="11" r="1.5" fill="#FFFBEB" />
        <circle cx="89" cy="11" r="1.5" fill="#FFFBEB" />
        <circle cx="21" cy="117" r="1.5" fill="#FFFBEB" />
        <circle cx="89" cy="117" r="1.5" fill="#FFFBEB" />
      </svg>

      {/* Typography Overlay */}
      <div className={styles.plaqueContent}>
        <span className={styles.plaqueLevelLabel}>LEVEL</span>
        <span className={styles.plaqueLevelNum}>{formattedLevel}</span>
        {showStars && (
          <div className={styles.plaqueStars}>
            <span>★</span>
            <span className={styles.centerStar}>★</span>
            <span>★</span>
          </div>
        )}
      </div>
    </div>
  );
};
