import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, Award, Users, CheckCircle2, Sparkles } from "lucide-react";

const testimonialsData = [
  {
    quote: "Working with BRIGHT SERVICE SOLUTION COMPANY was a game-changer. Their SEO strategy doubled our organic traffic in just six months. We couldn't be happier with the results.",
    name: "Sarah Johnson",
    title: "CEO, Urban Kicks",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    rating: 5,
    metric: "200% Traffic Growth",
    industry: "E-commerce"
  },
  {
    quote: "The team's expertise in PPC is unmatched. They optimized our ad spend and delivered a 5x return on investment. Highly recommended!",
    name: "Michael Chen",
    title: "Founder, InnovateAI",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d",
    rating: 5,
    metric: "500% ROI Increase",
    industry: "Technology"
  },
  {
    quote: "As a local business, we struggled to get noticed online. BRIGHT SERVICE SOLUTION COMPANY's local SEO services put us on the map. Our foot traffic has increased by over 70%.",
    name: "Emily Rodriguez",
    title: "Owner, The Corner Cafe",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
    rating: 5,
    metric: "70% More Customers",
    industry: "Food & Beverage"
  },
];

// SectionHeader component (matching your design)
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
      {description && (
        <p 
          className="text-xl max-w-4xl mx-auto leading-relaxed"
          style={{ color: 'var(--color-muted-foreground)' }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-cycle through testimonials
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const currentTestimonial = testimonialsData[currentIndex];

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
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${Math.random() * 10 + 15}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <SectionHeader
          tagline="Client Voices"
          title="What Our Partners Say"
          description="Don't just take our word for it. Hear from the businesses we've helped transform their digital presence and achieve remarkable growth."
        />

        {/* Main Testimonials Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Left Navigation & Stats */}
          <div className="space-y-8">
            {/* Navigation Controls */}
            <div className="flex flex-col gap-4">
              <button
                onClick={prevTestimonial}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex items-center gap-3 p-4 rounded-2xl backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--color-card) 80%, transparent)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-card-foreground)'
                }}
              >
                <ChevronLeft className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
                <span className="font-semibold">Previous</span>
              </button>
              
              <button
                onClick={nextTestimonial}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex items-center gap-3 p-4 rounded-2xl backdrop-blur-sm border-2 transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--color-card) 80%, transparent)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-card-foreground)'
                }}
              >
                <span className="font-semibold">Next</span>
                <ChevronRight className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
              </button>
            </div>

            {/* Overall Stats */}
            <div 
              className="p-6 rounded-3xl backdrop-blur-sm border-2"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-primary) 5%, var(--color-card))',
                borderColor: 'var(--color-primary)'
              }}
            >
              <div className="text-center mb-4">
                <Users className="h-8 w-8 mx-auto mb-2" style={{ color: 'var(--color-primary)' }} />
                <h3 className="text-lg font-bold" style={{ color: 'var(--color-card-foreground)' }}>
                  Client Success
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-black" style={{ color: 'var(--color-primary)' }}>
                    500+
                  </div>
                  <div className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>
                    Happy Clients
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black" style={{ color: 'var(--color-secondary)' }}>
                    98%
                  </div>
                  <div className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>
                    Success Rate
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center - Main Testimonial */}
          <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div 
              className="p-10 rounded-3xl border-2 backdrop-blur-sm shadow-2xl transition-all duration-700 hover:scale-105"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-primary) 8%, var(--color-card))',
                borderColor: 'var(--color-primary)',
                boxShadow: `0 30px 60px color-mix(in srgb, var(--color-primary) 25%, transparent)`
              }}
            >
              {/* Animated Background Pattern */}
              <div 
                className="absolute inset-0 opacity-5 rounded-3xl"
                style={{
                  background: `repeating-conic-gradient(
                    from 0deg at 50% 50%,
                    var(--color-primary) 0deg 90deg,
                    transparent 90deg 180deg
                  )`,
                  animation: 'rotate 8s linear infinite'
                }}
              />

              <div className="relative">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div 
                    className="h-16 w-16 rounded-2xl flex items-center justify-center animate-pulse"
                    style={{
                      backgroundColor: 'var(--color-primary)',
                      boxShadow: `0 15px 35px color-mix(in srgb, var(--color-primary) 30%, transparent)`
                    }}
                  >
                    <Quote 
                      className="h-8 w-8" 
                      style={{ color: 'var(--color-primary-foreground)' }}
                    />
                  </div>
                </div>

                {/* Quote Text */}
                <blockquote 
                  className="text-xl leading-relaxed text-center mb-8 font-medium"
                  style={{ color: 'var(--color-card-foreground)' }}
                >
                  "{currentTestimonial.quote}"
                </blockquote>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 fill-current" 
                      style={{ color: 'var(--color-secondary)' }}
                    />
                  ))}
                </div>

                {/* Client Info */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <img
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      className="h-14 w-14 rounded-full border-2 object-cover"
                      style={{ borderColor: 'var(--color-primary)' }}
                    />
                    <div>
                      <h4 
                        className="text-lg font-bold"
                        style={{ color: 'var(--color-card-foreground)' }}
                      >
                        {currentTestimonial.name}
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ color: 'var(--color-muted-foreground)' }}
                      >
                        {currentTestimonial.title}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center gap-3">
                    <div 
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{
                        backgroundColor: 'color-mix(in srgb, var(--color-secondary) 15%, transparent)',
                        color: 'var(--color-secondary)'
                      }}
                    >
                      {currentTestimonial.metric}
                    </div>
                    <div 
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{
                        backgroundColor: 'color-mix(in srgb, var(--color-primary) 15%, transparent)',
                        color: 'var(--color-primary)'
                      }}
                    >
                      {currentTestimonial.industry}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - All Testimonials Preview */}
          <div className="space-y-4">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className={`p-4 rounded-2xl border-2 backdrop-blur-sm cursor-pointer transition-all duration-500 ${
                  index === currentIndex ? 'scale-105' : 'hover:scale-102'
                }`}
                style={{
                  backgroundColor: index === currentIndex 
                    ? 'color-mix(in srgb, var(--color-primary) 8%, var(--color-card))' 
                    : 'color-mix(in srgb, var(--color-card) 60%, transparent)',
                  borderColor: index === currentIndex 
                    ? 'var(--color-primary)' 
                    : 'var(--color-border)',
                  boxShadow: index === currentIndex 
                    ? `0 15px 35px color-mix(in srgb, var(--color-primary) 20%, transparent)` 
                    : undefined
                }}
                onClick={() => setCurrentIndex(index)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full object-cover border"
                    style={{ borderColor: 'var(--color-primary)' }}
                  />
                  <div className="flex-1">
                    <h5 
                      className="font-semibold text-sm"
                      style={{ 
                        color: index === currentIndex 
                          ? 'var(--color-primary)' 
                          : 'var(--color-card-foreground)' 
                      }}
                    >
                      {testimonial.name}
                    </h5>
                    <p 
                      className="text-xs"
                      style={{ color: 'var(--color-muted-foreground)' }}
                    >
                      {testimonial.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {index === currentIndex && (
                      <CheckCircle2 
                        className="h-4 w-4" 
                        style={{ color: 'var(--color-secondary)' }}
                      />
                    )}
                    <Sparkles 
                      className={`h-4 w-4 ${index === currentIndex ? 'animate-pulse' : ''}`}
                      style={{ 
                        color: index === currentIndex 
                          ? 'var(--color-primary)' 
                          : 'var(--color-muted)' 
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index ? 'w-8 h-3' : 'w-3 h-3'
              }`}
              style={{
                backgroundColor: currentIndex === index 
                  ? 'var(--color-primary)' 
                  : 'color-mix(in srgb, var(--color-muted) 40%, transparent)'
              }}
            />
          ))}
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