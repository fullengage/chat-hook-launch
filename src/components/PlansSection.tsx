import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Crown, Star, Zap, TrendingUp, Coins, ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PlansSection = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "1. Essencial",
      title: "Essencial",
      price: "R$ 197",
      period: "/mês",
      badge: "Inicial",
      icon: Zap,
      description: "Para profissionais e pequenas empresas.",
      features: [
        "50 créditos incluídos",
        "1 usuário",
        "Para profissionais e pequenas empresas."
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
      description: "Para pequenas equipes comerciais.",
      features: [
        "300 créditos incluídos",
        "3 usuários",
        "Para pequenas equipes comerciais."
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
      description: "Para operações comerciais em crescimento.",
      features: [
        "800 créditos incluídos",
        "5 usuários",
        "Para operações comerciais em crescimento."
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
      description: "Para operações de prospecção de maior volume.",
      features: [
        "2.000 créditos incluídos",
        "Até 15 usuários",
        "Para operações de prospecção de maior volume."
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
      deliverable: "Contato completo + LinkedIn do decisor + análise da empresa por IA",
      cost: "5 créditos"
    },
    {
      action: "Baixar lista",
      deliverable: "Exportação de até 50 empresas do seu funil em planilha",
      cost: "1 crédito"
    },
    {
      action: "Protesto em cartório",
      deliverable: "Consulta detalhada de protestos em cartório (liberado sob pedido)",
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
            Planos e Preços Deepson
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-white uppercase tracking-tight italic">
            Escolha o plano ideal para sua <span className="text-primary">Operação B2B</span>
          </h2>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            O Deepson é utilizado por mais de 1.000 empresas, desde empreendedores individuais e equipes de vendas até agências de geração de leads e companhias que integram a lista Fortune 500. O plano Base é ideal para ações de prospecção em estágios iniciais; o plano Essencial atende a equipes de vendas em crescimento; já os planos Equipe e Escala foram desenvolvidos para agências e operações de prospecção em grande escala.
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
                  <ul className="space-y-4">
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

        {/* Credit Cost Table (Obrigatória pelo SPEC) */}
        <div className="max-w-4xl mx-auto bg-[#07152e] border border-white/10 rounded-3xl p-6 md:p-10 shadow-xl">
          <div className="text-center mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-primary block mb-2">
              Custo Claro Antes de Clicar
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              Como funcionam os créditos na prática
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              No teste grátis você recebe 20 créditos por 7 dias (dá para ~10 empresas com contato e sinais financeiros). A mesma empresa nunca é cobrada duas vezes pela mesma ação.
            </p>
          </div>

          <div className="overflow-x-auto">
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
        </div>

        {/* Legal Notice on Financial Signals */}
        <div className="max-w-4xl mx-auto mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 text-xs text-slate-400">
          <ShieldAlert className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <p>
            <strong>Aviso sobre Sinais Financeiros:</strong> Informações de fontes públicas (Receita Federal, PGFN e cartórios) na data da consulta, exibidas com fonte e data. Não é análise ou recomendação de crédito.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
