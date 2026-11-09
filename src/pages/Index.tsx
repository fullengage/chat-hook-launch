import React, { useRef, useState } from "react";
import {
  ExternalLink,
  MessageCircle,
  CheckCircle2,
  Search,
  Target,
  UserCheck,
  ArrowRight,
  BarChart3,
  Menu,
  X
} from "lucide-react";
import PlansSection from "@/components/PlansSection";
import HeroRadar from "@/components/HeroRadar";

const WHATSAPP_URL = "https://wa.me/5511955501090?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20a%20Deepson.";
const PLATFORM_URL = "https://chat.deepson.com.br/";

// ponytail: preços duplicados do PlansSection; mudar nos dois lugares
const SIM_PLANS = [
  { name: "Essencial", price: 297, credits: 50 },
  { name: "Profissional", price: 497, credits: 300 },
  { name: "Equipe", price: 997, credits: 800 },
  { name: "Escala", price: 1997, credits: 2000 },
];

const Index: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [site, setSite] = useState("");
  const formAnchor = useRef<HTMLDivElement>(null);

  // Simulador: Deepson x anúncio
  const [adCpl, setAdCpl] = useState(80);
  const [planIdx, setPlanIdx] = useState(0);
  const plan = SIM_PLANS[planIdx];
  const empresas = plan.credits / 2; // 1 crédito contato + 1 crédito sinais financeiros
  const custoEmpresa = plan.price / empresas;
  const leadsAnuncio = Math.floor(plan.price / adCpl);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans antialiased selection:bg-[#ff6b00] selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-[#040f21] border-b border-[#1e293b] transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <img
              src="/logo-deepson.png"
              alt="Deepson — Inteligência de Dados B2B"
              className="h-11 md:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-200">
            <a href="#solucao" className="hover:text-[#ff6b00] transition-colors">Solução</a>
            <a href="#metodologia" className="hover:text-[#ff6b00] transition-colors">Como Funciona</a>
            <a href="#plans-section" className="hover:text-[#ff6b00] transition-colors">Planos</a>
            <a href="#simulador" className="hover:text-[#ff6b00] transition-colors">Simulador</a>
            <a 
              href={PLATFORM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#ff6b00] transition-colors flex items-center gap-1.5"
            >
              Plataforma <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a 
              href="/teste-gratis"
              className="inline-flex items-center gap-2 bg-[#ff6b00] hover:bg-[#ea580c] text-white px-5 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Teste Grátis (7 dias) →
            </a>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-[#ff6b00] text-[#ff6b00] hover:bg-[#ff6b00] hover:text-white px-4 py-2 rounded-full font-bold transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Fale conosco
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-white hover:bg-[#1e293b] rounded-lg transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#040f21] border-b border-[#1e293b] px-6 py-6 flex flex-col gap-4 shadow-xl text-white">
            <a 
              href="#solucao" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-200 hover:text-[#ff6b00] py-2 border-b border-[#1e293b]"
            >
              Solução
            </a>
            <a 
              href="#metodologia" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-200 hover:text-[#ff6b00] py-2 border-b border-[#1e293b]"
            >
              Metodologia
            </a>
            <a 
              href="#simulador" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-200 hover:text-[#ff6b00] py-2 border-b border-[#1e293b]"
            >
              Simulador
            </a>
            <a 
              href="/teste-gratis" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-[#ff6b00] py-2 border-b border-[#1e293b]"
            >
              Teste Grátis (7 dias + 20 créditos)
            </a>
            <a 
              href={PLATFORM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-base font-semibold text-slate-200 py-2 flex items-center justify-between"
            >
              <span>Acessar Plataforma</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#ff6b00] hover:bg-[#ea580c] text-white py-3 rounded-full font-bold text-center mt-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              Fale conosco no WhatsApp ↗
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 bg-[#f8fafc]">
        <HeroRadar anchor={formAnchor} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#e2e8f0] shadow-sm text-sm text-[#0f172a] mb-6">
            <strong>+2,4 milhões</strong> de empresas brasileiras mapeadas
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0f172a] tracking-tight leading-[1.08] mb-5">
            Receba <span className="whitespace-nowrap text-[#ff6b00]">10 empresas ideais</span>{" "}<br className="hidden sm:block" />para vender em 2 minutos, grátis
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <span className="px-3.5 py-1.5 rounded-full bg-[#f1f5f9] text-sm font-semibold text-[#334155]">Sem cartão de crédito</span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#f1f5f9] text-sm font-semibold text-[#334155]">🎁 20 créditos grátis</span>
          </div>

          <div ref={formAnchor} className="relative max-w-xl mx-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const s = site.trim();
              window.location.href = s ? `/teste-gratis?site=${encodeURIComponent(s)}` : "/teste-gratis";
            }}
            className="relative z-10 flex items-center gap-2 bg-white border-2 border-[#0f172a] rounded-2xl p-1.5 pl-5 shadow-lg focus-within:border-[#ff6b00] transition-colors"
          >
            <label htmlFor="hero-site" className="sr-only">Site da sua empresa</label>
            <input
              id="hero-site"
              type="text"
              inputMode="url"
              autoComplete="url"
              value={site}
              onChange={(e) => setSite(e.target.value)}
              placeholder="Cole o site da sua empresa"
              className="flex-1 min-w-0 bg-transparent py-3 text-base text-[#0f172a] placeholder:text-[#94a3b8] outline-none"
            />
            <button
              type="submit"
              aria-label="Ver minhas empresas"
              className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#ff6b00] hover:bg-[#ea580c] text-white transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
          </div>
          <a href="/teste-gratis" className="inline-block mt-3 text-sm text-[#64748b] hover:text-[#ff6b00] underline-offset-4 hover:underline">
            Não tenho site
          </a>

          <p className="text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto mt-8">
            A IA do <strong>Deepson</strong> lê o seu site, define o seu cliente ideal e encontra as empresas que mais combinam com você — com nota de encaixe, o motivo, quem decide a compra e a abordagem pronta.
          </p>
        </div>
      </section>

      {/* Ribbon Bar */}
      <section className="bg-[#0b111e] text-slate-100 py-5 border-y border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-xs md:text-sm font-bold tracking-wide uppercase">
          {["Cliente ideal pelo seu site", "Nota de encaixe com motivo", "Quem decide a compra", "Dado com fonte e data"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <span className="text-white bg-[#ff6b00] rounded-full w-5 h-5 inline-flex items-center justify-center text-[11px]">✓</span>
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* Problem Section */}
      <section id="solucao" className="py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#ff6b00] mb-3 block">
            ✦ O problema
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-6">
            Seu vendedor deveria estar vendendo, não montando lista.
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed">
            Hoje a prospecção B2B é planilha de CNPJ, filtro que ninguém sabe montar e mensagem genérica que ninguém responde. Ou então é anúncio: você paga por clique, o contato some quando a verba acaba e a lista nunca é sua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Search, t: "Entende o que você vende", d: "A IA lê o seu site e descreve o seu cliente ideal: setor, porte, região e o tipo de empresa que compra de você." },
            { icon: Target, t: "Acha e prioriza as empresas certas", d: "Cada empresa vem com nota de encaixe e o porquê. Não é lista; é uma fila em ordem de prioridade." },
            { icon: UserCheck, t: "Mostra quem decide e como abordar", d: "Sócios, contato, site, Google Maps, situação na Receita e uma abordagem escrita com fato real daquela empresa." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="bg-white border border-[#e2e8f0] p-8 rounded-3xl shadow-sm hover:shadow-md hover:border-[#fdba74] transition-all">
              <div className="w-14 h-14 rounded-2xl bg-[#fff7ed] border border-[#ffedd5] text-[#ff6b00] flex items-center justify-center mb-6">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black text-[#0f172a] mb-3">{t}</h3>
              <p className="text-[#475569] text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 bg-[#f1f5f9] border-y border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#ff6b00] mb-3 block">
                ✦ Por que não é só uma lista
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-8">
                Lista de CNPJ você acha em qualquer lugar. Motivo para ligar hoje, não.
              </h2>

              <ul className="space-y-4 mb-8">
                {[
                  ["Cliente ideal pelo seu site", "você não precisa saber montar filtro."],
                  ["Nota com o porquê", "“indústria · EPP · sócio identificado · site sem SEO”."],
                  ["Sinais financeiros", "situação na Receita, recuperação judicial e dívida ativa antes de abordar."],
                  ["Abordagem com fato real", "e-mail, ligação ou LinkedIn com o que é verdade sobre aquela empresa."],
                  ["A base fica com você", "funil, anotações e histórico são da sua empresa."],
                ].map(([t, d]) => (
                  <li key={t} className="flex items-start gap-3 text-base text-[#0f172a]">
                    <CheckCircle2 className="w-5 h-5 text-[#ff6b00] shrink-0 mt-0.5" />
                    <span><strong>{t}</strong> — {d}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/teste-gratis"
                  className="inline-flex items-center gap-2 bg-[#ff6b00] hover:bg-[#ea580c] text-white px-8 py-4 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                >
                  Testar grátis por 7 dias →
                </a>
                <a
                  href={PLATFORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-[#0f172a] text-[#0f172a] hover:border-[#ff6b00] hover:text-[#ff6b00] px-7 py-4 rounded-full font-bold text-base transition-all"
                >
                  Acessar plataforma ↗
                </a>
              </div>
            </div>

            <div className="bg-white border border-[#e2e8f0] rounded-3xl overflow-hidden shadow-xl">
              <div className="bg-[#0b111e] text-white px-6 py-4 flex items-center justify-between">
                <span className="text-sm font-bold flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#ff6b00]" />
                  Sua fila de hoje
                </span>
                <span className="text-xs font-bold text-[#ff6b00] bg-[#ff6b00]/15 border border-[#ff6b00]/30 px-3 py-1 rounded-full">
                  Exemplo ilustrativo
                </span>
              </div>

              <img
                src="/dashboard-deepson.jpg"
                alt="Painel Deepson — Inteligência de Mercado B2B"
                className="w-full h-auto object-cover border-b border-[#e2e8f0]"
              />

              <div className="p-6 space-y-3">
                {[
                  ["Indústria de embalagens · Campinas", "92", "EPP, 18 anos de mercado, sócio identificado, abriu filial em agosto"],
                  ["Distribuidora de EPI · Guarulhos", "87", "Vende para indústria; site sem página de orçamento"],
                ].map(([n, nota, motivo]) => (
                  <div key={n} className="p-4 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-[#0f172a]">{n}</h4>
                      <p className="text-xs text-[#475569] mt-1">{motivo}</p>
                    </div>
                    <span className="shrink-0 text-xs bg-[#fff7ed] text-[#ff6b00] border border-[#fed7aa] px-2.5 py-1 rounded-full font-black">Nota {nota}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="metodologia" className="py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#ff6b00] mb-3 block">
            ✦ Como funciona
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] tracking-tight leading-tight">
            Do cadastro à primeira conversa em 4 passos.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            ["Cole seu site", "O Deepson descreve o seu negócio e o seu cliente ideal. Você ajusta se quiser."],
            ["Receba a fila", "Empresas compatíveis em ordem de nota, cada uma com o motivo."],
            ["Abra o que interessa", "Contato, decisor e sinais financeiros. O custo em créditos aparece antes do clique."],
            ["Aborde e marque o resultado", "Reunião, venda ou “não”: seu funil mostra o que está funcionando."],
          ].map(([t, d], i) => (
            <div key={t} className="bg-white border border-[#e2e8f0] p-8 rounded-3xl hover:border-[#fdba74] transition-colors">
              <span className="text-xs font-black uppercase tracking-wider text-[#ff6b00] mb-4 block">
                Passo {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-black text-[#0f172a] mb-3">{t}</h3>
              <p className="text-[#475569] text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deepson x anúncio */}
      <section className="py-24 bg-[#f1f5f9] border-y border-[#e2e8f0]">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-xs font-black uppercase tracking-widest text-[#ff6b00] mb-3 block">
            ✦ Deepson x anúncio pago
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-10">
            Quanto custa um mês de anúncio para falar com as empresas certas?
          </h2>
          <div className="overflow-x-auto bg-white border border-[#e2e8f0] rounded-3xl shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#e2e8f0] text-xs uppercase tracking-wider text-[#64748b]">
                  <th className="py-4 px-6 font-bold"></th>
                  <th className="py-4 px-6 font-bold">Anúncio pago</th>
                  <th className="py-4 px-6 font-bold text-[#ff6b00]">Deepson</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2e8f0]">
                {[
                  ["Quem você alcança", "Quem clicou", "Empresas escolhidas pelo seu cliente ideal"],
                  ["Quem decide a compra", "Não sabe", "Sócios e decisor identificados"],
                  ["Quando a verba acaba", "O contato some", "A lista e o histórico continuam seus"],
                  ["Custo", "Leilão por clique", "Plano mensal + créditos com preço na tela"],
                ].map(([k, a, d]) => (
                  <tr key={k}>
                    <td className="py-4 px-6 font-bold text-[#0f172a]">{k}</td>
                    <td className="py-4 px-6 text-[#64748b]">{a}</td>
                    <td className="py-4 px-6 font-semibold text-[#0f172a]">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Plans & Credit Costs Section */}
      <PlansSection />

      {/* Simulator Section */}
      <section id="simulador" className="py-24 bg-[#f1f5f9] border-t border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#ff6b00] mb-3 block">
                ✦ Simulador
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-6">
                Compare com o que você paga hoje por lead.
              </h2>
              <p className="text-base text-[#475569] leading-relaxed mb-8">
                Informe quanto custa um lead no seu anúncio e escolha um plano:
              </p>

              <div className="bg-white border border-[#e2e8f0] p-6 rounded-3xl space-y-6 shadow-md">
                <div>
                  <div className="flex justify-between text-xs font-bold text-[#0f172a] mb-1.5">
                    <label htmlFor="sim-cpl">Custo por lead no anúncio</label>
                    <span className="text-[#ff6b00]">R$ {adCpl.toLocaleString("pt-BR")}</span>
                  </div>
                  <input
                    id="sim-cpl"
                    type="range"
                    min="10"
                    max="500"
                    step="5"
                    value={adCpl}
                    onChange={(e) => setAdCpl(Number(e.target.value))}
                    className="w-full accent-[#ff6b00]"
                  />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#0f172a] mb-2">Plano Deepson</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {SIM_PLANS.map((p, i) => (
                      <button
                        key={p.name}
                        type="button"
                        onClick={() => setPlanIdx(i)}
                        className={`px-3 py-2 rounded-xl text-sm font-bold border transition-colors ${
                          i === planIdx ? "bg-[#ff6b00] border-[#ff6b00] text-white" : "border-[#e2e8f0] text-[#0f172a] hover:border-[#ff6b00]"
                        }`}
                      >
                        {p.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#0b111e] text-white p-8 md:p-10 rounded-3xl shadow-2xl border border-[#1e293b]">
                <span className="text-xs font-black uppercase tracking-wider text-[#ff6b00] mb-2 block">
                  ✦ Resultado
                </span>
                <h3 className="text-2xl font-bold mb-6">Plano {plan.name}: R$ {plan.price.toLocaleString("pt-BR")}/mês</h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <span className="text-xs text-slate-300 block mb-1">Empresas com contato + sinais financeiros</span>
                    <div className="text-3xl font-black text-[#ff6b00]">{empresas.toLocaleString("pt-BR")}/mês</div>
                    <span className="text-xs text-slate-400">≈ {custoEmpresa.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} cada</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <span className="text-xs text-slate-300 block mb-1">O mesmo valor em anúncio</span>
                    <div className="text-3xl font-black">{leadsAnuncio.toLocaleString("pt-BR")} leads</div>
                    <span className="text-xs text-slate-400">a R$ {adCpl.toLocaleString("pt-BR")} cada</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-8 leading-relaxed">
                  Conta: preço do plano ÷ (créditos do mês ÷ 2), já que cada empresa usa 1 crédito de contato e 1 de sinais financeiros. Lead de anúncio já demonstrou interesse; empresa do Deepson é um prospect escolhido a dedo, com quem decide. Use como referência, não como promessa de resultado.
                </p>

                <div className="space-y-3">
                  <a
                    href="/teste-gratis"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#ff6b00] hover:bg-[#ea580c] text-white py-4 rounded-full font-bold text-base shadow-lg transition-all"
                  >
                    Ver minhas 10 empresas grátis →
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 border border-white/30 hover:border-[#ff6b00] hover:text-[#ff6b00] text-white py-3.5 rounded-full font-bold text-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Falar com um especialista ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#040f21] via-[#07152e] to-[#0f2242] text-white text-center relative overflow-hidden border-t-4 border-[#ff6b00]">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="text-xs font-black uppercase tracking-widest text-[#fb923c] mb-4 block">
            ✦ Seu próximo passo
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
            Cole seu site e veja suas primeiras 10 empresas hoje.
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            7 dias grátis, 20 créditos, sem cartão. Se preferir, conversamos antes sobre a sua operação comercial.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="/teste-gratis"
              className="inline-flex items-center gap-2.5 bg-[#ff6b00] hover:bg-[#ea580c] text-white px-9 py-4 rounded-full font-bold text-base shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
            >
              Começar teste grátis (7 dias) →
            </a>

            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white/60 hover:border-[#ff6b00] hover:text-[#ff6b00] text-white px-8 py-4 rounded-full font-bold text-base transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Conversar com a Deepson ↗
            </a>
          </div>

          <p className="text-xs text-slate-400 mt-8">
            WhatsApp Direto: +55 (11) 95550-1090
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#040f21] text-slate-400 py-16 border-t border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <img
              src="/logo-deepson.png"
              alt="Deepson — Inteligência de Dados B2B"
              className="h-11 w-auto object-contain mb-3"
            />
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 block mb-3">
              Uma empresa do Grupo FullWeb
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Inteligência comercial B2B: do seu site ao seu próximo cliente.
            </p>
          </div>

          <div>
            <h5 className="text-xs font-black uppercase tracking-wider text-white mb-4">Plataforma</h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="/teste-gratis" className="text-[#ff6b00] font-bold hover:underline transition-colors flex items-center gap-1">
                  Teste Grátis (7 dias) →
                </a>
              </li>
              <li>
                <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b00] transition-colors flex items-center gap-1">
                  Acessar Plataforma <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li><a href="#solucao" className="hover:text-[#ff6b00] transition-colors">Nossa Solução</a></li>
              <li><a href="#metodologia" className="hover:text-[#ff6b00] transition-colors">Como Funciona</a></li>
              <li><a href="#plans-section" className="hover:text-[#ff6b00] transition-colors">Planos e Preços</a></li>
              <li><a href="#simulador" className="hover:text-[#ff6b00] transition-colors">Simulador de ROI</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-black uppercase tracking-wider text-white mb-4">Institucional</h5>
            <ul className="space-y-2.5 text-xs">
              <li><a href="/termos-de-uso" className="hover:text-[#ff6b00] transition-colors">Termos de Uso</a></li>
              <li><a href="/privacidade" className="hover:text-[#ff6b00] transition-colors">Política de Privacidade</a></li>
              <li><a href="/lgpd" className="hover:text-[#ff6b00] transition-colors">LGPD & Compliance</a></li>
              <li><a href="/exclusao-de-dados" className="hover:text-[#ff6b00] transition-colors">Exclusão de Dados</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-black uppercase tracking-wider text-white mb-4">Atendimento</h5>
            <p className="text-xs text-slate-400 mb-3">
              Fale diretamente com nosso time comercial:
            </p>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#ff6b00] hover:underline"
            >
              <MessageCircle className="w-4 h-4 text-[#ff6b00]" />
              +55 (11) 95550-1090 ↗
            </a>
            <p className="text-[11px] text-slate-500 mt-4">
              © {new Date().getFullYear()} Deepson. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
