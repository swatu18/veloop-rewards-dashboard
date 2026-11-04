import React from 'react';
import { Sparkles, ArrowRight, Zap, Gift } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import styles from './LuckyWheelBanner.module.css';

export const LuckyWheelBanner = () => {
  const { setIsSpinModalOpen } = useDashboard();

  return (
    <div className={styles.bannerCard} onClick={() => setIsSpinModalOpen(true)}>
      <div className={styles.ambientGlow} />

      <div className={styles.contentLeft}>
        <div className={styles.pillRow}>
          <span className={styles.featurePill}>
            <Sparkles size={12} className={styles.sparkleIcon} />
            <span>DAILY BONUS SPIN</span>
          </span>
          <span className={styles.freePill}>FREE TODAY</span>
        </div>

        <h3 className={styles.bannerTitle}>
          Spin the Lucky Wheel! <span className={styles.goldText}>Win up to +500 XP</span>
        </h3>
        <p className={styles.bannerSub}>
          Take your free daily spin to unlock instant XP level boosts, VEs shopping tokens, and rare crystal gems!
        </p>

        <div className={styles.rewardBadgesRow}>
          <span className={styles.chipGold}>🪙 Up to +75 VEs</span>
          <span className={styles.chipCyan}>💎 Up to +25 Gems</span>
          <span className={styles.chipPurple}>⚡ 2X XP Multipliers</span>
        </div>
      </div>

      <div className={styles.wheelVisualCol}>
        <div className={styles.wheelMiniIconWrap}>
          <div className={styles.wheelMiniEmoji}>🎡</div>
          <div className={styles.pointerMini}>▼</div>
        </div>

        <button className={styles.spinActionBtn}>
          <span>SPIN NOW</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
};
