import { Button } from "@/components/ui/button";

export function AnxietyImpactSection() {
  const stats = [
    {
      number: "74%",
      label: "of people suffer from speech anxiety",
      impact: "More common than fear of death (68%)",
      color: "text-destructive"
    },
    {
      number: "67%",
      label: "avoid speaking opportunities due to fear",
      impact: "Missing promotions & academic success",
      color: "text-orange-500"
    },
    {
      number: "43%",
      label: "report anxiety blocks their career growth",
      impact: "Losing ₹2-5 lakhs annually in opportunities",
      color: "text-red-500"
    },
    {
      number: "89%",
      label: "wish they had learned to manage it earlier",
      impact: "Regret waiting too long to get help",
      color: "text-destructive"
    }
  ];

  const progressBars = [
    { label: "Public Speaking", percentage: 95, color: "bg-destructive" },
    { label: "Job Interviews", percentage: 87, color: "bg-orange-500" },
    { label: "Team Meetings", percentage: 73, color: "bg-yellow-500" },
    { label: "Client Calls", percentage: 68, color: "bg-red-500" },
    { label: "Group Discussions", percentage: 81, color: "bg-pink-500" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-destructive/5 to-orange-500/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              The Hidden Cost of <span className="text-destructive">Communication Anxiety</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Research shows that <strong>communication is the skill most affected by anxiety</strong> - 
              and it's costing people their dreams, careers, and confidence every single day.
            </p>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 inline-block">
              <p className="text-destructive font-semibold">
                ⚠️ Anxiety doesn't just make you nervous - it actively sabotages your ability to communicate
              </p>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft text-center border-l-4 border-destructive/30">
                <div className={`text-4xl lg:text-5xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-foreground font-semibold mb-2 text-sm">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.impact}
                </div>
              </div>
            ))}
          </div>

          {/* Communication Areas Most Affected */}
          <div className="bg-card rounded-2xl p-8 shadow-medium mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Communication Areas Most Affected by Anxiety
            </h3>
            <div className="space-y-4">
              {progressBars.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                    <span className="text-sm text-muted-foreground">{item.percentage}% affected</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-1000 ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The Real Cost */}
          <div className="bg-gradient-to-r from-destructive/10 to-orange-500/10 rounded-2xl p-8 border border-destructive/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  The Real Cost of Waiting
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive text-lg">💸</span>
                    <span>Average ₹3.2 lakhs lost annually in missed opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive text-lg">📉</span>
                    <span>67% slower career progression compared to confident speakers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive text-lg">😔</span>
                    <span>3x higher chance of avoiding leadership roles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive text-lg">⏰</span>
                    <span>Average person waits 8 years before seeking help</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-card rounded-xl p-6 shadow-soft">
                  <div className="text-3xl font-bold text-destructive mb-2">₹25,60,000</div>
                  <div className="text-sm text-muted-foreground mb-4">
                    Estimated lifetime earnings lost due to communication anxiety
                  </div>
                  <div className="text-xs text-muted-foreground">
                    *Based on career progression studies
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-lg font-semibold text-foreground mb-4">
                But here's the good news: <span className="text-success">This is 100% fixable</span>
              </p>
              <p className="text-muted-foreground mb-6">
                Our 4-week program costs less than what most people lose in one missed opportunity
              </p>
              <Button variant="hero" size="xl" className="shadow-lg">
                Stop Losing Money to Anxiety - Start Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}