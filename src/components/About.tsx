import { Code, Database, Globe, Smartphone } from "lucide-react";

export function About() {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS",
      color: "text-blue-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Node.js, Python, MySQL, MongoDB",
      color: "text-green-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Technologies",
      description: "REST APIs",
      color: "text-purple-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "React Native",
      color: "text-orange-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack engineer with 5+ years of experience
            building scalable web applications and leading development teams.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Started as a curious developer exploring different technologies,
              I've evolved into a full-stack engineer who loves solving complex
              problems and building user-centric applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in modern web technologies and have a keen eye for
              design, always striving to create applications that are not only
              functional but also beautiful and intuitive.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Node.js",
                "Python",
                "MySQL",
                "Figma"
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-forest-100 dark:bg-forest-900 text-forest-700 dark:text-forest-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="p-6 bg-background rounded-lg border border-border hover:border-forest-500/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${skill.color} mb-4`}>{skill.icon}</div>
                <h4 className="font-semibold mb-2">{skill.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
