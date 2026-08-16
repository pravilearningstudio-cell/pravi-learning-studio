"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  BookOpen,
  HeartHandshake,
} from "lucide-react";

const programmes = [
  {
    icon: Calculator,
    title: "Primary Mathematics",
    level: "Standard 4 • Standard 5 • Standard 6",
    duration: "1 Hour",
    schedule: "Once Weekly",
    lesson: "RM30 / lesson",
    month: "RM120/ month",
    color: "bg-[#EEF4F1]",
  },
  {
    icon: BookOpen,
    title: "Primary Sejarah",
    level: "Standard 4 • Standard 5 • Standard 6",
    duration: "1 Hour",
    schedule: "Once Weekly",
    lesson: "RM30 / lesson",
    month: "RM120/ month",
    color: "bg-[#F5EFE7]",
  },
  {
    icon: HeartHandshake,
    title: "SPM Moral",
    level: "Form 4 • Form 5",
    duration: "1.5 Hours",
    schedule: "Once Weekly",
    lesson: "RM30 / lesson",
    month: "RM120 / month",
    color: "bg-[#EEF4F1]",
  },
];

export default function TuitionFees() {
  return (
    <section
      id="fees"
      className="bg-[#FAF9F6] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-[#EEF4F1] px-5 py-2 text-sm font-semibold text-[#2F3A3D]">
            Tuition Fees
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#2F3A3D] md:text-5xl">
            Affordable Learning,
            <span className="text-[#7B93B0]"> Exceptional Value</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We believe quality education should be accessible.
            Our small-group classes provide personalised learning
            at affordable monthly rates.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programmes.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-white/40 bg-white p-8 shadow-xl"
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon className="h-8 w-8 text-[#7B93B0]" />
                </div>

                <h3 className="text-2xl font-bold text-[#2F3A3D]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-[#7B93B0]">
                  {item.level}
                </p>

                <div className="mt-6 space-y-3 text-gray-600">
                  <p>
                    <strong>Duration:</strong> {item.duration}
                  </p>

                  <p>
                    <strong>Schedule:</strong> {item.schedule}
                  </p>

                  <p className="pt-2 text-xl font-bold text-[#7B93B0]">
                    {item.lesson}
                  </p>

                  <p className="text-2xl font-bold text-[#2F3A3D]">
                    {item.month}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-16 max-w-4xl rounded-3xl bg-[#EEF4F1] p-10 text-center"
        >
          <h3 className="text-3xl font-bold text-[#2F3A3D]">
            Small Group Learning
          </h3>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Every class is conducted in a small-group setting,
            allowing students to receive personalised guidance,
            ask questions confidently, and learn in a supportive
            environment.
          </p>
        </motion.div>

      </div>
    </section>
  );
}