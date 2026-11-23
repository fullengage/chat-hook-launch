import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Globe, KeyRound, Sparkles } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import { SITE_ORIGIN } from "@/i18n/routes";
import { trackCtaClick } from "@/services/analytics";
import { SeoHead } from "@/components/seo/SeoHead";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const LoginAccessPage: React.FC = () => {
  const { locale, dict, routeTo } = useLocale();

  return (
    <SiteLayout>
      <SeoHead
        title={dict.seo.login.title}
        description={dict.seo.login.description}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "DeepB2B", item: `${SITE_ORIGIN}${routeTo("home")}` },
              { "@type": "ListItem", position: 2, name: dict.nav.login, item: `${SITE_ORIGIN}${routeTo("login")}` },
            ],
          },
        ]}
      />

      <section className="bg-[#040f21] text-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <Breadcrumbs dark items={[{ label: "DeepB2B", to: routeTo("home") }, { label: dict.nav.login }]} />
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#ff6b00] mb-3">
            {dict.login.eyebrow}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {dict.login.h1}
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-slate-300">{dict.login.lead}</p>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Existing Platform Account */}
          <div className="rounded-3xl border-2 border-[#040f21] bg-[#040f21] p-7 text-white flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ff6b00]/20 text-[#ff6b00]">
                <KeyRound className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-extrabold">{dict.login.existingTitle}</h2>
              <p className="text-sm text-slate-300 leading-relaxed">{dict.login.existingDescription}</p>
              <p className="text-xs text-amber-300">{dict.login.existingNotice}</p>
            </div>
            <a
              href="https://app.deepson.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCtaClick("login_app_deepson", locale, "https://app.deepson.com.br/")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff6b00] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#ea580c]"
            >
              <span>{dict.login.existingCta}</span>
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Brazil CNPJ Free Trial */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 flex flex-col justify-between gap-6 shadow-sm">
            <div className="space-y-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff7ed] text-[#ff6b00]">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-extrabold text-[#0f172a]">{dict.login.trialTitle}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{dict.login.trialDescription}</p>
            </div>
            <Link
              to="/teste-gratis"
              onClick={() => trackCtaClick("login_brazil_trial", locale, "/teste-gratis")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#040f21] px-5 py-3 text-sm font-bold text-[#040f21] hover:bg-[#040f21] hover:text-white transition-colors"
            >
              <span>{dict.login.trialCta}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* International Demo Onboarding */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 flex flex-col justify-between gap-6 shadow-sm">
            <div className="space-y-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                <Globe className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-extrabold text-[#0f172a]">{dict.login.intlTitle}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{dict.login.intlDescription}</p>
            </div>
            <Link
              to={routeTo("contact")}
              onClick={() => trackCtaClick("login_intl_demo", locale, routeTo("contact"))}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#040f21] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#07152e]"
            >
              <span>{dict.login.intlCta}</span>
              <ArrowRight className="h-4 w-4 text-[#ff6b00]" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default LoginAccessPage;
