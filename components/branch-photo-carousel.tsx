"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type BranchPhotoCarouselProps = {
  branch: string;
  photos: { src: string; alt: string }[];
};

export function BranchPhotoCarousel({ branch, photos }: BranchPhotoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePhoto = photos[activeIndex];
  const changePhoto = (step: number) => setActiveIndex((current) => (current + step + photos.length) % photos.length);

  return (
    <div className="branch-gallery" aria-label={`${branch} branch photo gallery`}>
      <div className="branch-gallery-stage">
        {photos.map((photo, index) => {
          const offset = (index - activeIndex + photos.length) % photos.length;
          const position = offset === 0 ? "active" : offset === 1 ? "next" : offset === photos.length - 1 ? "prev" : "hidden";
          return (
            <button
              key={photo.src}
              type="button"
              className={`branch-gallery-slide ${position}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${photo.alt}`}
              aria-current={index === activeIndex}
            >
              <img src={photo.src} alt={photo.alt} />
            </button>
          );
        })}
        <div className="branch-gallery-shade" />
        <span className="branch-gallery-count">{activeIndex + 1} / {photos.length}</span>
        <div className="branch-gallery-controls">
          <button type="button" onClick={() => changePhoto(-1)} aria-label={`Previous ${branch} photo`}><ChevronLeft /></button>
          <button type="button" onClick={() => changePhoto(1)} aria-label={`Next ${branch} photo`}><ChevronRight /></button>
        </div>
      </div>
      <p className="branch-gallery-caption">{activePhoto.alt}</p>
    </div>
  );
}

export const arakkonamPhotos = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-13%20at%208.59.57%20PM-Mca5o2GDZFlMWBUV8x07TZCmLGZpyM.jpeg", alt: "Epic Fried Chicken Arakkonam storefront" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-13%20at%209.05.30%20PM-D9spNP2aeMrxfMDkVt0cFP5ezJICwC.jpeg", alt: "Arakkonam service counter" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-13%20at%209.05.37%20PM-NCzSFOLaeCBuQ1y1mLrSybgkS96aN3.jpeg", alt: "Arakkonam dining area" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-13%20at%209.05.33%20PM-jh7vQfeXzbWJ5EI5SEs9f95Sq4nrPd.jpeg", alt: "Epic Arakkonam counter" },
];

export const kolathurPhotos = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-13%20at%208.59.57%20PM-Mca5o2GDZFlMWBUV8x07TZCmLGZpyM.jpeg", alt: "Epic Fried Chicken storefront" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-13%20at%209.05.30%20PM-D9spNP2aeMrxfMDkVt0cFP5ezJICwC.jpeg", alt: "Epic cafe interior" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-13%20at%209.05.37%20PM-NCzSFOLaeCBuQ1y1mLrSybgkS96aN3.jpeg", alt: "Epic dining space" },
];
