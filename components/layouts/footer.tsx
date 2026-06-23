import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-end p-8 h-screen">
      <h2 className="bg-clip-text text-transparent [-webkit-text-stroke:0.2px_rgba(255,255,255,0.1)]  bg-radial-[at_50%_0%] from-white/8 to-90% to-transparent text-7xl lg:text-[200px] font-bold uppercase text-center w-full">
        SYED ASHIQ
      </h2>
      <div className="flex  md:justify-center gap-12 justify-between p-2">
        <Link
          href={"https://www.linkedin.com/in/syed-ashiq-1172b6271/"}
          target="_blank"
        >
          LinkedIn
        </Link>
        <Link href={"https://github.com/Syed-Ashiq-AP"} target="_blank">
          Github
        </Link>
        <a
          href="/syed-ashiq-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Footer;
