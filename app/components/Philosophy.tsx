"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Sparkles, Target } from "lucide-react";

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="overflow-hidden bg-[#FAF9F6] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Top Section */}
        <div className="grid items-center gap-16 md:grid-cols-2">

          {/* Mascot */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -8, 0],
            }}
            className="order-2 flex justify-center md:order-1"
          >
            <Image
              src="/mascot/think.png"
              alt="Thinking Mascot"
              width={350}
              height={350}
              priority
              className="drop-shadow-2xl"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#2F3A3D] shadow">
              Our Philosophy
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#2F3A3D] md:text-5xl">
              Turning
              <span className="text-[#7B93B0]"> "Huhs"</span>
              <br />
              into
              <span className="text-[#A8BFA3]"> "Oohs"</span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Every student has experienced that moment of confusion—the little{" "}
              <strong>"Huh?"</strong> when something doesn't make sense. Our
              mission is to guide learners patiently until they reach that
              wonderful breakthrough moment...
              <span className="font-bold text-[#A8BFA3]"> OOOH! ✨</span>
            </p>
          </motion.div>

        </div>

        {/* Cards */}
        <div className="mt-24 grid gap-8 md:grid-cols-3">

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-white/40 bg-white/70 p-8 shadow-xl backdrop-blur-xl"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4F1]">
              <Brain className="h-8 w-8 text-[#7B93B0]" />
            </div>

            <h3 className="text-2xl font-bold text-[#2F3A3D]">
              Understand Deeply
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              We focus on genuine understanding instead of memorisation,
              helping students build knowledge that lasts a lifetime.
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-white/40 bg-white/70 p-8 shadow-xl backdrop-blur-xl"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5EFE7]">
              <Sparkles className="h-8 w-8 text-[#A8BFA3]" />
            </div>

            <h3 className="text-2xl font-bold text-[#2F3A3D]">
              Discover Joy
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Learning should feel exciting. Every lesson is designed to spark
              curiosity, celebrate progress, and inspire confidence.
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-white/40 bg-white/70 p-8 shadow-xl backdrop-blur-xl"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4F1]">
              <Target className="h-8 w-8 text-[#7B93B0]" />
            </div>

            <h3 className="text-2xl font-bold text-[#2F3A3D]">
              Grow With Confidence
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Every achievement, no matter how small, builds confidence that
              empowers students to embrace every new challenge.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}