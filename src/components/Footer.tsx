import { Linkedin, Twitter, Instagram, Youtube, Facebook } from "lucide-react";
import logoLockup from "@/assets/corevia-lockup.png";

const Footer = () => (
  <footer className="bg-emerald-deep text-primary-foreground">
    <div className="container py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div>
        <img src={logoLockup} alt="Corevia Technologies" className="h-14 w-auto object-contain mb-5" loading="lazy" />
        <p className="text-sm text-primary-foreground/70 leading-relaxed">
          Building Technology. Delivering Talent. Trusted US IT staffing and workforce solutions partner.
        </p>
        <div className="flex gap-3 mt-6">
          {[Linkedin, Twitter, Instagram, Youtube, Facebook].map((Icon, i) => (
            <a key={i} href="#" aria-label="social" className="w-9 h-9 rounded-full bg-secondary/20 hover:bg-secondary text-primary-foreground flex items-center justify-center transition-smooth">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-display font-bold mb-4">Company</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          {["About", "Services", "Careers", "Contact"].map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-secondary transition-smooth">{l}</a></li>
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
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          <li>32A Barnum Ave</li>
          <li>Plainview, NY 11803</li>
          <li><a href="mailto:info@coreviatechnology.com" className="hover:text-secondary">info@coreviatechnology.com</a></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-primary-foreground/60">
        <p>© {new Date().getFullYear()} Corevia Technologies. All rights reserved.</p>
        <p>Building Technology. Delivering Talent.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
