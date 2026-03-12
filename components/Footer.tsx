import Link from "next/link";
import { Droplets, Mail, MapPin, Phone, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white/70 pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors duration-300">
                <Droplets className="w-6 h-6 text-primary" />
              </div>
              <span className="font-outfit font-bold text-2xl tracking-tight text-white">
                Auto<span className="text-primary">Spa</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Premium automotive detailing and washing services designed to make
              your vehicle look as good as new. Experience the highest level of care.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all">
                <Twitter className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors text-sm">Services pricing</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors text-sm">Contact</Link></li>
              <li><Link href="/booking" className="hover:text-primary transition-colors text-sm">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">Our Services</h3>
            <ul className="flex flex-col gap-3">
              <li className="text-sm">Exterior Wash</li>
              <li className="text-sm">Interior Cleaning</li>
              <li className="text-sm">Full Car Detailing</li>
              <li className="text-sm">Ceramic Coating</li>
              <li className="text-sm">Paint Protection</li>
              <li className="text-sm">Engine Cleaning</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 tracking-wide">Contact Us</h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">123 Detail Avenue, Auto District, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">hello@autospa.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">Mon-Fri: 8AM - 6PM<br/>Sat: 9AM - 4PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} AutoSpa. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-xs hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
