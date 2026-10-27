import React from 'react';
import { Menu, Bell, Volume2, VolumeX, Sparkles, User, Award } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import styles from './Navbar.module.css';

export const Navbar = ({ onOpenMenu }) => {
  const { user, soundEnabled, toggleSound, setActiveScreen } = useDashboard();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Left: Mobile Menu / Brand */}
        <div className={styles.brandGroup}>
          <button 
            className={styles.iconBtn} 
            onClick={onOpenMenu}
            aria-label="Toggle Navigation Menu"
          >
            <Menu size={22} />
          </button>

          <div 
            className={styles.brandLogo} 
            onClick={() => setActiveScreen('dashboard')}
            role="button"
            tabIndex={0}
          >
            <div className={styles.logoMark}>
              <span>V</span>
            </div>
            <div className={styles.logoText}>
              <span className={styles.brandTitle}>VELOOP</span>
              <span className={styles.brandSubtitle}>REWARDS</span>
            </div>
          </div>
        </div>

        {/* Center: Desktop Quick Links */}
        <nav className={styles.desktopNav}>
          <button 
            className={`${styles.navItem} ${styles.active}`}
            onClick={() => setActiveScreen('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={styles.navItem}
            onClick={() => setActiveScreen('earn')}
          >
            Earn XP
          </button>
          <button 
            className={styles.navItem}
            onClick={() => setActiveScreen('game')}
          >
            XP Catcher
          </button>
          <button 
            className={styles.navItem}
            onClick={() => setActiveScreen('activity')}
          >
            Activity
          </button>
        </nav>

        {/* Right: Balances, Audio Toggle & Profile */}
        <div className={styles.userControls}>
          {/* Audio toggle */}
          <button 
            className={styles.iconBtn}
            onClick={toggleSound}
            title={soundEnabled ? 'Mute Sound Effects' : 'Enable Sound Effects'}
            aria-label="Toggle Sound"
          >
            {soundEnabled ? <Volume2 size={18} className={styles.activeIcon} /> : <VolumeX size={18} />}
          </button>

          {/* VE Balance Chip */}
          <div className={styles.balanceChip} title="Your VEs Rewards Balance">
            <span className={styles.coinIcon}>🪙</span>
            <span className={styles.balanceText}>{user.veBalance.toLocaleString()}</span>
            <span className={styles.currencyTag}>VEs</span>
          </div>

          {/* Notification Bell */}
          <div className={styles.notificationWrapper}>
            <button className={styles.iconBtn} aria-label="Notifications">
              <Bell size={20} />
              <span className={styles.notificationDot}></span>
            </button>
          </div>

          {/* Profile Avatar with Level Ring */}
          <div className={styles.avatarWrapper} title={`Logged in as ${user.userName} (Level ${user.currentLevel})`}>
            <div className={styles.avatar}>
              <span>SG</span>
            </div>
            <div className={styles.avatarLevelBadge}>
              {user.currentLevel}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
