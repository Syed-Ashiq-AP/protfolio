"use client";
import { cn } from "@/lib/utils";
import { animate } from "animejs";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Cursor = () => {
  const cursor = useRef<HTMLDivElement>(null);

  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) return;
    const moveCursor = (e: MouseEvent) => {
      if (!cursor.current) return;
      animate(cursor.current, {
        translateX: e.clientX,
        translateY: e.clientY,
        duration: 100,
        easing: "easeOutQuad",
      });
    };

    document.addEventListener("mousemove", moveCursor);

    didMount.current = true;
    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const isMobile = useMediaQuery({ maxWidth: "768px" });
  if (isMobile) return;
  return (
    <div
      ref={cursor}
      className={cn("pointer-events-none z-50000 size-8 fixed")}
      dangerouslySetInnerHTML={{
        __html: `<svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg" style="overflow:visible;">
  <g filter="url(#neonGlow)">
    <path
      d="M11.8924 23.7113L7.33378 7.71981C7.0984 6.89408 7.95602 6.18105 8.73584 6.55412L23.8385 13.7792C24.6416 14.1633 24.5812 15.3159 23.7425 15.6131L17.5312 17.8139C17.3056 17.8938 17.1164 18.0511 16.9978 18.2573L13.7318 23.9361C13.2908 24.7029 12.1347 24.5616 11.8924 23.7113Z"
      fill="#7CD4FD"
    />
    <path
      d="M6.85075 7.85439C6.49768 6.61582 7.78362 5.54673 8.95335 6.10627L24.0564 13.3314C25.2607 13.9078 25.1699 15.6359 23.9119 16.0816L17.7012 18.2825C17.5885 18.3224 17.4939 18.4011 17.4346 18.5041L14.1679 24.1828C13.5065 25.3329 11.7731 25.1214 11.4093 23.8463L6.85075 7.85439Z"
      stroke="rgba(255,255,255,0.8)"
      stroke-width="0.5"
    />
  </g>

  <defs>
    <filter
      id="neonGlow"
      x="-150%"
      y="-150%"
      width="400%"
      height="400%"
      color-interpolation-filters="sRGB"
    >
      <feDropShadow
        dx="0"
        dy="0"
        stdDeviation="12"
        flood-color="#7CD4FD"
        flood-opacity="0.6"
      />
    </filter>
  </defs>
</svg>
`,
      }}
    ></div>
  );
};

export default Cursor;
