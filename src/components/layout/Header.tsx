import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/lovable-uploads/5f0548f5-4c38-4bd1-8a9d-75d0727eecec.png"
            alt="Surajna Group logo"
            className="h-10 w-10 object-contain"
            loading="lazy"
          />
          <span className="font-display text-xl">Surajna Group</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={({isActive}) => `text-sm ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground transition-colors'}`}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => `text-sm ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground transition-colors'}`}>About</NavLink>
          <NavLink to="/blog" className={({isActive}) => `text-sm ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground transition-colors'}`}>Blog</NavLink>
          <NavLink to="/contact" className={({isActive}) => `text-sm ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground transition-colors'}`}>Contact</NavLink>
          <Link to="/contact" className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:opacity-90">
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
