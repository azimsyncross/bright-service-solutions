import { motion } from "framer-motion";
import { Database, Handshake, Lightbulb } from "lucide-react";

const keyPoints = [
  {
    icon: Database,
    title: "Data-Driven Decisions",
    description:
      "We leverage analytics and insights to build strategies that are not just creative, but also effective and measurable.",
  },
  {
    icon: Lightbulb,
    title: "Creative Innovation",
    description:
      "Our team blends artistic creativity with marketing science to create campaigns that capture attention and drive action.",
  },
  {
    icon: Handshake,
    title: "True Partnership",
    description:
      "We work as an extension of your team, providing transparent communication and a shared commitment to your goals.",
  },
];

export default function ServiceIntroSection() {
  return (
    <section className="py-24 md:py-32 overflow-hidden bg-background">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <motion.div
            className="rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200"
              alt="Team collaborating on a marketing strategy"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-primary font-semibold tracking-wider uppercase">
              Our Approach
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Beyond Services, We Deliver Solutions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              At BRIGHT SERVICE SOLUTION COMPANY, we believe that effective digital
              marketing is a blend of art and science. We don't just offer
              services; we craft integrated solutions designed to solve your
              unique challenges and propel your business forward, giving you a
              distinct competitive advantage.
            </p>
            <div className="mt-8 space-y-6">
              {keyPoints.map((point) => (
                <div key={point.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-secondary/50 text-primary">
                    <point.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">
                      {point.title}
                    </h4>
                    <p className="mt-1 text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
