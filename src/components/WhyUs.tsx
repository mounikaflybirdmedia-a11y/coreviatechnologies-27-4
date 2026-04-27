import { Zap, Target, HeartHandshake, Trophy } from "lucide-react";

const items = [
  { icon: Target, title: "Quality Match", desc: "Precise alignment of candidate skills with client requirements." },
  { icon: Zap, title: "Speed to Hire", desc: "Rapid sourcing and screening — most roles filled within days." },
  { icon: HeartHandshake, title: "Long-Term Partnership", desc: "Dedicated account managers and consistent communication." },
  { icon: Trophy, title: "Proven Track Record", desc: "Trusted by enterprises across the US for reliable delivery." },
];

const WhyUs = () => (
  <section id="why" className="py-24 bg-gradient-hero text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: 'radial-gradient(circle at 25% 25%, hsl(var(--gold)) 0%, transparent 40%), radial-gradient(circle at 75% 75%, hsl(var(--accent)) 0%, transparent 40%)'
    }} />
    <div className="container relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-secondary font-semibold tracking-widest text-xs uppercase">Why Corevia</span>
        <h2 className="font-display font-bold text-3xl md:text-5xl mt-3 mb-4">The Corevia Advantage</h2>
        <p className="text-primary-foreground/80">
          Quality, speed, and reliability — the principles that drive every engagement.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-7 hover:bg-primary-foreground/10 transition-smooth">
            <Icon className="text-secondary mb-4" size={32} />
            <h3 className="font-display font-bold text-xl mb-2">{title}</h3>
            <p className="text-primary-foreground/75 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
