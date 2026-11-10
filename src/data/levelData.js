export const REALMS = [
  { id: 1, name: "Bronze Grove", subtitle: "Levels 01–05 • Novice Trailblazer", levels: [1, 2, 3, 4, 5], theme: "#F59E0B", icon: "🌲" },
  { id: 2, name: "Amethyst Citadel", subtitle: "Levels 06–10 • Imperial Ascendants", levels: [6, 7, 8, 9, 10], theme: "#C084FC", icon: "🔮" },
  { id: 3, name: "Prismatic Caverns", subtitle: "Levels 11–15 • Crystal Warmasters", levels: [11, 12, 13, 14, 15], theme: "#38BDF8", icon: "💎" },
  { id: 4, name: "Quantum Highlands", subtitle: "Levels 16–20 • Cyber Titans", levels: [16, 17, 18, 19, 20], theme: "#10B981", icon: "⚡" },
  { id: 5, name: "Starborn Expanse", subtitle: "Levels 21–25 • Galactic Monarchs", levels: [21, 22, 23, 24, 25], theme: "#F472B6", icon: "🌌" },
  { id: 6, name: "Celestial Olympus", subtitle: "Levels 26–30 • Supreme Immortals", levels: [26, 27, 28, 29, 30], theme: "#FBBF24", icon: "👑" },
];

export const LEVEL_ROADMAP = [
  // ── World 1: Bronze Grove (1–5) ──
  {
    level: 1,
    realmId: 1,
    name: "Bronze Scout",
    minXP: 0,
    maxXP: 1000,
    reward: { type: "VEs", amount: 50, label: "50 VEs" },
    status: "completed",
    perks: ["Access to basic rewards", "Daily check-in streak"]
  },
  {
    level: 2,
    realmId: 1,
    name: "Silver Pioneer",
    minXP: 1000,
    maxXP: 2500,
    reward: { type: "VEs", amount: 75, label: "75 VEs" },
    status: "completed",
    perks: ["5% boost on Watch & Earn", "Standard mini-games unlocked"]
  },
  {
    level: 3,
    realmId: 1,
    name: "Gold Vanguard",
    minXP: 2500,
    maxXP: 4500,
    reward: { type: "VEs", amount: 100, label: "100 VEs" },
    status: "completed",
    perks: ["10% referral commission boost", "Weekly raffle entry"]
  },
  {
    level: 4,
    realmId: 1,
    name: "Platinum Elite",
    minXP: 4500,
    maxXP: 6000,
    reward: { type: "Gems", amount: 10, label: "10 Gems" },
    status: "completed",
    perks: ["Exclusive Platinum badges", "15% discount in reward shop"]
  },
  {
    level: 5,
    realmId: 1,
    name: "Diamond Champion",
    minXP: 6000,
    maxXP: 8000,
    reward: { type: "VEs", amount: 500, label: "500 VEs & 25 Gems" },
    status: "current",
    isMilestoneVault: true,
    perks: [
      "Higher daily XP earning limit (up to 2,000 XP/day)",
      "Instant access to High Roller arcade challenges",
      "Priority voucher redemption processing"
    ]
  },

  // ── World 2: Amethyst Citadel (6–10) ──
  {
    level: 6,
    realmId: 2,
    name: "Master Sovereign",
    minXP: 8000,
    maxXP: 12000,
    reward: { type: "Spins", amount: 2, label: "2 Lucky Spins" },
    status: "next",
    perks: ["VIP Level multipliers (1.5x on all games)", "Access to secret vault drops"]
  },
  {
    level: 7,
    realmId: 2,
    name: "Grand Ascendant",
    minXP: 12000,
    maxXP: 18000,
    reward: { type: "VEs", amount: 1000, label: "1,000 VEs" },
    status: "locked",
    perks: ["Custom profile avatar borders", "Zero withdrawal processing fee"]
  },
  {
    level: 8,
    realmId: 2,
    name: "Mythic Vanguard",
    minXP: 18000,
    maxXP: 25000,
    reward: { type: "Gems", amount: 50, label: "50 Gems" },
    status: "locked",
    perks: ["2x Streak multiplier", "Direct VIP support concierge"]
  },
  {
    level: 9,
    realmId: 2,
    name: "Cosmic Overlord",
    minXP: 25000,
    maxXP: 35000,
    reward: { type: "Chest", amount: 1, label: "Cosmic Vault Chest" },
    status: "locked",
    perks: ["Guaranteed rare merchandise voucher", "Hall of Fame leaderboard insignia"]
  },
  {
    level: 10,
    realmId: 2,
    name: "Immortal Legend",
    minXP: 35000,
    maxXP: 50000,
    reward: { type: "VEs", amount: 5000, label: "5,000 VEs + 100 Gems" },
    status: "locked",
    isMilestoneVault: true,
    perks: ["Lifetime max VIP tier", "Founder's recognition club access"]
  },

  // ── World 3: Prismatic Caverns (11–15) ──
  {
    level: 11,
    realmId: 3,
    name: "Ruby Warmaster",
    minXP: 50000,
    maxXP: 70000,
    reward: { type: "VEs", amount: 1500, label: "1,500 VEs" },
    status: "locked",
    perks: ["Crimson weapon flare effect", "+10% XP on all arcade games"]
  },
  {
    level: 12,
    realmId: 3,
    name: "Topaz Sentinel",
    minXP: 70000,
    maxXP: 95000,
    reward: { type: "Gems", amount: 75, label: "75 Gems" },
    status: "locked",
    perks: ["Amber shield aura", "Double daily login rewards on weekends"]
  },
  {
    level: 13,
    realmId: 3,
    name: "Emerald Warlord",
    minXP: 95000,
    maxXP: 125000,
    reward: { type: "Spins", amount: 5, label: "5 Mega Spins" },
    status: "locked",
    perks: ["Jade dragon scales profile", "Extra daily mystery spin chance"]
  },
  {
    level: 14,
    realmId: 3,
    name: "Obsidian Knight",
    minXP: 125000,
    maxXP: 160000,
    reward: { type: "VEs", amount: 2500, label: "2,500 VEs" },
    status: "locked",
    perks: ["Darksteel banner theme", "Unlimited friend referral cap"]
  },
  {
    level: 15,
    realmId: 3,
    name: "Prismatic Sovereign",
    minXP: 160000,
    maxXP: 200000,
    reward: { type: "Chest", amount: 1, label: "Rainbow Crystal Vault" },
    status: "locked",
    isMilestoneVault: true,
    perks: ["Prismatic rainbow avatar glow", "Guaranteed luxury brand vouchers"]
  },

  // ── World 4: Quantum Highlands (16–20) ──
  {
    level: 16,
    realmId: 4,
    name: "Quantum Striker",
    minXP: 200000,
    maxXP: 250000,
    reward: { type: "VEs", amount: 3500, label: "3,500 VEs" },
    status: "locked",
    perks: ["Cyber neon grid badge", "Instant tournament bracket auto-entry"]
  },
  {
    level: 17,
    realmId: 4,
    name: "Hyperion Titan",
    minXP: 250000,
    maxXP: 310000,
    reward: { type: "Gems", amount: 150, label: "150 Gems" },
    status: "locked",
    perks: ["Molten magma card trim", "+25% token conversion velocity"]
  },
  {
    level: 18,
    realmId: 4,
    name: "Vortex Commander",
    minXP: 310000,
    maxXP: 380000,
    reward: { type: "Spins", amount: 10, label: "10 Ultra Spins" },
    status: "locked",
    perks: ["Gravity well animation", "Zero cooldown between redemption claims"]
  },
  {
    level: 19,
    realmId: 4,
    name: "Eclipse Archon",
    minXP: 380000,
    maxXP: 460000,
    reward: { type: "VEs", amount: 6000, label: "6,000 VEs" },
    status: "locked",
    perks: ["Solar eclipse corona border", "Access to Archon secret shop"]
  },
  {
    level: 20,
    realmId: 4,
    name: "Chrono Sovereign",
    minXP: 460000,
    maxXP: 550000,
    reward: { type: "Chest", amount: 1, label: "Chrono Time Vault" },
    status: "locked",
    isMilestoneVault: true,
    perks: ["Golden time dial insignia", "Permanent 2x multiplier on all XP drops"]
  },

  // ── World 5: Starborn Expanse (21–25) ──
  {
    level: 21,
    realmId: 5,
    name: "Nova Luminary",
    minXP: 550000,
    maxXP: 650000,
    reward: { type: "VEs", amount: 8000, label: "8,000 VEs" },
    status: "locked",
    perks: ["Supernova particle trail", "Custom animated chat badge"]
  },
  {
    level: 22,
    realmId: 5,
    name: "Starlight Paragon",
    minXP: 650000,
    maxXP: 770000,
    reward: { type: "Gems", amount: 250, label: "250 Gems" },
    status: "locked",
    perks: ["Pleiades star cluster title", "Priority access to prototype games"]
  },
  {
    level: 23,
    realmId: 5,
    name: "Nebula Monarch",
    minXP: 770000,
    maxXP: 900000,
    reward: { type: "Spins", amount: 15, label: "15 Nebula Spins" },
    status: "locked",
    perks: ["Cosmic spiral frame", "Guaranteed jackpot slice on daily spin"]
  },
  {
    level: 24,
    realmId: 5,
    name: "Pulsar Dominator",
    minXP: 900000,
    maxXP: 1050000,
    reward: { type: "VEs", amount: 12000, label: "12,000 VEs" },
    status: "locked",
    perks: ["Magnetic beam aura", "VIP tournament host privileges"]
  },
  {
    level: 25,
    realmId: 5,
    name: "Galactic Emperor",
    minXP: 1050000,
    maxXP: 1250000,
    reward: { type: "Chest", amount: 1, label: "Imperial Galaxy Chest" },
    status: "locked",
    isMilestoneVault: true,
    perks: ["Milky Way sovereign cape", "Direct revenue share reward pools"]
  },

  // ── World 6: Celestial Olympus (26–30) ──
  {
    level: 26,
    realmId: 6,
    name: "Astral Demiurge",
    minXP: 1250000,
    maxXP: 1500000,
    reward: { type: "VEs", amount: 18000, label: "18,000 VEs" },
    status: "locked",
    perks: ["Titan crown insignia", "Infinite streak protection freeze"]
  },
  {
    level: 27,
    realmId: 6,
    name: "Void Sovereign",
    minXP: 1500000,
    maxXP: 1800000,
    reward: { type: "Gems", amount: 500, label: "500 Gems" },
    status: "locked",
    perks: ["Event horizon accretion glow", "Exclusive VIP merchandise pack"]
  },
  {
    level: 28,
    realmId: 6,
    name: "Genesis Seraph",
    minXP: 1800000,
    maxXP: 2200000,
    reward: { type: "Spins", amount: 25, label: "25 Seraph Spins" },
    status: "locked",
    perks: ["Six-wing archangel emblem", "VIP governance voting rights"]
  },
  {
    level: 29,
    realmId: 6,
    name: "Eternal Overlord",
    minXP: 2200000,
    maxXP: 2700000,
    reward: { type: "VEs", amount: 30000, label: "30,000 VEs" },
    status: "locked",
    perks: ["Ouroboros dragon ring", "Dedicated VELOOP account executive"]
  },
  {
    level: 30,
    realmId: 6,
    name: "Omni Immortal",
    minXP: 2700000,
    maxXP: 3500000,
    reward: { type: "Chest", amount: 1, label: "Divine Pantheon Crown Vault (50,000 VEs + 1,000 Gems)" },
    status: "locked",
    isMilestoneVault: true,
    perks: [
      "Supreme VELOOP Pantheon Hall of Fame",
      "Immortal 16-ray solar divinity avatar badge",
      "Lifetime maximum platform VIP rewards status"
    ]
  }
];

export const INITIAL_USER_STATE = {
  userName: "VeLooper",
  greetingName: "VELOOP",
  currentLevel: 5,
  currentXP: 6420,
  levelBaseXP: 6000,
  nextLevelXP: 8000,
  veBalance: 1420,
  gemBalance: 45,
  streakDays: 7,
  tasksDoneToday: 4,
  tasksTotalToday: 8,
  xpEarnedToday: 215,
  vesEarnedToday: 35,
  nextLevelReward: {
    type: "VEs",
    amount: 500,
    label: "500 VEs",
    previewImage: "coins",
    gemBonus: 25
  }
};
