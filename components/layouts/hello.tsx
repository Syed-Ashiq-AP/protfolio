"use client";
import { animate, stagger } from "animejs";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FiArrowDownRight } from "react-icons/fi";
import { IoIosReturnRight } from "react-icons/io";

const Hello = () => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) return;
    animate(".hero-reveal", {
      translateY: [28, 0],
      opacity: [0, 1],
      delay: stagger(90),
      duration: 900,
      ease: "outExpo",
    });

    didMount.current = true;
  }, []);

  return (
    <section
      className="relative isolate min-h-screen overflow-hidden px-5 pt-32 md:px-10 lg:px-16"
      id="hello"
    >
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] w-full max-w-7xl items-center gap-12 pb-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="hero-reveal mb-5 inline-flex opacity-0 font-wide text-xs  tracking-[0.18em] text-sky-200 md:text-sm mono-label">
            Full-stack developer
          </p>

          <h1 className="hero-reveal max-w-4xl opacity-0 font-bold text-6xl  leading-[0.9] text-white sm:text-7xl lg:text-8xl">
            Syed Ashiq
          </h1>

          <p className="hero-reveal mt-7 max-w-2xl opacity-0 text-base leading-7 text-white/68 md:text-lg">
            I design and build fast, reliable web products across the stack:
            polished React interfaces, pragmatic APIs, clean data models, and
            production-minded deployment.
          </p>

          <div className="hero-reveal mt-9 flex flex-col gap-3 opacity-0 sm:flex-row">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-200 px-5 py-3 text-sm font-medium text-background transition hover:bg-white"
            >
              View projects
              <FiArrowDownRight />
            </Link>
            <a
              href="/Syed-Ashiq-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/82 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
            >
              Résumé ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hello;
