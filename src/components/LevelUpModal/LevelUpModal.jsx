import React, { useEffect } from 'react';
import { Sparkles, Check, ArrowRight, Shield, Award, Zap } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import { LevelBadge } from '../Badges/LevelBadge';
import styles from './LevelUpModal.module.css';

export const LevelUpModal = () => {
  const { 
    isLevelUpModalOpen, 
    levelUpData, 
    claimLevelUpRewards, 
    user 
  } = useDashboard();

  if (!isLevelUpModalOpen || !levelUpData) return null;

  return (
    <div className={styles.overlay}>
      {/* Background Starburst Rays */}
      <div className={styles.starburst}></div>

      <div className={styles.modalCard}>
        {/* Celebration Header */}
        <div className={styles.header}>
          <div className={styles.celebrateBadge}>
            <Sparkles size={14} className={styles.sparkleIcon} />
            <span>TIER ADVANCEMENT</span>
          </div>
          <h2 className={styles.title}>LEVEL UP!</h2>
          <p className={styles.sub}>You've reached a new echelon of rewards</p>
        </div>

        {/* Grand Golden Badge */}
        <div className={styles.badgeSection}>
          <LevelBadge level={levelUpData.level} size="large" showStars={true} />
        </div>

        {/* Unlocked Milestone Rewards Cards */}
        <div className={styles.rewardsGrid}>
          {/* Card 1: VEs */}
          <div className={styles.rewardCard}>
            <div className={styles.coinStackGraphic}>
              <span className={styles.largeEmoji}>🪙</span>
            </div>
            <div className={styles.rewardInfo}>
              <span className={styles.rewardVal}>+{levelUpData.veReward} VEs</span>
              <span className={styles.rewardLabel}>Tokens Credited</span>
            </div>
          </div>

          {/* Card 2: Gems */}
          <div className={`${styles.rewardCard} ${styles.gemCard}`}>
            <div className={styles.gemGraphic}>
              <span className={styles.largeEmoji}>💎</span>
            </div>
            <div className={styles.rewardInfo}>
              <span className={styles.rewardValGem}>+{levelUpData.gemReward} Gems</span>
              <span className={styles.rewardLabel}>Arcade Passes</span>
            </div>
          </div>
        </div>

        {/* Perks List matching Screen 5 */}
        <div className={styles.perksBox}>
          <span className={styles.perksHeading}>Unlocked Privileges:</span>
          <div className={styles.perksList}>
            <div className={styles.perkItem}>
              <div className={styles.checkIconWrap}>
                <Check size={14} />
              </div>
              <span>Higher daily XP limit (up to 2,000 XP/day)</span>
            </div>

            <div className={styles.perkItem}>
              <div className={styles.checkIconWrap}>
                <Check size={14} />
              </div>
              <span>Access to exclusive High Roller challenges</span>
            </div>

            <div className={styles.perkItem}>
              <div className={styles.checkIconWrap}>
                <Check size={14} />
              </div>
              <span>Better redemption rates across all reward partners</span>
            </div>
          </div>
        </div>

        {/* Claim Rewards Button */}
        <button 
          className={styles.claimBtn}
          onClick={claimLevelUpRewards}
        >
          <span>Claim Rewards</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};
