import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { ClassNameValue } from "tailwind-merge";

const Marquee = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: ClassNameValue;
}) => {
    return (
        <div
            className={cn(
                "mx-10 lg:mx-80 my-20 md:my-0 overflow-hidden mask-[linear-gradient(to_right,transparent_0%,rgb(0,0,0)_10%,rgb(0,0,0)_90%,transparent_100%)] flex gap-10",
                className
            )}
        >
            {Array.from({ length: 2 }).map((_, i) => (
                <div
                    key={i}
                    className="whitespace-nowrap animate-[marquee_20s_linear_infinite] text-muted-foreground text-lg font-medium py-2 flex gap-10"
                >
                    {children}
                </div>
            ))}
        </div>
    );
};

export default Marquee;
