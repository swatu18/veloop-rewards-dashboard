import React, { useState } from 'react';
import { Check, Lock, Award } from 'lucide-react';
import { LEVEL_ROADMAP } from '../../data/levelData';
import { useDashboard } from '../../context/DashboardContext';
import styles from './LevelRoadmap.module.css';

/* Tier color config (matches LevelBadge) */
const TIER_COLORS = {
  1: { primary: '#CD7F32', highlight: '#E8A87C', glow: 'rgba(205,127,50,0.6)' },
  2: { primary: '#D4D4D4', highlight: '#F5F5F5', glow: 'rgba(212,212,212,0.5)' },
  3: { primary: '#FBBF24', highlight: '#FDE68A', glow: 'rgba(251,191,36,0.65)' },
  4: { primary: '#E8F4F8', highlight: '#FFFFFF',  glow: 'rgba(148,200,216,0.6)' },
  5: { primary: '#67E8F9', highlight: '#BFEFFF', glow: 'rgba(103,232,249,0.7)' },
  6: { primary: '#C084FC', highlight: '#EDE9FE', glow: 'rgba(192,132,252,0.65)' },
  7: { primary: '#60A5FA', highlight: '#BFDBFE', glow: 'rgba(96,165,250,0.6)' },
  8: { primary: '#34D399', highlight: '#A7F3D0', glow: 'rgba(52,211,153,0.65)' },
  9: { primary: '#F472B6', highlight: '#FDE8FF', glow: 'rgba(244,114,182,0.7)' },
  10: { primary: '#FBBF24', highlight: '#FFFBEB', glow: 'rgba(253,230,138,0.9)' },
};

/* Premium node SVG per status */
function RoadmapNode({ level, status, isSelected, onClick }) {
  const tc = TIER_COLORS[level] || TIER_COLORS[5];
  const uid = `rn${level}`;
  const fmt = level < 10 ? `0${level}` : `${level}`;

  const isCurrent   = status === 'current';
  const isCompleted = status === 'completed';
  const isNext      = status === 'next';
  const isLocked    = status === 'locked';

  const ringStroke = isLocked ? 'rgba(255,255,255,0.12)' : tc.primary;
  const ringWidth  = isCurrent ? 3 : isNext ? 2 : 2;
  const ringDash   = isNext ? '5 3' : 'none';
  const innerFill  = isCompleted
    ? tc.primary
    : isCurrent
    ? tc.primary
    : isNext
    ? 'rgba(255,255,255,0.04)'
    : 'rgba(22,24,39,0.8)';

  return (
    <div
      className={[
        styles.nodeWrapper,
        styles[status],
        isSelected ? styles.selected : '',
      ].join(' ')}
      onClick={onClick}
    >
      {/* SVG node */}
      <div className={`${styles.nodeVisual} ${isCurrent ? styles.currentPulse : ''}`}>
        <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
          <defs>
            <linearGradient id={`rGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={tc.highlight} />
              <stop offset="100%" stopColor={tc.primary} />
            </linearGradient>
            <filter id={`rGlow-${uid}`} x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation={isCurrent ? '3' : isCompleted ? '2' : '1'} result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Outer pulse ring – current only */}
          {isCurrent && (
            <circle cx="26" cy="26" r="24"
              fill="none" stroke={tc.primary} strokeWidth="1.5" opacity="0.35"
              className={styles.outerPulseRing}
            />
          )}

          {/* Main ring border */}
          <circle cx="26" cy="26" r="22"
            fill="none"
            stroke={isLocked ? 'rgba(255,255,255,0.1)' : `url(#rGrad-${uid})`}
            strokeWidth={ringWidth}
            strokeDasharray={ringDash}
            filter={isLocked ? undefined : `url(#rGlow-${uid})`}
          />

          {/* Inner fill circle */}
          <circle cx="26" cy="26" r="17"
            fill={isLocked ? 'rgba(20,22,35,0.9)' : innerFill}
            opacity={1}
          />

          {/* Highlight gloss (completed + current) */}
          {(isCompleted || isCurrent) && (
            <ellipse cx="22" cy="20" rx="7" ry="4"
              fill="white" opacity="0.15" transform="rotate(-15 22 20)"
            />
          )}

          {/* Content inside the circle */}
          {isCompleted && (
            <g transform="translate(26,26)">
              {/* Checkmark */}
              <path d="M-7,0 L-2,5 L8,-6"
                stroke={level <= 3 ? '#0F172A' : '#FFFFFF'}
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                fill="none"
              />
            </g>
          )}

          {isCurrent && (
            <>
              {/* Number */}
              <text x="26" y="31" textAnchor="middle"
                fontFamily="'Space Grotesk', sans-serif"
                fontSize="13" fontWeight="900"
                fill={level <= 3 ? '#0F172A' : '#FFFFFF'}
              >
                {fmt}
              </text>
            </>
          )}

          {isNext && (
            <text x="26" y="31" textAnchor="middle"
              fontFamily="'Space Grotesk', sans-serif"
              fontSize="13" fontWeight="800"
              fill={tc.primary}
            >
              {fmt}
            </text>
          )}

          {isLocked && (
            <g transform="translate(26,26)">
              {/* Lock icon */}
              <rect x="-6" y="-2" width="12" height="9" rx="2"
                fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"
              />
              <path d="M-4,-2 L-4,-7 Q-4,-12 0,-12 Q4,-12 4,-7 L4,-2"
                stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none" strokeLinecap="round"
              />
            </g>
          )}
        </svg>
      </div>

      {/* Labels */}
      <div className={styles.nodeInfo}>
        <span className={styles.nodeLevelName}>
          {isCurrent
            ? <span className={styles.youAreHereTag} style={{ borderColor: tc.primary, color: tc.primary }}>YOU ARE HERE</span>
            : isNext
            ? <span className={styles.nextGoalTag}>NEXT GOAL</span>
            : `LVL ${fmt}`
          }
        </span>
        <span className={styles.rewardSnippet}>
          {LEVEL_ROADMAP.find(r => r.level === level)?.reward.label || ''}
        </span>
      </div>
    </div>
  );
}

export const LevelRoadmap = () => {
  const { user } = useDashboard();
  const [selectedLevel, setSelectedLevel] = useState(
    LEVEL_ROADMAP[user.currentLevel - 1] || LEVEL_ROADMAP[4]
  );
  const tc = TIER_COLORS[selectedLevel?.level] || TIER_COLORS[5];

  return (
    <div className={styles.roadmapSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.titleGroup}>
          <Award size={18} className={styles.headerIcon} />
          <h2 className={styles.sectionTitle}>PROGRESSION ROADMAP</h2>
        </div>
        <span className={styles.helperText}>Click any level to inspect rewards</span>
      </div>

      {/* Horizontal scrollable track */}
      <div className={styles.scrollContainer}>
        <div className={styles.roadmapTrack}>
          {LEVEL_ROADMAP.map((item, index) => {
            const isCompleted = item.level < user.currentLevel;
            const isCurrent   = item.level === user.currentLevel;
            const isNext      = item.level === user.currentLevel + 1;
            const isLocked    = item.level > user.currentLevel + 1;
            const isSelected  = selectedLevel?.level === item.level;

            const status = isCompleted ? 'completed'
              : isCurrent ? 'current'
              : isNext    ? 'next'
              : 'locked';

            const prevTc = TIER_COLORS[item.level - 1] || TIER_COLORS[1];
            const currTc = TIER_COLORS[item.level]     || TIER_COLORS[5];

            return (
              <div key={item.level} className={styles.nodeSlot}>
                {/* Connector line between nodes */}
                {index < LEVEL_ROADMAP.length - 1 && (
                  <div
                    className={styles.connector}
                    style={{
                      background: isCompleted
                        ? `linear-gradient(90deg, ${currTc.primary} 0%, ${TIER_COLORS[item.level + 1]?.primary || currTc.primary} 100%)`
                        : 'rgba(255,255,255,0.07)',
                      boxShadow: isCompleted ? `0 0 8px ${currTc.glow}` : 'none',
                    }}
                  />
                )}

                <RoadmapNode
                  level={item.level}
                  status={status}
                  isSelected={isSelected}
                  onClick={() => setSelectedLevel(item)}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Panel */}
      {selectedLevel && (
        <div
          className={styles.detailCard}
          style={{
            borderColor: `${tc.primary}40`,
            boxShadow: `0 0 30px ${tc.glow}20, inset 0 0 30px ${tc.glow}08`,
          }}
        >
          {/* Tier color accent bar */}
          <div className={styles.detailAccentBar} style={{ background: tc.primary }} />

          <div className={styles.detailHeader}>
            <div className={styles.detailTitleGroup}>
              <span className={styles.detailLevelNum} style={{ color: tc.primary }}>
                LEVEL {selectedLevel.level < 10 ? `0${selectedLevel.level}` : selectedLevel.level}
              </span>
              <h4 className={styles.detailLevelName}>{selectedLevel.name}</h4>
            </div>

            <div className={styles.statusBadgeWrapper}>
              {selectedLevel.level < user.currentLevel && (
                <span className={styles.badgeSuccess}>✓ Completed</span>
              )}
              {selectedLevel.level === user.currentLevel && (
                <span className={styles.badgeCurrent} style={{ borderColor: tc.primary, color: tc.primary, background: `${tc.primary}20` }}>
                  ★ Current Tier
                </span>
              )}
              {selectedLevel.level === user.currentLevel + 1 && (
                <span className={styles.badgeNext}>🎯 Next Target</span>
              )}
              {selectedLevel.level > user.currentLevel + 1 && (
                <span className={styles.badgeLocked}>🔒 Locked Tier</span>
              )}
            </div>
          </div>

          <div className={styles.detailBody}>
            <div className={styles.statBox}>
              <span className={styles.statLabel}>XP Threshold</span>
              <span className={styles.statVal}>
                {selectedLevel.minXP.toLocaleString()} – {selectedLevel.maxXP.toLocaleString()} XP
              </span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statLabel}>Milestone Reward</span>
              <span className={styles.statValGold} style={{ color: tc.primary }}>
                {selectedLevel.reward.label}
              </span>
            </div>
          </div>

          <div className={styles.perksList}>
            <span className={styles.perksTitle}>Tier Benefits &amp; Perks:</span>
            <ul>
              {selectedLevel.perks.map((perk, i) => (
                <li key={i}>
                  <span className={styles.perkDot} style={{ color: tc.primary }}>▸</span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
