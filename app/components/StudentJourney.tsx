"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Smile, GraduationCap } from "lucide-react";

export default function StudentJourney() {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-[#7B93B0]" />,
      title: "Discover",
      description:
        "Every journey begins by understanding each student's strengths, challenges, and learning style.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-[#A8BFA3]" />,
      title: "Understand",
      description:
        "Lessons are designed to make difficult concepts simple, engaging, and meaningful.",
    },
    {
      icon: <Smile className="h-10 w-10 text-[#7B93B0]" />,
      title: "Grow",
      description:
        "Students gain confidence through consistent support, encouragement, and achievable progress.",
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-[#A8BFA3]" />,
      title: "Succeed",
      description:
        "With stronger understanding and confidence, students are prepared to excel in school and beyond.",
    },
  ];

  return (
    <section id="student-journey" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-[#EEF4F1] px-5 py-2 text-sm font-semibold text-[#2F3A3D]">
            Student Journey
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#2F3A3D] md:text-5xl">
            Every learner deserves a
            <span className="text-[#7B93B0]"> meaningful journey.</span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            We guide students step by step—from understanding concepts to
            building confidence and achieving lasting success.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="rounded-3xl bg-[#FAF9F6] p-8 shadow-lg"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#2F3A3D]">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}