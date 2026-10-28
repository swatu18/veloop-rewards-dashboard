import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { DashboardProvider } from './context/DashboardContext';
import { Navbar } from './components/Navbar/Navbar';
import { BottomNav } from './components/BottomNav/BottomNav';
import { DemoToolbar } from './components/DemoToolbar/DemoToolbar';
import { LevelUpModal } from './components/LevelUpModal/LevelUpModal';
import { LevelInfoModal } from './components/LevelInfo/LevelInfoModal';
import { AuthModal } from './components/Auth/AuthModal';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { LevelDashboard } from './pages/LevelDashboard/LevelDashboard';
import './styles/globals.css';

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <AuthProvider>
      <DashboardProvider>
        <BrowserRouter>
          <div className="app-container">
            {/* Top Sticky Header with Auth & Notifications */}
            <Navbar onOpenMenu={() => setMobileMenuOpen(!mobileMenuOpen)} />

            {/* Evaluator Demo Switcher & UX State Verifier */}
            <DemoToolbar />

            {/* Core Routes: / for Landing Page, /Lvl-Dashboard for Progression Dashboard */}
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/Lvl-Dashboard" element={<LevelDashboard />} />
              <Route path="*" element={<Navigate to="/Lvl-Dashboard" replace />} />
            </Routes>

            {/* Mobile Bottom Navigation Bar */}
            <BottomNav />

            {/* Global Modals */}
            <LevelUpModal />
            <LevelInfoModal />
            <AuthModal />
          </div>
        </BrowserRouter>
      </DashboardProvider>
    </AuthProvider>
  );
}

export default App;
