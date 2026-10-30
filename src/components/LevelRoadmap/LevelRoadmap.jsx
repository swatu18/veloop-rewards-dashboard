import React, { useState } from 'react';
import { Award, Sparkles, ChevronRight, Check, Lock } from 'lucide-react';
import { LEVEL_ROADMAP } from '../../data/levelData';
import { useDashboard } from '../../context/DashboardContext';
import { LevelBadge, MiniTierBadge } from '../Badges/LevelBadge';
import { TIER_METADATA } from '../Badges/TierBadgeArt';
import styles from './LevelRoadmap.module.css';

export const LevelRoadmap = () => {
  const { user } = useDashboard();
  const [selectedLevel, setSelectedLevel] = useState(
    LEVEL_ROADMAP[user.currentLevel - 1] || LEVEL_ROADMAP[4]
  );
  const selectedMeta = TIER_METADATA[selectedLevel?.level] || TIER_METADATA[5];

  return (
    <div className={styles.roadmapSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.titleGroup}>
          <Award size={18} className={styles.headerIcon} />
          <h2 className={styles.sectionTitle}>PROGRESSION ROADMAP</h2>
        </div>
        <span className={styles.helperText}>Tap any tier to inspect badges &amp; rewards</span>
      </div>

      {/* Horizontal Stepper Track with Authentic Tier Badges */}
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

            const currMeta = TIER_METADATA[item.level] || TIER_METADATA[5];
            const nextMeta = TIER_METADATA[item.level + 1] || currMeta;

            return (
              <div key={item.level} className={styles.nodeSlot}>
                {/* Connector line between badge nodes */}
                {index < LEVEL_ROADMAP.length - 1 && (
                  <div
                    className={styles.connector}
                    style={{
                      background: isCompleted
                        ? `linear-gradient(90deg, ${currMeta.primary} 0%, ${nextMeta.primary} 100%)`
                        : 'rgba(255, 255, 255, 0.08)',
                      boxShadow: isCompleted ? `0 0 10px ${currMeta.glow}` : 'none',
                    }}
                  />
                )}

                {/* Interactive Node Wrapper */}
                <div
                  className={[
                    styles.nodeWrapper,
                    styles[status],
                    isSelected ? styles.selected : '',
                  ].join(' ')}
                  onClick={() => setSelectedLevel(item)}
                >
                  {/* Unique Tier Badge Art inside the roadmap */}
                  <div className={styles.badgeHolder}>
                    <MiniTierBadge level={item.level} status={status} />
                  </div>

                  {/* Level labels below badge */}
                  <div className={styles.nodeInfo}>
                    <span className={styles.nodeLevelName}>
                      {isCurrent ? (
                        <span className={styles.youAreHereTag}>YOU ARE HERE</span>
                      ) : isNext ? (
                        <span className={styles.nextGoalTag}>NEXT GOAL</span>
                      ) : (
                        `LVL ${item.level < 10 ? `0${item.level}` : item.level}`
                      )}
                    </span>
                    <span className={styles.rewardSnippet}>
                      {item.reward.label}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Level Detail Panel with High-Resolution Badge Showcase */}
      {selectedLevel && (
        <div
          className={styles.detailCard}
          style={{
            borderColor: `${selectedMeta.primary}55`,
            boxShadow: `0 8px 32px ${selectedMeta.glow}25, inset 0 0 40px ${selectedMeta.glow}10`,
          }}
        >
          {/* Top Tier Accent Strip */}
          <div className={styles.detailAccentBar} style={{ background: selectedMeta.primary }} />

          <div className={styles.detailLayout}>
            {/* Left: High-Resolution Badge Showcase */}
            <div className={styles.detailBadgeCol}>
              <LevelBadge level={selectedLevel.level} size="normal" animated={true} showStars={true} />
              <span className={styles.tierShapeTag} style={{ color: selectedMeta.primary }}>
                {selectedMeta.shape}
              </span>
            </div>

            {/* Right: Tier Details & Perks */}
            <div className={styles.detailInfoCol}>
              <div className={styles.detailHeader}>
                <div className={styles.detailTitleGroup}>
                  <span className={styles.detailLevelNum} style={{ color: selectedMeta.primary }}>
                    LEVEL {selectedLevel.level < 10 ? `0${selectedLevel.level}` : selectedLevel.level} • {selectedMeta.themeName}
                  </span>
                  <h4 className={styles.detailLevelName}>{selectedLevel.name}</h4>
                </div>

                <div className={styles.statusBadgeWrapper}>
                  {selectedLevel.level < user.currentLevel && (
                    <span className={styles.badgeSuccess}>✓ Completed</span>
                  )}
                  {selectedLevel.level === user.currentLevel && (
                    <span className={styles.badgeCurrent}>★ Current Tier</span>
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
                  <span className={styles.statValGold} style={{ color: selectedMeta.primary }}>
                    {selectedLevel.reward.label}
                  </span>
                </div>
              </div>

              <div className={styles.perksList}>
                <span className={styles.perksTitle}>Tier Benefits &amp; Perks:</span>
                <ul>
                  {selectedLevel.perks.map((perk, i) => (
                    <li key={i}>
                      <span className={styles.perkDot} style={{ color: selectedMeta.primary }}>▸</span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
