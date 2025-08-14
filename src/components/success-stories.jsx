import React, { useState, useEffect } from 'react';
import { Zap, TrendingUp, Award, Star, CheckCircle2, ArrowRight, BarChart3, Target } from "lucide-react";
import { Link } from 'react-router-dom';

const storiesData = [
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200",
    category: "E-commerce",
    title: "250% Increase in Organic Traffic for 'Urban Kicks'",
    description: "A comprehensive SEO and content strategy catapulted this online sneaker store to the top of search results.",
    results: [
      "Doubled conversion rate",
      "Ranked #1 for 15+ keywords",
      "Reduced ad spend by 40%",
    ],
    metric: "250% Growth",
    duration: "6 Months",
    color: "primary"
  },
  {
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200",
    category: "SaaS",
    title: "Generated 5,000+ MQLs for 'InnovateAI'",
    description: "Through targeted PPC and LinkedIn campaigns, we fueled the sales pipeline for a leading AI startup.",
    results: [
      "30% lower cost-per-lead",
      "Expanded into 3 new markets",
      "Achieved a 5x ROAS",
    ],
    metric: "5,000+ MQLs",
    duration: "8 Months",
    color: "secondary"
  },
  {
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200",
    category: "Local Business",
    title: "Local SEO Dominance for 'The Corner Cafe'",
    description: "We put a beloved local cafe on the map, driving a 70% increase in foot traffic through local SEO.",
    results: [
      "Top 3 in Google Maps Pack",
      "5-star reviews increased by 150%",
      "Website bookings up by 200%",
    ],
    metric: "70% More Traffic",
    duration: "4 Months",
    color: "accent"
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
      <p 
        className="text-xl max-w-4xl mx-auto leading-relaxed"
        style={{ color: 'var(--color-muted-foreground)' }}
      >
        {description}
      </p>
    </div>
  );
}

export default function SuccessStoriesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCard, setActiveCard] = useState(0);

  // Auto-cycle through cards for subtle animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % storiesData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full blur-2xl opacity-20 animate-float"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? 'var(--color-primary)' : i % 3 === 1 ? 'var(--color-secondary)' : 'var(--color-accent)',
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${Math.random() * 12 + 18}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <SectionHeader
          tagline="Proven Results"
          title="Our Success Stories"
          description="We don't just talk the talk. See how we've transformed businesses like yours with data-driven strategies and measurable results."
        />

        {/* Success Stats Overview */}
        <div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 p-8 rounded-3xl border-2 backdrop-blur-sm"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--color-primary) 5%, var(--color-card))',
            borderColor: 'var(--color-primary)'
          }}
        >
          <div className="text-center">
            <TrendingUp 
              className="h-8 w-8 mx-auto mb-3" 
              style={{ color: 'var(--color-primary)' }}
            />
            <div 
              className="text-3xl font-black mb-1"
              style={{ color: 'var(--color-primary)' }}
            >
              500+
            </div>
            <div 
              className="text-sm font-medium"
              style={{ color: 'var(--color-muted-foreground)' }}
            >
              Success Stories
            </div>
          </div>
          <div className="text-center">
            <BarChart3 
              className="h-8 w-8 mx-auto mb-3" 
              style={{ color: 'var(--color-secondary)' }}
            />
            <div 
              className="text-3xl font-black mb-1"
              style={{ color: 'var(--color-secondary)' }}
            >
              300%
            </div>
            <div 
              className="text-sm font-medium"
              style={{ color: 'var(--color-muted-foreground)' }}
            >
              Avg ROI Increase
            </div>
          </div>
          <div className="text-center">
            <Target 
              className="h-8 w-8 mx-auto mb-3" 
              style={{ color: 'var(--color-accent)' }}
            />
            <div 
              className="text-3xl font-black mb-1"
              style={{ color: 'var(--color-accent)' }}
            >
              98%
            </div>
            <div 
              className="text-sm font-medium"
              style={{ color: 'var(--color-muted-foreground)' }}
            >
              Client Satisfaction
            </div>
          </div>
          <div className="text-center">
            <Award 
              className="h-8 w-8 mx-auto mb-3" 
              style={{ color: 'var(--color-primary)' }}
            />
            <div 
              className="text-3xl font-black mb-1"
              style={{ color: 'var(--color-primary)' }}
            >
              50+
            </div>
            <div 
              className="text-sm font-medium"
              style={{ color: 'var(--color-muted-foreground)' }}
            >
              Industry Awards
            </div>
          </div>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storiesData.map((story, index) => {
            const isHovered = hoveredCard === index;
            const isActive = activeCard === index;

            return (
              <div
                key={story.title}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border-2 backdrop-blur-sm transition-all duration-700 cursor-pointer ${
                  isHovered || isActive ? 'scale-105' : 'hover:scale-102'
                }`}
                style={{
                  backgroundColor: isHovered || isActive 
                    ? 'color-mix(in srgb, var(--color-primary) 8%, var(--color-card))' 
                    : 'color-mix(in srgb, var(--color-card) 90%, transparent)',
                  borderColor: isHovered || isActive 
                    ? 'var(--color-primary)' 
                    : 'var(--color-border)',
                  boxShadow: isHovered || isActive 
                    ? `0 25px 50px color-mix(in srgb, var(--color-primary) 25%, transparent)` 
                    : `0 10px 25px color-mix(in srgb, var(--color-primary) 10%, transparent)`
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveCard(index)}
              >
                {/* Animated Background Pattern */}
                {(isHovered || isActive) && (
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

                {/* Image Section */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                      isHovered || isActive ? 'scale-110' : 'group-hover:scale-105'
                    }`}
                    src={story.image}
                    alt={story.title}
                  />
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to bottom, 
                        transparent 0%, 
                        color-mix(in srgb, var(--color-background) 60%, transparent) 100%)`
                    }}
                  />
                  
                  {/* Category Badge */}
                  <div 
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm"
                    style={{
                      backgroundColor: 'color-mix(in srgb, var(--color-primary) 20%, transparent)',
                      color: 'var(--color-primary)',
                      border: `1px solid var(--color-primary)`
                    }}
                  >
                    {story.category}
                  </div>

                  {/* Metric Badge */}
                  <div 
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm"
                    style={{
                      backgroundColor: 'color-mix(in srgb, var(--color-secondary) 20%, transparent)',
                      color: 'var(--color-secondary)',
                      border: `1px solid var(--color-secondary)`
                    }}
                  >
                    {story.metric}
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative flex flex-1 flex-col justify-between p-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <h3 
                        className={`text-xl font-bold leading-tight transition-colors duration-300 ${
                          isHovered || isActive ? '' : ''
                        }`}
                        style={{
                          color: isHovered || isActive 
                            ? 'var(--color-primary)' 
                            : 'var(--color-card-foreground)'
                        }}
                      >
                        {story.title}
                      </h3>
                    </div>
                    
                    <p 
                      className="text-base leading-relaxed mb-6"
                      style={{ color: 'var(--color-muted-foreground)' }}
                    >
                      {story.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Zap 
                        className="h-5 w-5" 
                        style={{ color: 'var(--color-secondary)' }}
                      />
                      <h4 
                        className="text-lg font-bold"
                        style={{ color: 'var(--color-card-foreground)' }}
                      >
                        Key Wins:
                      </h4>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {story.results.map((result, resultIndex) => (
                        <div 
                          key={resultIndex}
                          className="flex items-start gap-3 p-2 rounded-xl transition-all duration-300"
                          style={{
                            backgroundColor: isHovered || isActive 
                              ? 'color-mix(in srgb, var(--color-secondary) 8%, transparent)' 
                              : 'transparent'
                          }}
                        >
                          <CheckCircle2 
                            className="h-4 w-4 mt-0.5 flex-shrink-0" 
                            style={{ color: 'var(--color-secondary)' }}
                          />
                          <span 
                            className="text-sm font-medium"
                            style={{ color: 'var(--color-card-foreground)' }}
                          >
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Duration Info */}
                    <div 
                      className="flex items-center justify-between p-4 rounded-xl border"
                      style={{
                        backgroundColor: 'color-mix(in srgb, var(--color-primary) 5%, transparent)',
                        borderColor: 'var(--color-border)'
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <div 
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: 'var(--color-primary)' }}
                        />
                        <span 
                          className="text-sm font-semibold"
                          style={{ color: 'var(--color-muted-foreground)' }}
                        >
                          Completed in {story.duration}
                        </span>
                      </div>
                      <ArrowRight 
                        className={`h-5 w-5 transition-all duration-500 ${
                          isHovered || isActive ? 'transform translate-x-2 scale-125' : ''
                        }`}
                        style={{
                          color: isHovered || isActive 
                            ? 'var(--color-primary)' 
                            : 'var(--color-muted)'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link 
          to="/contact-us"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-primary-foreground)',
              boxShadow: `0 15px 35px color-mix(in srgb, var(--color-primary) 30%, transparent)`
            }}
          >
            <TrendingUp className="h-6 w-6" />
            Start Your Success Story
            <ArrowRight className="h-6 w-6" />
          </Link>
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