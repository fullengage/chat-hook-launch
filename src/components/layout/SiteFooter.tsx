import React from "react";
import { Link } from "react-router-dom";
import { Mail, ExternalLink } from "lucide-react";
import { useLocale } from "@/i18n/LocaleContext";
import { resolveAlternatePath, SUPPORTED_LOCALES } from "@/i18n/routes";
import { DeepB2BLogo } from "@/components/brand/DeepB2BLogo";

const LOCALE_NAMES = {
  en: "English (Global)",
  "pt-br": "Português (Brasil)",
  es: "Español (LATAM)",
  "zh-cn": "简体中文 (China)",
} as const;

export const SiteFooter: React.FC = () => {
  const { locale, dict, routeTo } = useLocale();
  const currentYear = new Date().getFullYear();

  const contactEmail = locale === "pt-br" ? "contato@deepb2b.ai" : "contact@deepb2b.ai";

  return (
    <footer className="border-t border-white/10 bg-[#040f21] text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to={routeTo("home")} className="inline-block">
              <DeepB2BLogo variant="dark" showSubtitle subtitleText={dict.brand.subtitle} />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-slate-300">
              {dict.footer.description}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Mail className="h-4 w-4 text-[#ff6b00]" aria-hidden="true" />
              <a
                href={`mailto:${contactEmail}`}
                className="hover:text-[#ff6b00] transition-colors"
              >
                {contactEmail}
              </a>
            </div>
          </div>

          {/* Intelligence */}
          <div>
            <h3 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-white">
              {dict.footer.platformGroup}
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to={routeTo("platform")} className="hover:text-[#ff6b00] transition-colors">
                  {dict.nav.platform}
                </Link>
              </li>
              <li>
                <Link to={routeTo("businessData")} className="hover:text-[#ff6b00] transition-colors">
                  {dict.nav.businessData}
                </Link>
              </li>
              <li>
                <Link to={routeTo("marketIntelligence")} className="hover:text-[#ff6b00] transition-colors">
                  {dict.nav.marketIntelligence}
                </Link>
              </li>
              <li>
                <Link to={routeTo("leadGeneration")} className="hover:text-[#ff6b00] transition-colors">
                  {dict.nav.leadGeneration}
                </Link>
              </li>
              <li>
                <Link to={routeTo("industryMapping")} className="hover:text-[#ff6b00] transition-colors">
                  {dict.nav.industryMapping}
                </Link>
              </li>
              <li>
                <Link to={routeTo("brazilMarketEntry")} className="hover:text-[#ff6b00] transition-colors">
                  {dict.nav.brazilMarketEntry}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Company */}
          <div>
            <h3 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-white">
              {dict.footer.resourcesGroup}
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to={routeTo("ecosystem")} className="hover:text-[#ff6b00] transition-colors">
                  {dict.nav.ecosystem}
                </Link>
              </li>
              <li>
                <Link to={routeTo("deepclub")} className="hover:text-[#ff6b00] transition-colors">
                  {dict.nav.deepclub}
                </Link>
              </li>
              <li>
                <Link to={routeTo("projects")} className="hover:text-[#ff6b00] transition-colors">
                  {dict.nav.projects}
                </Link>
              </li>
              <li>
                <Link to={routeTo("events")} className="hover:text-[#ff6b00] transition-colors">
                  {dict.nav.events}
                </Link>
              </li>
              <li>
                <Link to={routeTo("partners")} className="hover:text-[#ff6b00] transition-colors">
                  {dict.nav.partners}
                </Link>
              </li>
              <li>
                <Link to={routeTo("solutions")} className="hover:text-[#ff6b00] transition-colors">
                  {dict.nav.solutions}
                </Link>
              </li>
              <li>
                <Link to={routeTo("resources")} className="hover:text-[#ff6b00] transition-colors">
                  {dict.nav.resources}
                </Link>
              </li>
              <li>
                <Link to={routeTo("about")} className="hover:text-[#ff6b00] transition-colors">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link to={routeTo("contact")} className="hover:text-[#ff6b00] transition-colors">
                  {dict.nav.contact}
                </Link>
              </li>
              <li>
                <a
                  href="https://app.deepb2b.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#ff6b00] transition-colors"
                >
                  <span>app.deepb2b.ai</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Languages */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-xs font-extrabold uppercase tracking-wider text-white">
                {dict.footer.legalGroup}
              </h3>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link to={routeTo("privacy")} className="hover:text-[#ff6b00] transition-colors">
                    {dict.legal.privacyTitle}
                  </Link>
                </li>
                <li>
                  <Link to={routeTo("terms")} className="hover:text-[#ff6b00] transition-colors">
                    {dict.legal.termsTitle}
                  </Link>
                </li>
                <li>
                  <Link to={routeTo("lgpd")} className="hover:text-[#ff6b00] transition-colors">
                    {dict.legal.lgpdTitle}
                  </Link>
                </li>
                <li>
                  <Link to={routeTo("dataDeletion")} className="hover:text-[#ff6b00] transition-colors">
                    {dict.legal.deletionTitle}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2.5 text-xs font-extrabold uppercase tracking-wider text-white">
                {dict.footer.languagesGroup}
              </h3>
              <ul className="space-y-1.5 text-xs">
                {SUPPORTED_LOCALES.map((loc) => (
                  <li key={loc}>
                    <Link
                      to={resolveAlternatePath("/", loc)}
                      className="hover:text-[#ff6b00] transition-colors"
                    >
                      {LOCALE_NAMES[loc]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Governance Bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-xs text-slate-400 space-y-2">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
            <p className="font-medium text-slate-300">{dict.brand.legacyEntityNotice}</p>
            <p>© {currentYear} {dict.footer.copyright}</p>
          </div>
          <p className="text-[11px] text-slate-400">{dict.footer.dataSourcesNote}</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
