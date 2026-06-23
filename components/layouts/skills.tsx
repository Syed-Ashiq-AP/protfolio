"use client";
import React, { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import Tech, { Techs } from "../ui/tech";

const capabilities = [
  {
    title: "Frontend",
    summary:
      "Responsive interfaces with clear hierarchy, reusable components, and motion that supports the workflow.",
    stack: ["react", "next", "ts", "tailwind", "js", "html"],
  },
  {
    title: "Backend",
    summary:
      "API design, authentication-aware flows, integrations, and services that stay maintainable as the app grows.",
    stack: ["go", "node", "express", "python", "api"],
  },
  {
    title: "Data & Cloud",
    summary:
      "Practical schema design, persistence, dashboards, and deployment-ready full-stack application structure.",
    stack: ["mongo", "postres", "sql", "supabase", "prisma"],
  },
] satisfies {
  title: string;
  summary: string;
  stack: (keyof typeof Techs)[];
}[];

const Skills = () => {
  const section = useRef<HTMLElement>(null);
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current || !section.current) return;

    animate(".skill-card", {
      opacity: [0, 1],
      translateY: [22, 0],
      delay: stagger(120),
      duration: 800,
      ease: "outExpo",
      autoplay: false,
    }).play();

    didMount.current = true;
  }, []);

  return (
    <section className="px-5 py-24 md:px-10 lg:px-16" id="skills" ref={section}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-wide text-xs  tracking-[0.18em] text-sky-200">
              Technical expertise
            </p>
            <h2 className="mt-3 font-bold text-4xl  leading-none text-white md:text-6xl">
              Built across the stack
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-white/60 md:text-base">
            I like product work where design, API boundaries, data shape, and
            deployment all need to line up cleanly.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {capabilities.map((item) => (
            <article
              className="skill-card rounded-lg border border-white/10 bg-white/[0.04] p-5 opacity-0 backdrop-blur"
              key={item.title}
            >
              <h3 className="font-bold text-2xl text-white">{item.title}</h3>
              <p className="mt-3 min-h-24 text-sm leading-6 text-white/62">
                {item.summary}
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {item.stack.map((tech) => (
                  <Tech tech={tech} key={tech} compact />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
