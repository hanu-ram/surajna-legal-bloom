import { Helmet } from "react-helmet-async";

const About = () => {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/about';
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>About Surajna Group | Who We Are</title>
        <meta name="description" content="Surajna Group makes business setup and brand protection easy, transparent, and affordable for entrepreneurs in India." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <section className="container py-16">
        <h1 className="font-display text-4xl md:text-5xl mb-4">Who We Are</h1>
        <p className="text-muted-foreground max-w-3xl">Surajna Group was founded with the mission to make business setup and brand protection easy, transparent, and affordable for entrepreneurs. We believe every business deserves the right foundation to grow without legal or compliance hassles.</p>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
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
    </main>
  );
};

export default About;
