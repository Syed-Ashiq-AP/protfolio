"use client";
import { animate, onScroll } from "animejs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaReact } from "react-icons/fa6";
import { IoIosReturnRight } from "react-icons/io";
import Tech, { Techs } from "./tech";

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
  const image = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!image.current) return;
    if (!project.current) return;

    animate(project.current, {
      scale: "0.99",
      filter: "blur(4px)",
      ease: "linear",
      autoplay: onScroll({
        enter: "top top",
        leave: "top-=20 top",
        sync: 0.25,
      }),
    });
    animate(image.current, {
      translateX: [image.current.getBoundingClientRect().width / 4, 0],
      ease: "linear",
      autoplay: onScroll({
        enter: "bottom top",
        leave: "top-=20 top",
        sync: 0.25,
      }),
    });
  }, []);

  return (
    <div className="flex items-center justify-center sticky top-20 md:top-50 mb-40">
      <div
        className="border border-border/1 bg-card  rounded-xl shadow-md flex flex-col-reverse md:grid md:grid-cols-[1fr_60%] overflow-hidden h-[min(80vh,780px)] w-[min(92vw,1360px)]"
        ref={project}
      >
        <div className="flex flex-col p-4 md:p-12 justify-between space-y-8 flex-1">
          <div className=" flex flex-col space-y-4 h-full">
            <h3 className="font-bold text-xl md:text-2xl tracking-wider">
              {title}
            </h3>
            <span className="text-gray-400 whitespace-pre-wrap leading-5.5 md:leading-7 text-sm md:text-base hidden md:inline">
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
                  className="flex items-end gap-2 text-gray-500 hover:text-white transition-all"
                >
                  <IoIosReturnRight size={28} />
                  Source Code
                </Link>
              )}
              {live && (
                <Link
                  target="_blank"
                  href={live}
                  className="flex items-end gap-2 text-gray-500 hover:text-white transition-all"
                >
                  <IoIosReturnRight size={28} />
                  Live Preview
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="bg-background flex items-center justify-center overflow-hidden rounded-md  m-4 relative">
          <div className="h-[70vh] md:h-[90vh] aspect-video" ref={image}>
            <Image
              src={imageURL}
              width={2800}
              loading="eager"
              height={1575}
              className="aspect-video h-full"
              alt={title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
