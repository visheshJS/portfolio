import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card"
import { Badge } from "./ui/Badge"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Web Developer",
      company: "Google Developers Group, DTU",
      duration: "Oct 2024 - Present",
      description:
        "Contributed to the development of the official GDG website for college’s Google Developer Group(GDG DTU). Developed responsive and user-friendly frontend and Integrated authentication and user management system using Clerk for secure access control.",
      skills: ["React", "Node.js", "MongoDB", "Express", "Clerk"],
    },
    {
      id: 2,
      role: "Web Development Intern",
      company: "Vinod Dham Center",
      duration: "Mar 2025 - Current",
      description:
        "Developed and maintained multiple client projects. Integrated interactive features with JavaScript, enhancing user experience and site engagement.",
      skills: ["Javascript", "Node.js", "MongoDB"],
    },
 
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="experience" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Work Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey as a developer, showcasing my growth and the valuable experience I've gained along
            the way.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-12"
            >
              {experiences.map((exp, index) => (
                <motion.div key={exp.id} variants={item}>
                  <div
                    className={`flex flex-col md:flex-row gap-8 relative ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 z-10"></div>

                    {/* Content */}
                    <div className="md:w-1/2 ml-8 md:ml-0">
                      <Card className="border-0 bg-gray-900/50 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <Briefcase className="h-5 w-5 text-purple-400" />
                            <CardTitle className="text-xl text-white">{exp.role}</CardTitle>
                          </div>
                          <CardDescription className="text-gray-300 text-lg">{exp.company}</CardDescription>
                          <div className="flex items-center gap-2 text-gray-400 mt-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-400 mb-4">{exp.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, idx) => (
                              <Badge
                                key={idx}
                                variant="outline"
                                className="bg-gray-800/50 text-gray-300 border-gray-700"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 