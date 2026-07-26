"use client";
import React, { useRef, useState } from "react";
import { ExternalLink, ArrowUpRight, Info, X, Calendar, Layers, User, Loader2, Clock, Briefcase, Users } from "lucide-react";
import {
  Project,
  categoryLabel,
  categoryBadge,
  categoryAccentBar,
  categoryGlow,
  TechPill,
  ActionBtn,
} from "./types";

const Github = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

import { useRouter } from "next/navigation";

export default function ProjectCard({ project }: { project: Project }) {
  const router = useRouter();

  const badge =
    categoryBadge[project.category] ??
    "bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-foreground/50";
  const accentBar =
    categoryAccentBar[project.category] ?? "from-foreground/20 to-transparent";
  const glow = categoryGlow[project.category] ?? "rgba(255,255,255,0.06)";

  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setSpotlight((s) => ({ ...s, opacity: 0 }));
  };

  const handleOpenDetails = () => {
    router.push(`/projects/${project.id}`);
  };

  const displayProject = project;

  return (
    <>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleOpenDetails}
        className="group relative flex flex-col rounded-[2rem] border border-slate-800/90 bg-slate-900/80 hover:border-white/30 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl backdrop-blur-xl cursor-pointer card-3d"
      >
        {/* Spotlight overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 rounded-[2rem]"
          style={{
            opacity: spotlight.opacity,
            background: `radial-gradient(280px circle at ${spotlight.x}% ${spotlight.y}%, ${glow}, transparent 70%)`,
          }}
        />

        {/* Category glow border */}
        <div
          className="pointer-events-none absolute inset-0 z-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${glow} 0%, transparent 60%)`,
          }}
        />

        {/* MacOS Window Top Header Bar */}
        <div className="px-4 py-2 bg-slate-950 border-b border-slate-800/90 flex items-center justify-between z-20">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          {/* Category Pill */}
          <span className="px-2.5 py-0.5 text-[9px] font-extrabold text-slate-300 bg-slate-900 border border-slate-800 rounded-full flex items-center gap-1 shadow-sm">
            <Layers className="w-3 h-3 text-slate-400 shrink-0" />
            {categoryLabel[project.category] || project.category}
          </span>
        </div>

        {/* Thumbnail Screen */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
          />

          {/* Floating Badges */}
          <div className="absolute top-3 left-3 right-3 flex flex-wrap items-center gap-1.5 z-10 pointer-events-none">
            {/* Project Type / Client Pill */}
            {project.projectType === "CLIENT" ? (
              <span className="px-2.5 py-1 text-[9px] font-bold text-amber-300 bg-slate-950/85 backdrop-blur-md border border-amber-500/30 rounded-full flex items-center gap-1 shadow-md">
                <Briefcase className="w-3 h-3 text-amber-400 shrink-0" />
                Client Project
              </span>
            ) : project.projectType === "TEAM" ? (
              <span className="px-2.5 py-1 text-[9px] font-bold text-white bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-full flex items-center gap-1 shadow-md">
                <Users className="w-3 h-3 text-slate-400 shrink-0" />
                Team Project
              </span>
            ) : (
              <span className="px-2.5 py-1 text-[9px] font-bold text-white bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-full flex items-center gap-1 shadow-md">
                <User className="w-3 h-3 text-slate-400 shrink-0" />
                Personal Project
              </span>
            )}

            {/* Year Pill */}
            {project.year && (
              <span className="px-2.5 py-1 text-[9px] font-bold text-white bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-full flex items-center gap-1 shadow-md ml-auto">
                <Calendar className="w-3 h-3 text-slate-400 shrink-0" />
                {project.year}
              </span>
            )}
          </div>

          {/* Hover quick-actions */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
          >
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-white text-black text-xs font-bold rounded-xl shadow-xl hover:bg-slate-200 transition-all active:scale-95"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Live
            </a>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl border border-slate-700 backdrop-blur-sm hover:bg-slate-800 transition-all active:scale-95"
              >
                <Github className="w-3.5 h-3.5 text-white" /> Code
              </a>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="relative z-10 flex flex-col flex-1 p-5 sm:p-6">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h4 className="text-base sm:text-lg font-extrabold text-white leading-snug group-hover:text-white transition-colors duration-200">
              {project.title}
            </h4>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 mt-1" />
          </div>

          <p className="text-xs font-bold text-slate-300 mb-3 uppercase tracking-wider">
            {project.tagline}
          </p>

          <p className="text-xs text-slate-200 leading-relaxed mb-4 font-medium line-clamp-2 flex-1">
            {project.description}
          </p>

          {/* Curated Tech Stack Pills (Top 5 for clean aesthetics) */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.slice(0, 5).map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-[11px] font-bold bg-slate-950 border border-slate-800 rounded-lg text-slate-300 shadow-sm"
              >
                {t}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span className="px-2 py-1 text-[10px] font-bold text-slate-400 bg-slate-950/60 border border-slate-800 rounded-lg">
                +{project.tech.length - 5}
              </span>
            )}
          </div>

          {/* Actions */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex gap-2 flex-wrap items-center mt-auto pt-3 border-t border-slate-800/80"
          >
            <ActionBtn
              href={project.demoLink}
              icon={ExternalLink}
              label="Live Demo"
              filled
              sm
            />
            {project.githubLink && (
              <ActionBtn
                href={project.githubLink}
                icon={Github}
                label="Source"
                sm
              />
            )}
            <button
              onClick={handleOpenDetails}
              className="inline-flex items-center gap-1.5 font-bold transition-all duration-200 active:scale-95 px-3.5 py-2 text-xs rounded-xl border border-slate-700 text-white bg-slate-800 hover:bg-slate-700 shadow-sm cursor-pointer ml-auto"
              type="button"
            >
              <Info className="w-3.5 h-3.5" />
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
