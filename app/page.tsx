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
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
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

const WHATSAPP_NUMBER = "5535992740027";
const PHONE_DISPLAY = "(35) 99274-0027";
const WHATSAPP_MARCELA = "5535988878306";
const PHONE_MARCELA = "(35) 98887-8306";
const EMAIL_CONTACT = "contato@gabrielarodriguesadv.com.br";

const INSTAGRAM_FIRM_URL = "https://www.instagram.com/lhorranarodrigues.adv/";
const INSTAGRAM_FIRM_HANDLE = "@lhorranarodrigues.adv";
const INSTAGRAM_GABRIELA_URL = "https://www.instagram.com/_gabrielarodrigues.adv/";
const INSTAGRAM_GABRIELA_HANDLE = "@_gabrielarodrigues.adv";
const INSTAGRAM_MARCELA_URL = "https://www.instagram.com/adv.marcelalhorrana/";
const INSTAGRAM_MARCELA_HANDLE = "@adv.marcelalhorrana";

const ADDRESS_TEXT =
  "R. Firmino Sales, 491 - Centro, Lavras - MG, 37200-102, Brasil";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Dra.+Gabriela+Rodrigues+Escrit%C3%B3rio+de+advocacia+R.+Firmino+Sales+491+Centro+Lavras+MG";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de solicitar um atendimento com o escritório Lhorrana & Rodrigues Advocacia.";
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
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.04 } },
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
    id: "direito-criminal",
    title: "Direito Criminal Especializado",
    icon: ShieldAlert,
    tag: "Atuação Combativa & Urgências",
    summary:
      "Defesa intransigente da liberdade e das garantias constitucionais em inquéritos, custódias, tribunal do júri e recursos.",
    details:
      "Atuação criminal combativa, técnica e imediata conduzida pela Dra. Gabriela Rodrigues e equipe. Defendemos os direitos do cliente com rigor processual desde a fase investigativa inicial até instâncias recursais superiores. Atendimento ágil e estratégico em prisões em flagrante, acompanhamento em delegacias, audiências de custódia e impetração de Habeas Corpus.",
    topics: [
      "Audiência de Custódia e Plantão de Flagrantes com resposta ágil",
      "Acompanhamento em Delegacias e Inquéritos Policiais",
      "Defesa técnica em Ações Penais e Tribunal do Júri",
      "Habeas Corpus, Revogação de Prisão e Liberdade Provisória",
      "Execução Penal: Progressão de Regime e Livramento Condicional",
      "Recursos nos Tribunais Estaduais (TJMG) e Superiores (STJ e STF)",
    ],
    whatsAppText:
      "Olá, Dra. Gabriela Rodrigues. Preciso de atendimento especializado e urgente em Direito Criminal.",
  },
  {
    id: "direito-familia",
    title: "Direito de Família & Sucessões",
    icon: HeartHandshake,
    tag: "Acolhimento & Resguardo",
    summary:
      "Condução sensível, firme e discreta para resguardar vínculos afetivos, menores e a integridade do patrimônio familiar.",
    details:
      "Demandas familiares exigem sensibilidade emocional aliada a profundo rigor técnico. Atuamos de forma estratégica em divórcios consensuais e litigiosos, garantindo partilhas justas e proteção de bens. Na área da infância, defendemos o melhor interesse da criança em ações de guarda compartilhada, convivência e pensão alimentícia, além de inventários judiciais e extrajudiciais rápidos.",
    topics: [
      "Divórcio Consensual em Cartório e Divórcio Litigioso Complexo",
      "Partilha de Bens e Proteção do Patrimônio Familiar",
      "Pensão Alimentícia: Fixação, Cobrança Executiva e Revisional",
      "Guarda Compartilhada e Regulamentação do Direito de Convivência",
      "Inventários Judiciais e Extrajudiciais Ágeis em Cartório",
      "Reconhecimento e Dissolução de União Estável",
    ],
    whatsAppText:
      "Olá, Dra. Gabriela Rodrigues. Gostaria de uma consulta especializada em Direito de Família e Sucessões.",
  },
  {
    id: "direito-civel",
    title: "Direito Cível & Contratos",
    icon: Scale,
    tag: "Alta Precisão Contratual",
    summary:
      "Elaboração e revisão minuciosa de contratos, reparação por danos, cobranças e resolução estratégica de conflitos patrimoniais.",
    details:
      "Como salientam nossos clientes, a atenção cirúrgica a cada cláusula contratual e peça processual evita litígios dispendiosos e garante segurança plena. Atuamos na elaboração, revisão e rescisão de contratos civis e comerciais, ações de reparação por danos morais e materiais, cobranças executivas de títulos e contencioso cível especializado.",
    topics: [
      "Elaboração, análise preventiva e auditoria de contratos civis",
      "Ações de Reparação Civil por Danos Morais e Materiais",
      "Execução de Títulos, Cobranças Judiciais e Recuperação de Crédito",
      "Rescisões Contratuais e Cumprimento de Obrigações de Fazer",
      "Litígios Patrimoniais e Disputas de Posse e Propriedade",
      "Defesa em Relações de Consumo e Responsabilidade Civil",
    ],
    whatsAppText:
      "Olá, Dra. Gabriela Rodrigues. Gostaria de uma consulta especializada em Direito Cível e Contratos.",
  },
  {
    id: "assessoria-juridica",
    title: "Assessoria Jurídica & Consultoria",
    icon: Briefcase,
    tag: "Prevenção & Estratégia",
    summary:
      "Blindagem preventiva para pessoas físicas e empresas, com negociações extrajudiciais seguras e gestão de riscos.",
    details:
      "A melhor vitória jurídica é aquela que evita o litígio antes que ele ocorra. Nossa assessoria jurídica preventiva examina cenários, mitiga vulnerabilidades legais e oferece pareceres consistentes para subsidiar decisões seguras. Atuamos também em acordos extrajudiciais de alto valor, negociações estratégicas e mediação de conflitos.",
    topics: [
      "Consultoria preventiva contínua para pessoas físicas e jurídicas",
      "Negociações extrajudiciais com elaboração de termos de acordo",
      "Pareceres jurídicos detalhados e análise de viabilidade de demandas",
      "Mitigação proativa de riscos operacionais e civis",
      "Mediação estratégica e conciliação de interesses",
    ],
    whatsAppText:
      "Olá, Dra. Gabriela Rodrigues. Gostaria de solicitar assessoria jurídica e consultoria preventiva.",
  },
];

const clientReviews = [
  {
    name: "Bianca Gomes",
    reviewsCount: "6 avaliações · 2 fotos",
    date: "Há 2 meses",
    highlight: "Excelente trabalho criminal e cível com transparência",
    content:
      "Quero deixar minha gratidão à Dra. Gabriela e à Dra. Marcela pelo excelente trabalho que fizeram no meu processo. Elas cuidaram de tudo com muita competência, dedicação e transparência, tanto na área criminal quanto na cível.",
  },
  {
    name: "Jonathas Silva",
    reviewsCount: "1 avaliação",
    date: "Há 2 meses",
    highlight: "Muito atenciosa e eficiente em seus contratos",
    content:
      "Muito atenciosa e eficiente em seus contratos. Me atendeu muito bem e resolveu minha situação. Ótima profissional!!!",
  },
  {
    name: "Isadora Mesquita",
    reviewsCount: "4 avaliações",
    date: "Há 2 meses",
    highlight: "Super atenciosa, esclareceu e resolveu",
    content:
      "Super atenciosa e profissional! Esclareceu e conseguiu me ajudar.",
    reply:
      "Agradeço imensamente pela avaliação e, sobretudo, pela confiança em meu trabalho. Será sempre um prazer poder auxiliá-la. Conte comigo!",
  },
  {
    name: "Luciano Coelho Martins",
    reviewsCount: "Local Guide · 36 avaliações · 3 fotos",
    date: "Há 2 anos",
    highlight: "Prestativa, ambiente moderno e clareza total",
    content:
      "Excelente profissional, me atendeu juntamente com a Dra Hellen. Ambas muito prestativas, educadas, atenciosas. Explicam todos os detalhes sobre o processo e tiram todas as dúvidas quando necessário. Ambiente moderno, limpo, organizado.",
  },
  {
    name: "Angel Laviny",
    reviewsCount: "6 avaliações",
    date: "Há 3 anos",
    highlight: "Atendimento diferenciado e totalmente capacitada",
    content:
      "O atendimento é diferenciado, ela é uma profissional extremamente competente e totalmente capacitada. Indico de olhos fechados!",
  },
  {
    name: "Juliana Carvalho",
    reviewsCount: "3 avaliações",
    date: "Há 1 ano",
    highlight: "Dra Gabriela e Dra Marcela me ajudaram muito",
    content:
      "Dra Gabriela e a Dra. Marcela são maravilhosas, me ajudaram muito, indico de olhos fechados!",
  },
  {
    name: "Cleber Júnior",
    reviewsCount: "2 avaliações",
    date: "Há 3 anos",
    highlight: "Disponível para resolver todas as questões",
    content:
      "Excelente profissional. Disponível para resolver todas as questões ao alcance dela. Recomendo muito! Me ajudou de diversas formas!",
  },
  {
    name: "Guilherme Moreira Guimarães",
    reviewsCount: "5 avaliações",
    date: "Há 2 anos",
    highlight: "Competente, soluções rápidas e proatividade",
    content:
      "Competente. Soluções rápidas. Proatividade. Muito conhecimento.",
  },
  {
    name: "GABRIELA CERUTTI",
    reviewsCount: "7 avaliações",
    date: "Há 1 ano",
    highlight: "Excelente advogada, atenciosa, prática e muito solícita",
    content:
      "Dra. Gabriela é uma excelente advogada e representante. Atenciosa, prática e muito solicita. Super indico!",
  },
  {
    name: "Millena Casarino",
    reviewsCount: "3 avaliações",
    date: "Há 6 meses",
    highlight: "Muito competente e comprometida com o trabalho",
    content:
      "Profissional muito competente e comprometida com o trabalho, indico de olhos fechados!",
  },
  {
    name: "Marco Dávilla Oficial",
    reviewsCount: "1 avaliação",
    date: "Há 3 anos",
    highlight: "Extremamente cirúrgica e atenciosa",
    content:
      "Me ajudou muito, extremamente cirúrgica e atenciosa!",
  },
  {
    name: "Setor Técnico",
    reviewsCount: "1 avaliação",
    date: "Há 1 ano",
    highlight: "Ótima profissional, me salvou de um problemão!",
    content:
      "Ótima profissional, me salvou de um problemão!",
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
          <div className="mx-auto flex h-[96px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[112px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Lhorrana & Rodrigues Advocacia — Início"
              onClick={closeMenu}
              className="flex items-center gap-3 transition-opacity hover:opacity-95"
            >
              <Image
                src="/Logotipo Jurídico Dourado LR.png"
                width={1774}
                height={887}
                alt="Lhorrana & Rodrigues — Advocacia e Assessoria Jurídica"
                priority
                className="h-[70px] w-auto object-contain sm:h-[85px]"
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
                A Advogada
              </a>
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link" href="#proposito">
                Propósito
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações Google (5,0 ★)
              </a>
              <a className="nav-link" href="#contato">
                Contato & Sede
              </a>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={INSTAGRAM_FIRM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Lhorrana & Rodrigues Advocacia"
                className="grid size-10 place-items-center rounded-full border border-ink/15 text-brand-700 transition-all hover:border-brand-700 hover:bg-brand-50 hover:text-brand-800"
                title="Siga no Instagram (@lhorranarodrigues.adv)"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp da Dra. Gabriela Rodrigues"
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
                    ["A Advogada", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Propósito & Filosofia", "#proposito"],
                    ["Avaliações no Google (5,0 ★)", "#avaliacoes"],
                    ["Contato & Localização", "#contato"],
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
                      <WhatsAppIcon size={16} /> Falar no WhatsApp
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-ink transition-all hover:border-brand-700"
                      href={INSTAGRAM_FIRM_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <InstagramIcon size={15} /> @lhorranarodrigues.adv
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
                  Lavras - MG · Centro · 5,0 ★ no Google (92 avaliações)
                </span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[3.1rem] leading-[0.98] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[4.75rem]"
              >
                Defesa técnica de{" "}
                <span className="italic text-brand-700 font-serif">
                  alta precisão
                </span>{" "}
                e compromisso absoluto com sua causa.
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8"
              >
                Atendimento humanizado, ético e combativo conduzido pela{" "}
                <strong className="text-ink font-semibold">
                  Dra. Gabriela Rodrigues
                </strong>{" "}
                e equipe no escritório{" "}
                <strong className="text-ink font-semibold">
                  Lhorrana & Rodrigues Advocacia
                </strong>
                . Atuação especializada nas áreas Criminal, Família e Cível — com
                sede em Lavras (MG) e atendimento em todo o Brasil.
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
                  <WhatsAppIcon size={16} /> Falar com a Dra. Gabriela
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
                  5,0 estrelas no Google (92 avaliações)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <ShieldCheck size={16} className="text-brand-700" /> Advocacia
                  Criminal, Família & Cível
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={15} className="text-brand-700" /> Sede em Lavras
                  - MG e on-line em todo o país
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Image Presentation - Dra. Gabriela Rodrigues */}
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
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-3 -rotate-2 rounded-[46%_46%_5%_5%] border border-brand-700/25 sm:-inset-4" />

              {/* Main portrait */}
              <div className="relative aspect-[0.78] overflow-hidden rounded-[46%_46%_5%_5%] bg-[#ded7d0] shadow-card">
                <Image
                  src="/gabriela.jpg"
                  alt="Dra. Gabriela Rodrigues — Advocacia Criminal, Família e Cível"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 42vw"
                  className="object-cover object-[50%_15%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-950/90 via-brand-950/45 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide">
                      Dra. Gabriela Rodrigues
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-brand-200">
                      Lhorrana & Rodrigues Advocacia
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-brand-300/40 bg-brand-950/50 text-brand-200 backdrop-blur-sm">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-4 top-[14%] rounded-full border border-brand-700/25 bg-ivory px-4 py-2.5 text-[10px] font-bold tracking-[0.14em] text-brand-800 shadow-card sm:-left-8 sm:px-5">
                DEFESA COMBATIVA & CIRÚRGICA
              </div>

              <div className="absolute -right-3 bottom-[20%] rounded-2xl border border-brand-700/25 bg-white/95 p-3.5 shadow-card backdrop-blur-md sm:-right-6">
                <div className="flex items-center gap-2 text-brand-700">
                  <Star size={14} className="fill-brand-700" />
                  <span className="font-serif text-lg font-bold text-ink">
                    5,0 / 5,0
                  </span>
                </div>
                <p className="mt-0.5 text-[10px] uppercase tracking-wider text-ink-soft">
                  92 Avaliações no Google
                </p>
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
              ["5,0 ★", "classificação unânime com 92 avaliações no Google"],
              ["Criminal & Cível", "atuação combativa e estratégica"],
              ["Lavras & Brasil", "sede no Centro de Lavras e 100% on-line"],
              ["Atendimento Ágil", "transparência, ética e acolhimento direto"],
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

        {/* Sobre a Dra. Gabriela Rodrigues & Dra. Marcela Lhorrana Gouvea */}
        <section
          id="sobre"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-20 lg:px-12">
            {/* Office photo - Dra. Marcela Lhorrana Gouvea in Red Suit */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[520px]"
            >
              <div className="relative aspect-[0.88] overflow-hidden rounded-[2px] bg-[#ded7d0] shadow-card">
                <Image
                  src="/imgi_42_598704510_18545926084039624_7090431042848112189_n.jpg"
                  alt="Dra. Marcela Lhorrana Gouvea — Sócia-Fundadora em Lhorrana & Rodrigues Advocacia"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-[50%_15%]"
                />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-6 right-3 max-w-[320px] border-l-2 border-brand-700 bg-ivory px-5 py-4 shadow-card sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-brand-700">
                  <ShieldCheck size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
                    Sócia-Fundadora
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-ink">
                  Dra. Marcela Lhorrana Gouvea
                </p>
                <p className="mt-1 text-[11px] font-medium text-brand-800">
                  Pós-graduada em Segurança Pública e Criminologia
                </p>
                <p className="mt-1 text-[11px] leading-4 text-ink-soft">
                  Advocacia estratégica nas áreas Criminal, Cível e Família.
                </p>
                <a
                  href={INSTAGRAM_MARCELA_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2.5 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-800 hover:text-brand-700"
                >
                  <InstagramIcon size={13} /> {INSTAGRAM_MARCELA_HANDLE}
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
                SOCIEDADE & RIGOR TÉCNICO
              </motion.p>
              <motion.h2
                variants={reveal}
                className="mt-4 max-w-2xl font-serif text-4xl leading-[1.09] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.45rem]"
              >
                Uma sociedade que une{" "}
                <span className="italic text-brand-700">
                  combatividade técnica
                </span>{" "}
                e compromisso humano.
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                O escritório{" "}
                <strong className="text-ink">
                  Lhorrana & Rodrigues — Advocacia e Assessoria Jurídica
                </strong>{" "}
                nasceu da união de duas profissionais comprometidas com a
                excelência:{" "}
                <strong className="text-ink">Dra. Gabriela Rodrigues</strong> e{" "}
                <strong className="text-ink">
                  Dra. Marcela Lhorrana Gouvea
                </strong>
                . Juntas, combinam rigor analítico, presteza e atendimento
                artesanal nas áreas Criminal, Cível e de Família.
              </motion.p>

              {/* Duo Profiles Cards */}
              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                {/* Profile Card: Dra. Gabriela */}
                <div className="rounded-sm border border-ink/10 bg-ivory/80 p-4 transition-all hover:border-brand-700/40 hover:bg-ivory">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-brand-700">
                    Sócia-Fundadora
                  </span>
                  <h3 className="mt-1 font-serif text-lg font-semibold text-ink">
                    Dra. Gabriela Rodrigues
                  </h3>
                  <p className="mt-1 text-[11px] text-ink-soft">
                    Criminal · Cível · Direito de Família
                  </p>
                  <p className="mt-1 text-[11px] font-medium text-brand-900">
                    Atuação personalizada em todo o Brasil
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <a
                      href={INSTAGRAM_GABRIELA_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-brand-800 hover:text-brand-700"
                    >
                      <InstagramIcon size={13} /> {INSTAGRAM_GABRIELA_HANDLE}
                    </a>
                  </div>
                </div>

                {/* Profile Card: Dra. Marcela */}
                <div className="rounded-sm border border-ink/10 bg-ivory/80 p-4 transition-all hover:border-brand-700/40 hover:bg-ivory">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-brand-700">
                    Sócia-Fundadora
                  </span>
                  <h3 className="mt-1 font-serif text-lg font-semibold text-ink">
                    Dra. Marcela Lhorrana Gouvea
                  </h3>
                  <p className="mt-1 text-[11px] text-ink-soft">
                    Criminal · Cível · Direito de Família
                  </p>
                  <p className="mt-1 text-[11px] font-medium text-brand-900">
                    Pós-graduada em Segurança Pública e Criminologia
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <a
                      href={INSTAGRAM_MARCELA_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-brand-800 hover:text-brand-700"
                    >
                      <InstagramIcon size={13} /> {INSTAGRAM_MARCELA_HANDLE}
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs text-ink font-medium"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand-700 shrink-0" />
                  <span>Análise minuciosa e estudo cirúrgico do processo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand-700 shrink-0" />
                  <span>Transparência total e comunicação direta</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand-700 shrink-0" />
                  <span>Sede estruturada no Centro de Lavras - MG</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-brand-700 shrink-0" />
                  <span>Atendimento ágil presencial e em todo o Brasil</span>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="mt-8 flex flex-wrap items-center gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de agendar uma consulta com as advogadas do escritório Lhorrana & Rodrigues."
                  )}
                  target="_blank"
                  size="md"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Iniciar Consulta no WhatsApp
                </GlowingButton>
                <a
                  href={INSTAGRAM_FIRM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-soft hover:text-brand-700"
                >
                  <InstagramIcon size={15} /> {INSTAGRAM_FIRM_HANDLE}
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
                description="Atuação técnica aprofundada para defender sua liberdade, seu patrimônio, sua família e seus direitos essenciais."
              >
                Segurança jurídica e combatividade nos{" "}
                <span className="italic text-brand-700">
                  momentos mais decisivos.
                </span>
              </Heading>
              <p className="max-w-[270px] pb-1 text-xs leading-6 text-ink-soft">
                Selecione uma área abaixo para visualizar temas atendidos e falar
                diretamente com a equipe jurídica.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
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

            {/* Banner Oficial de Pilares com Imagem da Dra. Gabriela */}
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
                    <Sparkles size={13} /> Lhorrana & Rodrigues Advocacia
                  </div>
                  <h3 className="mt-4 font-serif text-3xl leading-snug sm:text-4xl text-white">
                    Direito Criminal, de Família e Cível com atendimento
                    cirúrgico e acolhedor.
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/75">
                    Nossa atuação especializada combina combatividade jurídica
                    nos tribunais com o respeito e atenção que você e sua
                    família merecem. Não trabalhamos com modelos prontos: cada
                    estratégia é pensada sob medida.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <GlowingButton
                      href={getWhatsAppUrl(
                        "Olá, Dra. Gabriela Rodrigues. Gostaria de agendar uma consulta sobre meu processo."
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

                <div className="relative aspect-[1350/1150] w-full overflow-hidden bg-brand-900/40 lg:aspect-auto lg:h-full">
                  <Image
                    src="/imgi_58_552214563_17886734739360768_4749305532248983590_n.jpg"
                    alt="Dra. Gabriela Rodrigues — Especialista em Direito Criminal, Família e Cível"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-top"
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
            {/* Authentic quote post card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto w-full max-w-[460px]"
            >
              <div className="overflow-hidden rounded-xl border border-brand-700/25 bg-white shadow-card">
                <div className="relative aspect-[1080/1350] w-full bg-white">
                  <Image
                    src="/imgi_4_838271357_18632422336055212_3790161064784208385_n.webp"
                    alt="Manifesto de Propósito — Dra. Gabriela Rodrigues: Minha advocacia não existe apenas para vender, existe para servir"
                    fill
                    sizes="(max-width: 768px) 90vw, 40vw"
                    className="object-contain p-2"
                  />
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
                &ldquo;Minha advocacia não existe apenas para vender,{" "}
                <span className="italic text-brand-700">existe para servir.</span>
                &rdquo;
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8"
              >
                Este princípio guia cada decisão, cada petição e cada
                atendimento realizado no escritório da{" "}
                <strong className="text-ink font-semibold">
                  Dra. Gabriela Rodrigues
                </strong>
                . Acreditamos que o Direito é, antes de tudo, um instrumento de
                justiça, dignidade e proteção para quem enfrenta momentos
                desafiadores.
              </motion.p>

              <motion.blockquote
                variants={reveal}
                className="mt-6 border-l-2 border-brand-700 pl-5 text-sm italic leading-7 text-ink font-serif sm:text-base"
              >
                &ldquo;Por isso, eu oro para que cada pessoa que chegar até mim
                receba não somente o que ofereço, mas também a bênção de Deus,
                através daquilo que faço.&rdquo;
                <footer className="mt-2 text-xs font-sans not-italic font-semibold uppercase tracking-wider text-brand-800">
                  — Dra. Gabriela Rodrigues ({INSTAGRAM_GABRIELA_HANDLE})
                </footer>
              </motion.blockquote>

              <motion.div variants={reveal} className="mt-9 flex flex-wrap items-center gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Gabriela. Conheci seu trabalho e gostaria de solicitar um atendimento."
                  )}
                  target="_blank"
                  size="md"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Entrar em Contato
                </GlowingButton>
                <a
                  href={INSTAGRAM_GABRIELA_URL}
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
              description="A condução de cada demanda com rigor técnico intransigente, transparência total e acolhimento humano ao tempo e às angústias de quem nos procura."
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
                  "Estudo aprofundado e cirúrgico do processo",
                  "Como enfatizam nossos clientes em avaliações públicas, lemos cada lauda processual com rigor absoluto e desenhamos estratégias individualizadas, sem soluções genéricas.",
                ],
                [
                  "02",
                  "Transparência irrestrita e comunicação clara",
                  "Você é mantido informado sobre cada movimentação em linguagem direta, entendendo com clareza os passos, as possibilidades reais e as decisões em curso.",
                ],
                [
                  "03",
                  "Combatividade e presteza na defesa de direitos",
                  "Aliamos atualização jurídica contínua e jurisprudência sólida para defender seus direitos com firmeza perante delegacias, varas judiciais e tribunais.",
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

        {/* Avaliações no Google (Depoimentos Reais - 5,0 estrelas · 92 avaliações) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:items-center">
              <div>
                <Heading
                  eyebrow="PROVA SOCIAL & AVALIAÇÕES REAIS"
                  description="A reputação consolidada da Dra. Gabriela Rodrigues e de sua equipe é comprovada por quem viveu a experiência na prática. Confira as avaliações públicas no Google Maps."
                >
                  Confiança comprovada por quem{" "}
                  <span className="italic text-brand-700">
                    já teve seus direitos defendidos.
                  </span>
                </Heading>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 border-b-2 border-brand-700/60 pb-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-800 hover:border-brand-700 hover:text-brand-700"
                  >
                    Ver perfil e avaliações no Google Maps{" "}
                    <ArrowUpRight size={15} />
                  </a>
                </div>

                {/* Rating highlights tags directly from Google */}
                <div className="mt-9 flex flex-wrap gap-2">
                  {[
                    "Profissional extremamente capacitada",
                    "Atenciosa e dedicada",
                    "Transparência em cada etapa",
                    "Soluções rápidas e eficientes",
                    "Equipe prestativa e educada",
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
              </div>

              {/* Public score box */}
              <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden border border-brand-700/25 bg-ivory p-8 shadow-card sm:p-10">
                <div className="absolute -right-10 -top-16 size-56 rounded-full border border-brand-700/10" />
                <div className="absolute -right-2 -top-8 size-40 rounded-full border border-brand-700/10" />

                <div className="relative flex items-center justify-between gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-800">
                    Avaliações Verificadas · Google Maps
                  </span>
                  <div
                    className="flex gap-1 text-brand-700"
                    aria-label="5 de 5 estrelas"
                  >
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star
                        key={index}
                        size={17}
                        fill="currentColor"
                        strokeWidth={1}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative mt-8 flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <span className="font-serif text-7xl font-normal leading-none text-ink sm:text-8xl">
                      5,0
                    </span>
                    <p className="mt-2 text-xs font-semibold text-brand-800">
                      Excelente · Classificação Máxima Unânime
                    </p>
                  </div>
                  <div className="pb-1 text-right">
                    <p className="font-serif text-3xl font-semibold text-brand-700">
                      92 avaliações
                    </p>
                    <p className="mt-1 text-xs text-ink-soft">
                      Perfil profissional em Lavras - MG
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Grid - First Row */}
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {clientReviews.slice(0, 4).map((review) => (
                <div
                  key={review.name}
                  className="flex flex-col justify-between border border-ink/10 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5 text-brand-700">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={13}
                            fill="currentColor"
                            strokeWidth={1}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-ink-soft">
                        {review.date}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold text-brand-800">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-6 text-ink-soft italic">
                      &ldquo;{review.content}&rdquo;
                    </p>

                    {review.reply && (
                      <div className="mt-3 rounded-md bg-brand-50 p-2.5 text-[11px] leading-5 text-brand-900 border border-brand-700/20">
                        <span className="font-bold block text-[10px] uppercase tracking-wider text-brand-800 mb-0.5">
                          Resposta da Dra. Gabriela:
                        </span>
                        &ldquo;{review.reply}&rdquo;
                      </div>
                    )}
                  </div>

                  <div className="mt-6 border-t border-ink/10 pt-4">
                    <p className="font-serif text-base font-semibold text-ink">
                      {review.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-ink-soft">
                      {review.reviewsCount} no Google
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonials Grid - Second Row */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {clientReviews.slice(4, 8).map((review) => (
                <div
                  key={review.name}
                  className="flex flex-col justify-between border border-ink/10 bg-ivory/60 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5 text-brand-700">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={13}
                            fill="currentColor"
                            strokeWidth={1}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-ink-soft">
                        {review.date}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold text-brand-800">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-6 text-ink-soft italic">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-ink/10 pt-4">
                    <p className="font-serif text-base font-semibold text-ink">
                      {review.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-ink-soft">
                      {review.reviewsCount} no Google
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonials Grid - Third Row */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {clientReviews.slice(8, 12).map((review) => (
                <div
                  key={review.name}
                  className="flex flex-col justify-between border border-ink/10 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5 text-brand-700">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={13}
                            fill="currentColor"
                            strokeWidth={1}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-ink-soft">
                        {review.date}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold text-brand-800">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-6 text-ink-soft italic">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-ink/10 pt-4">
                    <p className="font-serif text-base font-semibold text-ink">
                      {review.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-ink-soft">
                      {review.reviewsCount} no Google
                    </p>
                  </div>
                </div>
              ))}
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
                eyebrow="CONTATO & LOCALIZAÇÃO"
                description="Agende sua consulta presencial em nosso escritório no Centro de Lavras ou realize seu atendimento de forma totalmente on-line com sigilo e segurança."
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
                  Atendimento direto e retorno com prontidão:{" "}
                  <strong className="text-ink">{PHONE_DISPLAY}</strong>.
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-ink-soft">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-brand-700 shrink-0" />
                  <span>Segunda a Sexta: 08h às 18h (Plantão Criminal sob consulta)</span>
                </div>
                <div className="flex flex-col gap-2 pt-1 text-xs">
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-brand-700 shrink-0" />
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <a
                        href={`tel:+${WHATSAPP_NUMBER}`}
                        className="hover:text-brand-700 transition-colors"
                      >
                        {PHONE_DISPLAY}{" "}
                        <span className="text-[10px] text-ink-soft">
                          (Dra. Gabriela)
                        </span>
                      </a>
                      <span className="text-ink/20">·</span>
                      <a
                        href={`tel:+${WHATSAPP_MARCELA}`}
                        className="hover:text-brand-700 transition-colors"
                      >
                        {PHONE_MARCELA}{" "}
                        <span className="text-[10px] text-ink-soft">
                          (Dra. Marcela)
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <InstagramIcon size={16} className="text-brand-700 shrink-0 mt-0.5" />
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                    <a
                      href={INSTAGRAM_FIRM_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-brand-700 transition-colors font-medium text-brand-900"
                    >
                      {INSTAGRAM_FIRM_HANDLE}
                    </a>
                    <span className="text-ink/20">·</span>
                    <a
                      href={INSTAGRAM_GABRIELA_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-brand-700 transition-colors"
                    >
                      {INSTAGRAM_GABRIELA_HANDLE}
                    </a>
                    <span className="text-ink/20">·</span>
                    <a
                      href={INSTAGRAM_MARCELA_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-brand-700 transition-colors"
                    >
                      {INSTAGRAM_MARCELA_HANDLE}
                    </a>
                  </div>
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
                    Lavras · Minas Gerais
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md not-italic text-[14px] leading-7 text-ink-soft">
                <strong className="text-ink font-semibold">
                  Dra. Gabriela Rodrigues - Escritório de Advocacia
                </strong>
                <br />
                Lhorrana & Rodrigues Advocacia e Assessoria Jurídica
                <br />
                R. Firmino Sales, 491 - Centro
                <br />
                Lavras - MG, CEP 37200-102, Brasil
              </address>

              <div className="my-7 h-px bg-ink/10" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-soft">
                  Atendimento presencial no Centro e on-line em todo o Brasil
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
                DRA. GABRIELA RODRIGUES · LHORRANA & RODRIGUES ADVOCACIA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl text-white">
                Precisa de uma defesa técnica, combativa e comprometida com seus
                direitos?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Gabriela. Gostaria de agendar uma consulta inicial para avaliar meu caso."
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
                  src="/Logotipo Jurídico Dourado LR.png"
                  width={1774}
                  height={887}
                  alt="Lhorrana & Rodrigues — Advocacia e Assessoria Jurídica"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="mt-5 max-w-xs text-xs leading-6 text-white/65">
                Defesa técnica de alta precisão, rigor analítico e compromisso
                humano. Sede no Centro de Lavras - MG e atendimento digital em
                todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-brand-300">
                Dra. Gabriela Rodrigues · Advocacia e Assessoria Jurídica
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
                  A Advogada & Escritório
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
                  Contato & Sede em Lavras
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-300">
                Contato Direto
              </h2>
              <div className="mt-4 flex flex-col items-start gap-2.5 text-xs text-white/70">
                <a
                  href={getWhatsAppUrl("Olá, Dra. Gabriela. Gostaria de solicitar um atendimento.", WHATSAPP_NUMBER)}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <WhatsAppIcon size={15} /> WhatsApp: {PHONE_DISPLAY}{" "}
                  <span className="text-[10px] text-brand-300">(Dra. Gabriela)</span>
                </a>
                <a
                  href={getWhatsAppUrl("Olá, Dra. Marcela. Gostaria de solicitar um atendimento.", WHATSAPP_MARCELA)}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <WhatsAppIcon size={15} /> WhatsApp: {PHONE_MARCELA}{" "}
                  <span className="text-[10px] text-brand-300">(Dra. Marcela)</span>
                </a>
                <div className="my-1 flex flex-wrap items-center gap-2 pt-1 text-[11px]">
                  <a
                    href={INSTAGRAM_FIRM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link inline-flex items-center gap-1.5 font-medium text-brand-200"
                  >
                    <InstagramIcon size={13} /> {INSTAGRAM_FIRM_HANDLE}
                  </a>
                  <span className="text-white/20">·</span>
                  <a
                    href={INSTAGRAM_GABRIELA_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link inline-flex items-center gap-1.5"
                  >
                    {INSTAGRAM_GABRIELA_HANDLE}
                  </a>
                  <span className="text-white/20">·</span>
                  <a
                    href={INSTAGRAM_MARCELA_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link inline-flex items-center gap-1.5"
                  >
                    {INSTAGRAM_MARCELA_HANDLE}
                  </a>
                </div>
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
                  <span>R. Firmino Sales, 491 - Centro, Lavras - MG</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-6 text-[10px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Dra. Gabriela Rodrigues - Escritório
              de Advocacia (Lhorrana & Rodrigues). Todos os direitos reservados.
            </p>
            <p>
              Conteúdo meramente informativo, em estrita conformidade com o
              Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </footer>

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
