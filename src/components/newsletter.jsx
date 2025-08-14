import React, { useState } from 'react';
import { Mail, CheckCircle2, Loader2, Star, Award, Send, Sparkles, Bell, Zap } from "lucide-react";

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

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState("loading");
    await new Promise((res) => setTimeout(res, 2000)); // Simulated API delay
    setFormState("success");
    setTimeout(() => {
      setFormState("idle");
      setEmail("");
    }, 3000);
  };

  const benefits = [
    { icon: Zap, text: "Exclusive Marketing Tips" },
    { icon: Bell, text: "Latest Industry Trends" },
    { icon: Sparkles, text: "Growth Strategies" },
    { icon: Star, text: "Expert Insights" }
  ];

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
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${Math.random() * 10 + 15}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <SectionHeader
          tagline="Stay Connected"
          title="Stay Ahead of the Curve"
          description="Subscribe to our newsletter for the latest digital marketing insights, exclusive tips, and cutting-edge strategies that drive real results."
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          {/* Left Side - Benefits */}
          <div className="lg:col-span-2 space-y-6">
            <div 
              className="p-8 rounded-3xl border-2 backdrop-blur-sm"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-primary) 5%, var(--color-card))',
                borderColor: 'var(--color-primary)'
              }}
            >
              <div className="text-center mb-6">
                <div 
                  className="inline-flex h-16 w-16 items-center justify-center rounded-2xl mb-4 animate-pulse"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    boxShadow: `0 15px 35px color-mix(in srgb, var(--color-primary) 30%, transparent)`
                  }}
                >
                  <Mail 
                    className="h-8 w-8" 
                    style={{ color: 'var(--color-primary-foreground)' }}
                  />
                </div>
                <h3 
                  className="text-2xl font-bold mb-2"
                  style={{ color: 'var(--color-card-foreground)' }}
                >
                  What You'll Get
                </h3>
                <p 
                  className="text-sm"
                  style={{ color: 'var(--color-muted-foreground)' }}
                >
                  Join 10,000+ marketers already growing
                </p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div 
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: 'color-mix(in srgb, var(--color-secondary) 8%, transparent)'
                      }}
                    >
                      <div 
                        className="h-10 w-10 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: 'var(--color-secondary)',
                          boxShadow: `0 8px 20px color-mix(in srgb, var(--color-secondary) 25%, transparent)`
                        }}
                      >
                        <Icon 
                          className="h-5 w-5" 
                          style={{ color: 'var(--color-secondary-foreground)' }}
                        />
                      </div>
                      <span 
                        className="font-semibold"
                        style={{ color: 'var(--color-card-foreground)' }}
                      >
                        {benefit.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats */}
            <div 
              className="grid grid-cols-2 gap-4 p-6 rounded-2xl backdrop-blur-sm border"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-card) 80%, transparent)',
                borderColor: 'var(--color-border)'
              }}
            >
              <div className="text-center">
                <div 
                  className="text-3xl font-black mb-1"
                  style={{ color: 'var(--color-primary)' }}
                >
                  10K+
                </div>
                <div 
                  className="text-sm font-medium"
                  style={{ color: 'var(--color-muted-foreground)' }}
                >
                  Subscribers
                </div>
              </div>
              <div className="text-center">
                <div 
                  className="text-3xl font-black mb-1"
                  style={{ color: 'var(--color-secondary)' }}
                >
                  Weekly
                </div>
                <div 
                  className="text-sm font-medium"
                  style={{ color: 'var(--color-muted-foreground)' }}
                >
                  Insights
                </div>
              </div>
            </div>
          </div>

          {/* Center - Main Form */}
          <div className="lg:col-span-3">
            <div 
              className="relative p-12 rounded-3xl border-2 backdrop-blur-sm shadow-2xl"
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
                {formState === "success" ? (
                  /* Success State */
                  <div className="text-center py-12">
                    <div 
                      className="inline-flex h-24 w-24 items-center justify-center rounded-3xl mb-6 animate-bounce"
                      style={{
                        backgroundColor: 'var(--color-secondary)',
                        boxShadow: `0 20px 40px color-mix(in srgb, var(--color-secondary) 30%, transparent)`
                      }}
                    >
                      <CheckCircle2 
                        className="h-12 w-12" 
                        style={{ color: 'var(--color-secondary-foreground)' }}
                      />
                    </div>
                    <h3 
                      className="text-3xl font-black mb-4"
                      style={{ color: 'var(--color-card-foreground)' }}
                    >
                      Welcome Aboard! 🎉
                    </h3>
                    <p 
                      className="text-lg"
                      style={{ color: 'var(--color-muted-foreground)' }}
                    >
                      Thanks for subscribing! Check your inbox for a welcome gift.
                    </p>
                  </div>
                ) : (
                  /* Form State */
                  <div>
                    <div className="text-center mb-8">
                      <h3 
                        className="text-3xl font-black mb-4"
                        style={{ color: 'var(--color-card-foreground)' }}
                      >
                        Ready to Transform Your Marketing?
                      </h3>
                      <p 
                        className="text-lg"
                        style={{ color: 'var(--color-muted-foreground)' }}
                      >
                        Get exclusive insights delivered to your inbox every week
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          required
                          disabled={formState === "loading"}
                          className="w-full px-6 py-4 rounded-2xl border-2 font-medium text-lg transition-all duration-300 focus:outline-none focus:scale-105 disabled:opacity-60"
                          style={{
                            backgroundColor: 'color-mix(in srgb, var(--color-background) 90%, transparent)',
                            borderColor: 'var(--color-border)',
                            color: 'var(--color-foreground)',
                            boxShadow: `0 10px 25px color-mix(in srgb, var(--color-primary) 10%, transparent)`
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = 'var(--color-primary)';
                            e.target.style.boxShadow = `0 15px 35px color-mix(in srgb, var(--color-primary) 20%, transparent)`;
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = 'var(--color-border)';
                            e.target.style.boxShadow = `0 10px 25px color-mix(in srgb, var(--color-primary) 10%, transparent)`;
                          }}
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          <Mail 
                            className="h-6 w-6" 
                            style={{ color: 'var(--color-muted)' }}
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={formState === "loading"}
                        className="w-full flex items-center justify-center gap-3 py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                        style={{
                          backgroundColor: formState === "loading" 
                            ? 'color-mix(in srgb, var(--color-primary) 60%, transparent)' 
                            : 'var(--color-primary)',
                          color: 'var(--color-primary-foreground)',
                          boxShadow: `0 15px 35px color-mix(in srgb, var(--color-primary) 30%, transparent)`
                        }}
                      >
                        {formState === "loading" ? (
                          <>
                            <Loader2 className="h-6 w-6 animate-spin" />
                            Subscribing...
                          </>
                        ) : (
                          <>
                            <Send className="h-6 w-6" />
                            Subscribe Now
                            <Sparkles className="h-6 w-6" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="mt-6 text-center">
                      <p 
                        className="text-sm"
                        style={{ color: 'var(--color-muted-foreground)' }}
                      >
                        No spam, ever. Unsubscribe anytime with one click.
                      </p>
                      <div className="flex justify-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className="h-4 w-4 fill-current"
                            style={{ color: 'var(--color-secondary)' }}
                          />
                        ))}
                        <span 
                          className="ml-2 text-sm font-semibold"
                          style={{ color: 'var(--color-secondary)' }}
                        >
                          Trusted by 10,000+ marketers
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
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