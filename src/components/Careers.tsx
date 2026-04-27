import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Rocket } from "lucide-react";

const Careers = () => (
  <section id="careers" className="py-24 bg-background">
    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <span className="text-secondary font-semibold tracking-widest text-xs uppercase">Careers</span>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mt-3 mb-6">
          Build your career with Corevia.
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Whether you're a seasoned technology professional or just starting your journey,
          Corevia connects you with opportunities at top US enterprises. We invest in our people
          with continuous learning, competitive benefits, and meaningful projects.
        </p>
        <Button variant="hero" size="lg" asChild>
          <a href="#contact">Submit Your Resume</a>
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {[
          { icon: Briefcase, title: "Top Roles", text: "Cloud, Data, AI, DevOps, Full-Stack and more." },
          { icon: GraduationCap, title: "Skill Growth", text: "Certification support and mentorship." },
          { icon: Rocket, title: "Fast Placement", text: "From application to onboarding in days." },
          { icon: Briefcase, title: "Nationwide", text: "Opportunities across all 50 US states." },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="bg-gradient-card border border-border rounded-xl p-6 shadow-card">
            <Icon className="text-secondary mb-3" size={24} />
            <h3 className="font-display font-bold text-lg text-primary mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Careers;
