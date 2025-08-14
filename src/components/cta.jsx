import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-[url('/path/to/your/pattern.svg')] bg-cover opacity-10 z-0 pointer-events-none" />
      
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
      {/* Floating radial light */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl z-0 animate-pulse" />

      <motion.div
        className="relative z-10 container mx-auto max-w-4xl px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-card-foreground">
          Ready to Amplify Your Brand?
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground">
          Let’s build a strategy that drives real growth. Your journey to digital dominance starts with a single click.
        </p>
        
        <div className="mt-10">
          <Link
            to="/contact-us"
            className="group inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold bg-card text-primary shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-card/90"
          >
            Get Your Free Consultation
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
