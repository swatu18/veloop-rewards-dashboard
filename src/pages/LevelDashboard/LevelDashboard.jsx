import React from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { LevelHero } from '../../components/LevelHero/LevelHero';
import { TodaysBoost } from '../../components/TodaysBoost/TodaysBoost';
import { EarnMoreXP } from '../../components/EarnMoreXP/EarnMoreXP';
import { NextLevelReward } from '../../components/NextLevelReward/NextLevelReward';
import { LevelRoadmap } from '../../components/LevelRoadmap/LevelRoadmap';
import { GameContainer } from '../../components/PlayAndEarn/GameContainer';
import { XPActivity } from '../../components/XPActivity/XPActivity';
import { LoadingSkeleton } from '../../components/States/LoadingSkeleton';
import { EmptyState } from '../../components/States/EmptyState';
import { ErrorState } from '../../components/States/ErrorState';
import styles from './LevelDashboard.module.css';

export const LevelDashboard = () => {
  const { demoState, activeScreen } = useDashboard();

  // Handle Demo UX States (Sections 40, 41, 42)
  if (demoState === 'loading') {
    return (
      <main className={styles.mainContainer}>
        <LoadingSkeleton />
      </main>
    );
  }

  if (demoState === 'error') {
    return (
      <main className={styles.mainContainer}>
        <ErrorState />
      </main>
    );
  }

  if (demoState === 'empty') {
    return (
      <main className={styles.mainContainer}>
        <EmptyState type="activity" />
      </main>
    );
  }

  // Handle isolated mobile screen views — 'game' covers start, playing AND result via GameContainer
  if (activeScreen === 'game') {
    return (
      <main className={styles.mainContainer}>
        <GameContainer />
      </main>
    );
  }

  if (activeScreen === 'earn') {
    return (
      <main className={styles.mainContainer}>
        <EarnMoreXP isFullPage={true} />
      </main>
    );
  }

  if (activeScreen === 'activity') {
    return (
      <main className={styles.mainContainer}>
        <XPActivity isFullPage={true} />
      </main>
    );
  }

  // Primary Responsive Dashboard Layout – Matches Page 33 Screen 1 Ordering:
  // Level Hero → Today's Boost → Earn More (6 Cards) → Level Rewards (Treasure Chest) → Roadmap → Game & Activity
  return (
    <main className={styles.mainContainer}>
      {/* 1. Main Level Progression Hero */}
      <section className={styles.sectionRow}>
        <LevelHero />
      </section>

      {/* 2. Today's Boost Metrics (XP Earned, Tasks Done, Streak) */}
      <section className={styles.sectionRow}>
        <TodaysBoost />
      </section>

      {/* 3. Earn More Section (Watch & Earn, Daily Tasks, Refer, Catcher, Mini Games, Streak) */}
      <section className={styles.sectionRow}>
        <EarnMoreXP isFullPage={false} />
      </section>

      {/* 4. Level Rewards Milestone Vault (Treasure Chest with Overflowing Coins & Gems) */}
      <section className={styles.sectionRow}>
        <NextLevelReward />
      </section>

      {/* 5. Progression Roadmap with 10 Tier Badges */}
      <section className={styles.sectionRow}>
        <LevelRoadmap />
      </section>

      {/* 6. Play & Earn Mini-Game Hub + Live XP Activity Ledger */}
      <div className={styles.middleGrid}>
        <div className={styles.gameCol}>
          <div className={styles.colHeader}>
            <span className={styles.colBadge}>FEATURED ARCADE</span>
            <h3 className={styles.colTitle}>XP CATCHER MINI-GAME</h3>
          </div>
          <GameContainer />
        </div>

        <div className={styles.activityCol}>
          <XPActivity isFullPage={false} />
        </div>
      </div>
    </main>
  );
};
