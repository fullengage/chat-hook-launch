import { Link } from "react-router-dom";
import { useLocale } from "@/i18n/LocaleContext";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SeoHead } from "@/components/seo/SeoHead";

// ponytail: copy inline por idioma; mover para os dicionários se crescer
const COPY = {
  "pt-br": { title: "Página não encontrada", text: "O endereço que você abriu não existe ou mudou de lugar.", home: "Voltar ao início" },
  en: { title: "Page not found", text: "The address you opened doesn't exist or has moved.", home: "Back to home" },
  es: { title: "Página no encontrada", text: "La dirección que abriste no existe o cambió de lugar.", home: "Volver al inicio" },
  "zh-cn": { title: "页面未找到", text: "您访问的地址不存在或已移动。", home: "返回首页" },
} as const;

const NotFound = () => {
  const { locale, dict, routeTo } = useLocale();
  const c = COPY[locale] ?? COPY.en;

  return (
    <SiteLayout>
      <SeoHead title={`404 — ${c.title}`} description={c.text} noindex />
      <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 py-20 text-center text-[#0f172a]">
        <p className="text-6xl font-black text-[#ff6b00]">404</p>
        <h1 className="mt-4 text-2xl font-bold">{c.title}</h1>
        <p className="mt-3 text-slate-600">{c.text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to={routeTo("home")} className="rounded-full bg-[#ff6b00] px-6 py-3 text-sm font-bold text-white hover:bg-[#ea580c]">
            {c.home}
          </Link>
          <Link to={routeTo("freeTrial")} className="rounded-full border border-[#ff6b00] px-6 py-3 text-sm font-bold text-[#ff6b00] hover:bg-[#ff6b00]/10">
            {dict.nav.trialCta}
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
};

export default NotFound;
