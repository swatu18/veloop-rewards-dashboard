import React from 'react';
import { ArrowLeft, Share2, Star, Trophy, Sparkles, Award, RefreshCw, LayoutDashboard } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import styles from './Game.module.css';

export const GameResult = ({ onPlayAgain, onBackToDashboard }) => {
  const { 
    lastGameResult, 
    user, 
    currentXP, 
    totalRequiredXP, 
    progressPercentage 
  } = useDashboard();

  const nextLevel = user.currentLevel + 1;
  const formattedNextLevel = nextLevel < 10 ? `0${nextLevel}` : `${nextLevel}`;
  const formattedCurLevel = user.currentLevel < 10 ? `0${user.currentLevel}` : `${user.currentLevel}`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'VELOOP Rewards – XP Catcher',
        text: `I just scored ${lastGameResult.score} on VELOOP XP Catcher and unlocked +${lastGameResult.xpEarned} XP!`,
        url: window.location.href
      }).catch(() => {});
    } else {
      alert(`Score copied! You scored ${lastGameResult.score} on VELOOP XP Catcher!`);
    }
  };

  return (
    <div className={styles.resultContainer}>
      {/* Top Header matching Screen 3 */}
      <div className={styles.resultTopBar}>
        <button 
          className={styles.backBtn}
          onClick={onBackToDashboard}
          aria-label="Back to Dashboard"
        >
          <ArrowLeft size={20} />
        </button>

        <span className={styles.resultHeaderTitle}>CHALLENGE COMPLETE</span>

        <button 
          className={styles.backBtn}
          onClick={handleShare}
          title="Share Score"
          aria-label="Share Score"
        >
          <Share2 size={18} />
        </button>
      </div>

      <div className={styles.resultHeroArea}>
        <h2 className={styles.completionHeading}>CHALLENGE COMPLETE!</h2>
        <p className={styles.completionSub}>Outstanding!</p>

        {/* 3D Glowing Laurel Trophy Medallion */}
        <div className={styles.trophyWrapper}>
          <div className={styles.trophyGlow}></div>
          
          <svg viewBox="0 0 160 160" className={styles.trophySvg} fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="goldTrophy" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFBEB" />
                <stop offset="40%" stopColor="#FBBF24" />
                <stop offset="80%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#78350F" />
              </linearGradient>
              <filter id="trophyGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Glowing Laurel Wreath Wings */}
            <path
              d="M 38 120 C 15 90 20 45 50 30 M 30 75 Q 18 78 26 88 M 32 95 Q 22 98 28 108"
              stroke="url(#goldTrophy)"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              filter="url(#trophyGlowFilter)"
            />
            <path
              d="M 122 120 C 145 90 140 45 110 30 M 130 75 Q 142 78 134 88 M 128 95 Q 138 98 132 108"
              stroke="url(#goldTrophy)"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              filter="url(#trophyGlowFilter)"
            />

            {/* Central Star Shield */}
            <circle cx="80" cy="80" r="44" fill="#1E2238" stroke="url(#goldTrophy)" strokeWidth="4" />
            <polygon 
              points="80,48 89,68 111,70 94,84 99,106 80,94 61,106 66,84 49,70 71,68" 
              fill="url(#goldTrophy)" 
            />

            {/* 3 Floating Top Stars */}
            <polygon points="56,26 59,33 66,34 61,39 62,46 56,42 50,46 51,39 46,34 53,33" fill="#FDE68A" />
            <polygon points="80,14 84,23 93,24 86,30 88,39 80,34 72,39 74,30 67,24 76,23" fill="#FFFBEB" />
            <polygon points="104,26 107,33 114,34 109,39 110,46 104,42 98,46 99,39 94,34 101,33" fill="#FDE68A" />
          </svg>
        </div>

        {/* Final Score Banner with New Best badge */}
        <div className={styles.scoreBanner}>
          <span className={styles.scoreTitle}>FINAL SCORE</span>
          <div className={styles.scoreRow}>
            <span className={styles.bigScore}>{lastGameResult.score}</span>
            {lastGameResult.isNewBest && (
              <span className={styles.newBestPill}>
                <Sparkles size={11} />
                <span>New Best!</span>
              </span>
            )}
          </div>
        </div>

        {/* Rewards Earned Cards */}
        <div className={styles.earnedRewardsGrid}>
          <div className={styles.earnedCard}>
            <span className={styles.earnedAmount}>+{lastGameResult.xpEarned} XP</span>
            <span className={styles.earnedLabel}>Experience</span>
          </div>

          <div className={styles.earnedCard}>
            <span className={styles.earnedAmount}>+{lastGameResult.vesEarned} VEs</span>
            <span className={styles.earnedLabel}>Your Reward</span>
          </div>
        </div>

        {/* Progress Preview Bar */}
        <div className={styles.resultProgressSection}>
          <div className={styles.progressTierLabels}>
            <span>Level {formattedCurLevel}</span>
            <span>Level {formattedNextLevel}</span>
          </div>
          <div className={styles.resultProgressTrack}>
            <div 
              className={styles.resultProgressFill}
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className={styles.progressDetail}>
            <span>{currentXP.toLocaleString()} / {totalRequiredXP.toLocaleString()} XP</span>
            <span>{progressPercentage}% Completed</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className={styles.resultBtnGroup}>
          <button 
            className={styles.playAgainBtn}
            onClick={onPlayAgain}
          >
            <RefreshCw size={17} />
            <span>Play Again</span>
          </button>

          <button 
            className={styles.backDashboardBtn}
            onClick={onBackToDashboard}
          >
            <LayoutDashboard size={17} />
            <span>Back to Dashboard</span>
          </button>
        </div>
      </div>
    </div>
  );
};
