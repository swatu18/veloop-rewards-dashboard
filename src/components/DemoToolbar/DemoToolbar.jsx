import React, { useState, useRef } from 'react';
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
  ChevronRight,
  ChevronLeft,
  X,
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
  const [isDockedSide, setIsDockedSide] = useState(false); // Swipe to side state
  const touchStartXRef = useRef(0);

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

  // Touch Swipe handlers to dismiss/park bar to the edge
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartXRef.current;
    if (Math.abs(diff) > 40) {
      // Swiped horizontally: dock to side!
      setIsDockedSide(true);
      setIsExpanded(false);
    }
  };

  // When docked to side, show a sleek miniature floating edge button
  if (isDockedSide) {
    return (
      <div 
        className={styles.dockedSideTab}
        onClick={() => setIsDockedSide(false)}
        title="Tap to Expand Evaluator Controls"
      >
        <Sliders size={14} className={styles.sliderIcon} />
        <span className={styles.dockedText}>DEV</span>
        <ChevronLeft size={14} />
      </div>
    );
  }

  return (
    <div 
      className={`${styles.toolbarWrapper} ${isExpanded ? styles.expanded : ''}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Minimized Bar Header */}
      <div 
        className={styles.toggleBar}
        onClick={() => setIsExpanded(!isExpanded)}
        role="button"
        tabIndex={0}
      >
        <div className={styles.toggleInfo}>
          <Sliders size={16} className={styles.sliderIcon} />
          <span className={styles.toggleTitle}>Evaluator Bar</span>
          <span className={styles.stateIndicator}>
            {demoState.toUpperCase()}
          </span>
        </div>

        <div className={styles.actionControlsRight}>
          <div className={styles.chevronWrap}>
            {isExpanded ? <ChevronDown size={15} /> : <ChevronUp size={15} />}
          </div>
          {/* Swipe / Tuck to side button */}
          <button 
            className={styles.dockBtn}
            onClick={(e) => { e.stopPropagation(); setIsDockedSide(true); }}
            title="Swipe or click to hide to side edge"
          >
            <ChevronRight size={15} />
          </button>
        </div>
      </div>

      {/* Expanded Panel */}
      {isExpanded && (
        <div className={styles.panelContent}>
          {/* Row 1: Direct Screen Switchers */}
          <div className={styles.sectionBlock}>
            <span className={styles.blockLabel}>Navigate Screens:</span>
            <div className={styles.buttonRow}>
              <button 
                className={`${styles.navChip} ${isLanding ? styles.chipActive : ''}`}
                onClick={() => navigate('/')}
              >
                🏠 Landing
              </button>
              <button 
                className={`${styles.navChip} ${!isLanding && activeScreen === 'dashboard' ? styles.chipActive : ''}`}
                onClick={() => goToDashboardScreen('dashboard')}
              >
                📊 Dashboard
              </button>
              <button 
                className={`${styles.navChip} ${!isLanding && activeScreen === 'game' ? styles.chipActive : ''}`}
                onClick={() => goToDashboardScreen('game')}
              >
                🎮 Game
              </button>
              <button 
                className={`${styles.navChip} ${!isLanding && activeScreen === 'earn' ? styles.chipActive : ''}`}
                onClick={() => goToDashboardScreen('earn')}
              >
                💰 Earn More
              </button>
              <button 
                className={`${styles.navChip} ${!isLanding && activeScreen === 'activity' ? styles.chipActive : ''}`}
                onClick={() => goToDashboardScreen('activity')}
              >
                📜 Ledger
              </button>
            </div>
          </div>

          {/* Row 2: UX Demonstration States */}
          <div className={styles.sectionBlock}>
            <span className={styles.blockLabel}>Test UX States:</span>
            <div className={styles.buttonRow}>
              <button 
                className={`${styles.stateChip} ${demoState === 'normal' ? styles.chipActive : ''}`}
                onClick={() => setDemoState('normal')}
              >
                <CheckCircle size={13} />
                <span>Normal</span>
              </button>
              <button 
                className={`${styles.stateChip} ${demoState === 'loading' ? styles.chipActive : ''}`}
                onClick={() => setDemoState('loading')}
              >
                <Clock size={13} />
                <span>Skeleton</span>
              </button>
              <button 
                className={`${styles.stateChip} ${demoState === 'error' ? styles.chipActive : ''}`}
                onClick={() => setDemoState('error')}
              >
                <AlertTriangle size={13} />
                <span>Error</span>
              </button>
              <button 
                className={`${styles.stateChip} ${demoState === 'empty' ? styles.chipActive : ''}`}
                onClick={() => setDemoState('empty')}
              >
                <Layers size={13} />
                <span>Empty</span>
              </button>
            </div>
          </div>

          {/* Row 3: Action Triggers */}
          <div className={styles.sectionBlock}>
            <span className={styles.blockLabel}>Actions:</span>
            <div className={styles.buttonRow}>
              <button 
                className={styles.levelUpTriggerBtn}
                onClick={() => triggerLevelUp(6)}
              >
                <Sparkles size={14} />
                <span>Trigger Level Up!</span>
              </button>
              <button 
                className={styles.resetBtn}
                onClick={resetDemo}
              >
                <RotateCcw size={13} />
                <span>Reset</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
