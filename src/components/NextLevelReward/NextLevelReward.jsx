import React, { useState } from 'react';
import { Lock, Sparkles, Gift, Info, Check, ArrowRight } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import styles from './NextLevelReward.module.css';

export const NextLevelReward = () => {
  const { user, progressPercentage, setActiveInfoModal } = useDashboard();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextLevel = user.currentLevel + 1;
  const formattedNextLevel = nextLevel < 10 ? `0${nextLevel}` : `${nextLevel}`;

  return (
    <>
      <div className={styles.rewardCard}>
        {/* Glow ambient background */}
        <div className={styles.ambientGlow}></div>

        <div className={styles.cardHeader}>
          <div className={styles.titleArea}>
            <div className={styles.badgeRow}>
              <span className={styles.lockedBadge}>
                <Lock size={12} />
                <span>UNLOCKED AT LEVEL {formattedNextLevel}</span>
              </span>
              <button 
                className={styles.infoBtn}
                onClick={() => setActiveInfoModal('reward')}
                title="Reward Policy"
                aria-label="Reward Information"
              >
                <Info size={14} />
              </button>
            </div>
            <h3 className={styles.cardTitle}>Level {formattedNextLevel} Milestone Vault</h3>
            <p className={styles.subtitle}>Amazing rewards await you upon leveling up!</p>
          </div>

          <div className={styles.rewardChipsRow}>
            <div className={styles.rewardPill}>
              <span className={styles.pillIcon}>🪙</span>
              <span>+500 VEs</span>
            </div>
            <div className={`${styles.rewardPill} ${styles.gemPill}`}>
              <span className={styles.pillIcon}>💎</span>
              <span>+25 Gems</span>
            </div>
          </div>
        </div>

        {/* Chest Illustration & Progress Bar */}
        <div className={styles.visualRow}>
          {/* 3D Glowing Treasure Chest Graphic */}
          <div className={styles.chestContainer}>
            <div className={styles.chestRays}></div>
            <div className={styles.chestGraphic}>
              {/* SVG 3D Vault / Chest */}
              <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.chestSvg}>
                <defs>
                  <linearGradient id="chestBody" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4A3419" />
                    <stop offset="50%" stopColor="#312211" />
                    <stop offset="100%" stopColor="#1E1408" />
                  </linearGradient>
                  <linearGradient id="goldTrim" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FDE68A" />
                    <stop offset="50%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#B45309" />
                  </linearGradient>
                  <filter id="chestGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Chest Base */}
                <rect x="20" y="45" width="80" height="42" rx="8" fill="url(#chestBody)" stroke="url(#goldTrim)" strokeWidth="3" />
                
                {/* Horizontal & Vertical Gold Bands */}
                <rect x="18" y="58" width="84" height="6" fill="url(#goldTrim)" />
                <rect x="42" y="45" width="8" height="42" fill="url(#goldTrim)" />
                <rect x="70" y="45" width="8" height="42" fill="url(#goldTrim)" />
                
                {/* Chest Lid (Curved Arch) */}
                <path d="M 18 45 Q 60 18 102 45 Z" fill="url(#chestBody)" stroke="url(#goldTrim)" strokeWidth="3" />
                <path d="M 42 28 Q 60 21 78 28 L 78 45 L 42 45 Z" fill="url(#goldTrim)" opacity="0.6" />

                {/* Golden Keyhole Lock */}
                <circle cx="60" cy="61" r="7" fill="url(#goldTrim)" filter="url(#chestGlow)" />
                <circle cx="60" cy="61" r="3" fill="#161827" />
                <polygon points="58,63 62,63 61,68 59,68" fill="#161827" />

                {/* Floating sparkles */}
                <circle cx="25" cy="25" r="2" fill="#FDE68A" className="float-effect" />
                <circle cx="95" cy="28" r="3" fill="#FDE68A" className="float-effect" />
                <circle cx="60" cy="12" r="2.5" fill="#FFFFFF" className="float-effect" />
              </svg>
            </div>
          </div>

          <div className={styles.ctaCol}>
            <div className={styles.progressPreview}>
              <div className={styles.previewLabels}>
                <span>Unlock Progress</span>
                <span className={styles.previewPercent}>{progressPercentage}%</span>
              </div>
              <div className={styles.miniTrack}>
                <div 
                  className={styles.miniFill} 
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <span className={styles.miniHint}>
                Reach Level {formattedNextLevel} to automatically claim
              </span>
            </div>

            <button 
              className={styles.viewRewardsBtn}
              onClick={() => setIsModalOpen(true)}
            >
              <span>View Rewards</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Rewards Detail Modal */}
      {isModalOpen && (
        <div className={styles.modalBackdrop} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalIcon}>
                <Gift size={24} />
              </div>
              <div>
                <h4 className={styles.modalTitle}>Level {formattedNextLevel} Rewards Bundle</h4>
                <p className={styles.modalSub}>Unlocks automatically upon reaching Level {formattedNextLevel}</p>
              </div>
            </div>

            <div className={styles.modalList}>
              <div className={styles.rewardItem}>
                <span className={styles.itemEmoji}>🪙</span>
                <div className={styles.itemInfo}>
                  <span className={styles.itemTitle}>500 VEs Token Credit</span>
                  <span className={styles.itemDesc}>Redeemable immediately for gift vouchers & shop rewards</span>
                </div>
                <span className={styles.itemBadge}>500 VEs</span>
              </div>

              <div className={styles.rewardItem}>
                <span className={styles.itemEmoji}>💎</span>
                <div className={styles.itemInfo}>
                  <span className={styles.itemTitle}>25 Premium Gems</span>
                  <span className={styles.itemDesc}>Used for arcade entry tickets & multiplier boosts</span>
                </div>
                <span className={styles.itemBadge}>25 Gems</span>
              </div>

              <div className={styles.rewardItem}>
                <span className={styles.itemEmoji}>⚡</span>
                <div className={styles.itemInfo}>
                  <span className={styles.itemTitle}>1.5x XP Earning Multiplier</span>
                  <span className={styles.itemDesc}>Boosts all daily activities and mini-game score XP</span>
                </div>
                <span className={styles.itemBadge}>Perk</span>
              </div>
            </div>

            <button 
              className={styles.closeBtn}
              onClick={() => setIsModalOpen(false)}
            >
              Close Preview
            </button>
          </div>
        </div>
      )}
    </>
  );
};
