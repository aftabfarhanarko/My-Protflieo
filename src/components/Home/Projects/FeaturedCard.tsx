"use client";
import React, { useRef, useState } from "react";
import { ExternalLink, Sparkles, Briefcase, Users, Calendar, User } from "lucide-react";
import { Project, categoryLabel, categoryGlow } from "./types";

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

export default function FeaturedCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50, show: false });
  const glow = categoryGlow[project.category] ?? "rgba(255,255,255,0.05)";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      show: true,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos((p) => ({ ...p, show: false }))}
      className={`group relative mb-10 sm:mb-12 rounded-[2rem] overflow-hidden border transition-all duration-500 shadow-xl hover:shadow-2xl flex items-center min-h-[500px] sm:min-h-[560px] p-6 sm:p-10 lg:p-14 ${
        project.currentlyWorking
          ? "border-emerald-500/30 hover:border-emerald-500/50"
          : "border-border hover:border-foreground/[0.15]"
      }`}
    >
      {/* Full Background Image (Blurred and Darkened for Ambient Glow) */}
      <div className="absolute inset-0 z-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center scale-[1.05] transition-all duration-[1200ms] ease-out brightness-[0.18] blur-[12px] opacity-80 group-hover:brightness-[0.22] group-hover:scale-[1.08]"
        />
        {/* Deep rich gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent z-10" />
      </div>

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] z-10 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,1) 39px,rgba(255,255,255,1) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,1) 39px,rgba(255,255,255,1) 40px)",
        }}
      />

      {/* Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-[2rem] transition-opacity duration-300"
        style={{
          opacity: pos.show ? 1 : 0,
          background: `radial-gradient(600px circle at ${pos.x}% ${pos.y}%, ${
            project.currentlyWorking ? "rgba(16,185,129,0.08)" : glow
          }, transparent 70%)`,
        }}
      />

      {/* Top right status badge */}
      <div className="absolute top-5 right-5 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-xl border backdrop-blur-sm bg-black/40 border-white/10">
        {project.currentlyWorking ? (
          <>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400">
              Active / Currently Working
            </span>
          </>
        ) : (
          <>
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-amber-400">
              Featured
            </span>
          </>
        )}
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full z-20 relative">
        
        {/* Left Column (Content) */}
        <div className="lg:col-span-7 flex flex-col text-left">
          {/* Tagline/Category with Line below */}
          <div className="mb-4">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-slate-400">
              {categoryLabel[project.category] || project.category || "PROJECT"}
            </span>
            <div className="h-[2px] w-12 bg-white mt-2 rounded-full" />
          </div>

          {/* Title and Tagline combined */}
          <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-[1.1] mb-5">
            {project.title}
            {project.tagline && (
              <span className="text-slate-300 font-bold text-lg sm:text-xl lg:text-[22px] block mt-2">
                {project.tagline}
              </span>
            )}
          </h3>

          {/* Meta Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            {project.projectType === "CLIENT" ? (
              <span className="px-3.5 py-1.5 text-xs font-bold text-amber-300 bg-slate-950/90 border border-amber-500/40 rounded-full flex items-center gap-1.5 backdrop-blur-md shadow-md">
                <Briefcase className="w-4 h-4 text-amber-400" />
                <span>Client Project</span>
                {project.client && <span className="text-slate-400 font-semibold">• {project.client}</span>}
              </span>
            ) : project.projectType === "TEAM" ? (
              <span className="px-3.5 py-1.5 text-xs font-bold bg-slate-900 border border-slate-800 rounded-full text-slate-200 flex items-center gap-1.5 shadow-sm">
                <Users className="w-3.5 h-3.5 text-slate-400" />
                Team Project
              </span>
            ) : (
              <span className="px-3.5 py-1.5 text-xs font-bold bg-slate-900 border border-slate-800 rounded-full text-slate-200 flex items-center gap-1.5 shadow-sm">
                <User className="w-3.5 h-3.5 text-slate-400" />
                Personal Project
              </span>
            )}
            {project.year && (
              <span className="px-3.5 py-1.5 text-xs font-bold bg-slate-900 border border-slate-800 rounded-full text-slate-200 flex items-center gap-1.5 shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {project.year}
              </span>
            )}
          </div>

          {/* Structured Key Feature Bullets Description */}
          <div className="space-y-2.5 mb-6 max-w-xl">
            {project.description.split("\n").map((line, idx) => {
              const trimmed = line.trim();
              if (!trimmed) return null;
              const colonIdx = trimmed.indexOf(":");
              if (colonIdx > 0 && colonIdx < 40) {
                const title = trimmed.substring(0, colonIdx);
                const desc = trimmed.substring(colonIdx + 1);
                return (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                      <strong className="text-white font-extrabold">{title}:</strong>{desc}
                    </p>
                  </div>
                );
              }
              return (
                <p key={idx} className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.slice(0, 8).map((t) => (
              <span
                key={t}
                className="px-3.5 py-1 text-xs font-bold bg-slate-950 border border-slate-800 rounded-full text-slate-200 hover:border-slate-600 hover:text-white transition-all duration-200 shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-3">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black hover:scale-105 rounded-full font-extrabold uppercase tracking-wider text-xs transition-all duration-300 active:scale-95 flex items-center gap-2 shadow-xl"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Website
            </a>
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-950 hover:bg-slate-900 text-white border border-slate-800 rounded-full font-extrabold uppercase tracking-wider text-xs transition-all duration-300 active:scale-95 flex items-center gap-2 shadow-md"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            )}
          </div>
        </div>

        {/* Right Column (MacOS Browser Showcase Mockup Frame) */}
        <div className="lg:col-span-5 w-full flex justify-center">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-800/90 bg-slate-950 group/mockup flex flex-col transition-transform duration-500 hover:scale-[1.02] card-3d">
            {/* MacOS Browser Header Bar */}
            <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800/90 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="px-3 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400 truncate max-w-[180px]">
                {project.demoLink ? project.demoLink.replace(/^https?:\/\/(www\.)?/, "") : "preview.app"}
              </div>
              <div className="w-12" />
            </div>

            {/* Screen Content */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[310px] w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover/mockup:scale-105 transition-all duration-700 ease-out"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
