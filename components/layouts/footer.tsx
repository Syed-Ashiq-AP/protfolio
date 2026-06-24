import { profile } from "console";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 mb-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-line pt-8 font-mono text-xs text-fg-faint mx-auto max-w-5xl w-full">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span>Built with Next.js · syedashiq.dev</span>
    </footer>
  );
};

export default Footer;
