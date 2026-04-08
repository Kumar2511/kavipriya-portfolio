import { Globe, Search, Target, Share2, PenTool, BarChart3 } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import servicesBanner from "@/assets/services-banner.jpg";

const services = [
  { icon: Globe, title: "WordPress Development", desc: "Custom WordPress websites with theme customization, plugin management, and responsive design tailored to your brand." },
  { icon: Search, title: "Search Engine Optimization", desc: "On-page SEO including keyword optimization, meta tags, content structuring, and improved visibility using tools like SEOptimer." },
  { icon: Target, title: "Google Ads & Meta Ads", desc: "Strategic paid ad campaigns on Google and Meta platforms for lead generation and brand awareness." },
  { icon: Share2, title: "Social Media Marketing", desc: "Content planning, scheduling, and executing strategies for Instagram, Facebook, and other platforms." },
  { icon: PenTool, title: "Content Creation & Design", desc: "Eye-catching posts, banners, and ad creatives designed using Canva to boost engagement." },
  { icon: BarChart3, title: "Analytics & Optimization", desc: "Campaign monitoring using CTR, engagement, and conversion metrics to continuously improve results." },
];

const Services = () => (
  <main className="min-h-screen pt-16">
    <PageBanner title="" image={servicesBanner} />

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <SectionHeader title="Services" subtitle="What I can do for you" />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <div className="p-6 rounded-xl bg-card border border-border card-elevated h-full">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4">
                  <s.icon size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Services;
