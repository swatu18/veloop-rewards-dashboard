import React, { useState, useRef, useEffect } from 'react';
import { Menu, Bell, Volume2, VolumeX, X, User, Award, Settings, LogOut, Gift, CheckCircle } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import styles from './Navbar.module.css';

const NOTIFICATIONS = [
  { id: 1, icon: '⚡', title: 'Daily Streak Active!', desc: 'Your 7-day streak is running. Log in tomorrow to keep it!', time: '2 min ago', read: false },
  { id: 2, icon: '🪙', title: 'XP Reward Credited', desc: '+50 XP from Watch & Earn partner video was added.', time: '1 hour ago', read: false },
  { id: 3, icon: '🎯', title: 'Level 06 Getting Closer!', desc: 'You need only 1,580 XP more to unlock Master Sovereign tier.', time: '3 hours ago', read: true },
  { id: 4, icon: '💎', title: 'Gem Bonus Unlocked', desc: 'You earned 25 Gems from your Level 04 milestone.', time: 'Yesterday', read: true },
];

export const Navbar = ({ onOpenMenu }) => {
  const { user, soundEnabled, toggleSound, setActiveScreen } = useDashboard();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  const notifRef = useRef(null);
  const profileRef = useRef(null);

  const unreadCount = notifications.filter(n => !n.read).length;

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfile(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

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
          <button className={`${styles.navItem} ${styles.active}`} onClick={() => setActiveScreen('dashboard')}>Dashboard</button>
          <button className={styles.navItem} onClick={() => setActiveScreen('earn')}>Earn XP</button>
          <button className={styles.navItem} onClick={() => setActiveScreen('game')}>XP Catcher</button>
          <button className={styles.navItem} onClick={() => setActiveScreen('activity')}>Activity</button>
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

          {/* Notification Bell with Dropdown */}
          <div className={styles.notificationWrapper} ref={notifRef}>
            <button
              className={styles.iconBtn}
              aria-label="Notifications"
              onClick={() => { setShowNotifications(prev => !prev); setShowProfile(false); }}
            >
              <Bell size={20} />
              {unreadCount > 0 && (
                <span className={styles.notificationDot}>{unreadCount}</span>
              )}
            </button>

            {showNotifications && (
              <div className={styles.notifDropdown}>
                <div className={styles.notifHeader}>
                  <span className={styles.notifTitle}>Notifications</span>
                  {unreadCount > 0 && (
                    <button className={styles.markReadBtn} onClick={markAllRead}>
                      <CheckCircle size={13} />
                      <span>Mark all read</span>
                    </button>
                  )}
                </div>

                <div className={styles.notifList}>
                  {notifications.map(notif => (
                    <div
                      key={notif.id}
                      className={`${styles.notifItem} ${!notif.read ? styles.notifUnread : ''}`}
                      onClick={() => setNotifications(prev =>
                        prev.map(n => n.id === notif.id ? { ...n, read: true } : n)
                      )}
                    >
                      <span className={styles.notifIcon}>{notif.icon}</span>
                      <div className={styles.notifContent}>
                        <span className={styles.notifItemTitle}>{notif.title}</span>
                        <span className={styles.notifDesc}>{notif.desc}</span>
                        <span className={styles.notifTime}>{notif.time}</span>
                      </div>
                      {!notif.read && <div className={styles.unreadDot}></div>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Profile Avatar with Dropdown */}
          <div className={styles.avatarWrapper} ref={profileRef}>
            <button
              className={styles.avatarBtn}
              onClick={() => { setShowProfile(prev => !prev); setShowNotifications(false); }}
              title="View Profile"
              aria-label="Profile menu"
            >
              <div className={styles.avatar}>
                <span>SG</span>
              </div>
              <div className={styles.avatarLevelBadge}>{user.currentLevel}</div>
            </button>

            {showProfile && (
              <div className={styles.profileDropdown}>
                {/* Profile Header */}
                <div className={styles.profileHeader}>
                  <div className={styles.profileAvatar}>SG</div>
                  <div className={styles.profileInfo}>
                    <span className={styles.profileName}>{user.userName}</span>
                    <span className={styles.profileEmail}>yadavswathi89@gmail.com</span>
                    <span className={styles.profileTier}>💎 Diamond Champion – Level {user.currentLevel}</span>
                  </div>
                </div>

                {/* Stats Row */}
                <div className={styles.profileStats}>
                  <div className={styles.profileStat}>
                    <span className={styles.statVal}>🪙 {user.veBalance.toLocaleString()}</span>
                    <span className={styles.statLabel}>VEs Balance</span>
                  </div>
                  <div className={styles.profileStat}>
                    <span className={styles.statVal}>💎 {user.gemBalance}</span>
                    <span className={styles.statLabel}>Gems</span>
                  </div>
                  <div className={styles.profileStat}>
                    <span className={styles.statVal}>🔥 {user.streakDays}</span>
                    <span className={styles.statLabel}>Day Streak</span>
                  </div>
                </div>

                {/* Menu Items */}
                <div className={styles.profileMenu}>
                  <button className={styles.profileMenuItem} onClick={() => { setActiveScreen('activity'); setShowProfile(false); }}>
                    <Award size={16} />
                    <span>My Activity & Rewards</span>
                  </button>
                  <button className={styles.profileMenuItem} onClick={() => { setActiveScreen('earn'); setShowProfile(false); }}>
                    <Gift size={16} />
                    <span>Earn More XP</span>
                  </button>
                  <button className={styles.profileMenuItem}>
                    <Settings size={16} />
                    <span>Account Settings</span>
                  </button>
                  <div className={styles.profileDivider}></div>
                  <button className={`${styles.profileMenuItem} ${styles.logoutItem}`}>
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
