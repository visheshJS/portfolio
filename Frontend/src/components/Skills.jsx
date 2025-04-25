import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/Card"
import { Code, Database, Figma, Github, Server, Cpu, Layout, Braces, Layers } from "lucide-react"

export default function Skills() {
  const [clickedSkill, setClickedSkill] = useState(null)

  const skills = [
    { name: "React", icon: <Code className="h-8 w-8" />, color: "from-blue-400 to-cyan-400" },
    { name: "Tailwind CSS", icon: <Layers className="h-8 w-8" />, color: "from-cyan-400 to-blue-500" },
    { name: "Express.js", icon: <Server className="h-8 w-8" />, color: "from-gray-400 to-gray-600" },
    { name: "Node.js", icon: <Server className="h-8 w-8" />, color: "from-green-400 to-green-600" },
    { name: "MongoDB", icon: <Database className="h-8 w-8" />, color: "from-green-500 to-green-700" },
    { name: "HTML", icon: <Layout className="h-8 w-8" />, color: "from-orange-400 to-red-500" },
    { name: "CSS", icon: <Layers className="h-8 w-8" />, color: "from-blue-500 to-blue-700" },
    { name: "JavaScript", icon: <Braces className="h-8 w-8" />, color: "from-yellow-400 to-yellow-600" },
    { name: "Figma", icon: <Figma className="h-8 w-8" />, color: "from-purple-400 to-pink-500" },
    { name: "Git/GitHub", icon: <Github className="h-8 w-8" />, color: "from-gray-500 to-gray-700" },
    { name: "C/C++", icon: <Cpu className="h-8 w-8" />, color: "from-blue-600 to-blue-800" },
    { name: "Responsive Design", icon: <Layers className="h-8 w-8" />, color: "from-teal-400 to-teal-600" },
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

  const handleSkillClick = (index) => {
    setClickedSkill(index === clickedSkill ? null : index)
  }

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            My Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I've worked with a range of technologies in the web development world, from front-end to back-end and design
            tools.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={item}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.4)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{
                  scale: 0.95,
                  boxShadow: "0 5px 15px -5px rgba(168, 85, 247, 0.7)",
                }}
                onClick={() => handleSkillClick(index)}
                className={`cursor-pointer ${clickedSkill === index ? "ring-2 ring-purple-500 ring-offset-2 ring-offset-gray-900" : ""}`}
              >
                <Card className="border-0 bg-gray-900/50 backdrop-blur-sm overflow-hidden h-full transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center">
                    <motion.div
                      className={`p-4 rounded-full bg-gradient-to-br ${skill.color} mb-4`}
                      animate={
                        clickedSkill === index
                          ? {
                              scale: [1, 1.2, 1],
                              rotate: [0, 10, -10, 0],
                              transition: { duration: 0.5 },
                            }
                          : {}
                      }
                      whileHover={{
                        rotate: [-5, 5, -5, 5, 0],
                        transition: { duration: 0.5 },
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <motion.h3
                      className="text-lg font-medium text-white"
                      animate={
                        clickedSkill === index
                          ? {
                              scale: [1, 1.1, 1],
                              transition: { duration: 0.5, delay: 0.1 },
                            }
                          : {}
                      }
                    >
                      {skill.name}
                    </motion.h3>

                    {clickedSkill === index && (
                      <motion.div
                        className="w-full h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mt-3"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      />
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 