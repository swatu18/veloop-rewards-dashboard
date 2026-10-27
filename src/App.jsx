import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DashboardProvider } from './context/DashboardContext';
import { Navbar } from './components/Navbar/Navbar';
import { BottomNav } from './components/BottomNav/BottomNav';
import { DemoToolbar } from './components/DemoToolbar/DemoToolbar';
import { LevelUpModal } from './components/LevelUpModal/LevelUpModal';
import { LevelInfoModal } from './components/LevelInfo/LevelInfoModal';
import { LevelDashboard } from './pages/LevelDashboard/LevelDashboard';
import './styles/globals.css';

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <DashboardProvider>
      <BrowserRouter>
        <div className="app-container">
          {/* Top Sticky Header */}
          <Navbar onOpenMenu={() => setMobileMenuOpen(!mobileMenuOpen)} />

          {/* Evaluator Demo Switcher & UX State Verifier */}
          <DemoToolbar />

          {/* Core Routes - Supporting /Lvl-Dashboard and / */}
          <Routes>
            <Route path="/" element={<LevelDashboard />} />
            <Route path="/Lvl-Dashboard" element={<LevelDashboard />} />
            <Route path="*" element={<Navigate to="/Lvl-Dashboard" replace />} />
          </Routes>

          {/* Mobile Bottom Navigation Bar */}
          <BottomNav />

          {/* Global Modals */}
          <LevelUpModal />
          <LevelInfoModal />
        </div>
      </BrowserRouter>
    </DashboardProvider>
  );
}

export default App;
