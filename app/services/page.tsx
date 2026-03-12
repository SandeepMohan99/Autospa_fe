import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/mock-data";

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-24 bg-black relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-outfit font-bold text-white mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Choose from our range of premium auto detailing packages designed to restore, protect, and maintain your vehicle's perfection.
          </p>
        </div>
      </section>

      <section className="py-24 bg-neutral-950 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <PricingCard
                key={service.id}
                id={service.id}
                name={service.name}
                description={service.description}
                price={service.price}
                duration={service.duration}
                features={service.features}
                popular={service.popular}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
