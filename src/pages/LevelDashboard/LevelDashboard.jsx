import React from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { LevelHero } from '../../components/LevelHero/LevelHero';
import { TodaysBoost } from '../../components/TodaysBoost/TodaysBoost';
import { NextLevelReward } from '../../components/NextLevelReward/NextLevelReward';
import { LevelRoadmap } from '../../components/LevelRoadmap/LevelRoadmap';
import { GameContainer } from '../../components/PlayAndEarn/GameContainer';
import { EarnMoreXP } from '../../components/EarnMoreXP/EarnMoreXP';
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

  // Primary Responsive Dashboard Layout (Matching Page 18 Desktop Layout & Page 33 Mobile Layout)
  return (
    <main className={styles.mainContainer}>
      {/* Row 1: Top Hero & Next Reward (2 Columns on Desktop) */}
      <div className={styles.topGrid}>
        <div className={styles.heroCol}>
          <LevelHero />
          <TodaysBoost />
        </div>
        <div className={styles.rewardCol}>
          <NextLevelReward />
        </div>
      </div>

      {/* Row 2: Full Width Level Progression Roadmap */}
      <section className={styles.roadmapRow}>
        <LevelRoadmap />
      </section>

      {/* Row 3: Play & Earn Mini-Game Hub + Live XP Activity Ledger (Side-by-side on Desktop) */}
      <div className={styles.middleGrid}>
        <div className={styles.gameCol}>
          <div className={styles.colHeader}>
            <span className={styles.colBadge}>FEATURED ARCADE</span>
            <h3 className={styles.colTitle}>PLAY & EARN MINI-GAME</h3>
          </div>
          <GameContainer />
        </div>

        <div className={styles.activityCol}>
          <XPActivity isFullPage={false} />
        </div>
      </div>

      {/* Row 4: Full Width Earn More XP & Rewards Section */}
      <section className={styles.bottomSection}>
        <EarnMoreXP isFullPage={false} />
      </section>
    </main>
  );
};
