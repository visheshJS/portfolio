import React from 'react'
import './index.css'
import { ThemeProvider } from './components/ThemeProvider'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  )
}

export default App 