"use client"

import { useEffect, useState } from "react"

export function AmbientEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 w-6 h-6 rounded-full bg-gradient-to-r from-amber-400/20 to-orange-400/20 blur-sm transition-all duration-75 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
      />

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-3 bg-amber-800/10 rounded-full float-animation"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-transparent to-orange-50/20 animate-pulse"
          style={{ animationDuration: "8s" }}
        />
      </div>
    </>
  )
}
