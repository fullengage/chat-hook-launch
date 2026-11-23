import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Loader2, Shield } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import { submitDataDeletionRequest } from "@/services/leadService";
import { SeoHead } from "@/components/seo/SeoHead";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export type LegalPageKind = "privacy" | "terms" | "lgpd" | "dataDeletion";

export const LegalPage: React.FC<{ kind: LegalPageKind }> = ({ kind }) => {
  const { locale, dict, routeTo } = useLocale();
  const location = useLocation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [details, setDetails] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const seo = dict.seo[kind];

  const handleDeletionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !details.trim()) return;
    setSubmitting(true);
    setErrorMsg("");

    const result = await submitDataDeletionRequest({
      name,
      email,
      phone,
      company,
      details,
      locale,
      page: location.pathname,
    });

    setSubmitting(false);
    if (result.ok) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setDetails("");
    } else {
      setErrorMsg(result.errorMessage ?? dict.form.errorMessage);
    }
  };

  const titleByKind: Record<LegalPageKind, string> = {
    privacy: dict.legal.privacyTitle,
    terms: dict.legal.termsTitle,
    lgpd: dict.legal.lgpdTitle,
    dataDeletion: dict.legal.deletionTitle,
  };

  const sectionsByKind: Record<
    Exclude<LegalPageKind, "dataDeletion">,
    { heading: string; body: string[] }[]
  > = {
    privacy: dict.legal.privacySections,
    terms: dict.legal.termsSections,
    lgpd: dict.legal.lgpdSections,
  };

  return (
    <SiteLayout>
      <SeoHead title={seo.title} description={seo.description} />

      <section className="bg-[#040f21] text-white py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Breadcrumbs
            dark
            items={[
              { label: "DeepB2B", to: routeTo("home") },
              { label: titleByKind[kind] },
            ]}
          />
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            {titleByKind[kind]}
          </h1>
          {kind === "lgpd" && (
            <p className="text-sm md:text-base text-slate-300">{dict.legal.lgpdLead}</p>
          )}
          {kind === "dataDeletion" && (
            <p className="text-sm md:text-base text-slate-300">{dict.legal.deletionLead}</p>
          )}
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 space-y-8">
          {kind !== "dataDeletion" ? (
            sectionsByKind[kind].map((sec) => (
              <div key={sec.heading} className="space-y-3">
                <h2 className="text-xl font-extrabold text-[#0f172a]">{sec.heading}</h2>
                {sec.body.map((p, i) => (
                  <p key={i} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ))
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                {dict.legal.deletionTypes.map((t) => (
                  <div
                    key={t.title}
                    className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 space-y-1.5"
                  >
                    <h2 className="font-extrabold text-sm text-[#0f172a] flex items-center gap-2">
                      <Shield className="h-4 w-4 text-[#ff6b00]" aria-hidden="true" />
                      {t.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600">{t.description}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-6">
                <h2 className="text-lg font-extrabold text-[#0f172a] mb-4">
                  {dict.legal.deletionFormTitle}
                </h2>
                {submitted ? (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-900 flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-700 mt-0.5" />
                    <p>{dict.legal.deletionSuccess}</p>
                  </div>
                ) : (
                  <form onSubmit={handleDeletionSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="del-name" className="text-xs font-bold">
                        {dict.form.nameLabel}
                      </Label>
                      <Input
                        id="del-name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-white"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="del-email" className="text-xs font-bold">
                        {dict.form.emailLabel}
                      </Label>
                      <Input
                        id="del-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <Label htmlFor="del-phone" className="text-xs font-bold">
                          {dict.form.phoneLabel}
                        </Label>
                        <Input
                          id="del-phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="bg-white"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="del-company" className="text-xs font-bold">
                          {dict.form.companyLabel}
                        </Label>
                        <Input
                          id="del-company"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="bg-white"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="del-details" className="text-xs font-bold">
                        {dict.form.messageLabel}
                      </Label>
                      <Textarea
                        id="del-details"
                        required
                        rows={3}
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        className="bg-white"
                      />
                    </div>
                    {errorMsg && (
                      <p className="text-xs text-red-700 bg-red-50 border border-red-200 rounded-lg p-2.5">
                        {errorMsg}
                      </p>
                    )}
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-xl bg-[#ff6b00] hover:bg-[#ea580c] text-white font-bold"
                    >
                      {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      {dict.legal.deletionSubmit}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-slate-200">
            <Link
              to={routeTo("home")}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0f172a] hover:text-[#ff6b00]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>{dict.legal.backLabel}</span>
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default LegalPage;
