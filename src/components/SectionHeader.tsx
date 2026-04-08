interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
  <div className="text-center mb-12">
    <h2 className="section-heading mb-3">{title}</h2>
    <p className="section-subtitle">{subtitle}</p>
    <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
  </div>
);

export default SectionHeader;
