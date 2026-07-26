"use client";
import React from "react";
import { Layers, Rocket } from "lucide-react";
import { techStack, services, additionalServices } from "./servicesData";
import ServiceCard from "./ServiceCard";
import DevOpsWorkflow from "./ServiceCard";

const Services = () => {
  return (
    <section id="services" className="mb-32 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center sm:flex-row sm:items-center sm:justify-start sm:text-left gap-6 mb-12">
        <div className="relative flex flex-col items-center sm:items-start">
          <h2 className="text-2xl md:text-4xl font-black text-foreground tracking-tight leading-none">
            All-in-One Digital Services Expert
          </h2>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 w-20 h-1 bg-foreground rounded-full" />
        </div>
        <div className="h-px flex-1 bg-foreground/10 hidden sm:block" />
        <span className="text-sm font-mono text-foreground/40 hidden sm:block">
          &lt;what-i-do /&gt;
        </span>
      </div>

      {/* ── DevOps / Deployment Workflow ────────────────────────────────── */}
      <DevOpsWorkflow />

      {/* Also Build / Extended Capabilities */}
      <div className="p-6 sm:p-8 rounded-[2rem] bg-slate-900/80 border border-slate-800/90 backdrop-blur-xl mb-8 shadow-xl card-3d">
        <h3 className="text-base sm:text-lg font-bold text-white mb-5 flex items-center gap-3">
          <Rocket size={18} className="text-white" />
          Extended Engineering Capabilities
        </h3>
        <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2.5">
          {additionalServices.map((service) => (
            <span
              key={service.label}
              className="flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm bg-slate-950/80 border border-slate-800 rounded-full text-slate-200 hover:text-white hover:border-slate-600 transition-all cursor-default justify-center sm:justify-start shadow-sm"
            >
              <span className="opacity-80 flex-shrink-0">{service.icon}</span>
              <span className="truncate sm:overflow-visible sm:whitespace-normal font-semibold">{service.label}</span>
            </span>
          ))}
        </div>
      </div>


    </section>
  );
};

export default Services;