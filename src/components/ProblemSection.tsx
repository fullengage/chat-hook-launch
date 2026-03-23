import { Card } from "@/components/ui/card";
import { AlertCircle, Clock, MessageSquareOff, Users, BarChart3, Brain } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: MessageSquareOff,
      title: "Atendimento Desorganizado",
      description: "Dezenas de conversas sem ordem clara, dificultando o foco no que realmente importa."
    },
    {
      icon: Clock,
      title: "Mensagens Perdidas",
      description: "Clientes ignorados ou esquecidos em meio a tantas conversas não respondidas."
    },
    {
      icon: Users,
      title: "Mistura com Pessoal",
      description: "Vendedores usando perfis pessoais, sem controle da empresa sobre os dados."
    },
    {
      icon: Brain,
      title: "Dependência da Memória",
      description: "Informações importantes guardadas na cabeça do atendente, não em um sistema."
    },
    {
      icon: BarChart3,
      title: "Falta de Indicadores",
      description: "Você não sabe quantos atendimentos foram feitos ou o tempo de resposta da equipe."
    },
    {
      icon: AlertCircle,
      title: "Sem Histórico Estruturado",
      description: "Dificuldade em resgatar o que foi acordado com o cliente meses atrás."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Seu WhatsApp não foi feito para <span className="text-primary">escalar atendimento</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Quando tudo fica em conversas soltas, sua equipe perde contexto, clientes esperam mais e oportunidades escapam.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card key={index} className="p-8 border-2 border-border/50 hover:border-primary/50 transition-colors bg-background/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
