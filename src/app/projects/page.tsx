import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <h1 className="h1" style={{ fontSize: 34 }}>Projects</h1>
      <p className="sub">
        A few of my completed and ongoing projects!
      </p>

      <div style={{ display: "grid", gap: 14, marginTop: 14 }}>
        {projects.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
    </>
  );
}