"use client";
import React, { useEffect, useRef, useState } from "react";
import Tech, { Techs } from "../ui/tech";
import { animate, onScroll, splitText } from "animejs";
import { hide, show } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";

const front: (keyof typeof Techs)[] = [
  "react",
  "next",
  "tailwind",
  "js",
  "ts",
  "html",
];
const back: (keyof typeof Techs)[] = ["go", "api", "express", "python"];
const db: (keyof typeof Techs)[] = ["mongo", "postres", "sql", "supabase"];

const Skills = () => {
  const didMount = useRef(false);
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const dbRef = useRef(null);

  const [chars, setChars] = useState<HTMLElement[][]>([]);
  const [currentTech, setCurrentTech] = useState(0);

  const isMobile = useMediaQuery({ maxWidth: "768px" });

  useEffect(() => {
    if (didMount.current) return;
    const slidePosition = [0, 80, 160];

    const slide = (slides: [number, HTMLDivElement][]) => {
      slides.forEach(([pos, slide]) => {
        animate(slide, {
          translateY: `${pos}px`,
          duration: 800,
          ease: "inOutExpo",
        });
      });
    };
    const setUp = () => {
      const chars: HTMLElement[][] = [];
      ["front", "back", "db"].forEach((tech) => {
        const { chars: slog } = splitText(`#${tech}`, {
          words: false,
          chars: true,
          includeSpaces: true,
        });

        chars.push(slog);

        slog.forEach((element: HTMLElement) => {
          element.classList.add("opacity-0");
          element.style.transform = "rotateX(90deg)";
        });
        document.getElementById(`${tech}`)?.classList.remove("hidden");
        document.getElementById(`${tech}`)?.classList.remove("opacity-0");
        document.getElementById(`${tech}`)?.classList.add("inline");
      });
      setChars(chars);

      onScroll({
        container: ".body",
        target: "#skills",
        enter: "bottom-=150 top+=150",
        leave: "top+=150 top+=30%",
        // debug: true,
        sync: true,
        onEnter: () => setCurrentTech(0),
        onEnterBackward: () => {
          if (!frontRef.current || !backRef.current || !dbRef.current) return;
          slide([
            [slidePosition[0], frontRef.current],
            [slidePosition[0], backRef.current],
            [slidePosition[0], dbRef.current],
          ]);
        },
      });

      onScroll({
        container: ".body",
        target: "#skills",
        enter: "bottom-=150 top+=33.3%",
        leave: "top+=150 bottom-=30%",
        // debug: true,
        sync: true,
        onEnter: () => setCurrentTech(1),
        onEnterForward: () => {
          if (!frontRef.current || !backRef.current || !dbRef.current) return;
          slide([
            [-slidePosition[1], frontRef.current],
            [-slidePosition[1], backRef.current],
            [-slidePosition[1], dbRef.current],
          ]);
        },
        onEnterBackward: () => {
          if (!frontRef.current || !backRef.current || !dbRef.current) return;
          slide([
            [-slidePosition[1], frontRef.current],
            [-slidePosition[1], backRef.current],
            [-slidePosition[1], dbRef.current],
          ]);
        },
      });

      onScroll({
        container: ".body",
        target: "#skills",
        enter: "bottom-=150 bottom-=33.3%",
        leave: "top+=150 bottom",
        // debug: true,
        sync: true,
        onEnter: () => setCurrentTech(2),
        onEnterForward: () => {
          if (!frontRef.current || !backRef.current || !dbRef.current) return;
          slide([
            [-slidePosition[1], frontRef.current],
            [-slidePosition[2], backRef.current],
            [-slidePosition[2], dbRef.current],
          ]);
        },
      });
    };

    setUp();

    const { chars: heading } = splitText(`#skills-head`, {
      words: false,
      chars: true,
      includeSpaces: true,
    });

    hide(heading);

    onScroll({
      target: "#skills",
      enter: "top+=25% top-=10%",
      leave: "top+=25% bottom-=25%",
      sync: true,
      onEnter: () => {
        show(heading);
      },
      onLeave: () => {
        hide(heading);
      },
      onLeaveBackward: () => {
        const hello = document.getElementById("hello");
        animate(document.documentElement, {
          scrollTop: hello?.offsetTop,
          duration: 1000,
          ease: "inOutExpo",
        });
      },
      onLeaveForward: () => {
        const projects = document.getElementById("projects");
        animate(document.documentElement, {
          scrollTop: projects?.offsetTop,
          duration: 1000,
          ease: "inOutExpo",
        });
      },
    });

    didMount.current = true;
  }, []);

  useEffect(() => {
    switch (currentTech) {
      case 0:
        hide(chars[1]);
        hide(chars[2]);
        show(chars[0]);
        break;
      case 1:
        hide(chars[0]);
        hide(chars[2]);
        show(chars[1]);
        break;
      case 2:
        hide(chars[0]);
        hide(chars[1]);
        show(chars[2]);
        break;

      default:
        break;
    }
  }, [currentTech, chars]);

  return (
    <div
      className="flex flex-col space-y-2 mx-5 xl:mx-70 my-20 relative h-[375dvh] md:h-[300dvh]"
      id="skills"
    >
      <h2
        className="font-wide text-xl md:text-3xl sticky top-25 z-10 text-center md:text-left my-12"
        id="skills-head"
      >
        Technical <span className="text-blue-200">Expertise</span>
      </h2>
      <div className="flex flex-col space-y-20 sticky top-0 w-full h-screen items-center justify-center">
        <h3 className=" text-2xl text-center relative w-full h-8">
          <span
            className="hidden opacity-0 absolute left-0 right-0 mx-auto"
            id="front"
          >
            Frontend Development
          </span>
          <span
            className="hidden opacity-0 absolute left-0 right-0 mx-auto"
            id="back"
          >
            Backend Development
          </span>
          <span
            className="hidden opacity-0  absolute left-0 right-0 mx-auto"
            id="db"
          >
            Database & Storage
          </span>
        </h3>

        <div className="flex flex-col items-stretch w-full h-20 overflow-hidden space-y-4 px-10">
          <div className="flex-wrap flex justify-between" ref={frontRef}>
            {front.map((t) => (
              <Tech tech={t as keyof typeof Techs} key={t} big={isMobile} />
            ))}
          </div>
          <div className="flex-wrap flex justify-between" ref={backRef}>
            {back.map((t) => (
              <Tech tech={t as keyof typeof Techs} key={t} big={isMobile} />
            ))}
          </div>
          <div className="flex-wrap flex justify-between" ref={dbRef}>
            {db.map((t) => (
              <Tech tech={t as keyof typeof Techs} key={t} big={isMobile} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
