import React from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { useAuth } from '../../context/AuthContext';
import { AuthGate } from '../../components/Auth/AuthGate';
import { LevelHero } from '../../components/LevelHero/LevelHero';
import { TodaysBoost } from '../../components/TodaysBoost/TodaysBoost';
import { LuckyWheelBanner } from '../../components/LuckyWheel/LuckyWheelBanner';
import { EarnMoreXP } from '../../components/EarnMoreXP/EarnMoreXP';
import { NextLevelReward } from '../../components/NextLevelReward/NextLevelReward';
import { LevelRoadmap } from '../../components/LevelRoadmap/LevelRoadmap';
import { MultiplayerLeaderboard } from '../../components/Multiplayer/MultiplayerLeaderboard';
import { RedemptionGateway } from '../../components/Redemption/RedemptionGateway';
import { GameContainer } from '../../components/PlayAndEarn/GameContainer';
import { XPActivity } from '../../components/XPActivity/XPActivity';
import { LoadingSkeleton } from '../../components/States/LoadingSkeleton';
import { EmptyState } from '../../components/States/EmptyState';
import { ErrorState } from '../../components/States/ErrorState';
import styles from './LevelDashboard.module.css';

export const LevelDashboard = () => {
  const { demoState, activeScreen } = useDashboard();
  const { isAuthenticated } = useAuth();

  // If user is not authenticated, show the Sign In / Create Account Gate
  if (!isAuthenticated) {
    return (
      <main className={styles.mainContainer}>
        <AuthGate />
      </main>
    );
  }

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
  // Level Hero → Roadmap (10 Level Cards) → Today's Boost → Daily Spin → Milestone Vault → Earn More → Multiplayer → Redemption → Game & Activity
  return (
    <main className={styles.mainContainer}>
      {/* 1. Main Level Progression Hero */}
      <section id="hero-section" className={styles.sectionRow}>
        <LevelHero />
      </section>

      {/* 2. Progression Roadmap with 10 Tier Cards & Timeline */}
      <section id="roadmap-section" className={styles.sectionRow}>
        <LevelRoadmap />
      </section>

      {/* 3. Today's Boost Metrics (XP Earned, Tasks Done, Streak) */}
      <section id="boost-section" className={styles.sectionRow}>
        <TodaysBoost />
      </section>

      {/* 4. Daily Lucky Spin Wheel Banner */}
      <section id="lucky-wheel-section" className={styles.sectionRow}>
        <LuckyWheelBanner />
      </section>

      {/* 5. Level Rewards Milestone Vault */}
      <section id="vault-section" className={styles.sectionRow}>
        <NextLevelReward />
      </section>

      {/* 6. Earn More Section */}
      <section id="earn-more-section" className={styles.sectionRow}>
        <EarnMoreXP isFullPage={false} />
      </section>

      {/* 7. Multiplayer League & Tournament Brackets */}
      <section id="multiplayer-section" className={styles.sectionRow}>
        <MultiplayerLeaderboard isFullPage={false} />
      </section>

      {/* 8. Instant Redemption Gateway & E-Vouchers */}
      <section id="redemption-section" className={styles.sectionRow}>
        <RedemptionGateway isFullPage={false} />
      </section>

      {/* 9. Play & Earn Mini-Game Hub + Live XP Activity Ledger */}
      <div id="arcade-section" className={styles.middleGrid}>
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
