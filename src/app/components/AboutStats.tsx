"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../config";

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const controls = animate(0, value, {
            duration: 1.6,
            ease: "easeOut",
            onUpdate: (latest) => setDisplay(Math.round(latest)),
        });
        return () => controls.stop();
    }, [isInView, value]);

    return (
        <span ref={ref}>
            {display}
            {suffix}
        </span>
    );
}

export default function AboutStats() {
    return (
        <div className="w-full grid grid-cols-3 gap-3 mt-2">
            {siteConfig.stats.map((stat) => (
                <div
                    key={stat.label}
                    className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-4 text-center hover:border-pink-500/30 hover:bg-white/[0.04] transition-all duration-300"
                >
                    <div className="gradient-accent text-2xl lg:text-3xl font-bold leading-none">
                        <CountUp value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-2 text-[10px] lg:text-[11px] uppercase tracking-wider text-slate-350">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>
    );
}
