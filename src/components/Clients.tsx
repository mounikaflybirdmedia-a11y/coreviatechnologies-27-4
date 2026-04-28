import React from "react";

const clients = [
  { name: "E*TRADE", abbr: "ET", color: "#6B21A8" },
  { name: "DTCC", abbr: "DTCC", color: "#0F4C81" },
  { name: "USAA", abbr: "USAA", color: "#1A3A6B" },
  { name: "Walmart", abbr: "WMT", color: "#0071CE" },
  { name: "Everlaw", abbr: "EL", color: "#1E6B52" },
];

// Duplicate for seamless infinite scroll
const marqueeClients = [...clients, ...clients, ...clients];

const ClientCard = ({ name, abbr, color }: { name: string; abbr: string; color: string }) => (
  <div
    className="flex-shrink-0 flex items-center gap-3 bg-card border border-border rounded-2xl px-8 py-5 shadow-card mx-4 hover:shadow-elegant hover:border-primary/40 transition-smooth hover:-translate-y-1"
    style={{ minWidth: "200px" }}
  >
    {/* Logo placeholder with brand initials */}
    <div
      className="w-11 h-11 rounded-xl flex items-center justify-center font-display font-bold text-white text-xs"
      style={{ background: color, boxShadow: `0 4px 14px ${color}55` }}
    >
      {abbr}
    </div>
    <span className="font-display font-semibold text-base text-foreground whitespace-nowrap">
      {name}
    </span>
  </div>
);

const Clients = () => (
  <section id="clients" className="py-20 bg-background overflow-hidden">
    {/* Header */}
    <div className="container text-center mb-12">
      <span className="text-primary font-semibold tracking-widest text-xs uppercase">
        Trusted By
      </span>
      <h2 className="font-display font-bold text-3xl md:text-4xl mt-3 mb-4 text-foreground">
        Our Clients
      </h2>
      <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
        Industry-leading enterprises trust Corevia Technologies to power their
        workforce and technology initiatives.
      </p>
    </div>

    {/* Infinite Marquee */}
    <div className="relative w-full">
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, hsl(222 47% 6%) 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, hsl(222 47% 6%) 0%, transparent 100%)",
        }}
      />


      {/* Scrolling track */}
      <div
        className="flex"
        style={{
          animation: "marquee-scroll 28s linear infinite",
          width: "max-content",
        }}
      >
        {marqueeClients.map((client, i) => (
          <ClientCard key={`${client.name}-${i}`} {...client} />
        ))}
      </div>
    </div>

    {/* Marquee keyframe injected via style tag */}
    <style>{`
      @keyframes marquee-scroll {
        0%   { transform: translateX(0); }
        100% { transform: translateX(calc(-100% / 3)); }
      }
    `}</style>
  </section>
);

export default Clients;
