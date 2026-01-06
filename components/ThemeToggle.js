export default function ThemeToggle() {
    function toggleTheme() {
      const root = document.documentElement
      const current = root.getAttribute("data-theme")
      const next = current === "dark" ? "light" : "dark"
  
      root.setAttribute("data-theme", next)
      localStorage.setItem("theme", next)
    }
  
    return (
      <button onClick={toggleTheme}>
        color
      </button>
    )
  }
  