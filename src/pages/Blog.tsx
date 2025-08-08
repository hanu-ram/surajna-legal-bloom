import { Helmet } from "react-helmet-async";

const Blog = () => {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/blog';
  const posts = [
    { slug: 'register-company-india', title: 'How to Register a Company in India', excerpt: 'A practical, step-by-step guide to your company incorporation.' },
    { slug: 'benefits-trademark-registration', title: 'Benefits of Trademark Registration', excerpt: 'Why brand protection matters and how to get it right.' },
    { slug: 'corporate-compliance-checklist', title: 'Corporate Compliance Checklist for Startups', excerpt: 'Stay compliant with this simple, actionable checklist.' },
  ];

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Blog | Company Registration & Trademark Guides</title>
        <meta name="description" content="SEO-focused articles on business setup, trademark registration, and corporate compliance in India." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <section className="container py-16">
        <h1 className="font-display text-4xl md:text-5xl mb-6">Insights & Guides</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.slug} className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
              <p className="text-sm text-muted-foreground mb-4">{p.excerpt}</p>
              <a href="#" className="text-primary text-sm">Read more →</a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blog;
