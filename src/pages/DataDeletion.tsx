import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, Shield, Trash2, UserX, Database, FileX, CheckCircle2, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { submitDataDeletionRequest } from "@/services/leadService";

const DataDeletion = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [details, setDetails] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !details.trim()) return;
    setSubmitting(true);
    setErrorMsg("");

    const result = await submitDataDeletionRequest({
      name,
      email,
      phone,
      company,
      details,
      locale: "pt-br",
      page: "/exclusao-de-dados",
    });

    setSubmitting(false);
    if (result.ok) {
      setSubmitted(true);
    } else {
      setErrorMsg(result.errorMessage ?? "Erro ao enviar solicitação.");
    }
  };

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
            <Trash2 className="w-10 h-10" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Privacidade</span>
            <h1 className="text-4xl font-black italic">
              Solicitação de <span className="text-primary">Exclusão de Dados</span>
            </h1>
          </div>
        </div>

        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          Sua privacidade é importante para nós. Caso deseje excluir seus dados pessoais armazenados pela DeepB2B / Deepson, utilize o formulário abaixo.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">O que você pode solicitar:</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <UserX className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground">Exclusão da conta</h3>
                    <p className="text-sm text-muted-foreground">Remoção de conta e credenciais de acesso na plataforma.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground">Opt-out de prospecção B2B</h3>
                    <p className="text-sm text-muted-foreground">Oposição à exibição de contato corporativo individual.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileX className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground">Exclusão dos dados pessoais</h3>
                    <p className="text-sm text-muted-foreground">Eliminação de dados informados em formulários comerciais.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground">Revogação de consentimentos</h3>
                    <p className="text-sm text-muted-foreground">Cancelamento de autorizações para comunicações.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6">
              <h3 className="font-bold text-foreground mb-2">Contato Alternativo</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Você também pode escrever diretamente para nossa equipe de privacidade:
              </p>
              <a href="mailto:privacidade@deepson.com.br" className="text-primary font-bold hover:underline">
                privacidade@deepson.com.br
              </a>
            </section>
          </div>

          <div>
            <div className="bg-background border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-6">Formulário de Solicitação</h2>

              {submitted ? (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-sm text-emerald-200 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400 mt-0.5" />
                  <p>Solicitação registrada com sucesso. Nossa equipe responderá por e-mail.</p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" placeholder="Seu nome completo" value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="seu.email@exemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" placeholder="(00) 00000-0000" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa (opcional)</Label>
                      <Input id="company" placeholder="Nome da empresa" value={company} onChange={(e) => setCompany(e.target.value)} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details">Detalhes da solicitação</Label>
                    <Textarea id="details" placeholder="Descreva os dados que deseja revisar ou excluir" value={details} onChange={(e) => setDetails(e.target.value)} required />
                  </div>

                  {errorMsg && <p className="text-xs text-red-400">{errorMsg}</p>}

                  <Button type="submit" disabled={submitting} className="w-full">
                    {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Enviar Solicitação
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDeletion;
