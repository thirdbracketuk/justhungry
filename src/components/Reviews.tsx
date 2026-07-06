"use client";

import { motion, Variants } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { SiJusteat, SiUbereats } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { REVIEWS, PLATFORM_STATS, GOOGLE_REVIEW_URL } from "@/constants";
import { ReactNode } from "react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const platformIcon: Record<string, ReactNode> = {
  "Just Eat": <SiJusteat size={24} className="text-orange-500" />,
  "Uber Eats": <SiUbereats size={24} className="text-green-400" />,
  Google: <FcGoogle size={24} />,
};

const Reviews = () => {
  return (
    <section id="reviews" className="container mx-auto py-16 px-4 lg:px-0">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-4 text-center text-3xl font-bold tracking-tighter lg:text-4xl"
      >
        What Our Customers Say
      </motion.h2>

      {/* Platform stats */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="mb-12 flex flex-wrap justify-center gap-6"
      >
        {PLATFORM_STATS.map((stat) => (
          <motion.a
            key={stat.platform}
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center rounded-2xl border border-neutral-700 bg-neutral-900 px-8 py-5 text-center cursor-pointer"
          >
            <div className="mb-2">{platformIcon[stat.platform]}</div>
            <span className="text-2xl font-bold text-amber-500">
              {stat.rating}
            </span>
            <div className="my-1 flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-amber-500" size={12} />
              ))}
            </div>
            {/* <span className="text-sm text-neutral-400">{stat.reviews}</span> */}
            <span className="mt-1 text-xs font-semibold tracking-wider text-neutral-500 uppercase">
              {stat.platform}
            </span>
          </motion.a>
        ))}
      </motion.div>

      {/* Review cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {REVIEWS.map((review) => (
          <motion.a
            key={review.name}
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="flex flex-col justify-between rounded-2xl border border-neutral-700 bg-neutral-900 p-6 cursor-pointer"
          >
            <div>
              <div className="mb-3 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-amber-500" size={14} />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-neutral-300">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="font-semibold tracking-tight">{review.name}</p>
                <p className="text-xs text-neutral-500">
                  {review.reviewCount} · {review.timeAgo}
                </p>
              </div>
              <FcGoogle size={18} />
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-amber-500 to-orange-500 px-8 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
        >
          <FcGoogle size={16} />
          Leave us a review on Google
        </a>
      </motion.div>
    </section>
  );
};

export default Reviews;
