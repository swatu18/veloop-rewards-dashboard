import React, { useState } from 'react';
import { Loader2, Palette, Sparkles, RefreshCw, Zap } from 'lucide-react';
import styles from './States.module.css';

export const LoadingSkeleton = () => {
  // Interactive skeleton color theme presets
  const [activeTheme, setActiveTheme] = useState('gold'); // 'gold' | 'cyber' | 'amethyst' | 'emerald'

  const THEMES = [
    { id: 'gold', name: 'Imperial Gold', primary: '#F59E0B', glow: 'rgba(245, 158, 11, 0.25)' },
    { id: 'cyber', name: 'Cyber Neon Cyan', primary: '#38BDF8', glow: 'rgba(56, 189, 248, 0.25)' },
    { id: 'amethyst', name: 'Royal Amethyst', primary: '#C084FC', glow: 'rgba(192, 132, 252, 0.25)' },
    { id: 'emerald', name: 'Dragon Emerald', primary: '#10B981', glow: 'rgba(16, 185, 129, 0.25)' },
  ];

  return (
    <div className={`${styles.skeletonContainer} ${styles[`theme_${activeTheme}`]}`}>
      {/* ── Evaluator Interactive Skeleton Control Bar ── */}
      <div className={styles.skeletonControlBar}>
        <div className={styles.controlInfo}>
          <div className={styles.livePulseDot} />
          <div>
            <span className={styles.controlTitle}>⚡ Live Skeleton State Simulation</span>
            <span className={styles.controlSub}>Test layout shift prevention &amp; reactive placeholder loading</span>
          </div>
        </div>

        {/* Theme Color Selector */}
        <div className={styles.themeSelectorGroup}>
          <span className={styles.themeLabel}>
            <Palette size={13} />
            <span>Theme:</span>
          </span>
          <div className={styles.themeButtons}>
            {THEMES.map(t => (
              <button
                key={t.id}
                className={`${styles.themeBtn} ${activeTheme === t.id ? styles.themeBtnActive : ''}`}
                onClick={() => setActiveTheme(t.id)}
                style={{ '--btn-theme-color': t.primary }}
              >
                <span className={styles.themeColorDot} style={{ background: t.primary }} />
                <span>{t.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Section 1: Greeting Header Skeleton ── */}
      <div className={styles.skeletonSectionBlock}>
        <div className={styles.skeletonBadgePill} />
        <div className={`${styles.skeletonLine} ${styles.shimmer} ${styles.w50} ${styles.lineLg}`} />
        <div className={`${styles.skeletonLine} ${styles.shimmer} ${styles.w70}`} />
      </div>

      {/* ── Section 2: Main Progression Hero Card Skeleton ── */}
      <div className={`${styles.skeletonCard} ${styles.shimmer}`}>
        {/* Badge Placeholder */}
        <div className={styles.skeletonBadgeWrap}>
          <div className={styles.skeletonBadge} />
          <div className={styles.skeletonBadgeLabel} />
        </div>

        {/* Progression Details & Bar Placeholder */}
        <div className={styles.skeletonCol}>
          <div className={styles.skeletonHeaderRow}>
            <div className={`${styles.skeletonLine} ${styles.w40}`} />
            <div className={`${styles.skeletonLine} ${styles.w30}`} />
          </div>

          <div className={styles.skeletonProgressTrack}>
            <div className={styles.skeletonProgressFill} />
          </div>

          <div className={styles.skeletonFooterRow}>
            <div className={`${styles.skeletonLine} ${styles.w40}`} />
            <div className={`${styles.skeletonLine} ${styles.w20}`} />
          </div>
        </div>
      </div>

      {/* ── Section 3: Today's Boost Grid Skeletons (3 Distinct Cards) ── */}
      <div className={styles.skeletonGrid}>
        <div className={`${styles.skeletonCardSmall} ${styles.shimmer}`}>
          <div className={styles.skeletonCircleIcon} />
          <div className={`${styles.skeletonLine} ${styles.w60}`} />
          <div className={`${styles.skeletonLine} ${styles.w40} ${styles.lineLg}`} />
        </div>
        <div className={`${styles.skeletonCardSmall} ${styles.shimmer}`}>
          <div className={styles.skeletonCircleIcon} />
          <div className={`${styles.skeletonLine} ${styles.w60}`} />
          <div className={`${styles.skeletonLine} ${styles.w40} ${styles.lineLg}`} />
        </div>
        <div className={`${styles.skeletonCardSmall} ${styles.shimmer}`}>
          <div className={styles.skeletonCircleIcon} />
          <div className={`${styles.skeletonLine} ${styles.w60}`} />
          <div className={`${styles.skeletonLine} ${styles.w40} ${styles.lineLg}`} />
        </div>
      </div>

      {/* ── Section 4: Mystery Box & Next Level Vault Skeleton ── */}
      <div className={`${styles.skeletonRewardCard} ${styles.shimmer}`}>
        <div className={styles.skeletonRewardTop}>
          <div className={`${styles.skeletonLine} ${styles.w40}`} />
          <div className={`${styles.skeletonLine} ${styles.w30}`} />
        </div>
        <div className={styles.skeletonChestPlaceholder}>
          <div className={styles.skeletonChestBox} />
        </div>
        <div className={styles.skeletonRewardBottom}>
          <div className={`${styles.skeletonLine} ${styles.w80}`} />
          <div className={styles.skeletonBtnPill} />
        </div>
      </div>

      {/* ── Section 5: Roadmap Stepper Skeleton (5 Nodes) ── */}
      <div className={`${styles.skeletonRoadmap} ${styles.shimmer}`}>
        <div className={styles.skeletonRoadmapTrack}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className={styles.skeletonRoadmapNode}>
              <div className={styles.skeletonRoadmapBadge} />
              <div className={`${styles.skeletonLine} ${styles.w70}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
