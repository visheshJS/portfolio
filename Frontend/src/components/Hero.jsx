import { useEffect, useRef } from "react"
import { Button } from "./ui/Button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Instagram } from "lucide-react"

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []

    const createParticles = () => {
      const particleCount = Math.min(50, Math.floor(window.innerWidth / 20))

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(
            Math.random() * 100 + 155,
          )}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.1})`,
        })
      }
    }

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(150, 150, 255, ${0.1 - distance / 1500})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].x += particles[i].speedX
        particles[i].y += particles[i].speedY

        if (particles[i].x > canvas.width || particles[i].x < 0) {
          particles[i].speedX = -particles[i].speedX
        }

        if (particles[i].y > canvas.height || particles[i].y < 0) {
          particles[i].speedY = -particles[i].speedY
        }

        ctx.fillStyle = particles[i].color
        ctx.beginPath()
        ctx.arc(particles[i].x, particles[i].y, particles[i].size, 0, Math.PI * 2)
        ctx.fill()
      }

      connectParticles()
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.length = 0
      createParticles()
    }

    createParticles()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-lg md:text-xl font-medium text-purple-400 mb-2">Hello, I'm</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400">
              Vishesh Sharma
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-300">Full Stack MERN Developer</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              I build exceptional and accessible digital experiences for the web, focusing on creating modern,
              responsive, and user-friendly applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-6 py-2 rounded-md relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  View Projects
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 1,
                      repeatDelay: 0.5,
                    }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </span>
                <span className="absolute bottom-0 left-0 w-full h-0 bg-white/20 transition-all duration-300 group-hover:h-full" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 relative overflow-hidden group"
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute bottom-0 left-0 w-0 h-full bg-purple-500/10 transition-all duration-300 group-hover:w-full" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center gap-6 mt-10"
          >
            <motion.a
              href="https://github.com/visheshJS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors relative group"
              whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-6 w-6" />
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/vishesh-sharma-19124029b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors relative group"
              whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-6 w-6" />
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
            </motion.a>

            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors relative group"
              whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram className="h-6 w-6" />
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
} 