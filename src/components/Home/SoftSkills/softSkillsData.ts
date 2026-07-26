import {
  MessageSquare,
  Users,
  ShieldCheck,
  Lightbulb,
  Target,
  Star,
  Zap,
  Handshake,
  BarChart3,
  Briefcase,
} from "lucide-react";

export const softSkills = [
  {
    id: "communication",
    title: "Communication",
    Icon: MessageSquare,
    level: 95,
    description: "Clear communication with clients, teams, and stakeholders at every level.",
    subSkills: [
      { name: "Client Communication", level: 95 },
      { name: "Technical Documentation", level: 90 },
      { name: "Presentation Skills", level: 88 },
    ],
    examples: [
      "Led 50+ client meetings and requirement sessions",
      "Bridged technical and non-technical stakeholders",
      "Created comprehensive project documentation",
    ],
  },
  {
    id: "team-collaboration",
    title: "Team Collaboration",
    Icon: Users,
    level: 92,
    description: "Working effectively within cross-functional teams to achieve common goals.",
    subSkills: [
      { name: "Cross-functional Collaboration", level: 93 },
      { name: "Mentoring & Knowledge Sharing", level: 90 },
      { name: "Conflict Resolution", level: 88 },
    ],
    examples: [
      "Collaborated with 15+ team members across dev & design",
      "Mentored junior developers in best practices",
      "Facilitated sprints and stand-ups across time zones",
    ],
  },
  {
    id: "leadership",
    title: "Leadership",
    Icon: ShieldCheck,
    level: 90,
    description: "Guiding teams, making strategic decisions, and owning projects end-to-end.",
    subSkills: [
      { name: "Team Leadership", level: 92 },
      { name: "Strategic Planning", level: 88 },
      { name: "Decision Making", level: 90 },
    ],
    examples: [
      "Led a team of 5 developers as Senior Full-Stack Dev",
      "Managed 30+ enterprise projects as Project Manager",
      "Established operational frameworks and policies",
    ],
  },
  {
    id: "problem-solving",
    title: "Problem Solving",
    Icon: Lightbulb,
    level: 94,
    description: "Analytical thinking and creative solutions for complex technical challenges.",
    subSkills: [
      { name: "Analytical Thinking", level: 95 },
      { name: "Debugging & Troubleshooting", level: 93 },
      { name: "System Architecture", level: 90 },
    ],
    examples: [
      "Optimized queries for 45% faster response times",
      "Reduced downtime by 60% via microservices",
      "Improved delivery speed by 40% through workflow fixes",
    ],
  },
  {
    id: "adaptability-growth",
    title: "Adaptability & Speed",
    Icon: Zap,
    level: 93,
    description: "Rapid technology adoption, self-driven learning, and agile execution.",
    subSkills: [
      { name: "Rapid Tech Stack Adoption", level: 95 },
      { name: "Remote Autonomy & Focus", level: 92 },
      { name: "Continuous Skill Upgrade", level: 92 },
    ],
    examples: [
      "Mastered Next.js App Router and Prisma in record time",
      "Delivered production code independently in remote setups",
      "Adopted AI-native developer workflows for 10x output",
    ],
  },
  {
    id: "ownership-delivery",
    title: "Project Ownership",
    Icon: Target,
    level: 96,
    description: "End-to-end responsibility from initial requirements to production deployment.",
    subSkills: [
      { name: "Sprint & Deadline Rigor", level: 96 },
      { name: "Production Reliability", level: 94 },
      { name: "Stakeholder Alignment", level: 93 },
    ],
    examples: [
      "Shipped 20+ production-grade web applications on schedule",
      "Maintained zero downtime deployment records across projects",
      "Ensured high code quality and test coverage across features",
    ],
  },
];

export const coreStrengths = [
  { name: "Client Communication", Icon: MessageSquare },
  { name: "Team Leadership", Icon: Users },
  { name: "Strategic Thinking", Icon: Target },
  { name: "Mentoring", Icon: Star },
  { name: "Decision Making", Icon: Zap },
  { name: "Conflict Resolution", Icon: Handshake },
  { name: "Presentation", Icon: BarChart3 },
  { name: "Negotiation", Icon: Briefcase },
];
