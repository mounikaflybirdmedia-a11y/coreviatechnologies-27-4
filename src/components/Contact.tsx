import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, User } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks! We'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-muted/40">
      <div className="container grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <span className="text-secondary font-semibold tracking-widest text-xs uppercase">Get in Touch</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-primary mt-3 mb-6">
            Let's build your team.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Tell us about your hiring needs or career goals — our team will respond within one business day.
          </p>

          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                <User size={18} />
              </div>
              <div>
                <p className="font-semibold text-primary">Sai Srinivas Madamoni</p>
                <p className="text-sm text-muted-foreground">Founder</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                <User size={18} />
              </div>
              <div>
                <p className="font-semibold text-primary">Gagan Somlok</p>
                <p className="text-sm text-muted-foreground">Managing Director &amp; Co-Founder</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="font-semibold text-primary">Headquarters</p>
                <p className="text-sm text-muted-foreground">32A Barnum Ave, Plainview, NY 11803</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="font-semibold text-primary">Email</p>
                <a href="mailto:info@coreviatechnology.com" className="text-sm text-muted-foreground hover:text-secondary">
                  info@coreviatechnology.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <p className="font-semibold text-primary">Phone</p>
                <p className="text-sm text-muted-foreground">+1 (516) 000-0000</p>
              </div>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="lg:col-span-3 bg-background rounded-2xl p-8 md:p-10 shadow-elegant border border-border">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" required className="mt-2" placeholder="John Smith" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required className="mt-2" placeholder="john@company.com" />
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input id="company" className="mt-2" placeholder="Acme Corp" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" className="mt-2" placeholder="+1 555 123 4567" />
            </div>
          </div>
          <div className="mt-5">
            <Label htmlFor="message">How can we help?</Label>
            <Textarea id="message" required rows={5} className="mt-2" placeholder="Tell us about your hiring needs..." />
          </div>
          <Button type="submit" variant="hero" size="lg" className="mt-6 w-full sm:w-auto" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
