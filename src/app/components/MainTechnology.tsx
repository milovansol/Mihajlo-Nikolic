import { cloneElement } from 'react';

interface MainTechnologyProps {
    technology: {
        name: string;
        icon: JSX.Element;
        description: string;
    };
}

export default function MainTechnology({ technology }: MainTechnologyProps) {
    // Clone the icon element and add additional classes
    const IconWithClasses = cloneElement(technology.icon, {
        className: `text-3xl transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_12px_currentColor] ${technology.icon.props.className || ''}`
    });

    return (
        <div
            className="group flex flex-col items-center gap-2 text-center rounded-xl border border-white/[0.06] bg-white/[0.02] px-2 py-4 hover:-translate-y-1 hover:border-pink-500/30 hover:bg-white/[0.05] hover:shadow-[0_10px_30px_-10px_rgba(236,72,153,0.4)] transition-all duration-300"
            title={technology.name}
        >
            {IconWithClasses}
            <div>
                <h3 className="text-xs font-bold">{technology.name}</h3>
                <p className="text-[11px] text-slate-350 leading-normal !mb-0">{technology.description}</p>
            </div>
        </div>
    );
}
