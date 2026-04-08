import { GraduationCap, Heart, MapPin, CheckCircle2 } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import aboutBanner from "@/assets/about-banner.jpg";

const focusItems = [
  "WordPress website development & management",
  "On-page SEO & keyword optimization",
  "Social media content strategies",
  "Google Ads & Meta Ads campaigns",
  "Lead generation & performance marketing",
  "Data-driven campaign optimization",
  "Email marketing",
  "Content creation & strategy",
];

const About = () => (
  <main className="min-h-screen pt-16">
    <PageBanner title=" " image={aboutBanner} />

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <SectionHeader title="About Me" subtitle="Get to know me and my journey" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <AnimatedSection direction="left">
            <div className="flex items-center gap-2 text-primary mb-4">
              <GraduationCap size={20} />
              <span className="font-semibold">Professional Summary</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm Kavi Priya R, an enthusiastic and result-driven Digital Marketing Analyst at Why Global Services, based in Chennai, India. I have hands-on experience in WordPress website management, SEO, Social Media Marketing, and Paid Advertising (Google Ads & Meta Ads).
            </p>
           
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="flex items-center gap-2 text-primary mb-4">
              <Heart size={20} />
              <span className="font-semibold">My Passion</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm passionate about combining creativity with data-driven marketing. I love turning marketing strategies into measurable results that help businesses grow their online presence.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={16} />
              <span>Tambaram, Chennai, India</span>
            </div>
          </AnimatedSection>
        </div>

        {/* Focus */}
        <AnimatedSection className="mt-16 max-w-4xl mx-auto">
          <div className="p-8 rounded-xl bg-card border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">What I Focus On</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {focusItems.map((item, i) => (
                <AnimatedSection key={item} delay={i * 0.08} direction="none">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-primary shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Education */}
        <div className="mt-16 max-w-4xl mx-auto">
          <AnimatedSection>
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Education & Certification</h3>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection delay={0.1}>
              <div className="p-6 rounded-xl bg-card border border-border">
                <h4 className="font-semibold text-foreground">Bsc Computer Science</h4>
                <p className="text-sm text-muted-foreground mt-1">EGS Pillay Arts & Science College, Nagapattinam</p>
                <p className="text-xs text-primary mt-2">2020 - 2023</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="p-6 rounded-xl bg-card border border-border">
                <h4 className="font-semibold text-foreground">AI Powered Digital Marketing</h4>
                <p className="text-sm text-muted-foreground mt-1">Certified at WHY TAP</p>
                <p className="text-xs text-primary mt-2">Certification</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default About;
