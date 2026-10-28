import React from 'react';
import { Home, Zap, Award, Wallet, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDashboard } from '../../context/DashboardContext';
import styles from './BottomNav.module.css';

export const BottomNav = () => {
  const { activeScreen, setActiveScreen } = useDashboard();
  const navigate = useNavigate();
  const location = useLocation();
  const isDashboard = location.pathname.toLowerCase().includes('lvl-dashboard');

  const goTo = (screen) => {
    setActiveScreen(screen);
    if (!isDashboard) {
      navigate('/Lvl-Dashboard');
    }
  };

  return (
    <nav className={styles.bottomBar}>
      <button 
        className={`${styles.navBtn} ${isDashboard && activeScreen === 'dashboard' ? styles.active : ''}`}
        onClick={() => goTo('dashboard')}
      >
        <Home size={20} />
        <span>Home</span>
      </button>

      <button 
        className={`${styles.navBtn} ${isDashboard && activeScreen === 'earn' ? styles.active : ''}`}
        onClick={() => goTo('earn')}
      >
        <Zap size={20} />
        <span>Earn</span>
      </button>

      <button 
        className={`${styles.navBtn} ${isDashboard && activeScreen === 'game' ? styles.active : ''}`}
        onClick={() => goTo('game')}
      >
        <div className={styles.arcadeIconWrap}>
          <Award size={20} />
        </div>
        <span>Rewards</span>
      </button>

      <button 
        className={`${styles.navBtn} ${isDashboard && activeScreen === 'activity' ? styles.active : ''}`}
        onClick={() => goTo('activity')}
      >
        <Wallet size={20} />
        <span>Wallet</span>
      </button>

      <button 
        className={`${styles.navBtn} ${!isDashboard ? styles.active : ''}`}
        onClick={() => navigate('/')}
      >
        <User size={20} />
        <span>Overview</span>
      </button>
    </nav>
  );
};
