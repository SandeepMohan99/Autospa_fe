import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowItWorks from "@/components/HowItWorks";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import GalleryGrid from "@/components/GalleryGrid";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/mock-data";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Services Overview */}
      <section className="py-24 bg-neutral-950 border-t border-neutral-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">
                Our Capabilities
              </h2>
              <h3 className="text-4xl md:text-5xl font-outfit font-bold text-white">
                Premium Services
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.name}
                description={service.description}
                price={service.price}
                iconName={service.name}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <FeaturesGrid />
      <HowItWorks />
      <TestimonialCarousel />
      <GalleryGrid />
      <CTASection />
    </>
  );
}
