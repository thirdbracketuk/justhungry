"use client";

import { motion, Variants } from "framer-motion";
import {
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import { CONTACT } from "@/constants";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const ICONS = {
  address: HiOutlineMapPin,
  phone: HiOutlinePhone,
  email: HiOutlineEnvelope,
};

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="container mx-auto py-16 px-4"
    >
      <motion.h2
        variants={fadeInUp}
        className="mb-10 text-center text-3xl lg:text-4xl font-bold tracking-tighter"
      >
        Contact Us
      </motion.h2>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
      >
        {CONTACT.map((detail) => {
          const Icon =
            ICONS[detail.key as keyof typeof ICONS] ?? HiOutlineMapPin;
          const href =
            detail.key === "phone"
              ? `tel:${detail.value.replace(/\s/g, "")}`
              : detail.key === "email"
                ? `mailto:${detail.value}`
                : undefined;

          const content = (
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-center h-full transition-colors hover:border-neutral-700">
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-amber-500/10 text-amber-500">
                <Icon size={20} />
              </div>
              <p className="text-neutral-300 text-sm sm:text-base tracking-tight">
                {detail.value}
              </p>
            </div>
          );

          return (
            <motion.div key={detail.key} variants={fadeInUp}>
              {href ? (
                <a href={href} className="block h-full">
                  {content}
                </a>
              ) : (
                content
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Map */}
      <motion.div
        variants={fadeInUp}
        className="mt-6 max-w-4xl mx-auto overflow-hidden rounded-2xl border border-neutral-800"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2355.2855385294415!2d-3.0508839999999995!3d53.819995899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b45063c42e1c5%3A0x7b7738f9e8ae4669!2sJUST%20HUNGRY!5e0!3m2!1sen!2sbd!4v1783441829765!5m2!1sen!2sbd"
          width="100%"
          height="320"
          style={{
            border: 0,
            filter: "grayscale(1) invert(0.92) contrast(0.9)",
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Just Hungry location"
        />
      </motion.div>
    </motion.section>
  );
};

export default Contact;
