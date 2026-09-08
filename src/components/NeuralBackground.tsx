import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  hue: number;
}

export const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseOrbRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates with spring interpolation
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 170,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const particleCount = Math.min(Math.floor((width * height) / 22000), 55);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 0.8,
        baseAlpha: Math.random() * 0.35 + 0.15,
        alpha: Math.random() * 0.35 + 0.15,
        hue: Math.random() * 360,
      });
    }

    let globalHue = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      globalHue = (globalHue + 0.4) % 360;

      // Spring mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Dynamic RGB mouse aura shifting hue
      if (mouseOrbRef.current && mouse.x > 0 && mouse.y > 0) {
        mouseOrbRef.current.style.transform = `translate3d(${mouse.x - width * 0.175}px, ${mouse.y - width * 0.175}px, 0)`;
        const mouseHue = Math.floor(globalHue + (mouse.x / width) * 120) % 360;
        mouseOrbRef.current.style.filter = `blur(75px) hue-rotate(${mouseHue}deg)`;
      }

      // Draw subtle RGB neural particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        p1.x += p1.vx;
        p1.y += p1.vy;
        p1.hue = (p1.hue + 0.2) % 360;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        const pColor = `hsl(${p1.hue}, 90%, 65%)`;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = pColor;
        ctx.globalAlpha = p1.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = pColor;
        ctx.fill();

        // Connect nearby nodes with chromatic gradient lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 105) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsl(${(p1.hue + p2.hue) / 2}, 85%, 65%)`;
            ctx.globalAlpha = (1 - dist / 105) * 0.16;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to mouse pointer with vivid RGB pulse
        const mouseDx = p1.x - mouse.x;
        const mouseDy = p1.y - mouse.y;
        const mouseDist = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

        if (mouseDist < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `hsl(${(globalHue + 180) % 360}, 100%, 70%)`;
          ctx.globalAlpha = (1 - mouseDist / mouse.radius) * 0.35;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="gemini-gradient-container" aria-hidden="true">
      {/* 1. Base Google Gemini Fluid Gradient Orbs */}
      <div className="gemini-orb-1" />
      <div className="gemini-orb-2" />
      <div className="gemini-orb-3" />
      <div className="gemini-orb-4" />

      {/* 2. Active Multi-Color RGB Spectrum Aurora Mesh */}
      <div className="rgb-spectrum-aurora opacity-70" />

      {/* 3. Dynamic Sweeping RGB Chroma Beam */}
      <div className="rgb-chroma-beam opacity-60" />

      {/* 4. Interactive Mouse-following RGB Starburst Aura */}
      <div ref={mouseOrbRef} className="gemini-orb-center opacity-90" />

      {/* 5. Animated Gemini Chromatic Sparkle Stars */}
      <div className="absolute top-[15%] left-[10%] text-cyan-300 opacity-70 animate-pulse-slow">
        <svg className="w-6 h-6 drop-shadow-[0_0_10px_rgba(6,182,212,0.9)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      <div className="absolute top-[45%] right-[12%] text-fuchsia-400 opacity-60 animate-pulse-slow" style={{ animationDelay: '1.6s' }}>
        <svg className="w-7 h-7 drop-shadow-[0_0_12px_rgba(217,70,239,0.9)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      <div className="absolute bottom-[20%] left-[25%] text-emerald-400 opacity-60 animate-pulse-slow" style={{ animationDelay: '2.5s' }}>
        <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(52,211,153,0.9)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      <div className="absolute top-[70%] right-[30%] text-amber-300 opacity-50 animate-pulse-slow" style={{ animationDelay: '3.4s' }}>
        <svg className="w-4 h-4 drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      {/* 6. Dynamic RGB Neural Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />

      {/* 7. Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-size opacity-30 dark:opacity-15" />

      {/* 8. Content Contrast Vignette Shield */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(3,6,16,0.65)_100%)] pointer-events-none" />
    </div>
  );
};
