import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import contactBanner from "@/assets/contact-banner.jpg";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi Kavi Priya!%0A%0AName: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0A%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/919042551631?text=${whatsappMessage}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen pt-16">
      <PageBanner title="" image={contactBanner} />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <SectionHeader title="Contact" subtitle="Let's work together" />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Form */}
            <AnimatedSection direction="left">
              <form onSubmit={handleSubmit} className="p-6 rounded-xl bg-card border border-border space-y-5 h-full">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1.5">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1.5">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-1.5">Message</label>
                  <textarea
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-11 rounded-md bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  <Send size={16} /> Send via WhatsApp
                </button>
              </form>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection direction="right">
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-card border border-border space-y-5">
                  <h3 className="font-semibold text-foreground">Get in Touch</h3>
                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-primary mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-sm text-foreground">kavi.official.49@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-primary mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <p className="text-sm text-foreground">+91 9042551631</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-primary mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground">Address</p>
                      <p className="text-sm text-foreground">Tambaram, Chennai, Tamil Nadu</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="font-semibold text-foreground mb-3">Languages</h3>
                  <div className="flex gap-3">
                    <span className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">Tamil</span>
                    <span className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">English</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
