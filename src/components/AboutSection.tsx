"use client";

import { motion } from "framer-motion";

const FOCUS_AREAS = [
  "Backend engineering",
  "AI-assisted systems",
  "Security-oriented product thinking",
  "Automation and tooling",
];

const CURRENT_STACK = [
  "Java",
  "C",
  "Next.js",
  "FastAPI",
  "Supabase",
  "MongoDB",
];

export default function AboutSection() {
  return (
    <div className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-6xl"
      >
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Main dossier narrative */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/32 p-6 shadow-[0_28px_100px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-8">
            <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:30px_30px]" />
            <div className="pointer-events-none absolute left-6 top-0 h-full w-px bg-white/[0.05]" />
            <div className="pointer-events-none absolute right-6 top-0 h-full w-px bg-white/[0.05]" />
            <div className="pointer-events-none absolute left-0 top-10 h-px w-full bg-white/[0.04]" />
            <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] h-72 w-72 rounded-full bg-white/[0.05] blur-[120px]" />

            <div className="relative z-10">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/72">
                  Classified Profile
                </span>
                <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/42">
                  Engineering Dossier
                </span>
              </div>

              <div className="max-w-3xl space-y-5">
                <div>
                  <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-white/35">
                    Identity Summary
                  </p>
                  <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                    I am building towards serious backend systems, AI workflows,
                    and security-oriented engineering.
                  </h3>
                </div>

                <p className="text-sm leading-7 text-white/62 sm:text-[15px]">
                  I am a college student who likes understanding how systems work
                  under the hood rather than only consuming frameworks at the
                  surface level. My interest sits at the intersection of
                  <span className="text-white"> backend engineering</span>,
                  <span className="text-white"> AI-driven tooling</span>, and
                  <span className="text-white"> practical security thinking</span>.
                </p>

                <p className="text-sm leading-7 text-white/62 sm:text-[15px]">
                  I care about building software that is not just visually clean,
                  but operationally sound: structured services, reliable data
                  flow, controlled automation, and systems that can scale beyond
                  a demo. That is why projects like ArmorGuard matter to me — they
                  sit closer to the kind of engineering depth I want to grow into.
                </p>

                <p className="text-sm leading-7 text-white/62 sm:text-[15px]">
                  Right now, I am sharpening the fundamentals while deliberately
                  moving towards stronger backend work, production-style project
                  thinking, and AI systems that are actually useful rather than
                  decorative.
                </p>
              </div>
            </div>
          </div>

          {/* Right dossier rail */}
          <div className="grid gap-6">
            <DossierCard
              title="Current Mission"
              value="Build towards backend, AI systems, and security-focused engineering depth."
            />

            <DossierCard
              title="Operating Mode"
              value="Learning through projects, system breakdowns, and implementation-heavy experimentation."
            />

            <div className="rounded-[2rem] border border-white/10 bg-black/28 p-5 backdrop-blur-xl">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/35">
                Focus Areas
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {FOCUS_AREAS.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/28 p-5 backdrop-blur-xl">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/35">
                Current Stack
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {CURRENT_STACK.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1rem] border border-white/10 bg-white/[0.03] px-3 py-3 text-sm text-white/82"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function DossierCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/28 p-5 backdrop-blur-xl">
      <p className="text-[10px] uppercase tracking-[0.24em] text-white/35">
        {title}
      </p>
      <p className="mt-3 text-sm leading-7 text-white/72">{value}</p>
    </div>
  );
}