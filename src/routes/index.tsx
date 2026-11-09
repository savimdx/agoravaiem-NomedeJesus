import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Check,
  Zap,
  Lock,
  Gift,
  ShieldCheck,
  ChevronDown,
  Star,
  Ban,
  CheckSquare,
} from "lucide-react";

const HERO_IMAGE = "/assets/images/hero.png";
const HERO_FALLBACK = "https://i.ibb.co/gb6MK00g/B-blia-Memorizada-M-todo-Exclusivo.png";

const modules = [
  {
    title: "Módulo 1",
    src: "/assets/images/modulo-1.png",
    fallback: "https://i.ibb.co/352j8Wy8/M-DULO-1.png",
  },
  {
    title: "Módulo 2",
    src: "/assets/images/modulo-2.png",
    fallback: "https://i.ibb.co/sYC3dcK/M-DULO-2.png",
  },
  {
    title: "Módulo 3",
    src: "/assets/images/modulo-3.png",
    fallback: "https://i.ibb.co/FkjK9xFN/M-DULO-3.png",
  },
  {
    title: "Módulo 4",
    src: "/assets/images/modulo-4.png",
    fallback: "https://i.ibb.co/WpNnmnmF/M-DULO-4.png",
  },
  {
    title: "Módulo 5",
    src: "/assets/images/modulo-5.png",
    fallback: "https://i.ibb.co/Q3tqRSKf/M-DULO-5.png",
  },
  {
    title: "Módulo 6",
    src: "/assets/images/modulo-6.png",
    fallback: "https://i.ibb.co/nq0bsZgH/M-DULO-6.png",
  },
  {
    title: "Módulo 7",
    src: "/assets/images/modulo-7.png",
    fallback: "https://i.ibb.co/Xf9990c0/M-DULO-7.png",
  },
  {
    title: "Módulo 8",
    src: "/assets/images/modulo-8.png",
    fallback: "https://i.ibb.co/V0xnmtgv/M-DULO-8.png",
  },
  {
    title: "Módulo 9",
    src: "/assets/images/modulo-9.png",
    fallback: "https://i.ibb.co/S1SDkzt/M-DULO-9.png",
  },
  {
    title: "Módulo 10",
    src: "/assets/images/modulo-10.png",
    fallback: "https://i.ibb.co/F4gNjRJS/M-DULO-10.png",
  },
];

const testimonialImages = [
  {
    title: "Agradecimento pelo Método Bíblia Memorizada",
    src: "/assets/images/depoimento-1.png",
    fallback: "https://i.ibb.co/4RXyFtj2/Agradecimento-pelo-M-todo-B-blia-Memorizada.png",
  },
  {
    title: "Conversa de WhatsApp em modo escuro",
    src: "/assets/images/depoimento-2.png",
    fallback: "https://i.ibb.co/b5g915tB/Conversa-de-Whats-App-em-modo-escuro.png",
  },
  {
    title: "Conversa no WhatsApp com Carlos Oliveira",
    src: "/assets/images/depoimento-3.png",
    fallback: "https://i.ibb.co/zhLc54LL/Conversa-no-Whats-App-com-Carlos-Oliveira-1.png",
  },
  {
    title: "Depoimento no WhatsApp sobre memorização bíblica",
    src: "/assets/images/depoimento-4.png",
    fallback: "https://i.ibb.co/fYmLTTZQ/Depoimento-no-Whats-App-sobre-memoriza-o-b-blica.png",
  },
  {
    title: "Depoimento WhatsApp do Pastor Roberto",
    src: "/assets/images/depoimento-5.png",
    fallback: "https://i.ibb.co/sJQVGVY3/Depoimento-Whats-App-do-Pastor-Roberto.png",
  },
];

const ALL_PRELOAD_IMAGES = [
  HERO_IMAGE,
  ...modules.map((m) => m.src),
  ...testimonialImages.map((t) => t.src),
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Método Bíblia Memorizada — Memorize a Bíblia em 15 min/dia" },
      {
        name: "description",
        content:
          "Memorize os 1.189 capítulos da Bíblia estudando apenas 15 minutos por dia. Pagamento único e acesso vitalício.",
      },
      { property: "og:title", content: "Método Bíblia Memorizada" },
      {
        property: "og:description",
        content: "Memorize a Bíblia inteira estudando apenas 15 minutos por dia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preload", as: "image", href: HERO_IMAGE, fetchPriority: "high" },
      { rel: "preload", as: "image", href: "/assets/images/modulo-1.png" },
      { rel: "preload", as: "image", href: "/assets/images/modulo-2.png" },
      { rel: "preload", as: "image", href: "/assets/images/modulo-3.png" },
      { rel: "preload", as: "image", href: "/assets/images/depoimento-1.png" },
    ],
  }),
  component: Index,
});

// Link oficial de checkout Wiapy
const CHECKOUT_URL = "https://pay.wiapy.com/p0b1Wi02yfUV";

function Cta({
  children = "QUERO MEMORIZAR A BÍBLIA",
  onClick,
  href,
}: {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  href?: string;
}) {
  return (
    <a
      href={href ?? "#"}
      onClick={onClick}
      suppressHydrationWarning
      className="inline-block w-full max-w-md cursor-pointer rounded-lg bg-emerald-600 px-6 py-4 text-center text-sm font-extrabold uppercase text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-500 hover:brightness-105 active:scale-[0.99]"
    >
      {children}
    </a>
  );
}

const tags = [
  "1.189 capítulos na sua mente",
  "15 minutos por dia",
  "Sistema mnemônico bíblico",
  "Cite versículos sem olhar",
  "Pregue sem se prender a textos",
  "Acesso vitalício",
];

const receive = [
  "Treinamento completo de memorização",
  "Memorize versículos com facilidade",
  "Conhecimento completo da Bíblia",
  "Cite versículos sem olhar a Bíblia",
  "Pagamento único sem mensalidades",
  "Acesso vitalício a todo o conteúdo",
];

const faq = [
  [
    "Como eu vou acessar o curso?",
    "Logo após a confirmação do pagamento você recebe no seu e-mail os dados de acesso.",
  ],
  [
    "E se eu não gostar?",
    "Você tem 7 dias de garantia incondicional. Basta enviar um e-mail e devolvemos 100% do seu dinheiro.",
  ],
  [
    "Por quanto tempo terei acesso ao treinamento?",
    "O acesso é vitalício. Pagamento único, sem mensalidades.",
  ],
  [
    "Realmente consigo memorizar mesmo tendo pouco tempo?",
    "Sim! O método foi criado para quem tem rotina corrida: apenas 15 minutos por dia.",
  ],
  [
    "Vou receber os bônus junto com o curso?",
    "Sim, todos os bônus são liberados junto com o acesso ao treinamento.",
  ],
];

function Index() {
  const [open, setOpen] = useState<number | null>(null);
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(new Date().toLocaleDateString("pt-BR"));

    // Precarrega todas as imagens imediatamente no navegador do lead
    if (typeof window !== "undefined") {
      ALL_PRELOAD_IMAGES.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }
  }, []);

  const scrollToPrice = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("preco-card");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div suppressHydrationWarning className="min-h-screen bg-background text-foreground">
      <div
        suppressHydrationWarning
        className="sticky top-0 z-50 bg-destructive py-2 text-center text-xs font-bold uppercase text-destructive-foreground shadow-sm"
      >
        <Zap className="mr-1 inline h-3.5 w-3.5" /> Oferta por tempo limitado — disponível apenas
        hoje <span suppressHydrationWarning>{today ? `(${today})` : ""}</span>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-background to-muted px-4 pb-14 pt-8 text-center">
        <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-[11px] font-semibold uppercase text-primary">
          <Lock className="h-3 w-3" /> Compra segura · 7 dias de garantia
        </span>
        <h1 className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
          <span className="text-primary">Memorize a Bíblia inteira</span> estudando apenas 15
          minutos por dia
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Memorize todos os 1.189 capítulos da Bíblia com o Método Bíblia Memorizada.
        </p>
        <div className="relative mx-auto mt-6 w-full max-w-md aspect-square overflow-hidden rounded-lg bg-muted/20 shadow-xl">
          <img
            src={HERO_IMAGE}
            alt="Bíblia Memorizada - Método Exclusivo"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            width={640}
            height={640}
            onError={(e) => {
              const el = e.currentTarget;
              if (!el.dataset.fallbackApplied) {
                el.dataset.fallbackApplied = "true";
                el.src = HERO_FALLBACK;
              }
            }}
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div className="mt-6">
          <Cta onClick={scrollToPrice}>QUERO MEMORIZAR A BÍBLIA</Cta>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          <Check className="inline h-3 w-3 text-primary" /> Acesso imediato após o pagamento
        </p>
        <div className="mt-3 flex items-center justify-center gap-1 text-primary">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
          <span className="ml-2 text-xs text-muted-foreground">
            + de <b className="text-foreground">3.000 alunos</b> memorizando
          </span>
        </div>
        <div className="mx-auto mt-5 flex max-w-xl flex-wrap justify-center gap-x-5 gap-y-2">
          {tags.map((t) => (
            <span key={t} className="text-[11px] font-medium uppercase text-muted-foreground">
              ✦ {t}
            </span>
          ))}
        </div>
      </section>

      {/* Veja o material */}
      <section className="bg-secondary py-12 text-center text-secondary-foreground overflow-hidden">
        <div className="px-4">
          <h2 className="text-2xl font-bold">
            Veja os Módulos do Método <span className="text-destructive">na Prática</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs text-secondary-foreground/75 sm:text-sm">
            Conheça os módulos estruturados passo a passo para a memorização da Palavra.
          </p>
        </div>

        {/* Scroll Infinito de Módulos */}
        <div className="relative mt-8 w-full overflow-hidden select-none">
          {/* Sombras laterais para transição suave */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-secondary to-transparent sm:w-24" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-secondary to-transparent sm:w-24" />

          <div className="animate-marquee flex gap-5 px-4 py-2 pointer-events-none">
            {[...modules, ...modules].map((m, idx) => (
              <div
                key={`${m.title}-${idx}`}
                className="relative block w-60 shrink-0 aspect-[453/640] overflow-hidden rounded-xl bg-card/90 text-card-foreground shadow-lg sm:w-72"
              >
                <img
                  src={m.src}
                  alt={m.title}
                  loading="eager"
                  decoding="async"
                  width={453}
                  height={640}
                  draggable={false}
                  onError={(e) => {
                    const el = e.currentTarget;
                    if (!el.dataset.fallbackApplied && m.fallback) {
                      el.dataset.fallbackApplied = "true";
                      el.src = m.fallback;
                    }
                  }}
                  className="h-full w-full select-none rounded-xl object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="px-4">
          <p className="mx-auto mt-8 max-w-2xl text-sm opacity-80">
            Imagine ser capaz de lembrar facilmente os versículos da Bíblia, pregar sem se prender a
            textos e citar versículos durante as pregações ou evangelismo sem precisar olhar na
            Bíblia.
          </p>
        </div>
      </section>

      {/* O que você recebe */}
      <section className="px-4 py-12">
        <h2 className="text-center text-2xl font-bold">O que você recebe</h2>
        <ul className="mx-auto mt-6 grid max-w-xl gap-3 sm:grid-cols-2">
          {receive.map((r) => (
            <li key={r} className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {r}
            </li>
          ))}
        </ul>
      </section>

      {/* Problema / Solução */}
      <section className="bg-muted px-4 py-12">
        <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-card p-6 text-center shadow-sm">
            <Ban className="mx-auto h-6 w-6 text-destructive" />
            <p className="mt-2 font-bold">Problema</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Você sonha em memorizar a Bíblia, mas não tem muito tempo disponível e esquece os
              versículos durante as ministrações.
            </p>
          </div>
          <div className="rounded-lg bg-card p-6 text-center shadow-sm">
            <CheckSquare className="mx-auto h-6 w-6 text-success" />
            <p className="mt-2 font-bold">Solução</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Técnicas avançadas de memorização baseadas em estudos científicos, com poucos minutos
              de estudo por dia.
            </p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="overflow-hidden py-12 text-center">
        <div className="px-4">
          <h2 className="text-2xl font-bold">
            O que os alunos <span className="text-primary">dizem</span>
          </h2>
          <div className="mt-2 flex justify-center gap-1 text-primary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <p className="mx-auto mt-2 max-w-xl text-xs text-muted-foreground sm:text-sm">
            Depoimentos reais enviados no nosso WhatsApp por quem já está aplicando o método.
          </p>
        </div>

        {/* Scroll Infinito de Depoimentos */}
        <div className="relative mt-8 w-full overflow-hidden select-none">
          {/* Sombras laterais para transição suave */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-background to-transparent sm:w-24" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-background to-transparent sm:w-24" />

          <div className="animate-marquee flex gap-5 px-4 py-2 pointer-events-none">
            {[
              ...testimonialImages,
              ...testimonialImages,
              ...testimonialImages,
              ...testimonialImages,
            ].map((t, idx) => (
              <div
                key={`${t.title}-${idx}`}
                className="relative block w-64 shrink-0 aspect-[360/640] overflow-hidden rounded-2xl border border-border/50 bg-card p-1 shadow-lg sm:w-72"
              >
                <img
                  src={t.src}
                  alt={t.title}
                  loading="eager"
                  decoding="async"
                  width={360}
                  height={640}
                  draggable={false}
                  onError={(e) => {
                    const el = e.currentTarget;
                    if (!el.dataset.fallbackApplied && t.fallback) {
                      el.dataset.fallbackApplied = "true";
                      el.src = t.fallback;
                    }
                  }}
                  className="h-full w-full select-none rounded-xl object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section id="oferta" className="px-4 py-12">
        <div className="mx-auto max-w-md rounded-xl border-2 border-primary/50 bg-card p-6 text-center shadow-xl">
          <span className="inline-block rounded-full bg-destructive px-3 py-1 text-[11px] font-bold uppercase text-destructive-foreground">
            Última chance — oferta termina hoje
          </span>
          <h2 className="mt-3 text-xl font-bold">Método Bíblia Memorizada</h2>
          <div className="relative mx-auto mt-4 w-full aspect-square overflow-hidden rounded-lg bg-muted/20">
            <img
              src={HERO_IMAGE}
              alt="Método Bíblia Memorizada"
              loading="eager"
              decoding="async"
              width={640}
              height={640}
              onError={(e) => {
                const el = e.currentTarget;
                if (!el.dataset.fallbackApplied) {
                  el.dataset.fallbackApplied = "true";
                  el.src = HERO_FALLBACK;
                }
              }}
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
          <div id="preco-card" className="scroll-mt-14">
            <ul className="mt-4 space-y-2 text-left text-sm">
              {[
                "Treinamento completo de memorização",
                "1.189 capítulos em 15 min/dia",
                "Acesso vitalício · pagamento único",
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  {x}
                </li>
              ))}
            </ul>
            <div className="mt-3 space-y-2 text-left text-xs sm:text-sm">
              {[
                ["Bônus #1", "Guia de oratória básica"],
                ["Bônus #2", "Como preparar uma mensagem impactante"],
                ["Bônus #3", "Histórias Bíblicas"],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="flex items-center gap-2 rounded-md bg-accent px-3 py-2 text-accent-foreground"
                >
                  <Gift className="h-4 w-4 shrink-0 text-primary" />
                  <span className="shrink-0 whitespace-nowrap font-bold">{a}</span>
                  <span className="shrink-0">—</span>
                  <span className="leading-tight">{b}</span>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <p className="text-sm font-semibold text-destructive line-through">de R$97,00</p>
              <p className="my-1 text-6xl font-black tracking-tight text-primary sm:text-7xl">
                R$ 10,00
              </p>
              <p className="mt-1 text-xs font-medium text-muted-foreground">
                Pagamento único · Acesso vitalício
              </p>
              <span className="mt-2 inline-block rounded-full bg-muted px-3 py-1 text-xs font-semibold text-primary">
                Você economiza R$87,00
              </span>
              <div className="mt-5">
                <Cta href={CHECKOUT_URL}>EU QUERO ACESSAR O MÉTODO!</Cta>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">VISA · MasterCard · Elo · PIX</p>
              <p className="mt-1 text-xs font-semibold text-destructive">
                ATENÇÃO: vagas com esse valor são LIMITADAS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="bg-muted px-4 py-12 text-center">
        <ShieldCheck className="mx-auto h-10 w-10 rounded-full border border-destructive/40 p-2 text-destructive" />
        <h2 className="mt-3 text-xl font-bold">Garantia de 7 dias</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          Se por algum motivo você achar que o treinamento não é pra você, basta mandar um único
          e-mail que devolvemos o seu dinheiro. Risco zero!
        </p>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-xl px-4 py-12">
        <h2 className="text-center text-2xl font-bold">Perguntas Frequentes</h2>
        <div className="mt-6 divide-y">
          {faq.map(([q, a], i) => (
            <div key={q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-bold"
              >
                {q}
                <span className="rounded-full bg-secondary p-1 text-secondary-foreground">
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition ${open === i ? "rotate-180" : ""}`}
                  />
                </span>
              </button>
              {open === i && <p className="pb-4 text-sm text-muted-foreground">{a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-secondary px-4 py-12 text-center text-secondary-foreground">
        <h2 className="text-2xl font-bold">
          Comece a memorizar a Bíblia <span className="text-primary">hoje</span>
        </h2>
        <div className="mt-5">
          <Cta href={CHECKOUT_URL}>QUERO MEMORIZAR POR R$10,00</Cta>
        </div>
        <p className="mt-8 text-xs opacity-60">Dúvidas ou suporte: contato@bibliamemorizada.site</p>
        <p className="mt-1 text-xs opacity-60">
          © 2026 Bíblia Memorizada. Todos os direitos reservados.
        </p>
      </section>
    </div>
  );
}
