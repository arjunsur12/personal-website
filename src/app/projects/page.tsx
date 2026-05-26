import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <h1 className="h1" style={{ fontSize: 34, textAlign: "center" }}>Projects</h1>
      <p className="sub" style={{ textAlign: "center", maxWidth: "none" }}>
        A few of my completed and ongoing projects!
      </p>

      <div className="projGrid">
        {projects.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
    </>
  );
}