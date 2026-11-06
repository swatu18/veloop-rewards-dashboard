import React, { useState } from 'react';
import { 
  Trophy, 
  Users, 
  Flame, 
  Swords, 
  Crown, 
  Medal, 
  TrendingUp, 
  ChevronRight, 
  Sparkles,
  Zap,
  Shield,
  ArrowLeft
} from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import styles from './MultiplayerLeaderboard.module.css';

const MOCK_LEADERBOARD = [
  { rank: 1, name: 'Alex "Apex" Morgan', level: 10, tier: 'Immortal Legend', xp: 48920, streak: 34, avatar: 'AM', isUser: false, change: 'up' },
  { rank: 2, name: 'Kavya "Valkyrie" Sen', level: 9, tier: 'Cosmic Overlord', xp: 32450, streak: 28, avatar: 'KS', isUser: false, change: 'same' },
  { rank: 3, name: 'Rohan "Thunder" Das', level: 8, tier: 'Mythic Vanguard', xp: 23110, streak: 21, avatar: 'RD', isUser: false, change: 'up' },
  { rank: 4, name: 'Elena Rostova', level: 7, tier: 'Grand Ascendant', xp: 16890, streak: 15, avatar: 'ER', isUser: false, change: 'down' },
  { rank: 5, name: 'Swathi G (You)', level: 5, tier: 'Diamond Champion', xp: 6420, streak: 7, avatar: 'SG', isUser: true, change: 'up' },
  { rank: 6, name: 'Marcus Chen', level: 5, tier: 'Diamond Champion', xp: 6180, streak: 12, avatar: 'MC', isUser: false, change: 'down' },
  { rank: 7, name: 'Priya Sharma', level: 4, tier: 'Platinum Elite', xp: 5420, streak: 9, avatar: 'PS', isUser: false, change: 'up' },
  { rank: 8, name: 'David Kim', level: 4, tier: 'Platinum Elite', xp: 4950, streak: 6, avatar: 'DK', isUser: false, change: 'same' },
];

const TOURNAMENT_MATCHUPS = [
  {
    id: 'm1',
    round: 'Quarter-Finals',
    player1: { name: 'Alex M.', score: 1420, won: true },
    player2: { name: 'Elena R.', score: 1180, won: false },
    status: 'COMPLETED'
  },
  {
    id: 'm2',
    round: 'Quarter-Finals',
    player1: { name: 'Swathi G (You)', score: 1350, won: true },
    player2: { name: 'Marcus C.', score: 980, won: false },
    status: 'COMPLETED'
  },
  {
    id: 'm3',
    round: 'Semi-Finals',
    player1: { name: 'Swathi G (You)', score: 0, won: null },
    player2: { name: 'Alex M.', score: 0, won: null },
    status: 'LIVE_RACE'
  },
  {
    id: 'm4',
    round: 'Grand Finals',
    player1: { name: 'TBD', score: 0, won: null },
    player2: { name: 'TBD', score: 0, won: null },
    status: 'UPCOMING'
  }
];

export const MultiplayerLeaderboard = ({ isFullPage = false }) => {
  const { setActiveScreen, user } = useDashboard();
  const [activeTab, setActiveTab] = useState('leaderboard'); // 'leaderboard' | 'tournament'
  const [timeframe, setTimeframe] = useState('WEEKLY'); // 'WEEKLY' | 'ALL_TIME'

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.titleRow}>
          {isFullPage && (
            <button 
              className={styles.backBtn}
              onClick={() => setActiveScreen('dashboard')}
              aria-label="Back to Dashboard"
            >
              <ArrowLeft size={18} />
            </button>
          )}
          <div className={styles.iconBadge}>
            <Trophy size={18} className={styles.trophyIcon} />
          </div>
          <div>
            <h3 className={styles.title}>MULTIPLAYER LEAGUE &amp; TOURNAMENTS</h3>
            <span className={styles.subtitle}>Compete with top players across India • Weekly prize pool: 50,000 VEs</span>
          </div>
        </div>

        {/* Tab switchers */}
        <div className={styles.tabGroup}>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'leaderboard' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('leaderboard')}
          >
            <Crown size={14} />
            <span>Leaderboard</span>
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'tournament' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('tournament')}
          >
            <Swords size={14} />
            <span>Bracket Race</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: LEADERBOARD */}
      {activeTab === 'leaderboard' && (
        <div className={styles.leaderboardBody}>
          {/* Podium for Top 3 */}
          <div className={styles.podiumRow}>
            {/* Rank 2 */}
            <div className={`${styles.podiumCard} ${styles.rankTwo}`}>
              <div className={styles.podiumMedal}>🥈</div>
              <div className={styles.avatarWrap}>KS</div>
              <span className={styles.podiumName}>Kavya S.</span>
              <span className={styles.podiumXP}>32,450 XP</span>
              <span className={styles.podiumTier}>Cosmic Overlord</span>
            </div>

            {/* Rank 1 */}
            <div className={`${styles.podiumCard} ${styles.rankOne}`}>
              <div className={styles.podiumCrown}><Crown size={20} /></div>
              <div className={`${styles.avatarWrap} ${styles.avatarGold}`}>AM</div>
              <span className={styles.podiumName}>Alex Morgan</span>
              <span className={styles.podiumXPGold}>48,920 XP</span>
              <span className={styles.podiumTierGold}>Immortal Legend</span>
            </div>

            {/* Rank 3 */}
            <div className={`${styles.podiumCard} ${styles.rankThree}`}>
              <div className={styles.podiumMedal}>🥉</div>
              <div className={styles.avatarWrap}>RD</div>
              <span className={styles.podiumName}>Rohan D.</span>
              <span className={styles.podiumXP}>23,110 XP</span>
              <span className={styles.podiumTier}>Mythic Vanguard</span>
            </div>
          </div>

          {/* Roster list */}
          <div className={styles.listWrap}>
            {MOCK_LEADERBOARD.slice(3).map((player) => (
              <div 
                key={player.rank} 
                className={`${styles.playerRow} ${player.isUser ? styles.userHighlightRow : ''}`}
              >
                <div className={styles.rankCol}>
                  <span className={styles.rankNumber}>#{player.rank}</span>
                  {player.change === 'up' && <span className={styles.trendUp}>▲</span>}
                  {player.change === 'down' && <span className={styles.trendDown}>▼</span>}
                  {player.change === 'same' && <span className={styles.trendSame}>•</span>}
                </div>

                <div className={styles.playerInfoCol}>
                  <div className={styles.playerAvatar}>{player.avatar}</div>
                  <div className={styles.nameMeta}>
                    <span className={styles.playerName}>
                      {player.name}
                      {player.isUser && <span className={styles.youTag}>YOU</span>}
                    </span>
                    <span className={styles.playerTier}>Tier V • {player.tier}</span>
                  </div>
                </div>

                <div className={styles.statsCol}>
                  <div className={styles.streakPill}>
                    <Flame size={12} className={styles.flameIcon} />
                    <span>{player.streak}d</span>
                  </div>
                  <span className={styles.playerXP}>{player.xp.toLocaleString()} XP</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 2: TOURNAMENT BRACKETS */}
      {activeTab === 'tournament' && (
        <div className={styles.tournamentBody}>
          <div className={styles.bannerAlert}>
            <Zap size={16} className={styles.zapIcon} />
            <div>
              <strong>Semi-Final Matchup Live!</strong> Your next arcade race starts in <strong>02h 14m</strong>. Winner advances to Grand Finals for 10,000 VEs.
            </div>
          </div>

          <div className={styles.bracketsGrid}>
            {TOURNAMENT_MATCHUPS.map((match) => (
              <div key={match.id} className={styles.matchCard}>
                <div className={styles.matchHeader}>
                  <span className={styles.roundLabel}>{match.round}</span>
                  <span className={`${styles.statusBadge} ${styles[match.status]}`}>
                    {match.status === 'LIVE_RACE' ? '🔴 LIVE RACE' : match.status}
                  </span>
                </div>

                <div className={styles.matchVersus}>
                  <div className={`${styles.matchPlayer} ${match.player1.won ? styles.winnerPlayer : ''}`}>
                    <span className={styles.pName}>{match.player1.name}</span>
                    <span className={styles.pScore}>{match.player1.score > 0 ? `${match.player1.score} pts` : '—'}</span>
                  </div>
                  <div className={styles.vsDivider}>VS</div>
                  <div className={`${styles.matchPlayer} ${match.player2.won ? styles.winnerPlayer : ''}`}>
                    <span className={styles.pName}>{match.player2.name}</span>
                    <span className={styles.pScore}>{match.player2.score > 0 ? `${match.player2.score} pts` : '—'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
