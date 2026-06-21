"use client";
import Logo from "../ui/logo";
import { animate, onScroll, ScrollObserver } from "animejs";
import { TbBrandGithubFilled } from "react-icons/tb";
import Social from "../ui/social";
import { FaLinkedinIn } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

const menu = ["Hello!", "Projects"];

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
  const [helloInView, setHelloInView] = useState(false);
  const [projectsInView, setProjectsInView] = useState(false);

  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) return;
    animate("#nav", {
      top: 0,
      opacity: 1,
      duration: 1000,
    });

    ObserverHello.current = onScroll({ container: "#hello" });
    ObserverProjects.current = onScroll({ container: "#projects" });
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

    didMount.current = true;
  }, []);

  useEffect(() => {
    if (projectsInView) {
      enableUnderline(1);
      disableUnderline(0);
    } else if (helloInView) {
      enableUnderline(0);
      disableUnderline(1);
    }
  }, [helloInView, projectsInView]);

  return (
    <div
      className="h-22 flex justify-between p-5 fixed w-full z-1000"
      id="nav"
      style={{ top: "-85px", opacity: 0 }}
    >
      <div>
        <Logo />
      </div>
      <nav className="rounded-full border bg-white/1 backdrop-blur-lg px-12 pt-1 absolute top-4 w-min mx-auto left-0 right-0">
        <ul className=" flex space-x-22 items-center justify-center p-2">
          {menu.map((item, i) => (
            <li
              className=" cursor-pointer"
              key={item}
              onMouseEnter={() => {
                enableUnderline(i);
              }}
              onMouseLeave={() => {
                disableUnderline(i);
              }}
            >
              {item}
              <div className="h-0.5 bg-blue-500 w-0 underline-component"></div>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex space-x-4">
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
