import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  dark?: boolean;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, dark = false }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol
        className={`flex flex-wrap items-center gap-1.5 text-xs font-medium ${
          dark ? "text-slate-300" : "text-slate-500"
        }`}
      >
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${item.label}-${idx}`} className="inline-flex items-center gap-1.5">
              {idx > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />}
              {item.to && !isLast ? (
                <Link
                  to={item.to}
                  className={`inline-flex items-center gap-1 transition-colors hover:text-[#ff6b00] ${
                    dark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {idx === 0 && <Home className="h-3.5 w-3.5" aria-hidden="true" />}
                  <span>{item.label}</span>
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={dark ? "font-semibold text-white" : "font-semibold text-[#0f172a]"}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
