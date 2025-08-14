import React, { useState, useEffect } from 'react';
import { Stethoscope, Building, UtensilsCrossed, GraduationCap, LandPlot, ArrowUpRight, Sparkles } from "lucide-react";

const industriesData = [
  { 
    icon: Stethoscope, 
    name: "Healthcare",
    description: "Transforming patient care through digital innovation",
    stats: "200+ Projects",
    color: "#10B981" // Green theme
  },
  { 
    icon: Building, 
    name: "SaaS & Tech",
    description: "Scaling startups and enterprise solutions",
    stats: "500+ Companies",
    color: "#3B82F6" // Blue theme
  },
  
  { 
    icon: GraduationCap, 
    name: "Education",
    description: "Revolutionizing learning and academic excellence",
    stats: "300+ Institutions",
    color: "#8B5CF6" // Purple theme
  },
  { 
    icon: LandPlot, 
    name: "Real Estate",
    description: "Building the future of property solutions",
    stats: "400+ Properties",
    color: "#EF4444" // Red theme
  },
];

// SectionHeader component
function SectionHeader({ tagline, title, description }) {
  return (
    <div className="text-center mb-20">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Sparkles 
          className="w-5 h-5 animate-pulse" 
          style={{ color: 'var(--color-primary)' }}
        />
        <span 
          className="text-sm font-bold tracking-wider uppercase px-4 py-2 rounded-full border"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--color-primary) 10%, transparent)',
            color: 'var(--color-primary)',
            borderColor: 'var(--color-primary)'
          }}
        >
          {tagline}
        </span>
        <Sparkles 
          className="w-5 h-5 animate-pulse" 
          style={{ 
            color: 'var(--color-primary)',
            animationDelay: '0.5s'
          }}
        />
      </div>
      <h2 
        className="text-4xl md:text-6xl font-black mb-6 leading-tight"
        style={{ color: 'var(--color-foreground)' }}
      >
        {title}
      </h2>
      <p 
        className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        style={{ color: 'var(--color-muted-foreground)' }}
      >
        {description}
      </p>
    </div>
  );
}

export default function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndustry((prev) => (prev + 1) % industriesData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section 
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}
        />
        
        {/* Floating Orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ backgroundColor: 'var(--color-primary)' }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 animate-pulse"
          style={{ 
            backgroundColor: 'var(--color-secondary)',
            animationDelay: '2s'
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <SectionHeader
          tagline="Our Expertise"
          title="Industries We Transform"
          description="We adapt our cutting-edge strategies to fit the unique needs of various industries, delivering unparalleled results that drive success."
        />

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left: Industry Cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industriesData.map((industry, index) => {
                const Icon = industry.icon;
                const isActive = activeIndustry === index;

                return (
                  <div
                    key={industry.name}
                    className={`group relative cursor-pointer transition-all duration-500 ${
                      isActive ? 'scale-105' : 'hover:scale-102'
                    }`}
                    onClick={() => {
                      setActiveIndustry(index);
                      setIsAutoPlaying(false);
                    }}
                    onMouseEnter={() => {
                      setActiveIndustry(index);
                      setIsAutoPlaying(false);
                    }}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                  >
                    {/* Card */}
                    <div 
                      className={`relative p-8 rounded-3xl border-2 backdrop-blur-sm transition-all duration-500 overflow-hidden ${
                        isActive ? 'shadow-2xl' : 'hover:shadow-lg'
                      }`}
                      style={{
                        backgroundColor: isActive 
                          ? 'color-mix(in srgb, var(--color-primary) 8%, var(--color-card))' 
                          : 'var(--color-card)',
                        borderColor: isActive 
                          ? 'var(--color-primary)' 
                          : 'var(--color-border)',
                        boxShadow: isActive 
                          ? `0 25px 50px color-mix(in srgb, var(--color-primary) 20%, transparent)` 
                          : undefined
                      }}
                    >
                      {/* Animated Background Pattern */}
                      {isActive && (
                        <div 
                          className="absolute inset-0 opacity-5"
                          style={{
                            background: `repeating-linear-gradient(
                              45deg,
                              var(--color-primary),
                              var(--color-primary) 10px,
                              transparent 10px,
                              transparent 20px
                            )`,
                            animation: 'slide 3s linear infinite'
                          }}
                        />
                      )}

                      {/* Icon Container */}
                      <div 
                        className={`relative flex h-16 w-16 items-center justify-center rounded-2xl mb-6 transition-all duration-300 ${
                          isActive ? 'animate-bounce' : 'group-hover:scale-110'
                        }`}
                        style={{
                          backgroundColor: isActive 
                            ? 'var(--color-primary)' 
                            : 'color-mix(in srgb, var(--color-primary) 10%, transparent)',
                          boxShadow: isActive 
                            ? `0 10px 30px color-mix(in srgb, var(--color-primary) 30%, transparent)` 
                            : undefined
                        }}
                      >
                        <Icon 
                          className={`h-8 w-8 transition-all duration-300 ${
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
                      <h3 
                        className={`text-xl font-bold mb-3 transition-colors duration-300`}
                        style={{
                          color: isActive 
                            ? 'var(--color-primary)' 
                            : 'var(--color-card-foreground)'
                        }}
                      >
                        {industry.name}
                      </h3>
                      
                      <p 
                        className="text-sm leading-relaxed mb-4"
                        style={{ color: 'var(--color-muted-foreground)' }}
                      >
                        {industry.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span 
                          className="text-xs font-semibold px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: 'color-mix(in srgb, var(--color-secondary) 15%, transparent)',
                            color: 'var(--color-secondary)'
                          }}
                        >
                          {industry.stats}
                        </span>
                        
                        <ArrowUpRight 
                          className={`h-5 w-5 transition-all duration-300 ${
                            isActive ? 'transform translate-x-1 -translate-y-1' : ''
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
          </div>

          {/* Right: Featured Industry Highlight */}
          <div className="space-y-8">
            {/* Featured Card */}
            <div 
              className="p-8 rounded-3xl border-2 backdrop-blur-sm shadow-2xl"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-primary) 5%, var(--color-card))',
                borderColor: 'var(--color-primary)',
                boxShadow: `0 30px 60px color-mix(in srgb, var(--color-primary) 15%, transparent)`
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="flex h-20 w-20 items-center justify-center rounded-2xl animate-pulse"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    boxShadow: `0 15px 35px color-mix(in srgb, var(--color-primary) 25%, transparent)`
                  }}
                >
                  {React.createElement(industriesData[activeIndustry].icon, {
                    className: "h-10 w-10",
                    style: { color: 'var(--color-primary-foreground)' }
                  })}
                </div>
                <div>
                  <h3 
                    className="text-2xl font-black"
                    style={{ color: 'var(--color-card-foreground)' }}
                  >
                    {industriesData[activeIndustry].name}
                  </h3>
                  <span 
                    className="text-lg font-semibold"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Featured Industry
                  </span>
                </div>
              </div>

              <p 
                className="text-lg leading-relaxed mb-6"
                style={{ color: 'var(--color-muted-foreground)' }}
              >
                {industriesData[activeIndustry].description}
              </p>

              <div 
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--color-secondary) 10%, transparent)'
                }}
              >
                <div 
                  className="w-4 h-4 rounded-full animate-pulse"
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                />
                <span 
                  className="font-semibold"
                  style={{ color: 'var(--color-card-foreground)' }}
                >
                  {industriesData[activeIndustry].stats}
                </span>
              </div>
            </div>

            {/* Auto-play Toggle */}
            <div 
              className="text-center p-4 rounded-2xl backdrop-blur-sm border"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-card) 80%, transparent)',
                borderColor: 'var(--color-border)'
              }}
            >
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="flex items-center gap-2 mx-auto px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: isAutoPlaying 
                    ? 'var(--color-primary)' 
                    : 'color-mix(in srgb, var(--color-primary) 20%, transparent)',
                  color: isAutoPlaying 
                    ? 'var(--color-primary-foreground)' 
                    : 'var(--color-primary)'
                }}
              >
                <div 
                  className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'animate-pulse' : ''}`}
                  style={{
                    backgroundColor: isAutoPlaying 
                      ? 'var(--color-primary-foreground)' 
                      : 'var(--color-primary)'
                  }}
                />
                <span className="text-sm font-medium">
                  {isAutoPlaying ? 'Auto-Playing' : 'Paused'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}