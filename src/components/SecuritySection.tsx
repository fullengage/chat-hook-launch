import { Shield, Lock, Eye, FileCheck, Server, Key } from "lucide-react";

const SecuritySection = () => {
  const securityItems = [
    {
      icon: Lock,
      title: "Criptografia de Ponta a Ponta",
      description: "Suas conversas e dados de clientes estão protegidos com os mais altos padrões de segurança."
    },
    {
      icon: Eye,
      title: "Controle de Acesso",
      description: "Defina permissões granulares para cada membro da equipe, controlando quem vê o quê."
    },
    {
      icon: Key,
      title: "Autenticação em Dois Fatores",
      description: "Camada extra de proteção para garantir que apenas pessoas autorizadas acessem o sistema."
    },
    {
      icon: FileCheck,
      title: "Auditoria de Logs",
      description: "Rastreabilidade total das ações realizadas na plataforma para segurança jurídica e operacional."
    },
    {
      icon: Shield,
      title: "Conformidade LGPD",
      description: "Plataforma desenvolvida seguindo as diretrizes da Lei Geral de Proteção de Dados."
    },
    {
      icon: Server,
      title: "Backup Diário",
      description: "Seus dados estão seguros em infraestrutura robusta com redundância e backups automáticos."
    }
  ];

  return (
    <section id="security" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Shield className="w-16 h-16 text-primary mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground text-center">
            Segurança e <span className="text-primary">Confiança em Primeiro Lugar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trabalhamos com os protocolos mais rigorosos para garantir que a operação da sua empresa esteja sempre protegida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {securityItems.map((item, index) => (
            <div key={index} className="flex gap-4 p-6 rounded-2xl bg-background border border-border shadow-sm">
              <div className="shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
