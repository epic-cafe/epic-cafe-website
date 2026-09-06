"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ZOMATO_LINK = "https://zomato.onelink.me/xqzv/fzcw53wx";

// Burger data with dual pricing
const burgerCategories = [
  {
    name: "Classic Burgers",
    items: [
      { name: "Classic Burger", single: 140, double: 190 },
      { name: "Chicken Burger", single: 190, double: 250 },
      { name: "Korean Burger", single: 190, double: 250 },
      { name: "Nashville Burger", single: 200, double: 270 },
      { name: "Chipotle Burger", single: 210, double: 280 },
    ],
  },
  {
    name: "Signature Burgers",
    items: [
      { name: "Epic Burger", single: 230, double: 280 },
      { name: "Mexican Burger", single: 240, double: 290 },
      { name: "BBQ Cheese Blast", single: 240, double: 290 },
      { name: "Crisp and Smash Burger", single: 290, double: null },
      { name: "Death By Cheese Burger", single: 290, double: null },
      { name: "Devil's Epic Hot Burger", single: 290, double: null },
    ],
  },
  {
    name: "Smashed Grilled Burgers",
    items: [
      { name: "Chicken Smashed", single: 190, double: null },
      { name: "Double Smash Grilled", single: 270, double: null },
      { name: "BBQ Cheese Smash", single: 220, double: null },
      { name: "Devils Hot Grilled", single: 250, double: null },
    ],
  },
];

// Popcorn data with 3 sizes
const popcornItems = [
  { name: "Chicken Popcorn", small: 100, medium: 150, large: 200 },
  { name: "Korean Popcorn", small: 110, medium: 160, large: 210 },
  { name: "Smoked Chipotle", small: 120, medium: 170, large: 220 },
  { name: "Nashville Popcorn", small: 120, medium: 170, large: 220 },
  { name: "Devil Hot & Sweet", small: 130, medium: 180, large: 230 },
  { name: "Epic Signature", small: 150, medium: 200, large: 250 },
];

// Single price items
const singlePriceMenus = {
  loadeds: {
    title: "Loaded Fries",
    items: [
      { name: "Epic Loaded Fries", price: 169 },
      { name: "Korean Loaded Fries", price: 189 },
      { name: "Smoked Chipotle Fries", price: 199 },
      { name: "Nashville Loaded Fries", price: 179 },
      { name: "Devil Hot & Sweet", price: 199 },
      { name: "Epic Signature Fries", price: 249 },
    ],
  },
  tenders: {
    title: "Tenders",
    items: [
      { name: "Classic Tenders", price: 160 },
      { name: "Korean Tenders", price: 180 },
      { name: "Nashville Tenders", price: 180 },
      { name: "Devil Hot & Sweet", price: 180 },
      { name: "Epic Signature", price: 190 },
    ],
  },
  jumboroll: {
    title: "Jumbo Roll",
    items: [
      { name: "Crispy Chicken Jumbo Roll", price: 159 },
      { name: "Korean Jumbo Roll", price: 169 },
      { name: "Nashville Jumbo Roll", price: 169 },
      { name: "Devil Hot & Sweet", price: 169 },
      { name: "Epic Signature", price: 199 },
    ],
  },
  wings: {
    title: "Wings",
    items: [
      { name: "Classic Wings", price: 140 },
      { name: "Korean Wings", price: 160 },
      { name: "Nashville Wings", price: 160 },
      { name: "Devil Hot & Sweet", price: 160 },
      { name: "Epic Signature Wings", price: 170 },
    ],
  },
  milkshakes: {
    title: "Milkshakes",
    items: [
      { name: "Butter Scotch Milkshake", price: 99 },
      { name: "Berry Blast Milkshake", price: 99 },
      { name: "Black Currant Milkshake", price: 99 },
      { name: "Lotus Biscoff Milkshake", price: 129 },
      { name: "Litchi Milkshake", price: 99 },
      { name: "Oreo Milkshake", price: 99 },
    ],
  },
};

// Burger Card Component
function BurgerCard({
  item,
}: {
  item: { name: string; single: number; double: number | null };
}) {
  return (
    <div className="bg-card rounded-lg p-4 shadow-sm border border-border hover:shadow-md transition-shadow">
      <h4 className="font-semibold text-foreground mb-3">{item.name}</h4>
      <div className="flex items-center justify-between mb-3">
        <div className="font-mono text-sm">
          <span className="text-muted-foreground">Single: </span>
          <span className="font-bold text-primary">₹{item.single}</span>
          {item.double && (
            <>
              <span className="text-muted-foreground mx-2">|</span>
              <span className="text-muted-foreground">Double: </span>
              <span className="font-bold text-primary">₹{item.double}</span>
            </>
          )}
        </div>
      </div>
      <Button
        size="sm"
        asChild
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        <a href={ZOMATO_LINK} target="_blank" rel="noopener noreferrer">
          Order on Zomato
        </a>
      </Button>
    </div>
  );
}

// Single Price Item Row Component
function SinglePriceRow({
  item,
  isEven,
}: {
  item: { name: string; price: number };
  isEven: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between p-4 border-b border-border ${
        isEven ? "bg-muted/30" : "bg-card"
      }`}
    >
      <span className="font-medium text-foreground">{item.name}</span>
      <div className="flex items-center gap-4">
        <span className="font-mono font-bold text-primary text-base">
          ₹{item.price}
        </span>
        <Button
          size="sm"
          asChild
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <a href={ZOMATO_LINK} target="_blank" rel="noopener noreferrer">
            Order
          </a>
        </Button>
      </div>
    </div>
  );
}

export function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Full Menu</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our complete range of epic flavors
          </p>
        </div>

        {/* Menu Tabs */}
        <Tabs defaultValue="burgers" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8 bg-transparent h-auto">
            <TabsTrigger
              value="burgers"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card text-foreground px-4 py-2 rounded-full font-medium transition-all shadow-sm"
            >
              Burgers
            </TabsTrigger>
            <TabsTrigger
              value="loadeds"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card text-foreground px-4 py-2 rounded-full font-medium transition-all shadow-sm"
            >
              Loaded Fries
            </TabsTrigger>
            <TabsTrigger
              value="popcorns"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card text-foreground px-4 py-2 rounded-full font-medium transition-all shadow-sm"
            >
              Popcorns
            </TabsTrigger>
            <TabsTrigger
              value="tenders"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card text-foreground px-4 py-2 rounded-full font-medium transition-all shadow-sm"
            >
              Tenders
            </TabsTrigger>
            <TabsTrigger
              value="jumboroll"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card text-foreground px-4 py-2 rounded-full font-medium transition-all shadow-sm"
            >
              Jumbo Roll
            </TabsTrigger>
            <TabsTrigger
              value="wings"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card text-foreground px-4 py-2 rounded-full font-medium transition-all shadow-sm"
            >
              Wings
            </TabsTrigger>
            <TabsTrigger
              value="milkshakes"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card text-foreground px-4 py-2 rounded-full font-medium transition-all shadow-sm"
            >
              Milkshakes
            </TabsTrigger>
          </TabsList>

          {/* BURGERS TAB */}
          <TabsContent value="burgers" className="mt-0">
            <div className="max-w-6xl mx-auto space-y-10">
              {burgerCategories.map((category) => (
                <div key={category.name}>
                  <h3 className="text-xl font-bold text-foreground mb-4 pb-2 border-b-2 border-primary/30">
                    {category.name}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.items.map((item) => (
                      <BurgerCard key={item.name} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* POPCORNS TAB - Table Layout */}
          <TabsContent value="popcorns" className="mt-0">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-foreground mb-4 pb-2 border-b-2 border-primary/30">
                Chicken Popcorn
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-card rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-secondary text-secondary-foreground">
                      <th className="text-left p-4 font-semibold">Item</th>
                      <th className="text-center p-4 font-semibold">Small</th>
                      <th className="text-center p-4 font-semibold">Medium</th>
                      <th className="text-center p-4 font-semibold">Large</th>
                      <th className="text-center p-4 font-semibold">Order</th>
                    </tr>
                  </thead>
                  <tbody>
                    {popcornItems.map((item, idx) => (
                      <tr
                        key={item.name}
                        className={`border-b border-border ${
                          idx % 2 === 0 ? "bg-card" : "bg-muted/30"
                        }`}
                      >
                        <td className="p-4 font-medium text-foreground">
                          {item.name}
                        </td>
                        <td className="p-4 text-center font-mono font-bold text-primary">
                          ₹{item.small}
                        </td>
                        <td className="p-4 text-center font-mono font-bold text-primary">
                          ₹{item.medium}
                        </td>
                        <td className="p-4 text-center font-mono font-bold text-primary">
                          ₹{item.large}
                        </td>
                        <td className="p-4 text-center">
                          <Button
                            size="sm"
                            asChild
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                          >
                            <a
                              href={ZOMATO_LINK}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Order
                            </a>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          {/* SINGLE PRICE TABS */}
          {Object.entries(singlePriceMenus).map(([key, section]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-xl font-bold text-foreground mb-4 pb-2 border-b-2 border-primary/30">
                  {section.title}
                </h3>
                <div className="bg-card rounded-lg overflow-hidden shadow-sm border border-border">
                  {section.items.map((item, idx) => (
                    <SinglePriceRow
                      key={item.name}
                      item={item}
                      isEven={idx % 2 === 0}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
