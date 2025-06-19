import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">
              &lt;Portfolio/&gt;
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-stack engineer passionate about creating beautiful,
              functional web applications that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="#about"
                className="text-muted-foreground hover:text-forest-500 transition-colors text-sm"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-forest-500 transition-colors text-sm"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-forest-500 transition-colors text-sm"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/mahi7000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-forest-500 hover:bg-forest-100 dark:hover:bg-forest-900 transition-all duration-300 hover:scale-110"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/mahlet-belay-472223279/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-forest-500 hover:bg-forest-100 dark:hover:bg-forest-900 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mahlet@gmail.com"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-forest-500 hover:bg-forest-100 dark:hover:bg-forest-900 transition-all duration-300 hover:scale-110"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Mahlet Belay. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-2 sm:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> and lots
            of tea
          </p>
        </div>
      </div>
    </footer>
  );
}