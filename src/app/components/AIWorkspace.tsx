"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import { MessageSquareText, Rocket, Sparkles } from "lucide-react";
import { SiAnthropic } from "react-icons/si";
import { TbDatabaseSearch, TbRobot } from "react-icons/tb";
import MotionTag from "./MotionTag";
import { slideInFromRight } from "../utils/motion";

type Step = {
    label: string;
    icon: ReactNode;
    // Node position inside the 400x120 pipeline viewBox
    x: number;
    y: number;
    log: ReactNode;
};

const steps: Step[] = [
    {
        label: "Prompt",
        icon: <MessageSquareText size={15} />,
        x: 40,
        y: 78,
        log: (
            <>
                <span className="text-accent-1">$</span> agent run{" "}
                <span className="text-emerald-300">&quot;triage support tickets&quot;</span>
            </>
        ),
    },
    {
        label: "LLM",
        icon: <SiAnthropic size={14} />,
        x: 120,
        y: 34,
        log: (
            <>
                <span className="text-accent-2">→</span> planning with Claude &amp; GPT
            </>
        ),
    },
    {
        label: "RAG",
        icon: <TbDatabaseSearch size={16} />,
        x: 200,
        y: 78,
        log: (
            <>
                <span className="text-accent-2">→</span> retrieving context · vector store
            </>
        ),
    },
    {
        label: "MCP Tools",
        icon: <TbRobot size={16} />,
        x: 280,
        y: 34,
        log: (
            <>
                <span className="text-accent-2">→</span> MCP tools · crm.search · jira.create
            </>
        ),
    },
    {
        label: "Ship",
        icon: <Rocket size={15} />,
        x: 360,
        y: 78,
        log: (
            <>
                <span className="text-emerald-400">✓</span> evals passed · shipped to prod
            </>
        ),
    },
];

const TICK_MS = 1600;
// Extra ticks to hold the finished run on screen before it restarts
const HOLD_TICKS = 3;

const segments = steps.slice(1).map((to, i) => {
    const from = steps[i];
    return `M ${from.x} ${from.y} C ${from.x + 40} ${from.y}, ${to.x - 40} ${to.y}, ${to.x} ${to.y}`;
});

export default function AIWorkspace() {
    const prefersReducedMotion = useReducedMotion();
    // Applied after mount so the first client render matches the server HTML
    const [reduceMotion, setReduceMotion] = useState(false);
    const [tick, setTick] = useState(0);

    useEffect(() => {
        setReduceMotion(!!prefersReducedMotion);
    }, [prefersReducedMotion]);
    const pulseRef = useRef<SVGAnimateMotionElement>(null);

    useEffect(() => {
        if (reduceMotion) return;
        const id = setInterval(
            () => setTick((t) => (t + 1) % (steps.length + HOLD_TICKS)),
            TICK_MS
        );
        return () => clearInterval(id);
    }, [reduceMotion]);

    const step = reduceMotion ? steps.length - 1 : Math.min(tick, steps.length - 1);
    const isFlowing = !reduceMotion && step < steps.length - 1;

    // SMIL animations added after page load don't start on their own
    useEffect(() => {
        if (isFlowing) pulseRef.current?.beginElement();
    }, [tick, isFlowing]);

    return (
        <MotionTag
            tag="div"
            variants={slideInFromRight(0.8)}
            initial="hidden"
            animate="visible"
            className="lg:pl-6 w-full min-w-0 mb-8 lg:mb-12"
        >
            <div className="flex items-center justify-center lg:justify-start gap-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400 mb-3">
                <Sparkles size={12} className="text-accent-2" />
                AI-native workflow
            </div>

            <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm shadow-[0_0_80px_-24px_rgb(var(--accent-2)/0.45)]">
                {/* Window chrome */}
                <div className="flex items-center justify-between gap-3 border-b border-white/[0.06] px-4 py-2.5">
                    <div className="flex items-center gap-1.5" aria-hidden>
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                    </div>
                    <span className="truncate font-mono text-[10px] text-slate-400">
                        mihajlo@ai-workspace
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        live
                    </span>
                </div>

                <div className="bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:14px_14px]">
                    {/* Agent pipeline */}
                    <div className="relative mx-4 mt-4 mb-2 aspect-[10/3]" aria-hidden>
                        <svg viewBox="0 0 400 120" className="absolute inset-0 h-full w-full overflow-visible">
                            <defs>
                                <linearGradient id="ai-flow" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stopColor="rgb(var(--accent-1))" />
                                    <stop offset="100%" stopColor="rgb(var(--accent-3))" />
                                </linearGradient>
                            </defs>
                            {segments.map((d, i) => (
                                <g key={d}>
                                    <path d={d} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                                    <path
                                        d={d}
                                        fill="none"
                                        stroke="url(#ai-flow)"
                                        strokeWidth="1.5"
                                        strokeDasharray="4 6"
                                        className="flow-dash transition-opacity duration-500"
                                        style={{ opacity: i < step ? 0.9 : 0.15 }}
                                    />
                                </g>
                            ))}
                            {isFlowing && (
                                <circle
                                    r="3.5"
                                    fill="rgb(var(--accent-1))"
                                    style={{ filter: "drop-shadow(0 0 6px rgb(var(--accent-2)))" }}
                                >
                                    <animateMotion
                                        ref={pulseRef}
                                        begin="indefinite"
                                        dur={`${TICK_MS / 1000}s`}
                                        fill="freeze"
                                        path={segments[step]}
                                    />
                                </circle>
                            )}
                        </svg>

                        {steps.map((s, i) => {
                            const state = i === step ? "active" : i < step ? "done" : "idle";
                            return (
                                <div
                                    key={s.label}
                                    className="absolute -translate-x-1/2 -translate-y-1/2"
                                    style={{ left: `${(s.x / 400) * 100}%`, top: `${(s.y / 120) * 100}%` }}
                                >
                                    <div
                                        className={`relative flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-500 ${
                                            state === "active"
                                                ? "scale-110 border-accent-1 bg-accent-2/20 text-accent-1 shadow-[0_0_22px_rgb(var(--accent-2)/0.6)]"
                                                : state === "done"
                                                  ? "border-accent-2/50 bg-background text-accent-2"
                                                  : "border-white/10 bg-background text-slate-500"
                                        }`}
                                    >
                                        {state === "active" && !reduceMotion && (
                                            <span className="absolute inset-0 rounded-full border border-accent-1/60 animate-ping" />
                                        )}
                                        {s.icon}
                                    </div>
                                    <span
                                        className={`absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap text-[9px] font-semibold uppercase tracking-wider transition-colors duration-500 ${
                                            state === "idle" ? "text-slate-500" : "text-slate-200"
                                        }`}
                                    >
                                        {s.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Streaming agent log */}
                    <div
                        className="mx-4 mb-4 mt-6 h-[112px] overflow-hidden rounded-lg border border-white/[0.06] bg-black/40 p-3 font-mono text-[10.5px] leading-[17px] text-slate-300"
                        aria-label="Example AI agent run: prompt, plan with an LLM, retrieve context, call tools, ship"
                    >
                        <AnimatePresence initial={false}>
                            {steps.slice(0, step + 1).map((s, i) => (
                                <motion.div
                                    key={s.label}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="truncate"
                                >
                                    {s.log}
                                    {i === step && (
                                        <span className="ml-1 inline-block h-3 w-1.5 translate-y-0.5 bg-accent-1 animate-pulse" />
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </MotionTag>
    );
}
