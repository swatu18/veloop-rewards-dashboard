import React from 'react';
import styles from './Badge.module.css';

/* ─── Per-tier design tokens ─────────────────────────────────────────────── */
const TIER_CONFIG = {
  1: {
    name: 'Bronze Scout',
    primary: '#CD7F32', secondary: '#8B4513', highlight: '#E8A87C',
    glow: 'rgba(205,127,50,0.55)', shape: 'shield',
    innerBg: ['#2A1A0A', '#1A1008'], symbol: '⚔',
  },
  2: {
    name: 'Silver Pioneer',
    primary: '#D4D4D4', secondary: '#9CA3AF', highlight: '#F5F5F5',
    glow: 'rgba(212,212,212,0.5)', shape: 'shield',
    innerBg: ['#1F2030', '#14161F'], symbol: '🛡',
  },
  3: {
    name: 'Gold Vanguard',
    primary: '#FBBF24', secondary: '#D97706', highlight: '#FDE68A',
    glow: 'rgba(251,191,36,0.65)', shape: 'hexagon',
    innerBg: ['#2A1F05', '#1A1303'], symbol: '★',
  },
  4: {
    name: 'Platinum Elite',
    primary: '#E8F4F8', secondary: '#94C8D8', highlight: '#FFFFFF',
    glow: 'rgba(148,200,216,0.6)', shape: 'hexagon',
    innerBg: ['#0E2030', '#081520'], symbol: '💠',
  },
  5: {
    name: 'Diamond Champion',
    primary: '#67E8F9', secondary: '#0EA5E9', highlight: '#BFEFFF',
    glow: 'rgba(103,232,249,0.7)', shape: 'diamond',
    innerBg: ['#061E30', '#02111E'], symbol: '◆',
  },
  6: {
    name: 'Master Sovereign',
    primary: '#C084FC', secondary: '#7C3AED', highlight: '#EDE9FE',
    glow: 'rgba(192,132,252,0.65)', shape: 'crown',
    innerBg: ['#180A2E', '#0D0518'], symbol: '♛',
  },
  7: {
    name: 'Grand Ascendant',
    primary: '#60A5FA', secondary: '#1D4ED8', highlight: '#BFDBFE',
    glow: 'rgba(96,165,250,0.6)', shape: 'crown',
    innerBg: ['#071430', '#03091E'], symbol: '🌟',
  },
  8: {
    name: 'Mythic Vanguard',
    primary: '#34D399', secondary: '#065F46', highlight: '#A7F3D0',
    glow: 'rgba(52,211,153,0.65)', shape: 'crest',
    innerBg: ['#021A10', '#010D09'], symbol: '⚡',
  },
  9: {
    name: 'Cosmic Overlord',
    primary: '#F472B6', secondary: '#9333EA', highlight: '#FDE8FF',
    glow: 'rgba(244,114,182,0.7)', shape: 'crest',
    innerBg: ['#1A0528', '#0D0218'], symbol: '🌌',
  },
  10: {
    name: 'Immortal Legend',
    primary: '#FDE68A', secondary: '#B45309', highlight: '#FFFBEB',
    glow: 'rgba(253,230,138,0.9)', shape: 'legend',
    innerBg: ['#2A1A00', '#180F00'], symbol: '♾',
  },
};

/* ─── Shape SVG builders ─────────────────────────────────────────────────── */
function ShieldPath({ cfg, uid }) {
  return (
    <>
      <defs>
        <linearGradient id={`border-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={cfg.highlight} />
          <stop offset="40%" stopColor={cfg.primary} />
          <stop offset="100%" stopColor={cfg.secondary} />
        </linearGradient>
        <linearGradient id={`inner-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={cfg.innerBg[0]} />
          <stop offset="100%" stopColor={cfg.innerBg[1]} />
        </linearGradient>
        <filter id={`glow-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id={`innerGlow-${uid}`} x="-15%" y="-15%" width="130%" height="130%">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Outer halo ring */}
      <circle cx="60" cy="60" r="56" fill="none" stroke={cfg.primary} strokeWidth="1" opacity="0.35" />
      <circle cx="60" cy="60" r="52" fill="none" stroke={cfg.primary} strokeWidth="0.5" opacity="0.2" />

      {/* Shield outline (filled) */}
      <path
        d="M60 8 L96 22 L96 62 Q96 88 60 112 Q24 88 24 62 L24 22 Z"
        fill={`url(#border-${uid})`}
        filter={`url(#glow-${uid})`}
      />
      {/* Inner shield fill */}
      <path
        d="M60 16 L90 28 L90 62 Q90 84 60 104 Q30 84 30 62 L30 28 Z"
        fill={`url(#inner-${uid})`}
      />
      {/* Shield inner accent line */}
      <path
        d="M60 20 L88 31 L88 62 Q88 82 60 100 Q32 82 32 62 L32 31 Z"
        fill="none" stroke={cfg.primary} strokeWidth="1" opacity="0.3"
        strokeDasharray="3 3"
      />
      {/* Top center emblem dot */}
      <circle cx="60" cy="30" r="3" fill={cfg.highlight} opacity="0.8" filter={`url(#innerGlow-${uid})`} />
    </>
  );
}

function HexagonPath({ cfg, uid }) {
  return (
    <>
      <defs>
        <linearGradient id={`border-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={cfg.highlight} />
          <stop offset="50%" stopColor={cfg.primary} />
          <stop offset="100%" stopColor={cfg.secondary} />
        </linearGradient>
        <linearGradient id={`inner-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={cfg.innerBg[0]} />
          <stop offset="100%" stopColor={cfg.innerBg[1]} />
        </linearGradient>
        <filter id={`glow-${uid}`} x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer spinning ring accent */}
      <polygon points="60,5 105,30 105,90 60,115 15,90 15,30"
        fill="none" stroke={cfg.primary} strokeWidth="1.5" opacity="0.4" />
      <polygon points="60,2 108,28 108,92 60,118 12,92 12,28"
        fill="none" stroke={cfg.primary} strokeWidth="0.5" opacity="0.2" />

      {/* Main hexagon */}
      <polygon points="60,10 100,33 100,87 60,110 20,87 20,33"
        fill={`url(#border-${uid})`} filter={`url(#glow-${uid})`} />
      {/* Inner hexagon fill */}
      <polygon points="60,18 93,37 93,83 60,102 27,83 27,37"
        fill={`url(#inner-${uid})`} />
      {/* Inner accent dash ring */}
      <polygon points="60,22 90,40 90,80 60,98 30,80 30,40"
        fill="none" stroke={cfg.primary} strokeWidth="1" opacity="0.3" strokeDasharray="4 2" />

      {/* Corner sparkle dots */}
      {[[60,12],[100,35],[100,85],[60,108],[20,85],[20,35]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill={cfg.highlight} opacity="0.7" />
      ))}
    </>
  );
}

function DiamondPath({ cfg, uid }) {
  return (
    <>
      <defs>
        <linearGradient id={`border-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={cfg.highlight} />
          <stop offset="50%" stopColor={cfg.primary} />
          <stop offset="100%" stopColor={cfg.secondary} />
        </linearGradient>
        <linearGradient id={`inner-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={cfg.innerBg[0]} />
          <stop offset="100%" stopColor={cfg.innerBg[1]} />
        </linearGradient>
        <filter id={`glow-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer ring */}
      <circle cx="60" cy="60" r="55" fill="none" stroke={cfg.primary} strokeWidth="2" opacity="0.4" />
      <circle cx="60" cy="60" r="51" fill="none" stroke={cfg.primary} strokeWidth="1" opacity="0.2" />

      {/* Diamond shape */}
      <polygon points="60,8 112,60 60,112 8,60"
        fill={`url(#border-${uid})`} filter={`url(#glow-${uid})`} />
      <polygon points="60,18 102,60 60,102 18,60"
        fill={`url(#inner-${uid})`} />
      {/* Inner diamond lines */}
      <polygon points="60,22 98,60 60,98 22,60"
        fill="none" stroke={cfg.primary} strokeWidth="1" opacity="0.35" strokeDasharray="3 3" />

      {/* Crystal facet lines */}
      <line x1="60" y1="18" x2="60" y2="102" stroke={cfg.highlight} strokeWidth="0.7" opacity="0.2" />
      <line x1="18" y1="60" x2="102" y2="60" stroke={cfg.highlight} strokeWidth="0.7" opacity="0.2" />
      <line x1="27" y1="27" x2="93" y2="93" stroke={cfg.highlight} strokeWidth="0.5" opacity="0.15" />
      <line x1="93" y1="27" x2="27" y2="93" stroke={cfg.highlight} strokeWidth="0.5" opacity="0.15" />

      {/* Corner gems */}
      {[[60,8],[112,60],[60,112],[8,60]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="3" fill={cfg.highlight} opacity="0.9" />
      ))}
    </>
  );
}

function CrownPath({ cfg, uid }) {
  return (
    <>
      <defs>
        <linearGradient id={`border-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={cfg.highlight} />
          <stop offset="50%" stopColor={cfg.primary} />
          <stop offset="100%" stopColor={cfg.secondary} />
        </linearGradient>
        <linearGradient id={`inner-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={cfg.innerBg[0]} />
          <stop offset="100%" stopColor={cfg.innerBg[1]} />
        </linearGradient>
        <filter id={`glow-${uid}`} x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer circle rings */}
      <circle cx="60" cy="60" r="56" fill="none" stroke={cfg.primary} strokeWidth="2" opacity="0.45" />
      <circle cx="60" cy="60" r="52" fill="none" stroke={cfg.primary} strokeWidth="1" opacity="0.2" />

      {/* Main circular body */}
      <circle cx="60" cy="60" r="48" fill={`url(#border-${uid})`} filter={`url(#glow-${uid})`} />
      <circle cx="60" cy="60" r="43" fill={`url(#inner-${uid})`} />
      <circle cx="60" cy="60" r="40" fill="none" stroke={cfg.primary} strokeWidth="1" opacity="0.3" strokeDasharray="5 3" />

      {/* Crown shape on top */}
      <path
        d="M36 50 L36 38 L48 46 L60 30 L72 46 L84 38 L84 50 Z"
        fill={`url(#border-${uid})`}
        filter={`url(#glow-${uid})`}
      />
      {/* Crown gems */}
      <circle cx="60" cy="30" r="4" fill={cfg.highlight} opacity="0.95" />
      <circle cx="36" cy="38" r="3" fill={cfg.primary} opacity="0.85" />
      <circle cx="84" cy="38" r="3" fill={cfg.primary} opacity="0.85" />
    </>
  );
}

function CrestPath({ cfg, uid }) {
  return (
    <>
      <defs>
        <linearGradient id={`border-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={cfg.highlight} />
          <stop offset="50%" stopColor={cfg.primary} />
          <stop offset="100%" stopColor={cfg.secondary} />
        </linearGradient>
        <linearGradient id={`inner-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={cfg.innerBg[0]} />
          <stop offset="100%" stopColor={cfg.innerBg[1]} />
        </linearGradient>
        <filter id={`glow-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Star / crest outer ring */}
      <polygon points="60,4 72,46 116,46 82,72 94,114 60,88 26,114 38,72 4,46 48,46"
        fill={`url(#border-${uid})`} filter={`url(#glow-${uid})`} />
      <polygon points="60,16 69,47 102,47 76,66 85,97 60,78 35,97 44,66 18,47 51,47"
        fill={`url(#inner-${uid})`} />
      <polygon points="60,20 68,47 99,47 75,65 83,94 60,76 37,94 45,65 21,47 52,47"
        fill="none" stroke={cfg.primary} strokeWidth="1" opacity="0.35" strokeDasharray="3 2" />

      {/* Center accent gem */}
      <polygon points="60,35 65,52 82,52 69,62 74,79 60,69 46,79 51,62 38,52 55,52"
        fill={cfg.primary} opacity="0.5" />
    </>
  );
}

function LegendPath({ cfg, uid }) {
  return (
    <>
      <defs>
        <linearGradient id={`border-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="25%" stopColor="#FBBF24" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="75%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
        <linearGradient id={`rainbow-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F472B6" />
          <stop offset="25%" stopColor="#818CF8" />
          <stop offset="50%" stopColor="#34D399" />
          <stop offset="75%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F472B6" />
        </linearGradient>
        <linearGradient id={`inner-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={cfg.innerBg[0]} />
          <stop offset="100%" stopColor={cfg.innerBg[1]} />
        </linearGradient>
        <filter id={`glow-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Rainbow outer aura ring */}
      <circle cx="60" cy="60" r="56" fill="none" stroke={`url(#rainbow-${uid})`} strokeWidth="3" opacity="0.8" />
      <circle cx="60" cy="60" r="51" fill="none" stroke={`url(#border-${uid})`} strokeWidth="1.5" opacity="0.5" />

      {/* 12-pointed star burst */}
      <polygon points="60,6 64,46 100,30 80,64 116,72 80,80 100,114 64,96 60,116 56,96 20,114 40,80 4,72 40,64 20,30 56,46"
        fill={`url(#border-${uid})`} filter={`url(#glow-${uid})`} />
      <polygon points="60,18 63,48 90,35 76,62 104,68 76,74 90,101 63,88 60,106 57,88 30,101 44,74 16,68 44,62 30,35 57,48"
        fill={`url(#inner-${uid})`} />

      {/* Rainbow ring inset */}
      <circle cx="60" cy="60" r="26" fill="none" stroke={`url(#rainbow-${uid})`} strokeWidth="2" opacity="0.6" />

      {/* Corner star gems */}
      {[[60,8],[112,60],[60,112],[8,60],[95,20],[95,100],[25,20],[25,100]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r={i < 4 ? 3 : 2} fill={cfg.highlight} opacity={i < 4 ? 0.9 : 0.6} />
      ))}
    </>
  );
}

/* ─── Main LevelBadge Component ──────────────────────────────────────────── */
export const LevelBadge = ({ level = 5, size = 'normal', showStars = true, animated = false }) => {
  const cfg = TIER_CONFIG[level] || TIER_CONFIG[5];
  const uid = `lvl${level}`;
  const formattedLevel = level < 10 ? `0${level}` : `${level}`;

  const getShape = () => {
    switch (cfg.shape) {
      case 'shield':   return <ShieldPath cfg={cfg} uid={uid} />;
      case 'hexagon':  return <HexagonPath cfg={cfg} uid={uid} />;
      case 'diamond':  return <DiamondPath cfg={cfg} uid={uid} />;
      case 'crown':    return <CrownPath cfg={cfg} uid={uid} />;
      case 'crest':    return <CrestPath cfg={cfg} uid={uid} />;
      case 'legend':   return <LegendPath cfg={cfg} uid={uid} />;
      default:         return <HexagonPath cfg={cfg} uid={uid} />;
    }
  };

  // Star count by tier
  const starCount = level <= 3 ? 1 : level <= 6 ? 2 : level <= 8 ? 3 : 4;

  return (
    <div
      className={[
        styles.badgeWrapper,
        styles[size],
        animated ? styles.animated : '',
        level === 10 ? styles.legendaryBadge : '',
      ].join(' ')}
      style={{ '--tier-glow': cfg.glow, '--tier-primary': cfg.primary }}
    >
      {/* Outer ambient glow halo */}
      <div className={styles.glowAura} style={{ background: `radial-gradient(circle, ${cfg.glow} 0%, transparent 70%)` }} />

      {/* Tier-specific SVG shape */}
      <svg
        className={styles.badgeSvg}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={`Level ${formattedLevel} - ${cfg.name}`}
      >
        {getShape()}
      </svg>

      {/* Overlay text */}
      <div className={styles.contentOverlay}>
        <span className={styles.levelLabel}>LVL</span>
        <span className={styles.levelNumber} style={{ color: cfg.primary, WebkitTextFillColor: 'initial', background: 'none' }}>
          {formattedLevel}
        </span>
        {showStars && (
          <div className={styles.starsRow}>
            {Array.from({ length: starCount }).map((_, i) => (
              <span key={i} className={i === Math.floor(starCount / 2) ? styles.centerStar : ''}>★</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── Mini Badge for Roadmap nodes ───────────────────────────────────────── */
export const MiniBadge = ({ level, status }) => {
  const cfg = TIER_CONFIG[level] || TIER_CONFIG[5];
  const uid = `mini${level}`;

  const colorMap = {
    completed: cfg.primary,
    current:   cfg.primary,
    next:      cfg.primary,
    locked:    '#3A3F5E',
  };
  const borderColor = colorMap[status] || colorMap.locked;
  const opacity = status === 'locked' ? 0.4 : 1;

  return (
    <div className={styles.miniBadgeWrap} style={{ opacity }}>
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
        <defs>
          <linearGradient id={`mBorder-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={cfg.highlight || cfg.primary} />
            <stop offset="100%" stopColor={cfg.secondary || cfg.primary} />
          </linearGradient>
          <filter id={`mGlow-${uid}`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation={status === 'current' ? '3' : '1.5'} result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        {/* Outer ring */}
        <circle cx="20" cy="20" r="18"
          fill="none"
          stroke={`url(#mBorder-${uid})`}
          strokeWidth={status === 'current' ? '2.5' : '1.5'}
          filter={`url(#mGlow-${uid})`}
          strokeDasharray={status === 'next' ? '4 2' : 'none'}
        />
        {/* Inner fill */}
        <circle cx="20" cy="20" r="14"
          fill={status === 'locked' ? 'rgba(22,24,39,0.8)' : status === 'current' ? cfg.primary : 'rgba(22,24,39,0.9)'}
          opacity={status === 'current' ? 1 : 0.9}
        />
      </svg>
    </div>
  );
};
