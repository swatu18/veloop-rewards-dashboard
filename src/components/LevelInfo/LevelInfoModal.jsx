import React from 'react';
import { Info, Shield, Gift, X } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import styles from './LevelInfoModal.module.css';

export const LevelInfoModal = () => {
  const { activeInfoModal, setActiveInfoModal } = useDashboard();

  if (!activeInfoModal) return null;

  return (
    <div className={styles.backdrop} onClick={() => setActiveInfoModal(null)}>
      <div className={styles.modalBox} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.iconCircle}>
            {activeInfoModal === 'level' ? <Shield size={20} /> : <Gift size={20} />}
          </div>
          <div className={styles.titleArea}>
            <h4 className={styles.title}>
              {activeInfoModal === 'level' ? 'About VELOOP Level Progression' : 'Next-Level Reward Transparency'}
            </h4>
            <span className={styles.sub}>Platform Rules & Verification</span>
          </div>
          <button 
            className={styles.closeBtn}
            onClick={() => setActiveInfoModal(null)}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        <div className={styles.content}>
          {activeInfoModal === 'level' ? (
            <div className={styles.textSection}>
              <p>
                <strong>XP helps you progress through VELOOP Rewards levels.</strong> As you reach new levels, you may unlock additional rewards and experiences according to the platform's tier system.
              </p>
              <div className={styles.infoCallout}>
                <span className={styles.calloutTitle}>How XP is Earned:</span>
                <ul>
                  <li>Completing daily missions and engagement tasks (+20 to +50 XP)</li>
                  <li>Playing skill-based arcade mini-games like XP Catcher (+10 to +75 XP)</li>
                  <li>Maintaining your continuous login streak (+25 XP daily bonus)</li>
                  <li>Inviting colleagues & partners via referral milestones (+100 XP)</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className={styles.textSection}>
              <p>
                <strong>The displayed reward is associated with the next level according to the current reward configuration.</strong>
              </p>
              <div className={styles.infoCallout}>
                <span className={styles.calloutTitle}>Milestone Guarantee:</span>
                <ul>
                  <li>Rewards unlock immediately once the target XP threshold is met.</li>
                  <li>VEs tokens are credited directly into your VELOOP Wallet for merchant redemption.</li>
                  <li>All progress and rewards are tracked transparently in your personal activity ledger.</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <button 
          className={styles.actionBtn}
          onClick={() => setActiveInfoModal(null)}
        >
          Got it
        </button>
      </div>
    </div>
  );
};
