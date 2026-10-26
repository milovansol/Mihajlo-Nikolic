"use client";

import { MouseEvent, ReactNode, useRef } from "react";

type TProps = {
    children: ReactNode;
    className?: string;
};

// Glass card with a glow and gradient border that follow the cursor
export default function SpotlightCard({ children, className = "" }: TProps) {
    const ref = useRef<HTMLDivElement>(null);

    const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
        el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
    };

    return (
        <div
            ref={ref}
            onMouseMove={onMouseMove}
            className={`spotlight-card ${className}`}
        >
            <div className="relative z-[1]">{children}</div>
        </div>
    );
}
