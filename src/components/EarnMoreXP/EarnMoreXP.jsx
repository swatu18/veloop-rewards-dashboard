import React, { useState } from 'react';
import { 
  PlayCircle, 
  CheckCircle2, 
  Users, 
  Gamepad2, 
  Flame, 
  Crosshair, 
  ArrowRight, 
  Compass, 
  HelpCircle, 
  ShieldAlert, 
  Check, 
  ArrowLeft,
  Share2,
  Copy,
  Sparkles
} from 'lucide-react';
import { EARN_ACTIVITIES, COMING_SOON_CONCEPTS } from '../../data/earnActivities';
import { useDashboard } from '../../context/DashboardContext';
import styles from './EarnMoreXP.module.css';

export const EarnMoreXP = ({ isFullPage = false }) => {
  const { addXP, addVEs, setActiveScreen, currentXP, totalRequiredXP, progressPercentage } = useDashboard();
  const [activeModal, setActiveModal] = useState(null); // 'watch' | 'refer' | 'daily' | 'toast'
  const [toastMessage, setToastMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [watchingAd, setWatchingAd] = useState(false);
  const [adProgress, setAdProgress] = useState(0);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleActivityClick = (activity) => {
    if (activity.id === 'xp-catcher') {
      setActiveScreen('game');
      return;
    }

    if (activity.id === 'watch-earn') {
      setActiveModal('watch');
      setWatchingAd(true);
      setAdProgress(0);
      let p = 0;
      const interval = setInterval(() => {
        p += 25;
        setAdProgress(p);
        if (p >= 100) {
          clearInterval(interval);
          setWatchingAd(false);
          addXP(50, 'Watch & Earn Video Reward', 'Media');
          addVEs(10, 'Video Ad Bonus');
          showToast('🎉 Video watched! +50 XP and +10 VEs awarded!');
          setTimeout(() => setActiveModal(null), 800);
        }
      }, 500);
      return;
    }

    if (activity.id === 'refer-earn') {
      setActiveModal('refer');
      return;
    }

    if (activity.id === 'streak-bonus') {
      addXP(25, 'Daily Login Streak Claimed', 'Loyalty');
      addVEs(15, 'Streak Coin Bonus');
      showToast('🔥 Streak maintained! +25 XP and +15 VEs awarded!');
      return;
    }

    if (activity.id === 'daily-missions') {
      addXP(30, 'Daily Mission Complete', 'Tasks');
      showToast('✅ Daily mission milestone reached! +30 XP awarded!');
      return;
    }

    if (activity.id === 'mini-games') {
      setActiveScreen('game');
      return;
    }
  };

  const copyReferralLink = () => {
    navigator.clipboard?.writeText('https://veloop.app/ref/swathi-g-77');
    setCopied(true);
    addXP(100, 'Friend Referral Milestone', 'Social');
    showToast('🚀 Link copied! +100 XP referral bonus activated!');
    setTimeout(() => setCopied(false), 2000);
  };

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'play-circle': return <PlayCircle size={22} className={styles.iconWatch} />;
      case 'check-circle-2': return <CheckCircle2 size={22} className={styles.iconDaily} />;
      case 'users': return <Users size={22} className={styles.iconRefer} />;
      case 'gamepad-2': return <Gamepad2 size={22} className={styles.iconGames} />;
      case 'flame': return <Flame size={22} className={styles.iconStreak} />;
      case 'crosshair': return <Crosshair size={22} className={styles.iconCatcher} />;
      case 'compass': return <Compass size={22} />;
      case 'help-circle': return <HelpCircle size={22} />;
      case 'shield-alert': return <ShieldAlert size={22} />;
      default: return <Sparkles size={22} />;
    }
  };

  return (
    <div className={styles.earnWrapper}>
      {/* Toast Notification */}
      {toastMessage && (
        <div className={styles.toast}>
          {toastMessage}
        </div>
      )}

      {/* Header */}
      {isFullPage ? (
        <div className={styles.fullPageHeader}>
          <button 
            className={styles.backBtn}
            onClick={() => setActiveScreen('dashboard')}
            aria-label="Back to Dashboard"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h2 className={styles.fullTitle}>EARN & LEVEL UP</h2>
            <p className={styles.fullSub}>Complete activities. Earn XP. Climb levels. Get rewards.</p>
          </div>
        </div>
      ) : (
        <div className={styles.sectionHeader}>
          <div>
            <h3 className={styles.sectionTitle}>EARN MORE</h3>
            <p className={styles.sectionSubtitle}>Explore fun activities and earn exciting rewards.</p>
          </div>
          <button 
            className={styles.expandBtn}
            onClick={() => setActiveScreen('earn')}
            aria-label="View all earn activities"
            title="View All Activities"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      )}

      {/* Activities List / Grid */}
      <div className={isFullPage ? styles.fullList : styles.cardsGrid}>
        {EARN_ACTIVITIES.map((activity) => (
          <div 
            key={activity.id}
            className={`${styles.activityCard} ${activity.featured ? styles.featuredCard : ''}`}
            onClick={() => handleActivityClick(activity)}
            role="button"
            tabIndex={0}
          >
            <div className={styles.iconContainer}>
              {renderIcon(activity.icon)}
            </div>

            <div className={styles.cardDetails}>
              <div className={styles.cardTitleRow}>
                <span className={styles.cardTitle}>{activity.title}</span>
                <span className={styles.xpBadge}>{activity.badge}</span>
              </div>
              <span className={styles.cardSubtitle}>{activity.subtitle}</span>
            </div>

            <div className={styles.chevronCol}>
              <ArrowRight size={16} className={styles.chevronIcon} />
            </div>
          </div>
        ))}
      </div>

      {/* Coming Soon Concepts Section */}
      <div className={styles.comingSoonArea}>
        <div className={styles.comingSoonHeader}>
          <span className={styles.comingSoonTitle}>UPCOMING EARNING OPPORTUNITIES</span>
          <span className={styles.conceptBadge}>Concepts / Under Testing</span>
        </div>

        <div className={styles.comingSoonGrid}>
          {COMING_SOON_CONCEPTS.map((concept) => (
            <div key={concept.id} className={styles.conceptCard}>
              <div className={styles.conceptIconWrap}>
                {renderIcon(concept.icon)}
              </div>
              <div className={styles.conceptInfo}>
                <span className={styles.conceptName}>{concept.title}</span>
                <span className={styles.conceptDesc}>{concept.subtitle}</span>
              </div>
              <span className={styles.comingSoonTag}>Coming Soon</span>
            </div>
          ))}
        </div>
      </div>

      {/* Motivational Footer Banner */}
      <div className={styles.motivationalBanner}>
        <div className={styles.bannerText}>
          <span className={styles.bannerEmoji}>🏆</span>
          <div>
            <span className={styles.bannerTitle}>Keep going! You're doing great!</span>
            <span className={styles.bannerSub}>{currentXP.toLocaleString()} / {totalRequiredXP.toLocaleString()} XP to Level 06</span>
          </div>
        </div>
        <div className={styles.bannerBar}>
          <div className={styles.bannerFill} style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>

      {/* Watch Video Simulation Modal */}
      {activeModal === 'watch' && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalBox}>
            <h4 className={styles.modalTitle}>Watching Partner Showcase...</h4>
            <p className={styles.modalSub}>VELOOP Rewards Partner Spotlight (5 seconds)</p>
            <div className={styles.adVideoPlaceholder}>
              <PlayCircle size={48} className="float-effect" />
              <span>Simulating Video Stream... {adProgress}%</span>
              <div className={styles.adProgressBar}>
                <div className={styles.adProgressFill} style={{ width: `${adProgress}%` }}></div>
              </div>
            </div>
            <span className={styles.adFooterNote}>Reward of +50 XP and +10 VEs will automatically credit upon finish.</span>
          </div>
        </div>
      )}

      {/* Referral Link Modal */}
      {activeModal === 'refer' && (
        <div className={styles.modalBackdrop} onClick={() => setActiveModal(null)}>
          <div className={styles.modalBox} onClick={e => e.stopPropagation()}>
            <h4 className={styles.modalTitle}>Invite Friends & Earn</h4>
            <p className={styles.modalSub}>Earn +100 XP and +25 VEs for each friend who joins!</p>
            <div className={styles.copyBox}>
              <input 
                type="text" 
                readOnly 
                value="https://veloop.app/ref/swathi-g-77" 
                className={styles.copyInput} 
              />
              <button 
                className={styles.copyBtn}
                onClick={copyReferralLink}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <button 
              className={styles.modalCloseBtn}
              onClick={() => setActiveModal(null)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
