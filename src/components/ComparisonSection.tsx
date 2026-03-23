import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    { feature: "Atendimento Organizado", common: false, chathook: true },
    { feature: "Kanban Comercial", common: false, chathook: true },
    { feature: "IA Integrada (CaptainIA)", common: false, chathook: true },
    { feature: "Histórico Estruturado", common: false, chathook: true },
    { feature: "Gestão de Equipe", common: false, chathook: true },
    { feature: "Relatórios e Rastreabilidade", common: false, chathook: true },
    { feature: "Múltiplos Números no Mesmo Lugar", common: false, chathook: true },
    { feature: "Segurança e Conformidade LGPD", common: false, chathook: true }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            WhatsApp Comum vs <span className="text-primary">ChatHook CRM</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entenda por que as empresas que buscam escala e profissionalismo escolhem o ChatHook.
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-6 text-lg font-bold text-foreground italic">Recurso</th>
                <th className="p-6 text-lg font-bold text-muted-foreground text-center">WhatsApp Comum</th>
                <th className="p-6 text-lg font-bold text-primary text-center">ChatHook CRM</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <tr key={index} className="border-t border-border hover:bg-muted/30 transition-colors">
                  <td className="p-6 font-medium text-foreground">{item.feature}</td>
                  <td className="p-6 text-center">
                    {item.common ? (
                      <Check className="w-6 h-6 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="p-6 text-center bg-primary/5">
                    {item.chathook ? (
                      <Check className="w-6 h-6 text-primary mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
