import { Button } from "@/components/ui/button";

export function BenefitsSection() {
  const benefits = [
    {
      title: "Immediate Relief from Speaking Anxiety",
      description: "Quick exercises, breathing techniques, and journaling prompts that reduce panic in real-life situations within days.",
      icon: "😌",
      outcome: "Speak without your heart racing"
    },
    {
      title: "Confidence That Shows in Every Interaction",
      description: "Speaking clearly and fluently leads to better grades, better workplace impressions, and better career growth.",
      icon: "✨",
      outcome: "Get noticed for the right reasons"
    },
    {
      title: "Practical Tools for Long-term Success",
      description: "Daily prompts, role-playing, and self-reflection become habits that keep improving your communication skills.",
      icon: "🛠️",
      outcome: "Build skills that last a lifetime"
    },
    {
      title: "Real-life Application You Can Use Today",
      description: "Skills work directly in college presentations, job interviews, and office meetings - you see immediate results.",
      icon: "🎯",
      outcome: "Apply what you learn instantly"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Why People Feel They <span className="text-destructive">Absolutely Need</span> SpeaKub
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Missing out means continuing to feel anxious, freeze, or hesitate - which hurts your 
              grades, career growth, and self-confidence. That's why this isn't a luxury, it's essential.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-soft transition-smooth hover:shadow-medium">
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{benefit.description}</p>
                    <div className="bg-gradient-primary/10 rounded-lg p-3">
                      <p className="text-sm font-medium text-primary">✓ {benefit.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-primary/5 rounded-2xl p-8 text-center border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              The Cost of Doing Nothing
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-destructive text-lg font-semibold mb-2">😰 College</div>
                <p className="text-sm text-muted-foreground">
                  Poor participation grades, missed opportunities in group projects, interview failures
                </p>
              </div>
              <div className="text-center">
                <div className="text-destructive text-lg font-semibold mb-2">💼 Career</div>
                <p className="text-sm text-muted-foreground">
                  Overlooked for promotions, poor performance reviews, missed networking opportunities
                </p>
              </div>
              <div className="text-center">
                <div className="text-destructive text-lg font-semibold mb-2">😔 Personal</div>
                <p className="text-sm text-muted-foreground">
                  Lower self-esteem, social isolation, regret about missed chances
                </p>
              </div>
            </div>
            <Button variant="hero" size="lg">
              Don't Let This Be Your Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}