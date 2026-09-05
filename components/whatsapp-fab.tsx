"use client";

import { ShoppingBag } from "lucide-react";

const ZOMATO_LINK = "https://zomato.onelink.me/xqzv/fzcw53wx";

export function WhatsAppFAB() {
  return (
    <a
      href={ZOMATO_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 md:hidden"
      aria-label="Order on Zomato"
    >
      <ShoppingBag className="w-5 h-5" />
      <span className="font-semibold">Order on Zomato</span>
    </a>
  );
}
