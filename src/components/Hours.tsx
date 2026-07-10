"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { HiOutlineClock, HiArrowUpRight } from "react-icons/hi2";
import { TbBike } from "react-icons/tb";
import { SiJusteat, SiUbereats, SiDeliveroo } from "react-icons/si";
import { JUSTEAT_URL, UBEREATS_URL } from "@/constants/menuData";

const DELIVEROO_URL =
  "https://deliveroo.co.uk/menu/Preston/blackpool-city-centre/just-hungry";

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

// Ranges are [startMinutes, endMinutes] from midnight.
// endMinutes > 1440 means the session runs past midnight into the next day.
// Index matches JS Date.getDay(): 0 = Sunday ... 6 = Saturday.
const SCHEDULE: [number, number][][] = [
  [
    [720, 915],
    [1080, 1605],
  ], // Sunday: 12–3:15pm, 6pm–2:45am
  [
    [720, 900],
    [1080, 1440],
  ], // Monday: 12–3pm, 6pm–12am
  [
    [720, 900],
    [1080, 1440],
  ], // Tuesday
  [
    [720, 900],
    [1080, 1440],
  ], // Wednesday
  [
    [720, 900],
    [1080, 1440],
  ], // Thursday
  [
    [720, 900],
    [1080, 1470],
  ], // Friday: 12–3pm, 6pm–12:30am
  [[1020, 1485]], // Saturday: 5pm–12:45am
];

const DAY_LABELS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function formatMinutes(mins: number) {
  const h24 = Math.floor(mins / 60) % 24;
  const m = mins % 60;
  const period = h24 >= 12 ? "PM" : "AM";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${m.toString().padStart(2, "0")} ${period}`;
}

function getLondonNow() {
  const londonStr = new Date().toLocaleString("en-US", {
    timeZone: "Europe/London",
  });
  return new Date(londonStr);
}

type Status =
  | { open: true; closesAt: number }
  | { open: false; opensAt: number; opensDay: number };

function computeStatus(): Status {
  const london = getLondonNow();
  const day = london.getDay();
  const minutesNow = london.getHours() * 60 + london.getMinutes();
  const prevDay = (day + 6) % 7;

  // Is a session from today covering "now"?
  for (const [start, end] of SCHEDULE[day]) {
    if (end <= 1440) {
      if (minutesNow >= start && minutesNow < end) {
        return { open: true, closesAt: end };
      }
    } else if (minutesNow >= start) {
      return { open: true, closesAt: end - 1440 };
    }
  }

  // Did yesterday's late session spill into this morning?
  for (const [, end] of SCHEDULE[prevDay]) {
    if (end > 1440) {
      const overflow = end - 1440;
      if (minutesNow < overflow) {
        return { open: true, closesAt: overflow };
      }
    }
  }

  // Closed — find the next opening time
  for (const [start] of SCHEDULE[day]) {
    if (start > minutesNow) {
      return { open: false, opensAt: start, opensDay: day };
    }
  }
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    if (SCHEDULE[d].length > 0) {
      return { open: false, opensAt: SCHEDULE[d][0][0], opensDay: d };
    }
  }
  return { open: false, opensAt: 0, opensDay: day };
}

const ORDER_PLATFORMS = [
  {
    name: "Just Eat",
    href: JUSTEAT_URL,
    icon: SiJusteat,
    className: "bg-orange-500 hover:bg-orange-600 text-white",
  },
  {
    name: "Uber Eats",
    href: UBEREATS_URL,
    icon: SiUbereats,
    className:
      "bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700",
    iconClassName: "text-green-400",
  },
  {
    name: "Deliveroo",
    href: DELIVEROO_URL,
    icon: SiDeliveroo,
    className:
      "bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700",
    iconClassName: "text-teal-400",
  },
];

const HoursAndOrder = () => {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<Status | null>(null);
  const [today, setToday] = useState<number>(0);

  useEffect(() => {
    const update = () => {
      setStatus(computeStatus());
      setToday(getLondonNow().getDay());
    };
    update();
    setMounted(true);
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.section
      initial="hidden"
      id="order"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="container mx-auto py-16 px-4"
    >
      <motion.h2
        variants={fadeInUp}
        className="mb-10 text-center text-3xl lg:text-4xl font-bold tracking-tighter"
      >
        Order Now
      </motion.h2>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
      >
        {/* Live hours */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900 p-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-amber-500/10 text-amber-500 shrink-0">
              <HiOutlineClock size={20} />
            </div>
            <div>
              {mounted && status ? (
                <>
                  <p className="flex items-center gap-1.5 font-semibold text-sm">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        status.open ? "bg-green-500" : "bg-red-500"
                      }`}
                    />
                    {status.open ? "Open now" : "Closed"}
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {status.open
                      ? `Closes at ${formatMinutes(status.closesAt)}`
                      : `Opens ${
                          status.opensDay === today
                            ? "today"
                            : DAY_LABELS[status.opensDay]
                        } at ${formatMinutes(status.opensAt)}`}
                  </p>
                </>
              ) : (
                <p className="text-sm text-neutral-500">Checking hours…</p>
              )}
            </div>
          </div>

          <details className="text-xs text-neutral-400 mt-1">
            <summary className="cursor-pointer text-neutral-500 hover:text-neutral-300 transition-colors">
              See full week
            </summary>
            <ul className="mt-2 space-y-1">
              {SCHEDULE.map((ranges, i) => (
                <li
                  key={i}
                  className={`flex justify-between ${
                    mounted && i === today ? "text-amber-500" : ""
                  }`}
                >
                  <span>{DAY_LABELS[i]}</span>
                  <span>
                    {ranges
                      .map(
                        ([s, e]) =>
                          `${formatMinutes(s)}–${formatMinutes(e % 1440 === 0 ? 1440 : e % 1440)}`,
                      )
                      .join(", ")}
                  </span>
                </li>
              ))}
            </ul>
          </details>
        </motion.div>

        {/* Delivery & collection info */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col gap-3 rounded-2xl border border-neutral-800 bg-neutral-900 p-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-amber-500/10 text-amber-500 shrink-0">
              <TbBike size={20} />
            </div>
            <p className="font-semibold text-sm">Delivery &amp; Collection</p>
          </div>
          <ul className="text-xs text-neutral-400 space-y-1.5">
            <li>Collection ready in ~10 min</li>
            <li>Delivery in ~25–40 min</li>
            <li>No minimum order on Just Eat</li>
            <li className="text-neutral-600">
              Fees &amp; delivery area vary by platform
            </li>
          </ul>
        </motion.div>

        {/* Order buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col gap-2 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 justify-center"
        >
          {ORDER_PLATFORMS.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-1.5 rounded-full py-2.5 text-xs font-bold transition-colors ${platform.className}`}
            >
              <platform.icon size={14} className={platform.iconClassName} />
              {platform.name}
              <HiArrowUpRight size={10} className="opacity-70" />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HoursAndOrder;
