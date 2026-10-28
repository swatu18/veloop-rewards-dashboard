import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Trophy, 
  Zap, 
  Gamepad2, 
  Coins, 
  Flame, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Gift, 
  Play, 
  Lock 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LevelBadge } from '../../components/Badges/LevelBadge';
import styles from './LandingPage.module.css';

export const LandingPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, openAuthModal, quickDemoLogin } = useAuth();

  const handleGetStarted = () => {
    openAuthModal('signup');
  };

  const handleSignIn = () => {
    openAuthModal('signin');
  };

  const handleTryDemo = () => {
    quickDemoLogin();
    navigate('/Lvl-Dashboard');
  };

  const handleGoToDashboard = () => {
    navigate('/Lvl-Dashboard');
  };

  return (
    <div className={styles.landingWrapper}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        {/* Ambient background glows */}
        <div className={styles.glowTop}></div>
        <div className={styles.glowRight}></div>

        <div className={styles.heroContent}>
          <div className={styles.pillBadge}>
            <Sparkles size={14} className={styles.goldSparkle} />
            <span>VELOOP REWARDS 2.0 • GAMIFIED PROGRESSION HUB</span>
          </div>

          <h1 className={styles.heroTitle}>
            Level Up Your Journey. <br />
            <span className={styles.goldGradientText}>Play, Earn & Unlock Real Rewards.</span>
          </h1>

          <p className={styles.heroSubtitle}>
            VELOOP Rewards transforms routine engagement into an exhilarating fintech progression journey. 
            Catch XP orbs in skill mini-games, complete daily missions, ascend 10 progression tiers, and cash out verified VEs tokens.
          </p>

          <div className={styles.ctaGroup}>
            {isAuthenticated ? (
              <button className={styles.primaryCta} onClick={handleGoToDashboard}>
                <span>Enter Your Dashboard</span>
                <ArrowRight size={18} />
              </button>
            ) : (
              <>
                <button className={styles.primaryCta} onClick={handleGetStarted}>
                  <span>Get Started Free</span>
                  <ArrowRight size={18} />
                </button>

                <button className={styles.secondaryCta} onClick={handleSignIn}>
                  <span>Sign In</span>
                </button>
              </>
            )}

            <button className={styles.demoCta} onClick={handleTryDemo}>
              <Zap size={16} className={styles.zapIcon} />
              <span>One-Click Demo (Swathi G)</span>
            </button>
          </div>

          <div className={styles.trustBadges}>
            <div className={styles.trustItem}>
              <ShieldCheck size={16} className={styles.trustIcon} />
              <span>Zero Casino Odds • Pure Skill</span>
            </div>
            <div className={styles.trustItem}>
              <CheckCircle2 size={16} className={styles.trustIcon} />
              <span>256-Bit Fintech Security</span>
            </div>
            <div className={styles.trustItem}>
              <Coins size={16} className={styles.trustIcon} />
              <span>Instant VEs Token Credit</span>
            </div>
          </div>
        </div>

        {/* Live Interactive Hero Preview Card */}
        <div className={styles.heroVisualCol}>
          <div className={styles.previewCard}>
            <div className={styles.cardHeader}>
              <div className={styles.previewUserGroup}>
                <div className={styles.userDot}></div>
                <span>LIVE USER TIER PREVIEW</span>
              </div>
              <span className={styles.statusLivePill}>Active Tier</span>
            </div>

            <div className={styles.previewBody}>
              <div className={styles.badgeWrapper}>
                <LevelBadge level={5} size="normal" showStars={true} />
              </div>

              <div className={styles.previewDetails}>
                <span className={styles.tierName}>DIAMOND CHAMPION</span>
                <h3 className={styles.userName}>Swathi G</h3>
                <span className={styles.xpLabel}>6,420 / 8,000 XP (80%)</span>

                <div className={styles.progressTrack}>
                  <div className={styles.progressFill} style={{ width: '80%' }}></div>
                </div>

                <div className={styles.previewTarget}>
                  <span>🎯 <strong>1,580 XP</strong> needed to reach Level 06</span>
                </div>
              </div>
            </div>

            <div className={styles.previewStatsGrid}>
              <div className={styles.statPill}>
                <span className={styles.statEmoji}>⭐</span>
                <div className={styles.statText}>
                  <span className={styles.statVal}>215 XP</span>
                  <span className={styles.statLbl}>Earned Today</span>
                </div>
              </div>

              <div className={styles.statPill}>
                <span className={styles.statEmoji}>🪙</span>
                <div className={styles.statText}>
                  <span className={styles.statVal}>1,420 VEs</span>
                  <span className={styles.statLbl}>Token Wallet</span>
                </div>
              </div>

              <div className={styles.statPill}>
                <span className={styles.statEmoji}>🔥</span>
                <div className={styles.statText}>
                  <span className={styles.statVal}>7 Days</span>
                  <span className={styles.statLbl}>Daily Streak</span>
                </div>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <button className={styles.exploreInsideBtn} onClick={handleTryDemo}>
                <span>Launch Interactive Progression Hub →</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Progression Loop */}
      <section className={styles.stepsSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>HOW IT WORKS</span>
          <h2 className={styles.sectionHeading}>The Core Progression Engine</h2>
          <p className={styles.sectionSub}>Four continuous steps designed to motivate, reward, and elevate your experience.</p>
        </div>

        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.stepIconWrap}>
              <Users size={24} />
            </div>
            <h3 className={styles.stepTitle}>Sign Up & Check In</h3>
            <p className={styles.stepDesc}>
              Create your account in seconds. Maintain your daily consecutive login streak to claim multiplier boosts.
            </p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>02</div>
            <div className={styles.stepIconWrap}>
              <Gamepad2 size={24} />
            </div>
            <h3 className={styles.stepTitle}>Play "XP Catcher"</h3>
            <p className={styles.stepDesc}>
              Test your reflexes in 20-second arcade challenges catching falling gold V coins and purple XP orbs at 60fps.
            </p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.stepIconWrap}>
              <TrendingUp size={24} />
            </div>
            <h3 className={styles.stepTitle}>Climb 10 Tiers</h3>
            <p className={styles.stepDesc}>
              Progress from Bronze Scout all the way to Immortal Legend. Each level unlocks new privileges and earning limits.
            </p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>04</div>
            <div className={styles.stepIconWrap}>
              <Gift size={24} />
            </div>
            <h3 className={styles.stepTitle}>Unlock Milestone Vaults</h3>
            <p className={styles.stepDesc}>
              Claim pre-allocated token chests (+500 VEs, +25 Gems) credited directly to your verifiable activity ledger.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Pillars */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>PREMIUM ARCHITECTURE</span>
          <h2 className={styles.sectionHeading}>Engineered for Trust & Engagement</h2>
          <p className={styles.sectionSub}>A seamless fintech experience designed strictly without casino styling.</p>
        </div>

        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Trophy size={28} />
            </div>
            <h3 className={styles.featureTitle}>10-Tier Visual Roadmap</h3>
            <p className={styles.featureText}>
              Interactive progression milestones from Level 01 to Level 10. Click any tier to inspect exact XP caps, rewards, and unlocked perks.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Gamepad2 size={28} />
            </div>
            <h3 className={styles.featureTitle}>Mandatory Mini-Game Hub</h3>
            <p className={styles.featureText}>
              Full HTML5 Canvas game with dynamic touch drag, keyboard controls, real-time audio synthesizers, combo multiplier gems, and zero gambling mechanics.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Zap size={28} />
            </div>
            <h3 className={styles.featureTitle}>Actionable Earning Features</h3>
            <p className={styles.featureText}>
              Watch & Earn video simulator, daily platform missions, friend referrals with clipboard links, and upcoming concept showcases.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <ShieldCheck size={28} />
            </div>
            <h3 className={styles.featureTitle}>Full UX State Compliance</h3>
            <p className={styles.featureText}>
              Includes shimmer loading skeletons, meaningful empty states, and resilient error recovery with 1-click retry.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Stats Row */}
      <section className={styles.statsSection}>
        <div className={styles.statsRow}>
          <div className={styles.statBlock}>
            <span className={styles.statBigNumber}>50,000+</span>
            <span className={styles.statLabel}>Active VeLoopers</span>
          </div>
          <div className={styles.statBlock}>
            <span className={styles.statBigNumber}>2.5M+</span>
            <span className={styles.statLabel}>XP Distributed</span>
          </div>
          <div className={styles.statBlock}>
            <span className={styles.statBigNumber}>10 Tiers</span>
            <span className={styles.statLabel}>Progression Milestones</span>
          </div>
          <div className={styles.statBlock}>
            <span className={styles.statBigNumber}>100%</span>
            <span className={styles.statLabel}>Transparent Ledger</span>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className={styles.ctaBannerSection}>
        <div className={styles.ctaBannerCard}>
          <div className={styles.ctaBannerGlow}></div>
          <h2 className={styles.ctaBannerTitle}>Ready to Experience VELOOP Rewards?</h2>
          <p className={styles.ctaBannerSub}>
            Sign up now to begin your progression, or test the full interactive Level-Up Dashboard right away.
          </p>

          <div className={styles.ctaBannerButtons}>
            <button className={styles.primaryCta} onClick={handleGetStarted}>
              <span>Create Account Free</span>
              <ArrowRight size={18} />
            </button>

            <button className={styles.demoCtaLarge} onClick={handleTryDemo}>
              <Zap size={18} className={styles.zapIcon} />
              <span>Launch Swathi G Demo Dashboard</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <div className={styles.logoMarkSmall}>V</div>
            <span className={styles.footerTitle}>VELOOP REWARDS</span>
          </div>
          <span className={styles.footerText}>
            Frontend Engineering Internship • Task 16 Level-Up Dashboard Redesign • Built by Swathi G
          </span>
        </div>
      </footer>
    </div>
  );
};
