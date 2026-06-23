import React from "react";
import Project from "../ui/project";

const Projects = () => {
  return (
    <section className="px-5 py-24 md:px-10 lg:px-16" id="projects">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col md:sticky md:top-25 gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-wide text-xs  tracking-[0.18em] text-sky-200">
              Featured projects
            </p>
            <h2 className="mt-3 font-bold text-4xl  leading-none text-white md:text-6xl">
              Recent builds
            </h2>
          </div>
        </div>

        <div className="h-[250vh] flex flex-col justify-between">
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
