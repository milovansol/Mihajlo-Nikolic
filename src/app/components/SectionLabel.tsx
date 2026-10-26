import { siteConfig } from "../config";

type TProps = {
    label: string;
    className?: string;
};

export default function SectionLabel({ label, className = "" }: TProps) {
    const index = siteConfig.sections.tableOfContents.findIndex(
        (section) => section.label === label
    );
    const number = index >= 0 ? String(index + 1).padStart(2, "0") : null;

    return (
        <div className={`w-full text-center lg:text-start mb-4 group ${className}`}>
            <h2 className="text-slate-100 text-xs font-bold tracking-[0.3em] pb-2 group-hover:text-accent-1 transition-all duration-300">
                {number && (
                    <span className="gradient-accent font-mono tracking-normal mr-2">
                        {number}.
                    </span>
                )}
                {label}
            </h2>
            <div className="flex justify-center lg:justify-start">
                <div className="w-36 lg:w-20 lg:group-hover:w-28 transition-all duration-300 h-px bg-gradient-to-r from-accent-1/80 via-accent-3/50 to-transparent" />
            </div>
        </div>
    );
}
