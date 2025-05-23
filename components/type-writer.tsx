"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import Cursor from "./cursor";

export const TypeWriter = ({
    type,
    className,
    delayFactor = 0.2,
    once = false,
    ...props
}: {
    type: { word: string; className?: string }[];
    className?: string;
    delayFactor?: number;
    once?: boolean;
}) => {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope, { once });

    useEffect(() => {
        if (isInView) {
            animate("div.cursor", { opacity: 1 }, { duration: 0 });
            const totalChars = type.reduce(
                (acc, word) => acc + word.word.length,
                0
            );
            const totalDuration = totalChars * delayFactor * 1000 + 2000;
            setTimeout(() => {
                animate("div.cursor", { opacity: 0 }, { duration: 0.8 });
            }, totalDuration);
        }
    }, [isInView]);

    const containerVariant = {
        visible: {
            transition: {
                staggerChildren: delayFactor,
            },
        },
        hidden: {},
    };

    const charVariant = {
        hidden: { opacity: 0, display: "none" },
        visible: {
            display: "inline-block",
            opacity: 1,
            width: "fit-content",
            transition: {
                ease: "easeInOut",
            },
        },
    };

    const renderWords = () => {
        return (
            <motion.div className="inline">
                {type.map((words, i) => (
                    <motion.span
                        key={`char-${i}`}
                        className={cn("inline-block", words.className)}
                    >
                        {words.word.split("").map((char, index) => (
                            <motion.span
                                key={`char-${i}-${index}`}
                                variants={charVariant}
                                className={cn(words.className)}
                            >
                                {char}
                            </motion.span>
                        ))}
                        &nbsp;
                    </motion.span>
                ))}
            </motion.div>
        );
    };

    return (
        <motion.div
            ref={scope}
            variants={containerVariant}
            initial="hidden"
            whileInView={!once ? "visible" : {}}
            animate={once ? "visible" : {}}
            className={cn("inline-block", className)}
            {...props}
        >
            {renderWords()}
            <Cursor />
        </motion.div>
    );
};

export const TypeWriterSmooth = ({
    type,
    className,
    delayFactor = 0.25,
    ...props
}: {
    type: { word: string; className?: string }[];
    className?: string;
    delayFactor?: number;
}) => {
    const renderWords = () => {
        return type.map((words, i) => {
            return (
                <div key={`word-${i}`} className={"inline-block"}>
                    {words.word.split("").map((char, index) => (
                        <motion.span
                            initial={{}}
                            key={`char-${index}`}
                            className={cn(``, words.className)}
                        >
                            {char}
                        </motion.span>
                    ))}
                    &nbsp;
                </div>
            );
        });
    };
    return (
        <div className={cn("flex space-x-1", className)} {...props}>
            <motion.div
                className="overflow-hidden pb-2"
                initial={{
                    width: "0%",
                }}
                animate={{
                    width: "fit-content",
                }}
                transition={{
                    duration: type.length * delayFactor,
                    ease: "linear",
                }}
            >
                <div
                    style={{
                        whiteSpace: "nowrap",
                    }}
                >
                    {renderWords()}
                </div>
            </motion.div>
        </div>
    );
};
