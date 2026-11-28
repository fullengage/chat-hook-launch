import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, CalendarDays, ExternalLink } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import { useEditorial } from "@/context/EditorialContext";
import { fetchSingleArticle, type EditorialArticle } from "@/services/editorialData";
import { SITE_ORIGIN, getTradeShowPath } from "@/i18n/routes";
import { SeoHead } from "@/components/seo/SeoHead";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import NotFound from "@/pages/NotFound";

export const ArticlePage: React.FC = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const { locale, dict, routeTo, articleTo, formatDate } = useLocale();
  const { findArticle, findShow, loading } = useEditorial();

  const cached = findArticle(slug);
  const [remote, setRemote] = useState<EditorialArticle | null>(null);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setRemote(null);
    if (cached || !slug) return;
    let active = true;
    setFetching(true);
    fetchSingleArticle(slug, locale)
      .then((res) => {
        if (active) setRemote(res);
      })
      .catch(() => {})
      .finally(() => {
        if (active) setFetching(false);
      });
    return () => {
      active = false;
    };
  }, [slug, locale, cached]);

  const article = cached ?? remote;
  const content = article?.localized[locale];

  if (!article || !content) {
    if (loading || fetching) {
      return (
        <SiteLayout>
          <div className="flex items-center justify-center min-h-[60vh] bg-white text-slate-600 text-sm">
            Carregando matéria…
          </div>
        </SiteLayout>
      );
    }
    return <NotFound />;
  }

  const canonicalUrl = `${SITE_ORIGIN}${articleTo(article.slug)}`;
  const linkedShow = article.feiraSlug ? findShow(article.feiraSlug) : undefined;
  const schemaType = article.editoria === "feiras" ? "NewsArticle" : "Article";

  const articleSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": schemaType,
    headline: content.title,
    description: content.metaDescription,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    inLanguage: dict.htmlLang,
    mainEntityOfPage: canonicalUrl,
    ...(content.imageUrl ? { image: [content.imageUrl] } : {}),
    author: {
      "@type": "Organization",
      name: content.author || "DeepB2B",
    },
    publisher: {
      "@type": "Organization",
      name: "DeepB2B",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_ORIGIN}/logo-deepb2b.png`,
      },
    },
  };

  if (linkedShow) {
    articleSchema.about = {
      "@type": "Event",
      name: `${linkedShow.name} ${linkedShow.editionYear}`,
      startDate: linkedShow.start,
      endDate: linkedShow.end,
      url: `${SITE_ORIGIN}${getTradeShowPath(locale, linkedShow.slug)}`,
    };
  }

  const schemas: Record<string, unknown>[] = [
    articleSchema,
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "DeepB2B", item: `${SITE_ORIGIN}${routeTo("home")}` },
        { "@type": "ListItem", position: 2, name: dict.nav.resources, item: `${SITE_ORIGIN}${routeTo("resources")}` },
        { "@type": "ListItem", position: 3, name: content.title, item: canonicalUrl },
      ],
    },
  ];

  return (
    <SiteLayout>
      <SeoHead
        title={content.metaTitle}
        description={content.metaDescription}
        ogType="article"
        ogImage={content.imageUrl || undefined}
        jsonLd={schemas}
      />

      <section className="bg-[#040f21] text-white py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Breadcrumbs
            dark
            items={[
              { label: "DeepB2B", to: routeTo("home") },
              { label: dict.nav.resources, to: routeTo("resources") },
              { label: content.title },
            ]}
          />

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 mb-4">
            <span className="rounded-full bg-[#ff6b00]/20 border border-[#ff6b00]/40 px-3 py-1 font-bold text-[#ff6b00]">
              {content.category}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
              {content.readingMinutes} {dict.resources.readingTimeLabel}
            </span>
            <span>· {formatDate(article.updatedAt)}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            {content.title}
          </h1>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">{content.summary}</p>

          {linkedShow && (
            <Link
              to={getTradeShowPath(locale, linkedShow.slug)}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-bold text-white hover:border-[#ff6b00] hover:text-[#ff6b00] transition-colors"
            >
              <CalendarDays className="h-3.5 w-3.5 text-[#ff6b00]" aria-hidden="true" />
              <span>{linkedShow.name} {linkedShow.editionYear}</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          )}
        </div>
      </section>

      <article className="py-14 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 space-y-10">
          {content.imageUrl && (
            <figure className="overflow-hidden rounded-2xl border border-slate-200">
              <img
                src={content.imageUrl}
                alt={content.imageAlt || content.title}
                className="w-full max-h-[460px] object-cover"
              />
            </figure>
          )}

          {content.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="text-2xl font-extrabold text-[#0f172a]">{section.heading}</h2>
              {section.paragraphs.map((p, idx) => (
                <p key={idx} className="text-base text-slate-700 leading-relaxed">
                  {p}
                </p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-slate-700">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Official Sources */}
          {content.sources.length > 0 && (
            <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 space-y-3">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#040f21] flex items-center gap-2">
                <ExternalLink className="h-4 w-4 text-[#ff6b00]" aria-hidden="true" />
                {dict.resources.sourcesTitle}
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                {content.sources.map((src) => (
                  <li key={src}>• {src}</li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div className="rounded-3xl bg-[#040f21] p-8 text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-extrabold mb-1">{dict.resources.articleCtaTitle}</h3>
              <p className="text-sm text-slate-300">{dict.resources.articleCtaSubtitle}</p>
            </div>
            <Link
              to={routeTo("contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff6b00] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#ea580c] shrink-0"
            >
              <span>{dict.nav.primaryCta}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div>
            <Link
              to={routeTo("resources")}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0f172a] hover:text-[#ff6b00]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>{dict.resources.backToResources}</span>
            </Link>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
};

export default ArticlePage;
