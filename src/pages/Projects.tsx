import { ExternalLink, Globe, Search, Megaphone, CheckCircle2, Wrench, Users, Eye } from "lucide-react";
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
      { name: "Rerol Website ", link: "https://rerolrefinery.com/" },
      { name: "Mahadevan Logistics ", link: "https://mahadevanlogistics.com/" },
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
          <SectionHeader 
            title="Projects" 
            subtitle="Real-world projects showcasing my digital marketing expertise" 
          />
        </AnimatedSection>

        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <AnimatedSection key={p.title} delay={i * 0.12}>
                <div className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/40 transition-all duration-500">

                  {/* Header */}
                  <div className="p-6 md:p-8 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="text-primary" size={24} />
                    </div>

                    <div>
                      <h3 className="font-bold text-xl md:text-2xl mb-2">
                        {p.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {p.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 grid md:grid-cols-2 gap-6">

                    {/* Work */}
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-semibold text-primary mb-3">
                        <CheckCircle2 size={16} /> Project Overview
                      </h4>

                      <ul className="space-y-2">
                        {p.work.map((item) => (
                          <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="mt-1 w-1.5 h-1.5 bg-primary rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col justify-between space-y-6">

                      <div className="space-y-6">

                        {/* Tools */}
                        <div>
                          <h4 className="flex items-center gap-2 text-sm font-semibold text-primary mb-3">
                            <Wrench size={16} /> Tools & Technologies
                          </h4>

                          <div className="flex flex-wrap gap-2">
                            {p.tools.map((t) => (
                              <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary border">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* ✅ Updated Heading Only */}
                        {p.clients.length > 0 && (
                          <div>
                            <h4 className="flex items-center gap-2 text-sm font-semibold text-primary mb-3">
                              <Users size={16} /> View Projects
                            </h4>

                            <ul className="space-y-1.5">
                              {p.clients.map((c) => (
                                <li key={c.name}>
                                  {c.link ? (
                                    <a
                                      href={c.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center gap-1 text-sm hover:text-primary"
                                    >
                                      <ExternalLink size={13} />
                                      {c.name}
                                    </a>
                                  ) : (
                                    <span className="text-sm text-muted-foreground">
                                      {c.name}
                                    </span>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                      </div>

                      {/* Ads Button */}
                      {p.title === "Paid Advertising (Meta Ads & Google Ads)" && (
                        <div className="mt-4">
                          <a
                            href="/overall_clients_kpi_new.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full h-10 rounded-lg bg-primary text-white text-sm font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-md"
                          >
                            <Eye size={16} />
                            View Ads Report
                          </a>
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