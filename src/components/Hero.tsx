import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImg from "@/assets/hero-hiring.jpg";

const Hero = () => (
  <section
    id="home"
    className="relative pt-28 lg:pt-32 pb-20 lg:pb-24 overflow-hidden bg-gradient-warm"
  >
    {/* Decorative background accents */}
    <div className="pointer-events-none absolute inset-0 -z-0 opacity-70">
      <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-[32rem] h-[32rem] rounded-full bg-secondary/20 blur-3xl" />
    </div>

    <div className="container relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left — Text content */}
        <div className="animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/15 border border-secondary/40 text-secondary text-xs font-semibold tracking-widest uppercase mb-6">
            US IT Staffing & Workforce Solutions
          </span>

          <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.08] mb-6">
            Build Powerful{" "}
            <span className="bg-gradient-to-r from-gold to-gold-soft bg-clip-text text-transparent">
              Digital Solutions
            </span>{" "}
            for Your Business
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
            We provide modern web development, talent solutions, and IT services
            to help your business grow.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button variant="hero" size="lg" asChild>
              <a href="#services">
                Our Services <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
              <a href="#contact">
                <Phone className="mr-1" /> Contact Us
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-lg pt-8 border-t border-border">
            {[
              { n: "500+", l: "Talent Placed" },
              { n: "120+", l: "Enterprise Clients" },
              { n: "24/7", l: "Dedicated Support" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display font-extrabold text-2xl md:text-3xl text-primary">
                  {s.n}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Visual content */}
        <div className="relative animate-fade-up lg:pl-6">
          <div className="relative rounded-3xl overflow-hidden shadow-elegant ring-1 ring-border">
            <img
              src={heroImg}
              alt="Corevia Technologies hiring an IT professional with team in background"
              className="w-full h-[420px] md:h-[520px] object-cover"
              width={1600}
              height={1100}
            />
            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
          </div>

          {/* Floating accent card */}
          <div className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 bg-card border border-border rounded-2xl shadow-card px-5 py-4">
            <div className="w-11 h-11 rounded-full bg-gradient-primary flex items-center justify-center text-secondary-foreground font-display font-extrabold">
              ✦
            </div>
            <div>
              <p className="font-display font-bold text-primary leading-tight">
                Trusted Partner
              </p>
              <p className="text-xs text-muted-foreground">
                For US enterprises nationwide
              </p>
            </div>
          </div>

          {/* Floating accent badge */}
          <div className="hidden md:block absolute -top-4 -right-4 bg-gradient-primary text-secondary-foreground rounded-2xl px-5 py-3 shadow-warm">
            <p className="font-display font-extrabold text-2xl leading-none">15+</p>
            <p className="text-[10px] uppercase tracking-widest mt-1">Years Expertise</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
