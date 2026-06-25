"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Bot,
  Server,
  Workflow,
  FileText,
  Database,
  Cpu,
  MapPinned,
  ScanLine,
} from "lucide-react";
import MagneticButton from "./MagneticButton";

const stats = [
  { label: "Current focus", value: "Backend • AI systems • Security" },
  { label: "Primary build", value: "ArmorGuard" },
  { label: "Approach", value: "Systems-first, production-minded" },
];

const stack = ["Node.js", "Python", "Next.js", "MongoDB", "Docker", "AI Agents"];

const operationModules = [
  {
    icon: <Shield size={15} />,
    title: "Threat simulation",
    text: "Controlled adversarial flows and attack-path analysis for governed demonstrations.",
  },
  {
    icon: <Bot size={15} />,
    title: "AI orchestration",
    text: "Agent-guided workflows for reasoning, evidence flow, and operator visibility.",
  },
  {
    icon: <Server size={15} />,
    title: "Backend control layer",
    text: "Secure service coordination, execution pipelines, and operational state management.",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-16 pt-28 md:px-8 lg:px-10">
      {/* Full-screen hero background overlays */}
      <div className="pointer-events-none absolute inset-0">
        {/* architectural grid */}
        <div className="absolute inset-0 opacity-[0.91] architect-grid" />
        {/* cinematic sweeps */}
        <div className="page-sweep page-sweep-a" />
        <div className="page-sweep page-sweep-b" />

        {/* side vignette */}
        <div className="absolute inset-y-0 left-0 w-[18%] bg-gradient-to-r from-black/60 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[18%] bg-gradient-to-l from-black/60 to-transparent" />

        {/* central soft glow */}
        <div className="absolute left-1/2 top-[14%] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center">
        <div className="grid w-full gap-10 lg:grid-cols-[0.95fr_1.05fr] xl:gap-12">
          {/* LEFT SIDE */}
          <div className="relative flex flex-col justify-center">
            {/* left-side dossier overlays */}
            <div className="pointer-events-none absolute -top-4 left-0 hidden xl:block">
            </div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-3xl"
            >
              {/* top strip */}
              <div className="mb-6 flex flex-wrap items-center gap-2.5">
                <span className="dossier-tag">
                  <FileText size={13} />
                  Operation Brief
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-2 text-[10px] uppercase tracking-[0.32em] text-white/42">
                  Backend Systems
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-2 text-[10px] uppercase tracking-[0.32em] text-white/42">
                  Governed AI
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-2 text-[10px] uppercase tracking-[0.32em] text-white/42">
                  Secure Automation
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-2 text-[10px] uppercase tracking-[0.32em] text-white/42">
                  Portfolio Dossier
                </span>
              </div>

              {/* heading block */}
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <span className="meta-label">Parth Gupta / Engineering Portfolio</span>
                  <div className="hidden h-px flex-1 bg-white/10 sm:block" />
                </div>

                <h1 className="paper-title max-w-4xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl md:text-5xl xl:text-6xl">
                  I build backend systems, governed AI workflows, and secure automation for products that need to work under real operational complexity.
                </h1>

                {/* subtle side notes */}
                <div className="mt-5 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.28em] text-white/28">
                  <span>Workflow control</span>
                  <span>•</span>
                  <span>Operational reliability</span>
                  <span>•</span>
                  <span>Adversarial thinking</span>
                </div>
              </div>

              {/* description */}
              <div className="mt-8 max-w-3xl space-y-4">
                <p className="text-dossier text-base leading-8 sm:text-lg">
                  I’m a backend-focused developer building systems that do more than look good in demos.
                  My work sits at the intersection of application engineering, AI orchestration, and
                  security-minded automation — designed to behave reliably when the workflow, data flow,
                  and operational constraints are messy and real.
                </p>

                <p className="text-system-soft max-w-2xl text-sm leading-7 sm:text-[15px]">
                  Right now, my strongest interest lies in resilient backend design, governed agentic systems,
                  and security-oriented products like <span className="text-white">ArmorGuard</span> — where
                  architecture, control, and adversarial thinking all matter at once.
                </p>
              </div>

              {/* actions */}
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <MagneticButton>
                  <a
                    href="#projects"
                    className="btn-primary-cinematic min-w-[180px] px-6 py-3.5 text-sm"
                  >
                    View Projects
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href="#architecture"
                    className="btn-secondary-cinematic min-w-[190px] px-6 py-3.5 text-sm"
                  >
                    Explore Architecture
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href="#contact"
                    className="btn-secondary-cinematic min-w-[160px] px-6 py-3.5 text-sm"
                  >
                    Contact Me
                  </a>
                </MagneticButton>
              </div>

              {/* metrics row */}
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="dossier-card rounded-2xl px-4 py-4 sm:px-5"
                  >
                    <p className="meta-label mb-2">{item.label}</p>
                    <p className="text-sm leading-6 text-white/86">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.9 }}
            className="relative flex items-center"
          >
            <div className="relative w-full space-y-4 lg:max-w-[560px] ml-auto">
              {/* panel connector lines */}
              <div className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-white/8 xl:block" />
              <div className="pointer-events-none absolute left-6 top-24 h-px w-14 bg-white/8" />
              <div className="pointer-events-none absolute left-6 top-[55%] h-px w-14 bg-white/8" />

              {/* IDENTITY DOSSIER */}
              <div className="dossier-card relative overflow-hidden rounded-[1.8rem] p-5 sm:p-6">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_26%,transparent_74%,rgba(255,255,255,0.025))]" />

                <div className="relative z-10">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="meta-label mb-2">Identity Record</p>
                      <h2 className="paper-title text-2xl font-semibold tracking-[-0.03em]">
                        Parth Gupta
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-white/62">
                        Backend Developer • AI Systems Builder • Security-minded Engineer
                      </p>
                    </div>

                    <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] uppercase tracking-[0.32em] text-white/40">
                      Active
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-[112px_1fr]">
                    <div className="portrait-shell mx-auto h-28 w-28 sm:mx-0">
                      <img
                        src="/profile.jpg"
                        alt="Parth Gupta profile"
                        className="h-full w-full object-cover object-center grayscale"
                      />
                    </div>

                    <div className="grid gap-3">
                      <div className="rounded-2xl border border-white/8 bg-white/[0.025] px-4 py-3">
                        <p className="meta-label mb-1">Current direction</p>
                        <p className="text-sm leading-6 text-white/82">
                          Building toward backend engineering roles while going deeper into agent systems,
                          security workflows, and production-minded system design.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/8 bg-white/[0.025] px-4 py-3">
                        <p className="meta-label mb-2">Core stack</p>
                        <div className="flex flex-wrap gap-2">
                          {stack.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/62"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ARMORGUARD OPERATION PANEL */}
              <div className="dossier-card relative overflow-hidden rounded-[1.8rem] p-5 sm:p-6">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),transparent_24%,transparent_76%,rgba(255,255,255,0.02))]" />

                <div className="relative z-10">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <p className="meta-label">Flagship Project</p>
                        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.28em] text-cyan-300">
                          ArmorGuard
                        </span>
                      </div>

                      <h3 className="paper-title text-2xl font-semibold tracking-[-0.03em]">
                        ArmorGuard
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-white/62">
                        A security-focused AI workflow platform built around controlled attack simulation,
                        evidence visibility, and operational oversight.
                      </p>
                    </div>

                    <div className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-white/50">
                      <Workflow size={16} />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {operationModules.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-white/8 bg-white/[0.025] px-4 py-4"
                      >
                        <div className="mb-2 flex items-center gap-2 text-white/82">
                          <span className="rounded-full border border-white/10 bg-white/[0.04] p-2">
                            {item.icon}
                          </span>
                          <span className="text-sm font-medium">{item.title}</span>
                        </div>
                        <p className="pl-11 text-sm leading-6 text-white/58">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* lower strip */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="dossier-card rounded-[1.5rem] px-4 py-4">
                  <div className="mb-3 flex items-center gap-2 text-white/82">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] p-2">
                      <Database size={14} />
                    </span>
                    <p className="text-sm font-medium">System thinking</p>
                  </div>
                  <p className="text-sm leading-6 text-white/56">
                    I care about how services, data, workflows, and operators behave together — not just isolated features.
                  </p>
                </div>

                <div className="dossier-card rounded-[1.5rem] px-4 py-4">
                  <div className="mb-3 flex items-center gap-2 text-white/82">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] p-2">
                      <ScanLine size={14} />
                    </span>
                    <p className="text-sm font-medium">Build philosophy</p>
                  </div>
                  <p className="text-sm leading-6 text-white/56">
                    Clean architecture, governed automation, and products designed to survive beyond the demo stage.
                  </p>
                </div>
              </div>

              <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.02] px-4 py-3">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="meta-label mb-1">Current operating track</p>
                    <p className="text-sm text-white/72">
                      Backend engineering • AI systems • security-oriented product building
                    </p>
                  </div>

                  <a
                    href="#architecture"
                    className="inline-flex items-center gap-2 text-sm text-white/72 transition hover:text-white"
                  >
                    Inspect system blueprints
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}