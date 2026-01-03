import type { Project } from "@/content/projects";
import ProjectImages from "@/components/ProjectImages";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="projCard">
      {/* Left */}
      <div className="projLeft">
        <h3 className="cardTitle">{p.title}</h3>
        <p className="muted">{p.description}</p>

        <ul className="projList">
          {p.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>

        <div className="tags">
          {p.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        <div className="btnRow">
          {p.links.repo && (
            <a className="button" href={p.links.repo} target="_blank" rel="noreferrer">
              Repo →
            </a>
          )}
          {p.links.demo && (
            <a className="button" href={p.links.demo} target="_blank" rel="noreferrer">
              Demo →
            </a>
          )}
          {p.links.writeup && (
            <a className="button" href={p.links.writeup}>
              Write-up →
            </a>
          )}
        </div>
      </div>

      {/* Right */}
      <div className="projRight">
        <ProjectImages images={p.images} />
      </div>
    </div>
  );
}