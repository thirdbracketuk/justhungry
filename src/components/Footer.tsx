"use client";

import { motion, Variants } from "framer-motion";
import { SOCIAL_MEDIA_LINKS } from "@/constants";
import { BsArrowUpRight } from "react-icons/bs";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      {/* Slim dual banner */}
      <motion.div
        variants={fadeInUp}
        className="mx-4 mb-8 rounded-md border  border-zinc-900 bg-zinc-950 overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-zinc-900">
          {/* Third Bracket side */}
          <div className="flex-1 px-6 py-6">
            <div className="mb-3">
              <a
                href="https://www.thirdbracket.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity inline-block"
              >
                <img
                  src="/logo1080.svg"
                  alt="Third Bracket"
                  className="h-7 w-auto"
                />
              </a>
              <p className="text-[11px] text-zinc-400 mt-1.5">
                Need a website? We build fast, modern sites for restaurants &
                businesses.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {[
                {
                  label: "Web Design",
                  href: "https://www.thirdbracket.co.uk/web-design-manchester",
                },
                {
                  label: "Web Development",
                  href: "https://www.thirdbracket.co.uk/services/web-development",
                },
                {
                  label: "BracketUI",
                  href: "https://www.thirdbracket.co.uk/bracketui",
                },
                {
                  label: "Our Work",
                  href: "https://www.thirdbracket.co.uk/work",
                },
                {
                  label: "Book a Call",
                  href: "https://cal.com/sagarmusabbir",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-neutral-500 hover:text-neutral-200 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* BayofBengal side */}
          <div className="flex-1 px-6 py-6">
            <div className="mb-3">
              <p className="text-[11px] text-zinc-400 tracking-tight mb-2">
                Import fresh shrimp, crab & seafood from Bangladesh?
              </p>
              <a
                href="https://www.bayxbengal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 opacity-60 hover:opacity-80 transition-opacity mb-2"
              >
                Visit&nbsp;
                <span
                  className="text-sm font-black tracking-tight"
                  style={{ color: "#e8622a" }}
                >
                  Bay
                </span>
                <span className="text-sm font-black tracking-tight text-neutral-500">
                  of
                </span>
                <span className="text-sm font-black tracking-tight text-white">
                  Bengal
                </span>
                <BsArrowUpRight size={9} className="text-neutral-600 ml-0.5" />
              </a>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {[
                {
                  label: "Shrimp Suppliers",
                  href: "https://www.bayxbengal.com/industry/shrimps-suppliers-bangladesh",
                },
                {
                  label: "Fish Exporters",
                  href: "https://www.bayxbengal.com/industry/fish-export-bangladesh",
                },
                {
                  label: "Frozen Seafood",
                  href: "https://www.bayxbengal.com/industry/frozen-seafood-bangladesh",
                },
                {
                  label: "Fresh Vegetables",
                  href: "https://www.bayxbengal.com/industry/vegetable-export-bangladesh",
                },
                {
                  label: "Crab Exporters",
                  href: "https://www.bayxbengal.com/industry/crab-export-bangladesh",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-neutral-500 hover:text-neutral-200 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Social icons */}
      <motion.div
        variants={staggerContainer}
        className="flex items-center justify-center gap-8 mb-8"
      >
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeInUp}
            whileHover={{ scale: 1.2, color: "#d05939" }}
            transition={{ duration: 0.3 }}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Copyright */}
      <motion.p
        variants={fadeInUp}
        className="pb-8 text-center tracking-tighter text-neutral-600 text-xs"
      >
        &copy; {new Date().getFullYear()} Just Hungry, Blackpool. All rights
        reserved.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
