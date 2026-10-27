import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft, Clock, Zap, Info, ShieldCheck } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';
import styles from './Game.module.css';

export const GamePlay = ({ onGameOver, onQuit }) => {
  const canvasRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState(20);
  const [score, setScore] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [multiplierTimer, setMultiplierTimer] = useState(0);
  const [bonusVEs, setBonusVEs] = useState(0);

  // References for game loop state (avoids stale closures)
  const gameStateRef = useRef({
    basketX: 180,
    basketWidth: 84,
    basketHeight: 28,
    items: [],
    popups: [],
    score: 0,
    multiplier: 1,
    multiplierEndTime: 0,
    bonusVEs: 0,
    isRunning: true,
    lastSpawnTime: 0,
    spawnInterval: 750, // ms
    keys: { left: false, right: false }
  });

  // Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          gameStateRef.current.isRunning = false;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Multiplier decrement
  useEffect(() => {
    if (multiplier > 1) {
      const interval = setInterval(() => {
        const remaining = Math.max(0, Math.ceil((gameStateRef.current.multiplierEndTime - Date.now()) / 1000));
        setMultiplierTimer(remaining);
        if (remaining <= 0) {
          gameStateRef.current.multiplier = 1;
          setMultiplier(1);
          clearInterval(interval);
        }
      }, 500);
      return () => clearInterval(interval);
    }
  }, [multiplier]);

  // When time runs out, trigger game over
  useEffect(() => {
    if (timeLeft === 0) {
      const finalScore = gameStateRef.current.score;
      let xpEarned = 20;
      let vesEarned = 5;

      if (finalScore >= 120) {
        xpEarned = 50;
        vesEarned = 25;
      } else if (finalScore >= 80) {
        xpEarned = 30;
        vesEarned = 12;
      } else if (finalScore >= 40) {
        xpEarned = 25;
        vesEarned = 8;
      }

      // Small delay for natural transition
      setTimeout(() => {
        onGameOver(finalScore, xpEarned, vesEarned);
      }, 600);
    }
  }, [timeLeft, onGameOver]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        gameStateRef.current.keys.left = true;
      }
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        gameStateRef.current.keys.right = true;
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        gameStateRef.current.keys.left = false;
      }
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        gameStateRef.current.keys.right = false;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Mouse & Touch Movement on Canvas
  const handlePointerMove = useCallback((clientX) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const pointerX = (clientX - rect.left) * scaleX;
    const clampedX = Math.max(
      gameStateRef.current.basketWidth / 2, 
      Math.min(canvas.width - gameStateRef.current.basketWidth / 2, pointerX)
    );
    gameStateRef.current.basketX = clampedX - gameStateRef.current.basketWidth / 2;
  }, []);

  const onMouseMove = (e) => {
    handlePointerMove(e.clientX);
  };

  const onTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handlePointerMove(e.touches[0].clientX);
    }
  };

  // Main Canvas Render & Physics Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set fixed virtual dimensions
    canvas.width = 380;
    canvas.height = 460;
    gameStateRef.current.basketX = (canvas.width - gameStateRef.current.basketWidth) / 2;

    const spawnItem = (timestamp) => {
      const types = [
        { type: 'coin', radius: 14, speed: 3.2, score: 10, label: '+10 Pts', color: '#F59E0B' },
        { type: 'xp', radius: 15, speed: 2.8, score: 15, label: '+15 XP', color: '#8B5CF6' },
        { type: 'gem', radius: 12, speed: 3.6, score: 25, label: '+25 💎 2X!', color: '#38BDF8' }
      ];

      // Random weight
      const rand = Math.random();
      let chosen = types[0]; // 50% coin
      if (rand > 0.5 && rand <= 0.85) chosen = types[1]; // 35% xp
      if (rand > 0.85) chosen = types[2]; // 15% gem

      const margin = 30;
      const x = margin + Math.random() * (canvas.width - margin * 2);

      gameStateRef.current.items.push({
        ...chosen,
        x,
        y: -20,
        vy: chosen.speed + Math.random() * 0.8
      });
      gameStateRef.current.lastSpawnTime = timestamp;
    };

    const update = (timestamp) => {
      const state = gameStateRef.current;
      if (!state.isRunning) return;

      // Handle keyboard movement
      if (state.keys.left) {
        state.basketX = Math.max(0, state.basketX - 7);
      }
      if (state.keys.right) {
        state.basketX = Math.min(canvas.width - state.basketWidth, state.basketX + 7);
      }

      // Spawn items
      if (timestamp - state.lastSpawnTime > state.spawnInterval) {
        spawnItem(timestamp);
      }

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle background grid & star particles
      ctx.fillStyle = '#161827';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw light vertical guide tracks
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      for (let x = 60; x < canvas.width; x += 65) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Basket position
      const basketY = canvas.height - 52;
      const basketX = state.basketX;
      const bWidth = state.basketWidth;
      const bHeight = state.basketHeight;

      // Update & Draw falling items
      for (let i = state.items.length - 1; i >= 0; i--) {
        const item = state.items[i];
        item.y += item.vy;

        // Collision check with basket rim
        const itemBottom = item.y + item.radius;
        const inXRange = item.x >= basketX - 10 && item.x <= basketX + bWidth + 10;
        const inYRange = itemBottom >= basketY && item.y <= basketY + 14;

        if (inXRange && inYRange) {
          // Caught item!
          const earned = item.score * state.multiplier;
          state.score += earned;
          setScore(state.score);

          if (item.type === 'coin') {
            state.bonusVEs += 2;
            setBonusVEs(state.bonusVEs);
            sounds.playCoinSound();
          } else if (item.type === 'gem') {
            state.multiplier = 2;
            state.multiplierEndTime = Date.now() + 4000;
            setMultiplier(2);
            sounds.playGemSound();
          } else {
            sounds.playCoinSound();
          }

          // Add floating text popup
          state.popups.push({
            text: state.multiplier > 1 ? `${item.label} (2X)` : item.label,
            x: item.x,
            y: basketY - 10,
            color: item.color,
            alpha: 1,
            vy: -1.6
          });

          // Remove item
          state.items.splice(i, 1);
          continue;
        }

        // Missed item (fell past bottom)
        if (item.y - item.radius > canvas.height) {
          state.items.splice(i, 1);
          continue;
        }

        // Draw item
        ctx.save();
        ctx.translate(item.x, item.y);

        if (item.type === 'coin') {
          // Golden V Coin
          ctx.beginPath();
          ctx.arc(0, 0, item.radius, 0, Math.PI * 2);
          ctx.fillStyle = '#F59E0B';
          ctx.shadowColor = '#FBBF24';
          ctx.shadowBlur = 10;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(0, 0, item.radius - 2.5, 0, Math.PI * 2);
          ctx.strokeStyle = '#FDE68A';
          ctx.lineWidth = 1.5;
          ctx.stroke();

          ctx.fillStyle = '#161827';
          ctx.font = 'bold 12px "Space Grotesk", sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('V', 0, 1);
        } else if (item.type === 'xp') {
          // Purple XP Orb
          ctx.beginPath();
          ctx.arc(0, 0, item.radius, 0, Math.PI * 2);
          ctx.fillStyle = '#8B5CF6';
          ctx.shadowColor = '#C4B5FD';
          ctx.shadowBlur = 12;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(0, 0, item.radius - 2.5, 0, Math.PI * 2);
          ctx.strokeStyle = '#DDD6FE';
          ctx.lineWidth = 1.5;
          ctx.stroke();

          ctx.fillStyle = '#FFFFFF';
          ctx.font = 'bold 9px "Plus Jakarta Sans", sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('XP', 0, 0);
        } else if (item.type === 'gem') {
          // Diamond Cosmic Gem
          ctx.beginPath();
          ctx.moveTo(0, -item.radius);
          ctx.lineTo(item.radius, 0);
          ctx.lineTo(0, item.radius);
          ctx.lineTo(-item.radius, 0);
          ctx.closePath();
          ctx.fillStyle = '#38BDF8';
          ctx.shadowColor = '#7DD3FC';
          ctx.shadowBlur = 14;
          ctx.fill();

          ctx.fillStyle = '#FFFFFF';
          ctx.font = '10px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('⚡', 0, 0);
        }

        ctx.restore();
      }

      // Draw floating score popups
      for (let p = state.popups.length - 1; p >= 0; p--) {
        const pop = state.popups[p];
        pop.y += pop.vy;
        pop.alpha -= 0.025;

        if (pop.alpha <= 0) {
          state.popups.splice(p, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = pop.alpha;
        ctx.fillStyle = pop.color;
        ctx.font = 'bold 13px "Space Grotesk", sans-serif';
        ctx.textAlign = 'center';
        ctx.shadowColor = '#000000';
        ctx.shadowBlur = 4;
        ctx.fillText(pop.text, pop.x, pop.y);
        ctx.restore();
      }

      // Draw Player Collector Basket
      ctx.save();
      ctx.shadowColor = 'rgba(245, 158, 11, 0.6)';
      ctx.shadowBlur = 18;

      // Basket Rim (Top oval / bar)
      ctx.beginPath();
      ctx.roundRect(basketX, basketY, bWidth, 8, 4);
      ctx.fillStyle = 'linear-gradient(90deg, #FDE68A, #F59E0B)';
      ctx.fillStyle = '#FBBF24';
      ctx.fill();
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Basket Net (Mesh Trapeze)
      ctx.beginPath();
      ctx.moveTo(basketX + 6, basketY + 8);
      ctx.lineTo(basketX + 16, basketY + bHeight);
      ctx.lineTo(basketX + bWidth - 16, basketY + bHeight);
      ctx.lineTo(basketX + bWidth - 6, basketY + 8);
      ctx.closePath();
      ctx.fillStyle = 'rgba(245, 158, 11, 0.18)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.8)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Net cross grid pattern
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
      ctx.lineWidth = 1;
      for (let i = 1; i <= 3; i++) {
        const yOff = basketY + 8 + (bHeight - 8) * (i / 4);
        ctx.beginPath();
        ctx.moveTo(basketX + 6 + i * 2, yOff);
        ctx.lineTo(basketX + bWidth - 6 - i * 2, yOff);
        ctx.stroke();
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(update);
    };

    animationFrameId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const formattedTime = `00:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`;

  return (
    <div className={styles.gamePlayContainer}>
      {/* Top Header matching Screen 2 */}
      <div className={styles.gameTopBar}>
        <button 
          className={styles.backBtn}
          onClick={onQuit}
          aria-label="Quit Game"
        >
          <ArrowLeft size={20} />
        </button>

        <div className={styles.titleWithInfo}>
          <h2 className={styles.gameTitle}>XP CATCHER</h2>
          <span className={styles.subInfoBadge}>
            <Info size={14} />
          </span>
        </div>

        <div className={`${styles.timerPill} ${timeLeft <= 5 ? styles.timerAlert : ''}`}>
          <Clock size={14} />
          <span>{formattedTime}</span>
        </div>
      </div>

      <p className={styles.gameSubtitle}>
        Catch XP orbs & coins. Score high for better rewards!
      </p>

      {/* Interactive HTML5 Canvas */}
      <div 
        className={styles.canvasWrapper}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
      >
        <canvas ref={canvasRef} className={styles.gameCanvas} />
        
        {/* Mobile touch hint overlay */}
        <div className={styles.touchControlNotice}>
          Drag basket to catch falling orbs
        </div>
      </div>

      {/* Bottom Stats Row matching Screen 2 */}
      <div className={styles.bottomStatsCard}>
        <div className={styles.scoreGroup}>
          <span className={styles.scoreLabel}>YOUR SCORE</span>
          <span className={styles.scoreVal}>{score}</span>
        </div>

        <div className={styles.pillsGroup}>
          <div className={styles.rewardIndicatorPill}>
            <span>🪙</span>
            <span>+{bonusVEs + 5} VEs</span>
          </div>

          {multiplier > 1 ? (
            <div className={`${styles.rewardIndicatorPill} ${styles.multiplierActivePill}`}>
              <Zap size={13} />
              <span>2X Multiplier ({multiplierTimer}s)</span>
            </div>
          ) : (
            <div className={styles.rewardIndicatorPill}>
              <span>⚡</span>
              <span>1X Multiplier</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
