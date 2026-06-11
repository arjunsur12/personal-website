import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  const featured = [projects[0],projects[1]];

  return (
    <>
      <section className="heroRow">
        <div>
          <h1 className="h1">Hi, I'm Arjun Suryawanshi!</h1>
          <p className="sub">
            I study CIS for my Bachelors and Accelerated Master's at the University of Pennsylvania and am interested
            in Software Engineering and Quantitative roles, particularly involving Machine Learning. I enjoy solving
            hard problems and innovating new solutions, be it a custom computer vision model for classifying horse behavior
            or improved vehicle simulation tools, and strive to find such challenges to tackle.
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

      <section style={{ marginTop: 0 }}>
        <h2 style={{ textAlign: "center" }}>Featured Projects!</h2>
        <div className="projGrid">
          {featured.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>

        <div className="btnRow" style={{ marginTop: 14 }}>
          <Link className="button" href="/projects">See all projects →</Link>
        </div>
      </section>
    </>
  );
}