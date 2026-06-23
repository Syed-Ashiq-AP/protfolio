import Hello from "@/components/layouts/hello";
import Projects from "@/components/layouts/projects";
import Skills from "@/components/layouts/skills";

export default function Home() {
  return (
    <main className="flex-1">
      <Hello />
      <Skills />
      <Projects />
    </main>
  );
}
