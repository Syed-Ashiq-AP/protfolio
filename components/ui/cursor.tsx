"use client";
import { cn } from "@/lib/utils";
import { animate } from "animejs";
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

    const textSelector = "h1,h2,h3,h4,h5,h6,p,span";
    const handleOver = (e: MouseEvent) => {
      if (!cursor.current) return;
      const target = e.target as HTMLElement;

      if (target.closest(textSelector)) {
        animate(cursor.current, {
          width: "3px",
          borderRadius: "5px",
          duration: 100,
          easing: "easeOutQuad",
        });
      }
    };

    const handleOut = (e: MouseEvent) => {
      if (!cursor.current) return;
      const target = e.target as HTMLElement;
      const related = e.relatedTarget as HTMLElement | null;

      const leavingText = target.closest(textSelector);
      const enteringText = related?.closest(textSelector);

      if (leavingText && !enteringText) {
        animate(cursor.current, {
          width: "20px",
          borderRadius: "calc(infinity * 1px)",
          duration: 100,
          easing: "easeOutQuad",
        });
      }
    };

    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    didMount.current = true;
    return () => {
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const isMobile = useMediaQuery({ maxWidth: "768px" });
  if (isMobile) return;
  return (
    <div
      ref={cursor}
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "calc(infinity * 1px)",
      }}
      className={cn(
        "bg-blue-400/90 shadow-[0_0_25px_rgba(0,0,0,0.25)] shadow-blue-500 fixed h-5 pointer-events-none z-50000",
      )}
    ></div>
  );
};

export default Cursor;
