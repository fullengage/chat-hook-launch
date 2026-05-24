import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Shield, Scale, Eye, UserCheck, Lock, Mail } from "lucide-react";

const LgpdCompliance = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button 
          variant="ghost" 
          className="mb-8 gap-2 hover:bg-muted" 
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="w-4 h-4" />
          Voltar
        </Button>

        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-primary/10 rounded-2xl text-primary">
            <Shield className="w-10 h-10" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Conformidade Legal</span>
            <h1 className="text-4xl font-black italic">
              Portal de <span className="text-primary">Conformidade LGPD</span>
            </h1>
          </div>
        </div>

        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          Esta declaração descreve como o **Chathook CRM** (CHATHOOK CRM - SOFTWARE E TECNOLOGIA LTDA) se posiciona em relação à **Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018)**, nossos compromissos com a segurança e os direitos de nossos usuários.
        </p>
        
        <div className="space-y-12">
          {/* Card: Operator vs Controller */}
          <section className="bg-muted/30 border border-border/80 rounded-2xl p-6 md:p-8">
            <div className="flex gap-4 items-start mb-4">
              <Scale className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold text-foreground">1. Nossos Papéis na LGPD</h2>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  De acordo com as diretrizes da LGPD, o papel do ChatHook varia dependendo da relação com os dados:
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-background/50 border border-border p-5 rounded-xl">
                <h3 className="font-bold text-sm text-foreground mb-2">ChatHook como Controlador</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Somos <strong>Controladores</strong> dos dados pessoais dos nossos clientes directos (dados de cadastro de conta, faturamento, e-mail de contato). Determinamos as finalidades de processamento para manter e faturar a plataforma.
                </p>
              </div>
              <div className="bg-background/50 border border-border p-5 rounded-xl">
                <h3 className="font-bold text-sm text-foreground mb-2">ChatHook como Operador</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Somos <strong>Operadores</strong> das informações enviadas por nossos clientes através da API do WhatsApp e CRM (dados dos clientes dos nossos clientes). O processamento é ditado exclusivamente sob instrução e responsabilidade dos nossos clientes.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Rights under Art. 18 */}
          <section className="space-y-6">
            <div className="flex gap-4 items-start">
              <UserCheck className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground">2. Seus Direitos (Artigo 18)</h2>
                <p className="text-muted-foreground mt-1 leading-relaxed">
                  A LGPD assegura ao titular de dados diversos direitos em relação aos seus dados pessoais processados por nós:
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Confirmação & Acesso", desc: "Saber se realizamos o tratamento de seus dados e obter acesso aos mesmos." },
                { title: "Correção & Atualização", desc: "Solicitar a retificação de dados incorretos, incompletos ou desatualizados." },
                { title: "Eliminação & Bloqueio", desc: "Requerer a exclusão ou bloqueio de dados desnecessários ou tratados em desconformidade." },
                { title: "Portabilidade de Dados", desc: "Solicitar a transferência dos seus dados pessoais a outro fornecedor de serviço." },
                { title: "Revogação de Consentimento", desc: "Revogar o consentimento previamente fornecido para o tratamento de dados específicos." },
                { title: "Informação sobre Compartilhamento", desc: "Saber com quais entidades públicas ou privadas compartilhamos seus dados." }
              ].map((right, idx) => (
                <div key={idx} className="border border-border p-5 rounded-xl hover:border-primary/50 transition-colors">
                  <h3 className="font-bold text-sm text-foreground mb-1">{right.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{right.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Security */}
          <section className="space-y-4">
            <div className="flex gap-4 items-start">
              <Lock className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground">3. Medidas de Segurança Adotadas</h2>
                <p className="text-muted-foreground mt-1 leading-relaxed">
                  A segurança dos dados é nossa principal prioridade jurídica e técnica. Adotamos práticas rígidas para garantir a confidencialidade e integridade:
                </p>
              </div>
            </div>
            
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed">
              <li><strong>Criptografia em Trânsito e Repouso:</strong> Todas as comunicações entre o navegador e nossos servidores são protegidas usando TLS/SSL, e dados sensíveis são criptografados no banco de dados.</li>
              <li><strong>Controle de Acesso Granular:</strong> Implementamos restrições técnicas para que apenas colaboradores autorizados acessem os dados necessários para o suporte.</li>
              <li><strong>Backups Frequentes:</strong> Rotinas diárias e automáticas de backup para garantir que seus dados nunca sejam perdidos.</li>
              <li><strong>Firewalls & Monitoramento:</strong> Monitoramento contínuo de acessos para prevenir e mitigar qualquer tipo de intrusão ou vulnerabilidade técnica.</li>
            </ul>
          </section>

          {/* Contact Section: DPO */}
          <section className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                Encarregado pelo Tratamento de Dados (DPO)
              </h2>
              <p className="text-xs text-muted-foreground max-w-lg leading-relaxed">
                Conforme exigido pelo Artigo 41 da LGPD, o ChatHook possui um Encarregado pelo Tratamento de Dados Pessoais designado para atender às suas dúvidas, requisições de titulares e comunicações da ANPD (Autoridade Nacional de Proteção de Dados).
              </p>
            </div>
            
            <div className="bg-background border border-border p-5 rounded-xl w-full md:w-auto shrink-0 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <div className="text-xs">
                  <span className="block text-[10px] text-muted-foreground/60 uppercase font-semibold">Contato do DPO</span>
                  <span className="font-medium text-foreground">privacidade@chathook.com.br</span>
                </div>
              </div>
              <div className="text-[10px] text-muted-foreground/50 text-center">
                Prazo médio de resposta: 48h úteis.
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LgpdCompliance;
