import { Link } from "react-router-dom";
import { ArrowRight, Globe, Search, Megaphone, BarChart3, FileText, Share2, Eye, Download } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  { icon: Megaphone, title: "Paid Advertising", desc: "Google Ads & Meta Ads campaigns" },
  { icon: Share2, title: "Social Media Marketing", desc: "Strategic content & engagement" },
  { icon: Search, title: "SEO Optimization", desc: "Higher rankings & visibility" },
  { icon: Globe, title: "WordPress Development", desc: "Custom websites & content management" },
  { icon: BarChart3, title: "Analytics & Insights", desc: "Data-driven marketing decisions" },
];

const ResumeButton = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: any) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/30 hover:shadow-xl"
      >
        <FileText size={18} />
        View Resume
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full mt-2 left-0 min-w-[180px] rounded-lg bg-card border border-border shadow-xl z-50 overflow-hidden"
        >
          <a
            href="/KaviPriya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 text-sm text-foreground hover:bg-primary/10 transition-colors"
            onClick={() => setOpen(false)}
          >
            <FileText size={16} className="text-primary" />
            View Resume
          </a>

          <a
            href="/KaviPriya_Resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-3 text-sm text-foreground hover:bg-primary/10 transition-colors border-t border-border"
            onClick={() => setOpen(false)}
          >
            <Download size={16} className="text-accent" />
            Download Resume
          </a>
        </motion.div>
      )}
    </div>
  );
};

const Index = () => (
  <main className="min-h-screen">
    {/* Hero */}
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 hero-bg opacity-85" />

      <div className="container relative mx-auto px-4 md:px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-hero-foreground/70 font-mono text-sm md:text-base mb-4 tracking-wide uppercase"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-hero-foreground"
          >
            Kavi <span className="text-gradient">Priya R</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl font-medium mb-4 text-hero-foreground/80"
          >
            Digital Marketing Analyst
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-base md:text-lg max-w-xl mb-8 text-hero-foreground/60"
          >
            Enthusiastic and result-driven Digital Marketing Analyst with hands-on experience in WordPress, SEO, Social Media Marketing, and Paid Advertising.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-primary/30 hover:shadow-xl"
            >
              View Projects <ArrowRight size={18} />
            </Link>

            <ResumeButton />

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 bg-transparent border-2 border-primary text-primary font-semibold transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105 shadow-md"
            >
              Hire Me <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.1}>
              <div className="p-6 rounded-xl bg-card border border-border text-center h-full">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4">
                  <f.icon size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Index;