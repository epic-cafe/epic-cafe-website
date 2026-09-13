"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, MapPin, Phone } from "lucide-react"

const branches = [
  {
    name: "Arakkonam",
    place: "Arakkonam Branch",
    details: "Epic Fried Chicken storefront and entrance",
    photos: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-13%20at%208.59.57%20PM-BldoVhG4oxQTaF3RlukttV4cZ3UTYF.jpeg",
        alt: "Epic Fried Chicken Arakkonam storefront",
      },
    ],
  },
  {
    name: "Kolathur",
    place: "Kolathur Branch",
    details: "Inside counter, menu boards, and dining corridor",
    photos: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-13%20at%209.05.37%20PM-iD3FzBFeTrunkL88d0gq5AItHVdJow.jpeg",
        alt: "Kolathur branch dining corridor",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-13%20at%209.05.30%20PM-KNbSrxlXJWuYsrWfRiSA0AHJsL1b2d.jpeg",
        alt: "Kolathur branch red service counter",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-13%20at%209.05.33%20PM-7fTtwynONwaunVkoyPImQuiga8ouI0.jpeg",
        alt: "Kolathur branch menu counter",
      },
    ],
  },
]

function BranchSampleCard({ branch }: { branch: (typeof branches)[number] }) {
  const [active, setActive] = useState(0)
  const next = () => setActive((current) => (current + 1) % branch.photos.length)
  const previous = () => setActive((current) => (current - 1 + branch.photos.length) % branch.photos.length)

  return (
    <article className="overflow-hidden rounded-[1.6rem] border border-red-500/50 bg-zinc-950 shadow-[0_24px_70px_rgba(0,0,0,.55)]">
      <div className="border-b border-white/10 bg-gradient-to-br from-red-700 via-red-600 to-red-950 px-5 py-5 text-white sm:px-7">
        <p className="text-[.65rem] font-black uppercase tracking-[.25em] text-red-100">Epic Cafe</p>
        <h2 className="mt-2 text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl">{branch.name}</h2>
        <p className="mt-3 max-w-sm text-sm font-medium text-red-50">{branch.details}</p>
      </div>
      <div className="space-y-5 p-4 sm:p-6">
        <div className="flex flex-wrap gap-3 text-xs text-zinc-300">
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-red-500" />{branch.place}</span>
          <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4 text-red-500" />100% Halal</span>
        </div>
        <div className="relative h-[21rem] overflow-hidden rounded-2xl border border-red-500/40 bg-black sm:h-[25rem]">
          {branch.photos.map((photo, index) => {
            const offset = (index - active + branch.photos.length) % branch.photos.length
            const isActive = offset === 0
            const isNext = offset === 1
            return (
              <div
                key={photo.src}
                className={`absolute inset-3 overflow-hidden rounded-xl transition-all duration-500 ${
                  isActive ? "z-20 scale-100 opacity-100" : isNext ? "z-10 translate-x-[18%] scale-[.86] opacity-45" : "-translate-x-[18%] scale-[.86] opacity-25"
                }`}
              >
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="(max-width: 768px) 90vw, 560px" unoptimized />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-16 text-xs font-bold uppercase tracking-widest text-white">{branch.name} branch</div>
              </div>
            )
          })}
          <button type="button" onClick={previous} aria-label={`Previous ${branch.name} photo`} className="absolute left-4 top-1/2 z-30 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/70 text-white transition hover:bg-red-600"><ChevronLeft className="h-5 w-5" /></button>
          <button type="button" onClick={next} aria-label={`Next ${branch.name} photo`} className="absolute right-4 top-1/2 z-30 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/70 text-white transition hover:bg-red-600"><ChevronRight className="h-5 w-5" /></button>
        </div>
        <div className="flex justify-center gap-2">
          {branch.photos.map((photo, index) => <button key={photo.src} type="button" aria-label={`Show ${branch.name} photo ${index + 1}`} onClick={() => setActive(index)} className={`h-1.5 rounded-full transition-all ${index === active ? "w-8 bg-red-500" : "w-2 bg-white/30"}`} />)}
        </div>
      </div>
    </article>
  )
}

export default function BranchSamplePage() {
  return (
    <main className="min-h-screen bg-black px-4 py-10 text-white sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[.3em] text-red-500">Visual sample only</p>
          <h1 className="mt-3 text-4xl font-black uppercase leading-none sm:text-6xl">Two branches.<br /><span className="text-red-500">One Epic identity.</span></h1>
          <p className="mt-5 text-sm leading-6 text-zinc-400">This is the proposed branch-card direction: compact information first, then a neat sliding photo frame underneath. Nothing has been changed on the main homepage.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {branches.map((branch) => <BranchSampleCard key={branch.name} branch={branch} />)}
        </div>
      </div>
    </main>
  )
}
