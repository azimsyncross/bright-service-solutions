import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Megaphone,
  BarChart2,
  Users,
  Mail,
  PencilRuler,
  Check,
  ArrowRight,
  Star,
  Award
} from 'lucide-react';

const servicesData = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your visibility and climb the search engine rankings to capture organic traffic.",
    points: ["Keyword & Competitor Analysis", "On-Page & Off-Page SEO", "Technical SEO Audits", "Content Strategy"],
    price: "499",
  },
  {
    icon: Megaphone,
    title: "PPC Advertising",
    description: "Drive targeted traffic and generate leads with our data-driven PPC campaigns.",
    points: ["Google Ads Management", "Social Media Advertising", "Conversion Rate Optimization", "A/B Testing"],
    price: "799",
  },
  {
    icon: Users,
    title: "Social Media Marketing",
    description: "Build a strong brand presence and engage with your audience across social platforms.",
    points: ["Content Creation & Curation", "Community Management", "Influencer Marketing", "Social Media Analytics"],
    price: "649",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and drive conversions with personalized email marketing campaigns.",
    points: ["Email Automation", "Newsletter Design", "List Segmentation", "Performance Tracking"],
    price: "399",
  },
  {
    icon: PencilRuler,
    title: "Content Creation",
    description: "Fuel your marketing efforts with high-quality content that resonates with your audience.",
    points: ["Blog Posts & Articles", "Video Scriptwriting", "Infographics & Visuals", "Copywriting"],
    price: "599",
  },
  {
    icon: BarChart2,
    title: "Analytics & Reporting",
    description: "Make informed decisions with our comprehensive analytics and reporting services.",
    points: ["Custom Dashboards", "ROI Analysis", "Monthly Performance Reports", "Data-driven Insights"],
    price: "349",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// SectionHeader component
function SectionHeader({ tagline, title, description }) {
  return (
    <div className="text-center mb-20">
      <div className="flex items-center justify-center gap-3 mb-6">
        <Star
          className="w-6 h-6 animate-spin"
          style={{ color: 'var(--color-primary)', animationDuration: '3s' }}
        />
        <span
          className="text-sm font-bold tracking-widest uppercase px-6 py-3 rounded-full border-2"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--color-primary) 8%, transparent)',
            color: 'var(--color-primary)',
            borderColor: 'var(--color-primary)'
          }}
        >
          {tagline}
        </span>
        <Award
          className="w-6 h-6 animate-bounce"
          style={{ color: 'var(--color-secondary)' }}
        />
      </div>
      <h2
        className="text-4xl md:text-6xl font-black mb-8 leading-tight"
        style={{ color: 'var(--color-foreground)' }}
      >
        {title}
      </h2>
      <p
        className="text-xl max-w-4xl mx-auto leading-relaxed"
        style={{ color: 'var(--color-muted-foreground)' }}
      >
        {description}
      </p>
    </div>
  );
}


export default function ServicesSection() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-background to-secondary/5 overflow-hidden">
      {/* Background Elements */}
      <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(var(--color-secondary) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-secondary) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            animation: 'mesh-move 20s linear infinite'
          }}
        />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <SectionHeader
          tagline="Our Services"
          title="What We Offer"
          description="We provide a comprehensive suite of digital marketing services designed to elevate your brand and drive measurable results."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative flex flex-col p-8 bg-card border-2 border-border rounded-3xl backdrop-blur-sm hover:border-primary transition-all duration-300 shadow-lg hover:shadow-primary/10"
            >
              <div className="flex-grow">
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 text-primary border-2 border-primary/20">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-base text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Feature Points */}
                <ul className="space-y-3 text-sm mb-8">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="mt-auto pt-6 border-t-2 border-border flex items-center justify-between">
                <div className="text-left">
                  <span className="text-sm text-muted-foreground">Starts at</span>
                  <p className="text-2xl font-bold text-card-foreground">
                    ${service.price}<span className="text-base font-medium text-muted-foreground">/mo</span>
                  </p>
                </div>
                <a
                  href="/contact-us"
                  className="flex items-center gap-2 text-sm text-primary font-semibold opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
       {/* Custom CSS for animations */}
       <style jsx>{`
        @keyframes mesh-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 80px); }
        }
      `}</style>
    </section>
  );
}