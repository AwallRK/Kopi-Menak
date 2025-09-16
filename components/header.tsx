"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "backdrop-blur-md border-b border-white/[0.02]",
        isScrolled ? "bg-white/[0.02] coffee-glow" : "bg-white/[0.02]",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 relative">
          <motion.div className="flex-shrink-0 hover-lift" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <a href="#" className="flex items-center cursor-coffee" aria-label="Kopi Menak Home">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                <Image
                  src="https://res.cloudinary.com/dabfgxhyk/image/upload/v1757989164/bcf0905d-6145-4927-a2bb-d66e8a2b5682_removalai_preview_nudhsi.png"
                  alt="Kopi Menak Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a
              href="#home"
              className={cn(
                "text-sm font-medium transition-colors hover:text-amber-600 smooth-transition cursor-coffee",
                isScrolled ? "text-neutral-700" : "text-white/90",
              )}
            >
              Home
            </a>
            <a
              href="#menu"
              className={cn(
                "text-sm font-medium transition-colors hover:text-amber-600 smooth-transition cursor-coffee",
                isScrolled ? "text-neutral-700" : "text-white/90",
              )}
            >
              Menu
            </a>
            <a
              href="#dine-in"
              className={cn(
                "text-sm font-medium transition-colors hover:text-amber-600 smooth-transition cursor-coffee",
                isScrolled ? "text-neutral-700" : "text-white/90",
              )}
            >
              Dine In
            </a>
            <a
              href="#location"
              className={cn(
                "text-sm font-medium transition-colors hover:text-amber-600 smooth-transition cursor-coffee",
                isScrolled ? "text-neutral-700" : "text-white/90",
              )}
            >
              Location
            </a>
          </nav>

          <button
            className="md:hidden p-2 hover-lift cursor-coffee"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-neutral-900" : "text-white")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-neutral-900" : "text-white")} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-lg coffee-glow"
          >
            <div className="px-4 py-4 space-y-3">
              <a
                href="#home"
                onClick={handleNavClick}
                className="block text-neutral-700 hover:text-amber-600 font-medium py-2 transition-colors smooth-transition cursor-coffee"
              >
                Home
              </a>
              <a
                href="#menu"
                onClick={handleNavClick}
                className="block text-neutral-700 hover:text-amber-600 font-medium py-2 transition-colors smooth-transition cursor-coffee"
              >
                Menu
              </a>
              <a
                href="#dine-in"
                onClick={handleNavClick}
                className="block text-neutral-700 hover:text-amber-600 font-medium py-2 transition-colors smooth-transition cursor-coffee"
              >
                Dine In
              </a>
              <a
                href="#location"
                onClick={handleNavClick}
                className="block text-neutral-700 hover:text-amber-600 font-medium py-2 transition-colors smooth-transition cursor-coffee"
              >
                Location
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
