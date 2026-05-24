import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { lazy, Suspense } from "react";

// Lazy-loaded pages
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BlogDashboard = lazy(() => import("./pages/BlogDashboard"));
const Auth = lazy(() => import("./pages/Auth"));
const FreeTrialPage = lazy(() => import("./pages/FreeTrialPage"));
const LowTicketLP = lazy(() => import("./pages/LowTicketLP"));
const WebhookSettings = lazy(() => import("./pages/WebhookSettings"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));
const Obrigado = lazy(() => import("./pages/Obrigado"));
const LgpdCompliance = lazy(() => import("./pages/LgpdCompliance"));
import CookieConsent from "./components/CookieConsent";

const queryClient = new QueryClient();

// Loading component for Suspense fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/blog/dashboard" element={<BlogDashboard />} />
              <Route path="/webhooks/new" element={<WebhookSettings />} />
              <Route path="/teste-gratis" element={<FreeTrialPage />} />
              <Route path="/oferta-especial" element={<LowTicketLP />} />
              <Route path="/privacidade" element={<PrivacyPolicy />} />
              <Route path="/termos-de-uso" element={<TermsOfUse />} />
              <Route path="/lgpd" element={<LgpdCompliance />} />
              <Route path="/obrigado" element={<Obrigado />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <CookieConsent />
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
