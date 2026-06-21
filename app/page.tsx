import Hello from "@/components/layouts/hello";
import Projects from "@/components/layouts/projects";

export default function Home() {
  return (
    <main className="flex-1">
      <Hello />
      <Projects />
    </main>
  );
}
