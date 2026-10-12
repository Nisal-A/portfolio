import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const LINK_DISTANCE = 130;
const POINTER_RADIUS = 120;

/**
 * A slow network of nodes that links nearby points and gently moves away from the pointer.
 * Colours come from the theme tokens, so it follows light and dark mode.
 * With reduced motion enabled, a single still frame is drawn instead.
 */
export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const host = canvas?.parentElement;
    if (!canvas || !ctx || !host) return;

    let width = 0;
    let height = 0;
    let points: Point[] = [];
    let frame = 0;
    const pointer = { x: -1000, y: -1000 };

    const readToken = (name: string, fallback: string) =>
      getComputedStyle(canvas).getPropertyValue(name).trim() || fallback;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = host!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.floor(width * dpr);
      canvas!.height = Math.floor(height * dpr);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(64, Math.max(18, Math.floor((width * height) / 16000)));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    }

    function draw() {
      const c = ctx!;
      c.clearRect(0, 0, width, height);
      const accent = readToken('--accent', '#38bdf8');
      const accent2 = readToken('--accent-2', '#818cf8');

      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        if (dx * dx + dy * dy < POINTER_RADIUS * POINTER_RADIUS) {
          p.x += (dx / POINTER_RADIUS) * 0.6;
          p.y += (dy / POINTER_RADIUS) * 0.6;
        }
      }

      c.lineWidth = 1;
      c.strokeStyle = accent;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i];
          const b = points[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK_DISTANCE) {
            c.globalAlpha = (1 - dist / LINK_DISTANCE) * 0.35;
            c.beginPath();
            c.moveTo(a.x, a.y);
            c.lineTo(b.x, b.y);
            c.stroke();
          }
        }
      }

      c.globalAlpha = 1;
      c.fillStyle = accent2;
      for (const p of points) {
        c.beginPath();
        c.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        c.fill();
      }
    }

    function loop() {
      draw();
      frame = requestAnimationFrame(loop);
    }

    const onMove = (e: PointerEvent) => {
      const r = canvas!.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
    };
    const onLeave = () => {
      pointer.x = -1000;
      pointer.y = -1000;
    };

    resize();
    const observer = new ResizeObserver(() => resize());
    observer.observe(host);
    window.addEventListener('pointermove', onMove, { passive: true });
    host.addEventListener('pointerleave', onLeave);

    if (reduced) {
      draw();
    } else {
      frame = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerleave', onLeave);
    };
  }, [reduced]);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}
