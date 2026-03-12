"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

interface PricingCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: string;
  features: string[];
  popular?: boolean;
  index: number;
}

export default function PricingCard({
  id,
  name,
  description,
  price,
  duration,
  features,
  popular,
  index,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className={`h-full flex flex-col relative overflow-hidden transition-all duration-300 ${
          popular
            ? "border-primary bg-neutral-900 shadow-2xl shadow-primary/20 scale-105"
            : "border-neutral-800 bg-neutral-950 hover:border-neutral-600"
        }`}
      >
        {popular && (
          <div className="absolute top-5 right-[-35px] rotate-45 bg-primary text-white text-xs font-bold py-1 px-10 shadow-md">
            MOST POPULAR
          </div>
        )}
        
        <CardHeader className="pb-8">
          <CardTitle className="text-2xl font-outfit text-white mb-2">{name}</CardTitle>
          <CardDescription className="text-neutral-400 min-h-[40px]">{description}</CardDescription>
          
          <div className="mt-6 flex items-baseline text-white">
            <span className="text-4xl font-extrabold tracking-tight">${price}</span>
            <span className="ml-1 text-sm font-medium text-neutral-500">/service</span>
          </div>
          
          <div className="mt-4 flex items-center text-sm font-medium text-primary bg-primary/10 w-fit px-3 py-1 rounded-full">
            <Clock className="w-4 h-4 mr-2" />
            {duration}
          </div>
        </CardHeader>

        <CardContent className="flex-1">
          <ul className="space-y-4">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-neutral-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="pt-8">
          <Link
            href={`/booking?service=${id}`}
            className={buttonVariants({
              variant: popular ? "default" : "outline",
              className: `w-full relative z-10 ${
                !popular && "border-neutral-700 hover:bg-neutral-800 hover:text-white"
              }`,
            })}
          >
            {popular ? "Book Premium Detailing" : "Book This Service"}
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
