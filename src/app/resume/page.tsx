import Link from "next/link";

export const metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <>
      <h1 className="h1" style={{ fontSize: 34 }}>Resume</h1>

      <div className="btnRow">
        <a className="button" href="/Arjun_Suryawanshi_Resume.pdf" target="_blank" rel="noreferrer">
          Open PDF →
        </a>
        <a className="button" href="/Arjun_Suryawanshi_Resume.pdf" download>
          Download →
        </a>
        <Link className="button" href="/projects">Projects →</Link>
      </div>

      <div className="card" style={{ marginTop: 14 }}>
        <iframe
          src="/Arjun_Suryawanshi_Resume.pdf"
          style={{ width: "100%", height: "120vh", border: "0", borderRadius: "14px" }}
          title="Resume PDF"
        />
        <p className="muted" style={{ marginTop: 10 }}>
          If the embed doesn't render, try "Open PDF".
        </p>
      </div>
    </>
  );
}