import React, { useState } from 'react';
import { Info, Sparkles, TrendingUp, ChevronRight, Zap } from 'lucide-react';
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

  const [showTooltip, setShowTooltip] = useState(false);
  const nextLevel = user.currentLevel + 1;
  const formattedNextLevel = nextLevel < 10 ? `0${nextLevel}` : `${nextLevel}`;
  const greetingName = currentUser?.name ? (currentUser.name.split(' ')[0] || currentUser.name) : user.greetingName;

  return (
    <section className={styles.heroSection}>
      {/* Top Greeting Message */}
      <div className={styles.greetingHeader}>
        <div className={styles.greetingTextGroup}>
          <div className={styles.greetingBadge}>
            <Sparkles size={14} className={styles.sparkleIcon} />
            <span>PROGRESSION HUB</span>
          </div>
          <h1 className={styles.heroTitle}>
            Good Morning, <span className={styles.goldText}>{greetingName}!</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Level up your journey and unlock epic rewards every day.
          </p>
        </div>
      </div>

      {/* Main Glassmorphic Progression Card */}
      <div className={styles.levelCard}>
        {/* Ambient background glow inside card */}
        <div className={styles.cardGlow}></div>

        <div className={styles.cardContent}>
          {/* Left: Prominent Premium Tier Badge */}
          <div className={styles.badgeCol}>
            <LevelBadge level={user.currentLevel} size="large" animated={true} showStars={true} />
          </div>

          {/* Right: Progression Metrics & Bar */}
          <div className={styles.metricsCol}>
            <div className={styles.levelStatusRow}>
              <div className={styles.levelTitleGroup}>
                <span className={styles.currentLevelTag}>CURRENT LEVEL</span>
                <button 
                  className={styles.infoBtn}
                  onClick={() => setActiveInfoModal('level')}
                  title="How Levels Work"
                  aria-label="Level Information"
                >
                  <Info size={15} />
                </button>
              </div>

              <div className={styles.targetXPBadge}>
                <Zap size={14} className={styles.zapIcon} />
                <span>
                  <strong>{currentXP.toLocaleString()} XP</strong> to reach Level {formattedNextLevel}
                </span>
              </div>
            </div>

            {/* XP Progress Bar Row */}
            <div className={styles.progressBarSection}>
              <div className={styles.progressLabels}>
                <span className={styles.xpFraction}>
                  <strong>{currentXP.toLocaleString()}</strong> / {totalRequiredXP.toLocaleString()} XP
                </span>
                <span className={styles.percentageText}>{progressPercentage}%</span>
              </div>

              {/* Glowing Animated Progress Bar */}
              <div className={styles.progressTrack}>
                <div 
                  className={styles.progressFill}
                  style={{ width: `${progressPercentage}%` }}
                >
                  <div className={styles.progressGlowHead}></div>
                  <div className={styles.progressShimmer}></div>
                </div>
              </div>

              {/* Bottom Target XP Callout */}
              <div className={styles.progressFootnote}>
                <span className={styles.xpRemainingText}>
                  <strong>{xpRemaining.toLocaleString()} XP</strong> remaining to Level {formattedNextLevel}
                </span>
                <button 
                  className={styles.quickEarnLink}
                  onClick={() => setActiveScreen('earn')}
                >
                  <span>Earn XP Faster</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
