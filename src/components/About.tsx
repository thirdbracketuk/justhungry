"use client";

import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const stats = [
  { value: "Blackpool", label: "Based In" },
  { value: "125+", label: "Google Reviews" },
  { value: "5★", label: "Rated" },
];

const About = () => {
  return (
    <section id="about" className="relative w-full overflow-hidden">
      {/* Full bleed image */}
      <div className="relative h-[70vh] lg:h-[85vh] w-full">
        <img
          src="/storefront.jpg"
          alt="Just Hungry Blackpool storefront"
          className="absolute inset-0 w-full h-full object-cover object-top brightness-50 saturate-50"
        />

        {/* Gradient overlay — stronger on left for text legibility */}
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />

        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="relative z-10 h-full flex flex-col justify-end px-6 pb-12 lg:px-20 lg:pb-16 max-w-3xl"
        >
          {/* Label */}
          <motion.span
            variants={fadeUp}
            className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase mb-4"
          >
            About Us
          </motion.span>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-7xl font-black tracking-tighter leading-none text-white mb-6"
          >
            Just Hungry.
            <br />
            <span className="text-amber-500">Just Good Food.</span>
          </motion.h2>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            className="text-neutral-300 text-base lg:text-lg leading-relaxed max-w-xl mb-10"
          >
            A fast food restaurant in the heart of Blackpool, serving freshly
            prepared meals to locals and visitors alike. Every order is made
            with care — crispy, flavourful, and worth every bite.
          </motion.p>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            className="flex gap-8 border-t border-white/10 pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl lg:text-3xl font-black text-white tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs text-neutral-500 uppercase tracking-widest mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
