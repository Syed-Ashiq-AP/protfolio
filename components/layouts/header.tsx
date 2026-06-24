"use client";
import Link from "next/link";
import Logo from "../ui/logo";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import {
  animate,
  onScroll,
  scrambleText,
  ScrollObserver,
  splitText,
  stagger,
} from "animejs";
import { cn, hide, show } from "@/lib/utils";

const menu = [
  ["Home", "hello"],
  ["Expertise", "skills"],
  ["Projects", "projects"],
  ["Contact Me", "contact"],
];

const Header = () => {
  const [activeSection, setActiveSection] = useState(0);

  const ObserverHello = useRef<ScrollObserver>(null);
  const ObserverSkills = useRef<ScrollObserver>(null);
  const ObserverProjects = useRef<ScrollObserver>(null);
  const ObserverContact = useRef<ScrollObserver>(null);

  const mobileHead = useRef<HTMLDivElement>(null);

  const didMount = useRef(false);
  useEffect(() => {
    if (!mobileHead.current) return;
    if (didMount.current) return;
    animate("#nav", {
      top: 0,
      opacity: 1,
      duration: 1000,
    });

    const chars: HTMLElement[][] = Array.from(mobileHead.current.children).map(
      (sp) => {
        return splitText(sp, { chars: true, words: false, includeSpaces: true })
          .chars;
      },
    );
    ObserverHello.current = onScroll({
      target: "#hello",
      enter: "top+=25% top",
      leave: "bottom-=25% bottom",
      onEnter: () => {
        chars.forEach((c) => hide(c));
        setActiveSection(0);
        show(chars[0]);
      },
      onLeaveForward: () => {
        setActiveSection(1);
      },
    });

    ObserverSkills.current = onScroll({
      target: "#skills",
      enter: "top+=25% top",
      leave: "bottom-=25% bottom",
      onEnter: () => {
        chars.forEach((c) => hide(c));
        setActiveSection(1);
        show(chars[1]);
      },
    });
    ObserverProjects.current = onScroll({
      target: "#projects",
      enter: "top+=25% top",
      leave: "bottom-=25% bottom",
      onEnter: () => {
        chars.forEach((c) => hide(c));
        setActiveSection(2);
        show(chars[2]);
      },
    });

    ObserverContact.current = onScroll({
      target: "#contact",
      enter: "bottom top",
      leave: "top bottom",
      onEnter: () => {
        chars.forEach((c) => hide(c));
        setActiveSection(3);
        show(chars[3]);
      },
      onLeaveBackward: () => {
        chars.forEach((c) => hide(c));
        setActiveSection(2);
        show(chars[2]);
      },
    });

    didMount.current = true;
  }, []);

  const scrollTo = (i: number) => {
    const element = document.getElementById(menu[i][1]);
    animate(document.documentElement, {
      scrollTop: element?.offsetTop,
      duration: 1000,
      ease: "inOutExpo",
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-lg border border-white/10 bg-background/70 px-3 py-2 shadow-lg shadow-black/20 backdrop-blur-xl">
        <Link href="#hello" className="flex items-center gap-3">
          <Logo />
          <span className="hidden font-wide text-xs  tracking-[0.18em] text-white/72 sm:inline">
            Syed Ashiq
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" id="nav">
          {menu.map(([item], i) => (
            <span
              className={cn(
                "rounded-full px-4 py-2 text-sm text-white/62 transition hover:bg-white/8 hover:text-white cursor-pointer",
                activeSection === i && "bg-white/7 text-white",
              )}
              onClick={() => {
                scrollTo(i);
              }}
              key={item}
            >
              {item}
            </span>
          ))}
        </nav>
        <div
          ref={mobileHead}
          className="font-mono text-center text-gray-400 md:hidden"
        >
          <span className="absolute left-0 right-0 top-0 bottom-0 m-auto h-min">
            Home
          </span>
          <span className="absolute left-0 right-0 top-0 bottom-0 m-auto h-min">
            Expertise
          </span>
          <span className="absolute left-0 right-0 top-0 bottom-0 m-auto h-min">
            Featured Projects
          </span>
          <span className="absolute left-0 right-0 top-0 bottom-0 m-auto h-min">
            Contact Me
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/Syed-Ashiq-AP"
            target="_blank"
            aria-label="GitHub"
            className="rounded-full border border-white/10 p-2 text-white/72 transition hover:border-white/25 hover:bg-white/8 hover:text-white"
          >
            <TbBrandGithubFilled />
          </Link>
          <Link
            href="https://www.linkedin.com/in/syed-ashiq-ap/"
            target="_blank"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 p-2 text-white/72 transition hover:border-white/25 hover:bg-white/8 hover:text-white"
          >
            <FaLinkedinIn />
          </Link>
          <a
            href="/Syed-Ashiq-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-white px-4 py-2 text-sm text-background transition hover:bg-sky-200 sm:inline-flex"
          >
            Résumé ↓
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
