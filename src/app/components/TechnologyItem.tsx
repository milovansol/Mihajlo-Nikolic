import { cloneElement } from "react";

interface TechnologyItemProps {
    technology: {
        name: string;
        icon: JSX.Element;
        description?: string;
    };
    className?: string;
}

export default function TechnologyItem({ technology, className = "" }: TechnologyItemProps) {
    const IconWithClasses = cloneElement(technology.icon, {
        className: `w-1/3 h-1/3 transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_10px_currentColor] ${
            technology.icon.props.className || ""
        }`,
    });

    return (
        <div
            className={`group bg-white bg-opacity-[0.03] hover:bg-opacity-[0.07] border border-white/[0.06] hover:border-pink-500/30 transition-all duration-300 rounded-lg aspect-square flex justify-center items-center ${className}`}
            title={technology.name}
        >
            {IconWithClasses}
        </div>
    );
}
