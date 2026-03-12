import Image from "next/image";
import { CheckCircle2, Trophy, Users, ShieldAlert } from "lucide-react";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  const stats = [
    { label: "Years Experience", value: "10+", icon: <Trophy className="w-6 h-6 text-primary" /> },
    { label: "Cars Detailed", value: "5,000+", icon: <CheckCircle2 className="w-6 h-6 text-primary" /> },
    { label: "Expert Staff", value: "15", icon: <Users className="w-6 h-6 text-primary" /> },
    { label: "Satisfaction", value: "100%", icon: <ShieldAlert className="w-6 h-6 text-primary" /> }
  ];

  return (
    <>
      <section className="pt-32 pb-24 bg-black relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552930294-6b595f4c2974?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-outfit font-bold text-white mb-6">
            About <span className="text-primary">AutoSpa</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            We are passionate about perfection. Learn more about our journey, our team, and our commitment to excellence.
          </p>
        </div>
      </section>

      <section className="py-24 bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-105 duration-700"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-10 left-10 right-10 p-6 bg-black/50 backdrop-blur-md rounded-2xl border border-white/10">
                <p className="text-2xl font-outfit font-bold text-white mb-2">"Attention to detail is our signature."</p>
                <p className="text-primary">— AutoSpa Founders</p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-outfit font-bold text-white mb-6">
                  Elevating the Standard of Car Care
                </h2>
                <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                  Founded in 2014, AutoSpa began with a simple mission: to provide the most meticulous, high-quality automotive detailing services available. Over the past decade, we've refined our techniques, invested in the best technology, and assembled a team of true artisans.
                </p>
                <p className="text-neutral-400 text-lg leading-relaxed">
                  We don't just wash cars; we restore them. Whether you're preparing a classic for a show, protecting a new luxury vehicle, or simply want your daily driver to feel new again, our experts treat every car as if it were our own.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-black border border-neutral-800 p-6 rounded-2xl flex items-center gap-4 hover:border-primary/50 transition-colors">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      {stat.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white font-outfit">{stat.value}</h4>
                      <p className="text-neutral-500 text-sm font-medium">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
