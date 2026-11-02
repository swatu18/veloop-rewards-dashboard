import React from 'react';
import styles from './VeloopLogo.module.css';

export const VeloopLogo = ({ size = 'normal', showSubtitle = true, light = false }) => {
  return (
    <div className={`${styles.logoContainer} ${styles[size]} ${light ? styles.lightMode : ''}`}>
      {/* 3D Golden Monogram Emblem */}
      <div className={styles.emblemBadge}>
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.emblemSvg}
        >
          <defs>
            {/* 24K Gold Gradient */}
            <linearGradient id="veloopGoldBase" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFBEB" />
              <stop offset="20%" stopColor="#FDE68A" />
              <stop offset="55%" stopColor="#F59E0B" />
              <stop offset="85%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>

            {/* Inner Plate */}
            <linearGradient id="veloopInnerPlate" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1E1B4B" />
              <stop offset="100%" stopColor="#0B091E" />
            </linearGradient>

            {/* Monogram V Bevel */}
            <linearGradient id="vBevel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="35%" stopColor="#FDE68A" />
              <stop offset="70%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>

            <filter id="veloopGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Rounded Chamfer Base Plate */}
          <rect x="2" y="2" width="40" height="40" rx="10" fill="url(#veloopGoldBase)" filter="url(#veloopGlow)" />
          {/* Inner Recessed Plate */}
          <rect x="4.5" y="4.5" width="35" height="35" rx="8" fill="url(#veloopInnerPlate)" stroke="#78350F" strokeWidth="1" />
          {/* Inset Gold Stitching */}
          <rect x="6.5" y="6.5" width="31" height="31" rx="6" stroke="#FDE68A" strokeWidth="0.8" fill="none" opacity="0.4" strokeDasharray="3 1.5" />

          {/* Bold Monogram V */}
          <path
            d="M 12 13 L 18 13 L 22 27 L 26 13 L 32 13 L 25 31 L 19 31 Z"
            fill="url(#vBevel)"
            stroke="#FFFBEB"
            strokeWidth="0.8"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className={styles.brandTextCol}>
        <span className={styles.brandMain}>VELOOP</span>
        {showSubtitle && <span className={styles.brandSub}>REWARDS</span>}
      </div>
    </div>
  );
};
