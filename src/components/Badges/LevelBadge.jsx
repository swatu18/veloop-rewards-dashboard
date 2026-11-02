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
  const formattedLevel = level < 10 ? `0${level}` : `${level}`;
  const uid = `mini-${level}-${status}`;
  const isCurrent = status === 'current';
  const isCompleted = status === 'completed';
  const isNext = status === 'next';
  const isLocked = status === 'locked';

  return (
    <div
      className={[
        styles.miniNodeBadge,
        isCurrent ? styles.miniNodeCurrent : '',
        isCompleted ? styles.miniNodeCompleted : '',
        isNext ? styles.miniNodeNext : '',
        isLocked ? styles.miniNodeLocked : '',
      ].filter(Boolean).join(' ')}
      style={{
        '--mini-glow': meta.glow,
        '--mini-primary': meta.primary,
      }}
    >
      {/* Ambient Radial Aura */}
      <div
        className={styles.miniGlowAura}
        style={{
          background: isCurrent
            ? 'radial-gradient(circle, rgba(245, 158, 11, 0.75) 0%, rgba(245, 158, 11, 0.15) 55%, transparent 75%)'
            : isNext
            ? 'radial-gradient(circle, rgba(192, 132, 252, 0.6) 0%, rgba(192, 132, 252, 0.1) 50%, transparent 70%)'
            : isCompleted
            ? 'radial-gradient(circle, rgba(16, 185, 129, 0.45) 0%, transparent 65%)'
            : 'none',
        }}
      />

      {/* Unique Handcrafted Tier SVG */}
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.miniNodeSvg}
        aria-hidden="true"
      >
        <defs>
          {/* Gold text gradient for current level */}
          <linearGradient id={`goldNum-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFBEB" />
            <stop offset="35%" stopColor="#FDE68A" />
            <stop offset="70%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          {/* Purple/Amethyst gradient for next goal */}
          <linearGradient id={`purpleNum-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FAF5FF" />
            <stop offset="40%" stopColor="#E9D5FF" />
            <stop offset="80%" stopColor="#C084FC" />
            <stop offset="100%" stopColor="#7E22CE" />
          </linearGradient>

          {/* Metallic silver/bronze gradient for completed */}
          <linearGradient id={`compNum-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#D1D5DB" />
            <stop offset="100%" stopColor="#9CA3AF" />
          </linearGradient>

          {/* Dim gradient for locked */}
          <linearGradient id={`lockNum-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
        </defs>

        {/* Tier shape artwork */}
        <g opacity={isLocked ? 0.45 : 1}>
          {renderTierSvg(level, uid)}
        </g>

        {/* Extra golden laurel wreath wings for Current Level (05) */}
        {isCurrent && (
          <g filter="drop-shadow(0 0 5px rgba(245, 158, 11, 0.8))">
            {/* Left wreath wing */}
            <path d="M 28 88 C 12 70 16 42 36 28" stroke="url(#goldNum-mini-5-current)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <circle cx="22" cy="68" r="2" fill="#FFFBEB" />
            <circle cx="26" cy="52" r="2" fill="#FFFBEB" />
            <circle cx="32" cy="38" r="2" fill="#FFFBEB" />

            {/* Right wreath wing */}
            <path d="M 92 88 C 108 70 104 42 84 28" stroke="url(#goldNum-mini-5-current)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <circle cx="98" cy="68" r="2" fill="#FFFBEB" />
            <circle cx="94" cy="52" r="2" fill="#FFFBEB" />
            <circle cx="88" cy="38" r="2" fill="#FFFBEB" />

            {/* Radiant Crown Star */}
            <polygon points="60,10 62.5,16 69,17 64,21 65.5,27 60,24 54.5,27 56,21 51,17 57.5,16" fill="#FFFBEB" filter="drop-shadow(0 0 4px #F59E0B)" />
          </g>
        )}

        {/* Next Goal Pulsing Ring Accent */}
        {isNext && (
          <circle
            cx="60"
            cy="60"
            r="54"
            stroke="#C084FC"
            strokeWidth="2"
            strokeDasharray="6 4"
            fill="none"
            opacity="0.85"
          />
        )}
      </svg>

      {/* Prominent Level Number Display Inside Badge */}
      <div className={styles.miniTextOverlay}>
        <span
          className={[
            styles.miniNum,
            isCurrent ? styles.miniNumCurrent : '',
            isNext ? styles.miniNumNext : '',
            isCompleted ? styles.miniNumCompleted : '',
            isLocked ? styles.miniNumLocked : '',
          ].filter(Boolean).join(' ')}
        >
          {formattedLevel}
        </span>
      </div>

      {/* Floating 3D Checkmark Medallion for Completed Levels */}
      {isCompleted && (
        <div className={styles.completedBadgePill} title={`Level ${formattedLevel} Completed`}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.checkIconSvg}>
            <circle cx="12" cy="12" r="11" fill="#059669" stroke="#34D399" strokeWidth="2" />
            <path d="M 7.5 12 L 10.5 15 L 16.5 9" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}

      {/* Floating Golden Lock Insignia for Locked Levels */}
      {isLocked && (
        <div className={styles.lockedBadgePill} title={`Level ${formattedLevel} Locked`}>
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.lockIconSvg}>
            <rect x="4" y="9" width="12" height="9" rx="2.5" fill="#1E293B" stroke="#64748B" strokeWidth="1.5" />
            <path d="M 7 9 L 7 6.5 C 7 4.8 8.3 3.5 10 3.5 C 11.7 3.5 13 4.8 13 6.5 L 13 9" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="10" cy="13.5" r="1.2" fill="#FDE68A" />
          </svg>
        </div>
      )}
    </div>
  );
};
