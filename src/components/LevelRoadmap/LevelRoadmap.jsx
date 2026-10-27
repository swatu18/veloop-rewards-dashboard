import React, { useState } from 'react';
import { Check, Lock, MapPin, Sparkles, ChevronRight, Award } from 'lucide-react';
import { LEVEL_ROADMAP } from '../../data/levelData';
import { useDashboard } from '../../context/DashboardContext';
import styles from './LevelRoadmap.module.css';

export const LevelRoadmap = () => {
  const { user } = useDashboard();
  const [selectedLevel, setSelectedLevel] = useState(LEVEL_ROADMAP[user.currentLevel - 1] || LEVEL_ROADMAP[4]);

  return (
    <div className={styles.roadmapSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.titleGroup}>
          <Award size={18} className={styles.headerIcon} />
          <h2 className={styles.sectionTitle}>PROGRESSION ROADMAP</h2>
        </div>
        <span className={styles.helperText}>Click any level to inspect rewards</span>
      </div>

      {/* Horizontal / Responsive Stepper Track */}
      <div className={styles.scrollContainer}>
        <div className={styles.roadmapTrack}>
          {LEVEL_ROADMAP.map((item, index) => {
            const isCompleted = item.level < user.currentLevel;
            const isCurrent = item.level === user.currentLevel;
            const isNext = item.level === user.currentLevel + 1;
            const isLocked = item.level > user.currentLevel + 1;
            const isSelected = selectedLevel?.level === item.level;

            let statusClass = styles.locked;
            if (isCompleted) statusClass = styles.completed;
            if (isCurrent) statusClass = styles.current;
            if (isNext) statusClass = styles.next;

            return (
              <div 
                key={item.level} 
                className={`${styles.nodeWrapper} ${statusClass} ${isSelected ? styles.selected : ''}`}
                onClick={() => setSelectedLevel(item)}
              >
                {/* Connecting Line */}
                {index < LEVEL_ROADMAP.length - 1 && (
                  <div className={`${styles.connector} ${isCompleted ? styles.connectorCompleted : ''}`} />
                )}

                {/* Node Pill / Circle */}
                <div className={styles.nodeCircle}>
                  {isCompleted && <Check size={16} className={styles.checkIcon} />}
                  {isCurrent && (
                    <div className={styles.currentIndicator}>
                      <span className={styles.currentPulse}></span>
                      <span className={styles.nodeNum}>{item.level < 10 ? `0${item.level}` : item.level}</span>
                    </div>
                  )}
                  {isNext && <span className={styles.nodeNum}>{item.level < 10 ? `0${item.level}` : item.level}</span>}
                  {isLocked && <Lock size={14} className={styles.lockIcon} />}
                </div>

                {/* Level Title & Tag */}
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
            );
          })}
        </div>
      </div>

      {/* Selected Level Detail Panel */}
      {selectedLevel && (
        <div className={styles.detailCard}>
          <div className={styles.detailHeader}>
            <div className={styles.detailTitleGroup}>
              <span className={styles.detailLevelNum}>
                LEVEL {selectedLevel.level < 10 ? `0${selectedLevel.level}` : selectedLevel.level}
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
                {selectedLevel.minXP.toLocaleString()} - {selectedLevel.maxXP.toLocaleString()} XP
              </span>
            </div>

            <div className={styles.statBox}>
              <span className={styles.statLabel}>Milestone Reward</span>
              <span className={styles.statValGold}>{selectedLevel.reward.label}</span>
            </div>
          </div>

          <div className={styles.perksList}>
            <span className={styles.perksTitle}>Tier Benefits & Perks:</span>
            <ul>
              {selectedLevel.perks.map((perk, i) => (
                <li key={i}>{perk}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
