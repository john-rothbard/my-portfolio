"use client"

import { useEffect } from "react"

export default function ThemeProvider({ children }) {
  useEffect(() => {
    const root = document.documentElement
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const stored = localStorage.getItem("theme")

    if (stored === "light" || stored === "dark") {
      root.dataset.theme = stored
    } else {
      root.dataset.theme = media.matches ? "dark" : "light"
    }

    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        root.dataset.theme = e.matches ? "dark" : "light"
      }
    }

    media.addEventListener("change", handleChange)

    return () => media.removeEventListener("change", handleChange)
  }, [])

  return children
}
