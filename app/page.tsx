"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

function InstagramIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const WHATSAPP_NUMBER = "5535991906280";
const PHONE_DISPLAY = "(35) 99190-6280";
const EMAIL_CONTACT = "contato@advocaciaalp.com.br";

const INSTAGRAM_URL = "https://www.instagram.com/advocacia_alp/";
const INSTAGRAM_HANDLE = "@advocacia_alp";

const ADDRESS_TEXT =
  "R. Joaquim Bento Carvalho, 108 - Sl 2 - Centro, Três Corações - MG, 37410-000, Brasil";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=ALP+Advocacia+e+Consultoria+R.+Joaquim+Bento+Carvalho+108+Centro+Tr%C3%AAs+Cora%C3%A7%C3%B5es+MG";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de agendar uma consulta jurídica com o escritório ALP Advocacia e Consultoria.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } },
};

interface PracticeArea {
  id: string;
  title: string;
  icon: typeof Scale;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "direito-transito",
    title: "Direito de Trânsito",
    icon: ShieldAlert,
    tag: "Defesa de CNH & Infrações",
    summary:
      "Defesa especializada contra suspensão e cassação da CNH, Lei Seca (bafômetro), multas graves e penalidades indevidas.",
    details:
      "Atuação rápida e técnica para resguardar o seu direito de dirigir. Defendemos condutores e frotas perante os órgãos de trânsito (DETRAN, JARI, CETRAN) e na Justiça, com pedidos liminares para cancelamento de penalidades abusivas, desbloqueio de CNH e anulação de processos punitivos instaurados com vícios formais.",
    topics: [
      "Processos de Suspensão e Cassação do Direito de Dirigir",
      "Defesa na Lei Seca (Art. 165 e 165-A do CTB / Bafômetro)",
      "Recursos administrativos perante JARI e CETRAN em todas as instâncias",
      "Ações Judiciais Anulatórias com pedido de Liminar para desbloqueio de CNH",
      "Defesa estratégica para Motoristas Profissionais (EAR) e Transportadores",
      "Anulação de multas lavradas com falha de notificação ou vícios materiais",
    ],
    whatsAppText:
      "Olá, Dra. Ana Letícia! Preciso de orientação e defesa especializada em Direito de Trânsito e CNH.",
  },
  {
    id: "direito-familia",
    title: "Direito de Família & Sucessões",
    icon: HeartHandshake,
    tag: "Acolhimento & Resguardo",
    summary:
      "Condução sensível, firme e discreta para resguardar vínculos afetivos, menores e a integridade do patrimônio familiar.",
    details:
      "Demandas familiares exigem empatia emocional aliada a profundo rigor técnico. Conduzimos divórcios consensuais e litigiosos, garantindo partilha justa e proteção de patrimônio. Atuamos com prioridade no bem-estar dos filhos em ações de guarda, convivência e pensão alimentícia, além de inventários rápidos em cartório ou via judicial.",
    topics: [
      "Divórcio Consensual em Cartório e Divórcio Litigioso Complexo",
      "Partilha de Bens e Proteção do Patrimônio Familiar",
      "Pensão Alimentícia: Fixação, Cobrança Executiva e Revisional de Valor",
      "Guarda Compartilhada e Regulamentação do Direito de Convivência Familiar",
      "Inventários Judiciais e Extrajudiciais Ágeis em Cartório",
      "Reconhecimento e Dissolução de União Estável",
    ],
    whatsAppText:
      "Olá, Dra. Ana Letícia! Gostaria de uma consulta especializada em Direito de Família e Sucessões.",
  },
  {
    id: "direito-previdenciario",
    title: "Direito Previdenciário (INSS)",
    icon: Landmark,
    tag: "Benefícios & Aposentadorias",
    summary:
      "Planejamento previdenciário minucioso, concessão das melhores aposentadorias e reversão de benefícios negados pelo INSS.",
    details:
      "Garantimos que você receba o benefício previdenciário mais vantajoso, no momento exato e com cálculo correto. Atuamos na via administrativa junto ao INSS e na Justiça Federal, revertendo indeferimentos indevidos de aposentadorias, auxílios por incapacidade e benefícios assistenciais.",
    topics: [
      "Planejamento Previdenciário para conquista do melhor valor de aposentadoria",
      "Aposentadorias por Idade, Tempo de Contribuição, Especial e Rural",
      "Benefício de Prestação Continuada (BPC/LOAS) para Idosos e PCD",
      "Auxílio por Incapacidade Temporária (Auxílio-Doença) e Aposentadoria por Invalidez",
      "Pensão por Morte e Auxílio-Reclusão para dependentes",
      "Ações Judiciais contra o INSS para reversão de negativas e revisões de valor",
    ],
    whatsAppText:
      "Olá, Dra. Ana Letícia! Gostaria de consultar meus direitos previdenciários e benefícios do INSS.",
  },
  {
    id: "direito-civel",
    title: "Direito Cível & Contratos",
    icon: Scale,
    tag: "Alta Precisão Patrimonial",
    summary:
      "Elaboração e revisão minuciosa de contratos, reparação por danos, cobranças judiciais e resolução estratégica de conflitos.",
    details:
      "Com análise cirúrgica de cada cláusula e peça processual, protegemos seu patrimônio e prevenimos litígios onerosos. Atuamos na redação e revisão de contratos, execução de títulos de crédito, recuperação de valores, ações de despejo e reparação integral por danos materiais e morais.",
    topics: [
      "Ações de Reparação Civil por Danos Morais, Materiais e Estéticos",
      "Execução de Títulos, Cobranças Judiciais e Recuperação de Crédito",
      "Elaboração, análise preventiva e auditoria de contratos civis e comerciais",
      "Rescisões Contratuais e Cumprimento de Obrigações de Fazer",
      "Litígios Imobiliários, Ações de Despejo e Direitos Possessórios",
      "Resolução extrajudicial e contenciosa de conflitos patrimoniais",
    ],
    whatsAppText:
      "Olá, Dra. Ana Letícia! Gostaria de uma consulta especializada em Direito Cível e Contratos.",
  },
  {
    id: "direito-consumidor",
    title: "Direito do Consumidor",
    icon: ShieldCheck,
    tag: "Defesa dos Seus Direitos",
    summary:
      "Retirada de negativações indevidas no SPC/Serasa, combate a fraudes e golpes bancários, cobranças abusivas e indenizações.",
    details:
      "Defendemos o cidadão contra abusos cometidos por bancos, financeiras, concessionárias e prestadores de serviço. Atuamos com pedidos liminares urgentes para exclusão de restrições indevidas do seu nome, cancelamento de empréstimos fraudulentos e reparação financeira justa por danos sofridos.",
    topics: [
      "Ações contra Inscrição Indevida no SPC, Serasa e Cadastro de Inadimplentes",
      "Golpes Bancários, Empréstimos Consignados Não Autorizados e Fraudes via PIX",
      "Cobranças Abusivas, Juros Excessivos e Tarifas Bancárias Não Contratadas",
      "Indenizações por Falhas Graves em Serviços Essenciais (Luz, Água, Telefonia)",
      "Cancelamento e atraso de voos, extravio de bagagem e abusos de companhias",
      "Defesa perante Vícios e Defeitos Ocultos de Produtos e Serviços",
    ],
    whatsAppText:
      "Olá, Dra. Ana Letícia! Preciso de assessoria jurídica em uma causa de Direito do Consumidor.",
  },
  {
    id: "consultoria-juridica",
    title: "Consultoria Jurídica & Preventiva",
    icon: Briefcase,
    tag: "Prevenção & Estratégia",
    summary:
      "Blindagem preventiva para pessoas físicas e empresas, com negociações extrajudiciais seguras e gestão inteligente de riscos.",
    details:
      "A melhor vitória jurídica é aquela que soluciona o conflito antes que ele se torne um processo judicial custoso e demorado. Nossa consultoria analisa riscos, emite pareceres técnicos sólidos e conduz negociações extrajudiciais estratégicas com alto índice de resolutividade.",
    topics: [
      "Consultoria jurídica preventiva personalizada para pessoas físicas e empresas",
      "Negociações extrajudiciais e acordos estruturados com eficácia executiva",
      "Pareceres jurídicos fundamentados e análise de viabilidade de demandas",
      "Mitigação proativa de riscos legais, contratuais e operacionais",
      "Mediação estratégica e conciliação de interesses com segurança jurídica",
      "Assessoria continuada para planejamento pessoal e patrimonial",
    ],
    whatsAppText:
      "Olá, Dra. Ana Letícia! Gostaria de solicitar consultoria jurídica estratégica e preventiva.",
  },
];

function GoogleIcon({
  size = 16,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

const clientReviews = [
  {
    name: "Jaqueline Barbara",
    reviewsCount: "1 avaliação no Google",
    date: "Há 2 meses",
    content:
      "Profissional dedicada, e principalmente HONESTA! Recomendo sem medo. Antes de ser uma excelente advogada, é um ótimo ser HUMANO. Parabéns pela dedicação e comprometimento!",
  },
  {
    name: "Arthur Figueira Avezum",
    reviewsCount: "4 avaliações · 1 foto",
    date: "Há 3 anos",
    content:
      "Os advogados são minuciosos e atenciosos, se mostrando conhecedores profundos de soluções, com as mais excelentes resoluções a todas as questões jurídicas suscitadas. Recomendo a todos.",
    reply: "Muito obrigado!",
  },
  {
    name: "Debora Rangel Moura",
    reviewsCount: "2 avaliações no Google",
    date: "Há 2 meses",
    content:
      "Desde o início excelente atendimento. Todas as explicações são claras. Ótima profissional e ser humano.",
  },
  {
    name: "João Marcos",
    reviewsCount: "Local Guide · 6 avaliações",
    date: "Há 1 ano",
    content:
      "Atendimento incrível, com profissionais capacitados e excelentes, muito humanos que têm uma preocupação genuína em ajudar o cliente. Obrigado!",
    reply: "Muito obrigado pela avaliação!",
  },
  {
    name: "Bruno Gomes",
    reviewsCount: "1 avaliação no Google",
    date: "Há 3 anos",
    content:
      "Quero expressar minha profunda gratidão. Obrigado pelo seu apoio e quero agradecer sinceramente por tudo, sua generosidade e atenção com as pessoas. Muito obrigado e que Deus lhe abençoe infinitamente.",
    reply: "Muito obrigado. Deus abençoe também!",
  },
  {
    name: "Bruna Akauany",
    reviewsCount: "2 avaliações · 2 fotos",
    date: "Há 2 meses",
    content:
      "Ótima profissional, atenciosa, disposta, competente, indico de olhos fechados!",
  },
];

function Heading({
  eyebrow,
  children,
  description,
  light = false,
}: {
  eyebrow: string;
  children: ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={light ? "eyebrow-light mb-4" : "eyebrow mb-4"}>{eyebrow}</p>
      <h2
        className={
          light
            ? "font-serif text-4xl leading-[1.07] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.55rem]"
            : "font-serif text-4xl leading-[1.07] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.55rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-5 max-w-xl text-[15px] leading-7 text-white/70"
              : "mt-5 max-w-xl text-[15px] leading-7 text-ink-soft"
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<PracticeArea | null>(null);

  useEffect(() => {
    if (!activeArea) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveArea(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [activeArea]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-hidden bg-ivory text-ink">
        {/* Navigation Bar */}
        <header className="sticky top-0 z-40 border-b border-ink/10 bg-ivory/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[96px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[110px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="ALP Advocacia e Consultoria — Início"
              onClick={closeMenu}
              className="flex items-center gap-3 transition-opacity hover:opacity-95"
            >
              <Image
                src="/logo.png"
                width={1774}
                height={887}
                alt="ALP Advocacia e Consultoria"
                priority
                className="h-[68px] w-auto object-contain sm:h-[84px]"
              />
            </a>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-7 lg:flex"
            >
              <a className="nav-link" href="#inicio">
                Início
              </a>
              <a className="nav-link" href="#sobre">
                O Escritório
              </a>
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link" href="#proposito">
                Propósito
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (5,0 ★)
              </a>
              <a className="nav-link" href="#contato">
                Contato & Sede
              </a>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram ALP Advocacia e Consultoria"
                className="grid size-10 place-items-center rounded-full border border-ink/15 text-brand-700 transition-all hover:border-brand-700 hover:bg-brand-50 hover:text-brand-800"
                title="Siga no Instagram (@advocacia_alp)"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp da ALP Advocacia e Consultoria"
                className="grid size-10 place-items-center rounded-full border border-ink/15 text-brand-700 transition-all hover:border-brand-700 hover:bg-brand-50 hover:text-brand-800"
                title="Atendimento no WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl()}
                target="_blank"
                size="sm"
                className="rounded-full shadow-sm"
              >
                Consulta no WhatsApp <ArrowUpRight size={14} />
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-full border border-ink/15 text-ink lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navegação móvel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden border-t border-ink/10 bg-ivory px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["O Escritório & Advogada", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Propósito & Valores", "#proposito"],
                    ["Avaliações no Google (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-ink-soft hover:text-brand-700"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-3 flex flex-col gap-2">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.13em] text-white shadow-md transition-all hover:bg-brand-800"
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> Falar no WhatsApp: {PHONE_DISPLAY}
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-ink transition-all hover:border-brand-700"
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <InstagramIcon size={15} /> {INSTAGRAM_HANDLE}
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-ink/10"
        >
          {/* Subtle gold ambient orbs */}
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-brand-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-brand-100/50 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.div variants={reveal} className="eyebrow mb-6">
                <span className="size-2 rounded-full bg-brand-700 shrink-0" />
                <span>
                  Três Corações - MG · Centro · 5,0 ★ no Google (30 avaliações)
                </span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[3.1rem] leading-[0.98] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[4.75rem]"
              >
                Soluções jurídicas de{" "}
                <span className="italic text-brand-700 font-serif">
                  alta precisão
                </span>{" "}
                e compromisso absoluto com sua causa.
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8"
              >
                Atendimento humanizado, ético e resolutivo liderado pela{" "}
                <strong className="text-ink font-semibold">
                  Dra. Ana Letícia Pereira
                </strong>{" "}
                no escritório{" "}
                <strong className="text-ink font-semibold">
                  ALP Advocacia e Consultoria
                </strong>
                . Atuação especializada em Direito de Trânsito, Família, Cível,
                Previdenciário e Consumidor — com sede em Três Corações (MG) e
                atendimento em todo o Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar no WhatsApp
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-ink transition-colors hover:text-brand-700"
                >
                  Conhecer áreas de atuação{" "}
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-ink/10 pt-6 text-xs text-ink-soft"
              >
                <span className="inline-flex items-center gap-2 font-medium">
                  <Star size={15} className="fill-brand-700 text-brand-700" />{" "}
                  5,0 estrelas no Google (30 avaliações)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <ShieldCheck size={16} className="text-brand-700" /> Trânsito,
                  Família, Previdenciário & Cível
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={15} className="text-brand-700" /> Sede em Três
                  Corações - MG e atendimento digital
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Image Presentation - Dra. Ana Letícia Pereira */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[460px] lg:ml-auto lg:mr-2"
            >
              {/* Main portrait with luxury gold bezel */}
              <div className="relative aspect-[0.78] overflow-hidden rounded-3xl border border-brand-700/35 bg-brand-950 shadow-2xl ring-1 ring-brand-700/20">
                <Image
                  src="/dra-ana-leticia-advogada.jpg"
                  alt="Dra. Ana Letícia Pereira — ALP Advocacia e Consultoria"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 42vw"
                  className="object-cover object-[50%_15%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-950/95 via-brand-950/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dra. Ana Letícia Pereira
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-brand-200">
                      ALP Advocacia & Consultoria · Três Corações
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-brand-300/40 bg-brand-950/60 text-brand-200 backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating Google rating badge */}
              <div className="absolute -left-3 -bottom-3 sm:-left-5 rounded-2xl border border-brand-700/25 bg-white/95 p-3.5 shadow-card backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <GoogleIcon size={16} />
                  <div className="flex items-center gap-1 text-brand-700">
                    <Star size={13} className="fill-brand-700" />
                    <span className="font-serif text-base font-bold text-ink">
                      5,0 / 5,0
                    </span>
                  </div>
                </div>
                <p className="mt-0.5 text-[9px] uppercase tracking-wider text-ink-soft font-semibold">
                  30 Avaliações no Google
                </p>
              </div>

              {/* Floating authority badge */}
              <div className="absolute -right-3 top-6 sm:-right-5 rounded-full border border-brand-700/25 bg-ivory/95 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-brand-800 shadow-card backdrop-blur-md">
                RIGOR PROCESSUAL & ÉTICA
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-ink/10 bg-white/70"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              ["5,0 ★", "classificação máxima unânime com 30 avaliações no Google"],
              ["Trânsito & Família", "defesa estratégica de direitos essenciais"],
              ["Três Corações & Brasil", "sede no Centro e atendimento on-line seguro"],
              ["Atendimento Ágil", "ética, transparência e acolhimento direto"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-ink/10"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-3xl font-semibold text-brand-700">
                  {value}
                </span>
                <span className="max-w-[160px] text-[11px] leading-5 text-ink-soft">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Ana Letícia Pereira & O Escritório ALP */}
        <section
          id="sobre"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-20 lg:px-12">
            {/* Real Office photo with Três Corações Judicial Case Folder & Laptop */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[520px]"
            >
              <div className="relative aspect-[0.92] overflow-hidden rounded-[2px] bg-[#ded7d0] shadow-card">
                <Image
                  src="/escritorio-processos-tres-coracoes.jpg"
                  alt="Processos reais e ambiente de trabalho na ALP Advocacia e Consultoria em Três Corações - MG"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[320px] border-l-2 border-brand-700 bg-ivory px-5 py-4 shadow-card sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-brand-700">
                  <ShieldCheck size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
                    Advogada & Sócia-Fundadora
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-ink">
                  Dra. Ana Letícia Pereira
                </p>
                <p className="mt-1 text-[11px] font-medium text-brand-800">
                  ALP Advocacia e Consultoria
                </p>
                <p className="mt-1 text-[11px] leading-4 text-ink-soft">
                  Atuação dedicada em Trânsito, Família, Cível, Previdenciário e Consumidor.
                </p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2.5 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-800 hover:text-brand-700"
                >
                  <InstagramIcon size={13} /> {INSTAGRAM_HANDLE}
                </a>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l border-t border-brand-700/40 sm:-left-7 sm:-top-7 sm:size-32" />
            </motion.div>

            {/* Text description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.p variants={reveal} className="eyebrow">
                ADVOCACIA HUMANIZADA & RIGOR TÉCNICO
              </motion.p>
              <motion.h2
                variants={reveal}
                className="mt-4 max-w-2xl font-serif text-4xl leading-[1.09] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.45rem]"
              >
                Compromisso com a{" "}
                <span className="italic text-brand-700">verdade jurídica</span>{" "}
                e o respeito que sua causa exige.
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                O escritório{" "}
                <strong className="text-ink">
                  ALP Advocacia e Consultoria
                </strong>{" "}
                foi idealizado pela{" "}
                <strong className="text-ink">Dra. Ana Letícia Pereira</strong> com
                uma missão clara: proporcionar uma advocacia transparente,
                acessível e profundamente combativa. Cada caso é estudado de
                forma artesanal, buscando a solução técnica mais segura e
                vantajosa para o cliente.
              </motion.p>

              {/* Profile Highlight Card */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-sm border border-ink/10 bg-ivory/80 p-5 transition-all hover:border-brand-700/40 hover:bg-ivory"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-full border-2 border-brand-700/40 shadow-sm">
                    <Image
                      src="/dra-ana-leticia-diploma.jpg"
                      alt="Dra. Ana Letícia Pereira"
                      fill
                      className="object-cover object-[50%_20%]"
                    />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-brand-700">
                      Liderança Técnica
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-ink">
                      Dra. Ana Letícia Pereira
                    </h3>
                    <p className="text-xs text-ink-soft">
                      Trânsito · Família · Previdenciário (INSS) · Cível · Consumidor
                    </p>
                    <p className="mt-1 text-[11px] font-medium text-brand-900">
                      Atendimento presencial no Centro de Três Corações e digital para todo o país
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs text-ink font-medium"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand-700 shrink-0" />
                  <span>Estudo minucioso e fundamentação jurídica sob medida</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand-700 shrink-0" />
                  <span>Transparência total e clareza em todas as explicações</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand-700 shrink-0" />
                  <span>Sede no Centro de Três Corações - MG (R. Joaquim Bento Carvalho)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand-700 shrink-0" />
                  <span>Atendimento ágil com dedicação humana e ética irrestrita</span>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="mt-8 flex flex-wrap items-center gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Ana Letícia! Gostaria de agendar uma consulta sobre meu caso."
                  )}
                  target="_blank"
                  size="md"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Iniciar Consulta no WhatsApp
                </GlowingButton>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-soft hover:text-brand-700"
                >
                  <InstagramIcon size={15} /> {INSTAGRAM_HANDLE}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Áreas de Atuação */}
        <section
          id="atuacao"
          className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <Heading
                eyebrow="ÁREAS DE ATUAÇÃO ESTRATÉGICA"
                description="Atuação jurídica qualificada para proteger seu direito de dirigir, sua família, seu patrimônio e seus direitos previdenciários e de consumidor."
              >
                Segurança jurídica e combatividade nos{" "}
                <span className="italic text-brand-700">
                  momentos mais decisivos.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-ink-soft">
                Selecione uma área abaixo para visualizar temas atendidos e falar
                diretamente com o escritório.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group flex min-h-[350px] flex-col border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-700/40 hover:shadow-card sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-brand-700/50">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-full bg-brand-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-brand-800">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.65rem] leading-tight text-ink">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-ink-soft">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-800 hover:text-brand-700"
                    >
                      Ver detalhes e tópicos{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>

            {/* Banner Oficial de Pilares com Imagem da Dra. Ana Letícia */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className="mt-14 overflow-hidden rounded-[2px] border border-brand-700/20 bg-brand-950 text-white shadow-card"
            >
              <div className="grid items-center lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-8 sm:p-12 lg:p-14">
                  <div className="inline-flex items-center gap-2 rounded-full bg-brand-700/30 px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-200">
                    <Sparkles size={13} /> ALP Advocacia e Consultoria
                  </div>
                  <h3 className="mt-4 font-serif text-3xl leading-snug sm:text-4xl text-white">
                    Direito de Trânsito, Família, Cível, Previdenciário e Consumidor com atendimento resolutivo e humano.
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">
                    Nossa atuação especializada combina combatividade jurídica
                    com a presteza e transparência que você e sua causa merecem.
                    Não trabalhamos com modelos genéricos: cada estratégia é
                    desenhada sob medida para o seu caso.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <GlowingButton
                      href={getWhatsAppUrl(
                        "Olá, Dra. Ana Letícia! Gostaria de agendar uma consulta sobre meu processo."
                      )}
                      target="_blank"
                      size="md"
                      className="rounded-full shadow-md"
                    >
                      <WhatsAppIcon size={16} /> Falar no WhatsApp
                    </GlowingButton>
                    <a
                      href={`tel:+${WHATSAPP_NUMBER}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-200 hover:text-white"
                    >
                      <Phone size={14} /> Ligar: {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-900/40 lg:aspect-auto lg:h-full lg:min-h-[420px]">
                  <Image
                    src="/dra-ana-leticia-diploma.jpg"
                    alt="Dra. Ana Letícia Pereira — ALP Advocacia e Consultoria"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-[50%_20%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-brand-950/80 lg:to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Propósito & Filosofia de Atuação */}
        <section
          id="proposito"
          className="scroll-mt-24 border-y border-ink/10 bg-[#f4ede3] py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-12">
            {/* Visual presentation card with Books & Office */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto w-full max-w-[460px]"
            >
              <div className="overflow-hidden rounded-xl border border-brand-700/25 bg-white shadow-card">
                <div className="relative aspect-[3/4] w-full bg-white">
                  <Image
                    src="/dra-ana-leticia-advogada.jpg"
                    alt="Dra. Ana Letícia Pereira — ALP Advocacia e Consultoria em Três Corações - MG"
                    fill
                    sizes="(max-width: 768px) 90vw, 40vw"
                    className="object-cover object-[50%_15%]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                    <p className="font-serif text-xl font-normal">
                      &ldquo;Antes de ser uma excelente advogada, é um ótimo ser humano.&rdquo;
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-wider text-brand-200">
                      Avaliação de cliente no Google Maps
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-5 -left-5 -z-10 size-32 rounded-full bg-brand-300/40 blur-2xl" />
              <div className="absolute -right-5 -top-5 -z-10 size-32 rounded-full bg-brand-200/50 blur-2xl" />
            </motion.div>

            {/* Text and philosophy */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.p variants={reveal} className="eyebrow">
                PROPÓSITO & VOCAÇÃO
              </motion.p>
              <motion.h2
                variants={reveal}
                className="mt-4 font-serif text-4xl leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.35rem]"
              >
                &ldquo;Uma advocacia pautada na ética, honestidade e{" "}
                <span className="italic text-brand-700">dedicação incansável.</span>
                &rdquo;
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8"
              >
                Este princípio guia cada decisão, cada parecer e cada
                atendimento realizado na{" "}
                <strong className="text-ink font-semibold">
                  ALP Advocacia e Consultoria
                </strong>
                . Acreditamos que o Direito é um instrumento de justiça,
                dignidade e tranquilidade para quem enfrenta desafios legais.
              </motion.p>

              <motion.blockquote
                variants={reveal}
                className="mt-6 border-l-2 border-brand-700 pl-5 text-sm italic leading-7 text-ink font-serif sm:text-base"
              >
                &ldquo;Profissional dedicada, e principalmente HONESTA! Recomendo sem medo. Antes de ser uma excelente advogada, é um ótimo ser HUMANO. Parabéns pela dedicação e comprometimento!&rdquo;
                <footer className="mt-2 text-xs font-sans not-italic font-semibold uppercase tracking-wider text-brand-800">
                  — Jaqueline Barbara (Cliente verificada no Google)
                </footer>
              </motion.blockquote>

              <motion.div variants={reveal} className="mt-9 flex flex-wrap items-center gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Ana Letícia! Conheci seu trabalho e gostaria de solicitar um atendimento."
                  )}
                  target="_blank"
                  size="md"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Entrar em Contato
                </GlowingButton>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:border-brand-700 hover:text-brand-700"
                >
                  <InstagramIcon size={15} /> Acompanhar no Instagram{" "}
                  <ArrowUpRight size={13} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Nosso Compromisso Ético e Operacional */}
        <section className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-brand-700/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-brand-800/15 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12">
            <Heading
              eyebrow="NOSSO COMPROMISSO PROFISSIONAL"
              light
              description="A condução de cada demanda com rigor técnico intransigente, transparência total e acolhimento humano ao tempo e às necessidades de quem nos procura."
            >
              A precisão jurídica aliada ao{" "}
              <span className="italic text-brand-200">
                respeito que sua causa merece.
              </span>
            </Heading>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-white/15"
            >
              {[
                [
                  "01",
                  "Estudo aprofundado e minucioso do processo",
                  "Como destacam nossos clientes em avaliações públicas, lemos cada lauda processual com rigor absoluto e desenhamos estratégias sob medida, sem soluções padronizadas.",
                ],
                [
                  "02",
                  "Transparência irrestrita e explicações claras",
                  "Você é mantido informado sobre cada movimentação em linguagem direta e compreensível, sabendo com clareza os passos, as chances reais e os prazos em curso.",
                ],
                [
                  "03",
                  "Combatividade e presteza na defesa de direitos",
                  "Aliamos atualização jurídica contínua e jurisprudência sólida para defender seus direitos com firmeza perante órgãos administrativos, varas cíveis e tribunais.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-brand-300">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-white/70">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais - 5,0 estrelas · 30 avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                eyebrow="AVALIAÇÕES NO GOOGLE MAPS · NOTA 5,0 ★"
                description="A reputação consolidada da Dra. Ana Letícia Pereira e da ALP Advocacia e Consultoria é comprovada por quem contratou os serviços. Depoimentos autênticos de clientes verificados no Google."
              >
                A confiança de quem teve seus direitos{" "}
                <span className="italic text-brand-700">
                  defendidos com excelência.
                </span>
              </Heading>

              {/* Verified Google Badge Card */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center rounded-2xl border border-brand-700/25 bg-ivory/80 p-5 shadow-card md:min-w-[340px]">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm border border-brand-700/15">
                  <GoogleIcon size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl font-bold leading-none text-ink">
                      5,0
                    </span>
                    <div className="flex gap-0.5 text-brand-700">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-brand-700 text-brand-700"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold text-brand-900 uppercase tracking-wider">
                    Classificação Máxima Unânime
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-brand-700 hover:text-brand-800 transition-colors"
                  >
                    30 avaliações no Google Maps <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Curated Testimonials Grid - Exactly 6 authentic reviews, NO duplication */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {clientReviews.map((review) => (
                <article
                  key={review.name}
                  className="group relative flex flex-col justify-between rounded-xl border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-700/40 hover:shadow-card sm:p-8"
                >
                  <div>
                    {/* Header: Stars + Date + Google icon */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-1 text-brand-700">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-brand-700 text-brand-700"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-medium text-ink-soft">
                        <GoogleIcon size={13} />
                        <span>{review.date}</span>
                      </div>
                    </div>

                    {/* Authentic review content - single display */}
                    <p className="mt-5 text-[14px] leading-relaxed text-ink/85 italic">
                      &ldquo;{review.content}&rdquo;
                    </p>

                    {/* Owner reply if present */}
                    {review.reply && (
                      <div className="mt-4 rounded-lg border border-brand-700/20 bg-brand-50/70 p-3 text-[11px] leading-relaxed text-brand-950">
                        <span className="block font-bold text-[9px] uppercase tracking-wider text-brand-800 mb-0.5">
                          Resposta de ALP Advocacia:
                        </span>
                        &ldquo;{review.reply}&rdquo;
                      </div>
                    )}
                  </div>

                  {/* Reviewer info */}
                  <div className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-4">
                    <div className="grid size-10 shrink-0 place-items-center rounded-full border border-brand-700/30 bg-brand-50 font-serif text-sm font-semibold text-brand-900">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-serif text-base font-semibold text-ink truncate">
                        {review.name}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider text-ink-soft">
                        {review.reviewsCount}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Bottom Actions and Trust Tags */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-ink/10 pt-8">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  "Profissional extremamente competente",
                  "Honesta e dedicada",
                  "Explicações claras",
                  "Serviços impecáveis",
                  "Atendimento humano",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-ivory px-3.5 py-1.5 text-[11px] font-medium text-ink-soft"
                  >
                    <CheckCircle2 size={13} className="text-brand-700" />
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-800 hover:text-brand-700 transition-colors"
              >
                Abrir avaliações no Google Maps{" "}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Contato & Localização */}
        <section
          id="contato"
          className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO & SEDE DO ESCRITÓRIO"
                description="Agende sua consulta presencial em nosso escritório no Centro de Três Corações ou realize seu atendimento de forma totalmente on-line com segurança e agilidade."
              >
                Estamos prontos para{" "}
                <span className="italic text-brand-700">ouvir o seu caso.</span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-ink-soft">
                  Atendimento direto com resposta ágil:{" "}
                  <strong className="text-ink">{PHONE_DISPLAY}</strong>.
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-ink-soft">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-brand-700 shrink-0" />
                  <span>Aberto 24 horas · Plantão & Atendimento Jurídico Ágil</span>
                </div>
                <div className="flex flex-col gap-2 pt-1 text-xs">
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-brand-700 shrink-0" />
                    <a
                      href={`tel:+${WHATSAPP_NUMBER}`}
                      className="hover:text-brand-700 transition-colors font-medium text-ink"
                    >
                      {PHONE_DISPLAY} (WhatsApp e Ligações)
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <InstagramIcon size={16} className="text-brand-700 shrink-0 mt-0.5" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-700 transition-colors font-medium text-brand-900 text-xs"
                  >
                    {INSTAGRAM_HANDLE} (Siga no Instagram)
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-brand-700 shrink-0" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="hover:text-brand-700 transition-colors"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>
              </div>
            </div>

            {/* Address & Office Card */}
            <div className="relative overflow-hidden border border-ink/10 bg-white p-7 sm:p-10 shadow-card">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-brand-700" />

              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-700">
                  <MapPin size={22} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-700">
                    Sede do Escritório
                  </p>
                  <p className="mt-1 font-serif text-2xl text-ink">
                    Três Corações · Minas Gerais
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md not-italic text-[14px] leading-7 text-ink-soft">
                <strong className="text-ink font-semibold">
                  ALP Advocacia e Consultoria
                </strong>
                <br />
                Dra. Ana Letícia Pereira
                <br />
                {ADDRESS_TEXT}
              </address>

              <div className="my-7 h-px bg-ink/10" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-soft">
                  Atendimento presencial no Centro e digital em todo o Brasil
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:border-brand-700 hover:bg-brand-50 hover:text-brand-800"
                >
                  Abrir no Google Maps <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="bg-brand-700 px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12 shadow-inner">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-200">
                ALP ADVOCACIA E CONSULTORIA · DRA. ANA LETÍCIA PEREIRA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl text-white">
                Precisa de uma defesa técnica, ética e comprometida com seus direitos?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Ana Letícia! Gostaria de agendar uma consulta inicial para avaliar meu caso."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-900 shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-50 hover:shadow-lg"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-brand-950 px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <div className="inline-flex rounded-sm bg-white/95 p-3.5 shadow-md">
                <Image
                  src="/logo.png"
                  width={1774}
                  height={887}
                  alt="ALP Advocacia e Consultoria"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="mt-5 max-w-xs text-xs leading-6 text-white/65">
                Soluções jurídicas de alta precisão, rigor analítico e dedicação
                humana. Sede no Centro de Três Corações - MG e atendimento
                digital seguro em todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-brand-300">
                Dra. Ana Letícia Pereira · ALP Advocacia e Consultoria
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-300">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/70">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  O Escritório & Advogada
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link" href="#proposito">
                  Propósito & Vocação
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações no Google (5,0 ★)
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Sede em Três Corações
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-300">
                Contato Direto
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-white/70">
                <a
                  href={getWhatsAppUrl("Olá, Dra. Ana Letícia! Gostaria de solicitar um atendimento.")}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <WhatsAppIcon size={15} /> WhatsApp: {PHONE_DISPLAY}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-1.5 font-medium text-brand-200"
                >
                  <InstagramIcon size={14} /> {INSTAGRAM_HANDLE}
                </a>
                <a
                  href={`mailto:${EMAIL_CONTACT}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Mail size={15} className="shrink-0" /> {EMAIL_CONTACT}
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>R. Joaquim Bento Carvalho, 108 - Sl 2 - Centro, Três Corações - MG</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-6 text-[10px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} ALP Advocacia e Consultoria (Dra. Ana Letícia Pereira). Todos os direitos reservados.
            </p>
            <p>
              Conteúdo meramente informativo, em estrita conformidade com o
              Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </footer>

        {/* Floating WhatsApp Quick Action Button */}
        <aside aria-label="Acesso rápido WhatsApp" className="fixed bottom-6 right-6 z-50">
          <a
            href={getWhatsAppUrl("Olá, Dra. Ana Letícia! Gostaria de tirar uma dúvida sobre meu caso.")}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp"
            className="group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <WhatsAppIcon size={28} />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg bg-brand-950 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity group-hover:block">
              Falar no WhatsApp
            </span>
          </a>
        </aside>

        {/* Modal de Detalhes da Área de Atuação */}
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/65 p-0 backdrop-blur-sm sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-ink/10 bg-ivory p-7 shadow-2xl sm:max-w-xl sm:rounded-sm sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da área"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-brand-700 hover:text-brand-700"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow">ÁREA DE ATUAÇÃO ESTRATÉGICA</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-ink sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-ink-soft">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-ink/10 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-800">
                    Principais atuações e demandas atendidas:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-ink"
                      >
                        <span className="size-2 rounded-full bg-brand-700 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
                  <GlowingButton
                    href={getWhatsAppUrl(activeArea.whatsAppText)}
                    target="_blank"
                    size="md"
                    className="rounded-full shadow-md"
                  >
                    <WhatsAppIcon size={16} /> Consultar sobre esta área
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-ink-soft hover:text-ink transition-colors"
                  >
                    Fechar
                  </button>
                </div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
