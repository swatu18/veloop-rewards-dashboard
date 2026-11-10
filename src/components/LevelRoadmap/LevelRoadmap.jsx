import React, { useState, useRef, useEffect } from 'react';
import { Award, Sparkles, ChevronRight, Check, Lock, Shield, Eye, Filter, Zap, Gift, Compass, MapPin } from 'lucide-react';
import { LEVEL_ROADMAP, REALMS } from '../../data/levelData';
import { useDashboard } from '../../context/DashboardContext';
import { useAuth } from '../../context/AuthContext';
import { LevelBadge, MiniTierBadge } from '../Badges/LevelBadge';
import { TIER_METADATA } from '../Badges/TierBadgeArt';
import styles from './LevelRoadmap.module.css';

// Mathematical curved path generator for Candy Crush / Saga Map
const generateCurvedPath = (items, stepHeight, totalWidth) => {
  if (!items || items.length === 0) return '';
  const points = items.map((_, idx) => ({
    x: totalWidth * (0.5 + 0.28 * Math.sin(idx * 0.95)),
    y: idx * stepHeight + 40 + 26,
  }));

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const midY = (prev.y + curr.y) / 2;
    d += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`;
  }
  return d;
};

export const LevelRoadmap = () => {
  const { user, currentXP, progressPercentage } = useDashboard();
  const { currentUser } = useAuth();
  const [activeView, setActiveView] = useState('map'); // Default to Candy Crush style Saga World Map!
  const [rarityFilter, setRarityFilter] = useState('ALL');
  const [selectedLevel, setSelectedLevel] = useState(
    LEVEL_ROADMAP[user.currentLevel - 1] || LEVEL_ROADMAP[4]
  );
  const [inspectModalItem, setInspectModalItem] = useState(null);

  const sagaTrackRef = useRef(null);

  const scrollToMyLevel = () => {
    const el = document.getElementById(`saga-node-${user.currentLevel}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const scrollToRealm = (realmId) => {
    const el = document.getElementById(`realm-banner-${realmId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    if (activeView === 'map') {
      const timer = setTimeout(() => {
        scrollToMyLevel();
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [activeView, user.currentLevel]);

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
              {unlockedCount} of {LEVEL_ROADMAP.length} Prestige Tiers Unlocked across 6 Realms • Level {user.currentLevel < 10 ? `0${user.currentLevel}` : user.currentLevel} Active
            </span>
          </div>
        </div>

        {/* View Switcher: Saga World Map vs Level Cards vs Timeline */}
        <div className={styles.viewToggleGroup}>
          <button
            className={`${styles.viewBtn} ${activeView === 'map' ? styles.viewBtnActive : ''}`}
            onClick={() => setActiveView('map')}
          >
            <Compass size={14} />
            <span>🗺️ Saga Map (Candy Crush Style)</span>
          </button>
          <button
            className={`${styles.viewBtn} ${activeView === 'collection' ? styles.viewBtnActive : ''}`}
            onClick={() => setActiveView('collection')}
          >
            <Shield size={14} />
            <span>Level Cards (30 Tiers)</span>
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
          VIEW 1: CANDY CRUSH / CLASH ROYALE SAGA ADVENTURE MAP
      ═══════════════════════════════════════════════════════════ */}
      {activeView === 'map' && (
        <div className={styles.sagaMapWrapper}>
          {/* Top Saga Navigation & Realm Jump Bar */}
          <div className={styles.sagaControlBar}>
            <div className={styles.realmJumpGroup}>
              <span className={styles.realmJumpLabel}>Realms:</span>
              <div className={styles.realmPillsScroll}>
                {REALMS.map((r) => {
                  const isCurrentRealm = r.levels.includes(user.currentLevel);
                  const isCompletedRealm = r.levels.every((l) => l < user.currentLevel);
                  return (
                    <button
                      key={r.id}
                      className={[
                        styles.sagaRealmPill,
                        isCurrentRealm ? styles.sagaRealmPillCurrent : '',
                        isCompletedRealm ? styles.sagaRealmPillDone : '',
                      ].join(' ')}
                      onClick={() => scrollToRealm(r.id)}
                      title={r.subtitle}
                    >
                      <span>{r.icon}</span>
                      <span>W{r.id}: {r.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              className={styles.jumpToPlayerBtn}
              onClick={scrollToMyLevel}
              title="Center camera on your current level"
            >
              <Compass size={14} className={styles.compassSpinIcon} />
              <span>Jump to Lvl {user.currentLevel < 10 ? `0${user.currentLevel}` : user.currentLevel}</span>
            </button>
          </div>

          {/* Interactive Winding Path Arena */}
          <div className={styles.sagaTrackArea} ref={sagaTrackRef}>
            {/* SVG Winding Curved Trail Connecting All 30 Levels */}
            <svg
              className={styles.sagaSvgPath}
              viewBox={`0 0 100 ${LEVEL_ROADMAP.length * 115}`}
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="sagaTrailGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="16%" stopColor="#F59E0B" />
                  <stop offset="33%" stopColor="#38BDF8" />
                  <stop offset="50%" stopColor="#10B981" />
                  <stop offset="66%" stopColor="#EC4899" />
                  <stop offset="83%" stopColor="#FBBF24" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>

              {/* Glowing Background Blur Tube */}
              <path
                d={generateCurvedPath(LEVEL_ROADMAP, 115, 100)}
                stroke="url(#sagaTrailGrad)"
                strokeWidth="10"
                strokeLinecap="round"
                fill="none"
                opacity="0.3"
                filter="blur(5px)"
              />

              {/* Main Glowing Dashed Energy Path */}
              <path
                d={generateCurvedPath(LEVEL_ROADMAP, 115, 100)}
                stroke="url(#sagaTrailGrad)"
                strokeWidth="4.5"
                strokeDasharray="6 4"
                strokeLinecap="round"
                fill="none"
                opacity="0.9"
              />
            </svg>

            {/* Stepping Stone Nodes */}
            <div className={styles.sagaNodesContainer}>
              {LEVEL_ROADMAP.map((item, idx) => {
                const meta = TIER_METADATA[item.level] || TIER_METADATA[5];
                const isCompleted = item.level < user.currentLevel;
                const isCurrent = item.level === user.currentLevel;
                const isNext = item.level === user.currentLevel + 1;
                const isLocked = item.level > user.currentLevel + 1;
                const isRealmStart = (item.level - 1) % 5 === 0;
                const realm = REALMS.find((r) => r.levels.includes(item.level));

                // Horizontal sine coordinate (22% to 78%)
                const xPct = 50 + 28 * Math.sin(idx * 0.95);
                const yPos = idx * 115 + 40;

                return (
                  <React.Fragment key={item.level}>
                    {/* Floating Realm World Header Banner */}
                    {isRealmStart && realm && (
                      <div
                        id={`realm-banner-${realm.id}`}
                        className={styles.sagaRealmBanner}
                        style={{ top: `${idx * 115 - 32}px` }}
                      >
                        <div className={styles.realmBannerInner}>
                          <span className={styles.realmBannerIcon}>{realm.icon}</span>
                          <div className={styles.realmBannerText}>
                            <span className={styles.realmBannerTitle}>
                              WORLD {realm.id}: {realm.name.toUpperCase()}
                            </span>
                            <span className={styles.realmBannerSub}>{realm.subtitle}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Stepping Stone Slot */}
                    <div
                      id={`saga-node-${item.level}`}
                      className={styles.sagaNodeSlot}
                      style={{
                        top: `${yPos}px`,
                        left: `${xPct}%`,
                      }}
                    >
                      {/* Interactive Stepping Stone */}
                      <button
                        className={[
                          styles.sagaStone,
                          isCompleted ? styles.stoneCompleted : '',
                          isCurrent ? styles.stoneCurrent : '',
                          isNext ? styles.stoneNext : '',
                          isLocked ? styles.stoneLocked : '',
                        ].join(' ')}
                        style={{
                          '--stone-color': meta.primary,
                          '--stone-glow': meta.glow,
                        }}
                        onClick={() => setInspectModalItem(item)}
                        aria-label={`Level ${item.level}: ${item.name}`}
                      >
                        {/* 3D Stone Bevel Cap */}
                        <div className={styles.stoneCap}>
                          {isCompleted ? (
                            <div className={styles.completedBadgeWrap}>
                              <Check size={18} className={styles.completedCheckIcon} />
                            </div>
                          ) : isCurrent ? (
                            <div className={styles.currentBeaconCore}>
                              <span className={styles.beaconLevelNum}>05</span>
                              <div className={styles.beaconRingOne} />
                              <div className={styles.beaconRingTwo} />
                            </div>
                          ) : isNext ? (
                            <div className={styles.nextTargetCore}>
                              <span className={styles.nextLevelNum}>
                                {item.level < 10 ? `0${item.level}` : item.level}
                              </span>
                            </div>
                          ) : (
                            <div className={styles.lockedCore}>
                              <Lock size={12} className={styles.lockIconMini} />
                              <span className={styles.lockedLevelNum}>
                                {item.level < 10 ? `0${item.level}` : item.level}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Completed 3 Stars Below Stone */}
                        {isCompleted && (
                          <div className={styles.stoneStarsRow}>
                            <span>★</span>
                            <span className={styles.starCenter}>★</span>
                            <span>★</span>
                          </div>
                        )}
                      </button>

                      {/* Animated Bouncing Player Pawn / Avatar for Level 5 */}
                      {isCurrent && (
                        <div className={styles.playerPawnWrapper}>
                          <div className={styles.pawnCrown}>👑</div>
                          <div className={styles.pawnAvatarCircle}>
                            <span>{currentUser?.name ? currentUser.name.slice(0, 2).toUpperCase() : 'VL'}</span>
                          </div>
                          <div className={styles.pawnShadow} />
                          <div className={styles.youAreHerePill}>
                            <span>YOU ARE HERE</span>
                          </div>
                        </div>
                      )}

                      {/* Milestone Treasure Chest Vault (Levels 5, 10, 15, 20, 25, 30) */}
                      {item.isMilestoneVault && (
                        <div
                          className={[
                            styles.milestoneChestWrap,
                            xPct > 50 ? styles.chestLeft : styles.chestRight,
                          ].join(' ')}
                          onClick={() => setInspectModalItem(item)}
                        >
                          <div className={styles.chestGraphic}>
                            <span className={styles.chestEmoji}>
                              {item.level === 30 ? '🏆' : item.level >= 20 ? '👑' : item.level === 5 ? '🎁' : '💎'}
                            </span>
                            <div className={styles.chestSparkle} />
                          </div>
                          <div className={styles.chestLabelTag}>
                            <span className={styles.chestTierLabel}>
                              {item.level === 5 ? 'Active Vault' : `Lvl ${item.level} Vault`}
                            </span>
                            <span className={styles.chestRewardText}>{item.reward.label}</span>
                          </div>
                        </div>
                      )}

                      {/* Level Name Tag Floating Under Node */}
                      <div className={styles.stoneFooterTag}>
                        <span className={styles.stoneRankTitle}>{item.name}</span>
                        <span className={styles.stoneXpReq}>{item.minXP.toLocaleString()} XP</span>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      )}

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
            {filteredBadges.map((item, idx) => {
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
                    '--card-index': idx,
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
                      showStars={false}
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
