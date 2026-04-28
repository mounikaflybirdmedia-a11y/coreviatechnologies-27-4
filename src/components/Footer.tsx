import { Linkedin, Twitter, Instagram, Youtube, Facebook } from "lucide-react";
import coreviaNewLogo from "@/assets/corevia-new-logo.png";

const Footer = () => (
  <footer className="bg-background border-t border-border text-foreground">
    <div className="container py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div>
        {/* ── Logo ── */}
        <div className="mb-5">
          <img
            src={coreviaNewLogo}
            alt="Corevia Technologies"
            className="h-20 w-auto object-contain"
            style={{ mixBlendMode: "screen", filter: "brightness(1.1) contrast(1.05)" }}
            loading="lazy"
          />
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Building Technology. Delivering Talent. Trusted US IT staffing and workforce solutions partner.
        </p>
        <div className="flex gap-3 mt-6">
          {[Linkedin, Twitter, Instagram, Youtube, Facebook].map((Icon, i) => (
            <a key={i} href="#" aria-label="social" className="w-9 h-9 rounded-full bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground flex items-center justify-center transition-smooth">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-display font-bold mb-4">Company</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          {["About", "Services", "Careers", "Contact"].map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-smooth">{l}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display font-bold mb-4">Services</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          {["IT Staffing", "Consulting", "Tech Solutions", "Managed Services", "Cloud & DevOps"].map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display font-bold mb-4">Contact</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>32A Barnum Ave</li>
          <li>Plainview, NY 11803</li>
          <li><a href="mailto:info@coreviatechnology.com" className="hover:text-primary">info@coreviatechnology.com</a></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-border">
      <div className="container py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-xs text-muted-foreground/70">© {new Date().getFullYear()} Corevia Technologies. All rights reserved.</p>
        <p className="text-xs text-muted-foreground/70">Building Technology. Delivering Talent.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
