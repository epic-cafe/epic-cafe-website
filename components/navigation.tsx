"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
  { href: "#franchise", label: "Franchise" },
];

const ZOMATO_LINK = "https://zomato.onelink.me/xqzv/fzcw53wx";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2">
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-primary shadow-md flex-shrink-0">
              <Image
                src="/images/epic-cafe-logo.jpeg"
                alt="Epic Cafe Logo"
                width={60}
                height={60}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <a href="tel:+919600021041">
                <Phone className="w-4 h-4 mr-1" />
                Call Us
              </a>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href={ZOMATO_LINK} target="_blank" rel="noopener noreferrer">
                Order Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-primary-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-secondary border-secondary">
              <SheetTitle className="text-primary-foreground">Navigation</SheetTitle>
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-primary-foreground/80 hover:text-primary transition-colors text-lg font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
                <hr className="border-primary/20" />
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                  <a href={ZOMATO_LINK} target="_blank" rel="noopener noreferrer">
                    Order Now
                  </a>
                </Button>
                <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full">
                  <a href="tel:+919600021041">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
