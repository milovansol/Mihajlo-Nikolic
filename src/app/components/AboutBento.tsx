import { cloneElement, ReactNode } from "react";
import Link from "next/link";
import { Briefcase, Building2, Cpu, Layers, MapPin, Sparkles } from "lucide-react";
import { siteConfig } from "../config";
import SpotlightCard from "./SpotlightCard";
import CountUp from "./CountUp";

const allTechnologies = [
    ...siteConfig.sections.technologies.main,
    ...siteConfig.sections.technologies.other,
];

function findTechnology(name: string) {
    return allTechnologies.find((technology) => technology.name === name);
}

function TileLabel({ icon, children }: { icon: ReactNode; children: ReactNode }) {
    return (
        <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3">
            <span className="text-accent-2">{icon}</span>
            {children}
        </div>
    );
}

function TechChip({ name }: { name: string }) {
    const technology = findTechnology(name);
    return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-200 hover:border-accent-2/40 transition-colors duration-300">
            {technology &&
                cloneElement(technology.icon, {
                    className: `text-xs ${technology.icon.props.className || ""}`,
                })}
            {name}
        </span>
    );
}

function StatTile({ value, suffix, label, className }: { value: number; suffix: string; label: string; className: string }) {
    return (
        <SpotlightCard className={`p-4 flex flex-col justify-center text-center ${className}`}>
            <div className="gradient-accent text-3xl lg:text-4xl font-bold leading-none">
                <CountUp value={value} suffix={suffix} />
            </div>
            <div className="mt-2 text-[10px] lg:text-[11px] uppercase tracking-wider text-slate-350">
                {label}
            </div>
        </SpotlightCard>
    );
}

export default function AboutBento() {
    const { bento, stats, email } = siteConfig;
    const current = siteConfig.sections.experiences[0];
    const [years, industries, technologies] = stats;

    return (
        <div className="w-full grid grid-cols-2 sm:grid-cols-6 grid-flow-row-dense gap-3">
            {/* Intro */}
            <SpotlightCard className="col-span-2 sm:col-span-6 p-5 lg:p-6">
                <TileLabel icon={<Sparkles size={12} />}>About</TileLabel>
                <div
                    className="[&>p:last-child]:mb-0"
                    dangerouslySetInnerHTML={{
                        __html: siteConfig.sections.aboutMe,
                    }}
                />
            </SpotlightCard>

            {/* Current role */}
            <SpotlightCard className="col-span-2 sm:col-span-4 p-5">
                <TileLabel icon={<Briefcase size={12} />}>Currently</TileLabel>
                <div className="flex items-center gap-2 mb-2">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-[11px] text-emerald-300">{current.duration}</span>
                </div>
                <h3 className="text-slate-100 text-base font-bold leading-snug">
                    {current.position}
                </h3>
                <p className="text-slate-350 text-xs !mb-0 mt-1">{current.company}</p>
            </SpotlightCard>

            <StatTile {...years} className="col-span-1 sm:col-span-2" />

            {/* AI toolkit */}
            <SpotlightCard className="col-span-2 sm:col-span-6 p-5">
                <TileLabel icon={<Cpu size={12} />}>AI Toolkit</TileLabel>
                <div className="flex flex-wrap gap-1.5">
                    {bento.aiToolkit.map((name) => (
                        <TechChip key={name} name={name} />
                    ))}
                </div>
            </SpotlightCard>

            {/* Core stack */}
            <SpotlightCard className="col-span-2 sm:col-span-4 p-5">
                <TileLabel icon={<Layers size={12} />}>Core Stack</TileLabel>
                <div className="grid grid-cols-6 gap-2">
                    {bento.coreStack.map((name) => {
                        const technology = findTechnology(name);
                        if (!technology) return null;
                        return (
                            <div
                                key={name}
                                title={name}
                                className="group aspect-square rounded-lg border border-white/[0.06] bg-white/[0.03] flex items-center justify-center hover:border-accent-2/40 transition-colors duration-300"
                            >
                                {cloneElement(technology.icon, {
                                    className: `text-lg transition-transform duration-300 group-hover:scale-125 ${technology.icon.props.className || ""}`,
                                })}
                            </div>
                        );
                    })}
                </div>
            </SpotlightCard>

            {/* Industries */}
            <SpotlightCard className="col-span-1 sm:col-span-2 p-5">
                <TileLabel icon={<Building2 size={12} />}>Industries</TileLabel>
                <div className="gradient-accent text-3xl font-bold leading-none w-fit">
                    <CountUp value={industries.value} suffix={industries.suffix} />
                </div>
                <ul className="mt-3 space-y-1 text-xs text-slate-200">
                    {bento.industries.map((industry) => (
                        <li key={industry} className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-accent-2" />
                            {industry}
                        </li>
                    ))}
                </ul>
            </SpotlightCard>

            {/* Location */}
            <SpotlightCard className="col-span-1 sm:col-span-3 p-5">
                <TileLabel icon={<MapPin size={12} />}>Based in</TileLabel>
                <div className="text-slate-100 text-lg font-bold leading-tight">{bento.location}</div>
                <p className="text-slate-350 text-[11px] !mb-0 mt-1 leading-snug">{bento.timezone}</p>
            </SpotlightCard>

            <StatTile {...technologies} className="col-span-1 sm:col-span-3" />

            {/* Call to action */}
            <SpotlightCard className="col-span-2 sm:col-span-6 p-5 lg:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <h3 className="text-slate-100 text-lg font-bold leading-tight">
                            Have a project in mind?{" "}
                            <span className="gradient-accent">Let&apos;s build it.</span>
                        </h3>
                        <p className="text-slate-350 text-xs !mb-0 mt-1">
                            I&apos;d love to help with your application.
                        </p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                        <Link
                            href="#contact"
                            className="rounded-md bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 px-4 py-2 text-xs font-semibold text-background hover:brightness-110 hover:shadow-[0_0_24px_rgb(var(--accent-2)/0.5)] transition-all duration-300"
                        >
                            Get in touch
                        </Link>
                        <Link
                            href={`mailto:${email}`}
                            className="rounded-md border border-white/15 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-accent-2/50 hover:text-accent-1 transition-all duration-300"
                        >
                            Email me
                        </Link>
                    </div>
                </div>
            </SpotlightCard>
        </div>
    );
}
