import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col p-8 ">
      <h2 className="bg-clip-text text-transparent bg-radial-[at_50%_0%] from-white/8 to-90% to-transparent text-7xl lg:text-[200px] font-bold uppercase text-center w-full">
        SYED ASHIQ
      </h2>
      <div className="flex justify-between p-2">
        <span className="font-wide">Get in touch</span>
        <div className="flex gap-4">
          <Link
            href={"https://www.linkedin.com/in/syed-ashiq-1172b6271/"}
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link href={"https://github.com/Syed-Ashiq-AP"} target="_blank">
            Github
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
