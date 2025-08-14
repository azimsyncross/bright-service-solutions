import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart,
  TrendingUp,
  Target,
  Zap,
  Star,
  Award,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const heroFeatures = [
  {
    icon: BarChart,
    title: "Data-Driven SEO",
    description: "Climb the ranks with strategies backed by real data and analytics.",
    color: "primary"
  },
  {
    icon: TrendingUp,
    title: "High-ROI PPC",
    description: "Maximize your ad spend with campaigns that convert and deliver.",
    color: "secondary"
  },
  {
    icon: Target,
    title: "Social Growth",
    description: "Engage your audience and build a community around your brand.",
    color: "accent"
  }
];

export default function HomeHero() {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % heroFeatures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 md:py-32 overflow-hidden">
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

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Content */}
          <div className="text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center justify-center gap-3 mb-6"
            >
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
                Welcome to BRIGHT SERVICE SOLUTION COMPANY
              </span>
              <Award 
                className="w-6 h-6 animate-bounce" 
                style={{ color: 'var(--color-secondary)' }}
              />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl  font-black leading-tight mb-6"
              style={{ color: 'var(--color-foreground)'}}
            >
              Elevate Your Brand's
              <span className="block" style={{color: 'var(--color-primary)'}}>Digital Presence</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              We craft bespoke marketing solutions that drive growth, engagement, and deliver unparalleled results. Let's build your success story together.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button 
                className="w-full sm:w-auto flex items-center justify-center gap-3 py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: 'var(--color-primary-foreground)',
                  boxShadow: `0 10px 30px color-mix(in srgb, var(--color-primary) 25%, transparent)`
                }}
              >
                <Zap className="h-6 w-6" />
                Get Started
                <ArrowRight className="h-6 w-6" />
              </button>
              <a href="/service"
                className="w-full sm:w-auto flex items-center justify-center gap-3 py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-card/50"
                style={{
                    color: 'var(--color-muted-foreground)',
                    border: '2px solid var(--color-border)'
                }}
                >
                Our Services
              </a>
            </motion.div>
          </div>

          {/* Right Column: Visual */}
          <div className="relative flex items-center justify-center h-full min-h-[400px]">
             <motion.div
                className="absolute w-[450px] h-[450px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 180],
                }}
                transition={{
                  duration: 25,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            <motion.div 
              variants={itemVariants}
              className="w-full max-w-md p-8 rounded-3xl border-2 backdrop-blur-xl shadow-2xl"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-primary) 5%, var(--color-card))',
                borderColor: 'var(--color-primary)',
                boxShadow: `0 30px 60px color-mix(in srgb, var(--color-primary) 20%, transparent)`
              }}
            >
              <div className="text-center">
                <div 
                  className="inline-flex h-24 w-24 items-center justify-center rounded-3xl mb-6 animate-pulse"
                  style={{
                    backgroundColor: `var(--color-${heroFeatures[activeFeature].color})`,
                    boxShadow: `0 20px 40px color-mix(in srgb, var(--color-${heroFeatures[activeFeature].color}) 30%, transparent)`
                  }}
                >
                  {React.createElement(heroFeatures[activeFeature].icon, {
                    className: "h-12 w-12",
                    style: { color: 'var(--color-primary-foreground)' }
                  })}
                </div>
                
                <h3 
                  className="text-3xl font-black mb-4 transition-colors duration-300"
                  style={{ color: `var(--color-card-foreground)` }}
                >
                  {heroFeatures[activeFeature].title}
                </h3>
                
                <p 
                  className="text-lg leading-relaxed text-center mb-6 h-20"
                  style={{ color: 'var(--color-muted-foreground)' }}
                >
                  {heroFeatures[activeFeature].description}
                </p>

                <div className="flex justify-center gap-3">
                  {heroFeatures.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      className={`transition-all duration-300 rounded-full ${
                        activeFeature === index ? 'w-8 h-3' : 'w-3 h-3'
                      }`}
                      style={{
                        backgroundColor: activeFeature === index 
                          ? `var(--color-${heroFeatures[index].color})` 
                          : 'color-mix(in srgb, var(--color-muted) 40%, transparent)'
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes mesh-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        @keyframes animate-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-30px) rotate(120deg); }
          66% { transform: translateY(-20px) rotate(240deg); }
        }
        .animate-float {
          animation: animate-float 15s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}