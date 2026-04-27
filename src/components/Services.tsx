import { Users, Cpu, Briefcase, Settings, Cloud, ShieldCheck } from "lucide-react";
import staffingImg from "@/assets/svc-staffing.jpg";
import consultingImg from "@/assets/svc-consulting.jpg";
import techImg from "@/assets/svc-tech.jpg";
import managedImg from "@/assets/svc-managed.jpg";
import cloudImg from "@/assets/svc-cloud.jpg";
import workforceImg from "@/assets/svc-workforce.jpg";

const services = [
  {
    icon: Users,
    image: staffingImg,
    title: "IT Staffing",
    desc: "Contract, contract-to-hire, and direct placement of pre-vetted technology professionals across the US.",
  },
  {
    icon: Briefcase,
    image: consultingImg,
    title: "Consulting Services",
    desc: "Strategic advisory and project consulting to help enterprises anticipate and exceed business expectations.",
  },
  {
    icon: Cpu,
    image: techImg,
    title: "Technology Solutions",
    desc: "Implementing leading technologies — cloud, data, AI/ML, and modern application platforms.",
  },
  {
    icon: Settings,
    image: managedImg,
    title: "Managed Services",
    desc: "End-to-end managed delivery for application, infrastructure, and support operations.",
  },
  {
    icon: Cloud,
    image: cloudImg,
    title: "Cloud & DevOps",
    desc: "AWS, Azure, GCP migration, automation, CI/CD pipelines, and 24/7 site reliability engineering.",
  },
  {
    icon: ShieldCheck,
    image: workforceImg,
    title: "Workforce Solutions",
    desc: "Flexible workforce models, payroll, compliance, and onboarding support tailored to your needs.",
  },
];

const Services = () => (
  <section id="services" className="py-24 bg-gradient-warm">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-secondary font-semibold tracking-widest text-xs uppercase">What We Offer</span>
        <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mt-3 mb-4">Our Services</h2>
        <p className="text-muted-foreground">
          Tailored staffing and technology services designed to help US enterprises move faster, scale smarter, and hire the right talent.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {services.map(({ icon: Icon, title, desc, image }) => (
          <article
            key={title}
            className="group bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={image}
                alt={`${title} – Corevia Technologies`}
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
              <div className="absolute bottom-3 left-3 w-12 h-12 rounded-xl bg-gradient-primary text-secondary-foreground flex items-center justify-center shadow-warm">
                <Icon size={22} />
              </div>
            </div>
            <div className="p-7">
              <h3 className="font-display font-bold text-xl text-primary mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
