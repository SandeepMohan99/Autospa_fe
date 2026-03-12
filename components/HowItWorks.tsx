"use client";

import { motion } from "framer-motion";
import { MousePointerClick, CalendarDays, Car, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <MousePointerClick className="w-8 h-8 text-primary" />,
      title: "Select Service",
      description: "Choose from our premium packages tailored for your specific vehicle needs."
    },
    {
      icon: <CalendarDays className="w-8 h-8 text-primary" />,
      title: "Choose Date & Time",
      description: "Pick a convenient timeslot from our interactive calendar booking system."
    },
    {
      icon: <Car className="w-8 h-8 text-primary" />,
      title: "Enter Vehicle Details",
      description: "Provide your car model and tell us where you'd like the service done."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Confirm Booking",
      description: "Review your summary and let our expert detailers take care of the rest."
    }
  ];

  return (
    <section className="py-24 bg-black relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm mb-3"
          >
            Simple Process
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-outfit font-bold text-white mb-6"
          >
            How AutoSpa Works
          </motion.h3>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[5rem] left-[10%] right-[10%] h-[2px] bg-neutral-800" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative z-10 group"
              >
                <div className="w-20 h-20 rounded-full bg-neutral-900 border-2 border-primary/30 flex items-center justify-center mx-auto mb-8 relative group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 rounded-full border border-primary animate-ping opacity-20" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg">
                    {i + 1}
                  </div>
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold font-outfit text-white mb-4 group-hover:text-primary transition-colors">{step.title}</h4>
                <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors px-2">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
