"use client";
import { animate, onScroll } from "animejs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { IoIosReturnRight } from "react-icons/io";
import Tech, { Techs } from "./tech";

const Project = ({
  title,
  description,
  source,
  live,
  imageURL,
  stack,
  inDev = false,
}: {
  title: string;
  description: string;
  source?: string;
  live?: string;
  imageURL: string;
  stack: (keyof typeof Techs)[];
  inDev?: boolean;
}) => {
  const project = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project.current) return;
    animate(project.current, {
      opacity: [0, 1],
      translateY: [24, 0],
      duration: 800,
      ease: "outExpo",
    });
    animate(project.current, {
      scale: "0.9",
      filter: "blur(4px)",
      ease: "linear",
      autoplay: onScroll({
        enter: "top top",
        leave: "top-=20 top",
        sync: 0.25,
      }),
    });
  }, []);

  return (
    <article
      className="group grid overflow-hidden rounded-lg border sticky top-25 md:top-45 lg:top-[30dvh]  border-white/10 bg-background opacity-0 shadow-2xl shadow-bold/20 lg:grid-cols-[0.95fr_1.2fr]"
      ref={project}
    >
      <div className="flex min-h-full flex-col justify-between p-5 md:p-8">
        <div>
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="font-bold text-2xl  tracking-wide text-white md:text-3xl">
              {title}
            </h3>
            {inDev && (
              <span className="shrink-0 rounded-full border border-sky-200/25 bg-sky-200/10 px-3 py-1 text-xs text-sky-100">
                In dev
              </span>
            )}
          </div>

          <p className="text-sm leading-6 text-white/64 md:text-base hidden md:block">
            {description}
          </p>

          <div className="mt-7 grid grid-cols-3 gap-3 sm:grid-cols-4">
            {stack.map((tech) => (
              <Tech tech={tech} key={tech} compact />
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {source && (
            <Link
              target="_blank"
              href={source}
              className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
            >
              <IoIosReturnRight size={20} />
              Source
            </Link>
          )}
          {live && (
            <Link
              target="_blank"
              href={live}
              className="inline-flex items-center gap-2 rounded-full bg-sky-200 px-4 py-2 text-sm text-background transition hover:bg-white"
            >
              <IoIosReturnRight size={20} />
              Live
            </Link>
          )}
        </div>
      </div>

      <div className="relative min-h-72 overflow-hidden border-t border-white/10 bg-background lg:min-h-120 lg:border-l lg:border-t-0">
        <Image
          src={imageURL}
          fill
          sizes="(min-width: 1846px) 54vw, 92vw"
          className="object-cover object-center transition duration-700 group-hover:scale-[1.03] "
          alt={title}
        />
      </div>
    </article>
  );
};

export default Project;
