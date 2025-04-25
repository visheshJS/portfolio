import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/Button"
import { cn } from "../lib/utils"
import { useIsMobile } from "../hooks/use-mobile"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const isMobile = useIsMobile()
  const navRef = useRef(null)
  const indicatorRef = useRef(null)
  
  // Profile image as base64 data URL
  const profileImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzFlMjkzYiIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSI0MCIgZmlsbD0iIzk0YTNiOCIvPjxyZWN0IHg9IjYwIiB5PSIxMjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgcng9IjgiIGZpbGw9IiM5NGEzYjgiLz48L3N2Zz4="

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Determine active section based on scroll position
      const sections = navLinks.map((link) => document.getElementById(link.id))
      const scrollPosition = window.scrollY + 100 // Offset to trigger slightly before reaching the section

      sections.forEach((section) => {
        if (!section) return

        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navLinks])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      // Close mobile menu if open
      if (isMenuOpen) setIsMenuOpen(false)

      // Scroll to section with smooth behavior
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for navbar height
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      ref={navRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-gray-950/90 backdrop-blur-md py-3 shadow-lg shadow-purple-500/10" : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#home" onClick={() => scrollToSection("home")} className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500 transform transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-purple-500/20">
              <img src={profileImage} alt="Vishesh Sharma" className="object-cover w-full h-full" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:from-cyan-400 group-hover:to-purple-500">
              VS
            </span>
          </a>

          {isMobile ? (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="relative z-50"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          ) : (
            <nav className="flex items-center gap-8 relative">
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.id)
                    }}
                    className={cn(
                      "text-gray-300 hover:text-white transition-colors relative py-2 px-1",
                      activeSection === link.id && "text-white font-medium",
                    )}
                  >
                    {link.name}
                    {activeSection === link.id && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </a>
                ))}
              </div>
              <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white shadow-md shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300">
                Resume
              </Button>
            </nav>
          )}
        </div>
      </div>

      {/* Mobile menu with animation */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 bg-gray-950/98 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500">
                <img src={profileImage} alt="Vishesh Sharma" className="object-cover w-full h-full" />
              </div>
            </motion.div>

            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.id)
                  }}
                  className={cn(
                    "text-2xl text-gray-300 hover:text-white transition-colors relative py-2",
                    activeSection === link.id && "text-white font-medium",
                  )}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeMobileSection"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                    />
                  )}
                </a>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              className="mt-8"
            >
              <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-6 text-lg">
                Resume
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 