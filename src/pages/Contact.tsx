import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Map from "@/components/Map";

const Contact = () => {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/contact';
  const { toast } = useToast();
  const [mapToken, setMapToken] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast({ title: "Message sent", description: "Thanks! We’ll get back to you shortly." });
    (e.currentTarget as HTMLFormElement).reset();
  }

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Contact Surajna Group | Business Setup & Trademark</title>
        <meta name="description" content="Get in touch for company registration, trademark services, and corporate compliance support." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <section className="container py-16 grid gap-12 md:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl md:text-5xl mb-4">We’re here to help</h1>
          <p className="text-muted-foreground mb-6">We’re just one call away from your business success!</p>

          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input name="name" placeholder="Name" required aria-label="Name" />
              <Input name="email" type="email" placeholder="Email" required aria-label="Email" />
            </div>
            <Input name="phone" placeholder="Phone" aria-label="Phone" />
            <Textarea name="message" placeholder="Message" required aria-label="Message" />
            <Button type="submit" className="w-full md:w-auto">Send Message</Button>
          </form>

          <div className="mt-8 text-sm space-y-1">
            <p>Email: contact@surajnagroup.in</p>
            <p>Phone: +91-00000-00000</p>
            <p>WhatsApp: to be provided</p>
          </div>
        </div>
        <div>
          <div className="mb-3 text-sm text-muted-foreground">
            For production, add your Mapbox public token in Supabase Edge Function Secrets. For now, enter a temporary token to preview the map.
          </div>
          <Input value={mapToken} onChange={(e) => setMapToken(e.target.value)} placeholder="Mapbox public token" aria-label="Mapbox public token" />
          <div className="mt-4 rounded-lg overflow-hidden border">
            <Map token={mapToken} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
