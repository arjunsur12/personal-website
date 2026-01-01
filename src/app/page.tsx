import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  const featured = projects.slice(0, 2);

  return (
    <>
      <section className="heroRow">
        <div>
          <h1 className="h1">Hi, I'm Arjun Suryawanshi!</h1>
          <p className="sub">
            I study Computer Science and Biomedical Engineering at the University of Pennsylvania and am interested
            in Software Engineering and Quantitative roles, particularly involving Machine Learning. I enjoy solving
            hard problems and innovating new solutions, be it a custom computer vision model for classifying horse behavior
            or improved vehicle simulation tools, and strive to find new challenges to tackle.
          </p>
        </div>
        
        <div className="avatarWrap">
          <div className="avatar">
            <Image
              src="/me.jpg"
              alt="Portrait of Your Name"
              width={180}
              height={180}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              priority
            />
          </div>
        </div>
        
      </section>

      <section style={{ marginTop: 18 }}>
        <h2>Featured</h2>
        <div className="grid">
          {featured.map((p) => <ProjectCard key={p.title} p={p} />)}
        </div>

        <div className="btnRow" style={{ marginTop: 14 }}>
          <Link className="button" href="/projects">See all projects →</Link>
        </div>
      </section>
    </>
  );
}