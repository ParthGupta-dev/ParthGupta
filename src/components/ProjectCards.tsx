"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  image: string;
  label: string;
  status: string;
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    title: "ArmorGuard",
    label: "Flagship Case File",
    status: "Active Security System",
    description:
      "An autonomous AI pentesting platform that lets vibe coders run governed security scans using a PydanticAI agent, real pentesting tools, and ArmorIQ validation to block drift, validate execution, and stream findings into reports.",
    tech: [
      "Next.js",
      "FastAPI",
      "PydanticAI",
      "Supabase",
      "ArmorIQ",
      "Pentesting Tools",
    ],
    github: "https://github.com/ParthGupta-dev/ArmorGuard.git",
    live: "",
    image: "/projects/armorguard.png",
    featured: true,
  },
  {
    title: "Errnd",
    label: "Startup Build",
    status: "Product System",
    description:
      "A startup-ready platform for posting tasks and enabling localised service exchange with secure user flows and task lifecycle management.",
    tech: ["Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
    github: "https://github.com/ParthGupta-dev/Errnd.git",
    live: "https://errnd.vercel.app/",
    image: "/projects/errnd.png",
  },
  {
    title: "Career Recommender",
    label: "AI Product",
    status: "Decision Support Tool",
    description:
      "An AI-driven career discovery platform with personalised roadmaps, guidance logic, and resume analysis to help students choose stronger paths.",
    tech: ["AI/ML", "Next.js", "Vercel Edge", "Tailwind CSS"],
    github: "https://github.com/ParthGupta-dev/Career-recomender.git",
    live: "https://career-recomender-o33h.vercel.app/",
    image: "/projects/career_recommender.png",
  },
  {
    title: "Sewadar Insurance",
    label: "Business Portal",
    status: "Client Platform",
    description:
      "A professional insurance marketing portal with consultation flow, lead handling, and customer contact integration for business outreach.",
    tech: ["Next.js", "Tailwind CSS", "WhatsApp API", "Lucide Icons"],
    github: "https://github.com/ParthGupta-dev/LIC-website.git",
    live: "https://sewadarinsurancemarketing.vercel.app/",
    image: "/projects/sewadar.png",
  },
];

const FEATURED = PROJECTS.find((project) => project.featured);
const SECONDARY_PROJECTS = PROJECTS.filter((project) => !project.featured);

export default function ProjectCards() {
  if (!FEATURED) return null;

  return (
    <div className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Top ledger strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-3 rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-4 backdrop-blur-md sm:grid-cols-3 sm:p-5"
        >
          <LedgerPill label="Featured Build" value="ArmorGuard" />
          <LedgerPill label="Portfolio Mode" value="Case Files" />
          <LedgerPill label="Focus" value="Backend • AI • Security" />
        </motion.div>

        {/* Featured flagship project */}
        <motion.article
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75 }}
          className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/35 shadow-[0_35px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl"
        >
          {/* Background layers */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_22%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_42%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:34px_34px]" />
          <div className="pointer-events-none absolute left-6 top-0 h-full w-px bg-white/[0.05]" />
          <div className="pointer-events-none absolute right-6 top-0 h-full w-px bg-white/[0.05]" />
          <div className="pointer-events-none absolute left-0 top-10 h-px w-full bg-white/[0.04]" />
          <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] h-72 w-72 rounded-full bg-white/[0.06] blur-[120px]" />

          <div className="relative z-10 grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left: dossier content */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/72">
                    01 / Flagship System
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">
                    {FEATURED.status}
                  </span>
                </div>

                <div>
                  <p className="mb-3 text-[10px] uppercase tracking-[0.32em] text-white/35">
                    {FEATURED.label}
                  </p>
                  <h3 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                    {FEATURED.title}
                  </h3>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-white/65 sm:text-[15px]">
                  {FEATURED.description}
                </p>

                <div className="grid gap-3 sm:grid-cols-3">
                  <FeatureStat
                    label="Role"
                    value="AI Pentesting Platform"
                    note="Autonomous, governed, reportable"
                  />
                  <FeatureStat
                    label="Core Stack"
                    value="FastAPI + PydanticAI"
                    note="Tool orchestration + control"
                  />
                  <FeatureStat
                    label="Security Layer"
                    value="ArmorIQ"
                    note="Validation, drift control, logging"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {FEATURED.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/62"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: visual preview + action rail */}
            <div className="relative border-t border-white/10 lg:border-l lg:border-t-0">
              <div className="relative h-full min-h-[360px] overflow-hidden">
                <img
                  src={FEATURED.image}
                  alt={`${FEATURED.title} preview`}
                  className="h-full w-full object-cover object-top opacity-60 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.72))]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_24%)]" />

                {/* dossier overlays */}
                <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-3">
                  <div className="rounded-2xl border border-white/12 bg-black/40 px-4 py-3 backdrop-blur-md">
                    <p className="text-[10px] uppercase tracking-[0.26em] text-white/38">
                      Primary File
                    </p>
                    <p className="mt-1 text-sm font-medium text-white/90">
                      ArmorGuard / Offensive Security Workflow
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/12 bg-black/40 px-3 py-3 text-right backdrop-blur-md">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/38">
                      Access
                    </p>
                    <p className="mt-1 text-sm font-medium text-white/90">Open</p>
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] border border-white/10 bg-black/45 p-4 backdrop-blur-md">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-white/38">
                      Project classification
                    </p>
                    <p className="mt-1 text-sm text-white/88">
                      Governed AI security tooling with execution control
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <ProjectLink href={FEATURED.github} icon={<Github size={18} />}>
                      Repository
                    </ProjectLink>

                    {FEATURED.live && (
                      <ProjectLink href={FEATURED.live} icon={<ArrowUpRight size={18} />}>
                        Open
                      </ProjectLink>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Secondary project dossier cards */}
        <div className="grid gap-5 xl:grid-cols-3">
          {SECONDARY_PROJECTS.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] shadow-[0_20px_90px_rgba(0,0,0,0.28)] backdrop-blur-md"
            >
              <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:28px_28px]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
              <div className="pointer-events-none absolute right-[-2rem] top-[-2rem] h-40 w-40 rounded-full bg-white/[0.05] blur-[90px]" />

              <div className="relative h-52 overflow-hidden border-b border-white/10">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover object-top opacity-55 transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.78))]" />

                <div className="absolute left-4 top-4 rounded-full border border-white/12 bg-black/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/72 backdrop-blur-md">
                  {String(index + 2).padStart(2, "0")}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/42">
                    {project.label}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="relative z-10 p-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                    {project.status}
                  </span>

                  <div className="flex items-center gap-2">
                    <IconLink href={project.github} ariaLabel={`${project.title} repository`}>
                      <Github size={16} />
                    </IconLink>

                    {project.live && (
                      <IconLink href={project.live} ariaLabel={`Open ${project.title}`}>
                        <ArrowUpRight size={16} />
                      </IconLink>
                    )}
                  </div>
                </div>

                <p className="text-sm leading-7 text-white/62">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

function LedgerPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
      <p className="text-[10px] uppercase tracking-[0.24em] text-white/38">{label}</p>
      <p className="mt-1 text-sm font-medium text-white/88">{value}</p>
    </div>
  );
}

function FeatureStat({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
      <p className="text-[10px] uppercase tracking-[0.24em] text-white/38">{label}</p>
      <p className="mt-2 text-sm font-semibold text-white">{value}</p>
      <p className="mt-2 text-xs leading-6 text-white/48">{note}</p>
    </div>
  );
}

function ProjectLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-sm font-medium text-white/88 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.09]"
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}

function IconLink({
  href,
  children,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  ariaLabel: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/68 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
    >
      {children}
    </a>
  );
}