import { Briefcase, Building2, CheckCircle2 } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import experienceBanner from "@/assets/experience-banner.jpg";

const currentRole = {
  title: "Digital Marketing Analyst",
  company: "Why Global Services",
  period: "Nov 2025 - Present",
  tasks: [
    "Managing WordPress websites including page creation, content updates, and layout customization",
    "Planning, creating, and running paid ad campaigns on Google Ads and Meta Ads (Facebook & Instagram) for lead generation and brand awareness",
    "Handling SEO optimization including on-page SEO, keyword usage, and content improvements",
    "Planning and executing social media content strategies for platforms like Instagram and Facebook",
    "Designing posts and ad creatives using Canva",
    "Managing content calendars and scheduling posts",
    "Monitoring ad and campaign performance using metrics like CTR, engagement, and conversions",
    "Optimizing campaigns based on performance data to improve results",
    "Supporting lead generation activities through digital marketing strategies",
  ],
};

const previousRole = {
  title: "Production Associate",
  company: "Foxconn Hon Hai Technology",
  period: "2023 - Oct 2025",
  tasks: [
   
  ],
};

const Experience = () => (
  <main className="min-h-screen pt-16">
    <PageBanner title="" image={experienceBanner} />

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <SectionHeader title="Work Experience" subtitle="My professional journey so far" />
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-10">
          {/* Current Role */}
          <AnimatedSection>
            <div className="p-6 md:p-8 rounded-xl bg-card border border-border card-elevated relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-xl" />
              <div className="flex items-center gap-3 mb-2">
                <div className="inline-flex p-2 rounded-lg bg-primary/10 text-primary">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{currentRole.title}</h3>
                  <p className="text-sm text-primary font-medium">{currentRole.company}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-block text-xs font-mono px-2 py-0.5 rounded bg-accent/20 text-accent">Current</span>
                <span className="text-xs text-muted-foreground font-mono">{currentRole.period}</span>
              </div>
              <ul className="space-y-3 mt-2">
                {currentRole.tasks.map((task, i) => (
                  <AnimatedSection key={i} delay={i * 0.05} direction="none">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{task}</span>
                    </li>
                  </AnimatedSection>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Previous Role */}
          <AnimatedSection delay={0.15}>
            <div className="p-6 md:p-8 rounded-xl bg-card border border-border card-elevated relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-muted-foreground/30 rounded-l-xl" />
              <div className="flex items-center gap-3 mb-2">
                <div className="inline-flex p-2 rounded-lg bg-muted text-muted-foreground">
                  <Building2 size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{previousRole.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium">{previousRole.company}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-block text-xs font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">Previous</span>
                <span className="text-xs text-muted-foreground font-mono">{previousRole.period}</span>
              </div>
              <ul className="space-y-3 mt-2">
                {previousRole.tasks.map((task, i) => (
                  <AnimatedSection key={i} delay={0.15 + i * 0.05} direction="none">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-muted-foreground shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{task}</span>
                    </li>
                  </AnimatedSection>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </main>
);

export default Experience;
