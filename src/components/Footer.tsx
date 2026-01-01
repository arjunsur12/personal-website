export default function Footer() {
  return (
    <footer className="footer">
      <div>
        © {new Date().getFullYear()} Arjun Suryawanshi ·{" "}
        <a href="mailto:arjunsur@seas.upenn.edu">arjunsur@seas.upenn.edu</a>
      </div>
    </footer>
  );
}