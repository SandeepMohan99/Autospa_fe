"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Droplets, Shield, Fan, Eye, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  price: string | number;
  iconName: string;
  index: number;
}

const getIcon = (name: string) => {
  switch (name) {
    case "Exterior Wash":
      return <Droplets className="w-8 h-8 text-primary" />;
    case "Interior Cleaning":
      return <Fan className="w-8 h-8 text-primary" />;
    case "Full Car Detailing":
      return <Sparkles className="w-8 h-8 text-primary" />;
    case "Ceramic Coating":
      return <Shield className="w-8 h-8 text-primary" />;
    case "Paint Protection":
      return <Eye className="w-8 h-8 text-primary" />;
    case "Engine Cleaning":
      return <Zap className="w-8 h-8 text-primary" />;
    default:
      return <Droplets className="w-8 h-8 text-primary" />;
  }
};

export default function ServiceCard({ id, title, description, price, iconName, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col bg-neutral-900/50 backdrop-blur-sm border-neutral-800 hover:border-primary/50 transition-colors duration-300 group overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] pointer-events-none group-hover:bg-primary/10 transition-colors duration-500" />
        
        <CardHeader className="pb-4">
          <div className="w-16 h-16 rounded-2xl bg-neutral-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 relative z-10">
            {getIcon(title)}
          </div>
          <CardTitle className="text-xl font-outfit text-white">{title}</CardTitle>
          <CardDescription className="text-neutral-400 min-h-[40px]">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex items-end gap-1">
            <span className="text-sm text-neutral-500 font-medium">Starting from</span>
            <span className="text-2xl font-bold text-white">${price}</span>
          </div>
        </CardContent>
        <CardFooter>
          <Link
            href={`/booking?service=${id}`}
            className={buttonVariants({
              variant: "ghost",
              className: "w-full justify-between hover:bg-primary hover:text-white group/btn relative z-10 overflow-hidden",
            })}
          >
            <span className="relative z-10 font-medium tracking-wide">Book Now</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
