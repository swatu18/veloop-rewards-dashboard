# VELOOP Rewards – Level-Up Progression & Earning Hub

> **Frontend Development Internship Assignment – Task 16: Complete Level-Up Dashboard Redesign**  
> **Author:** Swathi G  
> **Target Route:** `/Lvl-Dashboard`  
> **Reference:** [ve-loop-client.vercel.app/Lvl-Dashboard](https://ve-loop-client.vercel.app/Lvl-Dashboard)  
> **Live Demo:** [Deploy to Vercel/Netlify](https://vercel.com)  

---

## 1. Project Overview

The **VELOOP Rewards Level-Up Progression Hub** is a next-generation gamified rewards platform redesigned from the ground up. Moving away from passive numeric indicators, the new dashboard delivers an immersive, fintech-inspired engagement hub where users have compelling reasons to return daily, level up, play arcade mini-games, complete missions, and unlock real rewards.

Key highlights:
- **Fintech Elegance:** Adheres strictly to the project-wide `#161827` dark theme with gold metallic accents, glassmorphic elevation, and zero tacky casino aesthetics.
- **Dynamic Gamification Loop:** `Play → Earn XP → Progress → Unlock Reward → Level Up → Discover Opportunities → Return`.
- **Integrated Mini-Game:** Includes **XP Catcher**, an interactive, skill-based 60fps arcade game with live touch & keyboard controls, combo multipliers, sound effects, and real XP crediting.
- **Evaluator Control Bar:** A built-in demo toolbar allowing instant review of all 6 design mockups, loading skeletons, error states, and level-up celebrations.

---

## 2. Level System

VELOOP Rewards features a 10-tier progression architecture:

| Level | Tier Title | XP Range | Milestone Reward | Tier Status |
| :---: | :--- | :---: | :--- | :---: |
| **01** | Bronze Scout | 0 – 1,000 XP | 50 VEs | Completed ✓ |
| **02** | Silver Pioneer | 1,000 – 2,500 XP | 75 VEs | Completed ✓ |
| **03** | Gold Vanguard | 2,500 – 4,500 XP | 100 VEs | Completed ✓ |
| **04** | Platinum Elite | 4,500 – 6,000 XP | 10 Gems | Completed ✓ |
| **05** | **Diamond Champion** | **6,000 – 8,000 XP** | **500 VEs** | **Current Tier (You Are Here)** |
| **06** | Master Sovereign | 8,000 – 12,000 XP | 2 Lucky Spins | Next Goal 🎯 |
| **07** | Grand Ascendant | 12,000 – 18,000 XP | 1,000 VEs | Locked 🔒 |
| **08** | Mythic Vanguard | 18,000 – 25,000 XP | 50 Gems | Locked 🔒 |
| **09** | Cosmic Overlord | 25,000 – 35,000 XP | Legendary Vault Box | Locked 🔒 |
| **10** | Immortal Legend | 35,000 – 50,000 XP | 5,000 VEs + 100 Gems | Locked 🔒 |

Users can click any milestone on the **Progression Roadmap** to inspect unlock criteria, benefits, and perk upgrades.

---

## 3. XP System

- **Current Progress:** 6,420 XP / 8,000 XP (~80%) towards Level 06.
- **XP Required:** Exactly **1,580 XP remaining** to reach Level 06 (calculated dynamically without requiring manual math).
- **Daily Caps & Multipliers:** Daily boost trackers show XP earned today, missions done (4/8), and active streak (7 Days).
- **Live XP Engine:** Every activity, ad view, or mini-game win immediately credits XP to the user's live state and adds a transparent entry to the ledger.

---

## 4. Next-Level Rewards

- **Visual Reveal:** 3D Golden Treasure Vault with glowing halo and floating coin sparkles.
- **Partially Locked State:** Shows current progress (`80%`) and remaining threshold (`1,580 XP to Level 06`).
- **Reward Bundle:**
  - `+500 VEs` Token Credit
  - `+25 Gems` Arcade Passes
  - `1.5x XP` Earning Multiplier perk
- **Transparency Policy:** Click the `[i]` icon to review token credit terms and partner redemption guarantees.

---

## 5. Game Concept: "XP Catcher"

**XP Catcher** is an interactive, skill-based arcade mini-game built on an optimized HTML5 Canvas loop. Users control an electric golden collector net at the bottom of the screen to catch falling energy orbs and tokens before time runs out.

---

## 6. Game Rules

1. **Duration:** 20 seconds timed interaction.
2. **Scoring Breakdown:**
   - 🪙 **Golden V Coins:** +10 Points & +2 VEs
   - 🔮 **Purple XP Orbs:** +15 Points
   - 💎 **Cosmic Gems:** +25 Points & triggers a **2X Multiplier** for 4 seconds!
3. **Controls:**
   - **Desktop:** Keyboard Left/Right Arrows or `A`/`D` keys, or smooth Mouse drag.
   - **Mobile:** Touch drag anywhere across the screen for 1:1 responsive movement.
4. **Reward Tiers:**
   - Score 40+: `+20 XP` & `+5 VEs`
   - Score 80+: `+30 XP` & `+12 VEs`
   - Score 120+: `+50 XP` & `+25 VEs`
5. **Fair Play & Trust:** Zero gambling, betting, or casino odds. Purely skill & engagement-driven.

---

## 7. Earning Features

### Active Earning Channels
- **Watch & Earn:** Sponsored partner video spotlight (+50 XP, +10 VEs).
- **Daily Missions:** Quick daily platform objectives (+30 XP).
- **Refer & Earn:** Shareable referral links with instant clipboard copy (+100 XP, +25 VEs).
- **Mini Games / XP Catcher:** Arcade challenge with live XP rewards (+10 to +75 XP).
- **Streak Bonus:** 7-day consecutive check-in boost (+25 XP).

### Upcoming Concepts (Marked as Concept / Coming Soon)
- **Reward Hunt:** Find hidden golden markers across partner stores.
- **Quick Quiz:** Answer fintech trivia to unlock multiplier streaks.
- **Weekly Quest:** Cooperative guild milestones for seasonal vault chests.

---

## 8. Technology Stack

- **Framework:** React 19 (React Hooks, Context API)
- **Build Tool:** Vite 6 / 8 (Lightning fast HMR & production rollup)
- **Styling:** Bootstrap 5 (grid foundations) + **CSS Modules** (`.module.css`)
- **Icons:** Lucide React (`lucide-react`)
- **Visuals:** SVG vector graphics, HTML5 Canvas game engine
- **Audio:** Custom Web Audio API synthesizer (`soundEffects.js`)
- **Celebration:** Canvas Confetti (`canvas-confetti`)
- **Routing:** React Router DOM v7 (supporting `/Lvl-Dashboard` and SPA fallback)

---

## 9. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/swatu18/veloop-rewards-dashboard.git
cd veloop-rewards-dashboard
npm install
```

---

## 10. Development Commands

```bash
# Start local development server (with HMR)
npm run dev

# Run production build
npm run build

# Preview production build locally
npm run preview
```

---

## 11. Folder Structure

```
veloop-rewards-dashboard/
├── public/
│   ├── favicon.svg
│   └── _redirects              # Netlify SPA routing fallback
├── src/
│   ├── assets/                 # Icons & vector assets
│   ├── components/
│   │   ├── Badges/             # Golden hexagonal laurel level badge
│   │   ├── BottomNav/          # Mobile navigation bar
│   │   ├── DemoToolbar/        # Evaluator control & state switcher
│   │   ├── EarnMoreXP/         # Earning cards & video simulation modal
│   │   ├── LevelHero/          # Main level hero & animated XP progress
│   │   ├── LevelInfo/          # Transparency modal for [i] tooltips
│   │   ├── LevelRoadmap/       # 10-tier progression stepper & perks
│   │   ├── LevelUpModal/       # Level-up celebration modal with confetti
│   │   ├── Navbar/             # Top sticky navbar with balance & profile
│   │   ├── NextLevelReward/    # 3D vault preview & unlock criteria
│   │   ├── PlayAndEarn/        # XP Catcher canvas mini-game & results
│   │   ├── States/             # Loading skeletons, empty state, error state
│   │   └── TodaysBoost/        # Daily XP, tasks, and streak cards
│   ├── context/
│   │   └── DashboardContext.jsx # Central state management & reward engine
│   ├── data/
│   │   ├── activityHistory.js  # Live ledger entries
│   │   ├── earnActivities.js   # Earning channels & coming soon data
│   │   └── levelData.js        # 10-tier level roadmap config
│   ├── pages/
│   │   └── LevelDashboard/     # Multi-column desktop & responsive page
│   ├── styles/
│   │   ├── globals.css         # Global styles, animations & theme
│   │   └── variables.css       # Project-wide color variables (#161827)
│   ├── utils/
│   │   └── soundEffects.js     # Web Audio API arcade synthesizers
│   ├── App.jsx                 # Route definitions (/Lvl-Dashboard)
│   └── main.jsx
├── vercel.json                 # Vercel SPA rewrites configuration
├── package.json
└── README.md
```

---

## 12. Component Architecture

The dashboard is structured into modular, self-contained components using CSS Modules:
- **Separation of Concerns:** Level and reward configurations are isolated in `src/data/`, ready for direct API integration.
- **Context-Driven State:** `DashboardContext` handles XP calculations, level-up milestones, audio toggle, and active view switching.
- **Responsive Architecture:** Flexbox and CSS Grid adapt gracefully from 320px mobile up to 1920px 4K displays.

---

## 13. Responsive Behavior

| Breakpoint | Target Screen | Layout Behavior |
| :--- | :--- | :--- |
| **320px+** | Small Mobile | Single-column vertical flow with full-width cards and bottom navigation |
| **768px+** | Tablet | Two-column metric groupings with horizontal scrolling roadmap |
| **1024px+** | Laptop | Two-column desktop composition: Level Hero + Vault on top, Game + Activity side-by-side |
| **1440px+** | Desktop | Max-width 1360px centered container with ambient glowing side gradients |
| **1920px+** | Ultra-Wide | Scaled fintech display with preserved typography scale and contrast |

---

## 14. Animation Details

- **Animated XP Bar:** Smooth CSS cubic-bezier transition with glowing head and shimmer wave.
- **Laurel Badge Shine:** Ambient radial pulse glow behind the golden level shield.
- **Float Animations:** 3D treasure chest and floating collectible orbs.
- **Confetti Celebration:** Multi-stage particle burst triggered on level advancement.
- **Canvas Physics:** 60fps item drop, basket collision detection, and floating score popups.

---

## 15. Screenshots & Screen Mapping (Page 33 Specification)

| Screen | Name | Description |
| :---: | :--- | :--- |
| **1** | **Main Dashboard** | Hero with Level 05 badge, 6,420/8,000 XP bar, Today's Boost, Earn shortcuts, and Vault preview. |
| **2** | **XP Catcher Game** | Active 20-second canvas challenge catching falling coins and purple XP orbs. |
| **3** | **Challenge Complete** | Laurel trophy celebration screen with score 92, +30 XP, +12 VEs, and level progress bar. |
| **4** | **Earn & Level Up** | Comprehensive list of earning opportunities + "Coming Soon" concept cards. |
| **5** | **Level Up! Modal** | Celebration modal with Level 05 badge, +500 VEs, +25 Gems, and unlocked perks. |
| **6** | **Recent Activity** | Real-time XP & VEs ledger with filter tabs and Today's Summary card. |

*(Use the floating **Evaluator Control Bar** at the top right to switch between these 6 views or test UX states).*

---

## 16. Live Demo

- **Live URL:** [https://veloop-level-up-dashboard.netlify.app/Lvl-Dashboard](https://veloop-level-up-dashboard.netlify.app/Lvl-Dashboard)
- **Deployment Platform:** Netlify (Configured with `netlify.toml` SPA redirects)

---

## 17. GitHub Repository

- **Repository Link:** `https://github.com/swatu18/veloop-rewards-dashboard`
- **Git Ignore:** Configured to exclude `node_modules`, `.env`, build artifacts, and sensitive keys.

---

## 18. Author

- **Name:** Swathi G
- **Program:** VELOOP Rewards Frontend Engineering Internship
- **Assignment:** Task 16 – Complete Level-Up Dashboard Redesign
- **Submission Date:** October 2026
