"use client";
import Link from "next/link";
import Logo from "../ui/logo";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";

const menu = [
  ["Home", "#hello"],
  ["Expertise", "#skills"],
  ["Projects", "#projects"],
];

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-lg border border-white/10 bg-background/70 px-3 py-2 shadow-lg shadow-black/20 backdrop-blur-xl">
        <Link href="#hello" className="flex items-center gap-3">
          <Logo />
          <span className="hidden font-wide text-xs  tracking-[0.18em] text-white/72 sm:inline">
            Syed Ashiq
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {menu.map(([item, href]) => (
            <Link
              className="rounded-full px-4 py-2 text-sm text-white/62 transition hover:bg-white/8 hover:text-white"
              href={href}
              key={item}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/Syed-Ashiq-AP"
            target="_blank"
            aria-label="GitHub"
            className="rounded-full border border-white/10 p-2 text-white/72 transition hover:border-white/25 hover:bg-white/8 hover:text-white"
          >
            <TbBrandGithubFilled />
          </Link>
          <Link
            href="https://www.linkedin.com/in/syed-ashiq-ap/"
            target="_blank"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 p-2 text-white/72 transition hover:border-white/25 hover:bg-white/8 hover:text-white"
          >
            <FaLinkedinIn />
          </Link>
          <a
            href="/syed-ashiq-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-white px-4 py-2 text-sm text-background transition hover:bg-sky-200 sm:inline-flex"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
