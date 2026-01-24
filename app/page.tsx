"use client"

import { useState, useEffect } from "react"
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, ArrowRight, Phone } from "lucide-react"

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (section: string) => {
    setActiveSection(section)
    setMobileMenuOpen(false)
    const element = document.getElementById(section)
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = ["home", "about", "experience", "projects", "contact"]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/50 backdrop-blur-2xl border-b border-border/30 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:opacity-70 transition-opacity"
            >
              AKS
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    activeSection === item
                      ? "bg-primary/20 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-card/50 rounded transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl opacity-30 animate-float"></div>
          <div
            className="absolute bottom-20 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl opacity-30 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 md:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-primary font-semibold tracking-widest uppercase text-xs sm:text-sm">
                  Aman's Portfolio
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Hey, I'm
                  <br />
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Aman Kumar Sah
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Computer Science Undergraduate • Specializing in Data Science & AI/ML
                </p>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  3rd year Computer Science student at IIMS College (Taylor's University) with a passion for building
                  intelligent solutions and teaching the next generation of engineers.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3 sm:gap-4 pt-2 sm:pt-4 flex-wrap">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30 flex items-center gap-2 group"
                >
                  View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all"
                >
                  Contact Me
                </button>
              </div>
            </div>

            {/* Right: Profile Image */}
            <div className="relative flex items-center justify-center animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary rounded-3xl opacity-20 blur-2xl animate-pulse"></div>
                <div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-br from-primary to-accent"></div>

                {/* Profile Image */}
                <div className="absolute inset-4 rounded-2xl overflow-hidden bg-gradient-to-br from-card to-background">
                  <img
                    src="/professional-handsome-portrait-photo.jpg"
                    alt="Aman Kumar Sah"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-20">About Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left: About Text */}
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey to software engineering started as a childhood dream. What began as curiosity has evolved
                into genuine passion for solving complex problems through elegant code, data-driven insights, and
                intelligent systems.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently pursuing a Bachelor of Computer Science (Hons) with a specialization in Data Science at
                IIMS College. My focus is on the intersection of AI/ML and software engineering—building systems that
                not only work, but think.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond academics, I'm passionate about education and leadership. I teach Computer Science and lead the
                IT department at a secondary school, where I mentor young minds and foster technological innovation.
              </p>

              <div className="pt-4">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">My Journey</h3>
                <div className="space-y-3">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold">Childhood Dream</p>
                      <p className="text-sm text-muted-foreground">Always wanted to be a software engineer</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold">Active Learner</p>
                      <p className="text-sm text-muted-foreground">
                        Built multiple academic projects in AI/ML and web dev
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold">Passionate Educator</p>
                      <p className="text-sm text-muted-foreground">Teaching CS and leading IT department</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Education & Stats */}
            <div className="space-y-6">
              {/* Main Education Card */}
              <div className="bg-gradient-to-br from-card to-card/50 border border-primary/30 rounded-2xl p-8 hover:border-primary/60 transition-all group">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Bachelor of Computer Science</h3>
                    <p className="text-foreground font-semibold">IIMS College (Taylor's University)</p>
                  </div>
                  <div className="text-4xl">🎓</div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Year</span>
                    <span className="font-semibold">3rd Year (2023 - Present)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Specialization</span>
                    <span className="font-semibold text-accent">Data Science</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-semibold">Kathmandu, Nepal</span>
                  </div>
                </div>
              </div>

              {/* Previous Education */}
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-accent/60 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold mb-1">+2 Science (PCB)</h4>
                    <p className="text-sm text-muted-foreground">MIT High School, Janakpur</p>
                  </div>
                  <div className="text-2xl">📚</div>
                </div>
                <p className="text-sm text-accent">2021 - 2023</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-background border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
                  <p className="text-3xl font-bold text-primary">5+</p>
                  <p className="text-sm text-muted-foreground mt-2">Projects Built</p>
                </div>
                <div className="bg-background border border-border rounded-xl p-6 text-center hover:border-accent/50 transition-colors">
                  <p className="text-3xl font-bold text-accent">4</p>
                  <p className="text-sm text-muted-foreground mt-2">Languages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-20">Skills & Expertise</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Languages & Frameworks",
                skills: ["Python", "Java", "JavaScript", "React", "Next.js"],
                icon: "💻",
                accent: "from-primary",
              },
              {
                title: "Data Science & AI/ML",
                skills: ["Machine Learning", "TensorFlow", "Data Analysis", "Statistical Modeling", "Python ML"],
                icon: "🤖",
                accent: "from-accent",
              },
              {
                title: "Databases & Cloud",
                skills: ["MySQL", "PostgreSQL", "AWS", "Git", "Linux"],
                icon: "☁️",
                accent: "from-cyan-500",
              },
              {
                title: "Web Development",
                skills: ["HTML/CSS", "Responsive Design", "API Development", "Web Architecture"],
                icon: "🌐",
                accent: "from-purple-500",
              },
              {
                title: "Education & Leadership",
                skills: ["Curriculum Design", "Student Mentoring", "Technical Management", "Team Leadership"],
                icon: "📚",
                accent: "from-green-500",
              },
              {
                title: "Languages",
                skills: ["English", "Nepali", "Hindi", "Maithili"],
                icon: "🌍",
                accent: "from-orange-500",
              },
            ].map((skillGroup, idx) => (
              <div
                key={skillGroup.title}
                className="group bg-background border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 hover:translate-y--2"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{skillGroup.icon}</div>
                <h3 className="text-lg font-bold mb-6 group-hover:text-primary transition-colors">
                  {skillGroup.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-sm text-foreground rounded-full border border-primary/20 hover:border-primary/50 transition-colors hover:bg-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Work Section */}
      <section id="experience" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-20">Experience & Certifications</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Teaching Position */}
            <div className="group bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-8 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Teaching</div>
                  <h3 className="text-2xl font-bold mb-2">Computer Science Teacher</h3>
                  <p className="text-lg text-accent font-semibold">IT Department Head</p>
                </div>
                <div className="text-4xl">🏫</div>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">Secondary School</p>
                <p className="text-sm text-accent font-medium">Started: May 2025</p>
                <ul className="space-y-2 mt-6">
                  <li className="flex gap-3 text-muted-foreground">
                    <span className="text-primary">✓</span>
                    Mentoring students in programming and computer science
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <span className="text-primary">✓</span>
                    Curriculum development and IT infrastructure management
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <span className="text-primary">✓</span>
                    Leading technological innovation in education
                  </li>
                </ul>
              </div>
            </div>

            {/* Certification */}
            <div className="group bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/30 rounded-2xl p-8 hover:border-accent/60 hover:shadow-lg hover:shadow-accent/20 transition-all">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Certification</div>
                  <h3 className="text-2xl font-bold mb-2">AWS Cloud Practitioner</h3>
                  <p className="text-lg text-primary font-semibold">Essentials</p>
                </div>
                <div className="text-4xl">☁️</div>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">Amazon Web Services</p>
                <p className="text-sm text-accent font-medium">Completed: November 3, 2023</p>
                <p className="text-muted-foreground mt-6 leading-relaxed">
                  Foundational knowledge of AWS cloud services, architecture patterns, and best practices. Understanding
                  cloud infrastructure is essential for building modern, scalable applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-20">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Data Science Project", query: "machine-learning-data-science-project-analysis" },
              { title: "AI/ML Project", query: "artificial-intelligence-deep-learning-neural-networks" },
            ].map((project, idx) => (
              <div
                key={idx}
                className="group bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/20 hover:translate-y--2"
              >
                {/* Project Image */}
                <div className="h-64 bg-gradient-to-br from-card via-card/50 to-background overflow-hidden relative">
                  <img
                    src={`/.jpg?height=300&width=500&query=${project.query}`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-8 relative z-10 -mt-16">
                  <div className="bg-background/95 rounded-xl p-6 backdrop-blur-sm border border-border">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                      <ExternalLink
                        size={20}
                        className="text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0"
                      />
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Your project descriptions will go here. Showcase the problem you solved, the technologies used,
                      and the impact of your work.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground mb-8">Academic projects will be showcased here once updated</p>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/30 inline-flex items-center gap-2 group"
            >
              Want to discuss a project? Get in touch{" "}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold">Let's Build Something Great</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities, interesting projects, and ways to contribute to
              the tech community.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            <a
              href="mailto:amanshah0120@gmail.com"
              className="group bg-background border border-border rounded-2xl p-8 text-center hover:border-primary/50 hover:bg-primary/5 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <Mail size={40} className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-sm text-muted-foreground break-all group-hover:text-accent transition-colors">
                amanshah0120@gmail.com
              </p>
            </a>

            <a
              href="tel:+977-9762304077"
              className="group bg-background border border-border rounded-2xl p-8 text-center hover:border-accent/50 hover:bg-accent/5 transition-all hover:shadow-lg hover:shadow-accent/10"
            >
              <Phone size={40} className="mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">+977-9762304077</p>
            </a>

            <a
              href="https://www.linkedin.com/in/amanshah0101"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background border border-border rounded-2xl p-8 text-center hover:border-blue-500/50 hover:bg-blue-500/5 transition-all hover:shadow-lg hover:shadow-blue-500/10"
            >
              <Linkedin size={40} className="mx-auto mb-4 text-blue-500 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-lg mb-2">LinkedIn</h3>
              <p className="text-sm text-muted-foreground group-hover:text-blue-500 transition-colors">
                Connect with me
              </p>
            </a>
          </div>

          {/* Social Links */}
          <div className="border-t border-border pt-12 text-center">
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="https://github.com/amansah0101"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-background border border-border rounded-xl hover:border-primary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/amanshah0101"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-background border border-border rounded-xl hover:border-blue-500 hover:bg-blue-500/10 text-muted-foreground hover:text-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/10"
              >
                <Linkedin size={28} />
              </a>
            </div>
            <p className="text-muted-foreground">© 2026 Aman Kumar Sah. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
