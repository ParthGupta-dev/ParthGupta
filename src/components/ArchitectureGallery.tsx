"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Server,
  Cloud,
  Cpu,
  Activity,
  Monitor,
  Bot,
  Shield,
  Globe,
  FileText,
} from "lucide-react";
import { useMemo, useState } from "react";

type NodeType = "client" | "compute" | "db" | "network";

type DiagramNode = {
  id: string;
  label: string;
  icon: React.ReactNode;
  type: NodeType;
  x: number;
  y: number;
};

type DiagramConnection = {
  from: string;
  to: string;
};

type Project = {
  id: string;
  name: string;
  shortLabel: string;
  tag: string;
  description: string;
  stack: string[];
  accentGlow: string;
  nodes: DiagramNode[];
  connections: DiagramConnection[];
};

const NODE_W = 150;
const NODE_H = 92;
const DIAGRAM_W = 980;
const DIAGRAM_H = 390;

const PROJECTS: Project[] = [
  {
    id: "armorguard",
    name: "ArmorGuard",
    shortLabel: "AG",
    tag: "Flagship / AI Security",
    accentGlow: "bg-white/10",
    description:
      "ArmorGuard is a governed AI pentesting system where a FastAPI backend coordinates a PydanticAI agent, real pentesting tools, and ArmorIQ validation to keep execution constrained, observable, and reportable.",
    stack: ["FastAPI", "PydanticAI", "Supabase", "ArmorIQ", "Next.js"],
    nodes: [
      { id: "A", label: "Frontend Dashboard", icon: <Monitor size={18} />, type: "client", x: 35, y: 145 },
      { id: "B", label: "FastAPI Backend", icon: <Server size={18} />, type: "compute", x: 215, y: 145 },
      { id: "C", label: "PydanticAI Agent", icon: <Bot size={18} />, type: "compute", x: 420, y: 145 },
      { id: "D", label: "ArmorIQ", icon: <Shield size={18} />, type: "compute", x: 620, y: 145 },
      { id: "E", label: "Pentest Tools", icon: <Activity size={18} />, type: "compute", x: 805, y: 40 },
      { id: "F", label: "Demo Target", icon: <Globe size={18} />, type: "network", x: 805, y: 145 },
      { id: "G", label: "Supabase", icon: <Database size={18} />, type: "db", x: 805, y: 250 },
      { id: "H", label: "Report View", icon: <FileText size={18} />, type: "client", x: 620, y: 270 },
    ],
    connections: [
      { from: "A", to: "B" },
      { from: "B", to: "C" },
      { from: "C", to: "D" },
      { from: "D", to: "E" },
      { from: "D", to: "F" },
      { from: "D", to: "G" },
      { from: "B", to: "H" },
    ],
  },
  {
    id: "errnd",
    name: "Errnd",
    shortLabel: "ER",
    tag: "Startup Platform",
    accentGlow: "bg-white/8",
    description:
      "A startup-ready platform for localised service exchange with a task engine, authentication flow, and persistent user-task state.",
    stack: ["Next.js", "Node.js", "MongoDB", "Auth Service"],
    nodes: [
      { id: "A", label: "User App", icon: <Cpu size={18} />, type: "client", x: 70, y: 150 },
      { id: "B", label: "Task Engine", icon: <Activity size={18} />, type: "compute", x: 320, y: 150 },
      { id: "C", label: "MongoDB", icon: <Database size={18} />, type: "db", x: 615, y: 80 },
      { id: "D", label: "Auth Service", icon: <Server size={18} />, type: "compute", x: 615, y: 230 },
    ],
    connections: [
      { from: "A", to: "B" },
      { from: "B", to: "C" },
      { from: "B", to: "D" },
    ],
  },
  {
    id: "career",
    name: "Career Recommender",
    shortLabel: "CR",
    tag: "AI Product",
    accentGlow: "bg-white/8",
    description:
      "A career guidance platform that routes user input through an AI decision layer, personalised recommendation logic, and stored profile data.",
    stack: ["Next.js", "AI Engine", "Vercel Edge", "User Data"],
    nodes: [
      { id: "A", label: "Next.js UI", icon: <Cpu size={18} />, type: "client", x: 70, y: 150 },
      { id: "B", label: "Vercel Edge", icon: <Cloud size={18} />, type: "network", x: 320, y: 150 },
      { id: "C", label: "AI Engine", icon: <Activity size={18} />, type: "compute", x: 615, y: 80 },
      { id: "D", label: "User Data", icon: <Database size={18} />, type: "db", x: 615, y: 230 },
    ],
    connections: [
      { from: "A", to: "B" },
      { from: "B", to: "C" },
      { from: "C", to: "D" },
    ],
  },
  {
    id: "sewadar",
    name: "Sewadar Insurance",
    shortLabel: "SI",
    tag: "Business Portal",
    accentGlow: "bg-white/8",
    description:
      "A client-facing insurance portal with consultation flow, lead management, and contact-channel integration for inbound customer handling.",
    stack: ["Next.js", "Lead Handler", "WhatsApp Integration"],
    nodes: [
      { id: "A", label: "Web Portal", icon: <Cpu size={18} />, type: "client", x: 70, y: 150 },
      { id: "B", label: "Next.js Layer", icon: <Cloud size={18} />, type: "network", x: 320, y: 150 },
      { id: "C", label: "Lead Handler", icon: <Activity size={18} />, type: "compute", x: 615, y: 80 },
      { id: "D", label: "WA Integration", icon: <Server size={18} />, type: "network", x: 615, y: 230 },
    ],
    connections: [
      { from: "A", to: "B" },
      { from: "B", to: "C" },
      { from: "B", to: "D" },
    ],
  },
];

export default function ArchitectureGallery() {
  const [activeProjectId, setActiveProjectId] = useState("armorguard");

  const activeProject =
    PROJECTS.find((project) => project.id === activeProjectId) ?? PROJECTS[0];

  return (
    <div className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* control strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md sm:p-5"
        >
          <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-white/35">
                Interactive Blueprint Console
              </p>
              <p className="text-sm leading-7 text-white/58 sm:text-[15px]">
                Select a project file to inspect its core system layout, service
                boundaries, and data flow. The active diagram updates below.
              </p>
            </div>

            <div className="grid gap-2 text-[10px] uppercase tracking-[0.24em] text-white/32 sm:text-[11px]">
              <span>Blueprint Mode / Single Active View</span>
              <span>Flagship default / ArmorGuard</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {PROJECTS.map((project, index) => {
              const isActive = project.id === activeProjectId;

              return (
                <button
                  key={project.id}
                  onClick={() => setActiveProjectId(project.id)}
                  className={`group relative overflow-hidden rounded-full border px-4 py-3 text-left transition-all duration-300 ${isActive
                    ? "border-white/20 bg-white/[0.08] text-white shadow-[0_12px_40px_rgba(0,0,0,0.24)]"
                    : "border-white/10 bg-black/28 text-white/60 hover:border-white/16 hover:bg-white/[0.05] hover:text-white/85"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border text-[11px] font-semibold tracking-[0.22em] ${isActive
                        ? "border-white/20 bg-white/[0.08] text-white"
                        : "border-white/10 bg-white/[0.03] text-white/60"
                        }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.24em] text-white/35">
                        {project.tag}
                      </p>
                      <p className="mt-1 text-sm font-medium">{project.name}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* active blueprint panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.35 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/32 shadow-[0_35px_120px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="pointer-events-none absolute left-6 top-0 h-full w-px bg-white/[0.05]" />
            <div className="pointer-events-none absolute right-6 top-0 h-full w-px bg-white/[0.05]" />
            <div className="pointer-events-none absolute left-0 top-10 h-px w-full bg-white/[0.04]" />
            <div className="pointer-events-none absolute right-[-4rem] top-[-4rem] h-72 w-72 rounded-full bg-white/[0.06] blur-[120px]" />

            <div className="relative z-10 p-5 sm:p-6 lg:p-8">
              <div className="mb-8 grid gap-5 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/72">
                      Active Blueprint
                    </span>
                    <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">
                      {activeProject.tag}
                    </span>
                  </div>

                  <h3 className="text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                    {activeProject.name}
                  </h3>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-white/62 sm:text-[15px]">
                    {activeProject.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {activeProject.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/58"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
                  <div className="grid grid-cols-2 gap-3">
                    <MiniStat label="Nodes" value={String(activeProject.nodes.length)} />
                    <MiniStat label="Edges" value={String(activeProject.connections.length)} />
                  </div>
                  <MiniStat label="View Mode" value="Single Project Blueprint" />
                  <MiniStat label="Current File" value={activeProject.name} />
                </div>
              </div>

              <BlueprintDiagram project={activeProject} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function BlueprintDiagram({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  const nodeMap = useMemo(() => {
    return Object.fromEntries(project.nodes.map((node) => [node.id, node]));
  }, [project.nodes]);

  return (
    <div
      className="relative overflow-x-auto pb-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative rounded-[1.75rem] border border-white/10 bg-black/28 shadow-inner shadow-white/5"
        style={{ width: DIAGRAM_W, height: DIAGRAM_H, minWidth: DIAGRAM_W }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] opacity-[0.06] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_28%)]" />

        <svg
          className="pointer-events-none absolute inset-0"
          width={DIAGRAM_W}
          height={DIAGRAM_H}
          viewBox={`0 0 ${DIAGRAM_W} ${DIAGRAM_H}`}
          fill="none"
        >
          <defs>
            <marker
              id={`arrow-${project.id}`}
              markerWidth="12"
              markerHeight="12"
              refX="10"
              refY="6"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L12,6 L0,12" fill={isHovered ? "#ffffff" : "#64748b"} />
            </marker>

            <linearGradient id={`line-${project.id}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={isHovered ? "#ffffff" : "#475569"} />
              <stop offset="100%" stopColor={isHovered ? "#d4d4d8" : "#334155"} />
            </linearGradient>
          </defs>

          {project.connections.map((connection) => {
            const from = nodeMap[connection.from];
            const to = nodeMap[connection.to];
            if (!from || !to) return null;

            const startX = from.x + NODE_W;
            const startY = from.y + NODE_H / 2;
            const endX = to.x;
            const endY = to.y + NODE_H / 2;

            const dx = endX - startX;
            const curve = Math.max(48, Math.abs(dx) * 0.35);
            const c1x = startX + curve;
            const c2x = endX - curve;

            const path = `M ${startX} ${startY} C ${c1x} ${startY}, ${c2x} ${endY}, ${endX} ${endY}`;

            return (
              <g key={`${connection.from}-${connection.to}`}>
                <motion.path
                  d={path}
                  stroke={isHovered ? "rgba(255,255,255,0.16)" : "rgba(71,85,105,0.16)"}
                  strokeWidth={isHovered ? 10 : 8}
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0.2 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: "easeOut" }}
                />

                <motion.path
                  d={path}
                  stroke={`url(#line-${project.id})`}
                  strokeWidth={isHovered ? 2.2 : 1.7}
                  fill="none"
                  markerEnd={`url(#arrow-${project.id})`}
                  initial={{ pathLength: 0, opacity: 0.35 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, ease: "easeOut" }}
                />

                {isHovered && (
                  <motion.circle
                    r="4"
                    fill="#ffffff"
                    className="drop-shadow-[0_0_12px_rgba(255,255,255,0.95)]"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      offsetDistance: ["0%", "100%"],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      offsetPath: `path("${path}")`,
                    }}
                  />
                )}
              </g>
            );
          })}
        </svg>

        {project.nodes.map((node) => (
          <motion.div
            key={node.id}
            className={`absolute z-10 flex h-[92px] w-[150px] flex-col items-center justify-center gap-2 rounded-[1.35rem] border px-3 text-center backdrop-blur-md transition-all duration-300 ${isHovered
              ? "border-white/22 bg-black/72 shadow-[0_0_28px_rgba(255,255,255,0.08)]"
              : "border-white/10 bg-black/68"
              }`}
            style={{ left: node.x, top: node.y }}
            whileHover={{ scale: 1.04, y: -3 }}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl border ${getNodeBadgeClass(
                node.type,
                isHovered
              )}`}
            >
              {node.icon}
            </div>

            <div className="space-y-1">
              <span className="block text-xs font-semibold uppercase tracking-wide text-white">
                {node.label}
              </span>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-white/35">
                {node.type}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.2rem] border border-white/10 bg-black/25 px-4 py-3">
      <div className="text-[10px] uppercase tracking-[0.24em] text-white/35">
        {label}
      </div>
      <div className="mt-1 text-sm font-medium text-white/88">{value}</div>
    </div>
  );
}

function getNodeBadgeClass(type: NodeType, hovered: boolean) {
  if (hovered) {
    return "border-white/18 bg-white/[0.08] text-white";
  }

  switch (type) {
    case "client":
      return "border-white/12 bg-white/[0.05] text-white/90";
    case "compute":
      return "border-white/12 bg-white/[0.04] text-white/82";
    case "db":
      return "border-white/12 bg-white/[0.03] text-white/78";
    case "network":
      return "border-white/12 bg-white/[0.03] text-white/74";
    default:
      return "border-white/10 bg-white/[0.03] text-white/70";
  }
}