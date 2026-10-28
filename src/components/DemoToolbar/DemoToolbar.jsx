import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
  const navigate = useNavigate();
  const location = useLocation();
  const isLanding = !location.pathname.toLowerCase().includes('lvl-dashboard');

  const goToDashboardScreen = (screen) => {
    setActiveScreen(screen);
    setDemoState('normal');
    if (isLanding) {
      navigate('/Lvl-Dashboard');
    }
  };

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
          {/* Row 1: Direct Screen Switchers (Landing + 6 screens matching Page 33) */}
          <div className={styles.sectionBlock}>
            <span className={styles.blockLabel}>Navigate Screens:</span>
            <div className={styles.buttonRow}>
              <button 
                className={`${styles.navChip} ${isLanding ? styles.chipActive : ''}`}
                onClick={() => navigate('/')}
              >
                🏠 Landing Page
              </button>
              <button 
                className={`${styles.navChip} ${!isLanding && activeScreen === 'dashboard' ? styles.chipActive : ''}`}
                onClick={() => goToDashboardScreen('dashboard')}
              >
                1. Dashboard
              </button>
              <button 
                className={`${styles.navChip} ${!isLanding && activeScreen === 'game' ? styles.chipActive : ''}`}
                onClick={() => goToDashboardScreen('game')}
              >
                2. XP Catcher
              </button>
              <button 
                className={`${styles.navChip} ${!isLanding && activeScreen === 'result' ? styles.chipActive : ''}`}
                onClick={() => goToDashboardScreen('result')}
              >
                3. Game Result
              </button>
              <button 
                className={`${styles.navChip} ${!isLanding && activeScreen === 'earn' ? styles.chipActive : ''}`}
                onClick={() => goToDashboardScreen('earn')}
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
                className={`${styles.navChip} ${!isLanding && activeScreen === 'activity' ? styles.chipActive : ''}`}
                onClick={() => goToDashboardScreen('activity')}
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
