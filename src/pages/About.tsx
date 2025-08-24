import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, BadgeCheck, ClipboardList, BarChart, Globe, HeartHandshake } from "lucide-react";

const About = () => {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/about';
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>About Surajna Group | Who We Are</title>
        <meta name="description" content="Surajna — Your Growth Partner in Business Success. From startup launch to global expansion, we handle your legal, financial, and strategic needs." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      {/* Hero Section */}
      <section className="container py-16">
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 p-8 md:p-12">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative">
            <h1 className="font-display text-4xl md:text-5xl mb-4 flex items-center gap-2">
              <img 
                src="/lovable-uploads/5f0548f5-4c38-4bd1-8a9d-75d0727eecec.png" 
                alt="Surajna Group logo" 
                className="h-15 max-w-20 object-contain"
              />
              Surajna — Your Growth Partner in Business Success
            </h1>
            <p className="text-muted-foreground max-w-3xl text-lg mb-6">
              From startup launch to global expansion, we handle your legal, financial, and strategic needs so you can focus on building your vision.
              No paperwork headaches. No compliance chaos. Just seamless growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button className="h-11 px-6">Book a Free Consultation</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Surajna */}
      <section className="container py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">🌟 Why Choose Surajna?</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-3">End-to-End Expertise</h3>
              <p className="text-muted-foreground">From company incorporation to international structuring — we've got it all covered.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-3">Trusted by Founders & CEOs</h3>
              <p className="text-muted-foreground">We act as your extended CFO & compliance team.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-medium mb-3">Scalable Support</h3>
              <p className="text-muted-foreground">Whether you're a bootstrapped startup or a growing enterprise, our solutions adapt to you.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Services */}
      <section className="container py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">📈 Our Services</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-md bg-primary/10 text-primary inline-flex items-center justify-center mb-4">
                <Building2 size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Startup Launch & Legal Setup</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Company incorporation & government registrations</li>
                <li>• Intellectual property (IP) protection</li>
                <li>• Legal documentation & advisory for risk-free operations</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-md bg-primary/10 text-primary inline-flex items-center justify-center mb-4">
                <ClipboardList size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Accounting & Reporting</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Cloud-based bookkeeping for real-time accuracy</li>
                <li>• Custom MIS reports & interactive dashboards</li>
                <li>• Audit-ready financial documentation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-md bg-primary/10 text-primary inline-flex items-center justify-center mb-4">
                <BadgeCheck size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Taxation & Compliance</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• GST, TDS & Income Tax filing made simple</li>
                <li>• Automated due-date tracking</li>
                <li>• Regulatory alerts so you're always compliant</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-md bg-primary/10 text-primary inline-flex items-center justify-center mb-4">
                <BarChart size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Strategic Financial Advisory</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Financial modeling for smarter decisions</li>
                <li>• Fundraising & investor pitch preparation</li>
                <li>• Valuation, mergers & acquisitions planning</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-md bg-primary/10 text-primary inline-flex items-center justify-center mb-4">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-medium mb-3">Global Expansion Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Overseas incorporation & market entry strategy</li>
                <li>• Transfer pricing & structuring compliance</li>
                <li>• Virtual CFO services for cross-border operations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="container py-12 bg-muted/30 rounded-lg my-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">🏭 Industries We Serve</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-4">
            <h3 className="text-xl font-medium mb-2">Technology & SaaS</h3>
            <p className="text-muted-foreground">Scalable frameworks for fast-moving startups</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-medium mb-2">Healthcare & Pharma</h3>
            <p className="text-muted-foreground">Precision compliance in sensitive industries</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-medium mb-2">Retail & E-Commerce</h3>
            <p className="text-muted-foreground">Data-driven growth & reporting</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-medium mb-2">Media & Creative Startups</h3>
            <p className="text-muted-foreground">Flexible, project-based financial solutions</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-medium mb-2">Manufacturing & Industrial</h3>
            <p className="text-muted-foreground">Process-focused operational support</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-medium mb-2">Real Estate & Infrastructure</h3>
            <p className="text-muted-foreground">Structuring large-scale investments</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">❤️ What Our Clients Say</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary inline-flex items-center justify-center">
                  <HeartHandshake size={24} />
                </div>
                <div>
                  <p className="text-lg font-medium">Kritika T.</p>
                  <p className="text-sm text-muted-foreground">Co-Founder, MetaGlow Health</p>
                </div>
              </div>
              <p className="text-muted-foreground">"Surajna made our startup launch seamless — no paperwork worries, just progress. Their team feels like an extension of ours."</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary inline-flex items-center justify-center">
                  <HeartHandshake size={24} />
                </div>
                <div>
                  <p className="text-lg font-medium">Rohan A.</p>
                  <p className="text-sm text-muted-foreground">CTO, Clustrix Retail</p>
                </div>
              </div>
              <p className="text-muted-foreground">"We raised funding while they handled compliance and reporting. Surajna helped us stay sharp during scale."</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Team */}
      <section className="container py-12">
        <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3].map((i) => (
            <article key={i} className="rounded-lg border bg-card p-6 shadow-sm">
              <img src="/placeholder.svg" alt="Team member portrait" className="mb-4 h-32 w-32 rounded-full object-cover" />
              <h3 className="text-lg font-medium">Team Member {i}</h3>
              <p className="text-sm text-muted-foreground">Expert in company formation and IP protection.</p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container py-12 mb-16">
        <div className="rounded-lg border bg-card p-8">
          <h2 className="text-3xl font-semibold mb-6 text-center">📞 Let's Build Your Business — The Right Way</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-center">
            <div>
              <h3 className="text-lg font-medium mb-2">📍 Location</h3>
              <p className="text-muted-foreground">Bengaluru, India</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">📱 WhatsApp</h3>
              <p className="text-muted-foreground">+91 XXXXXXXXXX</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">📧 Email</h3>
              <p className="text-muted-foreground">hello@surajna.com</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg mb-6">🌐 Visit: <a href="http://www.surajna.com" className="text-primary hover:underline">www.surajna.com</a></p>
            <p className="text-lg font-medium">💡 Act now: Book your free 20-minute consultation and see how Surajna can save you time, money, and sleepless nights.</p>
            <div className="mt-6">
              <Link to="/contact">
                <Button size="lg" className="px-8">Book a Free Consultation</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
