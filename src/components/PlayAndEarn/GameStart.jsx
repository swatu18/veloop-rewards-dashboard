import React from 'react';
import { Play, Sparkles, Trophy, Clock, Zap, ArrowLeft, Info } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import styles from './Game.module.css';

export const GameStart = ({ onStartGame }) => {
  const { setActiveScreen, setActiveInfoModal } = useDashboard();

  return (
    <div className={styles.startContainer}>
      {/* Top Bar */}
      <div className={styles.gameTopBar}>
        <button 
          className={styles.backBtn}
          onClick={() => setActiveScreen('dashboard')}
          aria-label="Back to Dashboard"
        >
          <ArrowLeft size={20} />
        </button>
        <div className={styles.titleWithInfo}>
          <h2 className={styles.gameTitle}>XP CATCHER</h2>
          <button 
            className={styles.infoIconBtn}
            onClick={() => setActiveInfoModal('level')}
            aria-label="Game Rules Info"
          >
            <Info size={16} />
          </button>
        </div>
        <div className={styles.timerPill}>
          <Clock size={14} />
          <span>00:20</span>
        </div>
      </div>

      <p className={styles.gameSubtitle}>
        Catch XP orbs & coins. Score high for better rewards!
      </p>

      {/* Hero Visual Card */}
      <div className={styles.heroCard}>
        <div className={styles.heroGlow}></div>
        
        {/* Animated Basket & Falling Orb Preview */}
        <div className={styles.previewStage}>
          <div className={`${styles.previewItem} ${styles.previewXP} float-effect`}>XP</div>
          <div className={`${styles.previewItem} ${styles.previewCoin} float-effect`} style={{ animationDelay: '1s' }}>V</div>
          <div className={`${styles.previewItem} ${styles.previewGem} float-effect`} style={{ animationDelay: '2s' }}>💎</div>
          
          <div className={styles.previewBasket}>
            <div className={styles.basketRim}></div>
            <div className={styles.basketMesh}></div>
          </div>
        </div>

        <div className={styles.rulesList}>
          <div className={styles.ruleItem}>
            <span className={styles.ruleDot}>🪙</span>
            <span><strong>Golden V Coins:</strong> +10 Pts</span>
          </div>
          <div className={styles.ruleItem}>
            <span className={styles.ruleDot}>🔮</span>
            <span><strong>Purple XP Orbs:</strong> +15 Pts</span>
          </div>
          <div className={styles.ruleItem}>
            <span className={styles.ruleDot}>💎</span>
            <span><strong>Cosmic Gems:</strong> +25 Pts & 2X Multiplier</span>
          </div>
        </div>

        <div className={styles.controlsBadge}>
          <span>Controls: <strong>Drag with Mouse / Finger</strong> or use <strong>← / → keys</strong></span>
        </div>

        <button 
          className={styles.startChallengeBtn}
          onClick={onStartGame}
        >
          <Play size={18} fill="#161827" />
          <span>START CHALLENGE</span>
        </button>
      </div>

      {/* Reward Tiers Info */}
      <div className={styles.rewardTiersCard}>
        <span className={styles.rewardTiersTitle}>Score Rewards Breakdown:</span>
        <div className={styles.tiersGrid}>
          <div className={styles.tierPill}>
            <span>Score 40+</span>
            <strong>+20 XP & +5 VEs</strong>
          </div>
          <div className={styles.tierPill}>
            <span>Score 80+</span>
            <strong>+30 XP & +12 VEs</strong>
          </div>
          <div className={`${styles.tierPill} ${styles.tierPillGold}`}>
            <span>Score 120+</span>
            <strong>+50 XP & +25 VEs</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
