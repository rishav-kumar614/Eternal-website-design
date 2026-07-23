import React, { useEffect, useRef } from 'react';
import { useScroll, useTransform, useSpring, motion } from 'framer-motion';

/* ─────────────────────────────────────────────
   Parallax Canvas Starfield  (scroll-driven)
───────────────────────────────────────────── */
const ParallaxStars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const scrollYRef = useRef(0);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    // Three star layers with different parallax speeds
    const layers = [
      { count: 80, speed: 0.08, minR: 0.3, maxR: 0.8,  baseAlpha: 0.35 },
      { count: 50, speed: 0.18, minR: 0.8, maxR: 1.4,  baseAlpha: 0.55 },
      { count: 25, speed: 0.30, minR: 1.4, maxR: 2.2,  baseAlpha: 0.75 },
    ];

    type Star = { x: number; y: number; oy: number; r: number; alpha: number; speed: number; phase: number };
    const stars: Star[] = [];

    for (const layer of layers) {
      for (let i = 0; i < layer.count; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H * 5,   // spread over 5x viewport height
          oy: Math.random() * H * 5,
          r: layer.minR + Math.random() * (layer.maxR - layer.minR),
          alpha: layer.baseAlpha * (0.7 + Math.random() * 0.3),
          speed: layer.speed,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    // Gold dust streaks
    type Streak = { x: number; oy: number; len: number; alpha: number; speed: number };
    const streaks: Streak[] = Array.from({ length: 8 }, () => ({
      x: Math.random() * W,
      oy: Math.random() * H * 5,
      len: 40 + Math.random() * 80,
      alpha: 0.10 + Math.random() * 0.15,
      speed: 0.04 + Math.random() * 0.08,
    }));

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    const onScroll = () => { scrollYRef.current = window.scrollY; };

    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, { passive: true });

    let tick = 0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const sy = scrollYRef.current;
      tick++;

      // Stars
      for (const s of stars) {
        const py = ((s.oy - sy * s.speed) % (H * 5) + H * 5) % (H * 5);
        if (py > H + 4 || py < -4) continue;

        const twinkle = s.alpha + Math.sin(tick * 0.03 + s.phase) * 0.12;
        ctx.globalAlpha = Math.max(0, Math.min(1, twinkle));
        ctx.fillStyle = '#D4AF37';
        ctx.beginPath();
        ctx.arc(s.x, py, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Gold streaks
      for (const st of streaks) {
        const py = ((st.oy - sy * st.speed) % (H * 5) + H * 5) % (H * 5);
        if (py > H + 10 || py < -10) continue;
        const grad = ctx.createLinearGradient(st.x, py, st.x + st.len, py);
        grad.addColorStop(0, 'rgba(212,175,55,0)');
        grad.addColorStop(0.5, `rgba(212,175,55,${st.alpha})`);
        grad.addColorStop(1, 'rgba(212,175,55,0)');
        ctx.globalAlpha = 1;
        ctx.strokeStyle = grad;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(st.x, py);
        ctx.lineTo(st.x + st.len, py);
        ctx.stroke();
      }

      rafId.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 w-full h-full"
      style={{ opacity: 0.55 }}
    />
  );
};

/* ─────────────────────────────────────────────
   Scroll-driven Gradient Orbs
───────────────────────────────────────────── */
const ScrollOrbs: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 35, damping: 18 });

  // Orb 1 – top left gold, drifts diagonally
  const orb1Y  = useTransform(smooth, [0, 1], ['0%', '55%']);
  const orb1X  = useTransform(smooth, [0, 1], ['-5%', '20%']);
  const orb1Sc = useTransform(smooth, [0, 0.5, 1], [1, 1.35, 0.85]);

  // Orb 2 – top right warm amber
  const orb2Y  = useTransform(smooth, [0, 1], ['-15%', '45%']);
  const orb2Sc = useTransform(smooth, [0, 0.5, 1], [0.9, 1.4, 1.05]);

  // Orb 3 – centre bottom accent, rises on scroll
  const orb3Y  = useTransform(smooth, [0, 1], ['30%', '-15%']);
  const orb3Op = useTransform(smooth, [0, 0.25, 1], [0, 0.7, 0.4]);

  return (
    <>
      {/* Orb 1 */}
      <motion.div
        className="pointer-events-none fixed z-0"
        style={{
          top: orb1Y, left: orb1X, scale: orb1Sc,
          width: 640, height: 640, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.13) 0%, rgba(180,120,20,0.06) 50%, transparent 75%)',
          filter: 'blur(64px)',
        }}
      />

      {/* Orb 2 */}
      <motion.div
        className="pointer-events-none fixed z-0"
        style={{
          top: orb2Y, right: '-5%', scale: orb2Sc,
          width: 720, height: 720, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192,130,55,0.11) 0%, rgba(212,175,55,0.05) 55%, transparent 75%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Orb 3 – subtle violet-gold at bottom */}
      <motion.div
        className="pointer-events-none fixed z-0"
        style={{
          bottom: 0, left: '28%', opacity: orb3Op, translateY: orb3Y,
          width: 520, height: 520, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(110,80,200,0.08) 0%, rgba(212,175,55,0.05) 60%, transparent 80%)',
          filter: 'blur(72px)',
        }}
      />
    </>
  );
};

/* ─────────────────────────────────────────────
   Scroll-modulated Grid overlay
───────────────────────────────────────────── */
const ScrollGrid: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 28, damping: 16 });
  const gridOp = useTransform(smooth, [0, 0.15, 0.85, 1], [0.035, 0.065, 0.045, 0.02]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      style={{ opacity: gridOp }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="sbGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sbGrid)" />
      </svg>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   Main export
───────────────────────────────────────────── */
export const ScrollBackground: React.FC = () => (
  <>
    <ParallaxStars />
    <ScrollOrbs />
    <ScrollGrid />
  </>
);
