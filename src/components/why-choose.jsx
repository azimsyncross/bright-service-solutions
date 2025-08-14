import React, { useState, useEffect } from 'react';
import { BarChartHorizontal, ShieldCheck, Users, Star, Award, Target, ArrowRight, CheckCircle2, Zap } from "lucide-react";

const reasonsData = [
  {
    icon: BarChartHorizontal,
    title: "Data-Driven Strategies",
    description: "Every decision is backed by data. We analyze, iterate, and optimize for maximum ROI, ensuring your marketing budget works harder.",
    features: ["Advanced Analytics", "ROI Optimization", "Performance Tracking", "Data Insights"],
    metric: "300% ROI Increase",
    color: "primary"
  },
  {
    icon: Users,
    title: "A Team of Experts",
    description: "Our team consists of certified professionals and industry veterans who are passionate about digital marketing and dedicated to your success.",
    features: ["Certified Professionals", "Industry Veterans", "24/7 Support", "Dedicated Account Manager"],
    metric: "50+ Experts",
    color: "secondary"
  },
  {
    icon: ShieldCheck,
    title: "Transparent Reporting",
    description: "No black boxes. You get clear, comprehensive reports that show you exactly where your money is going and the results we're achieving.",
    features: ["Real-time Dashboards", "Monthly Reports", "Clear Metrics", "Full Transparency"],
    metric: "100% Transparency",
    color: "accent"
  },
];

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

export default function WhyChooseUsSection() {
  const [activeCard, setActiveCard] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-cycle through cards
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % reasonsData.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section 
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at center, 
          color-mix(in srgb, var(--color-secondary) 5%, transparent) 0%, 
          var(--color-background) 70%)`
      }}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Mesh Grid */}
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
        
        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-2xl opacity-20 animate-float"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary)',
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 10 + 15}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <SectionHeader
          tagline="Our Advantage"
          title="Why Choose BRIGHT SERVICE SOLUTION COMPANY?"
          description="We're more than just a marketing agency; we're your dedicated growth partner committed to transforming your business vision into measurable success."
        />

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          {/* Left Side - Reason Cards */}
          <div className="lg:col-span-3 space-y-8">
            {reasonsData.map((reason, index) => {
              const Icon = reason.icon;
              const isActive = activeCard === index;

              return (
                <div
                  key={reason.title}
                  className={`group cursor-pointer transition-all duration-700 ${
                    isActive ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveCard(index)}
                  onMouseEnter={() => {
                    setActiveCard(index);
                    setIsHovered(true);
                  }}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div 
                    className={`relative p-8 rounded-3xl border-2 backdrop-blur-sm transition-all duration-700 overflow-hidden ${
                      isActive ? 'shadow-2xl' : 'hover:shadow-lg'
                    }`}
                    style={{
                      backgroundColor: isActive 
                        ? 'color-mix(in srgb, var(--color-primary) 8%, var(--color-card))' 
                        : 'color-mix(in srgb, var(--color-card) 90%, transparent)',
                      borderColor: isActive 
                        ? 'var(--color-primary)' 
                        : 'var(--color-border)',
                      boxShadow: isActive 
                        ? `0 25px 50px color-mix(in srgb, var(--color-primary) 25%, transparent)` 
                        : undefined
                    }}
                  >
                    {/* Animated Background Pattern */}
                    {isActive && (
                      <div 
                        className="absolute inset-0 opacity-5"
                        style={{
                          background: `repeating-conic-gradient(
                            from 0deg at 50% 50%,
                            var(--color-primary) 0deg 90deg,
                            transparent 90deg 180deg
                          )`,
                          animation: 'rotate 8s linear infinite'
                        }}
                      />
                    )}

                    <div className="relative flex items-start gap-6">
                      {/* Icon Container */}
                      <div 
                        className={`flex h-20 w-20 items-center justify-center rounded-2xl border-2 transition-all duration-500 ${
                          isActive ? 'animate-pulse scale-110' : 'group-hover:scale-105'
                        }`}
                        style={{
                          backgroundColor: isActive 
                            ? 'var(--color-primary)' 
                            : 'color-mix(in srgb, var(--color-primary) 10%, transparent)',
                          borderColor: 'var(--color-primary)',
                          boxShadow: isActive 
                            ? `0 15px 35px color-mix(in srgb, var(--color-primary) 30%, transparent)` 
                            : undefined
                        }}
                      >
                        <Icon 
                          className={`h-10 w-10 transition-all duration-500 ${
                            isActive ? 'scale-110' : ''
                          }`}
                          style={{
                            color: isActive 
                              ? 'var(--color-primary-foreground)' 
                              : 'var(--color-primary)'
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 
                            className={`text-2xl font-bold transition-colors duration-300`}
                            style={{
                              color: isActive 
                                ? 'var(--color-primary)' 
                                : 'var(--color-card-foreground)'
                            }}
                          >
                            {reason.title}
                          </h3>
                          <div 
                            className="px-3 py-1 rounded-full text-xs font-bold"
                            style={{
                              backgroundColor: 'color-mix(in srgb, var(--color-secondary) 15%, transparent)',
                              color: 'var(--color-secondary)'
                            }}
                          >
                            {reason.metric}
                          </div>
                        </div>
                        
                        <p 
                          className="text-base leading-relaxed mb-4"
                          style={{ color: 'var(--color-muted-foreground)' }}
                        >
                          {reason.description}
                        </p>

                        {/* Features List */}
                        <div className="grid grid-cols-2 gap-2">
                          {reason.features.map((feature, featureIndex) => (
                            <div 
                              key={featureIndex}
                              className="flex items-center gap-2"
                            >
                              <CheckCircle2 
                                className="h-4 w-4" 
                                style={{ color: 'var(--color-secondary)' }}
                              />
                              <span 
                                className="text-sm font-medium"
                                style={{ color: 'var(--color-card-foreground)' }}
                              >
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <ArrowRight 
                        className={`h-6 w-6 transition-all duration-500 ${
                          isActive ? 'transform translate-x-2 scale-125' : ''
                        }`}
                        style={{
                          color: isActive 
                            ? 'var(--color-primary)' 
                            : 'var(--color-muted)'
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Featured Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Feature Card */}
            <div 
              className="p-10 rounded-3xl border-2 backdrop-blur-sm shadow-2xl"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-primary) 5%, var(--color-card))',
                borderColor: 'var(--color-primary)',
                boxShadow: `0 30px 60px color-mix(in srgb, var(--color-primary) 20%, transparent)`
              }}
            >
              <div className="text-center mb-8">
                <div 
                  className="inline-flex h-24 w-24 items-center justify-center rounded-3xl mb-6 animate-pulse"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    boxShadow: `0 20px 40px color-mix(in srgb, var(--color-primary) 30%, transparent)`
                  }}
                >
                  {React.createElement(reasonsData[activeCard].icon, {
                    className: "h-12 w-12",
                    style: { color: 'var(--color-primary-foreground)' }
                  })}
                </div>
                
                <h3 
                  className="text-3xl font-black mb-4"
                  style={{ color: 'var(--color-card-foreground)' }}
                >
                  {reasonsData[activeCard].title}
                </h3>
                
                <div 
                  className="inline-block px-4 py-2 rounded-full text-lg font-bold"
                  style={{
                    backgroundColor: 'var(--color-secondary)',
                    color: 'var(--color-secondary-foreground)'
                  }}
                >
                  {reasonsData[activeCard].metric}
                </div>
              </div>

              <div 
                className="p-6 rounded-2xl mb-6"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--color-secondary) 8%, transparent)'
                }}
              >
                <p 
                  className="text-lg leading-relaxed text-center"
                  style={{ color: 'var(--color-card-foreground)' }}
                >
                  {reasonsData[activeCard].description}
                </p>
              </div>

              {/* Call to Action */}
              <button 
                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundColor: 'var(--color-primary)',
                  color: 'var(--color-primary-foreground)'
                }}
              >
                <Zap className="h-6 w-6" />
                Get Started Today
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>

            {/* Stats Panel */}
            <div 
              className="grid grid-cols-2 gap-4 p-6 rounded-2xl backdrop-blur-sm border"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-card) 80%, transparent)',
                borderColor: 'var(--color-border)'
              }}
            >
              <div className="text-center">
                <div 
                  className="text-3xl font-black mb-2"
                  style={{ color: 'var(--color-primary)' }}
                >
                  500+
                </div>
                <div 
                  className="text-sm font-medium"
                  style={{ color: 'var(--color-muted-foreground)' }}
                >
                  Happy Clients
                </div>
              </div>
              <div className="text-center">
                <div 
                  className="text-3xl font-black mb-2"
                  style={{ color: 'var(--color-secondary)' }}
                >
                  98%
                </div>
                <div 
                  className="text-sm font-medium"
                  style={{ color: 'var(--color-muted-foreground)' }}
                >
                  Success Rate
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3">
              {reasonsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`transition-all duration-300 rounded-full ${
                    activeCard === index ? 'w-8 h-3' : 'w-3 h-3'
                  }`}
                  style={{
                    backgroundColor: activeCard === index 
                      ? 'var(--color-primary)' 
                      : 'color-mix(in srgb, var(--color-muted) 40%, transparent)'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes mesh-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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