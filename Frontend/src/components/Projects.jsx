import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web", "UI/UX"];

  // Placeholder image as base64 data URL
  const placeholderImage =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iIzFlMjkzYiIvPjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMzYiIGZpbGw9IiM5NGEzYjgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlByb2plY3QgSW1hZ2UgUGxhY2Vob2xkZXI8L3RleHQ+PC9zdmc+";

  const projects = [
    {
      id: 1,
      title: "Health-Quest",
      description:
        "Developed and deployed a fullstack interactive educational web application that gamifies medical knowledge through multiple memory-based challenges, implementing responsive UI with React, custom animations, and game mechanics with varying difficulty levels",
      image: "/images/healthquest.png",
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      category: "Web",
      github: "https://github.com/visheshJS/healthQuest",
      demo: "https://healthquestgame.onrender.com/",
    },
    {
      id: 2,
      title: "Google Developers Group, DTU",
      description:
        "Contributed in making the GDG website , made the frontend and authentication functionality.",
      image: "/images/gdg.png",
      tags: [
        "React",
        "Tailwind CSS",
        "Clerk Authentication",
        "Node.js",
        "Express.js",
      ],
      category: "Web",
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Currency Converter",
      description:
        "A collaborative task management application with real-time updates and team features.",
      image: "/images/currency.png",
      tags: ["React", "Tailwind CSS", "Socket.io", "Exchange Rate API"],
      category: "Web",
      github: "https://github.com/visheshJS/currencyConverter",
      demo: "currency-converter-nine-fawn.vercel.app/",
    },
    {
      id: 4,
      title: "Netflix UI Clone",
      description: "responsive netflix UI clone using html, css, javascript",
      image: "/images/netflix.png",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "UI/UX",
      github: "#",
      demo: "https://visheshcoderguy.github.io/project_css_webd/",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-950"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            My Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Here are some of my recent projects. Each project is a unique piece
            of development that showcases my skills and passion.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((filter) => (
              <motion.div
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={activeFilter === filter ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter)}
                  className={
                    activeFilter === filter
                      ? "bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white"
                      : "border-purple-500 text-purple-400 hover:bg-purple-500/10"
                  }
                >
                  {filter}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div key={project.id} variants={item}>
                  <motion.div
                    whileHover={{
                      y: -10,
                      boxShadow: "0 20px 25px -5px rgba(168, 85, 247, 0.3)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <Card className="border-0 bg-gray-900/50 backdrop-blur-sm overflow-hidden h-full flex flex-col hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl text-white">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="bg-gray-800/50 text-gray-300 border-gray-700"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </CardContent>
                      <CardFooter className="flex justify-between mt-auto">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-gray-700 text-gray-300 hover:bg-gray-800"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Button>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <a
                            href={
                              project.demo.startsWith("http")
                                ? project.demo
                                : `https://${project.demo}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white rounded-md text-sm font-medium transition"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </motion.div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
