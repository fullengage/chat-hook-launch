import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, CalendarDays, ExternalLink, MapPin, ShieldCheck } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import type { Locale } from "@/i18n/types";
import { SITE_ORIGIN, getTradeShowPath } from "@/i18n/routes";
import { TRADE_SHOWS, MARKET_DATA_EDITION, getTradeShow, marketCount, type TradeShow } from "@/data/tradeShows";
import { BuyerDemandForm, OrganizerContact } from "@/components/forms/TradeShowForms";
import { trackCtaClick } from "@/services/analytics";
import { SeoHead } from "@/components/seo/SeoHead";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import NotFound from "@/pages/NotFound";

const UI: Record<Locale, {
  eyebrow: string; h1: string; lead: string; verified: string; details: string;
  dates: string; venue: string; organizer: string; official: string; about: string; exhibitors: string; buyers: string;
  marketTitle: string; marketLead: string; segment: string; brazil: string; sp: string; marketNote: string;
  toConfirm: string; filterSector: string; filterMonth: string; filterState: string; all: string; noResults: string;
  meiOf: string; meiNote: string; exhibitorsLine: string;
  titleTpl: string; ctaTitle: string; ctaText: string; ctaButton: string; sourceTitle: string; checked: string; seeCalendar: string;
}> = {
  "pt-br": {
    eyebrow: "Calendário de feiras 2027", h1: "Feiras de negócios em 2027",
    lead: "As principais feiras de negócios do calendário, com datas e locais conferidos nos sites oficiais e o perfil de quem expõe e de quem compra em cada setor.",
    verified: "Datas conferidas no site oficial", details: "Ver ficha da feira",
    dates: "Datas", venue: "Local", organizer: "Organização", official: "Site oficial", about: "Sobre a feira",
    exhibitors: "Quem expõe", buyers: "Quem compra e visita",
    marketTitle: "O mercado comprador em números",
    marketLead: "Quantas empresas existem nos segmentos que compram de quem expõe nesta feira.",
    segment: "Segmento (CNAE principal)", brazil: "Brasil", sp: "Estado de SP",
    marketNote: "Estabelecimentos ativos na base pública da Receita Federal (edição {edition}) com o CNAE principal indicado, processados pela plataforma DeepB2B. É uma contagem de empresas, não uma estimativa de compradores.",
    toConfirm: "Datas a confirmar",
    filterSector: "Setor",
    filterMonth: "Mês",
    filterState: "Estado",
    all: "Todos",
    noResults: "Nenhuma feira com esses filtros.",
    meiOf: "dos quais {n} MEI",
    meiNote: "Inclui MEI (microempreendedor individual), indicado em cada linha.",
    exhibitorsLine: "{c} expositores confirmados · {v} verificados na Receita Federal · atualizado em {d}",
    titleTpl: "{name} 2027: datas, local, expositores e compradores",
    ctaTitle: "Vai expor na {name}?", ctaText: "Mapeamos compradores, identificamos decisores e organizamos campanhas e reuniões antes, durante e depois da feira.",
    ctaButton: "Solicitar apresentação", sourceTitle: "Fonte e verificação", checked: "Conferido em", seeCalendar: "Ver calendário completo",
  },
  en: {
    eyebrow: "2027 trade show calendar", h1: "Brazil business trade shows in 2027",
    lead: "Brazil's leading business trade shows, with dates and venues verified on official websites and a profile of who exhibits and who buys in each sector.",
    verified: "Dates verified on the official website", details: "View trade show profile",
    dates: "Dates", venue: "Venue", organizer: "Organizer", official: "Official website", about: "About the show",
    exhibitors: "Who exhibits", buyers: "Who buys and visits",
    marketTitle: "The buyer market in numbers",
    marketLead: "How many companies operate in the segments that buy from this show's exhibitors.",
    segment: "Segment (primary CNAE code)", brazil: "Brazil", sp: "São Paulo state",
    marketNote: "Active establishments in Brazil's public Federal Revenue registry (edition {edition}) with the primary CNAE code shown, processed by the DeepB2B platform. This is a count of companies, not an estimate of buyers.",
    toConfirm: "Dates to be confirmed",
    filterSector: "Sector",
    filterMonth: "Month",
    filterState: "State",
    all: "All",
    noResults: "No shows match these filters.",
    meiOf: "of which {n} MEI",
    meiNote: "Includes MEI (Brazilian individual micro-entrepreneurs), shown on each row.",
    exhibitorsLine: "{c} confirmed exhibitors · {v} verified with the Federal Revenue · updated {d}",
    titleTpl: "{name} 2027: dates, venue, exhibitors and buyers",
    ctaTitle: "Exhibiting at {name}?", ctaText: "We map buyers, identify decision-makers and run campaigns and meetings before, during and after the show.",
    ctaButton: "Request a presentation", sourceTitle: "Source and verification", checked: "Verified on", seeCalendar: "See full calendar",
  },
  es: {
    eyebrow: "Calendario de ferias 2027", h1: "Ferias de negocios en Brasil en 2027",
    lead: "Las principales ferias de negocios de Brasil, con fechas y sedes verificadas en los sitios oficiales y el perfil de quién expone y quién compra en cada sector.",
    verified: "Fechas verificadas en el sitio oficial", details: "Ver ficha de la feria",
    dates: "Fechas", venue: "Sede", organizer: "Organización", official: "Sitio oficial", about: "Sobre la feria",
    exhibitors: "Quién expone", buyers: "Quién compra y visita",
    marketTitle: "El mercado comprador en números",
    marketLead: "Cuántas empresas existen en los segmentos que compran a los expositores de esta feria.",
    segment: "Segmento (CNAE principal)", brazil: "Brasil", sp: "Estado de São Paulo",
    marketNote: "Establecimientos activos en el registro público de la Receita Federal de Brasil (edición {edition}) con el CNAE principal indicado, procesados por la plataforma DeepB2B. Es un recuento de empresas, no una estimación de compradores.",
    toConfirm: "Fechas a confirmar",
    filterSector: "Sector",
    filterMonth: "Mes",
    filterState: "Estado",
    all: "Todos",
    noResults: "Ninguna feria con estos filtros.",
    meiOf: "de los cuales {n} MEI",
    meiNote: "Incluye MEI (microemprendedor individual de Brasil), indicado en cada fila.",
    exhibitorsLine: "{c} expositores confirmados · {v} verificados en la Receita Federal · actualizado el {d}",
    titleTpl: "{name} 2027: fechas, sede, expositores y compradores",
    ctaTitle: "¿Va a exponer en {name}?", ctaText: "Mapeamos compradores, identificamos decisores y organizamos campañas y reuniones antes, durante y después de la feria.",
    ctaButton: "Solicitar presentación", sourceTitle: "Fuente y verificación", checked: "Verificado el", seeCalendar: "Ver calendario completo",
  },
  "zh-cn": {
    eyebrow: "2027 展会日历", h1: "2027 年巴西商务展会",
    lead: "巴西主要商务展会，日期和场馆均经官网核实，并提供各行业参展商与买家画像。",
    verified: "日期已经官网核实", details: "查看展会详情",
    dates: "日期", venue: "场馆", organizer: "主办方", official: "官方网站", about: "展会简介",
    exhibitors: "参展商", buyers: "买家与观众",
    marketTitle: "买方市场数据",
    marketLead: "向本展会参展商采购的行业中有多少家企业。",
    segment: "行业（主要 CNAE 代码）", brazil: "巴西", sp: "圣保罗州",
    marketNote: "巴西联邦税务局公开登记库（{edition} 版）中主要 CNAE 代码为所示代码的在营经营场所数量，由 DeepB2B 平台处理。这是企业数量，而非买家数量估计。",
    toConfirm: "日期待确认",
    filterSector: "行业",
    filterMonth: "月份",
    filterState: "州",
    all: "全部",
    noResults: "没有符合筛选条件的展会。",
    meiOf: "其中 {n} 家为 MEI",
    meiNote: "包含 MEI（巴西个体微型企业），每行单独标注。",
    exhibitorsLine: "{c} 家参展商已确认 · {v} 家经联邦税务局核实 · 更新于 {d}",
    titleTpl: "{name} 2027：日期、场馆、参展商与买家",
    ctaTitle: "将参加 {name}？", ctaText: "我们在展前、展中和展后为您绘制买家地图、识别决策人，并组织营销活动和会议。",
    ctaButton: "预约演示", sourceTitle: "来源与核实", checked: "核实日期", seeCalendar: "查看完整日历",
  },
};

const INTL: Record<Locale, string> = { "pt-br": "pt-BR", en: "en-US", es: "es", "zh-cn": "zh-CN" };

function formatRange(locale: Locale, start: string, end: string): string {
  const f = new Intl.DateTimeFormat(INTL[locale], { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
  // formatRange existe em todos os navegadores atuais e no Node; o lib ES2020 do TS só não declara
  return (f as Intl.DateTimeFormat & { formatRange(a: Date, b: Date): string }).formatRange(new Date(`${start}T00:00:00Z`), new Date(`${end}T00:00:00Z`));
}

const num = (locale: Locale, n: number) => new Intl.NumberFormat(INTL[locale]).format(n);
const fill = (s: string, vars: Record<string, string>) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");

function eventSchema(show: TradeShow, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${show.name} 2027`,
    startDate: show.start,
    endDate: show.end,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    description: show.copy[locale].summary,
    url: show.officialUrl,
    location: {
      "@type": "Place",
      name: show.venue,
      address: { "@type": "PostalAddress", streetAddress: show.address, addressLocality: show.city, addressRegion: show.uf, addressCountry: "BR" },
    },
    ...(show.organizer ? { organizer: { "@type": "Organization", name: show.organizer } } : {}),
  };
}

export const TradeShowCalendarPage: React.FC = () => {
  const { locale, dict, routeTo } = useLocale();
  const t = UI[locale];
  const all = [...TRADE_SHOWS].sort((a, b) => a.start.localeCompare(b.start));
  const [fs, setFs] = useState({ sector: "", month: "", uf: "" });
  const monthKey = (s: TradeShow) => s.start.slice(0, 7);
  const monthLabel = (k: string) => new Intl.DateTimeFormat(INTL[locale], { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${k}-15T00:00:00Z`));
  const opts = {
    sector: [...new Set(all.map((s) => s.copy[locale].sector))].sort(),
    month: [...new Set(all.map(monthKey))].sort(),
    uf: [...new Set(all.map((s) => s.uf))].sort(),
  };
  const shows = all.filter(
    (s) => (!fs.sector || s.copy[locale].sector === fs.sector) && (!fs.month || monthKey(s) === fs.month) && (!fs.uf || s.uf === fs.uf),
  );
  const select = "rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-[#0f172a] focus:border-[#ff6b00] focus:outline-none";

  return (
    <SiteLayout>
      <SeoHead
        title={dict.seo.calendar.title}
        description={dict.seo.calendar.description}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: t.h1,
            itemListElement: all.map((s, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE_ORIGIN}${getTradeShowPath(locale, s.slug)}`, name: `${s.name} 2027` })),
          },
          ...all.map((s) => eventSchema(s, locale)),
        ]}
      />
      <section className="bg-[#040f21] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-20">
          <Breadcrumbs dark items={[{ label: dict.nav.events, to: routeTo("events") }, { label: dict.nav.calendar }]} />
          <span className="mt-4 inline-block text-xs font-extrabold uppercase tracking-[0.2em] text-[#ff6b00]">{t.eyebrow}</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">{t.h1}</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">{t.lead}</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 mb-6 flex flex-wrap gap-3">
          {(["sector", "month", "uf"] as const).map((k) => (
            <label key={k} className="flex flex-col gap-1 text-xs font-bold text-slate-600">
              {k === "sector" ? t.filterSector : k === "month" ? t.filterMonth : t.filterState}
              <select className={select} value={fs[k]} onChange={(e) => setFs({ ...fs, [k]: e.target.value })}>
                <option value="">{t.all}</option>
                {opts[k].map((o) => (
                  <option key={o} value={o}>{k === "month" ? monthLabel(o) : o}</option>
                ))}
              </select>
            </label>
          ))}
        </div>
        {shows.length === 0 && <p className="mx-auto max-w-5xl px-4 sm:px-6 py-8 text-slate-500">{t.noResults}</p>}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 divide-y divide-slate-200 border-y border-slate-200">
          {shows.map((s) => (
            <Link key={s.slug} to={getTradeShowPath(locale, s.slug)} className="group grid grid-cols-1 md:grid-cols-[180px_1fr_auto] gap-4 py-8 items-center">
              <div className="text-sm font-bold text-[#ff6b00]">{s.checkedAt ? formatRange(locale, s.start, s.end) : t.toConfirm}</div>
              <div>
                <h2 className="text-2xl font-extrabold text-[#0f172a] group-hover:text-[#ff6b00] transition-colors">{s.name} 2027</h2>
                <p className="mt-1 text-sm text-slate-600">{s.copy[locale].sector}</p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {s.venue} · {s.city} – {s.uf}
                  <span className="mx-1">·</span>
                  {s.checkedAt ? (
                    <>
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" /> {t.verified}
                    </>
                  ) : (
                    t.toConfirm
                  )}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#040f21] group-hover:text-[#ff6b00]">
                {t.details} <ArrowRight className="h-4 w-4 text-[#ff6b00]" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
};

export const TradeShowPage: React.FC = () => {
  const { slug = "" } = useParams();
  const { locale, dict, routeTo } = useLocale();
  const show = getTradeShow(slug);
  if (!show) return <NotFound />;
  const t = UI[locale];
  const c = show.copy[locale];
  const contact = routeTo("contact");
  const longDate = (iso: string) => new Intl.DateTimeFormat(INTL[locale], { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${iso}T00:00:00Z`));
  const range = show.checkedAt ? formatRange(locale, show.start, show.end) : t.toConfirm;
  const checked = show.checkedAt ? longDate(show.checkedAt) : null;
  // só linhas com contagem gerada pela base (scripts/market-counts.mjs); sem dado, a linha (ou a tabela) não aparece
  const rows = show.market.flatMap((m) => {
    const n = marketCount(m.q);
    return n ? [{ m, n }] : [];
  });

  return (
    <SiteLayout>
      <SeoHead
        title={`${fill(t.titleTpl, { name: show.name })} | DeepB2B`}
        description={`${show.name} 2027 · ${range} · ${show.venue}, ${show.city}. ${c.summary}`.slice(0, 300)}
        jsonLd={[eventSchema(show, locale)]}
      />
      <section className="bg-[#040f21] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-20">
          <Breadcrumbs dark items={[{ label: dict.nav.calendar, to: routeTo("calendar") }, { label: show.name }]} />
          <span className="mt-4 inline-block text-xs font-extrabold uppercase tracking-[0.2em] text-[#ff6b00]">{c.sector}</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight">{show.name} 2027</h1>
          <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
            <div>
              <dt className="text-xs uppercase tracking-wider text-slate-400">{t.dates}</dt>
              <dd className="mt-1 flex items-center gap-2 font-bold"><CalendarDays className="h-4 w-4 text-[#ff6b00]" aria-hidden="true" />{range}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-slate-400">{t.venue}</dt>
              <dd className="mt-1 font-bold">{show.venue}</dd>
              <dd className="text-xs text-slate-400">{show.address}</dd>
            </div>
            {show.organizer && (
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-400">{t.organizer}</dt>
                <dd className="mt-1 font-bold">{show.organizer}</dd>
              </div>
            )}
          </dl>
          <a href={show.officialUrl} target="_blank" rel="noopener" className="mt-8 inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-[#ff6b00]">
            {t.official} <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold text-[#0f172a]">{t.about}</h2>
          <p className="mt-4 text-lg text-slate-700 leading-relaxed">{c.summary}</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-t-2 border-[#040f21] pt-5">
              <h3 className="text-lg font-extrabold text-[#0f172a]">{t.exhibitors}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.exhibitors}</p>
            </div>
            <div className="border-t-2 border-[#ff6b00] pt-5">
              <h3 className="text-lg font-extrabold text-[#0f172a]">{t.buyers}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.buyers}</p>
            </div>
          </div>
        </div>
      </section>

      {show.exhibitors && (
        <section className="py-6 bg-white border-t border-slate-200">
          <p className="mx-auto max-w-5xl px-4 sm:px-6 text-sm font-semibold text-[#0f172a]">
            {fill(t.exhibitorsLine, {
              c: num(locale, show.exhibitors.confirmed),
              v: num(locale, show.exhibitors.verified),
              d: longDate(show.exhibitors.updatedAt),
            })}
          </p>
        </section>
      )}

      {rows.length > 0 && (
      <section className="py-16 bg-[#f8fafc] border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold text-[#0f172a]">{t.marketTitle}</h2>
          <p className="mt-2 text-slate-600">{t.marketLead}</p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-left text-xs uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-5 py-3">{t.segment}</th>
                  <th className="px-5 py-3 text-right">{t.brazil}</th>
                  <th className="px-5 py-3 text-right">{t.sp}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map(({ m, n }) => (
                  <tr key={m.cnae}>
                    <td className="px-5 py-3">
                      <span className="font-semibold text-[#0f172a]">{m.label[locale]}</span>
                      <span className="ml-2 font-mono text-xs text-slate-400">{m.cnae}</span>
                    </td>
                    <td className="px-5 py-3 text-right">
                      <span className="block font-mono">{num(locale, n.br)}</span>
                      <span className="block text-[11px] text-slate-400">{fill(t.meiOf, { n: num(locale, n.brMei) })}</span>
                    </td>
                    <td className="px-5 py-3 text-right">
                      <span className="block font-mono">{num(locale, n.sp)}</span>
                      <span className="block text-[11px] text-slate-400">{fill(t.meiOf, { n: num(locale, n.spMei) })}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">{t.meiNote}</p>
          <p className="mt-1 text-xs text-slate-500">{fill(t.marketNote, { edition: new Intl.DateTimeFormat(INTL[locale], { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${MARKET_DATA_EDITION}-15T00:00:00Z`)) })}</p>
        </div>
      </section>
      )}

      {/* Os dois lados da feira: quem expõe | quem compra */}
      <section className="py-16 bg-[#040f21]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="text-white">
          <h2 className="text-3xl font-extrabold tracking-tight">{fill(t.ctaTitle, { name: show.name })}</h2>
          <p className="mt-4 text-slate-300">{t.ctaText}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to={contact}
              onClick={() => trackCtaClick(`tradeshow_${show.slug}`, locale, contact)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6b00] px-8 py-4 text-sm font-bold text-white hover:bg-[#ea580c]"
            >
              {t.ctaButton} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to={routeTo("events")} className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-bold hover:bg-white/10">
              {dict.nav.events}
            </Link>
          </div>
          </div>
          <div className="rounded-2xl bg-white p-6 sm:p-8">
            <BuyerDemandForm showSlug={show.slug} showName={show.name} />
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-xs text-slate-500 flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-3">
          <p>
            <strong className="text-slate-700">{t.sourceTitle}:</strong>{" "}
            <a href={show.sourceUrl} target="_blank" rel="noopener" className="underline hover:text-[#ff6b00]">{show.sourceUrl.replace(/^https?:\/\//, "")}</a>
            {checked ? <> · {t.checked} {checked}</> : <> · {t.toConfirm}</>}
          </p>
          <Link to={routeTo("calendar")} className="font-bold text-[#040f21] hover:text-[#ff6b00]">{t.seeCalendar} →</Link>
          <div className="w-full">
            <OrganizerContact showSlug={show.slug} />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};
