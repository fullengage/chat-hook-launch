import { MessageCircle, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-background pt-8 pb-16 px-4">
      <div className="container mx-auto max-w-6xl bg-gradient-to-b from-muted/40 to-muted/20 backdrop-blur-xl border border-border/80 rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Internal glow for premium aesthetics */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10" />
        
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <img src="/icons.png" alt="Logo" className="w-20 h-auto object-contain" width={80} height={80} />
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              O CRM inteligente que transforma seu WhatsApp em uma operação profissional de vendas e atendimento.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">contato@chathook.com.br</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+55 17 99791-5318</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Plataforma</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#kanban" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  CRM & Kanban
                </a>
              </li>
              <li>
                <a href="/#captain-ia" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Agendamento com IA
                </a>
              </li>
              <li>
                <a href="/#features" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="/#security" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Segurança & LGPD
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="/#implementation" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Implantação
                </a>
              </li>
              <li>
                <a href="/#plans-section" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Planos e Preços
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Documentação
                </a>
              </li>
              <li>
                <Link to="/contato" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3 flex flex-col">
              <li>
                <Link to="/termos-de-uso" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/lgpd" className="text-[10px] uppercase tracking-widest text-muted-foreground/60 hover:text-primary transition-colors duration-200 font-bold">
                  LGPD Compliance
                </Link>
              </li>
              <li>
                <Link to="/exclusao-de-dados" className="text-[10px] uppercase tracking-widest text-muted-foreground/60 hover:text-primary transition-colors duration-200 font-bold">
                  Exclusão de Dados
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Unified Bottom Section - All on the same horizontal line on desktop */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col lg:flex-row lg:items-center justify-between gap-6 text-[10px] sm:text-xs text-muted-foreground">
          {/* Company details, CNPJ & Terms info on a single horizontal row */}
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 flex-wrap">
            <span className="font-bold text-foreground">CHATHOOK CRM - SOFTWARE E TECNOLOGIA LTDA</span>
            <span className="hidden md:inline text-border/40">|</span>
            <span>CNPJ: 19.904.935/0001-20 | Mogi das Cruzes, SP</span>
            <span className="hidden md:inline text-border/40">|</span>
            <span className="text-muted-foreground/60">
              O uso deste site e plataforma está sujeito aos nossos termos e políticas vigentes.
            </span>
          </div>
          
          {/* Copyright & Social links on the same line */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 xl:gap-6 w-full lg:w-auto justify-between shrink-0">
            <span>© {new Date().getFullYear()} Chathook. Todos os direitos reservados.</span>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/richardportela/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/chathook/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@Chathook-e4z" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;