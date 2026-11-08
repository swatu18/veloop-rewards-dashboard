import React from 'react';
import { Sparkles, Info, ChevronRight, Zap, Gift, Flame, Trophy } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import { useAuth } from '../../context/AuthContext';
import { LevelBadge } from '../Badges/LevelBadge';
import { TIER_METADATA } from '../Badges/TierBadgeArt';
import styles from './LevelHero.module.css';

export const LevelHero = () => {
  const { 
    user, 
    currentXP, 
    totalRequiredXP, 
    xpRemaining, 
    progressPercentage,
    setActiveInfoModal,
    setActiveScreen,
    triggerLevelUp
  } = useDashboard();
  const { currentUser } = useAuth();

  const currentTierMeta = TIER_METADATA[user.currentLevel] || TIER_METADATA[5];
  const nextLevel = user.currentLevel + 1;
  const nextTierMeta = TIER_METADATA[nextLevel] || TIER_METADATA[6];
  const formattedNextLevel = nextLevel < 10 ? `0${nextLevel}` : `${nextLevel}`;

  return (
    <section className={styles.heroSection}>
      {/* Top Greeting Message */}
      <div className={styles.greetingHeader}>
        <div className={styles.greetingBadge}>
          <Sparkles size={13} className={styles.sparkleIcon} />
          <span>VELOOP PROGRESSION HUB • SEASON 01</span>
        </div>
        <h1 className={styles.heroTitle}>
          Good Morning, <span className={styles.goldText}>VELOOP!</span>
        </h1>
        <p className={styles.heroSubtitle}>
          {currentUser?.name 
            ? `Welcome back, ${currentUser.name}! Ascend prestige tiers, unlock mystery vaults, and earn daily rewards.` 
            : 'Ascend prestige tiers, unlock mystery vaults, and earn daily rewards.'}
        </p>
      </div>

      {/* Main AAA Gaming-Grade Progression Card */}
      <div className={styles.levelCard}>
        {/* Dynamic Multi-Color Ambient Backlight */}
        <div 
          className={styles.cardGlow}
          style={{ background: `radial-gradient(circle, ${currentTierMeta.glow} 0%, transparent 70%)` }}
        />
        <div className={styles.cardCornerDecoTopLeft} />
        <div className={styles.cardCornerDecoTopRight} />

        <div className={styles.cardContent}>
          {/* Left: 3D Metallic Badge Showcase */}
          <div className={styles.badgeCol}>
            <div className={styles.badgeWrap}>
              <LevelBadge 
                level={user.currentLevel} 
                size="large" 
                animated={true} 
                showStars={true} 
                showRarity={true} 
              />
            </div>
            <div 
              className={styles.tierNameTag}
              style={{
                borderColor: `${currentTierMeta.primary}66`,
                color: currentTierMeta.primary,
                boxShadow: `0 2px 10px ${currentTierMeta.glow}`
              }}
            >
              <span>{currentTierMeta.name.toUpperCase()}</span>
            </div>
          </div>

          {/* Right: Progression Metrics & High-Tech Energy Bar */}
          <div className={styles.metricsCol}>
            <div className={styles.metricsHeaderRow}>
              <div className={styles.levelTagGroup}>
                <span className={styles.currentLevelTag}>
                  ★ TIER {user.currentLevel} • {currentTierMeta.themeName.toUpperCase()}
                </span>
                <button 
                  className={styles.infoBtn}
                  onClick={() => setActiveInfoModal('level')}
                  title="How Levels Work"
                  aria-label="Level Information"
                >
                  <Info size={14} />
                </button>
              </div>

              {/* XP Target Callout */}
              <div className={styles.targetCallout}>
                <div className={styles.targetCalloutBadge}>
                  <Zap size={13} className={styles.targetZapIcon} />
                  <span className={styles.targetBigXP}>{xpRemaining.toLocaleString()} XP NEEDED</span>
                </div>
                <span className={styles.targetLevelSub}>to reach Level {formattedNextLevel} ({nextTierMeta.name})</span>
              </div>
            </div>

            {/* Glowing High-Tech Liquid Energy Bar */}
            <div className={styles.progressBarSection}>
              <div className={styles.progressTrack}>
                <div 
                  className={styles.progressFill}
                  style={{ 
                    width: `${progressPercentage}%`,
                    background: `linear-gradient(90deg, #F59E0B 0%, #FBBF24 50%, #38BDF8 100%)`
                  }}
                >
                  <div className={styles.progressGlowHead}></div>
                  <div className={styles.progressShimmer}></div>
                  <div className={styles.progressBubbleOne}></div>
                  <div className={styles.progressBubbleTwo}></div>
                </div>

                {/* Milestone diamond ticks */}
                <div className={styles.milestoneTick} style={{ left: '25%' }} title="25% Milestone">
                  <span className={styles.milestonePip} />
                </div>
                <div className={styles.milestoneTick} style={{ left: '50%' }} title="50% Milestone">
                  <span className={styles.milestonePip} />
                </div>
                <div className={styles.milestoneTick} style={{ left: '75%' }} title="75% Milestone">
                  <span className={styles.milestonePip} />
                </div>
              </div>

              {/* Progress Labels */}
              <div className={styles.progressFootnote}>
                <span className={styles.xpFractionText}>
                  <strong>{currentXP.toLocaleString()}</strong> / {totalRequiredXP.toLocaleString()} XP
                </span>
                <span className={styles.percentageText}>
                  <span className={styles.percentBadge}>{progressPercentage}% Complete</span>
                </span>
              </div>
            </div>

            {/* Gaming Action Bar with Quick Perks & Next Reward */}
            <div className={styles.quickEarnRow}>
              <div className={styles.perksBadgeGroup}>
                <div className={styles.nextRewardPreview}>
                  <Gift size={14} className={styles.giftIcon} />
                  <span>Next Vault: <strong>+500 VEs &amp; +25 Gems</strong></span>
                </div>
                <div className={styles.streakBadge}>
                  <Flame size={14} className={styles.streakIcon} />
                  <span>7-Day Streak Active (1.5x Multiplier)</span>
                </div>
              </div>

              <button 
                className={styles.quickEarnLink}
                onClick={() => setActiveScreen('earn')}
                title="Explore tasks to earn more XP"
              >
                <span>Earn More XP</span>
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
