import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "I get very anxious when speaking. Will this really help me?",
      answer: "Absolutely! Our programs are specifically designed for people with speaking anxiety. We use proven techniques like breathing exercises, gradual exposure, and daily practice to help you manage anxiety while building confidence. Most participants see noticeable improvement within the first week."
    },
    {
      question: "Is this therapy or coaching?",
      answer: "We provide communication coaching and practical anxiety management techniques, not clinical therapy. Our focus is on building speaking confidence through real-world practice, daily exercises, and proven anxiety reduction methods."
    },
    {
      question: "I'm a college student - will this help with presentations and group discussions?",
      answer: "Yes! Our programs include specific practice for college scenarios like class participation, group discussions, presentations, and interview preparation. We help you speak confidently in academic settings without the anxiety."
    },
    {
      question: "What if I freeze up or go blank during the sessions?",
      answer: "That's completely normal and exactly why you need our program! We create a safe, supportive environment where freezing up is part of the learning process. Our coaches are trained to help you work through these moments and build strategies to prevent them."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most participants notice reduced anxiety and improved confidence within the first week. By week 4, you'll have practical tools, daily habits, and real experience speaking in challenging situations. The changes are both immediate and long-lasting."
    },
    {
      question: "Do you provide ongoing support after the program?",
      answer: "Yes! Foundation Program includes 1 month follow-up support, Confidence Boost includes 3 months, and Premium includes lifetime community access. We also offer refresher sessions and advanced programs for continued growth."
    },
    {
      question: "What if I'm not fluent in English?",
      answer: "Basic English is enough to start. We focus more on confidence and reducing anxiety than perfect fluency. Many of our participants improve their English naturally as their confidence grows and anxiety decreases."
    },
    {
      question: "Can working professionals join the same program as students?",
      answer: "Yes! While scenarios may differ (workplace meetings vs. classroom discussions), the core anxiety and confidence challenges are similar. We tailor practice sessions to include both college and workplace scenarios."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Common Concerns About Anxiety & Speaking
            </h2>
            <p className="text-xl text-muted-foreground">
              We understand your fears and hesitations. Here are honest answers to help you make the right decision.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border border-border shadow-soft px-6"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.linkedin.com/company/speakub" 
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth"
              >
                Contact Us (LinkedIn)
              </a>
              <a 
                href="https://www.instagram.com/spee_kub?igsh=MTdncTMzZWpsbmlreQ%3D%3D&utm_source=qr" 
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-lg hover:opacity-90 transition-smooth"
              >
                Contact Us (Instagram)
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-smooth"
              >
                Book Free Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}