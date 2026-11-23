import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";
import { Button } from "./ui/button";
import { useLocale } from "@/i18n/LocaleContext";
import {
  getConsentStatus,
  loadConsentedTrackingScripts,
  setAnalyticsConsent,
} from "@/services/analytics";

const CookieConsent = () => {
  const { dict, routeTo } = useLocale();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const status = getConsentStatus();
    if (status === "accepted") {
      loadConsentedTrackingScripts();
      return;
    }
    if (status === "unset") {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setAnalyticsConsent("accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    setAnalyticsConsent("declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 animate-in slide-in-from-bottom-8 duration-500">
      <div className="bg-white/95 backdrop-blur-xl border border-slate-200 text-[#0f172a] rounded-2xl p-5 shadow-2xl relative flex flex-col gap-4">
        <button
          type="button"
          onClick={handleDecline}
          className="absolute top-3.5 right-3.5 text-slate-400 hover:text-slate-700 transition-colors"
          aria-label={dict.localeNotice.dismissLabel}
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex gap-3.5 items-start pr-4">
          <div className="p-2.5 bg-[#fff7ed] rounded-xl text-[#ff6b00] shrink-0">
            <Cookie className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-sm text-[#0f172a]">{dict.cookies.title}</h4>
            <p className="text-xs text-slate-600 leading-relaxed">{dict.cookies.description}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 justify-end">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleDecline}
            className="text-xs text-slate-600 hover:text-[#0f172a]"
          >
            {dict.cookies.decline}
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="text-xs border-slate-300 text-slate-700"
            asChild
          >
            <Link to={routeTo("privacy")}>{dict.cookies.preferences}</Link>
          </Button>
          <Button
            type="button"
            size="sm"
            onClick={handleAccept}
            className="text-xs bg-[#ff6b00] hover:bg-[#ea580c] text-white font-bold"
          >
            {dict.cookies.accept}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
