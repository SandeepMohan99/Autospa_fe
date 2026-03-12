"use client";

import { motion } from "framer-motion";
import { Wrench, Leaf, ShieldCheck, Tag, Clock, Award } from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      icon: <Wrench className="w-8 h-8 text-white" />,
      title: "Professional Equipment",
      description: "We use only the highest grade automotive detailing tools and machinery."
    },
    {
      icon: <Leaf className="w-8 h-8 text-white" />,
      title: "Eco-Friendly Products",
      description: "Our cleaning agents are biodegradable and safe for the environment."
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Certified Technicians",
      description: "Our staff is highly trained and certified in advanced paint correction."
    },
    {
      icon: <Tag className="w-8 h-8 text-white" />,
      title: "Affordable Packages",
      description: "Premium care doesn't have to mean premium prices. We offer versatile packages."
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: "Fast Service",
      description: "We value your time and work efficiently without compromising on quality."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: "Satisfaction Guaranteed",
      description: "If you're not fully satisfied with our service, we'll make it right."
    }
  ];

  return (
    <section className="py-24 bg-neutral-950">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wider uppercase text-sm mb-3"
          >
            Why Choose Us
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-outfit font-bold text-white mb-6"
          >
            Setting the Standard in Auto Detailing
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center md:items-start text-center md:text-left group"
            >
              <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,100,0,0.3)]">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold font-outfit text-white mb-3">{feature.title}</h4>
              <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
