import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { LocaleProvider } from "@/i18n/LocaleContext";
import { ROUTES_BY_LOCALE, SUPPORTED_LOCALES } from "@/i18n/routes";
import HomePage from "@/pages/deepb2b/HomePage";
import CapabilityPage from "@/pages/deepb2b/CapabilityPage";
import SolutionsPage from "@/pages/deepb2b/SolutionsPage";
import PricingPage from "@/pages/deepb2b/PricingPage";
import ResourcesPage from "@/pages/deepb2b/ResourcesPage";
import ArticlePage from "@/pages/deepb2b/ArticlePage";
import AboutPage from "@/pages/deepb2b/AboutPage";
import ContactPage from "@/pages/deepb2b/ContactPage";
import LoginAccessPage from "@/pages/deepb2b/LoginAccessPage";
import LegalPage from "@/pages/deepb2b/LegalPage";
import CookieConsent from "@/components/CookieConsent";
import NotFound from "@/pages/NotFound";

// Legacy operational routes preserved for production continuity
const FreeTrialPage = lazy(() => import("@/pages/FreeTrialPage"));
const Obrigado = lazy(() => import("@/pages/Obrigado"));
const Auth = lazy(() => import("@/pages/Auth"));
const BlogDashboard = lazy(() => import("@/pages/BlogDashboard"));
const WebhookSettings = lazy(() => import("@/pages/WebhookSettings"));
const LowTicketLP = lazy(() => import("@/pages/LowTicketLP"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#040f21] text-white">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ff6b00]" />
  </div>
);

export const AppRoutes: React.FC = () => {
  return (
    <LocaleProvider>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Root serves International English with canonical -> /en */}
          <Route path="/" element={<HomePage />} />

          {/* Multilingual Routes (EN, PT-BR, ZH-CN) */}
          {SUPPORTED_LOCALES.map((locale) => {
            const paths = ROUTES_BY_LOCALE[locale];
            return (
              <React.Fragment key={locale}>
                <Route path={paths.home} element={<HomePage />} />
                <Route path={paths.businessData} element={<CapabilityPage capability="businessData" />} />
                <Route path={paths.marketIntelligence} element={<CapabilityPage capability="marketIntelligence" />} />
                <Route path={paths.leadGeneration} element={<CapabilityPage capability="leadGeneration" />} />
                <Route path={paths.industryMapping} element={<CapabilityPage capability="industryMapping" />} />
                <Route path={paths.brazilMarketEntry} element={<CapabilityPage capability="brazilMarketEntry" />} />
                <Route path={paths.solutions} element={<SolutionsPage />} />
                <Route path={paths.pricing} element={<PricingPage />} />
                <Route path={paths.resources} element={<ResourcesPage />} />
                <Route path={`${paths.resources}/:slug`} element={<ArticlePage />} />
                <Route path={paths.about} element={<AboutPage />} />
                <Route path={paths.contact} element={<ContactPage />} />
                <Route path={paths.login} element={<LoginAccessPage />} />
                <Route path={paths.privacy} element={<LegalPage kind="privacy" />} />
                <Route path={paths.terms} element={<LegalPage kind="terms" />} />
                <Route path={paths.lgpd} element={<LegalPage kind="lgpd" />} />
                <Route path={paths.dataDeletion} element={<LegalPage kind="dataDeletion" />} />
              </React.Fragment>
            );
          })}

          {/* Preserved Brazilian Conversion & Legacy Operational Routes */}
          <Route path="/teste-gratis" element={<FreeTrialPage />} />
          <Route path="/obrigado" element={<Obrigado />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/blog/dashboard" element={<BlogDashboard />} />
          <Route path="/webhooks/new" element={<WebhookSettings />} />
          <Route path="/oferta-especial" element={<LowTicketLP />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/privacidade" element={<LegalPage kind="privacy" />} />
          <Route path="/termos-de-uso" element={<LegalPage kind="terms" />} />
          <Route path="/lgpd" element={<LegalPage kind="lgpd" />} />
          <Route path="/exclusao-de-dados" element={<LegalPage kind="dataDeletion" />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </Suspense>
    </LocaleProvider>
  );
};

export default AppRoutes;
