export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-md flex items-center justify-center overflow-hidden">
              <img src="/icon.png" alt="speaKub icon" className="w-full h-full object-cover" />
            </div>
              <span className="text-xl font-bold">speaKub</span>
            </div>
            <p className="text-background/70 mb-4 max-w-md">
              Empowering individuals to communicate with confidence. Transform your speaking 
              skills and unlock new opportunities with our expert-led programs.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/speakub/" className="text-background/70 hover:text-background transition-smooth">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/spee_kub?igsh=MTdncTMzZWpsbmlreQ%3D%3D&utm_source=qr" className="text-background/70 hover:text-background transition-smooth">
                Instagram
              </a>
              <a href="https://x.com/sahejhira?s=11" className="text-background/70 hover:text-background transition-smooth">
                Twitter
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#plans" className="hover:text-background transition-smooth">Foundation Program</a></li>
              <li><a href="#plans" className="hover:text-background transition-smooth">Confidence Boost Program</a></li>
              <li><a href="#plans" className="hover:text-background transition-smooth">Premium (1-on-1) Program</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Let's have a video chat free of cost</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#faq" className="hover:text-background transition-smooth">FAQ</a></li>
              <li><a href="#contact" className="hover:text-background transition-smooth">Contact Us</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Help Center</a></li>
              <li><a href="#" className="hover:text-background transition-smooth">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
          <p>&copy; {new Date().getFullYear()} speaKub. All rights reserved. Built with ❤️ for confident communicators.</p>
        </div>
      </div>
    </footer>
  );
}