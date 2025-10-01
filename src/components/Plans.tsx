import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Plans() {
  const plans = [
    {
      id: "foundation",
      name: "Foundation Program",
      subtitle: "4-Week Group Program",
      icon: "🌱",
      format: "Group sessions + daily exercises",
      focus: "Overcome anxiety, build speaking confidence",
      highlights: [
        "Daily anxiety management techniques",
        "Group practice in safe environment", 
        "Guided journals & prompts",
        "Real-life scenario practice"
      ],
      bestFor: "College students and professionals new to anxiety management",
      popular: false,
      price: "₹2,499"
    },
    {
      id: "confidence-boost",
      name: "Confidence Boost Program", 
      subtitle: "4-Week Intensive",
      icon: "🚀",
      format: "Group sessions + 1:1 coaching",
      focus: "Workplace & college communication mastery",
      highlights: [
        "Mock interviews & presentations",
        "Client call & meeting practice",
        "Advanced anxiety techniques",
        "Monthly follow-up support"
      ],
      bestFor: "Students preparing for placements or professionals wanting workplace confidence",
      popular: true,
      price: "₹4,499"
    },
    {
      id: "premium", 
      name: "Premium 1:1 Coaching",
      subtitle: "Personalized Anxiety Coaching",
      icon: "🌟",
      format: "One-on-one sessions + unlimited support",
      focus: "Customized anxiety & communication coaching",
      highlights: [
        "Personalized action plan",
        "Weekly 1:1 sessions", 
        "24/7 WhatsApp support",
        "Lifetime community access"
      ],
      bestFor: "High-anxiety individuals who need intensive, personalized support",
      popular: false,
      price: "₹999/session"
    }
  ];

  return (
    <section id="plans" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your Path to Confidence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop letting anxiety control your speaking. Our programs help college students and 
            working professionals communicate confidently in real-life situations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative transition-smooth hover:shadow-medium ${
                plan.popular ? 'ring-2 ring-primary shadow-medium' : 'shadow-soft'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-2">{plan.icon}</div>
                <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground font-medium">
                  {plan.subtitle}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Format</h4>
                  <p className="text-muted-foreground text-sm">{plan.format}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Focus</h4>
                  <p className="text-muted-foreground text-sm">{plan.focus}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Highlights</h4>
                  <ul className="space-y-2">
                    {plan.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Best For</h4>
                  <p className="text-sm text-muted-foreground">{plan.bestFor}</p>
                </div>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-foreground mb-1">{plan.price}</div>
                  {plan.id !== "premium" && <div className="text-sm text-muted-foreground">One-time payment</div>}
                </div>
                
                <a href="#contact" className="w-full">
                  <Button 
                    variant={plan.popular ? "hero" : "default"} 
                    className="w-full"
                    size="lg"
                  >
                    {plan.id === "foundation" ? "Start Foundation Program" : 
                     plan.id === "confidence-boost" ? "Enroll Now" : "Book 1:1 Session"}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Not sure which plan is right for you?
          </p>
          <a href="#contact">
            <Button variant="outline" size="lg">
              Book Free Demo
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}