import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col p-8 border-t bg-neutral-900 border-neutral-800 mt-[50vh]">
      <h2 className="flex bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-white text-4xl lg:text-9xl font-bold uppercase">
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
