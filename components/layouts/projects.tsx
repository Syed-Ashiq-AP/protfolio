"use client";
import React from "react";
import Project from "../ui/project";

const Projects = () => {
  return (
    <div
      className="flex flex-col space-y-2 mx-5 sm:mx-auto my-20"
      id="projects"
    >
      <h2 className="font-wide text-xl md:text-3xl sticky top-5 md:top-25 z-10 text-center md:text-left w-[min(92vw,1360px)] mx-auto">
        Featured <span className="text-blue-200">Projects</span>
      </h2>
      <div className="h-auto mt-10 md:mt-90 space-y-90">
        <Project
          title="Web Engine"
          description="A no-code website builder that enables users to create responsive websites through a visual drag-and-drop interface without writing code. Users can design, customize, preview, and export production-ready HTML, CSS, and JavaScript projects."
          live="https://web-engine-wheat.vercel.app/"
          source="https://github.com/Syed-Ashiq-AP/web-engine-main"
          imageURL="/thumbnail/we.webp"
          stack={["react", "tailwind", "ts", "mongo", "api"]}
        />
        <Project
          title="CAREER CONSULTANT AI"
          description="An AI-powered career guidance platform that provides personalized recommendations for courses, colleges, skills, and career paths based on student profiles, interests, and market trends."
          live="https://career-consultant.vercel.app/"
          source="https://github.com/Syed-Ashiq-AP/career"
          imageURL="/thumbnail/cc.webp"
          stack={["next", "tailwind", "ts", "mongo", "api"]}
        />
        <Project
          title="HOSTEL MANAGEMENT SYSTEM"
          description="A comprehensive hostel administration platform that streamlines room allocation, student management, maintenance requests, fee tracking, and daily hostel operations through a centralized dashboard."
          imageURL="/thumbnail/hm.webp"
          stack={["go", "java", "postres", "flutter", "react", "tailwind"]}
          inDev
        />
      </div>
    </div>
  );
};

export default Projects;
