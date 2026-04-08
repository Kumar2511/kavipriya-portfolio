import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border py-12">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-heading font-bold mb-3">
            Kavi<span className="text-gradient">Priya</span>
          </h3>
          <p className="text-sm text-muted-foreground">
            Digital Marketing Analyst passionate about driving growth through data-driven strategies.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-foreground">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="/about" className="hover:text-primary transition-colors">About</a>
            <a href="/services" className="hover:text-primary transition-colors">Services</a>
            <a href="/experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="/projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="/skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="/contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-foreground">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Mail size={14} /> kavi.official.49@gmail.com</span>
            <span className="flex items-center gap-2"><Phone size={14} /> +91 9042551631</span>
            <span className="flex items-center gap-2"><MapPin size={14} /> Tambaram, Chennai</span>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Kavi Priya R. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
