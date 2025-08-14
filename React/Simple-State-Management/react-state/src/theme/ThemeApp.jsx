import { useTheme } from "./ThemeContext";

function Container({ children }) {
  const { theme } = useTheme();
  const bg = theme === "light" ? "#ffffff" : "#1a1a1a";
  const color = theme === "light" ? "#000000" : "#ffffff";
  return (
    <div style={{ backgroundColor: bg, color, padding: 16, borderRadius: 12 }}>
      {children}
    </div>
  );
}

function Header() {
  return (
    <header style={{ marginBottom: 12 }}>
      <Navigation />
      <Controls />
    </header>
  );
}

function Navigation() {
  const { fontSize } = useTheme();
  const size = fontSize === "small" ? "14px" : fontSize === "large" ? "20px" : "16px";
  return (
    <nav style={{ fontSize: size, marginBottom: 10 }}>
      <a href="#home">Home</a> {" | "}
      <a href="#about">About</a> {" | "}
      <a href="#contact">Contact</a>
    </nav>
  );
}

function Controls() {
  return (
    <div className="row">
      <ThemeToggle />
      <FontControl />
    </div>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>{theme === "light" ? "Dark" : "Light"} Mode</button>;
}

function FontControl() {
  const { fontSize, setFontSize } = useTheme();
  return (
    <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
    </select>
  );
}

function Content() {
  const { fontSize, theme } = useTheme();
  const size = fontSize === "small" ? "14px" : fontSize === "large" ? "20px" : "16px";
  return (
    <main style={{ fontSize: size }}>
      <Article />
      <Sidebar themeLabel={theme} />
    </main>
  );
}

function Article() {
  const { theme } = useTheme();
  return (
    <article>
      <h3>Article Title</h3>
      <p>This content uses the <strong>{theme}</strong> theme. No prop drilling 🎉</p>
    </article>
  );
}

function Sidebar({ themeLabel }) {
  return (
    <aside style={{ marginTop: 16, padding: 10, border: "1px solid #ccc", borderRadius: 8 }}>
      <h4>Sidebar</h4>
      <p>Current theme: {themeLabel}</p>
    </aside>
  );
}

export default function ThemeApp() {
  return (
    <Container>
      <Header />
      <Content />
    </Container>
  );
}
