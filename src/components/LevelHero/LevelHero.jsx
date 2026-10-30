import React from 'react';
import { Sparkles, Info, ChevronRight, Zap } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import { useAuth } from '../../context/AuthContext';
import { LevelBadge } from '../Badges/LevelBadge';
import styles from './LevelHero.module.css';

export const LevelHero = () => {
  const { 
    user, 
    currentXP, 
    totalRequiredXP, 
    xpRemaining, 
    progressPercentage,
    setActiveInfoModal,
    setActiveScreen
  } = useDashboard();
  const { currentUser } = useAuth();

  const nextLevel = user.currentLevel + 1;
  const formattedNextLevel = nextLevel < 10 ? `0${nextLevel}` : `${nextLevel}`;
  const greetingName = currentUser?.name ? (currentUser.name.split(' ')[0] || currentUser.name) : user.greetingName;

  return (
    <section className={styles.heroSection}>
      {/* Top Greeting Message – Exactly matching Screen 1 */}
      <div className={styles.greetingHeader}>
        <div className={styles.greetingBadge}>
          <Sparkles size={13} className={styles.sparkleIcon} />
          <span>PROGRESSION HUB</span>
        </div>
        <h1 className={styles.heroTitle}>
          Good Morning, <span className={styles.goldText}>{greetingName}!</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Level up your journey and unlock epic rewards every day.
        </p>
      </div>

      {/* Main Glassmorphic Progression Card – Exactly matching Screen 1 */}
      <div className={styles.levelCard}>
        {/* Ambient background glow inside card */}
        <div className={styles.cardGlow}></div>

        <div className={styles.cardContent}>
          {/* Left: Gold Beveled Plaque Badge (Screen 1) */}
          <div className={styles.badgeCol}>
            <LevelBadge level={user.currentLevel} size="normal" animated={true} showStars={true} />
          </div>

          {/* Right: Progression Metrics & Bar (Screen 1) */}
          <div className={styles.metricsCol}>
            <div className={styles.metricsHeaderRow}>
              <div className={styles.levelTagGroup}>
                <span className={styles.currentLevelTag}>CURRENT LEVEL</span>
                <button 
                  className={styles.infoBtn}
                  onClick={() => setActiveInfoModal('level')}
                  title="How Levels Work"
                  aria-label="Level Information"
                >
                  <Info size={14} />
                </button>
              </div>

              {/* "6,420 XP to reach Level 06" callout matching Screen 1 */}
              <div className={styles.targetCallout}>
                <span className={styles.targetBigXP}>{currentXP.toLocaleString()} XP</span>
                <span className={styles.targetLevelSub}>to reach Level {formattedNextLevel}</span>
              </div>
            </div>

            {/* Glowing Animated Progress Bar */}
            <div className={styles.progressBarSection}>
              <div className={styles.progressTrack}>
                <div 
                  className={styles.progressFill}
                  style={{ width: `${progressPercentage}%` }}
                >
                  <div className={styles.progressGlowHead}></div>
                  <div className={styles.progressShimmer}></div>
                </div>
              </div>

              {/* Progress Labels: "6,420 / 8,000 XP" & Percentage */}
              <div className={styles.progressFootnote}>
                <span className={styles.xpFractionText}>
                  <strong>{currentXP.toLocaleString()}</strong> / {totalRequiredXP.toLocaleString()} XP
                </span>
                <span className={styles.percentageText}>{progressPercentage}%</span>
              </div>
            </div>

            {/* Quick Earn Action */}
            <div className={styles.quickEarnRow}>
              <span className={styles.xpRemainingText}>
                <strong>{xpRemaining.toLocaleString()} XP</strong> remaining
              </span>
              <button 
                className={styles.quickEarnLink}
                onClick={() => setActiveScreen('earn')}
              >
                <span>Earn More XP</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
