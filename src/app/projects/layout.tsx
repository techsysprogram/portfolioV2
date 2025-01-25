export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return (
      <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
        <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}>Mes Projets</h1>
        {children}
      </div>
    );
  }
  