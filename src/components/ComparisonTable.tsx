import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ComparisonTable() {
  const features = [
    { name: "Session Format", foundation: "Group sessions + daily exercises", confidence: "Group + 1:1 coaching", premium: "1-on-1 Personal" },
    { name: "Session Duration", foundation: "4 weeks", confidence: "4 weeks", premium: "Flexible" },
    { name: "Focus", foundation: "Overcome anxiety, build speaking confidence", confidence: "Workplace & college communication mastery", premium: "Customized anxiety & communication coaching" },
    { name: "Anxiety Management", foundation: "Daily techniques", confidence: "Advanced techniques", premium: "Personalized plan" },
    { name: "Practice Type", foundation: "Group practice, journals", confidence: "Mock interviews, presentations", premium: "Weekly 1:1 sessions" },
    { name: "Support", foundation: "Guided prompts", confidence: "Monthly follow-up", premium: "24/7 WhatsApp support" },
    { name: "Community Access", foundation: "Group only", confidence: "Group only", premium: "Lifetime access" },
    { name: "Best For", foundation: "New to anxiety management", confidence: "Placement/workplace prep", premium: "High-anxiety, intensive support" },
    { name: "Price", foundation: "₹2,499", confidence: "₹4,499", premium: "₹999/session" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Compare Our Programs
          </h2>
          <p className="text-xl text-muted-foreground">
            See which program best fits your anxiety and communication goals.
          </p>
        </div>

        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Program Comparison</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold text-foreground">Feature</th>
                    <th className="text-center p-4 font-semibold text-foreground">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-2xl">🌱</span>
                        <span>Foundation Program</span>
                      </div>
                    </th>
                    <th className="text-center p-4 font-semibold text-foreground">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-2xl">🚀</span>
                        <span>Confidence Boost</span>
                        <span className="text-xs bg-gradient-primary text-white px-2 py-1 rounded-full">Most Popular</span>
                      </div>
                    </th>
                    <th className="text-center p-4 font-semibold text-foreground">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-2xl">🌟</span>
                        <span>Premium 1:1 Coaching</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={index} className={`border-b border-border/50 ${index % 2 === 0 ? 'bg-muted/20' : 'bg-background'}`}>
                      <td className="p-4 font-medium text-foreground">{feature.name}</td>
                      <td className="p-4 text-center text-muted-foreground">{feature.foundation}</td>
                      <td className="p-4 text-center text-muted-foreground">{feature.confidence}</td>
                      <td className="p-4 text-center text-muted-foreground">{feature.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}