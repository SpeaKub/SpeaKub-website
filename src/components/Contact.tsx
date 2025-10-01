import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

export function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch("https://sheetdb.io/api/v1/abp1gc65oi41v", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phone: form.phone,
            program: form.program,
            message: form.message
          }
        })
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ firstName: "", lastName: "", email: "", phone: "", program: "", message: "" });
      } else {
        setError("Submission failed. Please try again.");
      }
    } catch {
      setError("Submission failed. Please try again.");
    }
    setSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground">
              Get in touch with us today and take the first step towards confident communication.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" value={form.firstName} onChange={handleChange} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" value={form.lastName} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" value={form.email} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" value={form.phone} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="program">Interested Program</Label>
                    <select 
                      id="program" 
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      value={form.program}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a program</option>
                      <option value="demo">Let's have a chat!</option>
                      <option value="trial">Foundation Program </option>
                      <option value="job-ready">Confidence Boost</option>
                      <option value="accelerator">Premium (1-on-1)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your availability for sessions or just basic chatting, communication goals and any questions you have..."
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                  <Button variant="hero" size="lg" className="w-full" type="submit" disabled={submitting}>
                    {submitting ? "Submitting..." : "Send Message"}
                  </Button>
                  {success && <p className="text-success text-center">Thank you! Your response has been recorded.</p>}
                  {error && <p className="text-destructive text-center">{error}</p>}
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                      <p className="text-primary font-medium">contact@speakub.qzz.io</p>
                      <p className="text-sm text-muted-foreground mt-2">We respond within 24 hours.</p>
                      
                      
                    </div>
                  </div>
                </CardContent>
              </Card>


                <Card className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        {/* LinkedIn SVG Icon */}
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="32" height="32" rx="8" fill="#0A66C2"/>
                          <path d="M10.5 13.5H13.5V22H10.5V13.5ZM12 12C12.8284 12 13.5 11.3284 13.5 10.5C13.5 9.67157 12.8284 9 12 9C11.1716 9 10.5 9.67157 10.5 10.5C10.5 11.3284 11.1716 12 12 12ZM15 13.5H18V14.75C18.5 13.75 19.5 13.5 20.5 13.5C22.5 13.5 23 14.75 23 16.75V22H20V17.5C20 16.5 19.5 16 18.75 16C18 16 17.5 16.5 17.5 17.5V22H15V13.5Z" fill="white"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">LinkedIn</h3>
                        <a href="https://www.linkedin.com/company/speakub" target="_blank" rel="noopener noreferrer" className="text-primary underline font-medium">linkedin.com/company/speakub</a>
                        <p className="text-sm text-muted-foreground mt-2">Stay informed about new programs, success stories, and industry insights.</p>
                        
                        
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        {/* Instagram SVG Icon */}
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="32" height="32" rx="8" fill="#E1306C"/>
                          <path d="M22 10C22 9.44772 21.5523 9 21 9H11C10.4477 9 10 9.44772 10 10V22C10 22.5523 10.4477 23 11 23H21C21.5523 23 22 22.5523 22 22V10ZM16 20C13.7909 20 12 18.2091 12 16C12 13.7909 13.7909 12 16 12C18.2091 12 20 13.7909 20 16C20 18.2091 18.2091 20 16 20ZM21 12.5C21.2761 12.5 21.5 12.2761 21.5 12C21.5 11.7239 21.2761 11.5 21 11.5C20.7239 11.5 20.5 11.7239 20.5 12C20.5 12.2761 20.7239 12.5 21 12.5ZM16 13.5C14.6193 13.5 13.5 14.6193 13.5 16C13.5 17.3807 14.6193 18.5 16 18.5C17.3807 18.5 18.5 17.3807 18.5 16C18.5 14.6193 17.3807 13.5 16 13.5Z" fill="white"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Instagram</h3>
                        <a href="https://www.instagram.com/spee_kub?igsh=MTdncTMzZWpsbmlreQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-primary underline font-medium">@speakub</a>
                        <p className="text-sm text-muted-foreground mt-2">Join our Instagram community for daily inspiration, anxiety tips, and real student stories. </p>
                        
                        
                      </div>
                    </div>
                  </CardContent>
                </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📅</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Let's have a chat</h3>
                      <p className="text-muted-foreground mb-3">
                        Experience our teaching style, see if we match your vibe without any risks or long term commitment.
                      </p>
                      <a href="#contact">
                        <Button variant="outline">
                          Fill the Form
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}