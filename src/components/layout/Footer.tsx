import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/lovable-uploads/5f0548f5-4c38-4bd1-8a9d-75d0727eecec.png" alt="Surajna Group logo" className="h-8 w-8" />
            <span className="font-display text-xl">Surajna Group</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Your partner in business growth & brand protection.</p>
        </div>
        <div>
          <h3 className="font-medium mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Company Registration</li>
            <li>Trademark Registration</li>
            <li>Corporate Compliance</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: contact@surajnagroup.in</li>
            <li>Phone: +91-00000-00000</li>
            <li>WhatsApp: to be provided</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">© {year} Surajna Group. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
