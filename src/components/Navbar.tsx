import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-md flex items-center justify-center overflow-hidden">
              <img src="/icon.png" alt="speaKub icon" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold text-foreground">speaKub</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth">
              About
            </a>
            <a href="#plans" className="text-muted-foreground hover:text-foreground transition-smooth">
              Plans
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-smooth">
              FAQ
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-smooth">
              Contact
            </a>
          </div>
          
          <a href="#contact">
            <Button variant="hero" size="lg">
              Let's have a chat
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}