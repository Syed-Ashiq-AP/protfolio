"use client";
import Logo from "../ui/logo";
import { animate, onScroll, ScrollObserver } from "animejs";
import { TbBrandGithubFilled } from "react-icons/tb";
import Social from "../ui/social";
import { FaLinkedinIn } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const menu = ["Hello!", "Expertise", "Projects"];

const Header = () => {
  const enableUnderline = (i: number) => {
    animate(document.getElementsByClassName("underline-component")[i], {
      width: "100%",
      duration: 150,
    });
  };

  const disableUnderline = (i: number) => {
    animate(document.getElementsByClassName("underline-component")[i], {
      width: "0%",
      duration: 150,
    });
  };
  const ObserverHello = useRef<ScrollObserver>(null);
  const ObserverProjects = useRef<ScrollObserver>(null);
  const ObserverSkills = useRef<ScrollObserver>(null);

  const [helloInView, setHelloInView] = useState(false);
  const [projectsInView, setProjectsInView] = useState(false);
  const [skillsInView, setSkillsInView] = useState(false);

  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) return;
    animate("#nav", {
      top: 0,
      opacity: 1,
      duration: 1000,
    });

    ObserverHello.current = onScroll({
      target: "#hello",
      onEnter: () => setHelloInView(true),
      onLeave: () => setHelloInView(false),
    });

    ObserverProjects.current = onScroll({
      target: "#projects",
      onEnter: () => setProjectsInView(true),
      onLeave: () => setProjectsInView(false),
    });
    ObserverSkills.current = onScroll({
      target: "#skills",
      onEnter: () => setSkillsInView(true),
      onLeave: () => setSkillsInView(false),
    });

    didMount.current = true;
  }, []);

  const scrollTo = (i: number) => {
    switch (i) {
      case 0:
        const hello = document.getElementById("hello");
        console.log(hello);
        animate(document.documentElement, {
          scrollTop: hello?.offsetTop,
          duration: 1000,
          ease: "inOutExpo",
        });
        break;
      case 1:
        const projects = document.getElementById("projects");
        animate(document.documentElement, {
          scrollTop: projects?.offsetTop,
          duration: 1000,
          ease: "inOutExpo",
        });
        break;
      case 2:
        const skills = document.getElementById("skills");
        animate(document.documentElement, {
          scrollTop: skills?.offsetTop,
          duration: 1000,
          ease: "inOutExpo",
        });
        break;
      case 3:
        const services = document.getElementById("services");
        animate(document.documentElement, {
          scrollTop: services?.offsetTop,
          duration: 1000,
          ease: "inOutExpo",
        });
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (helloInView) {
      enableUnderline(0);
      disableUnderline(1);
      disableUnderline(2);
    } else if (skillsInView) {
      enableUnderline(1);
      disableUnderline(0);
      disableUnderline(2);
    } else if (projectsInView) {
      enableUnderline(2);
      disableUnderline(0);
      disableUnderline(1);
    }
  }, [helloInView, projectsInView, skillsInView]);

  return (
    <div
      className="h-22 flex justify-between p-5 fixed w-full z-10000"
      id="nav"
      style={{ top: "-85px", opacity: 0 }}
    >
      <div className="hidden md:flex md:items-center">
        <Logo />
      </div>
      <nav className="hidden md:block rounded-full border bg-white/1 backdrop-blur-lg px-12 pt-1 absolute top-0 bottom-0 w-min h-min m-auto left-0 right-0">
        <ul className=" flex space-x-12 md:space-x-22 items-center justify-center p-2 text-sm md:text-base">
          {menu.map((item, i) => (
            <li
              className=" cursor-pointer"
              key={item}
              onMouseEnter={() => {
                if (
                  (i == 0 && helloInView) ||
                  (i == 1 && skillsInView) ||
                  (i == 2 && projectsInView)
                )
                  return;
                enableUnderline(i);
              }}
              onMouseLeave={() => {
                if (
                  (i == 0 && helloInView) ||
                  (i == 1 && skillsInView) ||
                  (i == 2 && projectsInView)
                )
                  return;
                disableUnderline(i);
              }}
              onClick={() => {
                scrollTo(i);
              }}
            >
              {item}
              <div className="h-0.5 bg-blue-500 w-0 underline-component"></div>
            </li>
          ))}
        </ul>
      </nav>
      <div className=" space-x-4 hidden md:flex md:items-center">
        <Social
          icon={TbBrandGithubFilled}
          link="https://github.com/Syed-Ashiq-AP"
        />
        <Social
          icon={FaLinkedinIn}
          link="https://www.linkedin.com/in/syed-ashiq-1172b6271/"
        />
        <Link href={"/syed-ashiq-resume.pdf"} target="_blank">
          <div className="px-3 py-2 rounded-full border bg-white/1 backdrop-blur-lg transition-all hover:bg-white/5 cursor-pointer">
            Resume
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
