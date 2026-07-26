"use client";
import React from "react";
import { motion } from "framer-motion";
import { Project, itemVariants } from "./types";
import AboutTechStack from "./AboutTechStack";
import AboutHighlights from "./AboutHighlights";
import { Code2, Cpu, ShieldCheck, Rocket, Terminal, Layers } from "lucide-react";

interface AboutBioProps {
  clientFocusedText: string;
  roleDescription: string;
  introParagraphs: string[];
  frontendSkills: string[];
  backendSkills: string[];
  tools: string[];
  projects: Project[];
  quoteText: string;
  quoteAuthor: string;
  mentorTitle: string;
  mentorDescription: string;
}

export default function AboutBio({
  clientFocusedText,
  roleDescription,
  introParagraphs,
  frontendSkills,
  backendSkills,
  tools,
  projects,
  quoteText,
  quoteAuthor,
  mentorTitle,
  mentorDescription,
}: AboutBioProps) {
  return (
    <div className="lg:col-span-3 flex flex-col gap-6">
      
      {/* Live status pill */}
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs font-semibold text-slate-200 w-fit backdrop-blur-md shadow-md"
      >
        <div className="relative w-2.5 h-2.5 shrink-0">
          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
          <span className="relative block w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <span>{clientFocusedText}</span>
      </motion.div>

      {/* Structured Engineering Pillars Cards */}
      <motion.div variants={itemVariants} className="space-y-4">
        
        {/* Pillar 1: Full-Stack Engineering */}
        <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-md shadow-xl hover:border-white/20 transition-all space-y-2.5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-white/10 text-white border border-white/20">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-base font-bold text-white">Full-Stack Software Development</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {roleDescription || "Full Stack Developer responsible for designing, developing, and maintaining scalable web applications using modern frontend and backend technologies. Focused on writing clean, efficient code and delivering high-quality software solutions from concept to deployment."}
          </p>
        </div>

        {/* Pillar 2: Frontend, Backend & Database Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-3xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-md shadow-xl space-y-2 hover:border-white/20 transition-all">
            <div className="flex items-center gap-2.5 text-white">
              <Code2 className="w-4 h-4 text-white" />
              <h4 className="text-sm font-bold text-white">Frontend & UI/UX</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Crafting responsive interfaces with React.js, Next.js 16, TypeScript, Tailwind CSS, and Framer Motion with pixel-perfect precision.
            </p>
          </div>

          <div className="p-5 rounded-3xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-md shadow-xl space-y-2 hover:border-white/20 transition-all">
            <div className="flex items-center gap-2.5 text-white">
              <Cpu className="w-4 h-4 text-white" />
              <h4 className="text-sm font-bold text-white">Backend & Cloud Architecture</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Designing secure RESTful & GraphQL APIs, microservices, authentication systems, and cloud deployments with Node.js, Express, NestJS, and Docker.
            </p>
          </div>
        </div>

        {/* Pillar 3: Clean Architecture & Quality Standards */}
        <div className="p-5 rounded-3xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-md shadow-xl space-y-2 hover:border-white/20 transition-all">
          <div className="flex items-center gap-2.5 text-white">
            <ShieldCheck className="w-4 h-4 text-white" />
            <h4 className="text-sm font-bold text-white">Engineering Quality & SOLID Principles</h4>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Adhering to SOLID principles, Clean Architecture, and automated workflows. Experienced with PostgreSQL, MongoDB, Redis, Prisma ORM, CI/CD pipelines, and performance optimization.
          </p>
        </div>

      </motion.div>

      <AboutTechStack
        frontendSkills={frontendSkills}
        backendSkills={backendSkills}
        tools={tools}
      />

      <div className="h-px bg-slate-800/80" />

      <AboutHighlights
        projects={projects}
        quoteText={quoteText}
        quoteAuthor={quoteAuthor}
        mentorTitle={mentorTitle}
        mentorDescription={mentorDescription}
      />
    </div>
  );
}
