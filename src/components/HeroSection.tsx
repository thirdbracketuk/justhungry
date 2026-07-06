"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { SiJusteat, SiUbereats } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { GOOGLE_REVIEW_URL } from "@/constants";

const stats = [
  {
    label: "Just Eat",
    rating: "5.0",
    reviews: "20 reviews",
    icon: <SiJusteat size={28} className="text-orange-500" />,
  },
  {
    label: "Uber Eats",
    rating: "4.9",
    reviews: "5 reviews",
    icon: <SiUbereats size={28} className="text-green-400" />,
  },
  {
    label: "Google",
    rating: "5.0",
    reviews: "98 reviews",
    icon: <FcGoogle size={28} />,
  },
];

const HeroSection = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          src="/assets/madebytb.mp4"
          className="h-full w-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent from-70% to-black" />

      <div className="relative z-20 w-full flex flex-col items-center justify-end gap-4 min-h-screen pb-12 px-4">
        {/* Logo */}
        <motion.img
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          src="/assets/hero2.svg"
          alt="Just Hungry"
          className="w-full max-w-240 lg:max-w-280 p-4"
        />

        {/* Rating stats */}
        <motion.a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex divide-x divide-white/20 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md px-2 py-1"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1 + i * 0.15 }}
              className="flex flex-col items-center px-6 py-3 gap-1"
            >
              {stat.icon}
              <div className="flex items-center gap-1">
                <FaStar className="text-amber-500" size={11} />
                <span className="text-sm font-bold text-white">
                  {stat.rating}
                </span>
              </div>
              <span className="text-[10px] text-neutral-400">
                {stat.reviews}
              </span>
            </motion.div>
          ))}
        </motion.a>

        {/* Blackpool */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="text-lg tracking-tighter text-white uppercase"
        >
          Blackpool
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
