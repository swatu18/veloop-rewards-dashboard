import React, { useEffect, useRef } from 'react';
import { useDashboard } from '../../context/DashboardContext';
import styles from './GamingBackground.module.css';

export const GamingBackground = () => {
  const canvasRef = useRef(null);
  const { theme } = useDashboard();
  const isLight = theme === 'light';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse / Touch interaction coordinates
    const mouse = { x: -1000, y: -1000, radius: 140 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Particle pool setup
    const PARTICLE_COUNT = Math.min(65, Math.floor(window.innerWidth / 20));
    const colors = isLight
      ? [
          'rgba(217, 119, 6, ',    // Warm Amber Gold
          'rgba(245, 158, 11, ',   // Solar Gold
          'rgba(14, 165, 233, ',   // Celestial Cyan
          'rgba(124, 58, 237, ',   // Royal Violet
          'rgba(16, 185, 129, ',   // Jade Spark
        ]
      : [
          'rgba(245, 158, 11, ',   // Neon Gold
          'rgba(56, 189, 248, ',   // Cyber Cyan
          'rgba(192, 132, 252, ',  // Royal Amethyst
          'rgba(52, 211, 153, ',   // Emerald
          'rgba(255, 255, 255, ',  // Pure Starlight
        ];

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(init = false) {
        this.x = Math.random() * width;
        this.y = init ? Math.random() * height : height + 10;
        this.radius = Math.random() * 2.8 + 1.2;
        this.baseRadius = this.radius;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = -(Math.random() * 0.6 + 0.25); // Float upward
        this.alpha = Math.random() * 0.6 + 0.2;
        this.baseAlpha = this.alpha;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.pulseSpeed = Math.random() * 0.03 + 0.01;
        this.pulseAngle = Math.random() * Math.PI * 2;
        this.isDiamond = Math.random() > 0.75; // Some particles are diamond gems
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Oscillate pulse
        this.pulseAngle += this.pulseSpeed;
        this.alpha = this.baseAlpha + Math.sin(this.pulseAngle) * 0.2;
        if (this.alpha < 0.1) this.alpha = 0.1;

        // Mouse reaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * force * 3;
          this.y -= Math.sin(angle) * force * 3;
          this.radius = this.baseRadius * (1 + force * 1.5);
        } else {
          this.radius = this.baseRadius;
        }

        // Wrap around boundaries
        if (this.y < -20 || this.x < -20 || this.x > width + 20) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.fillStyle = `${this.color}${this.alpha})`;
        ctx.shadowColor = `${this.color}0.8)`;
        ctx.shadowBlur = this.radius * 4;

        if (this.isDiamond) {
          // Draw diamond gemstone particle
          ctx.beginPath();
          ctx.moveTo(this.x, this.y - this.radius * 1.4);
          ctx.lineTo(this.x + this.radius * 1.4, this.y);
          ctx.lineTo(this.x, this.y + this.radius * 1.4);
          ctx.lineTo(this.x - this.radius * 1.4, this.y);
          ctx.closePath();
          ctx.fill();
        } else {
          // Circular energy orb
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }

    const particles = Array.from({ length: PARTICLE_COUNT }, () => new Particle());

    // Shooting Star / Cosmic Meteor setup
    class ShootingStar {
      constructor() {
        this.reset();
      }

      reset() {
        this.active = false;
        this.x = 0;
        this.y = 0;
        this.len = 0;
        this.speed = 0;
        this.angle = 0;
        this.alpha = 0;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      spawn() {
        this.active = true;
        this.x = Math.random() * width * 0.8;
        this.y = Math.random() * (height * 0.4);
        this.len = Math.random() * 120 + 80;
        this.speed = Math.random() * 12 + 10;
        this.angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.2; // ~45 deg diagonal
        this.alpha = 1;
      }

      update() {
        if (!this.active) return;
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.alpha -= 0.02;
        if (this.alpha <= 0 || this.x > width + 100 || this.y > height + 100) {
          this.active = false;
        }
      }

      draw() {
        if (!this.active) return;
        ctx.save();
        const tailX = this.x - Math.cos(this.angle) * this.len;
        const tailY = this.y - Math.sin(this.angle) * this.len;

        const grad = ctx.createLinearGradient(tailX, tailY, this.x, this.y);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        grad.addColorStop(0.7, `${this.color}${this.alpha * 0.6})`);
        grad.addColorStop(1, `#FFFFFF`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();

        // Glowing star head
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = `${this.color}1)`;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const shootingStar = new ShootingStar();
    let nextStarTime = Date.now() + 1500;

    // Connective constellation lines between close particles
    const drawConstellations = () => {
      const maxDist = 95;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.18;
            ctx.save();
            ctx.strokeStyle = isLight
              ? `rgba(217, 119, 6, ${lineAlpha})`
              : `rgba(168, 85, 247, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    };

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Handle shooting stars
      if (!shootingStar.active && Date.now() > nextStarTime) {
        shootingStar.spawn();
        nextStarTime = Date.now() + Math.random() * 3500 + 2000;
      }
      shootingStar.update();
      shootingStar.draw();

      // Update & draw particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Draw faint constellation linkages
      drawConstellations();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isLight]);

  return (
    <div className={`${styles.gamingBgContainer} ${isLight ? styles.lightMode : ''}`} aria-hidden="true">
      {/* ── Layer 1: Radiant Living Plasma Nebulae ── */}
      <div className={styles.nebulaAuraTopLeft} />
      <div className={styles.nebulaAuraTopRight} />
      <div className={styles.nebulaAuraCenter} />
      <div className={styles.nebulaAuraBottom} />

      {/* ── Layer 2: Hexagonal Cyber Matrix Wireframe ── */}
      <div className={styles.cyberHexGrid} />
      <div className={styles.scanningLightBeam} />

      {/* ── Layer 3: Interactive 60 FPS HTML5 Particle & Meteor Canvas ── */}
      <canvas ref={canvasRef} className={styles.particleCanvas} />

      {/* ── Layer 4: Floating 3D Gaming Polyhedral Runes ── */}
      <div className={styles.floatingRunesContainer}>
        <div className={`${styles.rune} ${styles.rune1}`}>✦</div>
        <div className={`${styles.rune} ${styles.rune2}`}>◈</div>
        <div className={`${styles.rune} ${styles.rune3}`}>★</div>
        <div className={`${styles.rune} ${styles.rune4}`}>◆</div>
        <div className={`${styles.rune} ${styles.rune5}`}>✦</div>
        <div className={`${styles.rune} ${styles.rune6}`}>◈</div>
      </div>
    </div>
  );
};
