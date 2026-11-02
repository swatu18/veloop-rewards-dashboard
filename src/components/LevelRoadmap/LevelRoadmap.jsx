import React, { useState } from 'react';
import { Award, Sparkles, ChevronRight, Check, Lock, Shield, Eye, Filter } from 'lucide-react';
import { LEVEL_ROADMAP } from '../../data/levelData';
import { useDashboard } from '../../context/DashboardContext';
import { LevelBadge, MiniTierBadge } from '../Badges/LevelBadge';
import { TIER_METADATA } from '../Badges/TierBadgeArt';
import styles from './LevelRoadmap.module.css';

export const LevelRoadmap = () => {
  const { user } = useDashboard();
  const [activeView, setActiveView] = useState('roadmap'); // 'roadmap' | 'collection'
  const [rarityFilter, setRarityFilter] = useState('ALL'); // 'ALL' | 'UNLOCKED' | 'LOCKED' | 'COMMON' | 'RARE' | 'LEGENDARY' | 'MYTHIC'
  const [selectedLevel, setSelectedLevel] = useState(
    LEVEL_ROADMAP[user.currentLevel - 1] || LEVEL_ROADMAP[4]
  );
  const [inspectModalItem, setInspectModalItem] = useState(null);

  const selectedMeta = TIER_METADATA[selectedLevel?.level] || TIER_METADATA[5];

  // Filter badges for collection view
  const filteredBadges = LEVEL_ROADMAP.filter((item) => {
    const meta = TIER_METADATA[item.level] || {};
    const isUnlocked = item.level <= user.currentLevel;

    if (rarityFilter === 'UNLOCKED') return isUnlocked;
    if (rarityFilter === 'LOCKED') return !isUnlocked;
    if (rarityFilter === 'COMMON') return meta.rarity === 'COMMON';
    if (rarityFilter === 'UNCOMMON') return meta.rarity === 'UNCOMMON';
    if (rarityFilter === 'RARE') return meta.rarity === 'RARE';
    if (rarityFilter === 'EPIC') return meta.rarity === 'EPIC';
    if (rarityFilter === 'LEGENDARY') return meta.rarity === 'LEGENDARY';
    if (rarityFilter === 'MYTHIC') return meta.rarity === 'MYTHIC' || meta.rarity === 'DIVINE';
    return true; // 'ALL'
  });

  const unlockedCount = LEVEL_ROADMAP.filter(i => i.level <= user.currentLevel).length;

  return (
    <div className={styles.roadmapSection}>
      {/* ── Section Header with View Toggle ── */}
      <div className={styles.sectionHeader}>
        <div className={styles.titleGroup}>
          <Award size={20} className={styles.headerIcon} />
          <div>
            <h2 className={styles.sectionTitle}>PROGRESSION ROADMAP &amp; BADGES</h2>
            <span className={styles.helperText}>
              {unlockedCount} of {LEVEL_ROADMAP.length} Badges Unlocked • Tier V Diamond Champion
            </span>
          </div>
        </div>

        {/* View Switcher: Stepper vs Collection */}
        <div className={styles.viewToggleGroup}>
          <button
            className={`${styles.viewBtn} ${activeView === 'roadmap' ? styles.viewBtnActive : ''}`}
            onClick={() => setActiveView('roadmap')}
          >
            <Sparkles size={13} />
            <span>Timeline</span>
          </button>
          <button
            className={`${styles.viewBtn} ${activeView === 'collection' ? styles.viewBtnActive : ''}`}
            onClick={() => setActiveView('collection')}
          >
            <Shield size={13} />
            <span>Trophy Room</span>
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          VIEW 1: HORIZONTAL ROADMAP STEPPER
      ═══════════════════════════════════════════════════════════ */}
      {activeView === 'roadmap' && (
        <>
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
                    {/* Glowing Connector between badge nodes */}
                    {index < LEVEL_ROADMAP.length - 1 && (
                      <div
                        className={styles.connector}
                        style={{
                          background: isCompleted
                            ? `linear-gradient(90deg, ${currMeta.primary} 0%, ${nextMeta.primary} 100%)`
                            : isCurrent
                            ? `linear-gradient(90deg, #F59E0B 0%, rgba(192, 132, 252, 0.4) 100%)`
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
                      title={`Inspect Level ${item.level}: ${item.name}`}
                    >
                      <div className={styles.badgeHolder}>
                        <MiniTierBadge level={item.level} status={status} />
                      </div>

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

          {/* Selected Level Detail Inspector */}
          {selectedLevel && (
            <div
              className={styles.detailCard}
              style={{
                borderColor: `${selectedMeta.primary}55`,
                boxShadow: `0 8px 32px ${selectedMeta.glow}25, inset 0 0 40px ${selectedMeta.glow}10`,
              }}
            >
              <div className={styles.detailAccentBar} style={{ background: selectedMeta.primary }} />

              <div className={styles.detailLayout}>
                {/* Left: High-Resolution 3D Metallic Badge Showcase */}
                <div className={styles.detailBadgeCol}>
                  <LevelBadge
                    level={selectedLevel.level}
                    size="normal"
                    animated={true}
                    showStars={true}
                    showRarity={true}
                  />
                  <span
                    className={styles.tierFinishTag}
                    style={{
                      borderColor: selectedMeta.primary,
                      color: selectedMeta.primary,
                    }}
                  >
                    {selectedMeta.finish}
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

                  <p className={styles.detailLoreText}>{selectedMeta.description}</p>

                  <div className={styles.detailBody}>
                    <div className={styles.statBox}>
                      <span className={styles.statLabel}>XP Threshold</span>
                      <span className={styles.statVal}>
                        {selectedLevel.minXP.toLocaleString()} – {selectedLevel.maxXP.toLocaleString()} XP
                      </span>
                    </div>
                    <div className={styles.statBox}>
                      <span className={styles.statLabel}>Milestone Reward</span>
                      <span className={`${styles.statVal} ${styles.statValGold}`}>
                        {selectedLevel.reward.label}
                      </span>
                    </div>
                  </div>

                  <div className={styles.perksList}>
                    <span className={styles.perksHeading}>Tier Benefits &amp; Perks:</span>
                    <ul className={styles.perksItems}>
                      {selectedLevel.perks.map((perk, i) => (
                        <li key={i} className={styles.perkItem}>
                          <span className={styles.perkDot} style={{ color: selectedMeta.primary }}>•</span>
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* ═══════════════════════════════════════════════════════════
          VIEW 2: TROPHY ROOM & BADGE COLLECTION LAYOUT
      ═══════════════════════════════════════════════════════════ */}
      {activeView === 'collection' && (
        <div className={styles.collectionContainer}>
          {/* Collection Progress Bar */}
          <div className={styles.collectionSummaryBar}>
            <div className={styles.summaryLeft}>
              <span className={styles.summaryTitle}>Badge Mastery Progress</span>
              <span className={styles.summaryFraction}>
                <strong>{unlockedCount}</strong> / {LEVEL_ROADMAP.length} Badges
              </span>
            </div>
            <div className={styles.summaryTrack}>
              <div
                className={styles.summaryFill}
                style={{ width: `${(unlockedCount / LEVEL_ROADMAP.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Rarity & Status Filter Pills */}
          <div className={styles.filtersScroll}>
            {[
              { id: 'ALL', label: 'All Badges (10)' },
              { id: 'UNLOCKED', label: `Unlocked (${unlockedCount})` },
              { id: 'LOCKED', label: `Locked (${LEVEL_ROADMAP.length - unlockedCount})` },
              { id: 'COMMON', label: 'Bronze Common' },
              { id: 'UNCOMMON', label: 'Silver Uncommon' },
              { id: 'RARE', label: 'Gold Rare' },
              { id: 'EPIC', label: 'Platinum Epic' },
              { id: 'LEGENDARY', label: 'Legendary' },
              { id: 'MYTHIC', label: 'Mythic & Divine' },
            ].map((f) => (
              <button
                key={f.id}
                className={`${styles.filterPill} ${rarityFilter === f.id ? styles.filterPillActive : ''}`}
                onClick={() => setRarityFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Badges Collection Grid */}
          <div className={styles.collectionGrid}>
            {filteredBadges.map((item) => {
              const meta = TIER_METADATA[item.level] || TIER_METADATA[5];
              const isUnlocked = item.level <= user.currentLevel;
              const isCurrent = item.level === user.currentLevel;

              return (
                <div
                  key={item.level}
                  className={[
                    styles.collectionCard,
                    isUnlocked ? styles.cardUnlocked : styles.cardLocked,
                    isCurrent ? styles.cardCurrent : '',
                  ].join(' ')}
                  onClick={() => setInspectModalItem(item)}
                >
                  {/* Card Rarity Header */}
                  <div className={styles.cardHeaderRow}>
                    <span
                      className={styles.cardRarityTag}
                      style={{
                        color: meta.rarityColor,
                        borderColor: `${meta.rarityColor}55`,
                        background: `${meta.rarityColor}18`,
                      }}
                    >
                      {meta.rarity}
                    </span>

                    {isUnlocked ? (
                      <span className={styles.cardUnlockedBadge}>
                        <Check size={11} /> Unlocked
                      </span>
                    ) : (
                      <span className={styles.cardLockedBadge}>
                        <Lock size={11} /> Lvl {item.level}
                      </span>
                    )}
                  </div>

                  {/* 3D Badge Visual */}
                  <div className={styles.cardBadgeWrap}>
                    <LevelBadge
                      level={item.level}
                      size="normal"
                      showStars={true}
                      animated={isCurrent}
                    />
                  </div>

                  {/* Badge Info */}
                  <div className={styles.cardInfo}>
                    <span className={styles.cardFinish}>{meta.finish}</span>
                    <h5 className={styles.cardName}>{item.name}</h5>
                    <span className={styles.cardRewardSnippet}>
                      Reward: {item.reward.label}
                    </span>
                  </div>

                  <button className={styles.inspectBtn}>
                    <Eye size={12} />
                    <span>Inspect 3D Badge</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── 3D Badge Inspection Modal ── */}
      {inspectModalItem && (
        <div className={styles.inspectBackdrop} onClick={() => setInspectModalItem(null)}>
          <div className={styles.inspectModal} onClick={(e) => e.stopPropagation()}>
            {(() => {
              const meta = TIER_METADATA[inspectModalItem.level] || TIER_METADATA[5];
              const isUnlocked = inspectModalItem.level <= user.currentLevel;

              return (
                <>
                  <div
                    className={styles.inspectHeaderBar}
                    style={{ background: meta.primary }}
                  />

                  <div className={styles.inspectBody}>
                    <div className={styles.inspectBadgeShowcase}>
                      <LevelBadge
                        level={inspectModalItem.level}
                        size="large"
                        animated={true}
                        showStars={true}
                        showRarity={true}
                      />
                    </div>

                    <div className={styles.inspectContent}>
                      <div className={styles.inspectRarityRow}>
                        <span
                          className={styles.inspectRarity}
                          style={{
                            color: meta.rarityColor,
                            borderColor: meta.rarityColor,
                          }}
                        >
                          {meta.rarity} TIER
                        </span>
                        <span className={styles.inspectFinish}>{meta.finish}</span>
                      </div>

                      <h3 className={styles.inspectTitle}>{inspectModalItem.name}</h3>
                      <span className={styles.inspectSubtitle}>{meta.themeName}</span>

                      <p className={styles.inspectLore}>{meta.description}</p>

                      <div className={styles.inspectStatsGrid}>
                        <div className={styles.inspectStatBox}>
                          <span className={styles.inspectStatLabel}>Unlock Threshold</span>
                          <span className={styles.inspectStatValue}>
                            {inspectModalItem.minXP.toLocaleString()} XP
                          </span>
                        </div>
                        <div className={styles.inspectStatBox}>
                          <span className={styles.inspectStatLabel}>Milestone Award</span>
                          <span className={`${styles.inspectStatValue} ${styles.goldVal}`}>
                            {inspectModalItem.reward.label}
                          </span>
                        </div>
                      </div>

                      <div className={styles.inspectStatusRow}>
                        {isUnlocked ? (
                          <div className={styles.inspectUnlockedCallout}>
                            <Check size={16} />
                            <span>Badge Claimed in Your Trophy Vault</span>
                          </div>
                        ) : (
                          <div className={styles.inspectLockedCallout}>
                            <Lock size={16} />
                            <span>Earn {inspectModalItem.minXP.toLocaleString()} XP to unlock this crest</span>
                          </div>
                        )}
                      </div>

                      <button
                        className={styles.closeInspectBtn}
                        onClick={() => setInspectModalItem(null)}
                      >
                        Close Showcase
                      </button>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
};
