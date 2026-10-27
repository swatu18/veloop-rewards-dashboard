export const LEVEL_ROADMAP = [
  {
    level: 1,
    name: "Bronze Scout",
    minXP: 0,
    maxXP: 1000,
    reward: { type: "VEs", amount: 50, label: "50 VEs" },
    status: "completed",
    perks: ["Access to basic rewards", "Daily check-in streak"]
  },
  {
    level: 2,
    name: "Silver Pioneer",
    minXP: 1000,
    maxXP: 2500,
    reward: { type: "VEs", amount: 75, label: "75 VEs" },
    status: "completed",
    perks: ["5% boost on Watch & Earn", "Standard mini-games unlocked"]
  },
  {
    level: 3,
    name: "Gold Vanguard",
    minXP: 2500,
    maxXP: 4500,
    reward: { type: "VEs", amount: 100, label: "100 VEs" },
    status: "completed",
    perks: ["10% referral commission boost", "Weekly raffle entry"]
  },
  {
    level: 4,
    name: "Platinum Elite",
    minXP: 4500,
    maxXP: 6000,
    reward: { type: "Gems", amount: 10, label: "10 Gems" },
    status: "completed",
    perks: ["Exclusive Platinum badges", "15% discount in reward shop"]
  },
  {
    level: 5,
    name: "Diamond Champion",
    minXP: 6000,
    maxXP: 8000,
    reward: { type: "VEs", amount: 500, label: "500 VEs" },
    status: "current",
    perks: [
      "Higher daily XP earning limit (up to 2,000 XP/day)",
      "Instant access to High Roller arcade challenges",
      "Better reward conversion rates & priority redemption"
    ]
  },
  {
    level: 6,
    name: "Master Sovereign",
    minXP: 8000,
    maxXP: 12000,
    reward: { type: "Spins", amount: 2, label: "2 Lucky Spins" },
    status: "next",
    perks: ["VIP Level multipliers (1.5x on all games)", "Access to secret vault drops"]
  },
  {
    level: 7,
    name: "Grand Ascendant",
    minXP: 12000,
    maxXP: 18000,
    reward: { type: "VEs", amount: 1000, label: "1,000 VEs" },
    status: "locked",
    perks: ["Custom profile avatar borders", "Zero withdrawal processing fee"]
  },
  {
    level: 8,
    name: "Mythic Vanguard",
    minXP: 18000,
    maxXP: 25000,
    reward: { type: "Gems", amount: 50, label: "50 Gems" },
    status: "locked",
    perks: ["2x Streak multiplier", "Direct support concierge"]
  },
  {
    level: 9,
    name: "Cosmic Overlord",
    minXP: 25000,
    maxXP: 35000,
    reward: { type: "Chest", amount: 1, label: "Legendary Vault Box" },
    status: "locked",
    perks: ["Guaranteed rare merchandise voucher", "Hall of Fame badge"]
  },
  {
    level: 10,
    name: "Immortal Legend",
    minXP: 35000,
    maxXP: 50000,
    reward: { type: "VEs", amount: 5000, label: "5,000 VEs + 100 Gems" },
    status: "locked",
    perks: ["Lifetime max VIP tier", "Founder's recognition club"]
  }
];

export const INITIAL_USER_STATE = {
  userName: "Swathi G",
  greetingName: "VeLooper",
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
