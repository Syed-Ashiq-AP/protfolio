import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-5 py-16 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-wide text-xs  tracking-[0.18em] text-sky-200">
            Available for full-stack work
          </p>
          <h2 className="mt-3 max-w-3xl font-bold text-4xl  leading-none text-white md:text-6xl">
            Let&apos;s build something clean.
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-white/64">
          <Link
            href="https://www.linkedin.com/in/syed-ashiq-ap/"
            target="_blank"
            className="transition hover:text-white"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/Syed-Ashiq-AP"
            target="_blank"
            className="transition hover:text-white"
          >
            GitHub
          </Link>
          <a
            href="/syed-ashiq-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
