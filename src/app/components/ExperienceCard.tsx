import SpotlightCard from "./SpotlightCard";

type TProps = {
    company: string;
    position: string;
    duration: string;
    description: string;
};

export default function ExperienceCard({
    company,
    position,
    duration,
    description,
}: TProps) {
    const isCurrent = duration.includes("Present");
    const hasDescription = description.replace(/<[^>]*>/g, "").trim().length > 0;

    return (
        <div className="group/exp relative w-full pl-7 lg:pl-8 pb-6 lg:pb-8 last:pb-0">
            {/* Timeline line and dot */}
            <span
                aria-hidden
                className="absolute left-[7px] top-5 bottom-0 w-px bg-gradient-to-b from-accent-2/60 via-accent-3/30 to-transparent group-last/exp:hidden"
            />
            <span
                aria-hidden
                className="absolute left-0 top-[18px] flex h-[15px] w-[15px] items-center justify-center rounded-full border border-accent-2/60 bg-background"
            >
                {isCurrent && (
                    <span className="absolute inset-0 rounded-full bg-accent-2/40 animate-ping" />
                )}
                <span className="h-[7px] w-[7px] rounded-full bg-gradient-to-br from-accent-1 to-accent-3 shadow-[0_0_12px_rgb(var(--accent-2)/0.9)]" />
            </span>

            <SpotlightCard className="p-4 lg:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                    <h2 className="text-slate-100 text-sm font-bold">{company}</h2>
                    <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] lg:text-[11px] font-medium ${
                            isCurrent
                                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                                : "border-white/10 bg-white/[0.04] text-slate-350"
                        }`}
                    >
                        {isCurrent && (
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        )}
                        {duration}
                    </span>
                </div>
                <h3 className="gradient-accent text-sm font-semibold mt-1 w-fit">{position}</h3>
                {hasDescription && (
                    <div
                        className="exp-description text-slate-350 text-xs mt-3 lg:text-sm lg:mt-4 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                )}
            </SpotlightCard>
        </div>
    );
}
