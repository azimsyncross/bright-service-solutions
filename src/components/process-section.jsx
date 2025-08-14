import React, { useState } from 'react';
import { ScanSearch, Puzzle, Rocket, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";

const processSteps = [
  {
    icon: ScanSearch,
    title: "Discovery & Strategy",
    description:
      "We start by understanding your business, goals, and audience to build a tailored, data-backed strategy.",
    duration: "1-2 weeks",
    deliverables: ["Market Analysis", "Strategy Blueprint", "Goal Setting"]
  },
  {
    icon: Puzzle,
    title: "Implementation",
    description:
      "Our experts execute the plan, from setting up campaigns and optimizing your site to creating compelling content.",
    duration: "2-4 weeks",
    deliverables: ["Campaign Setup", "Content Creation", "System Integration"]
  },
  {
    icon: Rocket,
    title: "Launch & Monitor",
    description:
      "We launch the campaigns and continuously monitor performance, making real-time adjustments for maximum impact.",
    duration: "Ongoing",
    deliverables: ["Performance Tracking", "Real-time Optimization", "24/7 Monitoring"]
  },
  {
    icon: TrendingUp,
    title: "Analysis & Growth",
    description:
      "We analyze the data, provide transparent reports, and refine our strategy to drive continuous, sustainable growth.",
    duration: "Monthly",
    deliverables: ["Data Analysis", "Growth Reports", "Strategy Refinement"]
  },
];

// SectionHeader component
function SectionHeader({ tagline, title, description }) {
  return (
    <div className="text-center mb-20">
      <span 
        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full border-2 mb-6 backdrop-blur-sm"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--color-primary) 10%, transparent)',
          color: 'var(--color-primary)',
          borderColor: 'var(--color-primary)'
        }}
      >
        <CheckCircle className="w-4 h-4" />
        {tagline}
      </span>
      <h2 
        className="text-5xl md:text-6xl font-black mb-6 leading-tight"
        style={{ color: 'var(--color-foreground)' }}
      >
        {title}
      </h2>
      <p 
        className="text-xl max-w-3xl mx-auto leading-relaxed"
        style={{ color: 'var(--color-muted-foreground)' }}
      >
        {description}
      </p>
    </div>
  );
}

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section 
      className="relative py-32 overflow-hidden"
      style={{
        backgroundColor: 'var(--color-background)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ backgroundColor: 'var(--color-primary)' }}
        />
        <div 
          className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full blur-3xl opacity-15 animate-pulse"
          style={{ 
            backgroundColor: 'var(--color-secondary)',
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ 
            backgroundColor: 'var(--color-accent)',
            animationDelay: '2s'
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <SectionHeader
          tagline="Our Method"
          title="Strategic Process"
          description="From discovery to growth, our proven methodology transforms your business vision into measurable success."
        />

        {/* Interactive Process Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Step Navigation */}
          <div className="space-y-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <div
                  key={index}
                  className={`relative cursor-pointer transition-all duration-500 ${
                    isActive ? 'transform scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div 
                      className="absolute left-8 top-20 w-0.5 h-12 transition-all duration-500"
                      style={{
                        backgroundColor: isActive 
                          ? 'var(--color-primary)' 
                          : 'color-mix(in srgb, var(--color-border) 50%, transparent)'
                      }}
                    />
                  )}

                  <div 
                    className={`flex items-center gap-6 p-6 rounded-2xl border-2 backdrop-blur-sm transition-all duration-500 ${
                      isActive ? 'shadow-2xl' : 'hover:shadow-lg'
                    }`}
                    style={{
                      backgroundColor: isActive 
                        ? 'color-mix(in srgb, var(--color-primary) 5%, var(--color-card))' 
                        : 'var(--color-card)',
                      borderColor: isActive 
                        ? 'var(--color-primary)' 
                        : 'var(--color-border)',
                      boxShadow: isActive 
                        ? `0 25px 50px color-mix(in srgb, var(--color-primary) 15%, transparent)` 
                        : undefined
                    }}
                  >
                    {/* Step Icon */}
                    <div 
                      className={`flex h-16 w-16 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                        isActive ? 'animate-pulse' : ''
                      }`}
                      style={{
                        backgroundColor: isActive 
                          ? 'var(--color-primary)' 
                          : 'color-mix(in srgb, var(--color-primary) 10%, var(--color-card))',
                        borderColor: 'var(--color-primary)'
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

                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span 
                          className="text-sm font-bold px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: 'color-mix(in srgb, var(--color-secondary) 20%, transparent)',
                            color: 'var(--color-secondary)'
                          }}
                        >
                          Step {index + 1}
                        </span>
                        <span 
                          className="text-sm font-medium"
                          style={{ color: 'var(--color-muted-foreground)' }}
                        >
                          {step.duration}
                        </span>
                      </div>
                      <h3 
                        className={`text-xl font-bold mb-2 transition-colors duration-300`}
                        style={{
                          color: isActive 
                            ? 'var(--color-primary)' 
                            : 'var(--color-card-foreground)'
                        }}
                      >
                        {step.title}
                      </h3>
                      <p 
                        className="text-sm leading-relaxed"
                        style={{ color: 'var(--color-muted-foreground)' }}
                      >
                        {step.description}
                      </p>
                    </div>

                    <ArrowRight 
                      className={`h-6 w-6 transition-all duration-300 ${
                        isActive ? 'transform translate-x-1' : ''
                      }`}
                      style={{
                        color: isActive 
                          ? 'var(--color-primary)' 
                          : 'var(--color-muted)'
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Active Step Details */}
          <div className="lg:pl-12">
            <div 
              className="p-8 rounded-3xl border-2 backdrop-blur-sm transition-all duration-500 shadow-2xl"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--color-primary) 3%, var(--color-card))',
                borderColor: 'color-mix(in srgb, var(--color-primary) 30%, var(--color-border))',
                boxShadow: `0 30px 60px color-mix(in srgb, var(--color-primary) 10%, transparent)`
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="flex h-20 w-20 items-center justify-center rounded-2xl border-2 animate-pulse"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    borderColor: 'color-mix(in srgb, var(--color-primary) 80%, white)'
                  }}
                >
                  {React.createElement(processSteps[activeStep].icon, {
                    className: "h-10 w-10",
                    style: { color: 'var(--color-primary-foreground)' }
                  })}
                </div>
                <div>
                  <h3 
                    className="text-2xl font-black mb-1"
                    style={{ color: 'var(--color-card-foreground)' }}
                  >
                    {processSteps[activeStep].title}
                  </h3>
                  <span 
                    className="text-lg font-semibold"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {processSteps[activeStep].duration}
                  </span>
                </div>
              </div>

              <p 
                className="text-lg leading-relaxed mb-8"
                style={{ color: 'var(--color-muted-foreground)' }}
              >
                {processSteps[activeStep].description}
              </p>

              {/* Deliverables */}
              <div>
                <h4 
                  className="text-lg font-bold mb-4"
                  style={{ color: 'var(--color-card-foreground)' }}
                >
                  Key Deliverables
                </h4>
                <div className="space-y-3">
                  {processSteps[activeStep].deliverables.map((deliverable, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: 'color-mix(in srgb, var(--color-secondary) 8%, transparent)'
                      }}
                    >
                      <CheckCircle 
                        className="h-5 w-5" 
                        style={{ color: 'var(--color-secondary)' }}
                      />
                      <span 
                        className="font-medium"
                        style={{ color: 'var(--color-card-foreground)' }}
                      >
                        {deliverable}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-16 text-center">
          <div 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-sm border"
            style={{
              backgroundColor: 'color-mix(in srgb, var(--color-card) 80%, transparent)',
              borderColor: 'var(--color-border)'
            }}
          >
            <span 
              className="text-sm font-medium"
              style={{ color: 'var(--color-muted-foreground)' }}
            >
              Step {activeStep + 1} of {processSteps.length}
            </span>
            <div className="flex gap-2 ml-2">
              {processSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeStep ? 'w-6' : ''
                  }`}
                  style={{
                    backgroundColor: index === activeStep 
                      ? 'var(--color-primary)' 
                      : 'color-mix(in srgb, var(--color-muted) 30%, transparent)'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}