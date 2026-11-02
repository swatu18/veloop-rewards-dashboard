import React from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import { LevelBadge } from '../Badges/LevelBadge';
import styles from './LevelUpModal.module.css';

function CoinStackGraphic() {
  return (
    <svg viewBox="0 0 60 52" className={styles.coinStackSvg} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="lvlCoinFace" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FFFBEB" />
          <stop offset="40%" stopColor="#FBBF24" />
          <stop offset="85%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </radialGradient>
        <linearGradient id="lvlCoinSide" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#92400E" />
          <stop offset="30%" stopColor="#F59E0B" />
          <stop offset="70%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>
      </defs>
      {/* Coin 1 (Bottom) */}
      <path d="M 8 36 L 8 41 C 8 45 18 48 30 48 C 42 48 52 45 52 41 L 52 36 Z" fill="url(#lvlCoinSide)" />
      <ellipse cx="30" cy="36" rx="22" ry="7" fill="url(#lvlCoinFace)" stroke="#FFFBEB" strokeWidth="0.8" />
      {/* Coin 2 (Middle) */}
      <path d="M 8 28 L 8 33 C 8 37 18 40 30 40 C 42 40 52 37 52 33 L 52 28 Z" fill="url(#lvlCoinSide)" />
      <ellipse cx="30" cy="28" rx="22" ry="7" fill="url(#lvlCoinFace)" stroke="#FFFBEB" strokeWidth="0.8" />
      {/* Coin 3 (Top) */}
      <path d="M 8 20 L 8 25 C 8 29 18 32 30 32 C 42 32 52 29 52 25 L 52 20 Z" fill="url(#lvlCoinSide)" />
      <ellipse cx="30" cy="20" rx="22" ry="7" fill="url(#lvlCoinFace)" stroke="#FFFBEB" strokeWidth="1" />
      <ellipse cx="30" cy="20" rx="16" ry="4.8" stroke="#FDE68A" strokeWidth="0.7" fill="none" opacity="0.7" />
      <text x="30" y="22.5" textAnchor="middle" fontSize="6.5" fontWeight="900" fill="#78350F" fontFamily="sans-serif">V</text>
      {/* Sparkle */}
      <polygon points="46,12 47.5,15 50.5,16.5 47.5,18 46,21 44.5,18 41.5,16.5 44.5,15" fill="#FFFBEB" filter="drop-shadow(0 0 3px #FBBF24)" />
    </svg>
  );
}

function GemClusterGraphic() {
  return (
    <svg viewBox="0 0 60 52" className={styles.gemClusterSvg} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="purpleGemAura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C084FC" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#7E22CE" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="gemFacet1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAF5FF" />
          <stop offset="40%" stopColor="#D8B4FE" />
          <stop offset="100%" stopColor="#9333EA" />
        </linearGradient>
        <linearGradient id="gemFacet2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E9D5FF" />
          <stop offset="50%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#6B21A8" />
        </linearGradient>
        <linearGradient id="gemFacet3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#581C87" />
          <stop offset="50%" stopColor="#7E22CE" />
          <stop offset="100%" stopColor="#C084FC" />
        </linearGradient>
      </defs>
      <circle cx="30" cy="28" r="22" fill="url(#purpleGemAura)" filter="blur(6px)" />
      {/* Central Large Diamond Crystal */}
      <polygon points="30,8 44,22 30,46 16,22" fill="url(#gemFacet2)" />
      <polygon points="30,8 44,22 30,26" fill="url(#gemFacet1)" opacity="0.95" />
      <polygon points="30,8 16,22 30,26" fill="#F3E8FF" opacity="0.85" />
      <polygon points="16,22 30,46 30,26" fill="url(#gemFacet3)" />
      <polygon points="44,22 30,46 30,26" fill="url(#gemFacet2)" opacity="0.75" />
      {/* Side small crystal left */}
      <polygon points="12,24 20,20 18,38 8,36" fill="url(#gemFacet3)" />
      <polygon points="12,24 20,20 15,29" fill="url(#gemFacet1)" />
      {/* Side small crystal right */}
      <polygon points="48,24 40,20 42,38 52,36" fill="url(#gemFacet2)" />
      <polygon points="48,24 40,20 45,29" fill="url(#gemFacet1)" />
      {/* Sparkle */}
      <polygon points="18,10 19.5,13 22.5,14.5 19.5,16 18,19 16.5,16 13.5,14.5 16.5,13" fill="#FAF5FF" filter="drop-shadow(0 0 3px #C084FC)" />
    </svg>
  );
}

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
          {/* Card 1: 500 VEs Tokens with 3D Coin Stack Graphic */}
          <div className={styles.rewardCard}>
            <div className={styles.coinStackGraphic}>
              <CoinStackGraphic />
            </div>
            <div className={styles.rewardInfo}>
              <span className={styles.rewardVal}>+{levelUpData.veReward} VEs</span>
              <span className={styles.rewardLabel}>Tokens Credited</span>
            </div>
          </div>

          {/* Card 2: 25 Gems with 3D Gem Cluster Graphic */}
          <div className={`${styles.rewardCard} ${styles.gemCard}`}>
            <div className={styles.gemGraphic}>
              <GemClusterGraphic />
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
