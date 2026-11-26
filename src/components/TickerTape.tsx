import React, { useEffect, useState } from "react";

export interface TickerItem {
  label: string;
  value: string;
  change?: number; // % (positivo = verde, negativo = vermelho)
  href?: string;
  note?: string; // texto pequeno (ex.: fonte e horário da cotação)
}

const FX_URL = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL";

/** Cotações reais do dólar e do euro (AwesomeAPI, pública). Se falhar, a faixa segue só com os dados próprios. */
function useFx(intlLocale: string, labels: { usd: string; eur: string }): TickerItem[] {
  const [items, setItems] = useState<TickerItem[]>([]);
  useEffect(() => {
    let alive = true;
    fetch(FX_URL)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d: Record<string, { bid: string; pctChange: string; create_date: string }>) => {
        if (!alive) return;
        const brl = new Intl.NumberFormat(intlLocale, { style: "currency", currency: "BRL", minimumFractionDigits: 2, maximumFractionDigits: 4 });
        // create_date vem em horário de Brasília ("2026-11-25 14:32:30"): mostra só HH:MM e a fonte
        const row = (k: string, label: string): TickerItem | null => {
          const q = d[k];
          const bid = Number(q?.bid);
          if (!q || !Number.isFinite(bid)) return null;
          return { label, value: brl.format(bid), change: Number(q.pctChange), note: `AwesomeAPI · ${q.create_date?.slice(11, 16) ?? ""}` };
        };
        setItems([row("USDBRL", labels.usd), row("EURBRL", labels.eur)].filter(Boolean) as TickerItem[]);
      })
      .catch(() => undefined);
    return () => {
      alive = false;
    };
  }, [intlLocale, labels.usd, labels.eur]);
  return items;
}

export const TickerTape: React.FC<{ items: TickerItem[]; intlLocale: string; fxLabels: { usd: string; eur: string }; ariaLabel: string }> = ({
  items,
  intlLocale,
  fxLabels,
  ariaLabel,
}) => {
  const fx = useFx(intlLocale, fxLabels);
  const all = [...fx, ...items];
  const pct = new Intl.NumberFormat(intlLocale, { minimumFractionDigits: 2, maximumFractionDigits: 2, signDisplay: "always" });

  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {all.map((it, i) => {
        const inner = (
          <>
            <span className="font-extrabold uppercase tracking-wide text-white">{it.label}</span>
            <span className="text-slate-300">{it.value}</span>
            {it.change !== undefined && (
              <span className={it.change >= 0 ? "text-emerald-400" : "text-red-400"}>
                {it.change >= 0 ? "▲" : "▼"} {pct.format(it.change)}%
              </span>
            )}
            {it.note && <span className="text-[10px] text-slate-500">{it.note}</span>}
          </>
        );
        return (
          <li key={`${hidden}-${i}`} title={it.note} className="flex items-center gap-2 border-r border-white/10 px-5 py-2.5 text-xs whitespace-nowrap">
            {it.href ? (
              <a href={it.href} tabIndex={hidden ? -1 : undefined} className="flex items-center gap-2 hover:underline">
                {inner}
              </a>
            ) : (
              inner
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="ticker group relative overflow-hidden bg-[#020814] border-b border-white/10" aria-label={ariaLabel}>
      {/* ponytail: CSS puro; a 2ª cópia da lista fecha o loop sem emenda */}
      <style>{`
        @keyframes ticker-scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .ticker-track { animation: ticker-scroll 60s linear infinite; }
        .ticker:hover .ticker-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .ticker-track { animation: none; } }
      `}</style>
      <div className="ticker-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
};

export default TickerTape;
