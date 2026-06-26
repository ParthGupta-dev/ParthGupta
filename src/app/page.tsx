import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectCards from "@/components/ProjectCards";
import ArchitectureGallery from "@/components/ArchitectureGallery";
import TechPulseSkills from "@/components/TechPulseSkills";
import ContactSection from "@/components/ContactSection";

const NAV_ITEMS = [
  { label: "Projects", href: "#projects-frame", code: "01" },
  { label: "Architecture", href: "#architecture-frame", code: "02" },
  { label: "Profile", href: "#about-frame", code: "03" },
  { label: "Experience", href: "#experience-frame", code: "04" },
  { label: "Skills", href: "#skills-frame", code: "05" },
  { label: "Contact", href: "#contact-frame", code: "06" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#040404] text-white selection:bg-white/20">
      {/* GLOBAL CINEMATIC BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Base black */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_28%),linear-gradient(180deg,#080808_0%,#040404_35%,#020202_100%)]" />

        {/* Architectural blueprint grid */}
        <div className="architect-grid absolute inset-0 opacity-[0.14]" />

        {/* Royal-mint / dossier line overlays */}
        <div className="absolute inset-y-0 left-[7%] w-px bg-white/[0.05]" />
        <div className="absolute inset-y-0 right-[7%] w-px bg-white/[0.05]" />
        <div className="absolute left-[10%] top-[12%] h-[1px] w-[26%] bg-white/[0.06]" />
        <div className="absolute right-[8%] top-[22%] h-[1px] w-[18%] bg-white/[0.05]" />
        <div className="absolute left-[14%] top-[48%] h-[1px] w-[22%] bg-white/[0.05]" />
        <div className="absolute right-[10%] top-[68%] h-[1px] w-[24%] bg-white/[0.05]" />

        {/* Window / frame rectangles inspired by architectural intro overlays */}
        <div className="absolute left-[5%] top-[18%] h-28 w-20 border border-white/[0.05]" />
        <div className="absolute right-[8%] top-[32%] h-40 w-28 border border-white/[0.05]" />
        <div className="absolute left-[12%] bottom-[18%] h-32 w-24 border border-white/[0.04]" />

        {/* Soft light pools */}
        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-white/[0.035] blur-[120px]" />
        <div className="absolute right-[-6rem] top-[28%] h-[28rem] w-[28rem] rounded-full bg-white/[0.03] blur-[140px]" />
        <div className="absolute bottom-[-8rem] left-[20%] h-[24rem] w-[24rem] rounded-full bg-white/[0.025] blur-[130px]" />

        {/* Sweep / motion overlays */}
        <div className="page-sweep page-sweep-a" />
        <div className="page-sweep page-sweep-b" />

        {/* Film grain */}
        <div className="film-grain opacity-30" />

        {/* Heavy edge vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_38%,rgba(0,0,0,0.38)_72%,rgba(0,0,0,0.72)_100%)]" />
      </div>

      {/* TOP DOSSIER NAV */}
      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)] sm:px-6">
          <div className="flex min-w-0 items-center gap-4">
            <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-semibold tracking-[0.28em] text-white/80 sm:flex">
              PG
            </div>

            <div className="min-w-0">
              <p className="truncate text-[10px] uppercase tracking-[0.28em] text-white/45">
                Operation Portfolio / Classified Interface
              </p>
              <p className="truncate text-sm font-medium text-white/90">
                Parth Gupta — Backend • AI Systems • Security Automation
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-2 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group flex items-center gap-2 rounded-full border border-transparent px-3 py-2 text-xs tracking-[0.18em] text-white/55 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
              >
                <span className="text-[10px] text-white/28 transition-colors group-hover:text-white/45">
                  {item.code}
                </span>
                <span className="uppercase">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <div className="relative z-10">
        {/* HERO / OPERATION BRIEF */}
        <section className="relative min-h-screen">
          <SectionOverlay
            side="left"
            topLabel="Royal Mint / Entry Sequence"
            bottomLabel="Operation Brief / Primary Identity"
          />
          <HeroSection />
        </section>

        {/* PROJECT CASE FILES */}
        <SectionFrame
          id="projects-frame"
          code="01"
          title="Case Files"
          subtitle="Selected builds, shipped systems, and product-grade experiments."
        >
          <ProjectCards />
        </SectionFrame>

        {/* ARCHITECTURE / BLUEPRINT ROOM */}
        <SectionFrame
          id="architecture-frame"
          code="02"
          title="System Blueprints"
          subtitle="Architecture views of products, flows, services, and orchestration logic."
          tone="dense"
        >
          <ArchitectureGallery />
        </SectionFrame>

        {/* PROFILE DOSSIER */}
        <SectionFrame
          id="about-frame"
          code="03"
          title="Profile Dossier"
          subtitle="Context, motivation, engineering direction, and how I think about building."
        >
          <AboutSection />
        </SectionFrame>

        {/* EXPERIENCE */}
        <SectionFrame
          id="experience-frame"
          code="04"
          title="Field Timeline"
          subtitle="Milestones, work, experiments, and the progression of technical depth."
        >
          <ExperienceTimeline />
        </SectionFrame>

        {/* SKILLS */}
        <SectionFrame
          id="skills-frame"
          code="05"
          title="Capability Matrix"
          subtitle="Languages, tools, domains, and the systems I am actively sharpening."
          tone="dense"
        >
          <TechPulseSkills />
        </SectionFrame>

        {/* CONTACT */}
        <SectionFrame
          id="contact-frame"
          code="06"
          title="Final Transmission"
          subtitle="If you want to build something serious, this is the hand-off point."
        >
          <ContactSection />
        </SectionFrame>
      </div>
    </main>
  );
}

function SectionFrame({
  id,
  code,
  title,
  subtitle,
  children,
  tone = "normal",
}: {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  tone?: "normal" | "dense";
}) {
  return (
    <section
      id={id}
      className={`relative px-4 py-10 sm:px-6 sm:py-14 ${tone === "dense" ? "lg:py-16" : "lg:py-20"
        }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* dossier chapter header */}
        <div className="mb-8 flex flex-col gap-5 rounded-[2rem] border border-white/10 bg-black/28 p-5 backdrop-blur-md sm:p-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-3 text-[11px] font-semibold tracking-[0.22em] text-white/70">
                {code}
              </span>
              <div className="h-px w-16 bg-white/10" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-white/35">
                Classified Chapter
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/55 sm:text-[15px]">
              {subtitle}
            </p>
          </div>

          <div className="grid gap-2 text-[10px] uppercase tracking-[0.24em] text-white/30 sm:text-[11px]">
            <span>Portfolio Sequence / {code}</span>
            <span>Restricted Internal View</span>
          </div>
        </div>

        {/* chapter body */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-black/18 backdrop-blur-sm shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
          {/* internal linework */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-6 top-0 h-full w-px bg-white/[0.04]" />
            <div className="absolute right-6 top-0 h-full w-px bg-white/[0.04]" />
            <div className="absolute left-0 top-8 h-px w-full bg-white/[0.03]" />
            <div className="absolute left-0 bottom-8 h-px w-full bg-white/[0.03]" />
            <div className="film-grain opacity-20" />
          </div>

          <div className="relative z-10">{children}</div>
        </div>
      </div>
    </section>
  );
}

function SectionOverlay({
  side,
  topLabel,
  bottomLabel,
}: {
  side: "left" | "right";
  topLabel: string;
  bottomLabel: string;
}) {
  const sideClass =
    side === "left"
      ? "left-3 sm:left-6 lg:left-10 items-start"
      : "right-3 sm:right-6 lg:right-10 items-end";

  return (
    <div
      className={`pointer-events-none absolute top-28 z-20 hidden h-[calc(100%-7rem)] ${sideClass} xl:flex`}
    >
      <div className="flex h-full flex-col justify-between">
        <div className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white/40 backdrop-blur-md">
          {topLabel}
        </div>

        <div className="flex items-center gap-3">
          <div className="h-16 w-px bg-white/10" />
          <div className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white/40 backdrop-blur-md">
            {bottomLabel}
          </div>
        </div>
      </div>
    </div>
  );
}