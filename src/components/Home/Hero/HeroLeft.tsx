"use client";
import React from "react";
import { motion } from "framer-motion";
import { HeroStat, fadeLeft, fadeUp } from "./types";
import { Sparkles, ArrowRight, Download, Eye } from "lucide-react";

interface HeroLeftProps {
  name: string;
  title: string;
  description: string;
  stats: HeroStat[];
}

export default function HeroLeft({ name, title, description, stats }: HeroLeftProps) {
  return (
    <div className="flex-1 flex flex-col gap-6 z-10 max-w-2xl order-2 md:order-1 items-center md:items-start">
      
      {/* Availability Status Pill */}
      <motion.div {...fadeLeft(0.08)}>
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-white shadow-sm backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for Hire & Key Projects</span>
        </span>
      </motion.div>

      {/* Greeting & Name */}
      <motion.div {...fadeLeft(0.14)} className="text-center md:text-left space-y-1">
        <p className="text-sm sm:text-base font-semibold text-slate-300 tracking-wide uppercase">
          Hello, I&apos;m <span className="text-white font-black">{name || "Aftab Farhan Arko"}</span>
        </p>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          {title || "Full-Stack Software Engineer"}
        </h1>
      </motion.div>

      {/* Bio / Description */}
      <motion.p
        {...fadeLeft(0.24)}
        className="text-sm sm:text-base text-slate-200 leading-relaxed text-center md:text-left max-w-xl font-medium"
      >
        {description || "Passionate Full-Stack Developer specialized in building modern, scalable web applications with React, Next.js, TypeScript, and Node.js."}
      </motion.p>

      {/* CTA Buttons */}
      <motion.div {...fadeUp(0.35)} className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 w-full md:w-auto">
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-white hover:bg-slate-100 px-7 py-3.5 text-sm font-black text-black shadow-lg shadow-white/10 hover:shadow-white/20 transition-all cursor-pointer w-full sm:w-auto"
        >
          <Download size={16} />
          Download Resume
        </motion.a>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 px-7 py-3.5 text-sm font-bold text-slate-200 hover:text-white transition-all cursor-pointer backdrop-blur-md w-full sm:w-auto"
        >
          <Eye size={16} />
          View Projects
        </motion.a>
      </motion.div>

      {/* Stats Bar */}
      {stats && stats.length > 0 && (
        <motion.div
          {...fadeUp(0.45)}
          className="flex flex-wrap gap-8 sm:gap-12 pt-6 mt-4 border-t border-slate-800/80 w-full justify-center md:justify-start"
        >
          {stats.map(({ id, value, label }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5 + i * 0.08,
              }}
              className="group cursor-default text-center md:text-left"
            >
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-slate-300 transition-colors duration-300">
                {value}
              </div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                {label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
