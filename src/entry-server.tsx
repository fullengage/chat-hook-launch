import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SeoCollectorProvider, type SeoCollector, type SeoMetadata } from "@/components/seo/SeoContext";
import { getAllIndexableRoutes, getAlternateLinks } from "@/i18n/routes";
import AppRoutes from "./AppRoutes";

export interface PrerenderResult {
  html: string;
  seo: SeoMetadata | undefined;
}

export function renderRoute(url: string): PrerenderResult {
  const queryClient = new QueryClient();
  const collector: SeoCollector = {};

  const html = renderToString(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SeoCollectorProvider collector={collector}>
          <StaticRouter location={url}>
            <AppRoutes />
          </StaticRouter>
        </SeoCollectorProvider>
      </TooltipProvider>
    </QueryClientProvider>,
  );

  return {
    html,
    seo: collector.metadata,
  };
}

export { getAllIndexableRoutes, getAlternateLinks };
