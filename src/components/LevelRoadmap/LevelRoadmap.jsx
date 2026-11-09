import React, { useState } from 'react';
import { Award, Sparkles, ChevronRight, Check, Lock, Shield, Eye, Filter, Zap, Gift } from 'lucide-react';
import { LEVEL_ROADMAP } from '../../data/levelData';
import { useDashboard } from '../../context/DashboardContext';
import { LevelBadge, MiniTierBadge } from '../Badges/LevelBadge';
import { TIER_METADATA } from '../Badges/TierBadgeArt';
import styles from './LevelRoadmap.module.css';

export const LevelRoadmap = () => {
  const { user, currentXP, progressPercentage } = useDashboard();
  const [activeView, setActiveView] = useState('collection'); // Default to Trophy Room so all 10 Level Cards are shown upfront
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
          <div className={styles.headerIconWrap}>
            <Award size={22} className={styles.headerIcon} />
          </div>
          <div>
            <h2 className={styles.sectionTitle}>PROGRESSION ROADMAP &amp; LEVEL CARDS</h2>
            <span className={styles.helperText}>
              {unlockedCount} of {LEVEL_ROADMAP.length} Prestige Tiers Unlocked • Level {user.currentLevel < 10 ? `0${user.currentLevel}` : user.currentLevel} Active
            </span>
          </div>
        </div>

        {/* View Switcher: Level Cards vs Timeline */}
        <div className={styles.viewToggleGroup}>
          <button
            className={`${styles.viewBtn} ${activeView === 'collection' ? styles.viewBtnActive : ''}`}
            onClick={() => setActiveView('collection')}
          >
            <Shield size={14} />
            <span>Level Cards (10 Tiers)</span>
          </button>
          <button
            className={`${styles.viewBtn} ${activeView === 'roadmap' ? styles.viewBtnActive : ''}`}
            onClick={() => setActiveView('roadmap')}
          >
            <Sparkles size={14} />
            <span>Timeline Path</span>
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
                      >
                        {isCompleted && <div className={styles.connectorPulse} />}
                      </div>
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
                            <span className={styles.youAreHereTag}>★ YOU ARE HERE</span>
                          ) : isNext ? (
                            <span className={styles.nextGoalTag}>🎯 NEXT TARGET</span>
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
                    size="large"
                    animated={true}
                    showStars={true}
                    showRarity={true}
                  />
                  <span
                    className={styles.tierFinishTag}
                    style={{
                      borderColor: selectedMeta.primary,
                      color: selectedMeta.primary,
                      boxShadow: `0 2px 10px ${selectedMeta.glow}`,
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

                  {/* Level Progress Indicator */}
                  <div className={styles.detailProgressBlock}>
                    <div className={styles.detailProgressHeader}>
                      <span className={styles.detailProgressTitle}>
                        {selectedLevel.level < user.currentLevel ? 'Level Status: Completed'
                          : selectedLevel.level === user.currentLevel ? `Active Progression (${progressPercentage}%)`
                          : `Required XP: ${selectedLevel.minXP.toLocaleString()} XP`}
                      </span>
                      <span className={styles.detailProgressPercent}>
                        {selectedLevel.level < user.currentLevel ? '100%'
                          : selectedLevel.level === user.currentLevel ? `${currentXP.toLocaleString()} / ${selectedLevel.maxXP.toLocaleString()} XP`
                          : `Locked`}
                      </span>
                    </div>
                    <div className={styles.detailTrack}>
                      <div 
                        className={styles.detailFill}
                        style={{
                          width: selectedLevel.level < user.currentLevel ? '100%'
                            : selectedLevel.level === user.currentLevel ? `${progressPercentage}%`
                            : '0%',
                          background: selectedLevel.level < user.currentLevel
                            ? 'linear-gradient(90deg, #10B981, #34D399)'
                            : selectedLevel.level === user.currentLevel
                            ? 'linear-gradient(90deg, #F59E0B, #FBBF24, #38BDF8)'
                            : 'rgba(255, 255, 255, 0.1)'
                        }}
                      />
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
              <span className={styles.summaryTitle}>Tier Mastery Progression</span>
              <span className={styles.summaryFraction}>
                <strong>{unlockedCount}</strong> / {LEVEL_ROADMAP.length} Badges Unlocked ({Math.round((unlockedCount / LEVEL_ROADMAP.length) * 100)}%)
              </span>
            </div>
            <div className={styles.summaryTrack}>
              <div
                className={styles.summaryFill}
                style={{ width: `${(unlockedCount / LEVEL_ROADMAP.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Rarity Filter Tabs */}
          <div className={styles.filtersScroll}>
            {[
              { id: 'ALL', label: 'All Levels (10)' },
              { id: 'UNLOCKED', label: `Unlocked (${unlockedCount})` },
              { id: 'LOCKED', label: `Locked (${LEVEL_ROADMAP.length - unlockedCount})` },
              { id: 'COMMON', label: 'Common' },
              { id: 'UNCOMMON', label: 'Uncommon' },
              { id: 'RARE', label: 'Rare' },
              { id: 'EPIC', label: 'Epic' },
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

          {/* Badges Collection Grid with Redesigned Level Cards */}
          <div className={styles.collectionGrid}>
            {filteredBadges.map((item) => {
              const meta = TIER_METADATA[item.level] || TIER_METADATA[5];
              const isUnlocked = item.level <= user.currentLevel;
              const isCurrent = item.level === user.currentLevel;
              const isCompleted = item.level < user.currentLevel;
              const isNext = item.level === user.currentLevel + 1;
              const isLocked = item.level > user.currentLevel + 1;

              // Calculate item progress percentage
              let itemProgress = 0;
              let itemProgressLabel = '';
              if (isCompleted) {
                itemProgress = 100;
                itemProgressLabel = '100% • UNLOCKED';
              } else if (isCurrent) {
                itemProgress = progressPercentage;
                itemProgressLabel = `${currentXP.toLocaleString()} / ${item.maxXP.toLocaleString()} XP (${progressPercentage}%)`;
              } else if (isNext) {
                itemProgress = 0;
                itemProgressLabel = `${(item.minXP - currentXP).toLocaleString()} XP Needed`;
              } else {
                itemProgress = 0;
                itemProgressLabel = `Requires ${item.minXP.toLocaleString()} XP`;
              }

              const formattedNum = item.level < 10 ? `0${item.level}` : `${item.level}`;

              return (
                <div
                  key={item.level}
                  className={[
                    styles.collectionCard,
                    isUnlocked ? styles.cardUnlocked : styles.cardLocked,
                    isCurrent ? styles.cardCurrent : '',
                  ].join(' ')}
                  style={{
                    '--card-glow': meta.glow,
                    '--card-primary': meta.primary,
                  }}
                  onClick={() => setInspectModalItem(item)}
                >
                  {/* Holographic Card Sheen on Hover */}
                  <div className={styles.cardSheenOverlay} />

                  {/* Card Rarity & Level Header */}
                  <div className={styles.cardHeaderRow}>
                    <div className={styles.cardLevelChip}>
                      <span className={styles.cardLevelPrefix}>LVL</span>
                      <span className={styles.cardLevelNumText}>{formattedNum}</span>
                    </div>

                    <div className={styles.cardStatusGroup}>
                      <span
                        className={styles.cardRarityTag}
                        style={{
                          color: meta.rarityColor,
                          borderColor: `${meta.rarityColor}66`,
                          background: `${meta.rarityColor}18`,
                        }}
                      >
                        {meta.rarity}
                      </span>

                      {isCurrent ? (
                        <span className={styles.cardCurrentBadge}>
                          <Sparkles size={11} /> Active
                        </span>
                      ) : isCompleted ? (
                        <span className={styles.cardUnlockedBadge}>
                          <Check size={11} /> Claimed
                        </span>
                      ) : isNext ? (
                        <span className={styles.cardNextBadge}>
                          🎯 Target
                        </span>
                      ) : (
                        <span className={styles.cardLockedBadge}>
                          <Lock size={11} /> Locked
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 3D Badge Visual with Ambient Lighting */}
                  <div className={styles.cardBadgeWrap}>
                    <LevelBadge
                      level={item.level}
                      size="normal"
                      showStars={true}
                      animated={isCurrent}
                    />
                  </div>

                  {/* Badge Identity & Theme Details */}
                  <div className={styles.cardInfo}>
                    <span className={styles.cardFinish}>{meta.finish}</span>
                    <h5 className={styles.cardName}>{item.name}</h5>
                    <span className={styles.cardThemeTag}>{meta.themeName}</span>
                  </div>

                  {/* Stylish Level Progress Indicator & Animated Bar */}
                  <div className={styles.cardProgressSection}>
                    <div className={styles.cardProgressTrack}>
                      <div
                        className={styles.cardProgressFill}
                        style={{
                          width: `${itemProgress}%`,
                          background: isCompleted
                            ? 'linear-gradient(90deg, #10B981 0%, #34D399 100%)'
                            : isCurrent
                            ? 'linear-gradient(90deg, #F59E0B 0%, #FBBF24 50%, #38BDF8 100%)'
                            : 'rgba(255, 255, 255, 0.08)'
                        }}
                      >
                        {isCurrent && <div className={styles.cardProgressGlow} />}
                      </div>
                    </div>
                    <div className={styles.cardProgressDetailRow}>
                      <span className={styles.cardProgressLabel}>{itemProgressLabel}</span>
                      <span className={styles.cardXPBadge}>
                        {item.minXP.toLocaleString()} XP
                      </span>
                    </div>
                  </div>

                  {/* Milestone Reward Chip */}
                  <div className={styles.cardRewardChip}>
                    <Gift size={12} className={styles.rewardGiftIcon} />
                    <span>Reward: <strong>{item.reward.label}</strong></span>
                  </div>

                  {/* Key Perk Snippet */}
                  <p className={styles.cardPerkSnippet}>
                    {item.perks[0]}
                  </p>

                  {/* Interactive 3D Inspect Action */}
                  <button className={styles.inspectBtn}>
                    <Eye size={13} />
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
