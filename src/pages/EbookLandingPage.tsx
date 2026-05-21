import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, CheckCircle, Download, ArrowRight, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EbookLandingPage = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
  });

  useEffect(() => {
    document.title = "Ebook Gratuito: Como Faturar R$1 Milhão por Mês Sem Novos Clientes | ChatHook";
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulação de envio da API webhook/supabase
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Ebook enviado com sucesso!", {
        description: "Verifique sua caixa de entrada e WhatsApp.",
      });
      setFormData({ nome: "", email: "", whatsapp: "" });
    } catch (error) {
      toast.error("Erro ao solicitar o ebook.", {
        description: "Por favor, tente novamente em alguns instantes.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Header />

      <main className="flex-1 pb-16 pt-24">
        {/* Banner Hero */}
        <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
          <div className="absolute inset-0 z-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center justify-between">
              
              {/* Copy lado esquerdo */}
              <div className="flex-1 text-center lg:text-left space-y-8">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-2">
                  <BookOpen className="mr-2 h-4 w-4" /> Ebook Gratuito
                </div>
                
                <h1 className="text-4xl hover:text-primary transition-colors duration-300 md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
                  Como Faturar <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-400">R$1 Milhão por Mês</span> <br className="hidden md:block" />
                  Sem Novos Clientes
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed text-balance">
                  Descubra os segredos de retenção, upsell e automação que as maiores empresas usam para maximizar o lucro da base atual. Um guia definitivo para previsibilidade de caixa.
                </p>

                <div className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0 text-left text-muted-foreground mt-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                    <span><strong>Estratégias de LTV:</strong> Como fazer o cliente comprar de novo (e mais caro).</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                    <span><strong>Mecanismo de Retenção:</strong> Reduza o churn com atendimento ativo via WhatsApp.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                    <span><strong>Funis Automáticos:</strong> Implemente IA para engajar sua base parada em minutos.</span>
                  </div>
                </div>
              </div>

              {/* Form de Captura lado direito */}
              <div className="w-full max-w-md lg:w-[450px]">
                <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                    <Download className="w-48 h-48" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">Baixe Agora</h3>
                      <p className="text-sm text-muted-foreground">Preencha os dados abaixo para receber o ebook imediatamente.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2 text-left">
                        <Label htmlFor="nome">Nome Completo</Label>
                        <Input 
                          id="nome" 
                          placeholder="Ex: João da Silva" 
                          required 
                          value={formData.nome}
                          onChange={handleChange}
                          className="bg-background"
                        />
                      </div>
                      
                      <div className="space-y-2 text-left">
                        <Label htmlFor="email">Email Profissional</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="joao@empresa.com.br" 
                          required 
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-background"
                        />
                      </div>

                      <div className="space-y-2 text-left">
                        <Label htmlFor="whatsapp">WhatsApp</Label>
                        <Input 
                          id="whatsapp" 
                          type="tel" 
                          placeholder="(11) 99999-9999" 
                          required 
                          value={formData.whatsapp}
                          onChange={handleChange}
                          className="bg-background"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full font-bold text-md mt-4 group transition-all duration-300 shadow-md hover:shadow-primary/25"
                        disabled={loading}
                      >
                        {loading ? "Enviando..." : "Quero Meu Ebook Grátis"}
                        {!loading && <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
                      </Button>
                      <p className="text-xs text-center text-muted-foreground mt-4 flex items-center justify-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Seus dados estão 100% seguros.
                      </p>
                    </form>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Por que ler este ebook? Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">O que você vai aprender?</h2>
              <p className="text-muted-foreground text-lg">
                Um material prático, focado em trazer resultados imediatos usando a sua base atual de clientes, sem gastar 1 centavo a mais em anúncios.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-card p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Lucro Imediato</h3>
                <p className="text-muted-foreground">Técnicas prontas para aplicar hoje e reativar clientes que compraram de você há mais de 6 meses.</p>
              </div>
              <div className="bg-card p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Framework Exclusivo</h3>
                <p className="text-muted-foreground">O passo a passo para criar esteiras de produtos que funcionam de forma automática no WhatsApp.</p>
              </div>
              <div className="bg-card p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Comunidade e Fidelização</h3>
                <p className="text-muted-foreground">Como transformar compradores comuns em verdadeiros fãs da sua marca que indicam novos leads orgânicos.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EbookLandingPage;
