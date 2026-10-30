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
  Sparkles,
  Award,
  Zap,
  Coins,
  X
} from 'lucide-react';
import { EARN_ACTIVITIES, COMING_SOON_CONCEPTS } from '../../data/earnActivities';
import { useDashboard } from '../../context/DashboardContext';
import styles from './EarnMoreXP.module.css';

export const EarnMoreXP = ({ isFullPage = false }) => {
  const { 
    addXP, 
    addVEs, 
    setActiveScreen, 
    currentXP, 
    totalRequiredXP, 
    progressPercentage,
    user
  } = useDashboard();

  // Modals state: 'watch' | 'tasks' | 'refer' | 'streak'
  const [activeModal, setActiveModal] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [copied, setCopied] = useState(false);

  // Watch and earn video simulation state
  const [watchingAd, setWatchingAd] = useState(false);
  const [adProgress, setAdProgress] = useState(0);
  const [adCompleted, setAdCompleted] = useState(false);

  // Daily Tasks state
  const [tasksState, setTasksState] = useState([
    { id: 1, title: 'Daily Login Check-in', rewardXP: 25, rewardVEs: 5, claimed: true },
    { id: 2, title: 'Play 1 XP Catcher Arcade Round', rewardXP: 35, rewardVEs: 10, claimed: false },
    { id: 3, title: 'Watch 1 Partner Ad Video', rewardXP: 50, rewardVEs: 15, claimed: false },
    { id: 4, title: 'Invite 1 Friend to VELOOP', rewardXP: 100, rewardVEs: 25, claimed: false },
  ]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  // Activity click handler
  const handleActivityClick = (activity) => {
    if (activity.id === 'xp-catcher' || activity.id === 'mini-games') {
      setActiveScreen('game');
      return;
    }

    if (activity.id === 'watch-earn') {
      setActiveModal('watch');
      setWatchingAd(true);
      setAdCompleted(false);
      setAdProgress(0);

      let p = 0;
      const interval = setInterval(() => {
        p += 20;
        setAdProgress(p);
        if (p >= 100) {
          clearInterval(interval);
          setWatchingAd(false);
          setAdCompleted(true);
          addXP(50, 'Watch & Earn Video Reward', 'Media');
          addVEs(15, 'Video Ad Token Bonus');
          showToast('🎉 +50 XP and +15 VEs credited to your balance!');
        }
      }, 600);
      return;
    }

    if (activity.id === 'daily-missions') {
      setActiveModal('tasks');
      return;
    }

    if (activity.id === 'refer-earn') {
      setActiveModal('refer');
      return;
    }

    if (activity.id === 'streak-bonus') {
      setActiveModal('streak');
      addXP(25, 'Daily Login Streak Claimed', 'Loyalty');
      addVEs(15, 'Streak Coin Bonus');
      showToast('🔥 Streak maintained! +25 XP and +15 VEs credited!');
      return;
    }
  };

  // Claim specific daily task
  const claimTask = (task) => {
    if (task.claimed) return;
    addXP(task.rewardXP, task.title, 'Tasks');
    addVEs(task.rewardVEs, `${task.title} Bonus`);
    setTasksState(prev => prev.map(t => t.id === task.id ? { ...t, claimed: true } : t));
    showToast(`✅ Claimed +${task.rewardXP} XP and +${task.rewardVEs} VEs!`);
  };

  // Copy referral link
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
      {/* Live Toast Notification */}
      {toastMessage && (
        <div className={styles.toast}>
          {toastMessage}
        </div>
      )}

      {/* Header – Screen 1 & Screen 4 */}
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

      {/* Activities Grid – Screen 1 (2x3) & Screen 4 (Full List) */}
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

      {/* Motivational Footer Banner – Screen 4 */}
      <div className={styles.motivationalBanner}>
        <div className={styles.bannerText}>
          <span className={styles.bannerEmoji}>🏆</span>
          <div>
            <span className={styles.bannerTitle}>Keep going! You're doing great!</span>
            <span className={styles.bannerSub}>
              {currentXP.toLocaleString()} / {totalRequiredXP.toLocaleString()} XP to Level 06
            </span>
          </div>
        </div>
        <div className={styles.bannerBar}>
          <div className={styles.bannerFill} style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>

      {/* ─── MODAL 1: Watch & Earn Interactive Simulation ─── */}
      {activeModal === 'watch' && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalBox}>
            <div className={styles.modalTopRow}>
              <h4 className={styles.modalTitle}>Watch &amp; Earn Video Hub</h4>
              <button className={styles.modalCloseIcon} onClick={() => setActiveModal(null)}>
                <X size={18} />
              </button>
            </div>
            
            <p className={styles.modalSub}>
              Watch our 5-second sponsor spotlight to unlock <strong style={{ color: '#FBBF24' }}>+50 XP</strong> and <strong style={{ color: '#FBBF24' }}>+15 VEs</strong>!
            </p>

            <div className={styles.adVideoPlaceholder}>
              {watchingAd ? (
                <>
                  <div className={styles.videoPlayingGraphic}>
                    <PlayCircle size={44} className="float-effect" />
                    <span>Streaming Sponsor Clip... {adProgress}%</span>
                  </div>
                  <div className={styles.adProgressBar}>
                    <div className={styles.adProgressFill} style={{ width: `${adProgress}%` }}></div>
                  </div>
                </>
              ) : (
                <div className={styles.videoFinishedGraphic}>
                  <div className={styles.bigCheckGlow}>✓</div>
                  <span className={styles.rewardGrantText}>🎉 Video Finished! +50 XP &amp; +15 VEs Added!</span>
                  <span className={styles.liveBalanceNotice}>Live XP: {currentXP.toLocaleString()} XP</span>
                </div>
              )}
            </div>

            <div className={styles.modalActionGroup}>
              {adCompleted ? (
                <button 
                  className={styles.modalPrimaryBtn}
                  onClick={() => { setActiveModal(null); setActiveScreen('dashboard'); }}
                >
                  <ArrowLeft size={16} />
                  <span>Back to Dashboard</span>
                </button>
              ) : (
                <span className={styles.adFooterNote}>Reward automatically credits to your account upon completion.</span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ─── MODAL 2: Daily Tasks Interactive Checklist ─── */}
      {activeModal === 'tasks' && (
        <div className={styles.modalBackdrop} onClick={() => setActiveModal(null)}>
          <div className={styles.modalBox} onClick={e => e.stopPropagation()}>
            <div className={styles.modalTopRow}>
              <div className={styles.modalTitleGroup}>
                <CheckCircle2 size={20} className={styles.iconDaily} />
                <h4 className={styles.modalTitle}>Daily Task Rewards</h4>
              </div>
              <button className={styles.modalCloseIcon} onClick={() => setActiveModal(null)}>
                <X size={18} />
              </button>
            </div>

            <p className={styles.modalSub}>Complete today's missions to earn XP and boost your progression level!</p>

            <div className={styles.tasksList}>
              {tasksState.map(task => (
                <div key={task.id} className={styles.taskItem}>
                  <div className={styles.taskInfoCol}>
                    <span className={styles.taskItemTitle}>{task.title}</span>
                    <span className={styles.taskRewardBadges}>
                      <span className={styles.xpPill}>+{task.rewardXP} XP</span>
                      <span className={styles.vePill}>+{task.rewardVEs} VEs</span>
                    </span>
                  </div>

                  <button 
                    className={task.claimed ? styles.claimedBtn : styles.claimTaskBtn}
                    onClick={() => claimTask(task)}
                    disabled={task.claimed}
                  >
                    {task.claimed ? '✓ Claimed' : 'Claim'}
                  </button>
                </div>
              ))}
            </div>

            <button 
              className={styles.modalPrimaryBtn}
              onClick={() => { setActiveModal(null); setActiveScreen('dashboard'); }}
            >
              <ArrowLeft size={16} />
              <span>Back to Dashboard</span>
            </button>
          </div>
        </div>
      )}

      {/* ─── MODAL 3: Refer & Earn ─── */}
      {activeModal === 'refer' && (
        <div className={styles.modalBackdrop} onClick={() => setActiveModal(null)}>
          <div className={styles.modalBox} onClick={e => e.stopPropagation()}>
            <div className={styles.modalTopRow}>
              <h4 className={styles.modalTitle}>Invite Friends &amp; Earn</h4>
              <button className={styles.modalCloseIcon} onClick={() => setActiveModal(null)}>
                <X size={18} />
              </button>
            </div>

            <p className={styles.modalSub}>Share your exclusive link! Earn +100 XP and +25 VEs for every friend who joins.</p>

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
              className={styles.modalPrimaryBtn}
              onClick={() => { setActiveModal(null); setActiveScreen('dashboard'); }}
            >
              <ArrowLeft size={16} />
              <span>Back to Dashboard</span>
            </button>
          </div>
        </div>
      )}

      {/* ─── MODAL 4: Streak Bonus Celebration ─── */}
      {activeModal === 'streak' && (
        <div className={styles.modalBackdrop} onClick={() => setActiveModal(null)}>
          <div className={styles.modalBox} onClick={e => e.stopPropagation()}>
            <div className={styles.streakCelebrateGraphic}>
              <Flame size={48} className={styles.streakFlameAnimated} />
              <h4 className={styles.modalTitle}>7 Days Streak Unlocked!</h4>
              <p className={styles.modalSub}>You've maintained your daily check-in streak. +25 XP and +15 VEs have been added to your profile.</p>
            </div>

            <button 
              className={styles.modalPrimaryBtn}
              onClick={() => { setActiveModal(null); setActiveScreen('dashboard'); }}
            >
              <ArrowLeft size={16} />
              <span>Back to Dashboard</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
