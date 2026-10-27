import React from 'react';
import { Star, CheckSquare, Flame, Zap } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import styles from './TodaysBoost.module.css';

export const TodaysBoost = () => {
  const { user } = useDashboard();

  return (
    <div className={styles.boostSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.titleGroup}>
          <Zap size={16} className={styles.boostIcon} />
          <h2 className={styles.sectionTitle}>TODAY'S BOOST</h2>
        </div>
        <span className={styles.resetTimer}>Resets in 04h 34m</span>
      </div>

      <div className={styles.grid}>
        {/* Card 1: XP Earned */}
        <div className={styles.boostCard}>
          <div className={`${styles.iconWrap} ${styles.starWrap}`}>
            <Star size={18} />
          </div>
          <div className={styles.cardInfo}>
            <span className={styles.label}>XP Earned</span>
            <span className={styles.value}>{user.xpEarnedToday} XP</span>
          </div>
        </div>

        {/* Card 2: Tasks Done */}
        <div className={styles.boostCard}>
          <div className={`${styles.iconWrap} ${styles.taskWrap}`}>
            <CheckSquare size={18} />
          </div>
          <div className={styles.cardInfo}>
            <span className={styles.label}>Tasks Done</span>
            <span className={styles.value}>{user.tasksDoneToday} / {user.tasksTotalToday}</span>
          </div>
        </div>

        {/* Card 3: Streak */}
        <div className={styles.boostCard}>
          <div className={`${styles.iconWrap} ${styles.streakWrap}`}>
            <Flame size={18} />
          </div>
          <div className={styles.cardInfo}>
            <span className={styles.label}>Streak</span>
            <span className={styles.value}>{user.streakDays} Days</span>
          </div>
        </div>
      </div>
    </div>
  );
};
