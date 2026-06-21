"use client";
import { animate, onScroll } from "animejs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaReact } from "react-icons/fa6";
import { IoIosReturnRight } from "react-icons/io";
import Tech, { Techs } from "../tech";

const Project = ({
  title,
  description,
  source,
  live,
  imageURL,
  stack,
}: {
  title: string;
  description: string;
  source?: string;
  live?: string;
  imageURL: string;
  stack: (keyof typeof Techs)[];
}) => {
  const project = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!title) return;
    if (!project.current) return;

    animate(project.current, {
      scale: "0.99",
      filter: "blur(4px)",
      ease: "linear",
      autoplay: onScroll({
        enter: "top top",
        leave: "top-=20 top",
        sync: 0.25,
        // debug: true,
      }),
    });
  }, [title]);

  return (
    <div className="flex items-center justify-center sticky top-40 md:top-50 mb-40">
      <div
        className="border border-border/1 bg-card  rounded-xl shadow-md flex flex-col-reverse md:grid md:grid-cols-[1fr_60%] w-full overflow-hidden "
        ref={project}
      >
        <div className="flex flex-col p-4 md:p-12 justify-between space-y-8 ">
          <div className=" flex flex-col space-y-4 h-full">
            <h3 className="font-bold text-xl md:text-2xl tracking-wider">
              {title}
            </h3>
            <span className="text-gray-400 whitespace-pre-wrap leading-5.5 md:leading-7 text-sm md:text-base">
              {description}
            </span>
          </div>
          <div className="flex flex-col space-y-4 md:space-y-12">
            <div>
              <span className=" text-gray-500 text-sm md:text-base ">
                Tech Stack
              </span>
              <div className="grid grid-cols-3 p-4 gap-2">
                {stack.map((tech, i) => (
                  <Tech tech={tech} key={i} />
                ))}
              </div>
            </div>
            <div className="flex justify-between">
              {source && (
                <Link
                  target="_blank"
                  href={source}
                  className="flex items-end space-x-2 text-gray-500 hover:text-white transition-all"
                >
                  <IoIosReturnRight size={28} />
                  <span>Source Code</span>
                </Link>
              )}
              {live && (
                <Link
                  target="_blank"
                  href={live}
                  className="flex items-end space-x-2 text-gray-500 hover:text-white transition-all"
                >
                  <IoIosReturnRight size={28} />
                  <span>Live Preview</span>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="bg-background flex items-center justify-center p-2 overflow-hidden flex-1">
          <Image
            src={imageURL}
            width={1000}
            height={1000}
            className="w-full aspect-3/2 md:aspect-auto md:h-full rounded-md"
            alt={title}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
