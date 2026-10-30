import React from 'react';
import { TIER_METADATA, renderTierSvg } from './TierBadgeArt';
import styles from './Badge.module.css';

export const LevelBadge = ({
  level = 5,
  size = 'normal',
  showStars = true,
  withLaurel = false,
  animated = false,
}) => {
  const meta = TIER_METADATA[level] || TIER_METADATA[5];
  const formattedLevel = level < 10 ? `0${level}` : `${level}`;
  const uid = `tier-${level}-${size}-${withLaurel ? 'w' : 'n'}`;

  // If withLaurel is requested (used for Level-Up Modal Screen 5), add the grand golden laurel wings
  if (withLaurel) {
    return (
      <div
        className={`${styles.laurelWrapper} ${styles[size]} ${animated ? styles.animated : ''}`}
        style={{ '--tier-glow': meta.glow }}
      >
        <div
          className={styles.laurelGlowAura}
          style={{ background: `radial-gradient(circle, ${meta.glow} 0%, transparent 70%)` }}
        />

        <svg
          viewBox="0 0 160 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.laurelSvg}
        >
          <defs>
            <linearGradient id={`laurelGold-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFBEB" />
              <stop offset="30%" stopColor="#FDE68A" />
              <stop offset="60%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
            <filter id={`laurelBloom-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Left Wing & Laurel Wreath */}
          <g filter={`url(#laurelBloom-${uid})`}>
            <path d="M 40 100 C 14 78 18 42 44 26" stroke={`url(#laurelGold-${uid})`} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 32 68 Q 18 70 26 80" stroke={`url(#laurelGold-${uid})`} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 36 52 Q 22 52 32 62" stroke={`url(#laurelGold-${uid})`} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 42 38 Q 28 34 38 46" stroke={`url(#laurelGold-${uid})`} strokeWidth="3" fill="none" strokeLinecap="round" />
            <circle cx="26" cy="76" r="2.5" fill="#FFFBEB" />
            <circle cx="30" cy="58" r="2.5" fill="#FFFBEB" />
            <circle cx="37" cy="42" r="2.5" fill="#FFFBEB" />

            {/* Right Wing & Laurel Wreath */}
            <path d="M 120 100 C 146 78 142 42 116 26" stroke={`url(#laurelGold-${uid})`} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 128 68 Q 142 70 134 80" stroke={`url(#laurelGold-${uid})`} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 124 52 Q 138 52 128 62" stroke={`url(#laurelGold-${uid})`} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 118 38 Q 132 34 122 46" stroke={`url(#laurelGold-${uid})`} strokeWidth="3" fill="none" strokeLinecap="round" />
            <circle cx="134" cy="76" r="2.5" fill="#FFFBEB" />
            <circle cx="130" cy="58" r="2.5" fill="#FFFBEB" />
            <circle cx="123" cy="42" r="2.5" fill="#FFFBEB" />

            {/* Bottom Ribbon / Pedestal Dais */}
            <path d="M 52 118 L 46 128 L 62 125 L 80 128 L 98 125 L 114 128 L 108 118 Z" fill={`url(#laurelGold-${uid})`} />
            <path d="M 56 120 L 80 123 L 104 120" stroke="#FFFBEB" strokeWidth="1" fill="none" />
          </g>

          {/* Central Tier Badge Art embedded */}
          <g transform="translate(20, 10)">
            {renderTierSvg(level, uid)}
          </g>
        </svg>

        {/* Badge Content Overlay */}
        <div className={styles.laurelContent}>
          <span className={styles.plaqueLevelLabel}>LEVEL</span>
          <span className={styles.plaqueLevelNum}>{formattedLevel}</span>
          {showStars && (
            <div className={styles.plaqueStars}>
              {Array.from({ length: Math.min(meta.stars, 3) }).map((_, i) => (
                <span key={i} className={i === 1 ? styles.centerStar : ''}>★</span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Standard Tier Badge (Hero, Cards, Roadmaps)
  return (
    <div
      className={[
        styles.plaqueWrapper,
        styles[size],
        animated ? styles.animated : '',
      ].join(' ')}
      style={{ '--tier-glow': meta.glow, '--tier-primary': meta.primary }}
    >
      {/* Ambient Radial Glow */}
      <div
        className={styles.glowAura}
        style={{ background: `radial-gradient(circle, ${meta.glow} 0%, transparent 70%)` }}
      />

      {/* Unique SVG for this specific level */}
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.plaqueSvg}
        aria-label={`Level ${formattedLevel} – ${meta.name}`}
      >
        {renderTierSvg(level, uid)}
      </svg>

      {/* Text Overlay */}
      <div className={styles.plaqueContent}>
        <span className={styles.plaqueLevelLabel}>LEVEL</span>
        <span className={styles.plaqueLevelNum}>{formattedLevel}</span>
        {showStars && (
          <div className={styles.plaqueStars}>
            {Array.from({ length: Math.min(meta.stars, 3) }).map((_, i) => (
              <span key={i} className={i === 1 ? styles.centerStar : ''}>★</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── Mini Badge for Roadmap Nodes ───────────────────────────────────────── */
export const MiniTierBadge = ({ level, status }) => {
  const meta = TIER_METADATA[level] || TIER_METADATA[5];
  const uid = `mini-${level}-${status}`;
  const isCurrent = status === 'current';
  const isCompleted = status === 'completed';
  const isLocked = status === 'locked';

  return (
    <div
      className={`${styles.miniNodeBadge} ${isCurrent ? styles.miniNodeCurrent : ''}`}
      style={{ '--mini-glow': meta.glow }}
    >
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.miniNodeSvg}>
        {renderTierSvg(level, uid)}

        {/* Completed Checkmark Overlay */}
        {isCompleted && (
          <g filter="drop-shadow(0 0 6px #10B981)">
            <circle cx="60" cy="60" r="26" fill="rgba(16, 185, 129, 0.88)" stroke="#FFFFFF" strokeWidth="2" />
            <path d="M 49 60 L 57 68 L 73 50" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
        )}

        {/* Locked Tier Dim Overlay */}
        {isLocked && (
          <g>
            <circle cx="60" cy="60" r="38" fill="rgba(15, 17, 30, 0.75)" />
            {/* Lock icon */}
            <rect x="52" y="56" width="16" height="12" rx="3" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
            <path d="M 55 56 L 55 51 Q 55 45 60 45 Q 65 45 65 51 L 65 56" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" strokeLinecap="round" />
          </g>
        )}
      </svg>
    </div>
  );
};
