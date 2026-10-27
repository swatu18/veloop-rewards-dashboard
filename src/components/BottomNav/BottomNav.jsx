import React from 'react';
import { Home, Zap, Award, Wallet, User } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import styles from './BottomNav.module.css';

export const BottomNav = () => {
  const { activeScreen, setActiveScreen } = useDashboard();

  return (
    <nav className={styles.bottomBar}>
      <button 
        className={`${styles.navBtn} ${activeScreen === 'dashboard' ? styles.active : ''}`}
        onClick={() => setActiveScreen('dashboard')}
      >
        <Home size={20} />
        <span>Home</span>
      </button>

      <button 
        className={`${styles.navBtn} ${activeScreen === 'earn' ? styles.active : ''}`}
        onClick={() => setActiveScreen('earn')}
      >
        <Zap size={20} />
        <span>Earn</span>
      </button>

      <button 
        className={`${styles.navBtn} ${activeScreen === 'game' ? styles.active : ''}`}
        onClick={() => setActiveScreen('game')}
      >
        <div className={styles.arcadeIconWrap}>
          <Award size={20} />
        </div>
        <span>Rewards</span>
      </button>

      <button 
        className={`${styles.navBtn} ${activeScreen === 'activity' ? styles.active : ''}`}
        onClick={() => setActiveScreen('activity')}
      >
        <Wallet size={20} />
        <span>Wallet</span>
      </button>

      <button 
        className={styles.navBtn}
        onClick={() => setActiveScreen('dashboard')}
      >
        <User size={20} />
        <span>Profile</span>
      </button>
    </nav>
  );
};
