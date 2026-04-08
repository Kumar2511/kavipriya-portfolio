import PageBanner from "@/components/PageBanner";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import skillsBanner from "@/assets/skills-banner.jpg";

const skillCategories = [
  { category: "Digital Marketing", skills: [{ name: "WordPress Development", level: 90 }, { name: "SEO (On-Page)", level: 85 }, { name: "Social Media Marketing", level: 88 }, { name: "Content Strategy", level: 85 }] },
  { category: "Paid Advertising", skills: [{ name: "Google Ads", level: 80 }, { name: "Meta Ads (FB & IG)", level: 85 }, { name: "Lead Generation", level: 82 }, { name: "Performance Marketing", level: 78 }] },
  { category: "Tools", skills: [{ name: "Google Ads", level: 88 },{ name: "Meta Ads Manager", level: 89 },{ name: "Canva", level: 92 }, { name: "Google Analytics", level: 70 }, { name: "WordPress Plugins", level: 88 }, { name: "SEOptimer", level: 75 }] },
  { category: "Additional Skills", skills: [{ name: "Email Marketing", level: 75 }, { name: "Content Creation & Strategy", level: 85 }] },
  { category: "Soft Skills", skills: [{ name: "Creative & Innovative Thinking", level: 90 }, { name: "Strong Communication", level: 88 }, { name: "Time Management & Prioritization", level: 85 }, { name: "Fast Learner & Adaptable", level: 92 }, { name: "Analytical & Problem-Solving", level: 85 }, { name: "Detail-Oriented Approach", level: 88 }, { name: "Team Collaboration", level: 86 }, { name: "Ability to Handle Pressure", level: 84 }] },
];

const Skills = () => (
  <main className="min-h-screen pt-16">
    <PageBanner title="" image={skillsBanner} />

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <SectionHeader title="Skills" subtitle="Technologies and tools I work with" />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((cat, i) => (
            <AnimatedSection key={cat.category} delay={i * 0.12}>
              <div className="p-6 rounded-xl bg-card border border-border h-full">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <h3 className="font-semibold text-foreground">{cat.category}</h3>
                </div>
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-foreground">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-bar-bg">
                        <div className="skill-bar" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Skills;
