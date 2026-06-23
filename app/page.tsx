import Hello from "@/components/layouts/hello";
import Projects from "@/components/layouts/projects";
import Skills from "@/components/layouts/skills";

export default function Home() {
  return (
    <main className="flex-1">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-grid opacity-[0.5]"
      />

      <Hello />
      <Skills />
      <Projects />
    </main>
  );
}
