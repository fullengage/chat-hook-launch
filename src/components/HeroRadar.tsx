import { useEffect, useRef, type RefObject } from "react";

// Radar: um feixe gira a partir do campo do site varrendo "empresas" (pontos).
// Quando o feixe passa por uma empresa que combina, ela acende em laranja e liga uma linha até o campo.
const DOTS = 90;
const MATCH_RATE = 0.22;
const TURN_MS = 6000; // uma volta completa do feixe
const CLEAR_X = 340; // não desenha empresas atrás do texto (metade da coluna central)

type Dot = { a: number; r: number; match: boolean; hit: number };

const HeroRadar = ({ anchor }: { anchor: RefObject<HTMLElement> }) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, cx = 0, cy = 0, maxR = 0, raf = 0;
    let dots: Dot[] = [];

    const layout = () => {
      const dpr = window.devicePixelRatio || 1;
      const box = canvas.getBoundingClientRect();
      w = box.width;
      h = box.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const a = anchor.current?.getBoundingClientRect();
      cx = a ? a.left + a.width / 2 - box.left : w / 2;
      cy = a ? a.top + a.height / 2 - box.top : h / 2;
      maxR = Math.hypot(Math.max(cx, w - cx), Math.max(cy, h - cy));
      dots = [];
      for (let tries = 0; dots.length < DOTS && tries < DOTS * 20; tries++) {
        const d: Dot = { a: Math.random() * Math.PI * 2, r: 180 + Math.random() * (maxR - 180), match: Math.random() < MATCH_RATE, hit: -1e9 };
        const x = cx + Math.cos(d.a) * d.r, y = cy + Math.sin(d.a) * d.r;
        if (x < 8 || x > w - 8 || y < 8 || y > h - 8 || Math.abs(x - cx) < CLEAR_X) continue;
        dots.push(d);
      }
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, w, h);

      // anéis
      ctx.strokeStyle = "rgba(15, 23, 42, 0.06)";
      ctx.lineWidth = 1;
      for (let r = 120; r < maxR; r += 110) {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      const sweep = reduce ? -1 : ((now % TURN_MS) / TURN_MS) * Math.PI * 2;

      // feixe (rastro que some atrás do ângulo atual)
      if (!reduce) {
        const g = ctx.createConicGradient(sweep - 0.9, cx, cy);
        g.addColorStop(0, "rgba(255, 107, 0, 0)");
        g.addColorStop(0.143, "rgba(255, 107, 0, 0.10)");
        g.addColorStop(0.1431, "rgba(255, 107, 0, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, maxR, sweep - 0.9, sweep);
        ctx.closePath();
        ctx.fill();
      }

      for (const d of dots) {
        const x = cx + Math.cos(d.a) * d.r, y = cy + Math.sin(d.a) * d.r;
        if (!reduce) {
          const behind = (sweep - d.a + Math.PI * 4) % (Math.PI * 2);
          if (behind < 0.05 && now - d.hit > TURN_MS * 0.5) d.hit = now;
        }
        const age = reduce ? (d.match ? 0 : Infinity) : (now - d.hit) / TURN_MS; // 0 = acabou de ser encontrada
        const glow = Math.max(0, 1 - age * 1.4);

        if (d.match && glow > 0) {
          ctx.strokeStyle = `rgba(255, 107, 0, ${0.35 * glow})`;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(cx, cy);
          ctx.stroke();
          ctx.fillStyle = `rgba(255, 107, 0, ${0.15 * glow})`;
          ctx.beginPath();
          ctx.arc(x, y, 10, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "#ff6b00";
        } else {
          ctx.fillStyle = `rgba(100, 116, 139, ${0.35 + 0.4 * glow})`;
        }
        ctx.beginPath();
        ctx.arc(x, y, d.match && glow > 0 ? 3.5 : 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduce) raf = requestAnimationFrame(draw);
    };

    layout();
    if (reduce) draw(0);
    else raf = requestAnimationFrame(draw);
    const onResize = () => {
      layout();
      if (reduce) draw(0);
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [anchor]);

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 w-full h-full hidden md:block" />;
};

export default HeroRadar;
