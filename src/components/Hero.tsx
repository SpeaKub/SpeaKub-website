import { Button } from "@/components/ui/button";
import TestimonialCarousel from "./Testimonials";

export function Hero() {
  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Overcome Anxiety.<br />
              Speak Confidently.<br />
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent inline-block">
                Shine in College & Work.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Struggling to speak up in class, meetings, or interviews? Learn practical 
              techniques to manage anxiety, communicate clearly, and gain confidence in just 4 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="w-full sm:w-auto">
                <Button
                  variant="hero"
                  size="xl"
                  className="transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Join the 4-Week Program
                </Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="xl"
                  className="transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Let's have a chat
                </Button>
              </a>
            </div>
            <div className="mt-8 flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Anxiety Management</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Real-Life Practice</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>4-Week Results</span>
              </div>
            </div>
          </div>
          
                <TestimonialCarousel />
             
        </div>
      </div>
    </section>
  );
}