import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Crown, Star, Zap, TrendingUp, Coins, ShieldAlert, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PlansSection = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "1. Essencial",
      title: "Essencial",
      price: "R$ 297",
      period: "/mês",
      badge: "Inicial",
      icon: Zap,
      description: "Para quem está estruturando a prospecção B2B.",
      features: [
        "50 créditos incluídos/mês",
        "1 usuário",
        "Para quem está estruturando a prospecção B2B.",
        "Limite diário: até 50 créditos/dia",
        "Recarga avulsa: R$ 1,00/crédito (não expira)"
      ],
      ctaPrimary: "Começar Teste Grátis",
      ctaSecondary: "Falar com Consultor",
      highlight: false
    },
    {
      name: "2. Profissional",
      title: "Profissional",
      price: "R$ 497",
      period: "/mês",
      badge: "Mais escolhido",
      icon: Crown,
      description: "Para equipes de 2 a 3 vendedores.",
      features: [
        "300 créditos incluídos/mês",
        "3 usuários",
        "Para equipes de 2 a 3 vendedores.",
        "Limite diário: até 150 créditos/dia",
        "Recarga avulsa: R$ 0,90/crédito (não expira)"
      ],
      ctaPrimary: "Começar Teste Grátis",
      ctaSecondary: "Falar com Consultor",
      highlight: true
    },
    {
      name: "3. Equipe",
      title: "Equipe",
      price: "R$ 997",
      period: "/mês",
      badge: "Crescimento",
      icon: Star,
      description: "Para equipes comerciais em crescimento.",
      features: [
        "800 créditos incluídos/mês",
        "5 usuários",
        "Para equipes comerciais em crescimento.",
        "Limite diário: até 300 créditos/dia",
        "Recarga avulsa: R$ 0,80/crédito (não expira)"
      ],
      ctaPrimary: "Começar Teste Grátis",
      ctaSecondary: "Falar com Consultor",
      highlight: false
    },
    {
      name: "4. Escala",
      title: "Escala",
      price: "R$ 1.997",
      period: "/mês",
      badge: "Alto Volume",
      icon: TrendingUp,
      description: "Para operações com várias equipes ou unidades.",
      features: [
        "2.000 créditos incluídos/mês",
        "Até 15 usuários",
        "Para operações com várias equipes ou unidades.",
        "Limite diário: até 600 créditos/dia",
        "Recarga avulsa: R$ 0,70/crédito (não expira)"
      ],
      ctaPrimary: "Começar Teste Grátis",
      ctaSecondary: "Falar com Consultor",
      highlight: false
    }
  ];

  const creditActions = [
    {
      action: "Pesquisa de contato",
      deliverable: "Telefone, e-mail, site, redes, sócios e Google Maps da empresa",
      cost: "1 crédito"
    },
    {
      action: "Sinais financeiros",
      deliverable: "Situação na Receita Federal, recuperação judicial/falência e dívida ativa (PGFN)",
      cost: "1 crédito"
    },
    {
      action: "Enriquecer tudo",
      deliverable: "Contato completo + LinkedIn do decisor + análise e abordagem por IA",
      cost: "5 créditos"
    },
    {
      action: "Baixar lista",
      deliverable: "Exportação de até 50 empresas do seu funil em planilha (CSV/Excel)",
      cost: "1 crédito"
    },
    {
      action: "Protesto em cartório",
      deliverable: "Consulta detalhada de protestos em cartório (habilitado sob pedido)",
      cost: "12 créditos"
    }
  ];

  const handleContactSales = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=5511955501090&text=Ol%C3%A1!%20Gostaria%20de%20falar%20sobre%20os%20planos%20da%20Deepson.",
      "_blank"
    );
  };

  const handleFreeTrial = () => {
    const formElement = document.getElementById("trial-form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/teste-gratis");
    }
  };

  return (
    <section id="plans-section" className="py-20 bg-[#040f21]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-extrabold uppercase tracking-wider mb-4">
            <Coins className="w-3.5 h-3.5" />
            Planos, Créditos e Regras Claras
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white uppercase tracking-tight italic">
            Escolha o plano pelo tamanho da sua <span className="text-primary">equipe comercial</span>
          </h2>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            Todos os planos têm a mesma inteligência. O que muda é quantas empresas você abre por mês e quantos vendedores usam a plataforma.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 max-w-7xl mx-auto items-stretch mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 rounded-3xl border-2 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between bg-[#07152e] text-white ${
                plan.highlight
                  ? "border-primary shadow-button scale-[1.02] z-10"
                  : "border-white/10 hover:border-primary/50"
              }`}
            >
              <div>
                {/* Highlight Badge */}
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-cta text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-button whitespace-nowrap">
                      ⭐ {plan.badge}
                    </div>
                  </div>
                )}

                {/* Plan Badge */}
                {!plan.highlight && (
                  <div className="flex items-center gap-2 mb-3">
                    <plan.icon className="w-4 h-4 text-primary" />
                    <span className="text-primary font-bold text-xs uppercase tracking-wider">{plan.badge}</span>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="text-2xl font-black mb-3 text-white flex items-center gap-2">
                  {plan.highlight && <plan.icon className="w-6 h-6 text-primary" />}
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-white/10 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-primary">{plan.price}</span>
                  <span className="text-sm text-slate-300 font-semibold">{plan.period}</span>
                </div>

                {/* Features Section */}
                <div className="mb-8">
                  <ul className="space-y-3.5">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-100 font-medium leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-2.5 mt-auto pt-4 border-t border-white/10">
                <Button
                  variant={plan.highlight ? "cta" : "default"}
                  size="lg"
                  className="w-full font-black rounded-xl"
                  onClick={handleFreeTrial}
                >
                  {plan.ctaPrimary}
                </Button>

                {plan.ctaSecondary && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full font-bold rounded-xl border-white/15 text-slate-200 hover:text-white hover:bg-white/5"
                    onClick={handleContactSales}
                  >
                    {plan.ctaSecondary}
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* How the 20 Free Trial Credits Work */}
        <div className="max-w-5xl mx-auto mb-10 grid md:grid-cols-3 gap-6">
          <div className="bg-[#07152e] border border-primary/30 rounded-3xl p-6 text-white">
            <span className="text-xs font-black uppercase tracking-wider text-primary block mb-2">
              Oferta de Teste Grátis
            </span>
            <h4 className="text-xl font-black mb-2">7 dias grátis • 20 créditos</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Sem cartão de crédito. A quantidade de empresas analisadas no teste depende das ações que você escolher realizar com seus 20 créditos.
            </p>
          </div>
          <div className="bg-[#07152e] border border-white/10 rounded-3xl p-6 text-white">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-400 block mb-2">
              Opção A com 20 créditos
            </span>
            <h4 className="text-xl font-black mb-2">Até 10 empresas</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Liberando <strong>Pesquisa de contato (1 créd.) + Sinais financeiros (1 créd.)</strong> = 2 créditos por empresa qualificada.
            </p>
          </div>
          <div className="bg-[#07152e] border border-white/10 rounded-3xl p-6 text-white">
            <span className="text-xs font-black uppercase tracking-wider text-amber-400 block mb-2">
              Opção B com 20 créditos
            </span>
            <h4 className="text-xl font-black mb-2">Até 4 empresas completas</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Usando <strong>Enriquecer tudo (5 créd./empresa)</strong>: contato + LinkedIn do decisor + análise e abordagem por IA.
            </p>
          </div>
        </div>

        {/* Credit Cost Table (Obrigatória pelo SPEC) */}
        <div className="max-w-5xl mx-auto bg-[#07152e] border border-white/10 rounded-3xl p-6 md:p-10 shadow-xl">
          <div className="text-center mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-primary block mb-2">
              Custo Claro Antes de Clicar
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              Tabela de créditos por ação e regras de uso
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              Todo botão na plataforma exibe o custo antes do clique e seu extrato mostra exatamente para onde foi cada crédito.
            </p>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/15 text-xs uppercase tracking-wider text-slate-400">
                  <th className="py-3.5 px-4 font-bold">Ação</th>
                  <th className="py-3.5 px-4 font-bold">O que você recebe</th>
                  <th className="py-3.5 px-4 font-bold text-right">Custo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-sm">
                {creditActions.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-bold text-white whitespace-nowrap">{row.action}</td>
                    <td className="py-4 px-4 text-slate-300 text-xs md:text-sm">{row.deliverable}</td>
                    <td className="py-4 px-4 text-right whitespace-nowrap">
                      <span className="inline-block bg-primary/15 text-primary border border-primary/30 font-black text-xs px-3 py-1 rounded-full">
                        {row.cost}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Transparent Rules Grid */}
          <div className="grid md:grid-cols-2 gap-4 pt-6 border-t border-white/10 text-xs text-slate-300">
            <div className="flex items-start gap-2.5 bg-white/5 p-4 rounded-2xl">
              <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-1">Sem cobrança duplicada e sem pagar por consulta vazia</strong>
                A mesma empresa nunca gasta créditos duas vezes pela mesma ação na sua conta. Se a pesquisa de contato não localizar telefone ou e-mail válido, o crédito não é descontado (ou é devolvido automaticamente no extrato).
              </div>
            </div>
            <div className="flex items-start gap-2.5 bg-white/5 p-4 rounded-2xl">
              <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-1">Validade, exportação e recargas avulsas</strong>
                Os 20 créditos do teste grátis valem por 7 dias (incluindo exportação do funil por 1 crédito). Nos planos mensais, a cota renova todo mês e <strong>créditos avulsos comprados à parte nunca expiram</strong>.
              </div>
            </div>
          </div>
        </div>

        {/* Legal Notice on Financial Signals */}
        <div className="max-w-5xl mx-auto mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 text-xs text-slate-400">
          <ShieldAlert className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <p>
            <strong>Aviso sobre Sinais Financeiros e LGPD:</strong> Informações cadastrais e fiscais provêm de fontes públicas oficiais (Receita Federal, PGFN e cartórios) na data da consulta, exibidas com fonte e data, e não constituem análise ou recomendação de crédito. Dados corporativos e de decisores são tratados para finalidade legítima de prospecção B2B nos termos da LGPD, com canal direto de revisão e exclusão disponível no rodapé.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
