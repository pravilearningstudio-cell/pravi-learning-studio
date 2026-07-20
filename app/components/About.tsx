"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbulb, HeartHandshake, BookOpen } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="grid items-center gap-16 md:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-[#EEF4F1] px-5 py-2 text-sm font-semibold text-[#2F3A3D]">
              About Us
            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#2F3A3D] md:text-5xl leading-tight">
              Learning should create
              <span className="text-[#7B93B0]"> confidence, </span>
              not fear.
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Pravi Learning Studio believes every learner deserves to feel
              capable, curious, and excited about learning. We transform
              uncertainty into understanding through meaningful teaching,
              personalised guidance, and a supportive learning environment.
            </p>
          </motion.div>

          {/* Right - Mascot */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -8, 0],
            }}
            className="flex justify-center"
          >
            <Image
              src="/mascot/idea.png"
              alt="Idea Mascot"
              width={350}
              height={350}
              className="drop-shadow-2xl"
            />
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
            className="rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl p-8 shadow-xl"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4F1]">
              <Lightbulb className="h-8 w-8 text-[#A8BFA3]" />
            </div>

            <h3 className="text-2xl font-bold text-[#2F3A3D]">
              Inspire Curiosity
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Every lesson encourages learners to ask questions, explore
              ideas, and discover answers with confidence.
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl p-8 shadow-xl"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5EFE7]">
              <HeartHandshake className="h-8 w-8 text-[#7B93B0]" />
            </div>

            <h3 className="text-2xl font-bold text-[#2F3A3D]">
              Build Confidence
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              We create a safe learning environment where every student feels
              encouraged, supported, and proud of their progress.
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl p-8 shadow-xl"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4F1]">
              <BookOpen className="h-8 w-8 text-[#A8BFA3]" />
            </div>

            <h3 className="text-2xl font-bold text-[#2F3A3D]">
              Meaningful Learning
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Understanding always comes before memorising. We help learners
              truly grasp concepts so knowledge lasts beyond the classroom.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}