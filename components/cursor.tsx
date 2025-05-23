import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Cursor = ({ className }: { className?: string }) => {
    return (
        <motion.div className="inline-block cursor">
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "rounded-sm w-[4px] bg-blue-500 h-full",
                    className
                )}
            ></motion.div>
        </motion.div>
    );
};

export default Cursor;
