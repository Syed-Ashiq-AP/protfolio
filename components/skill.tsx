import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { ClassNameValue } from "tailwind-merge";
const Skill = ({
    icon,
    name,
    className,
}: {
    icon: ReactNode;
    name: string;
    className?: ClassNameValue;
}) => {
    return (
        <div
            className={cn(
                "flex gap-3 items-center text-lg text-neutral-500 font-medium hover:text-white cursor-pointer transition-colors",
                className
            )}
        >
            {icon}
            <span>{name}</span>
        </div>
    );
};

export default Skill;
