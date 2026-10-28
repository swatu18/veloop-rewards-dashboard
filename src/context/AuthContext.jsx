import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const MOCK_USERS_KEY = 'veloop_users';
const MOCK_SESSION_KEY = 'veloop_session';

const DEFAULT_USER = {
  id: 'user_swathi_1',
  name: 'Swathi G',
  email: 'yadavswathi89@gmail.com',
  password: 'password123',
  avatar: 'SG',
  joinedAt: '2026-10-01T00:00:00.000Z',
  isNewUser: false
};

const getStoredUsers = () => {
  try {
    const data = JSON.parse(localStorage.getItem(MOCK_USERS_KEY));
    if (Array.isArray(data) && data.length > 0) return data;
  } catch {}
  // Pre-seed default user
  const initial = [DEFAULT_USER];
  localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(initial));
  return initial;
};

const getStoredSession = () => {
  try {
    const session = JSON.parse(localStorage.getItem(MOCK_SESSION_KEY));
    if (session && session.expiresAt > Date.now()) return session.user;
  } catch {}
  // Default logged in session for seamless first-time experience
  return DEFAULT_USER;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => getStoredSession());
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState('');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('smart'); // 'smart' | 'signin' | 'signup'

  const openAuthModal = (mode = 'smart') => {
    setAuthError('');
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthError('');
    setIsAuthModalOpen(false);
  };

  const isEmailRegistered = (email) => {
    const users = getStoredUsers();
    return users.some(u => u.email.toLowerCase().trim() === email.toLowerCase().trim());
  };

  const getUserByEmail = (email) => {
    const users = getStoredUsers();
    return users.find(u => u.email.toLowerCase().trim() === email.toLowerCase().trim()) || null;
  };

  // Sign Up
  const signUp = async (name, email, password) => {
    setAuthError('');
    setIsLoading(true);

    await new Promise(r => setTimeout(r, 600));

    const cleanEmail = email.toLowerCase().trim();
    const cleanName = name.trim();

    if (isEmailRegistered(cleanEmail)) {
      setAuthError('An account with this email already exists. Please log in.');
      setIsLoading(false);
      return false;
    }

    const initials = cleanName
      .split(' ')
      .filter(Boolean)
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || 'VL';

    const newUser = {
      id: `user_${Date.now()}`,
      name: cleanName,
      email: cleanEmail,
      password,
      avatar: initials,
      joinedAt: new Date().toISOString(),
      isNewUser: true
    };

    const users = getStoredUsers();
    const updated = [...users, newUser];
    localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(updated));

    const session = {
      user: newUser,
      expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000
    };
    localStorage.setItem(MOCK_SESSION_KEY, JSON.stringify(session));

    setCurrentUser(newUser);
    setIsLoading(false);
    setIsAuthModalOpen(false);
    return true;
  };

  // Sign In
  const signIn = async (email, password) => {
    setAuthError('');
    setIsLoading(true);

    await new Promise(r => setTimeout(r, 500));

    const cleanEmail = email.toLowerCase().trim();
    const users = getStoredUsers();
    const user = users.find(
      u => u.email.toLowerCase().trim() === cleanEmail && u.password === password
    );

    if (!user) {
      setAuthError('Incorrect password. Please verify your credentials.');
      setIsLoading(false);
      return false;
    }

    const session = {
      user,
      expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000
    };
    localStorage.setItem(MOCK_SESSION_KEY, JSON.stringify(session));

    setCurrentUser(user);
    setIsLoading(false);
    setIsAuthModalOpen(false);
    return true;
  };

  // Quick Demo Login (switches instantly to Swathi G)
  const quickDemoLogin = () => {
    const session = {
      user: DEFAULT_USER,
      expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000
    };
    localStorage.setItem(MOCK_SESSION_KEY, JSON.stringify(session));
    setCurrentUser(DEFAULT_USER);
    setIsAuthModalOpen(false);
  };

  // Sign Out
  const signOut = () => {
    localStorage.removeItem(MOCK_SESSION_KEY);
    setCurrentUser(null);
    setAuthError('');
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLoading,
        authError,
        setAuthError,
        signUp,
        signIn,
        signOut,
        quickDemoLogin,
        isEmailRegistered,
        getUserByEmail,
        isAuthenticated: !!currentUser,
        isAuthModalOpen,
        authModalMode,
        openAuthModal,
        closeAuthModal
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
