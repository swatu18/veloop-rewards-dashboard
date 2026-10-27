import React, { useState } from 'react';
import { 
  Sliders, 
  Sparkles, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  RotateCcw, 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  Gamepad2, 
  History, 
  Zap, 
  Award 
} from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import styles from './DemoToolbar.module.css';

export const DemoToolbar = () => {
  const { 
    demoState, 
    setDemoState, 
    activeScreen, 
    setActiveScreen, 
    triggerLevelUp, 
    resetDemo,
    user
  } = useDashboard();

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`${styles.toolbarWrapper} ${isExpanded ? styles.expanded : ''}`}>
      {/* Minimized Pill Toggle */}
      <div 
        className={styles.toggleBar}
        onClick={() => setIsExpanded(!isExpanded)}
        role="button"
        tabIndex={0}
      >
        <div className={styles.toggleInfo}>
          <Sliders size={16} className={styles.sliderIcon} />
          <span className={styles.toggleTitle}>Evaluator Control Bar</span>
          <span className={styles.stateIndicator}>
            {demoState.toUpperCase()} | {activeScreen.toUpperCase()}
          </span>
        </div>
        <div className={styles.chevronWrap}>
          {isExpanded ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
        </div>
      </div>

      {/* Expanded Panel */}
      {isExpanded && (
        <div className={styles.panelContent}>
          {/* Row 1: Direct Screen Switchers (6 screens matching Page 33) */}
          <div className={styles.sectionBlock}>
            <span className={styles.blockLabel}>Navigate 6 Attached Designs (Page 33):</span>
            <div className={styles.buttonRow}>
              <button 
                className={`${styles.navChip} ${activeScreen === 'dashboard' ? styles.chipActive : ''}`}
                onClick={() => { setActiveScreen('dashboard'); setDemoState('normal'); }}
              >
                1. Dashboard
              </button>
              <button 
                className={`${styles.navChip} ${activeScreen === 'game' ? styles.chipActive : ''}`}
                onClick={() => { setActiveScreen('game'); setDemoState('normal'); }}
              >
                2. XP Catcher
              </button>
              <button 
                className={`${styles.navChip} ${activeScreen === 'result' ? styles.chipActive : ''}`}
                onClick={() => { setActiveScreen('result'); setDemoState('normal'); }}
              >
                3. Game Result
              </button>
              <button 
                className={`${styles.navChip} ${activeScreen === 'earn' ? styles.chipActive : ''}`}
                onClick={() => { setActiveScreen('earn'); setDemoState('normal'); }}
              >
                4. Earn Hub
              </button>
              <button 
                className={`${styles.navChip}`}
                onClick={() => { triggerLevelUp(user.currentLevel + 1); }}
              >
                5. Level Up Modal
              </button>
              <button 
                className={`${styles.navChip} ${activeScreen === 'activity' ? styles.chipActive : ''}`}
                onClick={() => { setActiveScreen('activity'); setDemoState('normal'); }}
              >
                6. XP Activity
              </button>
            </div>
          </div>

          {/* Row 2: Required UX States (Section 40, 41, 42) */}
          <div className={styles.sectionBlock}>
            <span className={styles.blockLabel}>UX States Verification (Sections 40-42):</span>
            <div className={styles.buttonRow}>
              <button 
                className={`${styles.stateBtn} ${demoState === 'normal' ? styles.stateBtnActive : ''}`}
                onClick={() => setDemoState('normal')}
              >
                Normal Live
              </button>
              <button 
                className={`${styles.stateBtn} ${demoState === 'loading' ? styles.stateBtnActive : ''}`}
                onClick={() => setDemoState('loading')}
              >
                Loading Skeletons
              </button>
              <button 
                className={`${styles.stateBtn} ${demoState === 'empty' ? styles.stateBtnActive : ''}`}
                onClick={() => setDemoState('empty')}
              >
                Empty State
              </button>
              <button 
                className={`${styles.stateBtn} ${demoState === 'error' ? styles.stateBtnActive : ''}`}
                onClick={() => setDemoState('error')}
              >
                Error State
              </button>
            </div>
          </div>

          {/* Row 3: Action Triggers */}
          <div className={styles.actionsRow}>
            <button 
              className={styles.levelUpTriggerBtn}
              onClick={() => triggerLevelUp(5)}
            >
              <Sparkles size={14} />
              <span>Simulate Level Up (Tier 5)</span>
            </button>

            <button 
              className={styles.resetBtn}
              onClick={resetDemo}
            >
              <RotateCcw size={14} />
              <span>Reset State</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
