import { animate, stagger } from "animejs";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const show = (chars: HTMLElement[]) => {
  animate(chars, {
    opacity: 1,
    rotateX: 0,
    delay: stagger(50),
    ease: "inOutCirc",
  });
};

export const hide = (chars: HTMLElement[]) => {
  animate(chars, {
    opacity: 0,
    rotateX: 90,
    delay: stagger(50),
    ease: "inOutCirc",
  });
};
