"use client";

import { useState, useRef } from "react";
import {
  MENU_CATEGORIES,
  FEATURED_ITEMS,
  JUSTEAT_URL,
  UBEREATS_URL,
} from "@/constants/menuData";
import DishCard from "./DishCard";
import { SiJusteat, SiUbereats } from "react-icons/si";
import { HiArrowUpRight, HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const Dishes = () => {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const activeItems =
    MENU_CATEGORIES.find((c) => c.id === activeCategory)?.items ?? [];

  const scrollByAmount = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8 * (dir === "left" ? -1 : 1);
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="py-16 px-4" id="dishes">
      <div className="container mx-auto">
        <h2 className="mb-2 text-center text-3xl font-bold tracking-tighter lg:text-4xl">
          Our Menu
        </h2>
        <p className="mb-10 text-center text-neutral-400 text-sm tracking-tight">
          Order online via Just Eat or Uber Eats
        </p>

        {/* Order CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-12">
          <a
            href={JUSTEAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors text-sm font-bold text-white"
          >
            <SiJusteat size={16} />
            Browse on Just Eat
            <HiArrowUpRight size={10} className="opacity-70" />
          </a>
          <a
            href={UBEREATS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors text-sm font-bold text-white border border-neutral-700"
          >
            <SiUbereats size={16} className="text-green-400" />
            Browse on Uber Eats
            <HiArrowUpRight size={10} className="opacity-70" />
          </a>
        </div>

        {/* Featured items */}
        <div className="mb-14">
          <h3 className="mb-4 text-lg font-semibold tracking-tight text-neutral-300">
            ⭐ Featured
          </h3>
          <div className="marquee-row marquee-fade overflow-hidden">
            <div className="flex w-max gap-4 animate-marquee">
              {[...FEATURED_ITEMS, ...FEATURED_ITEMS].map((item, i) => (
                <div
                  key={`${item.title}-${i}`}
                  className="w-64 sm:w-72 flex-shrink-0"
                >
                  <DishCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category tabs — scroll on mobile, wrap on desktop */}
        <div className="mb-8 overflow-x-auto md:overflow-visible pb-2 scrollbar-hide tabs-fade">
          <div className="flex gap-2 w-max md:w-full md:flex-wrap">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors flex-shrink-0 ${
                  activeCategory === cat.id
                    ? "bg-amber-500 text-black"
                    : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active category row — one row, scroll-snap on all screens */}
        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide marquee-fade scroll-smooth pb-2"
          >
            {activeItems.map((item) => (
              <div
                key={item.title}
                className="w-64 sm:w-72 flex-shrink-0 snap-start"
              >
                <DishCard item={item} />
              </div>
            ))}
          </div>

          {/* Desktop-only arrow controls */}
          <button
            onClick={() => scrollByAmount("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 items-center justify-center w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 hover:bg-neutral-700 transition-colors"
            aria-label="Scroll left"
          >
            <HiChevronLeft size={18} />
          </button>
          <button
            onClick={() => scrollByAmount("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 items-center justify-center w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 hover:bg-neutral-700 transition-colors"
            aria-label="Scroll right"
          >
            <HiChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dishes;
