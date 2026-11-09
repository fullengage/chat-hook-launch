import { useEffect, useRef } from "react";

// Linhas curvas que saem da borda e convergem no campo do site, com pontos correndo por elas.
// Um canvas por lado; o direito é o esquerdo espelhado (classe scale-x-[-1]).
const LINES = 11;
const DOTS_PER_LINE = 3;

const HeroFlow = ({ className = "" }: { className?: string }) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // curva i: começa na borda esquerda em alturas espalhadas e termina no centro-direita (onde fica o campo)
    const point = (i: number, t: number) => {
      const y0 = (h * (i + 0.5)) / LINES;
      const x0 = 0, x3 = w, y3 = h / 2;
      const x1 = w * 0.45, y1 = y0, x2 = w * 0.7, y2 = y3;
      const u = 1 - t;
      return {
        x: u * u * u * x0 + 3 * u * u * t * x1 + 3 * u * t * t * x2 + t * t * t * x3,
        y: u * u * u * y0 + 3 * u * u * t * y1 + 3 * u * t * t * y2 + t * t * t * y3,
      };
    };

    const dots = Array.from({ length: LINES * DOTS_PER_LINE }, (_, k) => ({
      line: k % LINES,
      t: Math.random(),
      speed: 0.0012 + Math.random() * 0.0018,
      orange: Math.random() < 0.35,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = "rgba(15, 23, 42, 0.08)";
      ctx.lineWidth = 1;
      for (let i = 0; i < LINES; i++) {
        ctx.beginPath();
        for (let s = 0; s <= 40; s++) {
          const p = point(i, s / 40);
          if (s === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }
      for (const d of dots) {
        if (!reduce) {
          d.t += d.speed;
          if (d.t > 1) d.t = 0;
        }
        const p = point(d.line, d.t);
        ctx.fillStyle = d.orange ? "#ff6b00" : "rgba(100, 116, 139, 0.45)";
        ctx.fillRect(p.x - 2, p.y - 2, 4, 4);
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    const onResize = () => {
      resize();
      if (reduce) draw();
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={`pointer-events-none block ${className}`} />;
};

export default HeroFlow;
