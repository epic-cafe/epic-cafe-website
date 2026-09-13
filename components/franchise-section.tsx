"use client";

import { Button } from "@/components/ui/button";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { BranchPhotoCarousel, arakkonamPhotos, kolathurPhotos } from "@/components/branch-photo-carousel";

type Branch = {
  name: string;
  city: string;
  address: string;
  phone: string;
  hours: string[];
  photos: { src: string; alt: string }[];
};

const branches: Branch[] = [
  { name: "Epic Cafe", city: "Arakkonam", address: "No.18, Housing Board Colony, opposite Trnds Salon, Tamil Nadu Housing Board, Arakkonam, Vellore, Tamil Nadu 631003", phone: "+91 93472 75192", hours: ["11:00 AM – 11:30 PM Daily"], photos: arakkonamPhotos },
  { name: "Epic Cafe", city: "Kolathur", address: "No.203/1, Ramalinga Colony A Block Main Road, Ponniamman Medu, Kolathur, Chennai, Tamil Nadu 600082", phone: "+91 96000 21041", hours: ["Mon–Thu: 1:00 PM – 11:30 PM", "Friday: 2:30 PM – 11:30 PM", "Sat–Sun: 1:00 PM – 11:30 PM"], photos: kolathurPhotos },
];

export function FranchiseSection() {
  return (
    <section id="franchise" className="franchise-section py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="eyebrow">Own the movement</span>
          <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-foreground md:text-6xl">Epic <span className="text-primary">Franchise</span> Network</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Two live locations. One uncompromising standard of crisp, halal flavour.</p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-2">
          {branches.map((branch) => (
            <article key={branch.city} className="branch-card">
              <div className="branch-card-top"><div><span className="branch-kicker">Now serving</span><h3>{branch.city}</h3></div><span className="halal-badge">100% HALAL</span></div>
              <div className="branch-card-body">
                <div className="branch-details"><div className="detail-row"><MapPin /><span>{branch.address}</span></div><div className="detail-row"><Phone /><a href={`tel:${branch.phone.replace(/\s/g, "")}`}>{branch.phone}</a></div><div className="detail-row items-start"><Clock /><span>{branch.hours.map((hour) => <span key={hour} className="block">{hour}</span>)}</span></div></div>
                <BranchPhotoCarousel branch={branch.city} photos={branch.photos} />
                <Button asChild className="mt-5 w-full bg-primary font-bold text-primary-foreground hover:bg-primary/90"><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`} target="_blank" rel="noopener noreferrer"><Navigation className="mr-2 h-4 w-4" />Get Directions</a></Button>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center"><a href="tel:+919600021041" className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-6 py-3 font-bold text-foreground transition hover:bg-primary hover:text-primary-foreground"><Phone className="h-4 w-4" />Franchise enquiries: 96000 21041</a></div>
      </div>
    </section>
  );
}
