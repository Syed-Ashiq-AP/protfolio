"use client";
import React, { useEffect, useState } from "react";
import {
    motion,
    MotionValue,
    useAnimate,
    useSpring,
    useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { springConfig } from "@/lib/configs";
import { ClassNameValue } from "tailwind-merge";
import { useMediaQuery } from "usehooks-ts";
import Link from "next/link";

const ProjectItem = ({
    style,
    data,
    spring,
    scrollY,
    index = 1,
    className,
}: {
    style?: { [key: string]: any };
    data: {
        imageUrl: string;
        imageAlt: string;
        title: string;
        description: string;
        github?: string;
        live?: string;
    };
    scrollY: MotionValue<number>;
    spring: {
        translateY: [number[], number[]];
        scale: [number[], number[]];
        opacity: [number[], number[]];
    };
    index?: number;
    className?: ClassNameValue;
}) => {
    const [scope, animate] = useAnimate();

    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };

    const translateY = useSpring(
        useTransform(scrollY, ...spring.translateY),
        springConfig
    );
    const scale = useSpring(
        useTransform(scrollY, ...spring.scale),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollY, ...spring.opacity),
        springConfig
    );
    const [hideEvents, setHideEvents] = useState(true);

    const isSmall = useMediaQuery("only screen and (max-width:678px)");

    useEffect(() => {
        const unsubscribe = translateY.on("change", (latest) => {
            if (latest <= 800 && latest >= 100) setHideEvents(false);
            else {
                setHideEvents(true);
                handleClose();
            }
        });
        return () => unsubscribe();
    }, []);

    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const handleOpen = () => {
        if (isSmall) {
            animate(
                "div.mobile_animate",
                {
                    height: "500px",
                },
                {
                    duration: 0.3,
                }
            );
            setIsMobileOpen(true);
        } else {
            animate(
                "img",
                {
                    width: "44%",
                },
                {
                    duration: 0.3,
                }
            );
        }
    };

    const handleClose = () => {
        if (isSmall) {
            animate(
                "div.mobile_animate",
                {
                    height: "300px",
                },
                {
                    duration: 0.3,
                }
            );
            setIsMobileOpen(false);
        } else {
            animate(
                "img",
                {
                    width: "100%",
                },
                {
                    duration: 0.3,
                }
            );
        }
    };

    const handleMobile = () => {
        if (isMobileOpen) handleClose();
        else handleOpen();
    };

    return (
        <motion.div
            onTap={handleMobile}
            onHoverStart={hideEvents ? () => {} : handleOpen}
            onHoverEnd={hideEvents ? () => {} : handleClose}
            className={cn(
                "w-[95%] xl:w-[80%] absolute top-1/2 lg:top-[100%]",
                `z-[${index}]`,

                `pointer-events-${hideEvents ? "none" : "all"}`
            )}
            style={{ ...style, translateY, scale, opacity }}
        >
            <motion.div
                className="relative p-1 flex flex-col items-stretch"
                ref={scope}
            >
                <motion.div
                    variants={variants}
                    initial={"initial"}
                    animate={"animate"}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className={cn(
                        "z-1 inset-0 rounded-3xl blur-xl opacity-60 absolute will-change-transform",
                        "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
                    )}
                    style={{
                        backgroundSize: "400% 400%",
                    }}
                />
                <motion.div
                    variants={variants}
                    initial={"initial"}
                    animate={"animate"}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className={cn(
                        "z-1 inset-0 rounded-3xl absolute will-change-transform",
                        "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
                    )}
                    style={{
                        backgroundSize: "400% 400%",
                    }}
                />
                <motion.div
                    className={cn(
                        "aspect-video bg-background z-10 relative rounded-[22px] p-4 lg:flex lg:flex-row overflow-hidden mobile_animate h-[250px] md:h-auto",
                        `pointer-events-${hideEvents ? "none" : "all"}`
                    )}
                >
                    <motion.img
                        src={`./project_thumbnail/${data.imageUrl}.webp`}
                        alt={data.imageAlt}
                        className="z-100 rounded-2xl w-full h-[250px] md:h-full object-cover overflow-hidden"
                    />
                    <motion.div className="md:absolute md:left-[46%] -z-10 overflow-hidden  flex flex-col  gap-2 md:top-0 md:bottom-0 m-4 h-[250px] md:h-full">
                        <h1 className=" text-4xl font-bold tracking-wider">
                            {data.title}
                        </h1>
                        <p className="text-sm lg:text-xl">{data.description}</p>
                        <div className="flex justify-evenly">
                            <button className="font-medium rounded-lg border border-neutral-800 px-4 py-2 cursor-pointer hover:bg-neutral-800 transition-colors">
                                {data.github && (
                                    <Link href={data.github} target="_blank">
                                        Github
                                    </Link>
                                )}
                            </button>
                            {data.live && (
                                <button className="font-medium rounded-lg border border-neutral-800 px-4 py-2 cursor-pointer hover:bg-neutral-800 transition-colors">
                                    <Link href={data.live} target="_blank">
                                        Live
                                    </Link>
                                </button>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectItem;
