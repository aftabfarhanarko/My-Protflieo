"use client";
import React from "react";
import { motion } from "framer-motion";
import { Stat, Proficiency, itemVariants } from "./types";
import { Sparkles, Code2, CheckCircle2 } from "lucide-react";

interface AboutProfileProps {
  stats: Stat[];
  proficiencies: Proficiency[];
  availabilityText: string;
}

export default function AboutProfile({ stats, proficiencies, availabilityText }: AboutProfileProps) {
  return (
    <div className="lg:col-span-2 flex flex-col gap-6 lg:gap-8 lg:sticky lg:top-24 lg:self-start items-center text-center lg:items-start lg:text-left">
      {/* Role tag + heading */}
      <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span>Full Stack Developer</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none text-white pt-1">
          About <span className="text-slate-400">Me.</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
          Building with purpose. Shipping with precision.
        </p>
      </motion.div>

      {/* 3D Stat Cards */}
      {stats.length > 0 && (
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 gap-3.5 w-full"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group p-4 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-white/30 backdrop-blur-md shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <p className="text-2xl sm:text-3xl font-black text-white group-hover:text-white transition-colors text-left tracking-tight">
                {stat.num || "20+"}
              </p>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold text-left mt-1.5">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      )}

      {/* Proficiency bars */}
      {proficiencies.length > 0 && (
        <motion.div variants={itemVariants} className="flex flex-col gap-3 w-full">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-left">
            Technical Proficiency
          </p>
          {proficiencies.map((p, i) => (
            <div key={i}>
              <div className="flex justify-between items-center mb-1.5 text-left">
                <span className="text-xs font-semibold text-slate-200">
                  {p.name}
                </span>
                <span className="text-xs font-bold text-white">
                  {p.pct}%
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-slate-200 to-white"
                  initial={{ width: 0 }}
                  animate={{ width: `${p.pct}%` }}
                  transition={{
                    duration: 1,
                    delay: i * 0.08,
                    ease: "easeOut",
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      )}

      <div className="h-px bg-slate-800/80 w-full" />

      {/* Availability badge */}
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs font-semibold text-slate-200 backdrop-blur-md shadow-md"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
        <span>{availabilityText}</span>
      </motion.div>
    </div>
  );
}
