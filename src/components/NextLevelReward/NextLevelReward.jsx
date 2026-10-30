import React, { useState } from 'react';
import { Lock, Gift, Info, ArrowRight, Sparkles } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import styles from './NextLevelReward.module.css';

/* ─── Premium 3D Gaming Vault Chest with Overflowing Coins & Gems (Screen 1) ─ */
function PremiumTreasureChest() {
  return (
    <div className={styles.chestGraphic}>
      <svg
        viewBox="0 0 170 145"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.chestSvg}
      >
        <defs>
          {/* Radial aura glow */}
          <radialGradient id="chestAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#D97706" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
          </radialGradient>

          {/* Gold metallic gradients */}
          <linearGradient id="goldLidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFBEB" />
            <stop offset="25%" stopColor="#FDE68A" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="90%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          <linearGradient id="goldRimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#92400E" />
            <stop offset="20%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#FFFBEB" />
            <stop offset="80%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          {/* Dark obsidian wood body */}
          <linearGradient id="chestBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#281A38" />
            <stop offset="40%" stopColor="#1B1226" />
            <stop offset="100%" stopColor="#0F0916" />
          </linearGradient>

          <linearGradient id="chestLidWood" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B2652" />
            <stop offset="60%" stopColor="#241634" />
            <stop offset="100%" stopColor="#150D20" />
          </linearGradient>

          {/* Cyan crystal gem glow */}
          <radialGradient id="gemGlow" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#E0F2FE" />
            <stop offset="30%" stopColor="#38BDF8" />
            <stop offset="80%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0369A1" />
          </radialGradient>

          {/* Coin gold gradient */}
          <radialGradient id="coinGrad" cx="35%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#FFFBEB" />
            <stop offset="40%" stopColor="#FBBF24" />
            <stop offset="85%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#78350F" />
          </radialGradient>

          {/* Filter for glow */}
          <filter id="goldGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="gemBloom" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* ── Background Aura Glow ── */}
        <ellipse cx="85" cy="78" rx="70" ry="54" fill="url(#chestAura)" />

        {/* ── Floating Light Beams ── */}
        <polygon points="85,72 50,15 65,15" fill="#FDE68A" opacity="0.14" />
        <polygon points="85,72 80,10 93,10" fill="#FDE68A" opacity="0.2" />
        <polygon points="85,72 105,16 118,18" fill="#FDE68A" opacity="0.15" />

        {/* ── Dais / Shadow Base ── */}
        <ellipse cx="85" cy="125" rx="60" ry="12" fill="#000000" opacity="0.65" filter="blur(4px)" />
        <ellipse cx="85" cy="122" rx="46" ry="7" fill="url(#goldRimGrad)" opacity="0.4" />

        {/* ── CHEST BASE / BODY ── */}
        <rect x="31" y="68" width="108" height="48" rx="8" fill="url(#chestBodyGrad)" />
        <rect x="33" y="70" width="104" height="44" rx="6" stroke="#4C1D95" strokeWidth="1" fill="none" opacity="0.4" />

        {/* Golden corner brackets - bottom left */}
        <path d="M31 100 L31 112 Q31 116 35 116 L51 116 L51 108 L39 108 L39 100 Z" fill="url(#goldLidGrad)" />
        <circle cx="35" cy="112" r="1.5" fill="#FFFBEB" />

        {/* Golden corner brackets - bottom right */}
        <path d="M139 100 L139 112 Q139 116 135 116 L119 116 L119 108 L131 108 L131 100 Z" fill="url(#goldLidGrad)" />
        <circle cx="135" cy="112" r="1.5" fill="#FFFBEB" />

        {/* Vertical Gold Straps on Body */}
        <rect x="53" y="68" width="11" height="48" fill="url(#goldRimGrad)" />
        <rect x="106" y="68" width="11" height="48" fill="url(#goldRimGrad)" />

        {/* Strap Rivets / Studs */}
        {[74, 90, 106].map((y, i) => (
          <g key={i}>
            <circle cx="58.5" cy={y} r="1.6" fill="#FFFBEB" />
            <circle cx="58.5" cy={y} r="2.2" stroke="#78350F" strokeWidth="0.5" fill="none" />
            <circle cx="111.5" cy={y} r="1.6" fill="#FFFBEB" />
            <circle cx="111.5" cy={y} r="2.2" stroke="#78350F" strokeWidth="0.5" fill="none" />
          </g>
        ))}

        {/* Bottom Gold Trim Bar */}
        <rect x="30" y="112" width="110" height="5" rx="2" fill="url(#goldRimGrad)" />

        {/* ── CHEST LID (Curved 3D Arch) ── */}
        <path
          d="M29 68 C29 43, 55 30, 85 30 C115 30, 141 43, 141 68 Z"
          fill="url(#chestLidWood)"
        />
        <path
          d="M31 66 C32 45, 56 33, 85 33 C114 33, 138 45, 139 66 Z"
          stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none"
        />

        {/* Lid Gold Edge Rim */}
        <path
          d="M28 68 C28 42, 54 29, 85 29 C116 29, 142 42, 142 68 L139 70 C139 45, 114 32, 85 32 C56 32, 31 45, 31 70 Z"
          fill="url(#goldRimGrad)"
        />

        {/* Lid Vertical Straps */}
        <path
          d="M53 67 C53 48, 55 37, 57 31 L67 31 C65 37, 64 48, 64 67 Z"
          fill="url(#goldRimGrad)"
        />
        <path
          d="M106 67 C106 48, 105 37, 103 31 L113 31 C115 37, 117 48, 117 67 Z"
          fill="url(#goldRimGrad)"
        />

        {/* Lid Studs on Straps */}
        <circle cx="59.5" cy="44" r="1.6" fill="#FFFBEB" />
        <circle cx="58.5" cy="56" r="1.6" fill="#FFFBEB" />
        <circle cx="110.5" cy="44" r="1.6" fill="#FFFBEB" />
        <circle cx="111.5" cy="56" r="1.6" fill="#FFFBEB" />

        {/* Lid Horizontal Lip/Sill */}
        <rect x="26" y="65" width="118" height="6" rx="2.5" fill="url(#goldRimGrad)" filter="url(#goldGlowFilter)" />
        <rect x="28" y="66" width="114" height="2" fill="#FFFBEB" opacity="0.65" />

        {/* ── CHEST LOCK CLASP (Screen 1 & 5) ── */}
        <rect x="75" y="63" width="20" height="26" rx="4" fill="#000" opacity="0.4" />
        <rect x="76" y="62" width="18" height="25" rx="3" fill="url(#goldLidGrad)" filter="url(#goldGlowFilter)" />
        <rect x="78" y="64" width="14" height="21" rx="2" fill="#2A1605" />

        {/* Glowing Cyan Diamond Gem in Lock */}
        <polygon
          points="85,67 90,71 90,77 85,81 80,77 80,71"
          fill="url(#gemGlow)"
          filter="url(#gemBloom)"
        />
        <polygon points="85,69 88,72 88,76 85,79 82,76 82,72" fill="#E0F2FE" opacity="0.75" />
        <circle cx="85" cy="83" r="1.2" fill="#FDE68A" />

        {/* ── OVERFLOWING GOLD COINS & BLUE GEMS (Screen 1 signature) ── */}
        {/* Left Side Overflow Coins */}
        <ellipse cx="24" cy="118" rx="7" ry="4" fill="url(#coinGrad)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))" />
        <ellipse cx="24" cy="117" rx="5" ry="2.8" stroke="#FFFBEB" strokeWidth="0.8" fill="none" opacity="0.6" />
        
        <ellipse cx="18" cy="122" rx="7" ry="4" fill="url(#coinGrad)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))" />
        <ellipse cx="18" cy="121" rx="5" ry="2.8" stroke="#FFFBEB" strokeWidth="0.8" fill="none" opacity="0.6" />

        <ellipse cx="32" cy="121" rx="6.5" ry="3.8" fill="url(#coinGrad)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))" />

        {/* Right Side Overflow Coins */}
        <ellipse cx="144" cy="118" rx="7" ry="4" fill="url(#coinGrad)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))" />
        <ellipse cx="144" cy="117" rx="5" ry="2.8" stroke="#FFFBEB" strokeWidth="0.8" fill="none" opacity="0.6" />

        <ellipse cx="152" cy="122" rx="7" ry="4" fill="url(#coinGrad)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))" />
        <ellipse cx="152" cy="121" rx="5" ry="2.8" stroke="#FFFBEB" strokeWidth="0.8" fill="none" opacity="0.6" />

        <ellipse cx="138" cy="122" rx="6.5" ry="3.8" fill="url(#coinGrad)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.5))" />

        {/* Blue Crystals on Dais */}
        <polygon points="26,112 30,105 34,112 30,118" fill="url(#gemGlow)" filter="url(#gemBloom)" />
        <polygon points="142,112 146,105 150,112 146,118" fill="url(#gemGlow)" filter="url(#gemBloom)" />

        {/* ── Floating Magical Sparkles ── */}
        <g transform="translate(38, 22)" className={styles.sparkleOne}>
          <polygon points="0,-7 2,-2 7,0 2,2 0,7 -2,2 -7,0 -2,-2" fill="#FDE68A" filter="url(#goldGlowFilter)" />
          <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
        </g>
        <g transform="translate(132, 26)" className={styles.sparkleTwo}>
          <polygon points="0,-8 2,-2 8,0 2,2 0,8 -2,2 -8,0 -2,-2" fill="#67E8F9" filter="url(#gemBloom)" />
          <circle cx="0" cy="0" r="1.8" fill="#FFFFFF" />
        </g>
        <circle cx="32" cy="50" r="2.2" fill="#FDE68A" opacity="0.8" className={styles.floatingMote1} />
        <circle cx="138" cy="60" r="2.5" fill="#38BDF8" opacity="0.8" className={styles.floatingMote2} />
      </svg>
    </div>
  );
}

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
            {/* Title matching Screen 1 */}
            <h3 className={styles.cardTitle}>Level {formattedNextLevel} Rewards</h3>
            <p className={styles.subtitle}>Amazing rewards await you!</p>
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

        {/* Chest Illustration & Progress Bar (Screen 1) */}
        <div className={styles.visualRow}>
          {/* High-quality 3D Gaming Vault Chest with Overflowing Coins */}
          <div className={styles.chestContainer}>
            <div className={styles.chestRays}></div>
            <PremiumTreasureChest />
          </div>

          <div className={styles.ctaCol}>
            <div className={styles.progressPreview}>
              <div className={styles.previewLabels}>
                <span className={styles.previewLabelText}>
                  <Sparkles size={12} className={styles.sparkleIconInline} />
                  <span>Unlock Progress</span>
                </span>
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
                  <span className={styles.itemDesc}>Redeemable immediately for gift vouchers &amp; shop rewards</span>
                </div>
                <span className={styles.itemBadge}>500 VEs</span>
              </div>

              <div className={styles.rewardItem}>
                <span className={styles.itemEmoji}>💎</span>
                <div className={styles.itemInfo}>
                  <span className={styles.itemTitle}>25 Premium Gems</span>
                  <span className={styles.itemDesc}>Used for arcade entry tickets &amp; multiplier boosts</span>
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
