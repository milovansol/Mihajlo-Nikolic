"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            aria-hidden
            style={{ scaleX }}
            className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 shadow-[0_0_12px_rgba(236,72,153,0.8)]"
        />
    );
}
