import { Zap, Target, HeartHandshake, Trophy } from "lucide-react";

const items = [
  { icon: Target, title: "Quality Match", desc: "Precise alignment of candidate skills with client requirements." },
  { icon: Zap, title: "Speed to Hire", desc: "Rapid sourcing and screening — most roles filled within days." },
  { icon: HeartHandshake, title: "Long-Term Partnership", desc: "Dedicated account managers and consistent communication." },
  { icon: Trophy, title: "Proven Track Record", desc: "Trusted by enterprises across the US for reliable delivery." },
];

const WhyUs = () => (
  <section id="why" className="py-24 bg-gradient-hero relative overflow-hidden">
    {/* Subtle cyan/blue ambient glow */}
    <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
      backgroundImage: 'radial-gradient(circle at 25% 25%, hsl(193 100% 50%) 0%, transparent 45%), radial-gradient(circle at 75% 75%, hsl(217 91% 60%) 0%, transparent 45%)'
    }} />

    <div className="container relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-primary font-semibold tracking-widest text-xs uppercase">Why Corevia</span>
        <h2 className="font-display font-bold text-3xl md:text-5xl mt-3 mb-4 text-foreground">
          The Corevia Advantage
        </h2>
        <p className="text-muted-foreground">
          Quality, speed, and reliability — the principles that drive every engagement.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-7 hover:border-primary/50 hover:bg-card transition-smooth group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-smooth">
              <Icon className="text-primary" size={24} />
            </div>
            <h3 className="font-display font-bold text-xl mb-2 text-foreground">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
