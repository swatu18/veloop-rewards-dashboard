import React from 'react';
import styles from './States.module.css';

export const LoadingSkeleton = () => {
  return (
    <div className={styles.skeletonContainer}>
      {/* Top greeting skeleton */}
      <div className={styles.skeletonGreeting}>
        <div className={`${styles.skeletonLine} ${styles.shimmer} ${styles.w40}`}></div>
        <div className={`${styles.skeletonLine} ${styles.shimmer} ${styles.w70}`}></div>
      </div>

      {/* Main Level Progress Card Skeleton */}
      <div className={`${styles.skeletonCard} ${styles.shimmer}`}>
        <div className={styles.skeletonBadge}></div>
        <div className={styles.skeletonCol}>
          <div className={`${styles.skeletonLine} ${styles.w50}`}></div>
          <div className={`${styles.skeletonLine} ${styles.w90}`}></div>
          <div className={styles.skeletonBar}></div>
        </div>
      </div>

      {/* Boost grid skeleton */}
      <div className={styles.skeletonGrid}>
        <div className={`${styles.skeletonCardSmall} ${styles.shimmer}`}></div>
        <div className={`${styles.skeletonCardSmall} ${styles.shimmer}`}></div>
        <div className={`${styles.skeletonCardSmall} ${styles.shimmer}`}></div>
      </div>

      {/* Reward Card Skeleton */}
      <div className={`${styles.skeletonRewardCard} ${styles.shimmer}`}></div>

      {/* Roadmap Skeleton */}
      <div className={`${styles.skeletonRoadmap} ${styles.shimmer}`}></div>
    </div>
  );
};
