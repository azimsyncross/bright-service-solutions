import { motion } from "framer-motion";
import { Flag, Rocket, Target, Users } from "lucide-react";

const introCards = [
  {
    icon: Users,
    title: "Who We Are",
    description:
      "A collective of passionate strategists, creatives, and data analysts.",
  },
  {
    icon: Target,
    title: "Who We Serve",
    description:
      "Ambitious brands of all sizes, from startups to enterprise leaders.",
  },
  {
    icon: Rocket,
    title: "What We Deliver",
    description:
      "Measurable growth, tangible results, and a commanding digital presence.",
  },
  {
    icon: Flag,
    title: "Our Mission",
    description:
      "To empower businesses to achieve their full potential in the digital world.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutIntroSection() {
  return (
    <section className="py-16 md:py-24 bg-background relative">
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
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {introCards.map((card) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
              className="text-center p-6 bg-secondary/30 rounded-lg border border-border"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {card.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground">
            Why Partner with{" "}
            <span className="text-primary">BRIGHT SERVICE SOLUTION COMPANY?</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Beyond services, we offer a partnership. We integrate with your
            team, align with your goals, and invest ourselves in your success.
            Our agile, transparent, and results-obsessed approach means you're
            not just another client—you're a collaborator in achieving digital
            excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
