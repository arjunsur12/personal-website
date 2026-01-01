import Link from "next/link";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="navInner">
        <Link className="brand" href="/">Arjun Suryawanshi</Link>

        <nav className="navLinks">
          <Link className="pill" href="/projects">Projects</Link>
          <Link className="pill" href="/resume">Resume</Link>
          <a className="pill" href="https://github.com/arjunsur12" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="pill" href="https://www.linkedin.com/in/arjunsur" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}