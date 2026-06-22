"use client";
import Logo from "../ui/logo";
import { animate, onScroll, ScrollObserver } from "animejs";
import { TbBrandGithubFilled } from "react-icons/tb";
import Social from "../ui/social";
import { FaLinkedinIn } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

const menu = ["Hello!", "Projects", "Expertise", "Services"];

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
  const ObserverServices = useRef<ScrollObserver>(null);

  const [helloInView, setHelloInView] = useState(false);
  const [projectsInView, setProjectsInView] = useState(false);
  const [skillsInView, setSkillsInView] = useState(false);
  const [servicessInView, setServicesInView] = useState(false);

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
    ObserverServices.current = onScroll({
      target: "#services",
      onEnter: () => setServicesInView(true),
      onLeave: () => setServicesInView(false),
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
    if (projectsInView) {
      enableUnderline(1);
      disableUnderline(0);
      disableUnderline(2);
      disableUnderline(3);
    } else if (helloInView) {
      enableUnderline(0);
      disableUnderline(1);
      disableUnderline(2);
      disableUnderline(3);
    } else if (skillsInView) {
      enableUnderline(2);
      disableUnderline(1);
      disableUnderline(0);
      disableUnderline(3);
    } else if (servicessInView) {
      enableUnderline(3);
      disableUnderline(1);
      disableUnderline(2);
      disableUnderline(0);
    }
  }, [helloInView, projectsInView, skillsInView, servicessInView]);

  return (
    <div
      className="h-22 flex justify-between p-5 fixed w-full z-1000"
      id="nav"
      style={{ top: "-85px", opacity: 0 }}
    >
      <div className="hidden md:block">
        <Logo />
      </div>
      <nav className="hidden md:block rounded-full border bg-white/1 backdrop-blur-lg px-12 pt-1 absolute top-4 w-min mx-auto left-0 right-0">
        <ul className=" flex space-x-12 md:space-x-22 items-center justify-center p-2 text-sm md:text-base">
          {menu.map((item, i) => (
            <li
              className=" cursor-pointer"
              key={item}
              onMouseEnter={() => {
                if (
                  (i == 0 && helloInView) ||
                  (i == 1 && projectsInView) ||
                  (i == 2 && skillsInView) ||
                  (i == 3 && servicessInView)
                )
                  return;
                enableUnderline(i);
              }}
              onMouseLeave={() => {
                if (
                  (i == 0 && helloInView) ||
                  (i == 1 && projectsInView) ||
                  (i == 2 && skillsInView) ||
                  (i == 3 && servicessInView)
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
      <div className=" space-x-4 hidden md:flex">
        <Social
          icon={TbBrandGithubFilled}
          link="https://github.com/Syed-Ashiq-AP"
        />
        <Social
          icon={FaLinkedinIn}
          link="https://www.linkedin.com/in/syed-ashiq-1172b6271/"
        />
      </div>
    </div>
  );
};

export default Header;
