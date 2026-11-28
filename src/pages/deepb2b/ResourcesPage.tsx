import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import { useEditorial } from "@/context/EditorialContext";
import { SITE_ORIGIN } from "@/i18n/routes";
import { SeoHead } from "@/components/seo/SeoHead";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const ResourcesPage: React.FC = () => {
  const { locale, dict, routeTo, articleTo, formatDate } = useLocale();
  const { articlesForLocale, loading } = useEditorial();
  const list = articlesForLocale(locale);

  return (
    <SiteLayout>
      <SeoHead
        title={dict.seo.resources.title}
        description={dict.seo.resources.description}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "DeepB2B", item: `${SITE_ORIGIN}${routeTo("home")}` },
              { "@type": "ListItem", position: 2, name: dict.nav.resources, item: `${SITE_ORIGIN}${routeTo("resources")}` },
            ],
          },
        ]}
      />

      <section className="bg-[#040f21] text-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Breadcrumbs dark items={[{ label: "DeepB2B", to: routeTo("home") }, { label: dict.nav.resources }]} />
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#ff6b00] mb-3">
            {dict.resources.eyebrow}
          </span>
          <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {dict.resources.h1}
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-slate-300">{dict.resources.lead}</p>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-8">
          {loading && list.length === 0 && (
            <div className="py-12 text-center text-sm text-slate-500">Carregando conteúdos…</div>
          )}
          {list.filter(({ article }) => article.featuredReport).map(({ article, content }) => {
            return (
              <Link
                key={article.slug}
                to={articleTo(article.slug)}
                className="group block rounded-3xl border-2 border-[#ff6b00] bg-[#040f21] p-8 md:p-10 text-white shadow-xl hover:bg-[#07152e] transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs mb-4">
                  <span className="rounded-full bg-[#ff6b00] px-3.5 py-1 font-black uppercase tracking-wider text-white">
                    {content.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-slate-300">
                    <BookOpen className="h-3.5 w-3.5 text-[#ff6b00]" aria-hidden="true" />
                    {content.readingMinutes} {dict.resources.readingTimeLabel} ·{" "}
                    {formatDate(article.updatedAt)}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-[#ff6b00] transition-colors mb-3">
                  {content.title}
                </h2>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-4xl mb-5">
                  {content.summary}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#ff6b00]">
                  <span>{dict.resources.readGuide}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            );
          })}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {list.filter(({ article }) => !article.featuredReport).map(({ article, content }) => {
              return (
                <Link
                  key={article.slug}
                  to={articleTo(article.slug)}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:border-[#ff6b00] transition-all flex flex-col justify-between gap-6"
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                      <span className="rounded-full bg-[#fff7ed] border border-orange-200 px-3 py-1 font-bold text-[#c2410c]">
                        {content.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                        {content.readingMinutes} {dict.resources.readingTimeLabel} ·{" "}
                        {formatDate(article.updatedAt)}
                      </span>
                    </div>
                    <h2 className="text-2xl font-extrabold text-[#0f172a] group-hover:text-[#ff6b00] transition-colors">
                      {content.title}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">{content.summary}</p>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#040f21]">
                    <span>{dict.resources.readGuide}</span>
                    <ArrowRight className="h-4 w-4 text-[#ff6b00]" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ResourcesPage;
