"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SocialLink, scaleIn, SocialIcon } from "./types";
import {
  TerminalCard,
  CurrentStackBadge,
  FloatingIconBadges,
} from "./HeroDecorations";

interface HeroRightProps {
  image: string;
  name: string;
  title: string;
  socials: SocialLink[];
}

export default function HeroRight({ image, name, title, socials }: HeroRightProps) {
  return (
    <motion.div
      {...scaleIn(0.2)}
      className="relative flex-shrink-0 flex items-center md:mt-0 mt-10 justify-center order-1 md:order-2 max-md:self-center"
    >
      <TerminalCard />
      <CurrentStackBadge />

      {/* Rings */}
      <div className="absolute w-[300px] h-[300px] min-[375px]:w-[360px] min-[375px]:h-[360px] sm:w-[420px] sm:h-[420px] md:w-[460px] md:h-[460px] rounded-full border border-dashed border-foreground/15 animate-[spin_80s_linear_infinite]" />
      <div className="absolute w-[260px] h-[260px] min-[375px]:w-[320px] min-[375px]:h-[320px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] rounded-full border border-border animate-[spin_50s_linear_infinite_reverse]" />
      <div className="absolute w-[220px] h-[220px] min-[375px]:w-[280px] min-[375px]:h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] rounded-full bg-foreground/8 blur-[80px]" />

      {/* Profile image circle */}
      <div className="relative w-[260px] h-[260px] min-[375px]:w-[310px] min-[375px]:h-[310px] sm:w-[380px] sm:h-[380px] rounded-full border-[3px] border-white/30 p-2.5 shadow-[0_0_50px_rgba(255,255,255,0.12)] bg-slate-950 z-10 group card-3d">
        <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 relative flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={`${name || "Developer"} - ${title || "Software Engineer"}`}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#FF6014] via-[#ff7c42] to-amber-500 flex items-center justify-center text-white text-6xl font-black uppercase shadow-inner">
              {name ? name.charAt(0) : "A"}
            </div>
          )}
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-slate-800/80 pointer-events-none" />
        </div>

        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-2 rounded-full bg-background/95 backdrop-blur-xl border border-border shadow-[0_8px_32px_rgba(0,0,0,0.4)] z-20 whitespace-nowrap">
          {socials.map((social, i) => (
            <div key={social.id} className="flex items-center gap-3">
              {i > 0 && <span className="w-px h-3 bg-foreground/20" />}
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px] font-black text-foreground/70 hover:text-foreground transition-colors"
              >
                <SocialIcon platform={social.platform} />
                {social.platform}
              </a>
            </div>
          ))}
        </div>
      </div>

      <FloatingIconBadges />
    </motion.div>
  );
}
