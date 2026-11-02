import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight, Sparkles, ShieldCheck, Zap, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import styles from './AuthGate.module.css';

export const AuthGate = () => {
  const { signIn, signUp, quickDemoLogin, authError, setAuthError, isLoading } = useAuth();
  const [mode, setMode] = useState('signin'); // 'signin' | 'signup'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAuthError('');

    if (!email.trim() || !password) {
      setAuthError('Please fill in your email address and password.');
      return;
    }

    if (mode === 'signup') {
      if (!name.trim()) {
        setAuthError('Please enter your full name to create an account.');
        return;
      }
      await signUp(name, email, password);
    } else {
      await signIn(email, password);
    }
  };

  return (
    <div className={styles.gateWrapper}>
      <div className={styles.gateCard}>
        {/* Ambient background glow */}
        <div className={styles.ambientGlow}></div>

        {/* Brand Logo & Heading */}
        <div className={styles.header}>
          <div className={styles.logoBadge}>
            <span className={styles.logoIcon}>V</span>
            <span>VELOOP REWARDS</span>
          </div>

          <h2 className={styles.title}>
            {mode === 'signin' ? 'Sign In to Your Account' : 'Create Your Account'}
          </h2>
          <p className={styles.subtitle}>
            Enter your credentials to access your Level Progression Hub, play mini-games, and earn real XP and token rewards.
          </p>
        </div>

        {/* Mode Switch Tabs */}
        <div className={styles.tabsRow}>
          <button
            type="button"
            className={`${styles.tabBtn} ${mode === 'signin' ? styles.tabActive : ''}`}
            onClick={() => { setMode('signin'); setAuthError(''); }}
          >
            Sign In
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${mode === 'signup' ? styles.tabActive : ''}`}
            onClick={() => { setMode('signup'); setAuthError(''); }}
          >
            Create Account
          </button>
        </div>

        {/* Error Notice */}
        {authError && (
          <div className={styles.errorBox}>
            <AlertCircle size={15} />
            <span>{authError}</span>
          </div>
        )}

        {/* Main Authentication Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          {mode === 'signup' && (
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Full Name</label>
              <div className={styles.inputWrap}>
                <User size={16} className={styles.inputIcon} />
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className={styles.inputField}
                  required
                />
              </div>
            </div>
          )}

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Email Address</label>
            <div className={styles.inputWrap}>
              <Mail size={16} className={styles.inputIcon} />
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={styles.inputField}
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Password</label>
            <div className={styles.inputWrap}>
              <Lock size={16} className={styles.inputIcon} />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className={styles.inputField}
                required
              />
            </div>
          </div>

          <button type="submit" className={styles.submitBtn} disabled={isLoading}>
            {isLoading ? (
              <span>Verifying Credentials...</span>
            ) : mode === 'signup' ? (
              <>
                <span>Create Account &amp; Start Earning</span>
                <ArrowRight size={16} />
              </>
            ) : (
              <>
                <span>Sign In to Dashboard</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className={styles.divider}>
          <span>OR</span>
        </div>

        {/* Instant Demo Access (Evaluator Mode) */}
        <button
          type="button"
          className={styles.demoLoginBtn}
          onClick={quickDemoLogin}
        >
          <Zap size={16} className={styles.demoZap} />
          <div>
            <span className={styles.demoTitle}>Instant Demo Access (Evaluator Mode)</span>
            <span className={styles.demoSub}>Explore Level 05 Diamond Champion • 1,420 VEs</span>
          </div>
        </button>

        {/* Security Trust Note */}
        <div className={styles.securityNote}>
          <ShieldCheck size={14} />
          <span>Secured with VELOOP 256-bit encryption</span>
        </div>
      </div>
    </div>
  );
};
