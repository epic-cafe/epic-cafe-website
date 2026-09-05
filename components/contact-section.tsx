"use client";

import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Instagram,
  ExternalLink,
} from "lucide-react";

const ZOMATO_LINK = "https://zomato.onelink.me/xqzv/fzcw53wx";
const WHATSAPP_LINK =
  "https://wa.me/919600021041?text=Hi%20Epic%20Cafe%2C%20I%20have%20a%20question";
const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/HBsZbp6UyHms86hE8";
const INSTAGRAM_LINK = "https://instagram.com/epic_experience_chennai";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, India",
    link: GOOGLE_MAPS_LINK,
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "96000 21041",
    link: "tel:+919600021041",
    external: false,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "96000 21041",
    link: WHATSAPP_LINK,
    external: true,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "2:30 PM - 11:30 PM Daily",
    link: null,
    external: false,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@epic_experience_chennai",
    link: INSTAGRAM_LINK,
    external: true,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find <span className="text-primary">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit us or order online for the epic experience
          </p>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Contact Information
            </h3>

            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
                      >
                        {item.value}
                        {item.external && (
                          <ExternalLink className="w-3 h-3" />
                        )}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a
                  href={ZOMATO_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Order on Zomato
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href="tel:+919600021041">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Google Maps Order Link */}
            <div className="mt-4">
              <Button
                variant="secondary"
                asChild
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
