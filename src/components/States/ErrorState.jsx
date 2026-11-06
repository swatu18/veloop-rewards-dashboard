import React from 'react';
import { AlertTriangle, RefreshCw, ArrowLeft, ShieldAlert, WifiOff, FileX } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import styles from './States.module.css';

export const ErrorState = () => {
  const { setDemoState } = useDashboard();

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
        <span className={styles.stateTagError}>⚠️ SIMULATED 500 SERVER ERROR</span>
      </div>

      {/* Main Glassmorphic Error Card */}
      <div className={styles.luxuryErrorCard}>
        <div className={styles.errorAura} />

        <div className={styles.errorIconWrap}>
          <AlertTriangle size={36} className={styles.errorIcon} />
        </div>

        <h3 className={styles.stateTitle}>Unable to Synchronize Progression Ledger</h3>
        <p className={styles.stateSubtitle}>
          The cloud rewards cluster encountered a temporary network timeout while fetching your level badges, VEs wallet tokens, and daily missions.
        </p>

        {/* Technical Diagnostics Box */}
        <div className={styles.diagnosticsBox}>
          <div className={styles.diagRow}>
            <span className={styles.diagKey}>Error Code:</span>
            <span className={styles.diagVal}>ERR_VELOOP_CLUSTER_TIMEOUT_504</span>
          </div>
          <div className={styles.diagRow}>
            <span className={styles.diagKey}>Data Protection:</span>
            <span className={styles.diagValSafe}>✓ Zero Data Loss • Local State Preserved</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className={styles.stateActionsRow}>
          <button 
            className={styles.primaryBtn}
            onClick={() => setDemoState('normal')}
          >
            <RefreshCw size={16} />
            <span>Retry Connection (Restore Normal State)</span>
          </button>

          <button 
            className={styles.secondaryBtn}
            onClick={() => setDemoState('normal')}
          >
            <span>Back to Dashboard</span>
          </button>
        </div>
      </div>
    </div>
  );
};
