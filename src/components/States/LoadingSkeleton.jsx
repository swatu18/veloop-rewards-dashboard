import React, { useState } from 'react';
import { 
  Palette, 
  ArrowLeft, 
  Sparkles, 
  Zap, 
  Trophy, 
  ShieldCheck, 
  RefreshCw, 
  Eye, 
  CheckCircle2, 
  HelpCircle,
  Coins,
  Flame,
  Award
} from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import styles from './States.module.css';

export const LoadingSkeleton = () => {
  const { setDemoState } = useDashboard();
  
  // Interactive skeleton color theme presets
  const [activeTheme, setActiveTheme] = useState('gold'); // 'gold' | 'cyber' | 'amethyst' | 'emerald'
  const [isSimulatingLoad, setIsSimulatingLoad] = useState(false);

  const THEMES = [
    { id: 'gold', name: 'Imperial Gold', primary: '#F59E0B' },
    { id: 'cyber', name: 'Cyber Neon Cyan', primary: '#38BDF8' },
    { id: 'amethyst', name: 'Royal Amethyst', primary: '#C084FC' },
    { id: 'emerald', name: 'Dragon Emerald', primary: '#10B981' },
  ];

  const handleSimulateInstantLoad = () => {
    setIsSimulatingLoad(true);
    setTimeout(() => {
      setDemoState('normal');
    }, 800);
  };

  const handleApplyTheme = () => {
    const selected = THEMES.find(t => t.id === activeTheme) || THEMES[0];
    document.documentElement.style.setProperty('--gold-300', selected.primary);
    document.documentElement.style.setProperty('--gold-400', selected.primary);
    document.documentElement.style.setProperty('--gold-500', selected.primary);
    document.documentElement.style.setProperty('--gold-glow', `0 0 24px ${selected.primary}80`);
    document.documentElement.style.setProperty('--border-gold', `${selected.primary}66`);
    localStorage.setItem('veloop_accent_theme', activeTheme);
    setDemoState('normal');
  };

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
            <span>← Return to Live Dashboard</span>
          </button>

          <button
            className={styles.simulateLoadBtn}
            onClick={handleSimulateInstantLoad}
            disabled={isSimulatingLoad}
          >
            <RefreshCw size={14} className={isSimulatingLoad ? styles.spinIcon : ''} />
            <span>{isSimulatingLoad ? 'Hydrating...' : 'Simulate Finished Loading ➔'}</span>
          </button>
        </div>

        {/* Color Theme Selector */}
        <div className={styles.themeSelectorWrap}>
          <span className={styles.themeLabel}>
            <Palette size={14} />
            <span>Theme Accent:</span>
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

          <button
            className={styles.applyThemeBtn}
            onClick={handleApplyTheme}
            title="Apply this theme accent to the entire game and return to dashboard"
          >
            <CheckCircle2 size={15} />
            <span>Apply Theme &amp; Done ✓</span>
          </button>
        </div>
      </div>

      {/* ── Educational Explainer Callout Card ── */}
      <div className={styles.explainerCard}>
        <div className={styles.explainerIconWrap}>
          <Sparkles size={20} className={styles.explainerIcon} />
        </div>
        <div>
          <h4 className={styles.explainerTitle}>Reactive Content-Aware Loading State</h4>
          <p className={styles.explainerText}>
            This placeholder skeleton mirrors the exact dimensions of your <strong>Level 05 Progression Hub</strong>. 
            It prevents Cumulative Layout Shift (CLS) while user balances, live tournament scores, and 3D mystery vaults are retrieved from the database.
          </p>
        </div>
      </div>

      {/* ── CARD 1: HERO PROGRESSION PLACEHOLDER (With visible text & labels) ── */}
      <div className={styles.heroSkeletonCard}>
        <div className={styles.cardHeaderIndicator}>
          <span className={styles.sectionTag}>PROGRESSION HUB • LOADING</span>
          <span className={styles.shimmerPill}>Shimmer Active</span>
        </div>

        <div className={styles.heroInnerContent}>
          {/* Badge Skeleton with Mock Medal */}
          <div className={styles.badgeSkeletonBlock}>
            <div className={`${styles.badgeShape} ${styles.shimmer}`}>
              <span className={styles.badgeLabelPlaceholder}>LVL 05</span>
            </div>
            <div className={`${styles.badgeNamePlaceholder} ${styles.shimmer}`} />
          </div>

          {/* Metrics & Animated Progress Bar */}
          <div className={styles.metricsSkeletonBlock}>
            <div className={styles.metricRow}>
              <div>
                <span className={styles.mockSmallLabel}>CURRENT TIER</span>
                <div className={`${styles.textSkeletonBar} ${styles.w140} ${styles.shimmer}`} />
              </div>
              <div className={styles.mockRightAlign}>
                <span className={styles.mockSmallLabel}>NEXT GOAL</span>
                <div className={`${styles.textSkeletonBar} ${styles.w90} ${styles.shimmer}`} />
              </div>
            </div>

            {/* Glowing Liquid Progress Track */}
            <div className={styles.progressTrackWrapper}>
              <div className={styles.progressTrackBar}>
                <div className={`${styles.progressTrackFill} ${styles.shimmer}`} style={{ width: '80%' }} />
              </div>
              <div className={styles.progressTrackMeta}>
                <span>6,420 / 8,000 XP</span>
                <span>80%</span>
              </div>
            </div>

            {/* Quick Preview Footer */}
            <div className={styles.heroSkeletonFooter}>
              <div className={`${styles.pillPlaceholder} ${styles.shimmer}`} />
              <div className={`${styles.pillPlaceholderSmall} ${styles.shimmer}`} />
            </div>
          </div>
        </div>
      </div>

      {/* ── CARD 2: TODAY'S BOOST METRICS (3 Distinct Cards) ── */}
      <div className={styles.sectionTitleRow}>
        <Zap size={16} className={styles.sectionZap} />
        <span className={styles.sectionHeading}>TODAY'S BOOST METRICS</span>
      </div>

      <div className={styles.boostGridSkeleton}>
        {/* Metric 1 */}
        <div className={`${styles.boostCardSkeleton} ${styles.shimmer}`}>
          <div className={styles.mockIconCircle}><Sparkles size={16} /></div>
          <span className={styles.metricTitleLabel}>XP Earned Today</span>
          <span className={styles.metricBigValue}>215 XP</span>
        </div>

        {/* Metric 2 */}
        <div className={`${styles.boostCardSkeleton} ${styles.shimmer}`}>
          <div className={styles.mockIconCircle}><CheckCircle2 size={16} /></div>
          <span className={styles.metricTitleLabel}>Daily Tasks Completed</span>
          <span className={styles.metricBigValue}>4 / 8 Done</span>
        </div>

        {/* Metric 3 */}
        <div className={`${styles.boostCardSkeleton} ${styles.shimmer}`}>
          <div className={styles.mockIconCircle}><Flame size={16} /></div>
          <span className={styles.metricTitleLabel}>Active Day Streak</span>
          <span className={styles.metricBigValue}>7 Days 🔥</span>
        </div>
      </div>

      {/* ── CARD 3: 3D MYSTERY BOX VAULT PLACEHOLDER ── */}
      <div className={`${styles.mysteryBoxSkeletonCard} ${styles.shimmer}`}>
        <div className={styles.vaultTopRow}>
          <div>
            <span className={styles.vaultTag}>MILESTONE REWARDS VAULT</span>
            <h4 className={styles.vaultTitle}>Level 06 Master Sovereign Rewards</h4>
          </div>
          <div className={styles.vaultPill}>+500 VEs &amp; +25 Gems</div>
        </div>

        <div className={styles.chestPlaceholderArena}>
          <div className={styles.mockChestGraphic}>
            <span className={styles.chestEmoji}>🎁</span>
            <span className={styles.chestStatus}>Encrypted Level 06 Vault</span>
          </div>
        </div>

        <div className={styles.vaultFooterRow}>
          <span className={styles.unlockProgressLabel}>Unlock Progress: <strong>81%</strong></span>
          <div className={styles.mockUnlockBtn}>Unlocking at Level 06...</div>
        </div>
      </div>

      {/* ── CARD 4: PROGRESSION ROADMAP STEPPER PLACEHOLDER ── */}
      <div className={`${styles.roadmapSkeletonCard} ${styles.shimmer}`}>
        <div className={styles.roadmapHeader}>
          <Trophy size={16} className={styles.trophyIcon} />
          <span className={styles.roadmapHeading}>PROGRESSION ROADMAP &amp; TIERS (10 BADGES)</span>
        </div>

        <div className={styles.roadmapNodesRow}>
          {[
            { lvl: '01', name: 'Bronze', status: '✓ Unlocked' },
            { lvl: '02', name: 'Silver', status: '✓ Unlocked' },
            { lvl: '03', name: 'Gold', status: '✓ Unlocked' },
            { lvl: '04', name: 'Platinum', status: '✓ Unlocked' },
            { lvl: '05', name: 'Diamond', status: '★ Current' },
            { lvl: '06', name: 'Sovereign', status: '🔒 Next' },
          ].map(node => (
            <div key={node.lvl} className={styles.roadmapNodeBox}>
              <div className={styles.nodeBadgeCircle}>
                <span>{node.lvl}</span>
              </div>
              <span className={styles.nodeName}>{node.name}</span>
              <span className={styles.nodeStatus}>{node.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
