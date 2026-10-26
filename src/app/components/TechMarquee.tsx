import { cloneElement } from "react";
import { siteConfig } from "../config";

export default function TechMarquee() {
    const technologies = siteConfig.sections.technologies;
    const all = [...technologies.main, ...technologies.other];
    const half = Math.ceil(all.length / 2);
    const rows = [all.slice(0, half), all.slice(half)];

    return (
        <div
            aria-hidden
            className="marquee-mask w-full max-w-full min-w-0 mt-6 flex flex-col gap-3 overflow-hidden"
        >
            {rows.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className={`marquee-track flex w-max ${rowIndex % 2 ? "marquee-reverse" : ""}`}
                >
                    {/* The row is rendered twice so the loop is seamless */}
                    {[...row, ...row].map((technology, index) => (
                        <span
                            key={index}
                            className="mx-1.5 flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[11px] text-slate-300 whitespace-nowrap"
                        >
                            {cloneElement(technology.icon, {
                                className: `text-sm ${technology.icon.props.className || ""}`,
                            })}
                            {technology.name}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
}
