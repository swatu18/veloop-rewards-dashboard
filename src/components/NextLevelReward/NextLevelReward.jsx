import React, { useState } from 'react';
import { Lock, Gift, Info, ArrowRight, Sparkles } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import styles from './NextLevelReward.module.css';

/* ─── Premium 3D Gaming Vault Chest SVG ─────────────────────────────── */
function PremiumTreasureChest() {
  return (
    <div className={styles.chestGraphic}>
      <svg
        viewBox="0 0 160 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.chestSvg}
      >
        <defs>
          {/* Radial aura glow */}
          <radialGradient id="chestAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#D97706" stopOpacity="0.2" />
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
        <ellipse cx="80" cy="78" rx="65" ry="50" fill="url(#chestAura)" />

        {/* ── Floating Light Beams ── */}
        <polygon points="80,72 50,15 65,15" fill="#FDE68A" opacity="0.12" />
        <polygon points="80,72 75,10 88,10" fill="#FDE68A" opacity="0.18" />
        <polygon points="80,72 100,16 112,18" fill="#FDE68A" opacity="0.14" />

        {/* ── Dais / Shadow Base ── */}
        <ellipse cx="80" cy="122" rx="55" ry="12" fill="#000000" opacity="0.6" filter="blur(4px)" />
        <ellipse cx="80" cy="120" rx="42" ry="7" fill="url(#goldRimGrad)" opacity="0.35" />

        {/* ── CHEST BASE / BODY ── */}
        {/* Main box container with rounded corners */}
        <rect x="26" y="70" width="108" height="48" rx="8" fill="url(#chestBodyGrad)" />
        {/* Inner shadow/depth border */}
        <rect x="28" y="72" width="104" height="44" rx="6" stroke="#4C1D95" strokeWidth="1" fill="none" opacity="0.4" />

        {/* Golden corner brackets - bottom left */}
        <path d="M26 102 L26 114 Q26 118 30 118 L46 118 L46 110 L34 110 L34 102 Z" fill="url(#goldLidGrad)" />
        <circle cx="30" cy="114" r="1.5" fill="#FFFBEB" />

        {/* Golden corner brackets - bottom right */}
        <path d="M134 102 L134 114 Q134 118 130 118 L114 118 L114 110 L126 110 L126 102 Z" fill="url(#goldLidGrad)" />
        <circle cx="130" cy="114" r="1.5" fill="#FFFBEB" />

        {/* Vertical Gold Straps on Body */}
        <rect x="48" y="70" width="11" height="48" fill="url(#goldRimGrad)" />
        <rect x="101" y="70" width="11" height="48" fill="url(#goldRimGrad)" />

        {/* Strap Rivets / Studs */}
        {[76, 92, 108].map((y, i) => (
          <g key={i}>
            <circle cx="53.5" cy={y} r="1.6" fill="#FFFBEB" />
            <circle cx="53.5" cy={y} r="2.2" stroke="#78350F" strokeWidth="0.5" fill="none" />
            <circle cx="106.5" cy={y} r="1.6" fill="#FFFBEB" />
            <circle cx="106.5" cy={y} r="2.2" stroke="#78350F" strokeWidth="0.5" fill="none" />
          </g>
        ))}

        {/* Bottom Gold Trim Bar */}
        <rect x="25" y="114" width="110" height="5" rx="2" fill="url(#goldRimGrad)" />

        {/* ── CHEST LID (Curved 3D Arch) ── */}
        {/* Lid Wood Arch */}
        <path
          d="M24 70 C24 45, 50 32, 80 32 C110 32, 136 45, 136 70 Z"
          fill="url(#chestLidWood)"
        />
        {/* Lid Highlight Rim */}
        <path
          d="M26 68 C27 47, 51 35, 80 35 C109 35, 133 47, 134 68 Z"
          stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none"
        />

        {/* Lid Gold Edge Rim */}
        <path
          d="M23 70 C23 44, 49 31, 80 31 C111 31, 137 44, 137 70 L134 72 C134 47, 109 34, 80 34 C51 34, 26 47, 26 72 Z"
          fill="url(#goldRimGrad)"
        />

        {/* Lid Vertical Straps */}
        <path
          d="M48 69 C48 50, 50 39, 52 33 L62 33 C60 39, 59 50, 59 69 Z"
          fill="url(#goldRimGrad)"
        />
        <path
          d="M101 69 C101 50, 100 39, 98 33 L108 33 C110 39, 112 50, 112 69 Z"
          fill="url(#goldRimGrad)"
        />

        {/* Lid Studs on Straps */}
        <circle cx="54.5" cy="46" r="1.6" fill="#FFFBEB" />
        <circle cx="53.5" cy="58" r="1.6" fill="#FFFBEB" />
        <circle cx="105.5" cy="46" r="1.6" fill="#FFFBEB" />
        <circle cx="106.5" cy="58" r="1.6" fill="#FFFBEB" />

        {/* Lid Horizontal Lip/Sill (Separates Lid from Body) */}
        <rect x="21" y="67" width="118" height="6" rx="2.5" fill="url(#goldRimGrad)" filter="url(#goldGlowFilter)" />
        <rect x="23" y="68" width="114" height="2" fill="#FFFBEB" opacity="0.6" />

        {/* ── CHEST LOCK CLASP (Prominent 3D Escutcheon) ── */}
        {/* Lock Shadow */}
        <rect x="70" y="65" width="20" height="26" rx="4" fill="#000" opacity="0.4" />

        {/* Lock Gold Plate */}
        <rect x="71" y="64" width="18" height="25" rx="3" fill="url(#goldLidGrad)" filter="url(#goldGlowFilter)" />
        <rect x="73" y="66" width="14" height="21" rx="2" fill="#2A1605" />

        {/* Center Glowing Gemstone */}
        <polygon
          points="80,69 85,73 85,79 80,83 75,79 75,73"
          fill="url(#gemGlow)"
          filter="url(#gemBloom)"
        />
        <polygon
          points="80,71 83,74 83,78 80,81 77,78 77,74"
          fill="#E0F2FE"
          opacity="0.65"
        />

        {/* Keyhole under gem */}
        <circle cx="80" cy="85" r="1.2" fill="#FDE68A" />

        {/* ── Floating Magical Sparkles & Gems ── */}
        {/* Top left sparkle */}
        <g transform="translate(34, 24)" className={styles.sparkleOne}>
          <polygon points="0,-7 2,-2 7,0 2,2 0,7 -2,2 -7,0 -2,-2" fill="#FDE68A" filter="url(#goldGlowFilter)" />
          <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
        </g>

        {/* Top right sparkle */}
        <g transform="translate(126, 28)" className={styles.sparkleTwo}>
          <polygon points="0,-8 2,-2 8,0 2,2 0,8 -2,2 -8,0 -2,-2" fill="#67E8F9" filter="url(#gemBloom)" />
          <circle cx="0" cy="0" r="1.8" fill="#FFFFFF" />
        </g>

        {/* Center top micro sparkle */}
        <g transform="translate(80, 16)" className={styles.sparkleThree}>
          <polygon points="0,-5 1.5,-1.5 5,0 1.5,1.5 0,5 -1.5,1.5 -5,0 -1.5,-1.5" fill="#FFFBEB" />
        </g>

        {/* Floating golden orbs */}
        <circle cx="28" cy="52" r="2.2" fill="#FDE68A" opacity="0.8" className={styles.floatingMote1} />
        <circle cx="132" cy="62" r="2.5" fill="#38BDF8" opacity="0.8" className={styles.floatingMote2} />
        <circle cx="42" cy="18" r="1.5" fill="#FFFFFF" opacity="0.7" className={styles.floatingMote3} />
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
          {/* High-quality 3D Gaming Vault Chest */}
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
