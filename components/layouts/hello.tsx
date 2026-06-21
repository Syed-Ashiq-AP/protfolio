"use client";
import { animate, splitText, stagger } from "animejs";
import React, { useCallback, useEffect, useRef, useState } from "react";

const Hello = () => {
  const slideContainer = useRef(null);
  const show = (chars: HTMLElement[]) => {
    animate(chars, {
      opacity: [0, 1],
      rotateX: [90, 0],
      delay: stagger(50),
      ease: "inOutCirc",
    });
  };

  const hide = (chars: HTMLElement[]) => {
    animate(chars, {
      opacity: [1, 0],
      rotateX: [0, 90],
      delay: stagger(50),
      ease: "inOutCirc",
    });
  };

  const didMount = useRef(false);

  const animateWidth = (i: number, total: number) => {
    if (!slideContainer.current) return;
    const container = slideContainer.current as HTMLDivElement;

    const firstWidth = container.children[0].getBoundingClientRect().width;
    const secondContainer = container.children[1];
    const secondCurrentWidth =
      secondContainer.children[i].getBoundingClientRect().width;
    const secondNextWidth =
      secondContainer.children[(i + 1) % total].getBoundingClientRect().width;

    const from = firstWidth + secondCurrentWidth + 10;
    const to = firstWidth + secondNextWidth + 10;

    animate(container, { width: [`${from}px`, `${to}px`], duration: 150 });
  };

  useEffect(() => {
    if (didMount.current) return;

    const animateIt = (chars: HTMLElement[][]) => {
      const total = chars.length;
      setTimeout(() => {
        show(chars[0]);
      }, 500);
      animateWidth(3, total);
      const doThis = (i: number) => {
        hide(chars[i]);

        i = (i + 1) % total;

        show(chars[i]);
        return i;
      };
      let current = 0;

      setInterval(() => {
        animateWidth(current, total);
        current = doThis(current);
      }, 3500);
    };
    const setUp = () => {
      const chars: HTMLElement[][] = [];
      Array.from({ length: 4 }).forEach((_, i) => {
        const { chars: slog } = splitText(`#slogan-${i}`, {
          words: false,
          chars: true,
          includeSpaces: true,
        });

        chars.push(slog);

        slog.forEach((element: HTMLElement) => {
          element.classList.add("opacity-0");
          element.style.transform = "rotateX(90deg)";
        });
        document.getElementById(`slogan-${i}`)?.classList.remove("hidden");
        document.getElementById(`slogan-${i}`)?.classList.remove("opacity-0");
        document.getElementById(`slogan-${i}`)?.classList.add("block");
      });

      animateIt(chars);
    };

    setUp();

    animate("#name", {
      marginTop: ["150px", 0],
      opacity: [0, 1],
      duration: 1500,
    });
    animate("#about", {
      marginTop: ["50px", 0],
      opacity: [0, 1],
      duration: 1500,
    });

    didMount.current = true;
  }, []);

  return (
    <div
      className="flex flex-col space-y-2 justify-center items-center h-screen overflow-x-hidden"
      id="hello"
    >
      <div
        className="font-wide flex space-x-2 text-xs md:text-base"
        ref={slideContainer}
      >
        <span>FULL-STACK DEVELOPER </span>
        <span className=" text-center justify-center pl-2 relative block text-blue-200">
          <span
            className=" transition-all absolute left-0 top-0 w-max opacity-0"
            id="slogan-0"
          >
            & UI/UX
          </span>
          <span
            className=" transition-all absolute left-0 top-0 w-max opacity-0"
            id="slogan-1"
          >
            & WEB APPS
          </span>
          <span
            className=" transition-all absolute left-0 top-0 w-max opacity-0"
            id="slogan-2"
          >
            & AI PRODUCTS
          </span>
          <span
            className=" transition-all absolute left-0 top-0 w-max opacity-0"
            id="slogan-3"
          >
            & MOTION DESIGN
          </span>
        </span>
      </div>

      <h1
        className="font-bold uppercase text-8xl text-center bg-linear-60 from-40% from-blue-200 to-white bg-clip-text text-transparent"
        style={{ marginTop: "150px", opacity: 0 }}
        id="name"
      >
        Syed Ashiq
      </h1>
      <p
        className="max-w-150 text-center text-gray-400 text-sm md:text-base mx-10"
        id="about"
        style={{ marginTop: "50px", opacity: 0 }}
      >
        I build modern web applications and AI-driven products, combining clean
        design, robust engineering, and user-focused experiences.
      </p>
    </div>
  );
};

export default Hello;
