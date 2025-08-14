import { motion } from "framer-motion";
import SectionHeader from "../components/section-header";
import { Lightbulb, ShieldCheck, Handshake, TrendingUp, Microscope, Users } from "lucide-react";

const valuesData = [
  { icon: ShieldCheck, title: "Integrity", description: "We operate with unwavering honesty and transparency." },
  { icon: Lightbulb, title: "Innovation", description: "We constantly explore new ideas and technologies." },
  { icon: Handshake, title: "Partnership", description: "We build collaborative relationships based on trust." },
  { icon: TrendingUp, title: "Results-Driven", description: "Our focus is on delivering measurable success." },
  { icon: Microscope, title: "Data-Obsessed", description: "We let data guide our every strategic move." },
  { icon: Users, title: "Client-Centric", description: "Your success is the ultimate measure of our own." },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

export default function CoreValuesSection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      {/* Decorative circles */}
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
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse mix-blend-multiply" />
      <div className="absolute bottom-10 right-16 w-48 h-48 bg-primary/5 rounded-full blur-2xl mix-blend-screen" />

      <div className="relative container mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeader tagline="Our Principles" title="Our Core Values" />

        <motion.div
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {valuesData.map((value) => (
            <motion.div
              key={value.title}
              variants={cardVariants}
              className="flex items-start gap-6 p-6 bg-background/90 rounded-xl border border-border shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-lg bg-primary/20 text-primary drop-shadow">
                <value.icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="mt-1 text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
