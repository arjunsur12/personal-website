import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <h1 className="h1" style={{ fontSize: 34 }}>Projects</h1>
      <p className="sub">
        A few things I’ve built + some works in progress!
      </p>

      <div className="grid">
        {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
      </div>
    </>
  );
}