import React, { useState, useEffect } from 'react';
import { X, Lock, Mail, User, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import styles from './AuthModal.module.css';

export const AuthModal = () => {
  const {
    isAuthModalOpen,
    authModalMode,
    closeAuthModal,
    signIn,
    signUp,
    quickDemoLogin,
    isEmailRegistered,
    authError,
    setAuthError,
    isLoading
  } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [detectedExistingUser, setDetectedExistingUser] = useState(false);
  const [activeTab, setActiveTab] = useState('smart'); // 'smart' | 'signin' | 'signup'

  useEffect(() => {
    if (isAuthModalOpen) {
      setAuthError('');
      if (authModalMode === 'signin') setActiveTab('signin');
      else if (authModalMode === 'signup') setActiveTab('signup');
      else setActiveTab('smart');
    }
  }, [isAuthModalOpen, authModalMode, setAuthError]);

  // Smart detection on email change
  useEffect(() => {
    if (!email || !email.includes('@')) {
      setDetectedExistingUser(false);
      return;
    }
    const exists = isEmailRegistered(email);
    setDetectedExistingUser(exists);
  }, [email, isEmailRegistered]);

  if (!isAuthModalOpen) return null;

  const isSignUpMode = activeTab === 'signup' || (activeTab === 'smart' && email.includes('@') && !detectedExistingUser);
  const isSignInMode = activeTab === 'signin' || (activeTab === 'smart' && email.includes('@') && detectedExistingUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAuthError('');

    if (!email.trim()) {
      setAuthError('Please enter your email address.');
      return;
    }

    if (!password) {
      setAuthError('Please enter your password.');
      return;
    }

    if (isSignUpMode) {
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
    <div className={styles.backdrop} onClick={closeAuthModal}>
      <div className={styles.modalCard} onClick={e => e.stopPropagation()}>
        {/* Glow ambient background */}
        <div className={styles.cardGlow}></div>

        {/* Close Button */}
        <button className={styles.closeBtn} onClick={closeAuthModal} aria-label="Close">
          <X size={18} />
        </button>

        {/* Brand Header */}
        <div className={styles.header}>
          <div className={styles.logoBadge}>
            <Sparkles size={16} className={styles.sparkleIcon} />
            <span>VELOOP REWARDS AUTH</span>
          </div>

          <h3 className={styles.title}>
            {isSignUpMode ? 'Create New Account' : isSignInMode ? 'Welcome Back!' : 'Sign In or Sign Up'}
          </h3>
          <p className={styles.subtitle}>
            {isSignUpMode
              ? 'New to VELOOP? Sign up to start unlocking rewards and XP.'
              : isSignInMode
              ? 'Enter your password to access your Level 05 progress.'
              : 'Enter your email — we will automatically detect your account.'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className={styles.tabsRow}>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === 'smart' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('smart')}
          >
            ⚡ Smart Detect
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === 'signin' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('signin')}
          >
            Sign In
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === 'signup' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
        </div>

        {/* Dynamic Detection Pill */}
        {email.includes('@') && activeTab === 'smart' && (
          <div className={`${styles.smartDetectPill} ${detectedExistingUser ? styles.pillExisting : styles.pillNew}`}>
            {detectedExistingUser ? (
              <>
                <CheckCircle2 size={14} />
                <span>Existing account found! Switching to <strong>Sign In</strong></span>
              </>
            ) : (
              <>
                <Sparkles size={14} />
                <span>New user detected! Switching to <strong>Sign Up</strong></span>
              </>
            )}
          </div>
        )}

        {/* Error Notice */}
        {authError && (
          <div className={styles.errorBox}>
            <span>{authError}</span>
          </div>
        )}

        {/* Main Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Full Name field (only for Sign Up) */}
          {isSignUpMode && (
            <div className={styles.inputGroup}>
              <label className={styles.label}>Full Name</label>
              <div className={styles.inputWrap}>
                <User size={16} className={styles.inputIcon} />
                <input
                  type="text"
                  placeholder="e.g. Swathi G"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className={styles.inputField}
                  required
                />
              </div>
            </div>
          )}

          {/* Email Address */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>Email Address</label>
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

          {/* Password */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>Password</label>
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

          {/* Submit Button */}
          <button type="submit" className={styles.submitBtn} disabled={isLoading}>
            {isLoading ? (
              <span>Authenticating...</span>
            ) : isSignUpMode ? (
              <>
                <span>Create Account & Sign Up</span>
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

        {/* One-Click Quick Demo Login */}
        <button
          type="button"
          className={styles.demoLoginBtn}
          onClick={quickDemoLogin}
        >
          <Zap size={16} className={styles.demoZap} />
          <div>
            <span className={styles.demoTitle}>Quick Demo Login (Swathi G)</span>
            <span className={styles.demoSub}>Level 05 Diamond Champion • 1,420 VEs</span>
          </div>
        </button>

        {/* Security badge */}
        <div className={styles.securityNote}>
          <ShieldCheck size={14} />
          <span>Secured with VELOOP 256-bit encryption</span>
        </div>
      </div>
    </div>
  );
};
