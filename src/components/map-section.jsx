import { motion } from "framer-motion";
import contactInfo from "../utils/contactInfo";
import SectionHeader from "./section-header";

export default function MapSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20 overflow-hidden relative">
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
      <div className="container mx-auto max-w-7xl px-4">
        <SectionHeader
          tagline="Our Location"
          title="Visit Our Office"
          description="Visit us in person or get directions to our location in Seattle."
        />
        <motion.div
          className="mt-12 h-[450px] w-full rounded-lg overflow-hidden border border-border"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            src={contactInfo.location}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale invert-[90%] contrast-125"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
