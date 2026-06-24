"use client";
import { useEffect, useRef } from "react";
import Project from "../ui/project";
import { animate, onScroll } from "animejs";

const Projects = () => {
  const didMount = useRef(false);
  const headerContainer = useRef<HTMLDivElement>(null);
  const projectsContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      didMount.current ||
      !headerContainer.current ||
      !projectsContainer.current
    )
      return;

    const lastProject = Array.from(projectsContainer.current.children).at(-1);

    const { value, unit } = headerContainer.current
      .computedStyleMap()
      .get("top") as CSSUnitValue;

    animate(headerContainer.current, {
      opacity: [1, 0],
      top: [value + unit, "-100px"],
      autoplay: onScroll({
        target: lastProject,
        sync: true,
        enter: "top+=250 top",
        leave: "top+=250 top+=50%",
      }),
    });

    didMount.current = true;
  }, []);

  return (
    <section className="px-5 py-24 md:px-10 lg:px-16" id="projects">
      <div className="mx-auto max-w-7xl">
        <div
          className="mb-10 flex flex-col md:sticky md:top-25 gap-4"
          ref={headerContainer}
        >
          <p className="font-wide text-xs  tracking-[0.18em] text-sky-200">
            Featured projects
          </p>
          <h2 className="mt-3 font-bold text-4xl  leading-none text-white md:text-6xl">
            Recent builds
          </h2>
        </div>

        <div
          className="min-h-[200vh] flex flex-col justify-between"
          ref={projectsContainer}
        >
          <Project
            title="Web Engine"
            description="A no-code website builder for designing, previewing, and exporting responsive HTML, CSS, and JavaScript projects through a visual drag-and-drop workflow."
            live="https://web-engine-wheat.vercel.app/"
            source="https://github.com/Syed-Ashiq-AP/web-engine-main"
            imageURL="/thumbnail/we.webp"
            stack={["react", "tailwind", "ts", "mongo", "api"]}
          />
          <Project
            title="Career Consultant AI"
            description="An AI-powered career guidance platform that recommends courses, colleges, skills, and career paths from student profiles, interests, and market context."
            live="https://career-consultant.vercel.app/"
            source="https://github.com/Syed-Ashiq-AP/career"
            imageURL="/thumbnail/cc.webp"
            stack={["next", "tailwind", "ts", "mongo", "api"]}
          />
          <Project
            title="Hostel Management"
            description="A hostel administration platform for room allocation, student management, maintenance requests, fee tracking, and daily operational workflows."
            imageURL="/thumbnail/hm.webp"
            stack={["go", "java", "postres", "flutter", "react", "tailwind"]}
            inDev
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
