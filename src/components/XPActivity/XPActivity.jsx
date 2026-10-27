import React, { useState } from 'react';
import { ArrowLeft, Filter, History, ChevronRight, Zap, Coins, Sparkles } from 'lucide-react';
import { useDashboard } from '../../context/DashboardContext';
import styles from './XPActivity.module.css';

export const XPActivity = ({ isFullPage = false }) => {
  const { history, user, setActiveScreen } = useDashboard();
  const [filter, setFilter] = useState('ALL'); // 'ALL' | 'XP' | 'VES'

  const filteredHistory = history.filter(item => {
    if (filter === 'ALL') return true;
    return item.category?.toUpperCase() === filter;
  });

  return (
    <div className={styles.activityWrapper}>
      {/* Header */}
      {isFullPage ? (
        <div className={styles.fullHeader}>
          <button 
            className={styles.backBtn}
            onClick={() => setActiveScreen('dashboard')}
            aria-label="Back to Dashboard"
          >
            <ArrowLeft size={20} />
          </button>
          <div className={styles.titleArea}>
            <h2 className={styles.fullTitle}>RECENT ACTIVITY</h2>
            <span className={styles.fullSub}>Real-time XP and rewards ledger</span>
          </div>
          <button className={styles.filterBtn} aria-label="Filter Activity">
            <Filter size={18} />
          </button>
        </div>
      ) : (
        <div className={styles.widgetHeader}>
          <div className={styles.widgetTitleGroup}>
            <History size={16} className={styles.widgetIcon} />
            <h3 className={styles.widgetTitle}>RECENT XP ACTIVITY</h3>
          </div>
          <button 
            className={styles.viewAllBtn}
            onClick={() => setActiveScreen('activity')}
          >
            <span>View All</span>
            <ChevronRight size={14} />
          </button>
        </div>
      )}

      {/* Filter Tabs */}
      <div className={styles.filterTabs}>
        <button 
          className={`${styles.tabBtn} ${filter === 'ALL' ? styles.tabActive : ''}`}
          onClick={() => setFilter('ALL')}
        >
          All Activity
        </button>
        <button 
          className={`${styles.tabBtn} ${filter === 'XP' ? styles.tabActive : ''}`}
          onClick={() => setFilter('XP')}
        >
          ⚡ XP Only
        </button>
        <button 
          className={`${styles.tabBtn} ${filter === 'VES' ? styles.tabActive : ''}`}
          onClick={() => setFilter('VES')}
        >
          🪙 VEs Only
        </button>
      </div>

      {/* Activity Timeline List */}
      <div className={styles.timelineList}>
        {filteredHistory.length === 0 ? (
          <div className={styles.emptyNotice}>
            <Sparkles size={24} className={styles.emptyIcon} />
            <span>No activity found in this category.</span>
          </div>
        ) : (
          filteredHistory.map((item) => (
            <div key={item.id} className={styles.historyRow}>
              <div className={styles.indicatorCol}>
                <div className={`${styles.typeBadge} ${item.category === 'VEs' ? styles.veBadge : styles.xpBadge}`}>
                  {item.category === 'VEs' ? '🪙' : '⚡'}
                </div>
              </div>

              <div className={styles.infoCol}>
                <div className={styles.titleRow}>
                  <span className={styles.activityTitle}>{item.title}</span>
                  <span className={`${styles.rewardValue} ${item.category === 'VEs' ? styles.goldReward : styles.purpleReward}`}>
                    {item.rewardText}
                  </span>
                </div>
                <div className={styles.subRow}>
                  <span className={styles.activitySubtitle}>{item.subtitle}</span>
                  <span className={styles.timestamp}>{item.timestamp}</span>
                </div>
              </div>

              <div className={styles.chevron}>
                <ChevronRight size={14} />
              </div>
            </div>
          ))
        )}
      </div>

      {/* Today's Summary Card matching Screen 6 */}
      <div className={styles.summaryCard}>
        <div className={styles.summaryHeader}>
          <span className={styles.summaryTitle}>Today's Summary</span>
          <span className={styles.summaryDate}>Updated Live</span>
        </div>

        <div className={styles.summaryGrid}>
          <div className={styles.summaryMetric}>
            <div className={styles.metricIconBox}>
              <Zap size={18} className={styles.metricZap} />
            </div>
            <div className={styles.metricData}>
              <span className={styles.metricNumber}>{user.xpEarnedToday} XP</span>
              <span className={styles.metricLabel}>Total XP Earned</span>
            </div>
          </div>

          <div className={styles.summaryMetric}>
            <div className={`${styles.metricIconBox} ${styles.metricGoldBox}`}>
              <Coins size={18} className={styles.metricCoin} />
            </div>
            <div className={styles.metricData}>
              <span className={styles.metricNumberGold}>{user.vesEarnedToday} VEs</span>
              <span className={styles.metricLabel}>Total VEs Earned</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
