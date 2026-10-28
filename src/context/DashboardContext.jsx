import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { INITIAL_USER_STATE, LEVEL_ROADMAP } from '../data/levelData';
import { INITIAL_ACTIVITY_HISTORY } from '../data/activityHistory';
import { EARN_ACTIVITIES } from '../data/earnActivities';
import { sounds } from '../utils/soundEffects';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [user, setUser] = useState(INITIAL_USER_STATE);
  const [activities, setActivities] = useState(EARN_ACTIVITIES);
  const [history, setHistory] = useState(INITIAL_ACTIVITY_HISTORY);
  
  // Navigation / View modes (Screen switching for mobile + full desktop layout)
  const [activeScreen, setActiveScreen] = useState('dashboard'); // 'dashboard', 'game', 'result', 'earn', 'activity'
  
  // Modals & States
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
  const [levelUpData, setLevelUpData] = useState(null);
  const [activeInfoModal, setActiveInfoModal] = useState(null); // 'level' | 'reward' | null
  
  // Demo States (for Section 40, 41, 42 evaluation)
  const [demoState, setDemoState] = useState('normal'); // 'normal' | 'loading' | 'empty' | 'error'
  
  // Mini Game Result State
  const [lastGameResult, setLastGameResult] = useState({
    score: 92,
    xpEarned: 30,
    vesEarned: 12,
    isNewBest: true
  });

  // Sound settings
  const [soundEnabled, setSoundEnabled] = useState(true);

  const toggleSound = () => {
    const next = sounds.toggleSound();
    setSoundEnabled(next);
  };

  // XP & Progress calculations
  const totalRequiredXP = user.nextLevelXP; // e.g. 8000
  const currentXP = user.currentXP; // e.g. 6420
  const xpRemaining = Math.max(0, totalRequiredXP - currentXP); // e.g. 1580
  const progressPercentage = Math.min(100, Math.round((currentXP / totalRequiredXP) * 100)); // ~80%

  // Add XP action
  const addXP = (amount, sourceTitle, sourceCategory = 'XP') => {
    sounds.playCoinSound();
    const newXP = user.currentXP + amount;
    const newEarnedToday = user.xpEarnedToday + amount;
    
    // Check for level up
    if (newXP >= user.nextLevelXP) {
      triggerLevelUp(user.currentLevel + 1);
    } else {
      setUser(prev => ({
        ...prev,
        currentXP: newXP,
        xpEarnedToday: newEarnedToday
      }));
    }

    // Add to activity history
    const newEntry = {
      id: `act-${Date.now()}`,
      type: sourceCategory.toLowerCase(),
      title: sourceTitle,
      subtitle: `Completed activity milestone`,
      rewardText: `+${amount} XP`,
      category: 'XP',
      amount,
      unit: 'XP',
      timestamp: 'Just now',
      date: new Date().toISOString()
    };
    setHistory(prev => [newEntry, ...prev]);
  };

  // Add VEs action
  const addVEs = (amount, sourceTitle) => {
    sounds.playCoinSound();
    setUser(prev => ({
      ...prev,
      veBalance: prev.veBalance + amount,
      vesEarnedToday: prev.vesEarnedToday + amount
    }));

    const newEntry = {
      id: `act-${Date.now()}`,
      type: 'reward',
      title: sourceTitle,
      subtitle: `Rewards credit added to wallet`,
      rewardText: `+${amount} VEs`,
      category: 'VEs',
      amount,
      unit: 'VEs',
      timestamp: 'Just now',
      date: new Date().toISOString()
    };
    setHistory(prev => [newEntry, ...prev]);
  };

  // Trigger Level Up Celebration
  const triggerLevelUp = (targetLevel = user.currentLevel + 1) => {
    sounds.playLevelUpFanfare();
    
    // Confetti burst
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#FBBF24', '#8B5CF6', '#38BDF8', '#FFFFFF']
      });
      setTimeout(() => {
        confetti({
          particleCount: 80,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#F59E0B', '#FBBF24', '#FDE68A']
        });
        confetti({
          particleCount: 80,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#8B5CF6', '#38BDF8', '#10B981']
        });
      }, 300);
    } catch {
      // Confetti fallback
    }

    setLevelUpData({
      level: targetLevel,
      veReward: 500,
      gemReward: 25,
      perks: [
        'Higher daily XP earning limit (+500 XP/day)',
        'Instant access to new arcade challenges',
        'Better reward opportunities & 10% lower shop redemption rates'
      ]
    });

    setUser(prev => ({
      ...prev,
      currentLevel: targetLevel,
      currentXP: targetLevel === 5 ? 6420 : 0,
      nextLevelXP: targetLevel * 2000
    }));

    setIsLevelUpModalOpen(true);
  };

  // Claim Level Up Rewards
  const claimLevelUpRewards = () => {
    if (levelUpData) {
      sounds.playGemSound();
      setUser(prev => ({
        ...prev,
        veBalance: prev.veBalance + levelUpData.veReward,
        gemBalance: prev.gemBalance + levelUpData.gemReward
      }));

      setHistory(prev => [
        {
          id: `act-${Date.now()}-1`,
          type: 'level_reward',
          title: `Level ${levelUpData.level} Reward Unlocked`,
          subtitle: `Claimed milestone bonus`,
          rewardText: `+${levelUpData.veReward} VEs`,
          category: 'VEs',
          amount: levelUpData.veReward,
          unit: 'VEs',
          timestamp: 'Just now',
          date: new Date().toISOString()
        },
        ...prev
      ]);
    }
    setIsLevelUpModalOpen(false);
  };

  // Handle Game Completion — keep activeScreen='game' so GameContainer manages stages
  const completeGame = (score, xpEarned, vesEarned) => {
    setLastGameResult({
      score,
      xpEarned,
      vesEarned,
      isNewBest: score > 85
    });

    addXP(xpEarned, 'XP Catcher Game Challenge', 'Game');
    addVEs(vesEarned, 'XP Catcher Arcade Bonus');
    // Do NOT setActiveScreen here — GameContainer handles stage internally
  };

  // Reset Demo State
  const resetDemo = () => {
    setUser(INITIAL_USER_STATE);
    setHistory(INITIAL_ACTIVITY_HISTORY);
    setDemoState('normal');
    setActiveScreen('dashboard');
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        setUser,
        activities,
        setActivities,
        history,
        setHistory,
        activeScreen,
        setActiveScreen,
        isLevelUpModalOpen,
        setIsLevelUpModalOpen,
        levelUpData,
        triggerLevelUp,
        claimLevelUpRewards,
        activeInfoModal,
        setActiveInfoModal,
        demoState,
        setDemoState,
        lastGameResult,
        completeGame,
        soundEnabled,
        toggleSound,
        resetDemo,
        totalRequiredXP,
        currentXP,
        xpRemaining,
        progressPercentage
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};
