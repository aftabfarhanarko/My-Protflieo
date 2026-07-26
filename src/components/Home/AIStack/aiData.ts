export const AI_TOOLS = [
  {
    id: "antigravity",
    name: "Google Antigravity",
    shortName: "Antigravity",
    type: "Agentic Coding Assistant",
    description: "DeepMind's agentic framework for codebase refactoring, multi-file edits, and automated build validation.",
    color: "#4285F4", // Google Blue
    accentColor: "from-blue-600 to-indigo-600",
    usage: 95,
    role: "Codebase Refactoring & API Auditing",
    logoUrl: "/antigravity-logo.png"
  },
  {
    id: "cursor",
    name: "Cursor AI",
    shortName: "Cursor",
    type: "AI-First Code Editor",
    description: "Inline autocomplete (Copilot++), codebase semantic indexing, and high-speed feature creation.",
    color: "#00E5FF", // Neon Cyan
    accentColor: "from-cyan-500 to-blue-500",
    usage: 98,
    role: "Inline Completion & Code Editing",
    logoUrl: "/cursor-app-icon.png"
  },
  {
    id: "deepseek",
    name: "DeepSeek AI",
    shortName: "DeepSeek",
    type: "Reasoning & Mathematical LLM",
    description: "Advanced reasoning model for designing complex algorithms, SQL schemas, and microservice architectures.",
    color: "#0066FF", // Blue
    accentColor: "from-blue-500 to-sky-400",
    usage: 92,
    role: "Algorithm Design & Query Optimization",
    logoUrl: "/deepseek-logo-icon.png"
  },
  {
    id: "grok",
    name: "Grok AI",
    shortName: "Grok",
    type: "Real-time Logic Assistant",
    description: "Fast reasoning engine for log analysis, environment auditing, and trace debugging.",
    color: "#EFEFEF", // White/Slate
    accentColor: "from-slate-700 to-slate-900",
    usage: 90,
    role: "Trace Debugging & System Auditing",
    logoUrl: "/grok.png"
  },
  {
    id: "trae",
    name: "ByteDance Trae",
    shortName: "Trae",
    type: "Adaptive Development IDE",
    description: "Fluid workspace navigation for Next.js app routes, component trees, and build compilation.",
    color: "#FF3366", // Neon Rose/Red
    accentColor: "from-rose-500 to-orange-500",
    usage: 88,
    role: "Multi-file Navigation & Build Checks",
    logoUrl: "/trae.jpg"
  },
  {
    id: "windsurf",
    name: "Windsurf IDE",
    shortName: "Windsurf",
    type: "Agentic Flow Workspace",
    description: "Autopiloted scaffolding for initializing project boilerplates and package dependency configurations.",
    color: "#8B5CF6", // Purple / Violet
    accentColor: "from-purple-500 to-indigo-600",
    usage: 85,
    role: "Autopiloted Scaffolding & Setup",
    logoUrl: "/Windsurf.png"
  }
];

export const WORKFLOW_STAGES = [
  {
    step: 1,
    title: "System Architecture",
    toolId: "deepseek",
    description: "Architect database schemas, plan API routes, and write optimized query pipelines.",
    actions: ["SQL Schema Drafts", "REST Endpoints spec", "System Sequence design"]
  },
  {
    step: 2,
    title: "Agentic Boilerplate Setup",
    toolId: "windsurf",
    description: "Autonomously set up workspace directories, install dependencies, and configure environment templates.",
    actions: ["Initial Git config", "Dependencies install", "Config files (.env, tsconfig)"]
  },
  {
    step: 3,
    title: "Rapid Frontend Layouts",
    toolId: "cursor",
    description: "Convert high-fidelity design specifications into clean Next.js/Tailwind components and responsive layouts.",
    actions: ["Tailwind Component structure", "State Management wires", "Responsive Grid styling"]
  },
  {
    step: 4,
    title: "Trace Debugging & Logs",
    toolId: "grok",
    description: "Examine runtime logs, trace environment inconsistencies, and handle compiler error threads.",
    actions: ["System log analysis", "Environment setup auditing", "Package conflict resolution"]
  },
  {
    step: 5,
    title: "Agentic Codebase Refactoring",
    toolId: "antigravity",
    description: "Analyze workspace edits, execute secure route validations, write automated unit tests, and fix TypeScript lints.",
    actions: ["API Endpoint lockdown (NextAuth)", "Automatic unit tests writing", "Strict type-checking validation"]
  },
  {
    step: 6,
    title: "Final Build Validation",
    toolId: "trae",
    description: "Finalize build compilation, audit build-time optimization warnings, and test overall routing stability.",
    actions: ["Build trace debugging", "Static site generation validation", "Vercel dry run checks"]
  }
];
