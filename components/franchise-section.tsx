"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { FranchiseVideoCarousel } from "@/components/franchise-video-carousel";

type Branch = {
  name: string;
  tagline: string;
  address: string;
  phone?: string;
  hours: string;
  directionsLink: string;
};

const branches: Branch[] = [
  {
    name: "Epic Cafe",
    tagline: "Arakkonam",
    address:
      "No.18, Housing Board Colony, opposite Trnds Salon, Tamil Nadu Housing Board, Arakkonam, Vellore, Tamil Nadu 631003",
    phone: "+91 93472 75192",
    hours: "11:00 AM – 11:30 PM Daily",
    directionsLink:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(
        "Epic Cafe, Housing Board Colony, Arakkonam, Tamil Nadu 631003"
      ),
  },
];

export function FranchiseSection() {
  return (
    <section id="franchise" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold uppercase tracking-widest text-sm mb-3">
            Our Locations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Verified <span className="text-primary">Franchise</span> Locations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Find an Epic Cafe near you. Every outlet serves the same epic,
            100% Halal-certified flavor you love.
          </p>
        </div>

        {/* Branch Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {branches.map((branch) => (
            <article
              key={`${branch.name}-${branch.tagline}`}
              className="group bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Card Header */}
              <div className="bg-secondary text-secondary-foreground p-6 relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-primary/20" />
                <div className="relative">
                  <h3 className="text-2xl font-bold">{branch.name}</h3>
                  <p className="text-primary font-semibold mt-1 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {branch.tagline}
                  </p>
                  {branch.rating && (
                    <div
                      className="flex items-center gap-1 mt-3"
                      aria-label={`Rated ${branch.rating} out of 5 stars`}
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < branch.rating!
                              ? "fill-primary text-primary"
                              : "text-secondary-foreground/30"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-secondary-foreground/80 ml-1">
                        {branch.rating}.0
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {branch.address}
                  </p>
                </div>

                {branch.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <a
                      href={`tel:${branch.phone.replace(/\s/g, "")}`}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {branch.phone}
                    </a>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    {branch.hours}
                  </span>
                </div>

                {/* Directions Button */}
                <Button
                  asChild
                  className="mt-auto w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a
                    href={branch.directionsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <FranchiseVideoCarousel />

        {/* Franchise Inquiry Line */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-muted rounded-full px-6 py-4 border border-border">
            <span className="text-foreground font-medium">
              Interested in a franchise? For more details, contact us at
            </span>
            <a
              href="tel:+919600021041"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              <Phone className="w-4 h-4" />
              96000 21041
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
