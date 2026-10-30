import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft, Clock, Zap, Info } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';
import styles from './Game.module.css';

export const GamePlay = ({ onGameOver, onQuit }) => {
  const canvasRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState(20);
  const [score, setScore] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [multiplierTimer, setMultiplierTimer] = useState(0);
  const [bonusVEs, setBonusVEs] = useState(0);

  // References for game loop state
  const gameStateRef = useRef({
    basketX: 180,
    basketWidth: 104,
    basketHeight: 52,
    items: [],
    popups: [],
    ripples: [],
    score: 0,
    multiplier: 1,
    multiplierEndTime: 0,
    bonusVEs: 0,
    isRunning: true,
    lastSpawnTime: 0,
    spawnInterval: 650, // ms
    keys: { left: false, right: false }
  });

  // Countdown Timer – 20s challenge (Screen 2: 00:18...)
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

  // When time runs out, trigger game over (Screen 3)
  useEffect(() => {
    if (timeLeft === 0) {
      const finalScore = gameStateRef.current.score;
      let xpEarned = 30;
      let vesEarned = 12;

      if (finalScore >= 120) {
        xpEarned = 50;
        vesEarned = 25;
      } else if (finalScore >= 80) {
        xpEarned = 30;
        vesEarned = 12;
      } else if (finalScore >= 40) {
        xpEarned = 20;
        vesEarned = 8;
      }

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

    canvas.width = 380;
    canvas.height = 460;
    gameStateRef.current.basketX = (canvas.width - gameStateRef.current.basketWidth) / 2;

    const spawnItem = (timestamp) => {
      const types = [
        { type: 'coin', radius: 15, speed: 3.2, score: 10, label: '+10 VEs', color: '#FBBF24' },
        { type: 'xp', radius: 16, speed: 3.0, score: 15, label: '+15 XP', color: '#C084FC' },
        { type: 'gem', radius: 14, speed: 3.6, score: 25, label: '+25 💎 (2X!)', color: '#34D399' }
      ];

      const rand = Math.random();
      let chosen = types[0]; // 45% gold coin
      if (rand > 0.45 && rand <= 0.8) chosen = types[1]; // 35% purple XP orb
      if (rand > 0.8) chosen = types[2]; // 20% emerald gem

      const margin = 35;
      const x = margin + Math.random() * (canvas.width - margin * 2);

      gameStateRef.current.items.push({
        ...chosen,
        x,
        y: -24,
        vy: chosen.speed + Math.random() * 0.7,
        rotation: 0,
        vr: (Math.random() - 0.5) * 0.05
      });
      gameStateRef.current.lastSpawnTime = timestamp;
    };

    const update = (timestamp) => {
      const state = gameStateRef.current;
      if (!state.isRunning) return;

      // Handle keyboard movement
      if (state.keys.left) {
        state.basketX = Math.max(0, state.basketX - 8);
      }
      if (state.keys.right) {
        state.basketX = Math.min(canvas.width - state.basketWidth, state.basketX + 8);
      }

      // Spawn items
      if (timestamp - state.lastSpawnTime > state.spawnInterval) {
        spawnItem(timestamp);
      }

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw dark background (#161827)
      ctx.fillStyle = '#161827';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Light background vertical grid tracks (Screen 2)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      for (let x = 45; x < canvas.width; x += 55) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Basket position & dimensions (Screen 2: deep glowing wireframe basket)
      const basketY = canvas.height - 76;
      const bWidth = state.basketWidth;
      const bHeight = state.basketHeight;
      const basketX = state.basketX;
      const centerX = basketX + bWidth / 2;

      // Update & Draw falling items
      for (let i = state.items.length - 1; i >= 0; i--) {
        const item = state.items[i];
        item.y += item.vy;
        item.rotation += item.vr;

        // Collision check with basket rim
        const itemBottom = item.y + item.radius;
        const inXRange = item.x >= basketX - 12 && item.x <= basketX + bWidth + 12;
        const inYRange = itemBottom >= basketY && item.y <= basketY + 22;

        if (inXRange && inYRange) {
          // Catch event!
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

          // Trigger ripple effect on basket rim
          state.ripples.push({
            x: item.x,
            y: basketY + 6,
            r: 8,
            alpha: 1,
            color: item.color
          });

          // Floating score popup
          state.popups.push({
            text: state.multiplier > 1 ? `${item.label} (2X!)` : item.label,
            x: item.x,
            y: basketY - 12,
            color: item.color,
            alpha: 1,
            vy: -1.8
          });

          state.items.splice(i, 1);
          continue;
        }

        // Remove item if fallen past bottom
        if (item.y - item.radius > canvas.height) {
          state.items.splice(i, 1);
          continue;
        }

        // Draw Item – Exactly as in Screen 2:
        ctx.save();
        ctx.translate(item.x, item.y);
        ctx.rotate(item.rotation);

        if (item.type === 'coin') {
          // ── Gold Coin with "V" (Screen 2) ──
          // Ambient Glow
          ctx.beginPath();
          ctx.arc(0, 0, item.radius + 6, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(245, 158, 11, 0.25)';
          ctx.fill();

          // Coin Outer Rim
          ctx.beginPath();
          ctx.arc(0, 0, item.radius, 0, Math.PI * 2);
          const goldGrad = ctx.createLinearGradient(-item.radius, -item.radius, item.radius, item.radius);
          goldGrad.addColorStop(0, '#FFFBEB');
          goldGrad.addColorStop(0.3, '#FDE68A');
          goldGrad.addColorStop(0.7, '#F59E0B');
          goldGrad.addColorStop(1, '#92400E');
          ctx.fillStyle = goldGrad;
          ctx.shadowColor = '#FBBF24';
          ctx.shadowBlur = 10;
          ctx.fill();

          // Inner Bevel Ring
          ctx.beginPath();
          ctx.arc(0, 0, item.radius - 2.8, 0, Math.PI * 2);
          ctx.strokeStyle = '#78350F';
          ctx.lineWidth = 1.2;
          ctx.stroke();

          // Bold "V" Letter in center
          ctx.fillStyle = '#2A1800';
          ctx.font = '900 13px "Space Grotesk", sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('V', 0, 1);

        } else if (item.type === 'xp') {
          // ── Purple XP Orb with "XP" (Screen 2) ──
          // Radiant Purple Halo
          ctx.beginPath();
          ctx.arc(0, 0, item.radius + 8, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(168, 85, 247, 0.3)';
          ctx.fill();

          // Outer Sphere
          ctx.beginPath();
          ctx.arc(0, 0, item.radius, 0, Math.PI * 2);
          const purpleGrad = ctx.createRadialGradient(-4, -4, 2, 0, 0, item.radius);
          purpleGrad.addColorStop(0, '#F3E8FF');
          purpleGrad.addColorStop(0.35, '#C084FC');
          purpleGrad.addColorStop(0.75, '#7E22CE');
          purpleGrad.addColorStop(1, '#3B0764');
          ctx.fillStyle = purpleGrad;
          ctx.shadowColor = '#C084FC';
          ctx.shadowBlur = 14;
          ctx.fill();

          // Inner White Ring
          ctx.beginPath();
          ctx.arc(0, 0, item.radius - 2.5, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
          ctx.lineWidth = 1;
          ctx.stroke();

          // Bold "XP" Text in center
          ctx.fillStyle = '#FFFFFF';
          ctx.font = '900 10px "Space Grotesk", sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('XP', 0, 0);

        } else if (item.type === 'gem') {
          // ── Green Emerald Gem (Screen 2) ──
          // Halo
          ctx.beginPath();
          ctx.arc(0, 0, item.radius + 6, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(52, 211, 153, 0.3)';
          ctx.fill();

          // Faceted Diamond
          ctx.beginPath();
          ctx.moveTo(0, -item.radius);
          ctx.lineTo(item.radius, 0);
          ctx.lineTo(0, item.radius);
          ctx.lineTo(-item.radius, 0);
          ctx.closePath();
          const emeraldGrad = ctx.createLinearGradient(0, -item.radius, 0, item.radius);
          emeraldGrad.addColorStop(0, '#ECFDF5');
          emeraldGrad.addColorStop(0.4, '#34D399');
          emeraldGrad.addColorStop(1, '#065F46');
          ctx.fillStyle = emeraldGrad;
          ctx.shadowColor = '#34D399';
          ctx.shadowBlur = 12;
          ctx.fill();

          // Facet Highlight Lines
          ctx.beginPath();
          ctx.moveTo(0, -item.radius);
          ctx.lineTo(0, item.radius);
          ctx.moveTo(-item.radius, 0);
          ctx.lineTo(item.radius, 0);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        ctx.restore();
      }

      // Draw catch ripples
      for (let r = state.ripples.length - 1; r >= 0; r--) {
        const rip = state.ripples[r];
        rip.r += 1.8;
        rip.alpha -= 0.05;
        if (rip.alpha <= 0) {
          state.ripples.splice(r, 1);
          continue;
        }
        ctx.save();
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.r, 0, Math.PI * 2);
        ctx.strokeStyle = rip.color;
        ctx.globalAlpha = rip.alpha;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
      }

      // Draw floating score popups
      for (let p = state.popups.length - 1; p >= 0; p--) {
        const pop = state.popups[p];
        pop.y += pop.vy;
        pop.alpha -= 0.024;
        if (pop.alpha <= 0) {
          state.popups.splice(p, 1);
          continue;
        }
        ctx.save();
        ctx.globalAlpha = pop.alpha;
        ctx.fillStyle = pop.color;
        ctx.font = '800 14px "Space Grotesk", sans-serif';
        ctx.textAlign = 'center';
        ctx.shadowColor = '#000000';
        ctx.shadowBlur = 6;
        ctx.fillText(pop.text, pop.x, pop.y);
        ctx.restore();
      }

      // ─── DRAW GOLDEN WIREFRAME BASKET / BOWL (Screen 2 exact design) ───
      ctx.save();
      const bottomY = basketY + bHeight;
      const bottomWidth = bWidth * 0.45;
      const bottomX = centerX - bottomWidth / 2;

      // Glow Aura under basket
      const auraGrad = ctx.createRadialGradient(centerX, basketY + bHeight / 2, 10, centerX, basketY + bHeight / 2, bWidth);
      auraGrad.addColorStop(0, 'rgba(245, 158, 11, 0.35)');
      auraGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = auraGrad;
      ctx.fillRect(basketX - 20, basketY - 10, bWidth + 40, bHeight + 40);

      // 1. Semi-translucent gold mesh funnel fill
      ctx.beginPath();
      ctx.moveTo(basketX, basketY);
      ctx.bezierCurveTo(basketX + 4, basketY + bHeight * 0.6, bottomX, bottomY, bottomX, bottomY);
      ctx.lineTo(bottomX + bottomWidth, bottomY);
      ctx.bezierCurveTo(bottomX + bottomWidth, bottomY, basketX + bWidth - 4, basketY + bHeight * 0.6, basketX + bWidth, basketY);
      ctx.closePath();
      ctx.fillStyle = 'rgba(245, 158, 11, 0.12)';
      ctx.fill();

      // 2. Vertical Curved Golden Ribs (8 ribs forming the bowl shape)
      ctx.strokeStyle = '#FBBF24';
      ctx.lineWidth = 1.4;
      ctx.shadowColor = '#F59E0B';
      ctx.shadowBlur = 8;

      const numRibs = 8;
      for (let i = 0; i <= numRibs; i++) {
        const t = i / numRibs;
        const topRibX = basketX + t * bWidth;
        const btmRibX = bottomX + t * bottomWidth;
        ctx.beginPath();
        ctx.moveTo(topRibX, basketY);
        ctx.quadraticCurveTo(
          centerX + (topRibX - centerX) * 0.8,
          basketY + bHeight * 0.65,
          btmRibX,
          bottomY
        );
        ctx.stroke();
      }

      // 3. Horizontal Concentric Golden Hoops (creating the diamond mesh)
      ctx.strokeStyle = 'rgba(253, 230, 138, 0.7)';
      ctx.lineWidth = 1.2;
      for (let j = 1; j <= 3; j++) {
        const ratio = j / 4;
        const curY = basketY + ratio * bHeight;
        const curW = bWidth - (bWidth - bottomWidth) * ratio;
        const curX = centerX - curW / 2;
        ctx.beginPath();
        ctx.ellipse(centerX, curY, curW / 2, 4 + ratio * 2, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 4. Rounded Bottom Base Plate
      ctx.beginPath();
      ctx.ellipse(centerX, bottomY, bottomWidth / 2, 5, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#F59E0B';
      ctx.fill();
      ctx.strokeStyle = '#FFFBEB';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // 5. Top Oval Golden Rim (Bright Glowing Ring)
      ctx.beginPath();
      ctx.ellipse(centerX, basketY, bWidth / 2, 7, 0, 0, Math.PI * 2);
      const rimGrad = ctx.createLinearGradient(basketX, basketY, basketX + bWidth, basketY);
      rimGrad.addColorStop(0, '#FFFBEB');
      rimGrad.addColorStop(0.5, '#FDE68A');
      rimGrad.addColorStop(1, '#D97706');
      ctx.fillStyle = 'rgba(245, 158, 11, 0.2)';
      ctx.fill();
      ctx.strokeStyle = rimGrad;
      ctx.lineWidth = 3;
      ctx.shadowColor = '#FFFFFF';
      ctx.shadowBlur = 12;
      ctx.stroke();

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

        {/* Timer Pill matching Screen 2 (00:18) */}
        <div className={`${styles.timerPill} ${timeLeft <= 5 ? styles.timerAlert : ''}`}>
          <Clock size={14} />
          <span>{formattedTime}</span>
        </div>
      </div>

      <p className={styles.gameSubtitle}>
        Catch XP orbs &amp; coins. Score high for better rewards!
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
          Drag glowing basket to catch falling orbs
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
