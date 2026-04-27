import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/about-team.jpg";

const points = [
  "Trusted US IT staffing and workforce solutions partner",
  "Rigorous vetting matches expertise to client requirements",
  "Flexible engagement models — contract, contract-to-hire, direct hire",
  "Dedicated account management with seamless support",
];

const About = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container grid lg:grid-cols-2 gap-14 items-center">
      <div className="relative">
        <img
          src={aboutImg}
          alt="Corevia Technologies consulting team collaborating"
          className="rounded-2xl shadow-elegant w-full object-cover"
          loading="lazy"
          width={1024}
          height={1024}
        />
        <div className="absolute -bottom-6 -right-6 hidden md:block bg-gradient-primary text-primary-foreground px-6 py-5 rounded-xl shadow-glow">
          <p className="font-display font-extrabold text-3xl">15+</p>
          <p className="text-xs uppercase tracking-widest">Years Combined Expertise</p>
        </div>
      </div>

      <div>
        <span className="text-secondary font-semibold tracking-widest text-xs uppercase">About Corevia</span>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mt-3 mb-6">
          A bridge between <span className="text-secondary">talent</span> and opportunity.
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-5">
          Corevia Technologies is a trusted partner in US IT staffing and workforce solutions.
          We specialize in connecting top-tier technology talent with leading enterprises across the
          United States, ensuring the right match between client requirements and candidate expertise.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          With a focus on quality, speed, and reliability, we work closely with our clients to understand their
          business needs and deliver tailored staffing solutions that drive success. We are more than a
          staffing company — we empower businesses with the right workforce while helping professionals
          achieve their career goals.
        </p>

        <ul className="space-y-3 mb-8">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <CheckCircle2 className="text-secondary mt-0.5 shrink-0" size={20} />
              <span className="text-foreground/90">{p}</span>
            </li>
          ))}
        </ul>

        <Button variant="hero" size="lg" asChild>
          <a href="#contact">Partner With Us</a>
        </Button>
      </div>
    </div>
  </section>
);

export default About;
