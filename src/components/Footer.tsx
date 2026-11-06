import { Mail, Phone, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#040f21] pt-8 pb-16 px-4 border-t border-white/10">
      <div className="container mx-auto max-w-6xl bg-[#07152e]/90 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Internal glow for premium aesthetics */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10" />
        
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-5">
              <Link to="/">
                <img src="/logo-deepson.png" alt="Deepson — Inteligência de Dados B2B" className="h-11 w-auto object-contain" />
              </Link>
            </div>
            <p className="text-slate-300 mb-6 text-sm leading-relaxed">
              Plataforma de inteligência comercial B2B com IA: informe o site da sua empresa, identifique seu cliente ideal (ICP), encontre empresas compatíveis e acesse contatos, decisores e sinais financeiros.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm">contato@deepson.com.br</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="https://wa.me/5511955501090?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20o%20Deepson."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary transition-colors"
                >
                  +55 (11) 95550-1090
                </a>
              </div>
            </div>
          </div>

          {/* Plataforma */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Plataforma</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/teste-gratis" className="text-sm text-primary font-bold hover:underline transition-colors duration-200">
                  Teste Grátis (7 dias + 20 créditos)
                </Link>
              </li>
              <li>
                <a href="https://chat.deepson.com.br/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-300 hover:text-primary transition-colors duration-200 inline-flex items-center gap-1.5">
                  Acessar Plataforma <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a href="/#solucao" className="text-sm text-slate-300 hover:text-primary transition-colors duration-200">
                  Solução de Prospecção B2B
                </a>
              </li>
              <li>
                <a href="/#metodologia" className="text-sm text-slate-300 hover:text-primary transition-colors duration-200">
                  Como Funciona (4 Passos)
                </a>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Comercial</h3>
            <ul className="space-y-3">
              <li>
                <a href="#plans-section" className="text-sm text-slate-300 hover:text-primary transition-colors duration-200">
                  Planos e Tabela de Créditos
                </a>
              </li>
              <li>
                <a href="/#simulador" className="text-sm text-slate-300 hover:text-primary transition-colors duration-200">
                  Simulador de Viabilidade (ROI)
                </a>
              </li>
              <li>
                <Link to="/contato" className="text-sm text-slate-300 hover:text-primary transition-colors duration-200">
                  Falar com Especialista
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Legal & Dados</h3>
            <ul className="space-y-3 flex flex-col">
              <li>
                <Link to="/termos-de-uso" className="text-sm text-slate-300 hover:text-primary transition-colors duration-200">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-sm text-slate-300 hover:text-primary transition-colors duration-200">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/lgpd" className="text-xs uppercase tracking-wider text-slate-400 hover:text-primary transition-colors duration-200 font-bold">
                  Governança & Direitos LGPD
                </Link>
              </li>
              <li>
                <Link to="/exclusao-de-dados" className="text-xs uppercase tracking-wider text-slate-400 hover:text-primary transition-colors duration-200 font-bold">
                  Solicitar Exclusão / Opt-out
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 text-[11px] sm:text-xs text-slate-400">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 flex-wrap">
            <span className="font-bold text-white">DEEPSON - INTELIGENCIA DE DADOS E TECNOLOGIA LTDA</span>
            <span className="hidden md:inline text-white/20">|</span>
            <span>CNPJ: 19.904.935/0001-20 | Mogi das Cruzes, SP • Grupo FullWeb</span>
            <span className="hidden md:inline text-white/20">|</span>
            <span className="text-slate-400">
              Dados empresariais de fontes públicas oficiais (Receita Federal, PGFN e cartórios).
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 xl:gap-6 w-full lg:w-auto justify-between shrink-0">
            <span>© {new Date().getFullYear()} Deepson. Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
