import React from 'react';
import styles from './Badge.module.css';

export const LevelBadge = ({ level = 5, size = 'normal', showStars = true }) => {
  const formattedLevel = level < 10 ? `0${level}` : `${level}`;

  return (
    <div className={`${styles.badgeWrapper} ${styles[size]}`}>
      {/* Outer Glow Halo */}
      <div className={styles.glowAura}></div>

      {/* SVG Hexagonal Laurel Shield */}
      <svg className={styles.badgeSvg} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`goldBorder-${level}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFBEB" />
            <stop offset="30%" stopColor="#FBBF24" />
            <stop offset="70%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          <linearGradient id={`innerGrad-${level}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E2238" />
            <stop offset="50%" stopColor="#161827" />
            <stop offset="100%" stopColor="#0F111E" />
          </linearGradient>

          <linearGradient id={`laurelGrad-${level}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>

          <filter id={`badgeGlow-${level}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Hexagon Shield Border */}
        <polygon
          points="60,6 108,32 108,88 60,114 12,88 12,32"
          stroke={`url(#goldBorder-${level})`}
          strokeWidth="4"
          fill={`url(#innerGrad-${level})`}
          filter={`url(#badgeGlow-${level})`}
        />

        {/* Inner Thin Accent Line */}
        <polygon
          points="60,12 102,35 102,85 60,108 18,85 18,35"
          stroke="rgba(245, 158, 11, 0.4)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 2"
        />

        {/* Laurel Wreath Left */}
        <path
          d="M 28 40 Q 22 60 28 80 M 24 50 Q 18 52 23 58 M 22 62 Q 16 65 22 71"
          stroke={`url(#laurelGrad-${level})`}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Laurel Wreath Right */}
        <path
          d="M 92 40 Q 98 60 92 80 M 96 50 Q 102 52 97 58 M 98 62 Q 104 65 98 71"
          stroke={`url(#laurelGrad-${level})`}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Decorative Top Chevron / Wing */}
        <path
          d="M 45 24 L 60 17 L 75 24"
          stroke={`url(#laurelGrad-${level})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Bottom Wing Detail */}
        <path
          d="M 48 96 L 60 102 L 72 96"
          stroke={`url(#laurelGrad-${level})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Badge Content Text */}
      <div className={styles.contentOverlay}>
        <span className={styles.levelLabel}>LEVEL</span>
        <span className={styles.levelNumber}>{formattedLevel}</span>
        {showStars && (
          <div className={styles.starsRow}>
            <span>★</span>
            <span className={styles.centerStar}>★</span>
            <span>★</span>
          </div>
        )}
      </div>
    </div>
  );
};
