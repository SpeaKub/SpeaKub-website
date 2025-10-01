import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Do You Relate to These Struggles?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Feeling frozen or nervous before speaking in class or meetings? Overthinking every word 
            in emails, presentations, or group discussions? You're not alone. SpeaKub helps you overcome 
            anxiety and communicate confidently in college and work situations.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card rounded-xl p-6 shadow-soft transition-smooth hover:shadow-medium">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-xl">😰</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Feeling Frozen in Conversations</h3>
              <p className="text-muted-foreground">
                Mind goes blank during group discussions, presentations, or client calls? We help you stay calm and speak clearly under pressure.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-soft transition-smooth hover:shadow-medium">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-xl">🤔</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Overthinking Every Word</h3>
              <p className="text-muted-foreground">
                Worrying about saying the wrong thing or being judged? Learn techniques to reduce hesitation and speak with confidence.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-soft transition-smooth hover:shadow-medium">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-xl">😓</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Anxiety Before Speaking</h3>
              <p className="text-muted-foreground">
                Nervous in meetings, interviews, or class participation? We provide daily exercises and support to build lasting confidence.
              </p>
            </div>
          </div>
          
          <Button variant="hero" size="lg">
            Stop Letting Anxiety Hold You Back
          </Button>
        </div>
      </div>
    </section>
  );
}