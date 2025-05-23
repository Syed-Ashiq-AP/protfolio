"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TypeWriter, TypeWriterSmooth } from "@/components/type-writer";
import {
    useScroll,
    useSpring,
    useTransform,
    motion,
    scale,
    useMotionValue,
    useAnimate,
} from "framer-motion";
import { cn } from "@/lib/utils";
import ProjectItem from "@/components/project-item";
import Link from "next/link";
import { springConfig } from "@/lib/configs";

const aboutWord = [
    {
        word: "I’m",
    },
    {
        word: "a",
    },
    {
        word: "full-stack",
        className: "text-white",
    },
    {
        word: "developer",
        className: "text-white",
    },
    {
        word: "and",
        className: "text-white",
    },
    {
        word: "a",
    },
    {
        word: "third-year",
        className: "text-white",
    },
    {
        word: "CSE",
        className: "text-white",
    },
    {
        word: "student",
        className: "text-white",
    },
    {
        word: "at",
    },
    {
        word: "B.S.",
        className: "text-white",
    },
    {
        word: "Abdur",
        className: "text-white",
    },
    {
        word: "Rahman",
        className: "text-white",
    },
    {
        word: "Crescent",
        className: "text-white",
    },
    {
        word: "Institute,",
        className: "text-white",
    },
    {
        word: "Vandalur.",
        className: "text-white",
    },
    {
        word: "I",
    },
    {
        word: "enjoy",
    },
    {
        word: "building",
    },
    {
        word: "full-featured",
        className: "text-white",
    },
    {
        word: "web",
        className: "text-white",
    },
    {
        word: "apps",
        className: "text-white",
    },
    {
        word: "and",
    },
    {
        word: "tools",
        className: "text-white",
    },
    {
        word: "that",
    },
    {
        word: "make",
    },
    {
        word: "developers'",
        className: "text-white",
    },
    {
        word: "lives",
        className: "text-white",
    },
    {
        word: "easier.",
        className: "text-white",
    },
    {
        word: "Right",
    },
    {
        word: "now,",
    },
    {
        word: "I’m",
    },
    {
        word: "learning",
    },
    {
        word: "Rust",
        className: "text-white",
    },
    {
        word: "and",
    },
    {
        word: "Go,",
        className: "text-white",
    },
    {
        word: "and",
    },
    {
        word: "working",
    },
    {
        word: "on",
    },
    {
        word: "Web",
        className: "text-white",
    },
    {
        word: "Engine",
        className: "text-white",
    },
    {
        word: ",",
    },
    {
        word: "a",
    },
    {
        word: "no-code",
        className: "text-white",
    },
    {
        word: "platform",
        className: "text-white",
    },
    {
        word: "that",
    },
    {
        word: "lets",
    },
    {
        word: "anyone",
    },
    {
        word: "create",
    },
    {
        word: "HTML,",
        className: "text-white",
    },
    {
        word: "CSS,",
        className: "text-white",
    },
    {
        word: "and",
    },
    {
        word: "JavaScript",
        className: "text-white",
    },
    {
        word: "without",
    },
    {
        word: "writing",
    },
    {
        word: "a",
    },
    {
        word: "single",
    },
    {
        word: "line",
    },
    {
        word: "of",
    },
    {
        word: "code.",
    },
    {
        word: "I’m",
    },
    {
        word: "aiming",
    },
    {
        word: "to",
    },
    {
        word: "grow",
    },
    {
        word: "into",
    },
    {
        word: "a",
    },
    {
        word: "Tech",
        className: "text-white",
    },
    {
        word: "Lead",
        className: "text-white",
    },
    {
        word: "or",
    },
    {
        word: "Engineering",
        className: "text-white",
    },
    {
        word: "Manager",
        className: "text-white",
    },
    {
        word: "role",
    },
    {
        word: "down",
    },
    {
        word: "the",
    },
    {
        word: "line.",
    },
];

export default function Home() {
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,

        offset: ["start start", "end start"],
    });
    const scaleDiv1 = useSpring(
        useTransform(scrollYProgress, [0.2, 1], [1, 0]),
        springConfig
    );
    const opacityDiv1 = useSpring(
        useTransform(scrollYProgress, [0.3, 0.35], [1, 0]),
        springConfig
    );
    const [displayDiv1, setDisplayDiv1] = useState<"flex" | "none">("flex");

    const earlyRangeDiv2 = [0.3, 0.4];
    const rangeDiv2 = [0.35, 0.4];

    const scaleDiv2 = useSpring(
        useTransform(scrollYProgress, earlyRangeDiv2, [0.9, 1]),
        springConfig
    );
    const opacityDiv2 = useSpring(
        useTransform(scrollYProgress, rangeDiv2, [0, 1]),
        springConfig
    );
    const translateYDiv2 = useSpring(
        useTransform(scrollYProgress, rangeDiv2, [100, 0]),
        springConfig
    );

    const [displayDiv2, setDisplayDiv2] = useState<"flex" | "none">("none");

    const [isSticky, setIsSticky] = useState(false);

    const [scope, animate] = useAnimate();

    useEffect(() => {
        const unsubscribeDiv1 = opacityDiv1.on("change", (latest) => {
            setDisplayDiv1(latest > 0 ? "flex" : "none");
        });
        const unsubscribeDiv2 = opacityDiv2.on("change", (latest) => {
            setDisplayDiv2(latest > 0 ? "flex" : "none");
        });
        const unsubscribeScroll = scrollYProgress.on("change", (latest) => {
            if (latest > 0.1 && !isSticky) {
                animate(
                    "div.navbar",
                    {
                        width: "60%",
                    },
                    {
                        duration: 0.3,
                    }
                );
                setIsSticky(true);
            } else if (latest <= 0.1 && isSticky) {
                animate(
                    "div.navbar",
                    {
                        width: "80%",
                    },
                    {
                        duration: 0.1,
                    }
                );
            }
            if (latest < 0.1 && isSticky) {
                setIsSticky(false);
            }
        });

        return () => {
            unsubscribeDiv1();
            unsubscribeDiv2();
            unsubscribeScroll();
        };
    }, [isSticky]);

    const projectRef = React.useRef(null);
    const { scrollYProgress: scrollYProject } = useScroll({
        target: projectRef,

        offset: ["start start", "end start"],
    });

    return (
        <div className="dark relative flex flex-col items-stretch" ref={scope}>
            {/* NAVIGATION */}
            <motion.div
                className={cn(
                    "sticky top-5 left-0 right-0 m-auto w-[80%] md:w-[90%] flex justify-between items-center rounded-2xl border-2 border-neutral-800 p-4 backdrop-blur-2xl z-100 navbar"
                )}
            >
                <span className="font-black text-lg">SA</span>
                <Link
                    href={"/resume.pdf"}
                    target="_blank"
                    className="text-neutral-500 hover:text-white transition-all"
                >
                    Resume
                </Link>
            </motion.div>
            {/* INTRO */}
            <div
                ref={ref}
                className="flex relative h-[200vh] lg:h-[120vh] shrink-0 transform flex-col items-center justify-start py-0 [perspective:800px] md:scale-100 md:py-80"
            >
                {/* div1 */}
                <motion.div
                    className="flex flex-col sticky top-1/4 lg:top-1/3 text-center uppercase"
                    style={{
                        scale: scaleDiv1,
                        opacity: opacityDiv1,
                        display: displayDiv1,
                    }}
                >
                    <TypeWriterSmooth
                        type={[
                            {
                                word: "portfolio",
                            },
                            {
                                word: "of",
                            },
                        ]}
                        className=" text-sm lg:text-xl  text-neutral-400 font-medium tracking-wide flex items-center flex-col"
                    />
                    <TypeWriter
                        type={[
                            {
                                word: "syed",
                            },
                            {
                                word: "ashiq",
                            },
                        ]}
                        className="flex bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-white text-4xl lg:text-9xl font-black uppercase"
                        delayFactor={0.1}
                    />
                    <TypeWriterSmooth
                        type={[
                            {
                                word: "full",
                            },
                            {
                                word: "stack",
                            },
                            {
                                word: "developer",
                            },
                        ]}
                        className="text-xl capitalize text-neutral-400 font-medium tracking-wide flex items-center flex-col"
                    />
                </motion.div>
                {/* div2 */}
                <motion.div
                    className="sticky top-1/3 text-center flex flex-col gap-4 items-stretch md:items-center"
                    style={{
                        scale: scaleDiv2,
                        opacity: opacityDiv2,
                        y: translateYDiv2,
                        display: displayDiv2,
                    }}
                >
                    <TypeWriter
                        type={[
                            {
                                word: "Hey",
                            },
                            {
                                word: "there!",
                            },
                        ]}
                        className="flex text-lg lg:text-4xl font-black justify-center"
                    />
                    <TypeWriter
                        type={aboutWord}
                        delayFactor={0.01}
                        once
                        className="mx-5 md:mx-20 lg:mx-0 lg:w-2xl text-sm lg:text-xl text-neutral-400 font-medium"
                    />
                </motion.div>
            </div>
            {/* PROJECTS */}
            <div
                ref={projectRef}
                className="flex relative h-[300vh] shrink-0 transform flex-col items-stretch justify-start py-0 [perspective:800px] md:scale-100 md:py-80 mb-[500px]"
            >
                <motion.div className="xl:mx-46 sticky top-[10%] flex flex-col items-center">
                    <TypeWriterSmooth
                        type={[
                            {
                                word: "Featured",
                            },
                            {
                                word: "Projects",
                            },
                        ]}
                        className="flex text-2xl lg:text-4xl font-black justify-center py-5 lg:py-10"
                    />
                    <ProjectItem
                        data={{
                            imageAlt: "Al Hosn",
                            imageUrl: "ah",
                            title: "Al Hosn",
                            description:
                                "A Python Web emulated app, inspired by the Al Hosn app, can function as a COVID-19 health status tracker. Users can check their test results, vaccination records, and receive notifications about potential exposure.",
                            github: "https://github.com/Syed-Ashiq-AP/Al-Hosn",
                        }}
                        spring={{
                            translateY: [
                                [0, 0.4],
                                [1000, 0],
                            ],
                            scale: [
                                [0.25, 0.5],
                                [1, 0.8],
                            ],
                            opacity: [[0], [1]],
                        }}
                        scrollY={scrollYProject}
                    />
                    <ProjectItem
                        data={{
                            imageAlt: "HTML Table",
                            imageUrl: "tgr",
                            title: "HTML Table",
                            github: "https://github.com/Syed-Ashiq-AP/TableHTML",
                            live: "https://table-html-lake.vercel.app/",
                            description:
                                "A Table Generator that allows users to create tables with custom rows and columns. Users can add, remove, and edit rows and columns, as well as export the table as an image or HTML code.",
                        }}
                        spring={{
                            translateY: [
                                [0.3, 0.6],
                                [1000, 50],
                            ],
                            scale: [
                                [0.55, 0.6],
                                [1, 0.85],
                            ],
                            opacity: [
                                [0.33, 0.36],
                                [0, 1],
                            ],
                        }}
                        scrollY={scrollYProject}
                    />
                    <ProjectItem
                        data={{
                            imageAlt: "Web Engine",
                            imageUrl: "wer",
                            title: "Web Engine",
                            live: "https://web-engine-wheat.vercel.app/",
                            description:
                                "Easily build Websites from scratch with full customization including Styles, Animations, JS, etc. with a simple drag and drop interface.Users can also export the code and host it on their own servers.",
                        }}
                        spring={{
                            translateY: [
                                [0.5, 0.7],
                                [1200, 100],
                            ],
                            scale: [
                                [0.65, 0.7],
                                [1, 0.9],
                            ],
                            opacity: [
                                [0.53, 0.56],
                                [0, 1],
                            ],
                        }}
                        scrollY={scrollYProject}
                    />
                </motion.div>
            </div>

            {/* Contact */}
            <div className="flex flex-col p-8 border-t bg-neutral-900 border-neutral-800 mt-[50vh]">
                <h2 className="flex bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-white text-4xl lg:text-9xl font-black uppercase">
                    SYED ASHIQ
                </h2>
                <div className="flex justify-between p-2">
                    <span className="font-semibold">Get in touch</span>
                    <div className="flex gap-4">
                        <Link
                            href={
                                "https://www.linkedin.com/in/syed-ashiq-1172b6271/"
                            }
                            target="_blank"
                        >
                            LinkedIn
                        </Link>
                        <Link
                            href={"https://github.com/Syed-Ashiq-AP"}
                            target="_blank"
                        >
                            Github
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
