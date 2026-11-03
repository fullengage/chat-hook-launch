import React, { useState } from "react";
import { 
  ExternalLink, 
  MessageCircle, 
  CheckCircle2, 
  Search, 
  Mail, 
  TrendingUp, 
  Sparkles, 
  BarChart3, 
  Menu, 
  X
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5511955501090?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20a%20Deepson.";
const PLATFORM_URL = "http://chat.deepson.com.br/";

const Index: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Interactive Calculator State
  const [ticket, setTicket] = useState(5000);
  const [margin, setMargin] = useState(40);
  const [conversion, setConversion] = useState(10);
  const [allocation, setAllocation] = useState(30);

  const calculatedLeadValue = (ticket * (margin / 100) * (conversion / 100) * (allocation / 100));
  const estimatedBudget = calculatedLeadValue * 20;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans antialiased selection:bg-[#ff6b00] selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-[#070d19]/95 backdrop-blur-md border-b border-[#1e293b] transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <img
              src="/logo-deepson.jpg"
              alt="Deepson — Inteligência de Dados B2B"
              className="h-12 w-auto object-contain rounded"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-200">
            <a href="#solucao" className="hover:text-[#ff6b00] transition-colors">Solução</a>
            <a href="#metodologia" className="hover:text-[#ff6b00] transition-colors">Metodologia</a>
            <a href="#simulador" className="hover:text-[#ff6b00] transition-colors">Simulador</a>
            <a 
              href={PLATFORM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#ff6b00] transition-colors flex items-center gap-1.5"
            >
              Plataforma <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff6b00] hover:bg-[#ea580c] text-white px-5 py-2.5 rounded-full font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Fale conosco ↗
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-white hover:bg-[#1e293b] rounded-lg transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#070d19] border-b border-[#1e293b] px-6 py-6 flex flex-col gap-4 shadow-xl text-white">
            <a 
              href="#solucao" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-200 hover:text-[#ff6b00] py-2 border-b border-[#1e293b]"
            >
              Solução
            </a>
            <a 
              href="#metodologia" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-200 hover:text-[#ff6b00] py-2 border-b border-[#1e293b]"
            >
              Metodologia
            </a>
            <a 
              href="#simulador" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-200 hover:text-[#ff6b00] py-2 border-b border-[#1e293b]"
            >
              Simulador
            </a>
            <a 
              href={PLATFORM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-base font-semibold text-[#ff6b00] py-2 flex items-center justify-between"
            >
              <span>Acessar Plataforma</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#ff6b00] hover:bg-[#ea580c] text-white py-3 rounded-full font-bold text-center mt-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              Fale conosco no WhatsApp ↗
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 md:py-28 bg-gradient-to-b from-[#f8fafc] via-[#fff7ed]/60 to-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/20 text-xs font-extrabold tracking-wider uppercase mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Inteligência de Dados B2B & Automação
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0f172a] tracking-tight leading-[1.08] mb-6">
                Menos contatos.<br />
                <span className="text-[#ff6b00]">Mais conversas que importam.</span>
              </h1>

              <p className="text-lg md:text-xl text-[#475569] leading-relaxed max-w-2xl mb-8">
                A <strong>Deepson</strong> combina inteligência de dados B2B, automação e inteligência artificial para encontrar potenciais compradores e identificar quem demonstra real interesse em sua solução.
              </p>

              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-6">
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#ff6b00] hover:bg-[#ea580c] text-white px-8 py-4 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  Quero conhecer a Deepson ↗
                </a>

                <a 
                  href={PLATFORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-[#ff6b00] text-[#ff6b00] hover:bg-[#ff6b00] hover:text-white px-8 py-4 rounded-full font-bold text-base transition-all transform hover:-translate-y-0.5"
                >
                  Conhecer a plataforma →
                </a>
              </div>

              <p className="text-xs font-semibold text-[#64748b]">
                ✦ Uma empresa do Grupo FullWeb • Inteligência de Dados B2B & Conversas
              </p>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="bg-gradient-to-tr from-[#ff6b00] to-[#fb923c] p-1.5 rounded-3xl shadow-2xl">
                  <div className="bg-[#070d19] rounded-[22px] p-6 text-white relative overflow-hidden">
                    <div className="mb-5 rounded-xl overflow-hidden border border-white/10 bg-[#070d19]">
                      <img
                        src="/logo-deepson.jpg"
                        alt="Deepson — Inteligência de Dados B2B"
                        className="w-full h-auto object-cover"
                      />
                    </div>

                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                        <span className="ml-2 text-xs font-bold text-white/80">Painel Deepson Live</span>
                      </div>
                      <span className="text-[11px] uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/30">
                        Ativo
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                        <span className="block text-xl font-black text-white">2,45 mi</span>
                        <span className="text-[10px] text-white/60">Empresas mapeadas</span>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                        <span className="block text-xl font-black text-[#ff6b00]">38.420</span>
                        <span className="text-[10px] text-white/60">Oportunidades</span>
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                        <span className="block text-xl font-black text-emerald-400">26,4%</span>
                        <span className="text-[10px] text-white/60">Qualificação</span>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center justify-between">
                        <div>
                          <p className="text-sm font-bold text-white">Empresa Alfa Corp</p>
                          <p className="text-xs text-white/60">Solicitou demonstração da IA</p>
                        </div>
                        <span className="bg-emerald-500/20 text-emerald-300 text-[11px] font-bold px-2.5 py-1 rounded-full border border-emerald-500/30">
                          Interessado
                        </span>
                      </div>

                      <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center justify-between">
                        <div>
                          <p className="text-sm font-bold text-white">Grupo Beta Log</p>
                          <p className="text-xs text-white/60">Pediu proposta comercial</p>
                        </div>
                        <span className="bg-emerald-500/20 text-emerald-300 text-[11px] font-bold px-2.5 py-1 rounded-full border border-emerald-500/30">
                          Interessado
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-4 bg-white border border-[#fed7aa] px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ff6b00] text-white flex items-center justify-center font-bold">
                    ✦
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold uppercase tracking-wider text-[#ff6b00]">
                      Inteligência B2B
                    </span>
                    <span className="text-sm font-bold text-[#0f172a]">
                      Dados que geram negócios
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Ribbon Bar */}
      <section className="bg-[#0b111e] text-slate-100 py-5 border-y border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-xs md:text-sm font-bold tracking-wide uppercase">
          <div className="flex items-center gap-2">
            <span className="text-white bg-[#ff6b00] rounded-full w-5 h-5 inline-flex items-center justify-center text-[11px]">✓</span>
            Pesquisa orientada por dados
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white bg-[#ff6b00] rounded-full w-5 h-5 inline-flex items-center justify-center text-[11px]">✓</span>
            Abordagem com contexto
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white bg-[#ff6b00] rounded-full w-5 h-5 inline-flex items-center justify-center text-[11px]">✓</span>
            Interesse demonstrado
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white bg-[#ff6b00] rounded-full w-5 h-5 inline-flex items-center justify-center text-[11px]">✓</span>
            Grupo FullWeb
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="solucao" className="py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#ff6b00] mb-3 block">
            ✦ O problema que resolvemos
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-6">
            Seu time deveria estar vendendo. Não procurando quem abordar.
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed">
            Buscar empresas, organizar contatos, personalizar mensagens e acompanhar respostas exige tempo. Nossa proposta é transformar essas etapas em uma operação de prospecção e atendimento mais simples e mensurável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-[#e2e8f0] p-8 rounded-3xl shadow-sm hover:shadow-md hover:border-[#fdba74] transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#fff7ed] border border-[#ffedd5] text-[#ff6b00] flex items-center justify-center mb-6">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-[#0f172a] mb-3">Encontramos o perfil certo</h3>
            <p className="text-[#475569] text-sm leading-relaxed">
              Mapeamos empresas por setor, localização, porte e critérios de ICP definidos sob medida para o seu negócio.
            </p>
          </div>

          <div className="bg-white border border-[#e2e8f0] p-8 rounded-3xl shadow-sm hover:shadow-md hover:border-[#fdba74] transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#fff7ed] border border-[#ffedd5] text-[#ff6b00] flex items-center justify-center mb-6">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-[#0f172a] mb-3">Iniciamos conversas</h3>
            <p className="text-[#475569] text-sm leading-relaxed">
              Planejamos abordagens contextualizadas, com automação, inteligência artificial e supervisão humana.
            </p>
          </div>

          <div className="bg-white border border-[#e2e8f0] p-8 rounded-3xl shadow-sm hover:shadow-md hover:border-[#fdba74] transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#fff7ed] border border-[#ffedd5] text-[#ff6b00] flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-[#0f172a] mb-3">Organizamos o interesse</h3>
            <p className="text-[#475569] text-sm leading-relaxed">
              Respostas positivas são analisadas e encaminhadas com evidência e contexto para o time de fechamento.
            </p>
          </div>
        </div>
      </section>

      {/* Product Vision & Platform CTA */}
      <section className="py-24 bg-[#f1f5f9] border-y border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#ff6b00] mb-3 block">
                ✦ Visão do produto
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-6">
                Um processo inteiro. Uma experiência simples.
              </h2>
              <p className="text-lg text-[#475569] leading-relaxed mb-8">
                A experiência que estamos construindo começa pelo seu produto e pelo cliente ideal — não por uma planilha interminável.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Defina o perfil do comprador ideal (ICP) com mais de 2,4 milhões de empresas mapeadas",
                  "Acompanhe oportunidades e o andamento da campanha em tempo real",
                  "Visualize respostas e sinais de real interesse comercial",
                  "Entenda quais abordagens e segmentos geram maior crescimento"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-base font-semibold text-[#0f172a]">
                    <CheckCircle2 className="w-5 h-5 text-[#ff6b00] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={PLATFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#ff6b00] hover:bg-[#ea580c] text-white px-8 py-4 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                Conhecer a plataforma →
              </a>
            </div>

            <div className="bg-white border border-[#e2e8f0] rounded-3xl overflow-hidden shadow-xl">
              <div className="bg-[#0b111e] text-white px-6 py-4 flex items-center justify-between">
                <span className="text-sm font-bold flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#ff6b00]" />
                  Ecossistema Deepson B2B
                </span>
                <span className="text-xs font-bold text-[#ff6b00] bg-[#ff6b00]/15 border border-[#ff6b00]/30 px-3 py-1 rounded-full">
                  Plataforma
                </span>
              </div>

              <img
                src="/dashboard-deepson.jpg"
                alt="Painel Deepson — Inteligência de Mercado B2B"
                className="w-full h-auto object-cover border-b border-[#e2e8f0]"
              />

              <div className="p-6 space-y-3">
                <div className="p-4 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#fdba74] transition-colors">
                  <h4 className="font-bold text-[#0f172a] flex items-center justify-between">
                    <span>Inteligência de Mercado & Base B2B</span>
                    <span className="text-xs bg-[#fff7ed] text-[#ff6b00] border border-[#fed7aa] px-2.5 py-0.5 rounded-full font-bold">Dados B2B</span>
                  </h4>
                  <p className="text-xs text-[#475569] mt-1">Segmentação avançada por CNPJ, porte, setor e evolução de oportunidades.</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#fdba74] transition-colors">
                  <h4 className="font-bold text-[#0f172a] flex items-center justify-between">
                    <span>Atendimento, IA & Automação WhatsApp</span>
                    <span className="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold">IA Ativa</span>
                  </h4>
                  <p className="text-xs text-[#475569] mt-1">Triagem 24/7 com inteligência artificial, múltiplos atendentes e Kanban integrado.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="metodologia" className="py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#ff6b00] mb-3 block">
            ✦ Nossa proposta
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-6">
            Você compra a oportunidade de conversar. Não apenas acesso a uma lista.
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed">
            Construímos uma operação com critérios claros de interesse, rastreabilidade das respostas e modelo comercial alinhado ao valor que cada oportunidade pode gerar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-[#e2e8f0] p-8 rounded-3xl hover:border-[#fdba74] transition-colors">
            <span className="text-xs font-black uppercase tracking-wider text-[#ff6b00] mb-4 block">
              01 / TRANSPARÊNCIA
            </span>
            <h3 className="text-xl font-black text-[#0f172a] mb-3">Interesse verificável</h3>
            <p className="text-[#475569] text-sm leading-relaxed">
              Registro completo da interação e do motivo exato pelo qual uma resposta foi considerada positiva.
            </p>
          </div>

          <div className="bg-white border border-[#e2e8f0] p-8 rounded-3xl hover:border-[#fdba74] transition-colors">
            <span className="text-xs font-black uppercase tracking-wider text-[#ff6b00] mb-4 block">
              02 / INTELIGÊNCIA
            </span>
            <h3 className="text-xl font-black text-[#0f172a] mb-3">Aprendizado comercial</h3>
            <p className="text-[#475569] text-sm leading-relaxed">
              Análise contínua das abordagens e dos segmentos que geram as melhores taxas de resposta observadas.
            </p>
          </div>

          <div className="bg-white border border-[#e2e8f0] p-8 rounded-3xl hover:border-[#fdba74] transition-colors">
            <span className="text-xs font-black uppercase tracking-wider text-[#ff6b00] mb-4 block">
              03 / ECONOMIA
            </span>
            <h3 className="text-xl font-black text-[#0f172a] mb-3">Viabilidade antes de volume</h3>
            <p className="text-[#475569] text-sm leading-relaxed">
              Uma avaliação precisa do ticket, margem e conversão para estudar o custo aceitável e rentável por oportunidade.
            </p>
          </div>
        </div>
      </section>

      {/* Simulator Section */}
      <section id="simulador" className="py-24 bg-[#f1f5f9] border-t border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#ff6b00] mb-3 block">
                ✦ Ferramenta Interativa
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-6">
                Quanto pode valer um lead interessado?
              </h2>
              <p className="text-base text-[#475569] leading-relaxed mb-8">
                Ajuste os parâmetros abaixo para calcular o teto indicativo de investimento por lead com base na economia real do seu negócio:
              </p>

              <div className="bg-white border border-[#e2e8f0] p-6 rounded-3xl space-y-5 shadow-md">
                <div>
                  <div className="flex justify-between text-xs font-bold text-[#0f172a] mb-1.5">
                    <label>Valor médio da venda (Ticket R$)</label>
                    <span className="text-[#ff6b00]">R$ {ticket.toLocaleString("pt-BR")}</span>
                  </div>
                  <input 
                    type="range" 
                    min="500" 
                    max="50000" 
                    step="500"
                    value={ticket}
                    onChange={(e) => setTicket(Number(e.target.value))}
                    className="w-full accent-[#ff6b00]" 
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-[#0f172a] mb-1.5">
                    <label>Margem de contribuição (%)</label>
                    <span className="text-[#ff6b00]">{margin}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="90" 
                    value={margin}
                    onChange={(e) => setMargin(Number(e.target.value))}
                    className="w-full accent-[#ff6b00]" 
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-[#0f172a] mb-1.5">
                    <label>Taxa de conversão estimada (%)</label>
                    <span className="text-[#ff6b00]">{conversion}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="50" 
                    value={conversion}
                    onChange={(e) => setConversion(Number(e.target.value))}
                    className="w-full accent-[#ff6b00]" 
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-[#0f172a] mb-1.5">
                    <label>Parcela destinada à aquisição (%)</label>
                    <span className="text-[#ff6b00]">{allocation}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="60" 
                    value={allocation}
                    onChange={(e) => setAllocation(Number(e.target.value))}
                    className="w-full accent-[#ff6b00]" 
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#0b111e] text-white p-8 md:p-10 rounded-3xl shadow-2xl border border-[#1e293b] relative overflow-hidden">
                <span className="text-xs font-black uppercase tracking-wider text-[#ff6b00] mb-2 block">
                  ✦ Resultado da Simulação
                </span>
                <h3 className="text-2xl font-bold mb-6">Uma conta que começa pela sua margem.</h3>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                  <span className="text-xs text-slate-300 uppercase tracking-wider block mb-1">
                    Teto indicativo por lead interessado:
                  </span>
                  <div className="text-4xl md:text-5xl font-black text-[#ff6b00]">
                    {calculatedLeadValue.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                  </div>
                  <p className="text-xs text-slate-300 mt-3">
                    Orçamento indicativo para pacote de 20 oportunidades:{" "}
                    <strong className="text-white">{estimatedBudget.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</strong>
                  </p>
                </div>

                <p className="text-xs text-slate-400 mb-8 leading-relaxed">
                  Fórmula: ticket × margem × taxa de conversão × parcela de aquisição. Use estes valores como referência estratégica para planejar o retorno da sua operação.
                </p>

                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#ff6b00] hover:bg-[#ea580c] text-white py-4 rounded-full font-bold text-base shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  Discutir uma campanha com a Deepson ↗
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#070d19] via-[#0b111e] to-[#131f33] text-white text-center relative overflow-hidden border-t-4 border-[#ff6b00]">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="text-xs font-black uppercase tracking-widest text-[#fb923c] mb-4 block">
            ✦ Seu próximo passo
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
            Vamos encontrar seu próximo negócio?
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Conheça nossa proposta de inteligência de dados B2B, automação, prospecção e atendimento comercial e converse sobre um piloto adequado ao seu mercado.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#ff6b00] hover:bg-[#ea580c] text-white px-9 py-4 rounded-full font-bold text-base shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Conversar com a Deepson ↗
            </a>

            <a 
              href={PLATFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white/60 hover:border-[#ff6b00] hover:text-[#ff6b00] text-white px-8 py-4 rounded-full font-bold text-base transition-all transform hover:-translate-y-0.5"
            >
              Conhecer a plataforma →
            </a>
          </div>

          <p className="text-xs text-slate-400 mt-8">
            WhatsApp Direto: +55 (11) 95550-1090
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#070d19] text-slate-400 py-16 border-t border-[#1e293b]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <img
              src="/logo-deepson.jpg"
              alt="Deepson — Inteligência de Dados B2B"
              className="h-12 w-auto object-contain mb-3 rounded"
            />
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 block mb-3">
              Uma empresa do Grupo FullWeb
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Inteligência de dados B2B, atendimento e automação para escalar suas vendas.
            </p>
          </div>

          <div>
            <h5 className="text-xs font-black uppercase tracking-wider text-white mb-4">Plataforma</h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b00] transition-colors flex items-center gap-1">
                  Acessar Plataforma <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li><a href="#solucao" className="hover:text-[#ff6b00] transition-colors">Nossa Solução</a></li>
              <li><a href="#metodologia" className="hover:text-[#ff6b00] transition-colors">Como Funciona</a></li>
              <li><a href="#simulador" className="hover:text-[#ff6b00] transition-colors">Simulador de ROI</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-black uppercase tracking-wider text-white mb-4">Institucional</h5>
            <ul className="space-y-2.5 text-xs">
              <li><a href="/termos-de-uso" className="hover:text-[#ff6b00] transition-colors">Termos de Uso</a></li>
              <li><a href="/privacidade" className="hover:text-[#ff6b00] transition-colors">Política de Privacidade</a></li>
              <li><a href="/lgpd" className="hover:text-[#ff6b00] transition-colors">LGPD & Compliance</a></li>
              <li><a href="/exclusao-de-dados" className="hover:text-[#ff6b00] transition-colors">Exclusão de Dados</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-black uppercase tracking-wider text-white mb-4">Atendimento</h5>
            <p className="text-xs text-slate-400 mb-3">
              Fale diretamente com nosso time comercial:
            </p>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#ff6b00] hover:underline"
            >
              <MessageCircle className="w-4 h-4 text-[#ff6b00]" />
              +55 (11) 95550-1090 ↗
            </a>
            <p className="text-[11px] text-slate-500 mt-4">
              © {new Date().getFullYear()} Deepson. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
