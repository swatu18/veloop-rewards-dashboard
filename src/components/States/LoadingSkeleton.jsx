import React, { useState } from 'react';
import { Palette, ArrowLeft, RotateCcw, CheckCircle2, Sparkles, Zap, Shield, Trophy } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import styles from './States.module.css';

export const LoadingSkeleton = () => {
  const { setDemoState } = useDashboard();
  
  // Interactive skeleton color theme presets
  const [activeTheme, setActiveTheme] = useState('gold'); // 'gold' | 'cyber' | 'amethyst' | 'emerald'
  const [activeLayout, setActiveLayout] = useState('dashboard'); // 'dashboard' | 'game' | 'roadmap'

  const THEMES = [
    { id: 'gold', name: 'Imperial Gold', primary: '#F59E0B' },
    { id: 'cyber', name: 'Cyber Neon Cyan', primary: '#38BDF8' },
    { id: 'amethyst', name: 'Royal Amethyst', primary: '#C084FC' },
    { id: 'emerald', name: 'Dragon Emerald', primary: '#10B981' },
  ];

  const LAYOUTS = [
    { id: 'dashboard', name: 'Full Dashboard Skeleton' },
    { id: 'game', name: 'Mini-Game Arcade Skeleton' },
    { id: 'roadmap', name: 'Roadmap & Badges Skeleton' },
  ];

  return (
    <div className={`${styles.skeletonContainer} ${styles[`theme_${activeTheme}`]}`}>
      {/* ── Evaluator Return & Customization Bar ── */}
      <div className={styles.skeletonControlBar}>
        <div className={styles.controlLeftGroup}>
          <button 
            className={styles.backToNormalBtn}
            onClick={() => setDemoState('normal')}
            title="Return to Live Dashboard"
          >
            <ArrowLeft size={16} />
            <span>Return to Live Dashboard</span>
          </button>

          <div className={styles.liveIndicator}>
            <div className={styles.livePulseDot} />
            <span className={styles.liveIndicatorText}>Skeleton Mode Active</span>
          </div>
        </div>

        {/* Customization Controls: Layout & Color Themes */}
        <div className={styles.customizationRow}>
          {/* Layout Selector */}
          <div className={styles.controlPillGroup}>
            <span className={styles.groupLabel}>Skeleton Layout:</span>
            <div className={styles.pillButtons}>
              {LAYOUTS.map(l => (
                <button
                  key={l.id}
                  className={`${styles.pillBtn} ${activeLayout === l.id ? styles.pillBtnActive : ''}`}
                  onClick={() => setActiveLayout(l.id)}
                >
                  {l.name}
                </button>
              ))}
            </div>
          </div>

          {/* Color Theme Selector */}
          <div className={styles.controlPillGroup}>
            <span className={styles.groupLabel}>
              <Palette size={13} />
              <span>Theme:</span>
            </span>
            <div className={styles.pillButtons}>
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
      </div>

      {/* ── SKELETON LAYOUT 1: FULL DASHBOARD ── */}
      {activeLayout === 'dashboard' && (
        <div className={styles.layoutBody}>
          {/* Greeting Header */}
          <div className={styles.skeletonSectionBlock}>
            <div className={styles.skeletonBadgePill} />
            <div className={`${styles.skeletonLine} ${styles.shimmer} ${styles.w50} ${styles.lineLg}`} />
            <div className={`${styles.skeletonLine} ${styles.shimmer} ${styles.w70}`} />
          </div>

          {/* Main Progression Card */}
          <div className={`${styles.skeletonCard} ${styles.shimmer}`}>
            <div className={styles.skeletonBadgeWrap}>
              <div className={styles.skeletonBadge} />
              <div className={styles.skeletonBadgeLabel} />
            </div>

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

          {/* Today's Boost Grid */}
          <div className={styles.skeletonGrid}>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className={`${styles.skeletonCardSmall} ${styles.shimmer}`}>
                <div className={styles.skeletonCircleIcon} />
                <div className={`${styles.skeletonLine} ${styles.w60}`} />
                <div className={`${styles.skeletonLine} ${styles.w40} ${styles.lineLg}`} />
              </div>
            ))}
          </div>

          {/* Mystery Box & Next Level Vault */}
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

          {/* Roadmap Stepper */}
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
      )}

      {/* ── SKELETON LAYOUT 2: ARCADE MINI-GAME ── */}
      {activeLayout === 'game' && (
        <div className={styles.layoutBody}>
          <div className={`${styles.skeletonGameContainer} ${styles.shimmer}`}>
            <div className={styles.skeletonGameHeader}>
              <div className={`${styles.skeletonLine} ${styles.w30} ${styles.lineLg}`} />
              <div className={styles.skeletonScorePill} />
            </div>

            {/* Simulated Canvas Arena */}
            <div className={styles.skeletonCanvasArena}>
              <div className={styles.floatingOrbsPlaceholder}>
                <div className={styles.orbSkeleton} style={{ top: '20%', left: '30%' }} />
                <div className={styles.orbSkeleton} style={{ top: '40%', left: '60%' }} />
                <div className={styles.orbSkeleton} style={{ top: '65%', left: '45%' }} />
              </div>
              <div className={styles.basketSkeleton} />
            </div>

            <div className={styles.skeletonControls}>
              <div className={`${styles.skeletonLine} ${styles.w50}`} />
              <div className={styles.skeletonBtnPill} />
            </div>
          </div>
        </div>
      )}

      {/* ── SKELETON LAYOUT 3: ROADMAP & BADGES ── */}
      {activeLayout === 'roadmap' && (
        <div className={styles.layoutBody}>
          <div className={`${styles.skeletonRoadmapFull} ${styles.shimmer}`}>
            <div className={styles.skeletonHeaderRow}>
              <div className={`${styles.skeletonLine} ${styles.w40} ${styles.lineLg}`} />
              <div className={styles.skeletonBtnPill} />
            </div>

            <div className={styles.badgesGridSkeleton}>
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className={styles.badgeCardSkeleton}>
                  <div className={styles.badgeArtSkeleton} />
                  <div className={`${styles.skeletonLine} ${styles.w60}`} />
                  <div className={`${styles.skeletonLine} ${styles.w40}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
