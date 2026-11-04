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
  Lock,
  Star
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LevelBadge } from '../../components/Badges/LevelBadge';
import { VeloopLogo } from '../../components/common/VeloopLogo';
import styles from './LandingPage.module.css';

export const LandingPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, openAuthModal } = useAuth();

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate('/Lvl-Dashboard');
    } else {
      openAuthModal('signup');
    }
  };

  const handleSignIn = () => {
    if (isAuthenticated) {
      navigate('/Lvl-Dashboard');
    } else {
      openAuthModal('signin');
    }
  };

  const handleGoToDashboard = () => {
    navigate('/Lvl-Dashboard');
  };

  return (
    <div className={styles.landingWrapper}>
      {/* ── Hero Section ── */}
      <section className={styles.heroSection}>
        {/* Ambient atmospheric glows */}
        <div className={styles.glowTop}></div>
        <div className={styles.glowRight}></div>

        <div className={styles.heroContent}>
          <div className={styles.brandLogoRow}>
            <VeloopLogo size="large" />
          </div>

          <div className={styles.pillBadge}>
            <Sparkles size={14} className={styles.goldSparkle} />
            <span>VELOOP REWARDS 2.0 • GAMIFIED PROGRESSION HUB</span>
          </div>

          <h1 className={styles.heroTitle}>
            Level Up Your Journey. <br />
            <span className={styles.goldGradientText}>Play, Earn &amp; Unlock Real Rewards.</span>
          </h1>

          <p className={styles.heroSubtitle}>
            VELOOP Rewards transforms routine engagement into an exhilarating fintech progression journey. 
            Catch XP orbs in 60 FPS skill challenges, ascend 10 prestige tiers, unlock mystery vaults, and earn verifiable VEs token rewards.
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
                  <span>Create Account</span>
                  <ArrowRight size={18} />
                </button>

                <button className={styles.secondaryCta} onClick={handleSignIn}>
                  <span>Sign In</span>
                </button>
              </>
            )}
          </div>

          <div className={styles.trustBadges}>
            <div className={styles.trustItem}>
              <ShieldCheck size={16} className={styles.trustIcon} />
              <span>100% Skill-Based • Zero Casino Odds</span>
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

        {/* ── Live Interactive Tier Preview Showcase ── */}
        <div className={styles.heroVisualCol}>
          <div className={styles.previewCard}>
            <div className={styles.cardHeader}>
              <div className={styles.previewUserGroup}>
                <div className={styles.userDot}></div>
                <span>LIVE PROGRESSION SHOWCASE</span>
              </div>
              <span className={styles.statusLivePill}>Tier V Active</span>
            </div>

            <div className={styles.previewBody}>
              <div className={styles.badgeWrapper}>
                <LevelBadge level={5} size="normal" showStars={true} animated={true} />
              </div>

              <div className={styles.previewDetails}>
                <span className={styles.tierName}>CELESTIAL DIAMOND</span>
                <h3 className={styles.userName}>Diamond Champion</h3>
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
                  <span className={styles.statLbl}>Active Streak</span>
                </div>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <button className={styles.exploreInsideBtn} onClick={handleGetStarted}>
                <span>{isAuthenticated ? 'Open Dashboard →' : 'Sign Up to Start Playing →'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4-Step Progression Engine ── */}
      <section className={styles.stepsSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>HOW IT WORKS</span>
          <h2 className={styles.sectionHeading}>The Core Progression Engine</h2>
          <p className={styles.sectionSub}>Four structured milestones designed to engage, motivate, and reward your daily achievements.</p>
        </div>

        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.stepIconWrap}>
              <Users size={24} />
            </div>
            <h3 className={styles.stepTitle}>Sign Up &amp; Daily Check-In</h3>
            <p className={styles.stepDesc}>
              Create your account in seconds. Maintain your daily consecutive login streak to unlock multiplier bonuses.
            </p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>02</div>
            <div className={styles.stepIconWrap}>
              <Gamepad2 size={24} />
            </div>
            <h3 className={styles.stepTitle}>Play "XP Catcher"</h3>
            <p className={styles.stepDesc}>
              Test your reflexes in 20-second arcade challenges catching falling gold V coins and purple XP orbs with buttery 60 FPS controls.
            </p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.stepIconWrap}>
              <TrendingUp size={24} />
            </div>
            <h3 className={styles.stepTitle}>Ascend 10 Prestige Tiers</h3>
            <p className={styles.stepDesc}>
              Progress from Bronze Scout all the way to Immortal Legend. Each level unlocks new privileges, daily limits, and rare badges.
            </p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>04</div>
            <div className={styles.stepIconWrap}>
              <Gift size={24} />
            </div>
            <h3 className={styles.stepTitle}>Unlock Mystery Vaults</h3>
            <p className={styles.stepDesc}>
              Claim milestone token chests (+500 VEs, +25 Gems) with 3D opening suspense animations credited directly to your verifiable wallet.
            </p>
          </div>
        </div>
      </section>

      {/* ── Feature Pillars ── */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>PREMIUM ARCHITECTURE</span>
          <h2 className={styles.sectionHeading}>Engineered for Luxury &amp; Performance</h2>
          <p className={styles.sectionSub}>A seamless gaming and rewards experience built with fintech precision and zero casino mechanics.</p>
        </div>

        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Trophy size={26} />
            </div>
            <h3 className={styles.featureTitle}>10-Tier Visual Roadmap</h3>
            <p className={styles.featureText}>
              Interactive progression milestones from Level 01 to Level 10. Click any tier to inspect exact XP caps, milestone rewards, and unlocked perks.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Gamepad2 size={26} />
            </div>
            <h3 className={styles.featureTitle}>Skill-Based Canvas Game</h3>
            <p className={styles.featureText}>
              60 FPS HTML5 Canvas engine with responsive touch controls, keyboard arrows, dynamic particle synthesizers, combo multiplier gems, and zero gambling.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Zap size={26} />
            </div>
            <h3 className={styles.featureTitle}>Actionable Earning Hub</h3>
            <p className={styles.featureText}>
              Watch &amp; Earn video simulator, daily platform missions, friend referrals with clipboard links, and upcoming streak showcases.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <ShieldCheck size={26} />
            </div>
            <h3 className={styles.featureTitle}>Ultra-Premium Theme Engine</h3>
            <p className={styles.featureText}>
              Seamless toggle between Dark Obsidian and Light Executive Swiss porcelain aesthetics with perfect contrast and balanced typography.
            </p>
          </div>
        </div>
      </section>

      {/* ── Platform Stats Row ── */}
      <section className={styles.statsSection}>
        <div className={styles.statsRow}>
          <div className={styles.statBlock}>
            <span className={styles.statBigNumber}>50,000+</span>
            <span className={styles.statLabel}>Active Members</span>
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
            <span className={styles.statLabel}>Verifiable Ledger</span>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA Banner ── */}
      <section className={styles.ctaBannerSection}>
        <div className={styles.ctaBannerCard}>
          <div className={styles.ctaBannerGlow}></div>
          <h2 className={styles.ctaBannerTitle}>Ready to Experience VELOOP Rewards?</h2>
          <p className={styles.ctaBannerSub}>
            Create your account today to begin your progression journey and start unlocking verified rewards.
          </p>

          <div className={styles.ctaBannerButtons}>
            <button className={styles.primaryCta} onClick={handleGetStarted}>
              <span>Create Account Free</span>
              <ArrowRight size={18} />
            </button>

            <button className={styles.secondaryCta} onClick={handleSignIn}>
              <span>Sign In to Dashboard</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <div className={styles.logoMarkSmall}>V</div>
            <span className={styles.footerTitle}>VELOOP REWARDS</span>
          </div>
          <span className={styles.footerText}>
            VELOOP Rewards Progression Hub • Gamified Level-Up Platform
          </span>
        </div>
      </footer>
    </div>
  );
};
