interface PageBannerProps {
  title: string;
  image: string;
}

const PageBanner = ({ title, image }: PageBannerProps) => (
  <section className="page-banner">
    <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="page-banner-overlay" />
    <h1 className="page-banner-title">{title}</h1>
  </section>
);

export default PageBanner;
