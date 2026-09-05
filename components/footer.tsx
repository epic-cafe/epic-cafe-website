"use client";

import Link from "next/link";
import { Instagram, MapPin, Phone, Clock } from "lucide-react";

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/HBsZbp6UyHms86hE8";
const INSTAGRAM_LINK = "https://instagram.com/epic_experience_chennai";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#contact", label: "Contact" },
  { href: "#franchise", label: "Franchise" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#F5F5DC] flex items-center justify-center border-2 border-primary">
                <span className="text-primary font-bold text-lg">EC</span>
              </div>
              <span className="font-bold text-xl">Epic Cafe</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Premium chicken burgers, loaded fries & more. 100% Halal certified.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Order Online
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center md:justify-end gap-2 text-primary-foreground/70">
                <Phone className="w-4 h-4" />
                <a href="tel:+919600021041" className="hover:text-primary transition-colors">
                  96000 21041
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2 text-primary-foreground/70">
                <Clock className="w-4 h-4" />
                <span>2:30 PM - 11:30 PM Daily</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center md:justify-end gap-4 mt-4">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
                aria-label="Find us on Google Maps"
              >
                <MapPin className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-primary/20 mb-6" />

        {/* Copyright */}
        <div className="text-center text-sm text-primary-foreground/60">
          <p>&copy; 2026 Epic Cafe. All rights reserved.</p>
          <p className="mt-1">
            Website by{" "}
            <span className="text-primary font-medium">Techipolis</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
