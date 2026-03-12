"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import CTASection from "@/components/CTASection";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We will get back to you soon.");
  };

  return (
    <>
      <section className="pt-32 pb-24 bg-black relative flex flex-col items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600742144889-1051fa8ce626?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-outfit font-bold text-white mb-6"
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-400 max-w-2xl mx-auto"
          >
            Have questions about our services or need a custom quote? We're here to help you achieve the perfect finish.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-outfit font-bold text-white mb-8">Contact Information</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Our Location</h3>
                    <p className="text-neutral-400">123 Detail Avenue, Auto District<br />Los Angeles, CA 90210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Phone Number</h3>
                    <p className="text-neutral-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Email Address</h3>
                    <p className="text-neutral-400">hello@autospa.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Business Hours</h3>
                    <p className="text-neutral-400">Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-neutral-900 rounded-2xl border border-neutral-800 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity" />
                <div className="z-10 text-center">
                  <MapPin className="w-8 h-8 text-white mx-auto mb-2 opacity-80" />
                  <span className="text-white/80 font-medium">Interactive Map View</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-black border border-neutral-800 p-8 md:p-10 rounded-3xl shadow-2xl">
              <h2 className="text-2xl font-outfit font-bold text-white mb-6">Send Us A Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-300">First Name</label>
                    <Input required placeholder="John" className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-600 focus-visible:ring-primary h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-300">Last Name</label>
                    <Input required placeholder="Doe" className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-600 focus-visible:ring-primary h-12" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-300">Email Address</label>
                  <Input required type="email" placeholder="john@example.com" className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-600 focus-visible:ring-primary h-12" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-300">Phone Number</label>
                  <Input type="tel" placeholder="(555) 123-4567" className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-600 focus-visible:ring-primary h-12" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-300">How can we help you?</label>
                  <Textarea required placeholder="Tell us about your vehicle and what services you are looking for..." className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-600 focus-visible:ring-primary min-h-[150px] resize-none" />
                </div>

                <Button type="submit" className="w-full h-14 rounded-xl text-base font-bold flex items-center gap-2 hover:scale-[1.02] transition-transform">
                  Send Message <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
