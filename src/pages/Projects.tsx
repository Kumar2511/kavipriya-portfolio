import { ExternalLink, Globe, Search, BarChart3, Megaphone, CheckCircle2, Wrench, Users } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import projectsBanner from "@/assets/projects-banner.jpg";

const projects = [
  {
    icon: Globe,
    title: "WordPress Website Development & Management",
    description: "Developed and maintained multiple WordPress websites focusing on performance, design, and usability.",
    work: [
      "Created and managed WordPress websites including page creation, content upload, and layout customization",
      "Customized themes and managed plugins for improved performance",
      "Designed banners and product images using Canva",
      "Ensured responsive design and user-friendly structure",
      "Implemented basic SEO practices during development",
    ],
    tools: ["WordPress", "Canva", "Basic SEO Techniques"],
    clients: [
      { name: "Mahadevan Logistics", link: "https://mahadevanlogistics.com/" },
      { name: "Rerol Refinery", link: "https://rerolrefinery.com/" },
      { name: "Picco Infra (Interior Design)", link: null },
      { name: "Welfried (Training Institute)", link: null },
    ],
  },
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description: "Optimized websites to improve search engine rankings and enhance user experience.",
    work: [
      "Performed on-page SEO including keyword optimization, meta tags, and content structuring",
      "Improved website visibility using proper SEO practices",
      "Optimized pages for better ranking and performance",
    ],
    tools: ["WordPress", "SEO Tools (Basic)", "SEOptimer"],
    clients: [
      { name: "Rerol Website (Page SEO)", link: "https://rerolrefinery.com/" },
      { name: "Mahadevan Logistics (On-page SEO)", link: "https://mahadevanlogistics.com/" },
    ],
  },
  
  {
    icon: Megaphone,
    title: "Paid Advertising (Meta Ads & Google Ads)",
    description: "Managed paid advertising campaigns to generate leads and improve conversions.",
    work: [
      "Planned and executed Meta Ads and Google Ads campaigns",
      "Performed audience targeting and created ad creatives using Canva",
      "Managed campaign setup, budget, and placements",
      "Monitored performance using metrics like CTR and conversions",
      "Optimized campaigns for better ROI",
    ],
    tools: ["Meta Ads Manager", "Google Ads", "Canva", "Google Analytics"],
    clients: [],
  },
];

const Projects = () => (
  <main className="min-h-screen pt-16">
    <PageBanner title="" image={projectsBanner} />

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <SectionHeader title="Projects" subtitle="Real-world projects showcasing my digital marketing expertise" />
        </AnimatedSection>

        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <AnimatedSection key={p.title} delay={i * 0.12}>
                <div className="group rounded-2xl bg-card border border-border overflow-hidden card-elevated hover:border-primary/40 transition-all duration-500">
                  {/* Header */}
                  <div className="p-6 md:p-8 pb-0 md:pb-0 flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-bold text-foreground text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                        {p.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{p.description}</p>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 grid md:grid-cols-2 gap-6">
                    {/* Work Done */}
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                        <CheckCircle2 size={16} /> Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {p.work.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right column: Tools + Clients */}
                    <div className="space-y-6">
                      {/* Tools */}
                      <div>
                        <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                          <Wrench size={16} /> Tools & Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {p.tools.map((t) => (
                            <span
                              key={t}
                              className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Clients */}
                      {p.clients.length > 0 && (
                        <div>
                          <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                            <Users size={16} /> Clients
                          </h4>
                          <ul className="space-y-1.5">
                            {p.clients.map((c) => (
                              <li key={c.name}>
                                {c.link ? (
                                  <a
                                    href={c.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors"
                                  >
                                    <ExternalLink size={13} className="text-primary" />
                                    {c.name}
                                  </a>
                                ) : (
                                  <span className="text-sm text-muted-foreground">{c.name}</span>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  </main>
);

export default Projects;
