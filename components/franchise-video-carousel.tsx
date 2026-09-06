"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const videos = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-09-06%20at%208.17.14%20PM-8j8NZdm2rsRnuyqTUNyDpBFREaOb4f.mp4",
    label: "Arakkonam outlet walkthrough",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-09-06%20at%208.17.13%20PM-QPvIoUNLDMECndKulunu7G4ojcJOw1.mp4",
    label: "Inside Epic Cafe Arakkonam",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-09-06%20at%208.17.11%20PM-fH2IlkkXoaDSLcELfeGsVEiQ0wwHIr.mp4",
    label: "The Arakkonam experience",
  },
];

export function FranchiseVideoCarousel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const changeVideo = (index: number) => {
    setActiveIndex((index + videos.length) % videos.length);
    setIsPlaying(false);
  };

  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      void videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="mx-auto mt-16 max-w-5xl">
      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Step inside Arakkonam
          </p>
          <h3 className="text-2xl font-bold text-secondary-foreground md:text-3xl">
            Built for the <span className="text-primary">Epic</span> experience
          </h3>
        </div>
        <div className="flex items-center gap-2" aria-label="Video carousel controls">
          <button
            type="button"
            onClick={() => changeVideo(activeIndex - 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Previous video"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => changeVideo(activeIndex + 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label="Next video"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[1.5rem] border border-primary/30 bg-black shadow-2xl shadow-black/30">
        <video
          ref={videoRef}
          key={videos[activeIndex].src}
          className="aspect-video w-full object-cover"
          src={videos[activeIndex].src}
          playsInline
          controls
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          aria-label={videos[activeIndex].label}
        />
        <button
          type="button"
          onClick={togglePlayback}
          className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current" />}
          {isPlaying ? "Pause" : "Play story"}
        </button>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2" aria-label="Select a video">
        {videos.map((video, index) => (
          <button
            type="button"
            key={video.src}
            onClick={() => changeVideo(index)}
            className={`h-2 rounded-full transition-all ${index === activeIndex ? "w-10 bg-primary" : "w-2 bg-secondary-foreground/30 hover:bg-primary/70"}`}
            aria-label={`Show ${video.label}`}
            aria-current={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
}
