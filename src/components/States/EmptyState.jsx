import React from 'react';
import { Sparkles, ArrowRight, ArrowLeft, Inbox, Compass, Zap } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import styles from './States.module.css';

export const EmptyState = () => {
  const { setActiveScreen, setDemoState } = useDashboard();

  return (
    <div className={styles.stateWrapper}>
      {/* Return to Dashboard Top Bar */}
      <div className={styles.stateTopBar}>
        <button 
          className={styles.backBtn}
          onClick={() => setDemoState('normal')}
          title="Return to Live Dashboard"
        >
          <ArrowLeft size={16} />
          <span>Return to Live Dashboard</span>
        </button>
        <span className={styles.stateTagEmpty}>✨ EMPTY ACTIVITY STATE</span>
      </div>

      {/* Main Glassmorphic Empty Card */}
      <div className={styles.luxuryEmptyCard}>
        <div className={styles.emptyAura} />

        <div className={styles.emptyIconWrap}>
          <Sparkles size={36} className={styles.emptySparkleIcon} />
        </div>

        <h3 className={styles.stateTitle}>Your Adventure Begins Here!</h3>
        <p className={styles.stateSubtitle}>
          You don't have any recorded XP ledger activity or arcade tournament entries yet. 
          Catch your first falling XP orbs, spin the daily lucky wheel, or watch a sponsor video to fill your vault!
        </p>

        {/* Quick Earning Shortcuts */}
        <div className={styles.quickStartGrid}>
          <div 
            className={styles.quickStartCard}
            onClick={() => { setDemoState('normal'); setActiveScreen('game'); }}
          >
            <span className={styles.quickIcon}>🎮</span>
            <div>
              <span className={styles.quickTitle}>XP Catcher Arcade</span>
              <span className={styles.quickSub}>Catch purple orbs for +250 XP</span>
            </div>
            <ArrowRight size={14} className={styles.quickArrow} />
          </div>

          <div 
            className={styles.quickStartCard}
            onClick={() => { setDemoState('normal'); setActiveScreen('earn'); }}
          >
            <span className={styles.quickIcon}>📺</span>
            <div>
              <span className={styles.quickTitle}>Watch &amp; Earn Sponsor Hub</span>
              <span className={styles.quickSub}>Earn +50 XP and +15 VEs tokens</span>
            </div>
            <ArrowRight size={14} className={styles.quickArrow} />
          </div>
        </div>

        {/* Action Button */}
        <div className={styles.stateActionsRow}>
          <button 
            className={styles.primaryBtn}
            onClick={() => {
              setDemoState('normal');
              setActiveScreen('earn');
            }}
          >
            <Zap size={16} />
            <span>Start Earning XP &amp; Tokens</span>
          </button>
        </div>
      </div>
    </div>
  );
};
