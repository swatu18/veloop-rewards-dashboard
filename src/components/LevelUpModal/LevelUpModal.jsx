import React from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import { LevelBadge } from '../Badges/LevelBadge';
import styles from './LevelUpModal.module.css';

export const LevelUpModal = () => {
  const { 
    isLevelUpModalOpen, 
    levelUpData, 
    claimLevelUpRewards, 
  } = useDashboard();

  if (!isLevelUpModalOpen || !levelUpData) return null;

  return (
    <div className={styles.overlay}>
      {/* Background Starburst Rays */}
      <div className={styles.starburst}></div>

      <div className={styles.modalCard}>
        {/* Celebration Header – Screen 5 */}
        <div className={styles.header}>
          <div className={styles.celebrateBadge}>
            <Sparkles size={14} className={styles.sparkleIcon} />
            <span>TIER ADVANCEMENT</span>
          </div>
          <h2 className={styles.title}>LEVEL UP!</h2>
          <p className={styles.sub}>You've reached</p>
        </div>

        {/* Grand Laurel Crest Badge – Exactly matching Screen 5 */}
        <div className={styles.badgeSection}>
          <LevelBadge 
            level={levelUpData.level} 
            size="large" 
            withLaurel={true} 
            animated={true} 
            showStars={true} 
          />
        </div>

        {/* Unlocked Milestone Rewards Cards – Screen 5 */}
        <div className={styles.rewardsGrid}>
          {/* Card 1: 500 VEs Tokens */}
          <div className={styles.rewardCard}>
            <div className={styles.coinStackGraphic}>
              <span className={styles.largeEmoji}>🪙</span>
            </div>
            <div className={styles.rewardInfo}>
              <span className={styles.rewardVal}>+{levelUpData.veReward} VEs</span>
              <span className={styles.rewardLabel}>Tokens Credited</span>
            </div>
          </div>

          {/* Card 2: 25 Gems */}
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
          <span className={styles.perksHeading}>Tier Privileges:</span>
          <div className={styles.perksList}>
            <div className={styles.perkItem}>
              <div className={styles.checkIconWrap}>
                <Check size={13} />
              </div>
              <span>Higher daily XP limit (up to 2,000 XP/day)</span>
            </div>

            <div className={styles.perkItem}>
              <div className={styles.checkIconWrap}>
                <Check size={13} />
              </div>
              <span>Access to exclusive High Roller challenges</span>
            </div>

            <div className={styles.perkItem}>
              <div className={styles.checkIconWrap}>
                <Check size={13} />
              </div>
              <span>Better reward conversion rates & priority redemption</span>
            </div>
          </div>
        </div>

        {/* Claim Rewards Button – Screen 5 */}
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
