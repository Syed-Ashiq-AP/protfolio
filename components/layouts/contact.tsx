import { profile } from "@/data/profile";
import React from "react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-5xl px-6 pt-24 sm:pt-32 scroll-mt-20"
    >
      <div className="rounded-3xl border border-line bg-bg-elev p-8 sm:p-14 text-center">
        <p className="mono-label mb-5">Get in touch</p>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
          Let&apos;s build something.
        </h2>
        <p className="mt-4 mx-auto max-w-md text-fg-muted">
          Open to full-time developer roles. The fastest way to reach me is
          email.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg bg-fg px-5 py-3 text-sm font-medium text-bg hover:bg-accent-bright transition-colors"
          >
            {profile.email}
          </a>
          <a
            href={profile.links.resume}
            className="rounded-lg border border-line-bright px-5 py-3 text-sm text-fg-muted hover:text-fg hover:border-accent transition-colors"
          >
            Résumé ↓
          </a>
        </div>
        <div className="mt-8 flex items-center justify-center gap-6 font-mono text-sm">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-fg-muted hover:text-accent transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-fg-muted hover:text-accent transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
};
