"use client";

import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";

const menuPdf = "https://blobs.vusercontent.net/blob/epic%20menu-dQb7WMgeemfUesokIgdJy4HyVNbRSW.pdf";
const pages = [2, 3, 4, 5, 6];

export function MenuPageCarousel() {
  const [active, setActive] = useState(0);
  const move = (step: number) => setActive((current) => (current + step + pages.length) % pages.length);
  return (
    <div className="menu-page-carousel">
      <div className="menu-page-heading"><div><span className="eyebrow">The full spread</span><h3>Epic menu <span>pages</span></h3></div><a href={`${menuPdf}#page=${pages[active]}`} target="_blank" rel="noreferrer">Open menu <ExternalLink /></a></div>
      <div className="menu-page-stage">
        {pages.map((page, index) => { const offset = (index - active + pages.length) % pages.length; const position = offset === 0 ? "active" : offset === 1 ? "next" : offset === pages.length - 1 ? "prev" : "hidden"; return <a key={page} href={`${menuPdf}#page=${page}`} target="_blank" rel="noreferrer" className={`menu-page-slide ${position}`} aria-label={`Open menu page ${page}`}><object data={`${menuPdf}#page=${page}`} type="application/pdf" aria-label={`Menu page ${page}`}><span>Menu page {page}</span></object><small>PAGE {page}</small></a>; })}
        <div className="menu-page-controls"><button type="button" onClick={() => move(-1)} aria-label="Previous menu page"><ChevronLeft /></button><button type="button" onClick={() => move(1)} aria-label="Next menu page"><ChevronRight /></button></div>
      </div>
      <div className="menu-page-dots">{pages.map((page, index) => <button type="button" key={page} onClick={() => setActive(index)} className={index === active ? "active" : ""} aria-label={`Show menu page ${page}`} aria-current={index === active} />)}</div>
    </div>
  );
}
