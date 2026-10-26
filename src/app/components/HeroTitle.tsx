"use client";

import { slideInFromLeft, slideInFromTop } from "../utils/motion";
import Image from "next/image";
import MotionTag from "./MotionTag";

export default function HeroTitle() {
    let isMobile = false;
    if (typeof window !== "undefined") {
        isMobile = window.matchMedia("(max-width: 1024px)").matches;
    }

    return (
        <div>
            <MotionTag
                tag="div"
                variants={slideInFromLeft(0.5)}
                initial={isMobile ? 'visible' : "hidden"}
                animate="visible"
                className="text-lg sm:text-xl md:text-2xl font-medium flex items-center w-full justify-center lg:justify-start"
            >
                <Image
                    src="/logo-gold.png"
                    alt="Mihajlo Nikolic Portfolio Logo"
                    className="w-7 h-7 mr-1 rounded-md"
                    width={28}
                    height={28}
                />
                <h1>Hey there, I'm Mihajlo! 👋</h1>
            </MotionTag>
            <MotionTag
                tag="div"
                variants={slideInFromLeft(0.55)}
                initial={isMobile ? 'visible' : "hidden"}
                animate="visible"
                className="flex justify-center lg:justify-start mt-4 mb-3"
            >
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Available for new projects
                </span>
            </MotionTag>
            <MotionTag
                tag="h1"
                variants={slideInFromLeft(0.6)}
                initial={isMobile ? 'visible' : "hidden"}
                animate="visible"
                className="text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl 1640:text-[3.25rem] font-bold text-center lg:text-start"
            >
                Building
                <span className="gradient-accent"> intelligent</span>
            </MotionTag>
            <MotionTag
                tag="h1"
                variants={isMobile ? slideInFromTop(0.7) : slideInFromLeft(0.7)}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl 1640:text-[3.25rem] font-bold text-center lg:text-start mb-2"
            >
                software that scales.
            </MotionTag>
        </div>
    );
}
