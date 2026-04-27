import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoLockup from "@/assets/corevia-lockup.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const y = window.scrollY + 120;
      let current = "#home";
      for (const l of links) {
        const el = document.querySelector(l.href);
        if (el && (el as HTMLElement).offsetTop <= y) current = l.href;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <nav className="container flex items-center justify-between h-20">
        <a href="#home" className="flex items-center" aria-label="Corevia Technologies">
          <img
            src={logoLockup}
            alt="Corevia Technologies"
            className="h-12 md:h-14 w-auto object-contain rounded-md"
          />
        </a>

        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative px-2 lg:px-3 py-2 text-sm font-semibold rounded-md transition-smooth ${
                    isActive
                      ? "text-secondary"
                      : "text-foreground/75 hover:text-primary"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute left-2 right-2 lg:left-3 lg:right-3 -bottom-0.5 h-0.5 rounded-full bg-secondary transition-smooth ${
                      isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Button variant="hero" size="default" className="lg:h-11 lg:px-8" asChild>
            <a href="#contact">Request Talent</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block py-3 px-2 font-semibold text-foreground/85 hover:text-secondary border-b border-border/60"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <Button variant="hero" className="mt-3" asChild>
              <a onClick={() => setOpen(false)} href="#contact">Request Talent</a>
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
