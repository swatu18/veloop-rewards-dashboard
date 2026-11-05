# VELOOP Rewards — Gamified Level-Up Progression Platform

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react)](https://react.dev/)
[![CSS Modules](https://img.shields.io/badge/Styling-CSS%20Modules-1572B6?logo=css3)](https://github.com/css-modules/css-modules)
[![Web Audio API](https://img.shields.io/badge/Audio-Synthesized%20Web%20Audio-F59E0B)](#)
[![Responsive](https://img.shields.io/badge/Mobile-60FPS%20Touch%20Ready-10B981)](#)

> **Live Production Deployments:**
> - 🌐 **Primary Netlify Live Link:** [https://veloop-level-up-dashboard.netlify.app/](https://veloop-level-up-dashboard.netlify.app/)
> - ⚡ **Vercel Mirror Link Ready:** Configured via `vercel.json` SPA rewrite rules.

---

## 📖 Project Overview

**VELOOP Rewards** is an ultra-premium, gamified level-progression platform and rewards economy engineered for high user engagement and retention. Built with **React 19**, **Vite**, **HTML5 Canvas**, and **Web Audio API**, the application delivers a console-grade gaming experience combined with the sleek clarity of a modern fintech dashboard.

---

## ✨ Key Features & Architecture

### 1. 🏆 8-Tier Realistic Metallic Progression System
- **10 Unique Custom-Engineered SVG Plaques**: Precision beveled rims, chamfered metallic reflections, and corner rivets representing tiers from *Bronze Scout* to *Immortal Legend*.
- **Balanced Gaming Aesthetics**: Clean, executive metallic finishes (Bronze, Titanium Silver, 24K Gold, Cyber Platinum, Celestial Diamond, Royal Amethyst Sovereign, Sapphire, and Emerald Dragonscale) without oversaturated or blinding neon glows.
- **Dynamic Milestone Progress**: Liquid amber progress track with milestone tick markers at 25%, 50%, and 75%.

### 2. 🎡 Daily Lucky Spin Wheel (Like Candy Crush)
- **Physics-Based Deceleration**: 8-slice SVG reward wheel with synchronized ticker audio that slows down realistically as the wheel comes to a stop.
- **Victory Fanfare & Confetti**: Plays synthesized golden fanfare chords and multi-burst confetti upon winning.
- **Daily Spin Limits & VIP Pass**: 3 daily spins with a dedicated Pro Upgrade warning modal and one-tap return to dashboard.

### 3. 🎁 3D Mystery Box & Vault Rewards
- **Cinematic Unboxing Sequence**: 3-stage animated reveal (Idle ➔ Low-frequency suspense rumble & shake ➔ Golden burst).
- **Interactive Multi-Reward Claims**: Tactile individual claim actions (*"Collect +500 VEs"*, *"Collect +25 Gems"*, *"Activate 1.5x Multiplier"*, *"Claim All"*).
- **Mobile Touch Optimization**: Momentum scrolling with auto-scroll and quick-return navigation.

### 4. 🎮 XP Catcher Arcade Mini-Game
- **60 FPS Physics Engine**: Interactive falling purple XP orbs, golden V-Coins, and emerald gems with real-time collision detection.
- **Multi-Input Controls**: Mouse tracking, keyboard arrow keys, and touch swipe gestures on iOS and Android.

### 5. 🍔 Luxury Slide-Out Navigation Drawer
- **Profile Management**: Profile summary with editable display name and email.
- **Theme Parity**: Instant toggle between Dark Mode and Light Theme with balanced visual depth.

### 6. 🎛️ Evaluator Control Bar (Dockable Dev-Tool)
- **Fintech Status Capsules**: Quickly switch between Normal, Skeleton Loading, API Error, and Empty UX states.
- **Swipe-to-Dock**: Swipe or click the side arrow to collapse the bar into a discreet edge tab (`⚡ DEV`).

---

## 📱 Mobile Responsiveness
- **Strict Viewport Scaling**: `viewport-fit=cover` and zero-jitter layout prevent unwanted zooming on iOS Safari and Android Chrome.
- **Full Touch Support**: Momentum scrolling across all cards, drawers, and modal dialogs.

---

## 🛠️ Tech Stack & Dependencies

- **Framework:** React 19 + Vite
- **Styling:** CSS Modules with Design Tokens (`variables.css`)
- **Audio:** Native Web Audio API Synthesizer (Zero mp3/asset overhead)
- **Effects:** `canvas-confetti`
- **Icons:** `lucide-react`
- **Routing:** `react-router-dom` v7 with client-side SPA routing (`_redirects` & `vercel.json`)

---

## 🚀 Local Development Setup

```bash
# Clone repository
git clone https://github.com/swatu18/veloop-rewards-dashboard.git
cd veloop-rewards-dashboard

# Install dependencies
npm install

# Start Vite local dev server
npm run dev

# Build for production
npm run build
```

---

## 🚢 Deploying to Vercel

This repository includes a pre-configured `vercel.json` file for single-page app routing:

```bash
# Deploy using Vercel CLI
npx vercel

# Or import repository directly into your Vercel Dashboard at:
# https://vercel.com/new
```

---

## 👤 Author
- **Developer:** Swathi G
- **Repository:** [swatu18/veloop-rewards-dashboard](https://github.com/swatu18/veloop-rewards-dashboard)
