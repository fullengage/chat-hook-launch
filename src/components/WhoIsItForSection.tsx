import { ShoppingBag, Stethoscope, Factory, Briefcase, LayoutGrid, Users } from "lucide-react";

const WhoIsItForSection = () => {
  const industries = [
    { icon: ShoppingBag, name: "Varejo e E-commerce" },
    { icon: Stethoscope, name: "Clínicas e Saúde" },
    { icon: Factory, name: "Indústria e B2B" },
    { icon: Briefcase, name: "Serviços e Consultoria" },
    { icon: LayoutGrid, name: "Multilojas e Franquias" },
    { icon: Users, name: "Equipes Comerciais" }
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Para quem é o <span className="text-primary">ChatHook?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Solução robusta para empresas que precisam de organização, velocidade e escala no atendimento via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
          {industries.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 shadow-sm">
                <item.icon className="w-8 h-8" />
              </div>
              <span className="font-semibold text-foreground text-sm leading-tight">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsItForSection;
