import { useRef, useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card"
import { Button } from "./ui/Button"
import { Input } from "./ui/Input"
import { Textarea } from "./ui/Textarea"
import { Mail, MapPin, Phone, Send, Instagram, Github, Linkedin } from "lucide-react"

export default function Contact() {
  const formRef = useRef(null)
  const [sending, setSending] = useState(false)
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    emailjs
      .sendForm(
        "uwdhwuih162516231",     // <-- Replace with your EmailJS Service ID
        "template_78s8on5",    // <-- Replace with your EmailJS Template ID
        formRef.current,
        "UuSBQ7PImowAEtcoo"      // <-- Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("Thank you for your message! I will get back to you soon.")
          setFormData({
            from_name: "",
            from_email: "",
            subject: "",
            message: "",
          })
          setSending(false)
        },
        (error) => {
          alert("Oops! Something went wrong. Please try again.")
          setSending(false)
        }
      )
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "visheshdtu18@gmail.com",
      link: "mailto:visheshdtu18@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 9990581655",
      link: "tel:+919990581655",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Delhi, India",
      link: null,
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out to me through the form below or using my contact information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="border-0 bg-gray-900/50 backdrop-blur-sm overflow-hidden h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send Me a Message</CardTitle>
                <CardDescription className="text-gray-400">I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="from_name" className="text-sm text-gray-400">
                        Your Name
                      </label>
                      <Input
                        id="from_name"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-gray-800/50 border-gray-700 focus:border-purple-500 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="from_email" className="text-sm text-gray-400">
                        Your Email
                      </label>
                      <Input
                        id="from_email"
                        name="from_email"
                        type="email"
                        value={formData.from_email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-gray-800/50 border-gray-700 focus:border-purple-500 text-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm text-gray-400">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="bg-gray-800/50 border-gray-700 focus:border-purple-500 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-gray-400">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello, I'd like to talk about..."
                      required
                      className="min-h-[150px] bg-gray-800/50 border-gray-700 focus:border-purple-500 text-white"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white"
                    disabled={sending}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {sending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 bg-gray-900/50 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500">{info.icon}</div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className="text-gray-400 hover:text-purple-400 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-400">{info.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 bg-gray-900/50 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium text-white mb-4">Social Profiles</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/visheshJS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-800 hover:bg-purple-500/20 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/vishesh-sharma-19124029b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-gray-800 hover:bg-purple-500/20 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      className="p-3 rounded-full bg-gray-800 hover:bg-purple-500/20 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
