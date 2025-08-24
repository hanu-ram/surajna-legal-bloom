import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BadgeCheck, Building2, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/';

  return (
    <main>
      <Helmet>
        <title>Surajna Group – Company Registration & Trademark Services</title>
        <meta name="description" content="Company Registration in India, Trademark Registration Services, and Corporate Compliance. Surajna Group is your trusted partner." />
        <link rel="canonical" href={canonical} />
        <link rel="icon" href="/lovable-uploads/5f0548f5-4c38-4bd1-8a9d-75d0727eecec.png" />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        </div>
        <div className="container flex min-h-[70vh] flex-col items-center justify-center text-center py-24">
          <img
            src="/lovable-uploads/5f0548f5-4c38-4bd1-8a9d-75d0727eecec.png"
            alt="Surajna Group logo"
            className="h-28 max-w-28 object-contain"
            loading="lazy"
          />
          <h1 className="font-display text-4xl md:text-6xl leading-tight max-w-4xl">
            Surajna Group – Your Partner in Business Growth & Protection
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            From startup launch to global expansion, we handle your legal, financial, and strategic needs so you can focus on building your vision. No paperwork headaches. No compliance chaos. Just seamless growth.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact">
              <Button className="h-11 px-6">Get Started</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="h-11 px-6">Book a Free Consultation</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">Services Overview</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-md bg-primary/10 text-primary inline-flex items-center justify-center mb-4">
                <Building2 size={24} />
              </div>
              <h3 className="text-lg font-medium mb-2">Company Registration</h3>
              <p className="text-sm text-muted-foreground">Seamless setup of your Private Limited, LLP, or OPC.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-md bg-primary/10 text-primary inline-flex items-center justify-center mb-4">
                <BadgeCheck size={24} />
              </div>
              <h3 className="text-lg font-medium mb-2">Trademark Registration</h3>
              <p className="text-sm text-muted-foreground">Protect your brand identity with hassle-free trademark services.</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-md bg-primary/10 text-primary inline-flex items-center justify-center mb-4">
                <ClipboardList size={24} />
              </div>
              <h3 className="text-lg font-medium mb-2">Corporate Compliance</h3>
              <p className="text-sm text-muted-foreground">End-to-end solutions for legal and tax compliance.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Why Choose Us</h2>
        <ul className="mx-auto grid max-w-3xl list-disc gap-3 pl-6 text-muted-foreground">
          <li>Over 10 years of combined expertise in business registration & IP protection</li>
          <li>Transparent pricing, no hidden fees</li>
          <li>End-to-end support from documentation to approval</li>
          <li>Trusted by 500+ happy clients nationwide</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">FAQs</h2>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="q1">
              <AccordionTrigger>How long does company registration take?</AccordionTrigger>
              <AccordionContent>Typically 5–10 working days depending on approvals and document readiness.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>What are the steps to register a trademark?</AccordionTrigger>
              <AccordionContent>We search, file the application, respond to objections if any, and track until registration.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>Do you offer transparent pricing?</AccordionTrigger>
              <AccordionContent>Yes. We share a fixed quote upfront with no hidden fees.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">What Clients Say</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[1,2,3].map((i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img src="/placeholder.svg" alt="Client profile" className="h-10 w-10 rounded-full" />
                  <div>
                    <p className="text-sm font-medium">Happy Client {i}</p>
                    <p className="text-xs text-muted-foreground">Founder</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">“Great support from start to finish. Highly recommended for startups!”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog preview */}
      <section className="container py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">From the Blog</h2>
          <Link to="/blog" className="text-sm text-primary">View all →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[1,2,3].map((i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-2">Sample Article {i}</h3>
                <p className="text-sm text-muted-foreground">SEO tips on registration, trademarks, and compliance.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Index;
