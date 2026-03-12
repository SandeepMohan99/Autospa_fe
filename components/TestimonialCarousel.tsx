"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { reviews } from "@/lib/mock-data";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const next = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="absolute top-0 right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm mb-3"
          >
            Client Reviews
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-outfit font-bold text-white"
          >
            Don't just take our word for it
          </motion.h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden relative min-h-[300px]">
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: i === currentIndex ? 1 : 0,
                  x: i === currentIndex ? 0 : i < currentIndex ? -100 : 100,
                  pointerEvents: i === currentIndex ? "auto" : "none",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-12"
              >
                <Quote className="w-16 h-16 text-primary/20 mb-6" />
                <p className="text-xl md:text-3xl text-white/90 font-outfit leading-relaxed mb-8">
                  "{review.review}"
                </p>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <h4 className="text-white font-bold text-lg">{review.name}</h4>
                <p className="text-primary text-sm font-medium">{review.car}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12 gap-4">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:bg-primary hover:border-primary transition-all duration-300"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:bg-primary hover:border-primary transition-all duration-300"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
