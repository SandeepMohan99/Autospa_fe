"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 bg-black">
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2670&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm font-medium tracking-wider text-white/80 uppercase">
              Rated #1 in Auto Detailing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-outfit font-bold leading-tight mb-6 text-white"
          >
            <span className="block">Premium</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
              Car Detailing
            </span>
            <span className="block">& Washing Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl leading-relaxed"
          >
            Experience the ultimate care for your vehicle. We combine professional expertise, premium products, and unmatched attention to detail to make your car look brand new again.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/booking"
              className={buttonVariants({
                size: "lg",
                className: "rounded-full h-14 px-8 text-base shadow-lg shadow-primary/20",
              })}
            >
              Book Appointment <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "rounded-full h-14 px-8 text-base bg-white/5 border-white/20 hover:bg-white/10 hover:text-white backdrop-blur-sm",
              })}
            >
              View Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
