export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return (
      <div style={{ maxWidth: "1200px", marginTop: "40px", padding: "20px" }}>
        {children}
      </div>
    );
  }
  