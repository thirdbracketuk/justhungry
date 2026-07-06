"use client";

import { useState } from "react";
import {
  MENU_CATEGORIES,
  FEATURED_ITEMS,
  JUSTEAT_URL,
  UBEREATS_URL,
} from "@/constants/menuData";
import DishCard from "./DishCard";
import { SiJusteat, SiUbereats } from "react-icons/si";
import { HiArrowUpRight } from "react-icons/hi2";

const Dishes = () => {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);

  const activeItems =
    MENU_CATEGORIES.find((c) => c.id === activeCategory)?.items ?? [];

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {FEATURED_ITEMS.map((item) => (
              <DishCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        {/* Category tabs */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
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

        {/* Active category grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {activeItems.map((item) => (
            <DishCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dishes;
