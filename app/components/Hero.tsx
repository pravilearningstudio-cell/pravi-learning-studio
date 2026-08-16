"use client";

import Image from "next/image";
import { BookOpen, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#FAF9F6] via-white to-[#EEF4F1] py-28"
    >
      {/* Background Blobs */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#A8BFA3]/20 blur-3xl"></div>

      <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-[#7B93B0]/20 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F5EFE7] px-5 py-2 text-sm font-medium text-[#2F3A3D]">
            <Sparkles size={16} />
            Registration Now Open
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-[#2F3A3D] md:text-7xl">
            Learning
            <br />
            Made
            <br />
            Meaningful.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            At Pravi Learning Studio, we believe learning should spark
            curiosity, build confidence, and create lasting understanding.
            Every lesson is designed to transform confusion into clarity.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#about"
              className="rounded-full bg-[#7B93B0] px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Learn More
            </a>

            <a
              href="#register"
              className="rounded-full border-2 border-[#7B93B0] px-8 py-4 font-semibold text-[#7B93B0] transition hover:bg-[#7B93B0] hover:text-white"
            >
              Register Now
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-md rounded-[32px] border border-white/40 bg-white/70 p-10 shadow-2xl backdrop-blur-xl">
            {/* Floating Sparkles */}
            <motion.div
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute right-8 top-6 text-2xl"
            >
              ✨
            </motion.div>

            <motion.div
              animate={{
                opacity: [1, 0.4, 1],
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute left-10 top-20 text-xl"
            >
              ⭐
            </motion.div>

            {/* Floating Mascot */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex justify-center"
            >
              <Image
                src="/mascot/happy.png"
                alt="Pravi Mascot"
                width={220}
                height={220}
                priority
                className="drop-shadow-2xl"
              />
            </motion.div>

            <h2 className="mt-6 text-center text-3xl font-bold text-[#2F3A3D]">
              Pravi Learning Studio
            </h2>

            <p className="mt-3 text-center text-gray-500">
              Turning "Huhs" into "Oohs"™
            </p>

            {/* Registration Card */}
            <div className="mt-10 rounded-2xl bg-[#F5EFE7] p-6 text-center">
              <BookOpen className="mx-auto mb-3 h-8 w-8 text-[#7B93B0]" />

              <p className="text-sm font-medium text-gray-500">
                Ready to Start Learning?
              </p>

              <h3 className="mt-2 text-3xl font-bold text-[#7B93B0]">
                Register Now
              </h3>

              <a
                href="#register"
                className="mt-5 inline-block rounded-full bg-[#7B93B0] px-7 py-3 font-semibold text-white transition hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}