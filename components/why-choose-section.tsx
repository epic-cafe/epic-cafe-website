"use client";

import { Drumstick, Flame, BadgeCheck, Zap } from "lucide-react";

const features = [
  {
    icon: Drumstick,
    title: "Premium Quality Chicken",
    description: "We use only the finest, freshest chicken in all our dishes",
  },
  {
    icon: Flame,
    title: "Bold & Unique Flavors",
    description: "Signature sauces and seasonings that make every bite epic",
  },
  {
    icon: BadgeCheck,
    title: "100% Halal Certified",
    description: "All our food is certified halal for your peace of mind",
  },
  {
    icon: Zap,
    title: "Fresh Made Daily",
    description: "Every order is prepared fresh to ensure maximum flavor",
  },
];

export function WhyChooseSection() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Why Choose <span className="text-primary">Epic Cafe?</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            We take pride in delivering the best fast food experience in Chennai
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-xl bg-secondary-foreground/5 border border-primary/20 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/60 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Halal Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-primary/20 px-6 py-3 rounded-full">
            <BadgeCheck className="w-6 h-6 text-primary" />
            <span className="text-primary-foreground font-semibold">
              100% Halal Certified Restaurant
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
