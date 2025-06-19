import { ExternalLink, Github } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function Projects() {
  const projects = [
    {
      title: "Negest - Women's Clothing Ecommerce Web App",
      description: "Full-stack e-commerce solution for women's clothing with React, Node.js, and Stripe integration",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Stripe"],
      github: "https://github.com/mahi7000/Negest",
      live: "https://example.com"
    },
    {
      title: "TimeBank - Skill Sharing Platform",
      description: "Full-stack web app where students can exchange services and skills using time credits instead of money.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      tech: ["React", "TypeScript", "Tailwind CSS", "Django"],
      github: "https://github.com/wende12github/Silent-Coders",
      live: "https://example.com"
    },
    {
      title: "Recipe Rave - Recipe Platform",
      description: "A web application where foodies can come together to explore mouth-watering recipes from around the world Join us on a culinary adventure and discover the joy of cooking.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      tech: ["Html", "CSS", "JavaScript"],
      github: "https://github.com/iaMO3/RecipeRave",
      live: "https://iamo3.github.io/RecipeRave/"
    },
    {
      title: "Nib - Planning Web App (in Progress)",
      description: "A structured planning app where users can create multi-step plans, attach links, set reminders for individual steps (not just deadlines), track progress visually.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects showcasing different technologies
            and problem-solving approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border hover:border-forest-500/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-forest-500 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-forest-100 dark:bg-forest-900 text-forest-700 dark:text-forest-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-forest-500 text-forest-500 hover:bg-forest-500 hover:text-white"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-forest-500 hover:bg-forest-600 text-white"
                    asChild
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
