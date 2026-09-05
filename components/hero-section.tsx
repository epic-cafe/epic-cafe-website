"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

const ZOMATO_LINK = "https://zomato.onelink.me/xqzv/fzcw53wx";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-burger.jpg"
          alt="Delicious Epic Cafe burger"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/70 to-secondary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        {/* Logo Badge */}
        <div className="inline-flex items-center justify-center mb-8">
          <Image
            src="/images/epic-cafe-logo.jpeg"
            alt="Epic Cafe Logo"
            width={150}
            height={150}
            className="h-[150px] w-auto shadow-2xl rounded-full"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 text-balance">
          Epic Flavors, <span className="text-primary">Every Bite</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
          Premium Burgers, Loaded Fries & More
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
          >
            <a href="#menu">View Menu</a>
          </Button>
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
          >
            <a href={ZOMATO_LINK} target="_blank" rel="noopener noreferrer">
              Order Now
            </a>
          </Button>
        </div>

        {/* Opening Hours Badge */}
        <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/30">
          <Clock className="w-5 h-5 text-primary" />
          <span className="text-primary-foreground font-medium">
            Open 2:30 PM - 11:30 PM Daily
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
