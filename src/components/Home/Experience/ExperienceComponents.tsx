"use client";
import React from "react";
import { Briefcase, MapPin, ExternalLink, CheckCircle2 } from "lucide-react";
import { Experience, Role, Achievement, ICON_MAP } from "./types";

interface ExperienceHeaderProps {
  exp: Experience;
}

export function ExperienceHeader({ exp }: ExperienceHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center bg-slate-950 border border-slate-800 shrink-0 shadow-inner">
          <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight">
            {exp.company}
          </h3>
          <div className="flex flex-wrap items-center gap-1.5 mt-1 text-xs text-slate-300 font-medium">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>{exp.location}</span>
            {exp.url && exp.url !== "#" && (
              <>
                <span className="text-slate-600">·</span>
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-300 hover:text-white font-semibold transition-colors"
                >
                  {exp.url.replace(/^https?:\/\/(www\.)?/, "").split("/")[0]}
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Period + present badge */}
      <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-1.5 shrink-0 sm:w-auto w-full">
        {exp.type === "current" && (
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Present
          </span>
        )}
        <span className="text-xs font-bold text-slate-200 bg-slate-900 border border-slate-800 px-3.5 py-1 rounded-full whitespace-nowrap shadow-sm">
          {exp.period}
        </span>
      </div>
    </div>
  );
}

/**
 * Normalise responsibilities: if the array contains a single long string
 * (i.e. all bullets were saved as one blob), split it into individual items.
 * Sentences are split on ". " boundaries followed by a capital letter,
 * or on explicit newline characters.
 */
function normalizeResponsibilities(raw: string[]): string[] {
  if (!raw || raw.length === 0) return [];

  // If there are already multiple items, trust them as-is.
  if (raw.length > 1) {
    return raw.map((r) => r.trim()).filter(Boolean);
  }

  const single = raw[0]?.trim() ?? "";
  if (!single) return [];

  // If the single item is short, it's genuinely one responsibility.
  if (single.length < 120) return [single];

  // Try splitting on newlines first.
  const byNewline = single.split(/\n+/).map((s) => s.trim()).filter(Boolean);
  if (byNewline.length > 1) return byNewline;

  // Split on ". " followed by an uppercase letter (sentence boundary).
  const bySentence = single
    .split(/\.\s+(?=[A-Z])/)
    .map((s) => s.trim().replace(/\.$/, "").trim())
    .filter((s) => s.length > 4);

  return bySentence.length > 1 ? bySentence : [single];
}

interface ExperienceRolesProps {
  roles: Role[];
}

export function ExperienceRoles({ roles }: ExperienceRolesProps) {
  return (
    <div className="space-y-5">
      {roles.map((role, ri) => {
        const RIcon = ICON_MAP[role.iconName] || Briefcase;
        const items = normalizeResponsibilities(role.responsibilities);
        return (
          <div key={ri}>
            {ri > 0 && <div className="h-px bg-slate-800/80 mb-5" />}
            <div className="flex items-center gap-2.5 mb-3">
              <div className="p-2 rounded-xl border border-slate-800 bg-slate-950 text-white">
                <RIcon className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-base font-extrabold text-white leading-tight">
                  {role.title}
                </h4>
                {role.subtitle && (
                  <p className="text-xs font-semibold text-slate-400 mt-0.5">
                    {role.subtitle}
                  </p>
                )}
              </div>
            </div>

            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2.5 ml-0 sm:ml-9">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 group/item">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-slate-400 group-hover/item:text-white transition-colors" />
                  <span className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium group-hover/item:text-white transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

interface ExperienceAchievementsProps {
  achievements: Achievement[];
}

export function ExperienceAchievements({ achievements }: ExperienceAchievementsProps) {
  return (
    <div className="mt-5 pt-4 border-t border-slate-800/80">
      <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-3">
        Key Deliverables & Metrics
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {achievements.map((a, i) => (
          <div
            key={i}
            className="text-center p-3 rounded-2xl bg-slate-950/80 border border-slate-800/90 shadow-md flex flex-col justify-center"
          >
            <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {a.metric}
            </div>
            <div className="text-[10px] font-bold text-slate-400 leading-tight uppercase tracking-wider mt-1">
              {a.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
