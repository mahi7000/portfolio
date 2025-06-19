import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-forest-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-forest-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Mahlet Belay</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-mono">
            Full Stack Engineer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, performant web applications with modern
            technologies. Passionate about clean code, user experience, and
            innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-forest-500 hover:bg-forest-600 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 animate-glow"
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-forest-500 text-forest-500 hover:bg-forest-500 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/mahi7000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-forest-500 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mahlet-belay-472223279/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-forest-500 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mahlet7000@gmail.com"
              className="text-muted-foreground hover:text-forest-500 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-forest-500" size={24} />
        </div>
      </div>
    </section>
  );
}
