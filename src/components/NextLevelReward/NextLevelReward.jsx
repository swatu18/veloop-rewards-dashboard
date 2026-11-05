import React, { useState, useEffect, useRef } from 'react';
import { Lock, Sparkles, ArrowRight, X, RotateCcw, Check, Zap, Info } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import styles from './NextLevelReward.module.css';

/* ─── Web Audio API Sound Synthesizer (Zero asset dependency, instant playback) ─── */
function playUnboxSound(type) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    if (type === 'rumble') {
      // Low suspense rumble
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(65, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 1.2);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 1.1);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.3);
    } else if (type === 'burst') {
      // Pop / burst sound
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(420, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.35);
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } else if (type === 'fanfare') {
      // Golden fanfare chord
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + idx * 0.08 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.8);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.8);
      });
    }
  } catch (e) {
    // Audio context may be restricted by browser policy before user interaction
  }
}

/* ─── 3D Treasure Box Graphic (Closed & Open States) ─────────────────────── */
export function TreasureBox3D({ isOpen = false, isShaking = false, size = 'normal' }) {
  return (
    <div
      className={[
        styles.boxWrapper,
        styles[size],
        isShaking ? styles.boxRattling : '',
        isOpen ? styles.boxOpened : '',
      ].filter(Boolean).join(' ')}
    >
      <svg
        viewBox="0 0 180 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.treasureSvg}
      >
        <defs>
          {/* Radial Aura Glow - subtle, non-excessive */}
          <radialGradient id="tbAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#D97706" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#78350F" stopOpacity="0" />
          </radialGradient>

          {/* 24K Gold Trim Gradients */}
          <linearGradient id="tbGoldLid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#FFFBEB" />
            <stop offset="50%" stopColor="#FDE68A" />
            <stop offset="75%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          <linearGradient id="tbGoldRim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#92400E" />
            <stop offset="20%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="80%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          {/* Royal Obsidian Mahogany Body */}
          <linearGradient id="tbBodyWood" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#312E81" />
            <stop offset="30%" stopColor="#1E1B4B" />
            <stop offset="70%" stopColor="#18182E" />
            <stop offset="100%" stopColor="#0B0B18" />
          </linearGradient>

          <linearGradient id="tbLidWood" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4338CA" />
            <stop offset="50%" stopColor="#2E2880" />
            <stop offset="100%" stopColor="#14113B" />
          </linearGradient>

          {/* Cyan Gemstone Core */}
          <radialGradient id="tbGem" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#67E8F9" />
            <stop offset="75%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#082F49" />
          </radialGradient>

          {/* Coin Gold Gradient */}
          <radialGradient id="tbCoin" cx="35%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#FFFBEB" />
            <stop offset="40%" stopColor="#FBBF24" />
            <stop offset="85%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#78350F" />
          </radialGradient>

          {/* Bloom Filters */}
          <filter id="tbGoldBloom" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Ambient Aura Background */}
        <ellipse cx="90" cy="80" rx="80" ry="60" fill="url(#tbAura)" />

        {/* Floating Volumetric Light Beams */}
        <g opacity={isOpen ? 0.8 : 0.2}>
          <polygon points="90,75 45,10 65,10" fill="#FDE68A" opacity="0.18" />
          <polygon points="90,75 82,4 98,4" fill="#FDE68A" opacity="0.25" />
          <polygon points="90,75 115,12 135,12" fill="#FDE68A" opacity="0.18" />
        </g>

        {/* Pedestal Cast Shadow */}
        <ellipse cx="90" cy="128" rx="65" ry="12" fill="#000000" opacity="0.7" filter="blur(4px)" />
        <ellipse cx="90" cy="125" rx="52" ry="7" fill="url(#tbGoldRim)" opacity="0.45" />

        {/* ── CHEST BASE / BODY ── */}
        <rect x="34" y="72" width="112" height="48" rx="8" fill="url(#tbBodyWood)" stroke="#1E1B4B" strokeWidth="1.5" />

        {/* Golden Corner Brackets */}
        <path d="M 34 102 L 34 116 Q 34 120 38 120 L 54 120 L 54 112 L 42 112 L 42 102 Z" fill="url(#tbGoldLid)" />
        <circle cx="38" cy="116" r="1.6" fill="#FFFBEB" />
        <path d="M 146 102 L 146 116 Q 146 120 142 120 L 126 120 L 126 112 L 138 112 L 138 102 Z" fill="url(#tbGoldLid)" />
        <circle cx="142" cy="116" r="1.6" fill="#FFFBEB" />

        {/* Vertical Gold Straps on Body */}
        <rect x="56" y="72" width="12" height="48" fill="url(#tbGoldRim)" />
        <rect x="112" y="72" width="12" height="48" fill="url(#tbGoldRim)" />
        {[78, 96, 112].map((y, i) => (
          <g key={i}>
            <circle cx="62" cy={y} r="1.8" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.5" />
            <circle cx="118" cy={y} r="1.8" fill="#FFFBEB" stroke="#78350F" strokeWidth="0.5" />
          </g>
        ))}

        {/* Bottom Gold Trim Bar */}
        <rect x="33" y="116" width="114" height="5" rx="2" fill="url(#tbGoldRim)" />

        {/* ── INSIDE TREASURE (When Open) ── */}
        {isOpen && (
          <g filter="url(#tbGoldBloom)">
            {/* Glowing Golden Interior Light */}
            <ellipse cx="90" cy="72" rx="46" ry="14" fill="#FDE68A" />
            <ellipse cx="90" cy="70" rx="38" ry="10" fill="#FFFFFF" />

            {/* Overflowing Coin Piles inside */}
            <ellipse cx="80" cy="68" rx="8" ry="4" fill="url(#tbCoin)" />
            <ellipse cx="96" cy="67" rx="8" ry="4" fill="url(#tbCoin)" />
            <ellipse cx="88" cy="65" rx="9" ry="4.5" fill="url(#tbCoin)" stroke="#FFFBEB" strokeWidth="0.8" />
            {/* Sparkling Cyan Crystals emerging */}
            <polygon points="70,62 76,52 82,62 76,70" fill="url(#tbGem)" />
            <polygon points="102,60 108,50 114,60 108,68" fill="url(#tbGem)" />
          </g>
        )}

        {/* ── CHEST LID ── */}
        {!isOpen ? (
          // Closed Arched Lid
          <g filter="url(#tbGoldBloom)">
            <path d="M 32 72 C 32 45, 60 32, 90 32 C 120 32, 148 45, 148 72 Z" fill="url(#tbLidWood)" />
            <path d="M 31 72 C 31 44, 59 31, 90 31 C 121 31, 149 44, 149 72 L 146 74 C 146 47, 119 34, 90 34 C 61 34, 34 47, 34 74 Z" fill="url(#tbGoldRim)" />

            {/* Vertical Lid Straps */}
            <path d="M 56 71 C 56 50, 58 38, 60 32 L 70 32 C 68 38, 67 50, 67 71 Z" fill="url(#tbGoldRim)" />
            <path d="M 112 71 C 112 50, 110 38, 108 32 L 118 32 C 120 38, 122 50, 122 71 Z" fill="url(#tbGoldRim)" />
            <circle cx="63" cy="48" r="1.8" fill="#FFFBEB" />
            <circle cx="115" cy="48" r="1.8" fill="#FFFBEB" />

            {/* Lid Bottom Beveled Lip */}
            <rect x="29" y="69" width="122" height="6.5" rx="2.5" fill="url(#tbGoldRim)" stroke="#FFFBEB" strokeWidth="0.5" />

            {/* Ornate Lock Clasp with Cyan Gemstone */}
            <rect x="79" y="66" width="22" height="26" rx="4" fill="url(#tbGoldLid)" stroke="#78350F" strokeWidth="1" />
            <rect x="82" y="69" width="16" height="20" rx="2" fill="#1E1B4B" />
            <polygon points="90,72 95,76 95,82 90,86 85,82 85,76" fill="url(#tbGem)" stroke="#FFFBEB" strokeWidth="0.8" />
            <circle cx="90" cy="88" r="1.4" fill="#FDE68A" />
          </g>
        ) : (
          // Swung Back Open Lid in 3D Perspective
          <g filter="url(#tbGoldBloom)">
            <path d="M 32 46 C 32 20, 60 8, 90 8 C 120 8, 148 20, 148 46 L 146 54 C 146 28, 118 16, 90 16 C 62 16, 34 28, 34 54 Z" fill="url(#tbGoldRim)" />
            <path d="M 34 46 C 34 22, 60 10, 90 10 C 120 10, 146 22, 146 46 Z" fill="url(#tbLidWood)" opacity="0.9" />
            <rect x="30" y="46" width="120" height="5" rx="2" fill="url(#tbGoldRim)" />
          </g>
        )}

        {/* ── OVERFLOWING COINS & GEMS ON DAIS (Screen 1 & 5) ── */}
        {/* Left Side Pile */}
        <ellipse cx="26" cy="120" rx="8" ry="4.5" fill="url(#tbCoin)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.6))" />
        <ellipse cx="26" cy="119" rx="5.5" ry="3" stroke="#FFFBEB" strokeWidth="0.8" fill="none" opacity="0.7" />
        <ellipse cx="20" cy="125" rx="8" ry="4.5" fill="url(#tbCoin)" />
        <ellipse cx="36" cy="124" rx="7.5" ry="4" fill="url(#tbCoin)" />
        <polygon points="28,114 33,107 38,114 33,120" fill="url(#tbGem)" />

        {/* Right Side Pile */}
        <ellipse cx="154" cy="120" rx="8" ry="4.5" fill="url(#tbCoin)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.6))" />
        <ellipse cx="154" cy="119" rx="5.5" ry="3" stroke="#FFFBEB" strokeWidth="0.8" fill="none" opacity="0.7" />
        <ellipse cx="160" cy="125" rx="8" ry="4.5" fill="url(#tbCoin)" />
        <ellipse cx="146" cy="124" rx="7.5" ry="4" fill="url(#tbCoin)" />
        <polygon points="152,114 157,107 162,114 157,120" fill="url(#tbGem)" />

        {/* Floating Twinkle Sparkles */}
        <g transform="translate(42, 26)" className={styles.sparkleFast}>
          <polygon points="0,-7 2,-2 7,0 2,2 0,7 -2,2 -7,0 -2,-2" fill="#FFFBEB" filter="drop-shadow(0 0 4px #F59E0B)" />
        </g>
        <g transform="translate(138, 28)" className={styles.sparkleSlow}>
          <polygon points="0,-8 2,-2 8,0 2,2 0,8 -2,2 -8,0 -2,-2" fill="#67E8F9" filter="drop-shadow(0 0 5px #0284C7)" />
        </g>
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   NextLevelReward  –  Complete 3D Mystery Box & Milestone Vault Experience
═══════════════════════════════════════════════════════════════════════════ */
export const NextLevelReward = () => {
  const { user, progressPercentage, setActiveInfoModal, addNotification, addVEs, addGems, triggerConfetti } = useDashboard();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Unboxing Animation States: 'idle' | 'suspense' | 'burst' | 'revealed'
  const [unboxState, setUnboxState] = useState('idle');
  const [activeTab, setActiveTab] = useState('cinematic'); // 'cinematic' | 'breakdown'
  const [claimedVEs, setClaimedVEs] = useState(false);
  const [claimedGems, setClaimedGems] = useState(false);
  const [claimedPerk, setClaimedPerk] = useState(false);
  const [claimed, setClaimed] = useState(false);

  const nextLevel = user.currentLevel + 1;
  const formattedNextLevel = nextLevel < 10 ? `0${nextLevel}` : `${nextLevel}`;

  // Start the cinematic unboxing sequence
  const startUnboxing = () => {
    setUnboxState('suspense');
    setClaimed(false);
    setClaimedVEs(false);
    setClaimedGems(false);
    setClaimedPerk(false);
    playUnboxSound('rumble');

    // After 1.3s suspense rumble -> burst open!
    setTimeout(() => {
      setUnboxState('burst');
      playUnboxSound('burst');

      // After 0.4s burst -> reveal rewards with fanfare!
      setTimeout(() => {
        setUnboxState('revealed');
        playUnboxSound('fanfare');
        triggerConfetti();
      }, 400);
    }, 1300);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    // Automatically trigger suspense unboxing on first open
    if (unboxState === 'idle') {
      startUnboxing();
    }
  };

  const handleCollectVEs = (e) => {
    e?.stopPropagation();
    if (claimedVEs) return;
    setClaimedVEs(true);
    addVEs(500, 'Level 06 Milestone: +500 VEs');
    triggerConfetti();
    playUnboxSound('fanfare');
  };

  const handleCollectGems = (e) => {
    e?.stopPropagation();
    if (claimedGems) return;
    setClaimedGems(true);
    addGems(25, 'Level 06 Milestone: +25 Gems');
    triggerConfetti();
    playUnboxSound('fanfare');
  };

  const handleCollectPerk = (e) => {
    e?.stopPropagation();
    if (claimedPerk) return;
    setClaimedPerk(true);
    triggerConfetti();
  };

  const handleClaim = () => {
    if (!claimedVEs) addVEs(500, 'Level 06 Milestone: +500 VEs');
    if (!claimedGems) addGems(25, 'Level 06 Milestone: +25 Gems');
    setClaimedVEs(true);
    setClaimedGems(true);
    setClaimedPerk(true);
    setClaimed(true);
    playUnboxSound('fanfare');
    triggerConfetti();
    if (addNotification) {
      addNotification({
        type: 'success',
        title: 'Level 06 Milestone Claimed!',
        message: '+500 VEs Tokens and +25 Gems credited to your rewards wallet.',
      });
    }
  };

  return (
    <>
      {/* ── Main Dashboard Mystery Box Card ── */}
      <div className={styles.rewardCard}>
        <div className={styles.ambientGlow} />

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
            <h3 className={styles.cardTitle}>Level {formattedNextLevel} Mystery Vault</h3>
            <p className={styles.subtitle}>Tap the 3D treasure chest to inspect unboxing rewards!</p>
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

        {/* 3D Visual Chest with Interactive Unboxing Trigger */}
        <div className={styles.visualRow}>
          <div
            className={styles.chestContainer}
            onClick={handleOpenModal}
            title="Click to Open 3D Mystery Box!"
            role="button"
            tabIndex={0}
          >
            <div className={styles.chestRays} />
            <TreasureBox3D isOpen={false} size="normal" />
            <div className={styles.tapToOpenPill}>
              <Sparkles size={11} />
              <span>TAP TO UNBOX</span>
            </div>
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
                >
                  <div className={styles.miniFillGlow} />
                </div>
              </div>
              <span className={styles.miniHint}>
                Reach Level {formattedNextLevel} to automatically claim full bundle
              </span>
            </div>

            <button
              className={styles.viewRewardsBtn}
              onClick={handleOpenModal}
            >
              <Sparkles size={16} />
              <span>Open Mystery Box</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Cinematic 3D Mystery Box Opening Modal ── */}
      {isModalOpen && (
        <div className={styles.modalBackdrop} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            {/* Modal Top Nav */}
            <div className={styles.modalTopNav}>
              <div className={styles.modalNavTabs}>
                <button
                  className={`${styles.navTab} ${activeTab === 'cinematic' ? styles.navTabActive : ''}`}
                  onClick={() => setActiveTab('cinematic')}
                >
                  <Sparkles size={13} />
                  <span>3D Unboxing Experience</span>
                </button>
                <button
                  className={`${styles.navTab} ${activeTab === 'breakdown' ? styles.navTabActive : ''}`}
                  onClick={() => setActiveTab('breakdown')}
                >
                  <Info size={13} />
                  <span>Vault Details</span>
                </button>
              </div>

              <button
                className={styles.modalCloseBtn}
                onClick={() => setIsModalOpen(false)}
                aria-label="Close Modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* TAB 1: CINEMATIC 3D UNBOXING */}
            {activeTab === 'cinematic' && (
              <div className={styles.cinematicStage}>
                {/* Background Rotating Light Sunburst */}
                <div className={`${styles.stageSunburst} ${unboxState === 'suspense' ? styles.sunburstFast : ''}`} />

                {/* Status Callout Above Chest */}
                <div className={styles.statusCallout}>
                  {unboxState === 'idle' && (
                    <span className={styles.calloutText}>Ready to Unseal Level {formattedNextLevel} Treasure Box!</span>
                  )}
                  {unboxState === 'suspense' && (
                    <div className={styles.suspenseIndicator}>
                      <span className={styles.suspenseText}>⚡ BREAKING ENCHANTED SEAL...</span>
                      <div className={styles.suspenseBar}>
                        <div className={styles.suspenseBarFill} />
                      </div>
                    </div>
                  )}
                  {(unboxState === 'burst' || unboxState === 'revealed') && (
                    <div className={styles.victoryCallout}>
                      <span className={styles.victoryTitle}>🎉 VAULT UNSEALED!</span>
                      <span className={styles.victorySub}>Congratulations! You revealed Level {formattedNextLevel} Rewards</span>
                    </div>
                  )}
                </div>

                {/* 3D Box Central Graphic */}
                <div className={styles.stageBoxContainer}>
                  <TreasureBox3D
                    isOpen={unboxState === 'burst' || unboxState === 'revealed'}
                    isShaking={unboxState === 'suspense'}
                    size="large"
                  />
                </div>

                {/* REWARD REVEAL CARDS (Burst Outwards upon Opening) */}
                {(unboxState === 'burst' || unboxState === 'revealed') && (
                  <div className={styles.revealedRewardsGrid}>
                    {/* Reward 1: 500 VEs */}
                    <div className={`${styles.revealCard} ${styles.cardOne}`}>
                      <div className={styles.revealTagGold}>LEGENDARY DROP</div>
                      <div className={styles.revealIconWrapGold}>
                        <span className={styles.revealEmoji}>🪙</span>
                      </div>
                      <span className={styles.revealAmountGold}>+500 VEs</span>
                      <span className={styles.revealDesc}>Tokens for Shopping &amp; Vouchers</span>

                      <button 
                        className={claimedVEs ? styles.miniClaimedBtn : styles.miniClaimBtn}
                        onClick={handleCollectVEs}
                        disabled={claimedVEs}
                      >
                        {claimedVEs ? '✓ Collected' : 'Collect +500 VEs'}
                      </button>
                    </div>

                    {/* Reward 2: 25 Gems */}
                    <div className={`${styles.revealCard} ${styles.cardTwo}`}>
                      <div className={styles.revealTagCyan}>RARE DROP</div>
                      <div className={styles.revealIconWrapCyan}>
                        <span className={styles.revealEmoji}>💎</span>
                      </div>
                      <span className={styles.revealAmountCyan}>+25 Gems</span>
                      <span className={styles.revealDesc}>Arcade Entry Tickets &amp; Multipliers</span>

                      <button 
                        className={claimedGems ? styles.miniClaimedBtn : styles.miniClaimBtnCyan}
                        onClick={handleCollectGems}
                        disabled={claimedGems}
                      >
                        {claimedGems ? '✓ Collected' : 'Collect +25 Gems'}
                      </button>
                    </div>

                    {/* Reward 3: 1.5x Multiplier Perk */}
                    <div className={`${styles.revealCard} ${styles.cardThree}`}>
                      <div className={styles.revealTagPurple}>TIER PERK</div>
                      <div className={styles.revealIconWrapPurple}>
                        <Zap size={22} />
                      </div>
                      <span className={styles.revealAmountPurple}>1.5x Multiplier</span>
                      <span className={styles.revealDesc}>Permanent Daily XP Boost</span>

                      <button 
                        className={claimedPerk ? styles.miniClaimedBtn : styles.miniClaimBtnPurple}
                        onClick={handleCollectPerk}
                        disabled={claimedPerk}
                      >
                        {claimedPerk ? '✓ Active' : 'Activate 1.5x'}
                      </button>
                    </div>
                  </div>
                )}

                {/* Bottom Action Buttons */}
                <div className={styles.stageActions}>
                  {unboxState === 'revealed' ? (
                    <div className={styles.revealedActionsRow}>
                      <button
                        className={styles.claimAllBtn}
                        onClick={handleClaim}
                        disabled={claimed}
                      >
                        {claimed ? (
                          <>
                            <Check size={16} />
                            <span>Claimed to Rewards Wallet!</span>
                          </>
                        ) : (
                          <>
                            <Sparkles size={16} />
                            <span>Claim All to Rewards Wallet</span>
                          </>
                        )}
                      </button>

                      <button
                        className={styles.replayBtn}
                        onClick={startUnboxing}
                        title="Watch Suspense Opening Again"
                      >
                        <RotateCcw size={15} />
                        <span>Replay Unboxing</span>
                      </button>

                      <button
                        className={styles.doneReturnBtn}
                        onClick={() => setIsModalOpen(false)}
                        title="Return back to Dashboard"
                      >
                        <span>Done &amp; Return to Dashboard ➔</span>
                      </button>
                    </div>
                  ) : unboxState === 'idle' ? (
                    <button className={styles.startUnboxBtn} onClick={startUnboxing}>
                      <Sparkles size={16} />
                      <span>Start Opening Mystery Box</span>
                    </button>
                  ) : null}
                </div>
              </div>
            )}

            {/* TAB 2: DETAILED BREAKDOWN */}
            {activeTab === 'breakdown' && (
              <div className={styles.breakdownList}>
                <div className={styles.breakdownHeader}>
                  <h4 className={styles.breakdownTitle}>Level {formattedNextLevel} Rewards Vault Specification</h4>
                  <p className={styles.breakdownSub}>
                    Unlocks automatically once your total XP reaches 8,000 XP (Level {formattedNextLevel}).
                  </p>
                </div>

                <div className={styles.rewardDetailItem}>
                  <div className={styles.detailIconCol}>🪙</div>
                  <div className={styles.detailTextCol}>
                    <div className={styles.detailTitleRow}>
                      <span className={styles.detailName}>500 VEs Token Credit</span>
                      <span className={styles.pillGold}>+500 VEs</span>
                    </div>
                    <p className={styles.detailExplanation}>
                      Instant balance credit spendable across all merchant partner gift cards, electronics, and digital vouchers.
                    </p>
                  </div>
                </div>

                <div className={styles.rewardDetailItem}>
                  <div className={styles.detailIconCol}>💎</div>
                  <div className={styles.detailTextCol}>
                    <div className={styles.detailTitleRow}>
                      <span className={styles.detailName}>25 Premium Arcade Gems</span>
                      <span className={styles.pillCyan}>+25 Gems</span>
                    </div>
                    <p className={styles.detailExplanation}>
                      Required to unlock high-stakes multiplier tournaments in the VELOOP XP Catcher arcade.
                    </p>
                  </div>
                </div>

                <div className={styles.rewardDetailItem}>
                  <div className={styles.detailIconCol}>⚡</div>
                  <div className={styles.detailTextCol}>
                    <div className={styles.detailTitleRow}>
                      <span className={styles.detailName}>1.5x Daily XP Multiplier</span>
                      <span className={styles.pillPurple}>Passive Perk</span>
                    </div>
                    <p className={styles.detailExplanation}>
                      Permanently accelerates XP earned from Watch &amp; Earn, Daily Missions, and Mini-Games.
                    </p>
                  </div>
                </div>

                <button
                  className={styles.closePreviewBtn}
                  onClick={() => setIsModalOpen(false)}
                >
                  Close Preview
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
