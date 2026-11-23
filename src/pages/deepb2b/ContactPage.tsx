import React from "react";
import { Building2, Globe2, MessageSquare, ShieldCheck } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import { SITE_ORIGIN } from "@/i18n/routes";
import { SeoHead } from "@/components/seo/SeoHead";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { DemoRequestForm } from "@/components/forms/DemoRequestForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CHANNEL_ICONS = [Globe2, Building2, MessageSquare, ShieldCheck] as const;

export const ContactPage: React.FC = () => {
  const { dict, routeTo } = useLocale();

  const faqSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.contact.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <SiteLayout>
      <SeoHead
        title={dict.seo.contact.title}
        description={dict.seo.contact.description}
        jsonLd={[
          faqSchema,
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "DeepB2B", item: `${SITE_ORIGIN}${routeTo("home")}` },
              { "@type": "ListItem", position: 2, name: dict.nav.contact, item: `${SITE_ORIGIN}${routeTo("contact")}` },
            ],
          },
        ]}
      />

      <section className="bg-[#040f21] text-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Breadcrumbs dark items={[{ label: "DeepB2B", to: routeTo("home") }, { label: dict.nav.contact }]} />
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#ff6b00] mb-3">
            {dict.contact.eyebrow}
          </span>
          <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {dict.contact.h1}
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-slate-300">{dict.contact.lead}</p>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {dict.contact.channels.map((ch, idx) => {
              const Icon = CHANNEL_ICONS[idx % CHANNEL_ICONS.length];
              return (
                <div
                  key={ch.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 space-y-2.5 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff7ed] text-[#ff6b00]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h2 className="font-extrabold text-sm text-[#0f172a]">{ch.title}</h2>
                  <p className="text-xs text-slate-600 leading-relaxed">{ch.description}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold text-[#0f172a] mb-1">
                {dict.contact.formTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                {dict.contact.formSubtitle}
              </p>
              <DemoRequestForm />
            </div>

            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-2xl font-extrabold text-[#0f172a] mb-2">
                {dict.contact.faqTitle}
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {dict.contact.faqs.map((faq, idx) => (
                  <AccordionItem
                    key={faq.question}
                    value={`faq-${idx}`}
                    className="rounded-2xl border border-slate-200 bg-white px-5"
                  >
                    <AccordionTrigger className="text-left text-sm font-bold text-[#0f172a] hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ContactPage;
