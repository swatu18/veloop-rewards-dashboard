import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import styles from './States.module.css';

export const ErrorState = () => {
  const { setDemoState } = useDashboard();

  return (
    <div className={styles.stateCard}>
      <div className={`${styles.iconCircle} ${styles.errorIconCircle}`}>
        <AlertCircle size={28} />
      </div>
      <h3 className={styles.stateTitle}>Unable to Load Level Progress</h3>
      <p className={styles.stateSubtitle}>We couldn't load your level information right now.</p>
      <button 
        className={styles.primaryBtn}
        onClick={() => setDemoState('normal')}
      >
        <RefreshCw size={16} />
        <span>Try Again</span>
      </button>
    </div>
  );
};
