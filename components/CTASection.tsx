"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-neutral-900 border-y border-neutral-800">
      <div 
        className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1620054379767-e9fa650c33a9?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-fixed bg-center" 
      />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-900/80 to-neutral-950" />
      
      <div className="container px-4 md:px-6 relative z-10 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-8 relative"
          >
            <div className="absolute inset-0 bg-primary animate-ping opacity-20 rounded-2xl" />
            <Calendar className="w-8 h-8 text-primary relative z-10" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-outfit font-bold text-white mb-6"
          >
            Ready for a Showroom Finish?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto"
          >
            Book your car detailing today and experience the difference of premium automotive care. Slots fill up fast, so reserve your time now.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/booking"
              className={buttonVariants({
                size: "lg",
                className: "rounded-full h-14 px-10 text-base shadow-xl shadow-primary/20 scale-100 hover:scale-105 transition-transform duration-300",
              })}
            >
              Book Now <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
