"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ZOMATO_LINK = "https://zomato.onelink.me/xqzv/fzcw53wx";

const featuredItems = [
  {
    name: "Epic Burger",
    image: "/images/epic-burger.jpg",
    price: "₹230",
    description: "Our signature double-stacked chicken burger",
  },
  {
    name: "Loaded Fries",
    image: "/images/loaded-fries.jpg",
    price: "₹169",
    description: "Golden fries with toppings & sauces",
  },
  {
    name: "Chicken Popcorn",
    image: "/images/chicken-popcorn.jpg",
    price: "₹100",
    description: "Crispy bite-sized chicken pieces",
  },
  {
    name: "Milkshakes",
    image: "/images/milkshakes.jpg",
    price: "₹99",
    description: "Creamy, refreshing milkshakes",
  },
];

export function FeaturedSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Signature</span> Dishes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Handcrafted with premium ingredients and bold flavors
          </p>
        </div>

        {/* Featured Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <Card
              key={item.name}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    From {item.price}
                  </span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a
                    href={ZOMATO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
