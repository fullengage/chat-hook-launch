import { Card } from "@/components/ui/card";
import { 
  BarChart3, 
  Bot, 
  History, 
  Kanban, 
  Lock, 
  MessagesSquare, 
  Settings, 
  Users2 
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Kanban,
      title: "Kanban de Atendimento e Vendas",
      description: "Visualize e gerencie cada lead e cliente através de funis personalizáveis no WhatsApp."
    },
    {
      icon: Bot,
      title: "Captain IA",
      description: "Assistente inteligente que automatiza o atendimento inicial e auxilia sua equipe com respostas rápidas."
    },
    {
      icon: MessagesSquare,
      title: "Automação de Mensagens",
      description: "Crie fluxos automatizados de mensagens para disparos, lembretes e sequências de vendas."
    },
    {
      icon: History,
      title: "Histórico Completo",
      description: "Acesso vitalício a todo o histórico de conversas, garantindo auditoria e contexto para a equipe."
    },
    {
      icon: BarChart3,
      title: "Relatórios e Indicadores",
      description: "Métricas detalhadas de performance, tempo de resposta e taxas de conversão por atendente."
    },
    {
      icon: Users2,
      title: "Gestão da Equipe",
      description: "Monitore a atividade do seu time, distribua conversas e garanta produtividade constante."
    },
    {
      icon: Settings,
      title: "Múltiplos Números e Atendentes",
      description: "Conecte quantos chips precisar e tenha centenas de usuários trabalhando no mesmo ambiente."
    },
    {
      icon: Lock,
      title: "Segurança e LGPD",
      description: "Infraestrutura robusta compatível com LGPD, garantindo a privacidade dos dados e da operação."
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            Tudo o que você precisa para <span className="text-primary">escalar sua operação</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma plataforma completa projetada para transformar o WhatsApp no motor de vendas da sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground leading-tight">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
