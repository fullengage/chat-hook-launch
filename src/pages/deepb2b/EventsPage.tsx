import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Check, Clock, MapPin } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import type { Locale } from "@/i18n/types";
import { SITE_ORIGIN, getTradeShowPath } from "@/i18n/routes";
import { articlesFor } from "@/data/articles";
import { TRADE_SHOWS, MARKET_DATA_EDITION, marketCount } from "@/data/tradeShows";
import { trackCtaClick } from "@/services/analytics";
import { SeoHead } from "@/components/seo/SeoHead";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { TickerTape, type TickerItem } from "@/components/TickerTape";
import { eventsCopy } from "./positioningCopy";

const INTL: Record<Locale, string> = { "pt-br": "pt-BR", en: "en-US", es: "es", "zh-cn": "zh-CN" };

const UI: Record<Locale, {
  section: string; tagline: string; ticker: string; usd: string; eur: string; daysLeft: string; today: string; companies: string;
  latest: string; headline: string; upcoming: string; daysUnit: string; market: string; marketNote: string;
  segment: string; brazil: string; calendar: string; readMore: string; serviceEyebrow: string;
}> = {
  "pt-br": {
    section: "Feiras e Eventos", tagline: "DeepB2B Intelligence", ticker: "Indicadores de feiras e mercado",
    usd: "Dólar", eur: "Euro", daysLeft: "faltam {n} dias", today: "acontece agora", companies: "{n} empresas",
    latest: "Últimas", headline: "{name} 2027 acontece de {range} no {venue}",
    upcoming: "Próximas feiras", daysUnit: "dias", market: "Mercado comprador",
    marketNote: "Estabelecimentos ativos · Receita Federal · {edition}", segment: "Segmento", brazil: "Brasil",
    calendar: "Calendário completo", readMore: "Ler matéria", serviceEyebrow: "Para expositores",
  },
  en: {
    section: "Trade Shows & Events", tagline: "DeepB2B Intelligence", ticker: "Trade show and market indicators",
    usd: "USD", eur: "EUR", daysLeft: "{n} days to go", today: "happening now", companies: "{n} companies",
    latest: "Latest", headline: "{name} 2027 runs {range} at {venue}",
    upcoming: "Upcoming shows", daysUnit: "days", market: "Buyer market",
    marketNote: "Active establishments · Federal Revenue · {edition}", segment: "Segment", brazil: "Brazil",
    calendar: "Full calendar", readMore: "Read story", serviceEyebrow: "For exhibitors",
  },
  es: {
    section: "Ferias y Eventos", tagline: "DeepB2B Intelligence", ticker: "Indicadores de ferias y mercado",
    usd: "Dólar", eur: "Euro", daysLeft: "faltan {n} días", today: "en curso", companies: "{n} empresas",
    latest: "Últimas", headline: "{name} 2027 se realiza del {range} en {venue}",
    upcoming: "Próximas ferias", daysUnit: "días", market: "Mercado comprador",
    marketNote: "Establecimientos activos · Receita Federal · {edition}", segment: "Segmento", brazil: "Brasil",
    calendar: "Calendario completo", readMore: "Leer nota", serviceEyebrow: "Para expositores",
  },
  "zh-cn": {
    section: "展会与活动", tagline: "DeepB2B Intelligence", ticker: "展会与市场指标",
    usd: "美元", eur: "欧元", daysLeft: "还有 {n} 天", today: "正在举行", companies: "{n} 家企业",
    latest: "最新", headline: "{name} 2027 将于 {range} 在 {venue} 举行",
    upcoming: "即将举行的展会", daysUnit: "天", market: "买方市场",
    marketNote: "在营经营场所 · 联邦税务局 · {edition}", segment: "行业", brazil: "巴西",
    calendar: "完整日历", readMore: "阅读文章", serviceEyebrow: "面向参展商",
  },
};

const fill = (s: string, v: Record<string, string>) => s.replace(/\{(\w+)\}/g, (_, k) => v[k] ?? "");
const DAY = 86_400_000;

export const EventsPage: React.FC = () => {
  const { locale, dict, routeTo, articleTo } = useLocale();
  const t = UI[locale];
  const c = eventsCopy(locale);
  const intl = INTL[locale];
  const contact = routeTo("contact");

  const nf = new Intl.NumberFormat(intl);
  const dateF = new Intl.DateTimeFormat(intl, { day: "numeric", month: "short", timeZone: "UTC" });
  const rangeF = new Intl.DateTimeFormat(intl, { day: "numeric", month: "long", timeZone: "UTC" }) as Intl.DateTimeFormat & {
    formatRange(a: Date, b: Date): string;
  };
  const edition = new Intl.DateTimeFormat(intl, { month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${MARKET_DATA_EDITION}-15T00:00:00Z`));
  // ponytail: a página é pré-gerada, mas o app monta tudo de novo no navegador (createRoot), então contagens e data são do dia da visita
  const now = Date.now();
  const shows = [...TRADE_SHOWS]
    .filter((s) => new Date(`${s.end}T23:59:59Z`).getTime() >= now)
    .sort((a, b) => a.start.localeCompare(b.start));
  const daysTo = (iso: string) => Math.ceil((new Date(`${iso}T00:00:00Z`).getTime() - now) / DAY);
  // em texto corrido: "de 6 a 9 de abril" (pt) / "del 6 al 9 de abril" (es), não "6 – 9"
  const JOIN: Partial<Record<Locale, string>> = { "pt-br": " a ", es: " al " };
  const range = (s: (typeof shows)[number]) => {
    const r = rangeF.formatRange(new Date(`${s.start}T00:00:00Z`), new Date(`${s.end}T00:00:00Z`));
    return JOIN[locale] ? r.replace(/\s*–\s*/, JOIN[locale] as string) : r;
  };
  // um segmento comprador por feira: a 1ª linha de atacado, senão a 1ª da tabela
  // números vêm de marketCounts.json (gerado da base); feira sem contagem fica fora do quadro e da faixa
  const marketRows = shows.flatMap((s) => {
    const row = s.market.find((m) => /atacado/i.test(m.label["pt-br"])) ?? s.market[0];
    const n = row && marketCount(row.q);
    return n ? [{ show: s, row, br: n.br }] : [];
  });

  const ticker: TickerItem[] = [
    ...shows.map((s) => {
      const d = daysTo(s.start);
      return { label: `${s.name} 2027`, value: d > 0 ? fill(t.daysLeft, { n: nf.format(d) }) : t.today, href: getTradeShowPath(locale, s.slug) };
    }),
    ...marketRows.map(({ row, br }) => ({ label: row.label[locale], value: fill(t.companies, { n: nf.format(br) }) })),
  ];

  const [lead, ...more] = articlesFor(locale);

  return (
    <SiteLayout>
      <SeoHead
        title={dict.seo.events.title}
        description={dict.seo.events.description}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: t.section,
            url: `${SITE_ORIGIN}${routeTo("events")}`,
            hasPart: shows.map((s) => ({ "@type": "Event", name: `${s.name} 2027`, startDate: s.start, endDate: s.end, url: `${SITE_ORIGIN}${getTradeShowPath(locale, s.slug)}` })),
          },
        ]}
      />

      <TickerTape items={ticker} intlLocale={intl} fxLabels={{ usd: t.usd, eur: t.eur }} ariaLabel={t.ticker} />

      {/* Cabeçalho de editoria */}
      <header className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#ff6b00]">{t.tagline}</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#0f172a]">{t.section}</h1>
          </div>
          <p className="text-sm text-slate-500 first-letter:uppercase">
            {new Intl.DateTimeFormat(intl, { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(new Date(now))}
          </p>
        </div>
      </header>

      {/* Primeira página: manchete | últimas | quadros */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 lg:border-r lg:border-slate-200 lg:pr-10">
            {lead ? (
              <Link to={articleTo(lead.article.slug)} className="group block">
                <span className="text-sm font-semibold text-[#ff6b00]">{lead.content.category}</span>
                <h2 className="mt-2 font-serif text-3xl md:text-[2.6rem] leading-[1.1] font-bold text-[#0f172a] group-hover:text-[#ff6b00] transition-colors">
                  {lead.content.title}
                </h2>
                <p className="mt-4 text-base text-slate-600 leading-relaxed">{lead.content.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#040f21]">
                  {t.readMore} <ArrowRight className="h-4 w-4 text-[#ff6b00]" aria-hidden="true" />
                </span>
              </Link>
            ) : (
              <h2 className="font-serif text-3xl font-bold text-[#0f172a]">{c.h1}</h2>
            )}
            {more.length > 0 && (
              <ul className="mt-8 space-y-4 border-t border-slate-200 pt-6">
                {more.slice(0, 3).map(({ article, content }) => (
                  <li key={article.slug}>
                    <Link to={articleTo(article.slug)} className="group block">
                      <span className="text-xs font-semibold text-[#ff6b00]">{content.category}</span>
                      <p className="font-serif text-lg font-bold leading-snug text-[#0f172a] group-hover:text-[#ff6b00]">{content.title}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="lg:col-span-4">
            <h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500 border-b-2 border-[#040f21] pb-2">{t.latest}</h2>
            <ul className="divide-y divide-slate-200">
              {shows.map((s) => (
                <li key={s.slug} className="py-5">
                  <Link to={getTradeShowPath(locale, s.slug)} className="group block">
                    <span className="text-sm font-semibold text-[#ff6b00]">{s.copy[locale].sector}</span>
                    <p className="mt-1 font-serif text-xl font-bold leading-snug text-[#0f172a] group-hover:text-[#ff6b00] transition-colors">
                      {fill(t.headline, { name: s.name, range: range(s), venue: s.venue })}
                    </p>
                    <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-500">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {s.city} – {s.uf}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-3 space-y-8">
            <div>
              <div className="flex items-baseline justify-between border-b-2 border-[#040f21] pb-2">
                <h2 className="font-serif text-xl font-bold text-[#0f172a]">{t.upcoming}</h2>
                <CalendarDays className="h-4 w-4 text-[#ff6b00]" aria-hidden="true" />
              </div>
              <ul className="divide-y divide-slate-100">
                {shows.map((s) => {
                  const d = daysTo(s.start);
                  return (
                    <li key={s.slug}>
                      <Link to={getTradeShowPath(locale, s.slug)} className="flex items-center justify-between gap-3 py-3 hover:bg-slate-50">
                        <span>
                          <span className="block text-sm font-bold text-[#0f172a]">{s.name}</span>
                          <span className="text-xs text-slate-500">{dateF.format(new Date(`${s.start}T00:00:00Z`))}</span>
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-md bg-[#040f21] px-2 py-1 font-mono text-xs font-bold text-white">
                          <Clock className="h-3 w-3 text-[#ff6b00]" aria-hidden="true" />
                          {d > 0 ? `${nf.format(d)} ${t.daysUnit}` : t.today}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link to={routeTo("calendar")} className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[#ff6b00] hover:underline">
                {t.calendar} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div>
              <div className="border-b-2 border-[#040f21] pb-2">
                <h2 className="font-serif text-xl font-bold text-[#0f172a]">{t.market}</h2>
                <p className="text-[11px] text-slate-500">{fill(t.marketNote, { edition })}</p>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-[11px] uppercase tracking-wider text-slate-500">
                    <th className="py-2 font-semibold">{t.segment}</th>
                    <th className="py-2 text-right font-semibold">{t.brazil}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {marketRows.map(({ show, row, br }) => (
                    <tr key={show.slug} className="odd:bg-slate-50">
                      <td className="py-2 pr-2">
                        <span className="block font-semibold text-[#0f172a] leading-tight">{row.label[locale]}</span>
                        <span className="font-mono text-[10px] text-slate-400">{row.cnae}</span>
                      </td>
                      <td className="py-2 text-right font-mono font-bold text-[#0f172a]">{nf.format(br)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </aside>
        </div>
      </section>

      {/* Serviço para expositores */}
      <section className="py-16 bg-[#f8fafc] border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#ff6b00]">{t.serviceEyebrow}</span>
          <h2 className="mt-2 max-w-3xl font-serif text-3xl md:text-4xl font-bold text-[#0f172a]">{c.h1}</h2>
          <p className="mt-4 max-w-3xl text-slate-600">{c.why}</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {c.phases.map((p, i) => (
              <div key={p.title} className="border-t-2 border-[#040f21] pt-5">
                <span className="font-mono text-xs text-slate-400">0{i + 1}</span>
                <h3 className="mt-1 text-xl font-extrabold text-[#0f172a]">{p.title}</h3>
                <ul className="mt-4 space-y-2">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 shrink-0 text-[#ff6b00] mt-0.5" aria-hidden="true" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#040f21] text-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">{c.cta}</h2>
          <p className="mt-4 text-slate-300">{c.ctaText}</p>
          <Link
            to={contact}
            onClick={() => trackCtaClick("events_presentation", locale, contact)}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ff6b00] px-8 py-4 text-sm font-bold text-white hover:bg-[#ea580c]"
          >
            {dict.nav.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export default EventsPage;
