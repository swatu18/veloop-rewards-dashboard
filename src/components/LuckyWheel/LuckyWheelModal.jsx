import React, { useState, useRef } from 'react';
import { Sparkles, X, Gift, Zap, RotateCw, Check, Trophy } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import styles from './LuckyWheelModal.module.css';

// 8 Slices matching Candy Crush / Top Gamified Fintech Tier standards
const WHEEL_SLICES = [
  { id: 0, label: '+100 XP', sub: 'Experience', xp: 100, ve: 0, gem: 0, color: '#F59E0B', bg: '#78350F' },
  { id: 1, label: '+50 VEs', sub: 'Tokens', xp: 0, ve: 50, gem: 0, color: '#38BDF8', bg: '#0369A1' },
  { id: 2, label: '+250 XP', sub: '🌟 Jackpot', xp: 250, ve: 20, gem: 0, color: '#FBBF24', bg: '#92400E' },
  { id: 3, label: '+10 Gems', sub: '💎 Sapphire', xp: 0, ve: 0, gem: 10, color: '#34D399', bg: '#065F46' },
  { id: 4, label: '2X Boost', sub: '⚡ Multiplier', xp: 60, ve: 25, gem: 0, color: '#C084FC', bg: '#581C87' },
  { id: 5, label: '+75 VEs', sub: 'Tokens', xp: 0, ve: 75, gem: 0, color: '#FDE68A', bg: '#854D0E' },
  { id: 6, label: '+500 XP', sub: '🚀 Mega Boost', xp: 500, ve: 50, gem: 5, color: '#FB7185', bg: '#9F1239' },
  { id: 7, label: '+25 Gems', sub: '💎 Emerald', xp: 0, ve: 0, gem: 25, color: '#2DD4BF', bg: '#115E59' },
];

export const LuckyWheelModal = () => {
  const { 
    isSpinModalOpen, 
    setIsSpinModalOpen, 
    addXP, 
    addVEs, 
    addGems, 
    triggerConfetti 
  } = useDashboard();

  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [winningSlice, setWinningSlice] = useState(null);
  const [hasClaimed, setHasClaimed] = useState(false);
  const [spinsLeft, setSpinsLeft] = useState(3); // 3 daily bonus spins for evaluator demo

  const spinSoundRef = useRef(null);

  if (!isSpinModalOpen) return null;

  const playTickerSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(580, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {}
  };

  const playWinSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.09);
        gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.09);
        gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + idx * 0.09 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.09 + 0.7);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.09);
        osc.stop(ctx.currentTime + idx * 0.09 + 0.7);
      });
    } catch {}
  };

  const handleSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setWinningSlice(null);
    setHasClaimed(false);

    // Pick random slice
    const sliceIndex = Math.floor(Math.random() * WHEEL_SLICES.length);
    const sliceAngle = 360 / WHEEL_SLICES.length;
    // Calculate final angle to land with pointer at top (270deg offset in SVG space)
    const extraTurns = 5 * 360; // 5 full revolutions
    const targetOffset = 360 - (sliceIndex * sliceAngle + sliceAngle / 2);
    const nextRotation = rotation + extraTurns + targetOffset;

    setRotation(nextRotation);

    // Interval ticker clicking while spinning
    let clickCount = 0;
    const tickerInterval = setInterval(() => {
      playTickerSound();
      clickCount++;
      if (clickCount > 25) clearInterval(tickerInterval);
    }, 140);

    // After 3.8s spin animation finishes
    setTimeout(() => {
      clearInterval(tickerInterval);
      setIsSpinning(false);
      setWinningSlice(WHEEL_SLICES[sliceIndex]);
      setSpinsLeft(prev => Math.max(0, prev - 1));
      playWinSound();
      triggerConfetti();
    }, 3800);
  };

  const handleClaimReward = () => {
    if (!winningSlice || hasClaimed) return;
    setHasClaimed(true);

    if (winningSlice.xp > 0) {
      addXP(winningSlice.xp, `Daily Lucky Wheel: ${winningSlice.label}`, 'SpinWheel');
    }
    if (winningSlice.ve > 0) {
      addVEs(winningSlice.ve, `Daily Lucky Wheel: ${winningSlice.label}`);
    }
    if (winningSlice.gem > 0) {
      addGems(winningSlice.gem, `Daily Lucky Wheel: ${winningSlice.label}`);
    }

    triggerConfetti();
  };

  return (
    <div className={styles.backdrop} onClick={() => setIsSpinModalOpen(false)}>
      <div className={styles.modalCard} onClick={e => e.stopPropagation()}>
        {/* Top Header */}
        <div className={styles.headerRow}>
          <div className={styles.titleGroup}>
            <span className={styles.headerIcon}>🎡</span>
            <div>
              <h3 className={styles.modalHeading}>Daily Lucky Spin Wheel</h3>
              <span className={styles.subHeading}>Spin every day to win free XP, VEs tokens &amp; Gems!</span>
            </div>
          </div>
          <button 
            className={styles.closeBtn}
            onClick={() => setIsSpinModalOpen(false)}
            aria-label="Close Lucky Wheel"
          >
            <X size={18} />
          </button>
        </div>

        {/* Spins Left Badge */}
        <div className={styles.spinsCounterBadge}>
          <Sparkles size={13} className={styles.sparkleIcon} />
          <span><strong>{spinsLeft} Spins Available Today</strong> • Zero Ads Required</span>
        </div>

        {/* ── Wheel Arena ── */}
        <div className={styles.wheelArena}>
          {/* Top Golden Needle Pointer */}
          <div className={styles.pointerWrap}>
            <svg viewBox="0 0 32 40" className={styles.pointerSvg} fill="none">
              <path d="M 16 38 L 4 10 Q 2 4 8 4 L 24 4 Q 30 4 28 10 Z" fill="#FBBF24" stroke="#FFFBEB" strokeWidth="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.6))" />
              <circle cx="16" cy="12" r="3.5" fill="#78350F" />
            </svg>
          </div>

          {/* Rotating Wheel Container */}
          <div 
            className={styles.wheelWrapper}
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: isSpinning ? 'transform 3.8s cubic-bezier(0.12, 0.98, 0.32, 1)' : 'none'
            }}
          >
            <svg viewBox="0 0 300 300" className={styles.wheelSvg}>
              <defs>
                <filter id="pegGlow">
                  <feGaussianBlur stdDeviation="1.5" result="b" />
                  <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {/* Outer Golden Chamfer Ring */}
              <circle cx="150" cy="150" r="148" fill="#D97706" stroke="#FFFBEB" strokeWidth="3" />
              <circle cx="150" cy="150" r="142" fill="#78350F" />
              <circle cx="150" cy="150" r="138" fill="#1E1B4B" />

              {/* Slices */}
              {WHEEL_SLICES.map((slice, i) => {
                const angle = 360 / WHEEL_SLICES.length;
                const startAngle = (i * angle - 90) * (Math.PI / 180);
                const endAngle = ((i + 1) * angle - 90) * (Math.PI / 180);
                const x1 = 150 + 135 * Math.cos(startAngle);
                const y1 = 150 + 135 * Math.sin(startAngle);
                const x2 = 150 + 135 * Math.cos(endAngle);
                const y2 = 150 + 135 * Math.sin(endAngle);
                const pathData = `M 150 150 L ${x1} ${y1} A 135 135 0 0 1 ${x2} ${y2} Z`;

                const midAngle = (i * angle + angle / 2);

                return (
                  <g key={slice.id}>
                    <path d={pathData} fill={slice.bg} stroke="#FDE68A" strokeWidth="1.5" />
                    
                    {/* Slice Text Content */}
                    <g transform={`rotate(${midAngle}, 150, 150)`}>
                      <text
                        x="150"
                        y="48"
                        textAnchor="middle"
                        fill="#FFFFFF"
                        fontSize="12"
                        fontWeight="900"
                        fontFamily="var(--font-heading)"
                        filter="drop-shadow(0 1px 3px rgba(0,0,0,0.9))"
                      >
                        {slice.label}
                      </text>
                      <text
                        x="150"
                        y="62"
                        textAnchor="middle"
                        fill={slice.color}
                        fontSize="8.5"
                        fontWeight="800"
                        fontFamily="var(--font-main)"
                      >
                        {slice.sub}
                      </text>
                    </g>
                  </g>
                );
              })}

              {/* Outer Golden Studs / Pegs */}
              {Array.from({ length: 16 }).map((_, i) => {
                const a = (i * (360 / 16)) * (Math.PI / 180);
                const px = 150 + 143 * Math.cos(a);
                const py = 150 + 143 * Math.sin(a);
                return (
                  <circle
                    key={i}
                    cx={px}
                    cy={py}
                    r="3.2"
                    fill="#FFFBEB"
                    stroke="#D97706"
                    strokeWidth="1"
                    filter="url(#pegGlow)"
                  />
                );
              })}

              {/* Inner Decorative Center Rings */}
              <circle cx="150" cy="150" r="38" fill="#F59E0B" stroke="#FFFBEB" strokeWidth="2.5" />
              <circle cx="150" cy="150" r="32" fill="#1E1B4B" />
              <circle cx="150" cy="150" r="28" fill="#78350F" />
            </svg>
          </div>

          {/* Central 3D Interactive Spin Button */}
          <button 
            className={`${styles.centerSpinBtn} ${isSpinning ? styles.spinBtnDisabled : ''}`}
            onClick={handleSpin}
            disabled={isSpinning || spinsLeft <= 0}
            title={spinsLeft <= 0 ? 'No spins left' : 'Click to Spin!'}
          >
            <span className={styles.centerSpinText}>
              {isSpinning ? '...' : 'SPIN'}
            </span>
          </button>
        </div>

        {/* ── Winning Reward Card ── */}
        {winningSlice && (
          <div className={styles.winningCard}>
            <div className={styles.winHeader}>
              <span className={styles.winBadge}>🎉 REWARD UNLOCKED!</span>
              <h4 className={styles.winTitle}>{winningSlice.label} • {winningSlice.sub}</h4>
              <p className={styles.winDesc}>Congratulations! This bonus has been granted to your progression account.</p>
            </div>

            <div className={styles.winActionsRow}>
              <button 
                className={hasClaimed ? styles.claimedBtn : styles.claimBtn}
                onClick={handleClaimReward}
                disabled={hasClaimed}
              >
                {hasClaimed ? (
                  <>
                    <Check size={16} />
                    <span>Reward Added to Balance!</span>
                  </>
                ) : (
                  <>
                    <Gift size={16} />
                    <span>Claim &amp; Collect Reward</span>
                  </>
                )}
              </button>

              {spinsLeft > 0 && (
                <button 
                  className={styles.spinAgainBtn}
                  onClick={handleSpin}
                  disabled={isSpinning}
                >
                  <RotateCw size={15} />
                  <span>Spin Again ({spinsLeft} left)</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Bottom Helper Note */}
        {!winningSlice && (
          <div className={styles.bottomFooter}>
            <button 
              className={styles.primarySpinCta}
              onClick={handleSpin}
              disabled={isSpinning || spinsLeft <= 0}
            >
              {isSpinning ? '🎡 Wheel is spinning...' : 'Tap Wheel or Click Here to Spin'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
