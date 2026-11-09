import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  X, 
  User, 
  Edit3, 
  Trophy, 
  Gamepad2, 
  Gift, 
  PlayCircle, 
  CheckCircle2, 
  Sparkles, 
  Sun, 
  Moon, 
  Volume2, 
  VolumeX, 
  LogOut, 
  LogIn, 
  Home, 
  Check 
} from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import { useAuth } from '../../context/AuthContext';
import { VeloopLogo } from '../common/VeloopLogo';
import { LevelBadge } from '../Badges/LevelBadge';
import styles from './NavigationDrawer.module.css';

export const NavigationDrawer = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { 
    user, 
    setUser, 
    theme, 
    toggleTheme, 
    soundEnabled, 
    toggleSound, 
    activeScreen, 
    setActiveScreen, 
    setIsSpinModalOpen 
  } = useDashboard();
  
  const { currentUser, isAuthenticated, signOut, openAuthModal } = useAuth();

  // Edit Profile modal state
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileName, setProfileName] = useState(currentUser?.name || user.userName || 'Swathi G');
  const [profileEmail, setProfileEmail] = useState(currentUser?.email || 'yadavswathi89@gmail.com');
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!isOpen) return null;

  const handleNav = (screen, route = '/Lvl-Dashboard', targetId = null) => {
    setActiveScreen(screen);
    navigate(route);
    onClose();
    if (targetId) {
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  };

  const handleOpenSpinWheel = () => {
    onClose();
    setIsSpinModalOpen(true);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setUser(prev => ({
      ...prev,
      userName: profileName
    }));
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      setIsEditingProfile(false);
    }, 1200);
  };

  const displayName = currentUser?.name || user.userName || 'Swathi G';
  const displayEmail = currentUser?.email || 'yadavswathi89@gmail.com';
  const displayAvatar = (displayName || 'VL').slice(0, 2).toUpperCase();

  return (
    <>
      {/* ── Slide-Out Drawer Backdrop ── */}
      <div className={styles.backdrop} onClick={onClose}>
        <div className={styles.drawerCard} onClick={e => e.stopPropagation()}>
          {/* Drawer Top Header */}
          <div className={styles.drawerHeader}>
            <VeloopLogo size="normal" />
            <button 
              className={styles.closeBtn} 
              onClick={onClose}
              aria-label="Close Menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* User Profile Card */}
          <div className={styles.profileSection}>
            <div className={styles.avatarCol}>
              <div className={styles.avatarCircle}>
                <span>{displayAvatar}</span>
                <span className={styles.levelBadgePill}>L{user.currentLevel}</span>
              </div>
            </div>

            <div className={styles.profileDetailsCol}>
              <div className={styles.nameRow}>
                <h4 className={styles.profileName}>{displayName}</h4>
                <button 
                  className={styles.editProfileBtn}
                  onClick={() => setIsEditingProfile(true)}
                  title="Edit Your Profile"
                >
                  <Edit3 size={13} />
                  <span>Edit</span>
                </button>
              </div>
              <span className={styles.profileEmail}>{displayEmail}</span>
              <span className={styles.profileTier}>★ Level 05 • Diamond Champion</span>
            </div>
          </div>

          {/* Quick Wallet Bar */}
          <div className={styles.walletBar}>
            <div className={styles.walletItem}>
              <span className={styles.walletLabel}>XP Balance</span>
              <span className={styles.walletValGold}>{user.currentXP.toLocaleString()} XP</span>
            </div>
            <div className={styles.walletDivider} />
            <div className={styles.walletItem}>
              <span className={styles.walletLabel}>VEs Tokens</span>
              <span className={styles.walletVal}>{user.veBalance.toLocaleString()} VEs</span>
            </div>
            <div className={styles.walletDivider} />
            <div className={styles.walletItem}>
              <span className={styles.walletLabel}>Gems</span>
              <span className={styles.walletValCyan}>{user.gemBalance} 💎</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className={styles.navMenu}>
            <span className={styles.navCategory}>GAMING &amp; PROGRESSION</span>

            {/* Daily Lucky Spin Wheel Action Button */}
            <button 
              className={`${styles.navItem} ${styles.spinSpecialNavItem}`}
              onClick={handleOpenSpinWheel}
            >
              <div className={styles.navItemLeft}>
                <span className={styles.spinEmoji}>🎡</span>
                <span>Daily Lucky Spin Wheel</span>
              </div>
              <span className={styles.specialBadge}>SPIN NOW</span>
            </button>

            <button 
              className={`${styles.navItem} ${activeScreen === 'dashboard' ? styles.activeItem : ''}`}
              onClick={() => handleNav('dashboard', '/Lvl-Dashboard', 'hero-section')}
            >
              <div className={styles.navItemLeft}>
                <Home size={18} className={styles.navIcon} />
                <span>Level Dashboard</span>
              </div>
            </button>

            <button 
              className={`${styles.navItem} ${activeScreen === 'game' ? styles.activeItem : ''}`}
              onClick={() => handleNav('game')}
            >
              <div className={styles.navItemLeft}>
                <Gamepad2 size={18} className={styles.navIcon} />
                <span>Play "XP Catcher" (60 FPS)</span>
              </div>
            </button>

            <button 
              className={styles.navItem}
              onClick={() => handleNav('dashboard', '/Lvl-Dashboard', 'roadmap-section')}
            >
              <div className={styles.navItemLeft}>
                <Trophy size={18} className={styles.navIcon} />
                <span>Progression Roadmap &amp; Badges</span>
              </div>
            </button>

            <button 
              className={styles.navItem}
              onClick={() => handleNav('dashboard', '/Lvl-Dashboard', 'vault-section')}
            >
              <div className={styles.navItemLeft}>
                <Gift size={18} className={styles.navIcon} />
                <span>Level 06 Mystery Vault</span>
              </div>
            </button>

            <span className={styles.navCategory}>EARN &amp; ACTIVITIES</span>

            <button 
              className={`${styles.navItem} ${activeScreen === 'earn' ? styles.activeItem : ''}`}
              onClick={() => handleNav('earn')}
            >
              <div className={styles.navItemLeft}>
                <PlayCircle size={18} className={styles.navIcon} />
                <span>Watch &amp; Earn Video Hub</span>
              </div>
              <span className={styles.rewardTag}>+50 XP</span>
            </button>

            <button 
              className={`${styles.navItem} ${activeScreen === 'earn' ? styles.activeItem : ''}`}
              onClick={() => handleNav('earn')}
            >
              <div className={styles.navItemLeft}>
                <CheckCircle2 size={18} className={styles.navIcon} />
                <span>Daily Task Missions</span>
              </div>
            </button>

            <span className={styles.navCategory}>PREFERENCES</span>

            {/* Dark / Light Theme Toggle */}
            <div className={styles.preferenceRow}>
              <div className={styles.prefLeft}>
                {theme === 'dark' ? <Moon size={17} /> : <Sun size={17} />}
                <span>{theme === 'dark' ? 'Dark Obsidian Theme' : 'Light Executive Theme'}</span>
              </div>
              <button className={styles.themeTogglePill} onClick={toggleTheme}>
                <span>{theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}</span>
              </button>
            </div>

            {/* Audio Toggle */}
            <div className={styles.preferenceRow}>
              <div className={styles.prefLeft}>
                {soundEnabled ? <Volume2 size={17} /> : <VolumeX size={17} />}
                <span>Arcade Audio Synthesizer</span>
              </div>
              <button className={styles.themeTogglePill} onClick={toggleSound}>
                <span>{soundEnabled ? 'Enabled' : 'Muted'}</span>
              </button>
            </div>
          </div>

          {/* Drawer Footer Auth */}
          <div className={styles.drawerFooter}>
            {isAuthenticated ? (
              <button className={styles.signOutBtn} onClick={() => { signOut(); onClose(); }}>
                <LogOut size={16} />
                <span>Sign Out of Account</span>
              </button>
            ) : (
              <button className={styles.signInBtn} onClick={() => { onClose(); openAuthModal('signin'); }}>
                <LogIn size={16} />
                <span>Sign In / Create Account</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Edit Profile Modal ── */}
      {isEditingProfile && (
        <div className={styles.editBackdrop} onClick={() => setIsEditingProfile(false)}>
          <div className={styles.editModalBox} onClick={e => e.stopPropagation()}>
            <div className={styles.editModalHeader}>
              <div className={styles.editTitleGroup}>
                <Edit3 size={18} className={styles.goldText} />
                <h4 className={styles.editModalTitle}>Edit Your Profile</h4>
              </div>
              <button 
                className={styles.closeBtn}
                onClick={() => setIsEditingProfile(false)}
              >
                <X size={18} />
              </button>
            </div>

            <p className={styles.editModalSub}>
              Update your display name and email address visible on your VELOOP gaming profile.
            </p>

            <form onSubmit={handleSaveProfile} className={styles.editForm}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Full Name</label>
                <input 
                  type="text" 
                  value={profileName}
                  onChange={e => setProfileName(e.target.value)}
                  className={styles.textInput}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>Email Address</label>
                <input 
                  type="email" 
                  value={profileEmail}
                  onChange={e => setProfileEmail(e.target.value)}
                  className={styles.textInput}
                  required
                />
              </div>

              <div className={styles.editActions}>
                <button 
                  type="button" 
                  className={styles.cancelBtn}
                  onClick={() => setIsEditingProfile(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className={styles.saveBtn}
                  disabled={saveSuccess}
                >
                  {saveSuccess ? (
                    <>
                      <Check size={16} />
                      <span>Changes Saved!</span>
                    </>
                  ) : (
                    <span>Save Profile Changes</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
