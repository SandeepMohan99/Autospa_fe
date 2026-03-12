"use client";

import BookingSteps from "@/components/booking/BookingSteps";

export default function BookingPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-black relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587353982054-c9f2b38e4a9d?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-outfit font-bold text-white mb-4">
            Book an <span className="text-primary">Appointment</span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Schedule your premium car detailing service in our easy 4-step process.
          </p>
        </div>
      </section>

      <section className="pb-24 pt-4 bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <BookingSteps />
        </div>
      </section>
    </>
  );
}
