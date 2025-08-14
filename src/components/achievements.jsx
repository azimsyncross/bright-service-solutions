import { motion, useInView, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import SectionHeader from "./section-header";
import { Award, Users, TrendingUp, Smile } from "lucide-react";

// Animated number component
function AnimatedStat({ to, icon: Icon, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, to, count]);

  return (
    <div ref={ref} className="text-center">
      <Icon
        className="h-12 w-12 mx-auto mb-4 bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        aria-hidden="true"
      />
      <motion.h3 className="text-5xl font-extrabold text-white">{rounded}</motion.h3>
      <p className="mt-2 text-violet-200">{label}</p>
    </div>
  );
}

export default function AchievementsSection() {
  const stats = [
    { to: 98, icon: Smile, label: "Client Satisfaction" },
    { to: 500, icon: Users, label: "Happy Clients" },
    { to: 300, icon: TrendingUp, label: "Growth Percentage" },
    { to: 10, icon: Award, label: "Industry Awards" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/10 to-background relative">
     {/* Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(var(--color-primary) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'mesh-move 25s linear infinite'
          }}
        />
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl opacity-20 animate-float"
            style={{
              width: `${Math.random() * 250 + 150}px`,
              height: `${Math.random() * 250 + 150}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary)',
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 10 + 20}s`
            }}
          />
        ))}
      </div>
      <div className="container mx-auto max-w-7xl px-6">
        <SectionHeader tagline="Our Milestones" title="Our Achievements in Numbers" />
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <AnimatedStat key={stat.label} to={stat.to} icon={stat.icon} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
