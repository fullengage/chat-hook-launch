import React from "react";
import { useLocale } from "@/i18n/LocaleContext";
import { Badge } from "@/components/ui/badge";

export type ProvenanceType = "official" | "external" | "ai" | "ondemand";

const PROVENANCE_STYLES: Record<ProvenanceType, string> = {
  official: "bg-emerald-50 text-emerald-800 border-emerald-200",
  external: "bg-sky-50 text-sky-800 border-sky-200",
  ai: "bg-amber-50 text-amber-800 border-amber-200",
  ondemand: "bg-slate-100 text-slate-700 border-slate-300",
};

export const ProvenanceBadge: React.FC<{ type: ProvenanceType; className?: string }> = ({
  type,
  className = "",
}) => {
  const { dict } = useLocale();
  const label = dict.discovery.provenanceLabels[type];

  return (
    <Badge
      variant="outline"
      className={`text-[11px] font-bold whitespace-nowrap ${PROVENANCE_STYLES[type]} ${className}`}
    >
      {label}
    </Badge>
  );
};

export default ProvenanceBadge;
