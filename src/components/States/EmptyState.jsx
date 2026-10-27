import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import styles from './States.module.css';

export const EmptyState = ({ type = 'activity' }) => {
  const { setActiveScreen, setDemoState } = useDashboard();

  if (type === 'game') {
    return (
      <div className={styles.stateCard}>
        <div className={styles.iconCircle}>
          <Sparkles size={28} />
        </div>
        <h3 className={styles.stateTitle}>No Available Game</h3>
        <p className={styles.stateSubtitle}>New challenge coming soon.</p>
        <button 
          className={styles.primaryBtn}
          onClick={() => setDemoState('normal')}
        >
          Check Back Later
        </button>
      </div>
    );
  }

  return (
    <div className={styles.stateCard}>
      <div className={styles.iconCircle}>
        <Sparkles size={28} />
      </div>
      <h3 className={styles.stateTitle}>No XP Activity</h3>
      <p className={styles.stateSubtitle}>Your XP journey starts here.</p>
      <button 
        className={styles.primaryBtn}
        onClick={() => {
          setDemoState('normal');
          setActiveScreen('earn');
        }}
      >
        <span>Start Earning XP</span>
        <ArrowRight size={16} />
      </button>
    </div>
  );
};
