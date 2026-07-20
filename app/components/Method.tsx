"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket } from "lucide-react";

export default function Method() {
  const steps = [
    {
      icon: <Search className="h-8 w-8 text-[#7B93B0]" />,
      title: "Discover",
      description:
        "We begin by understanding every learner's strengths, challenges, goals, and preferred learning style. Every student is unique, so every learning journey starts differently.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-[#A8BFA3]" />,
      title: "Understand",
      description:
        "Complex concepts become simple through engaging explanations, real-life examples, visual learning, and meaningful discussions until everything finally clicks.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-[#7B93B0]" />,
      title: "Grow",
      description:
        "Students apply what they've learnt confidently through practice, reflection, and continuous encouragement, developing independence beyond the classroom.",
    },
  ];

  return (
    <section
      id="method"
      className="overflow-hidden bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Top Section */}
        <div className="grid items-center gap-16 md:grid-cols-2">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-[#EEF4F1] px-5 py-2 text-sm font-semibold text-[#2F3A3D]">
              The P.L.S. Method™
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#2F3A3D] md:text-5xl">
              A learning journey built for
              <span className="text-[#7B93B0]">
                {" "}
                lasting understanding.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Every lesson follows a thoughtful learning journey that transforms
              confusion into confidence. We don't simply teach students what to
              think—we guide them towards understanding, independence, and a
              genuine love for learning.
            </p>
          </motion.div>

          {/* Mascot */}
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
              src="/mascot/reading.png"
              alt="Reading Mascot"
              width={350}
              height={350}
              priority
              className="drop-shadow-2xl"
            />
          </motion.div>

        </div>

        {/* Method Cards */}
        <div className="mt-24 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl border border-white/40 bg-white/70 p-8 shadow-xl backdrop-blur-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4F1]">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#2F3A3D]">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {step.description}
              </p>

              <div className="mt-6 h-1 w-16 rounded-full bg-[#A8BFA3]" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}