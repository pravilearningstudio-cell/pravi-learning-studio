"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Landmark,
} from "lucide-react";

const programmes = [
  {
    icon: Landmark,
    title: "SPM Sejarah",
    level: "Form 4 • Form 5",
    duration: "1.5 Hours",
    schedule: "Once Weekly",
    lesson: "RM25 / lesson",
    month: "RM100 / month",
    color: "bg-[#EEF4F1]",
  },
  {
    icon: BookOpen,
    title: "SPM Pendidikan Moral",
    level: "Form 4 • Form 5",
    duration: "1.5 Hours",
    schedule: "Once Weekly",
    lesson: "RM25 / lesson",
    month: "RM100 / month",
    color: "bg-[#F5EFE7]",
  },
];

export default function TuitionFees() {
  return (
    <section
      id="fees"
      className="bg-[#FAF9F6] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
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
            Simple Fees,
            <span className="text-[#7B93B0]">
              {" "}Meaningful Learning
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quality, focused tuition in small groups —
            without making learning feel overwhelming.
          </p>
        </motion.div>

        {/* PROGRAMMES */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
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
                  y: -8,
                  scale: 1.02,
                }}
                className="rounded-3xl border border-white/40 bg-white p-8 shadow-xl"
              >
                {/* ICON */}
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon className="h-8 w-8 text-[#7B93B0]" />
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold text-[#2F3A3D]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-[#7B93B0]">
                  {item.level}
                </p>

                {/* DETAILS */}
                <div className="mt-6 space-y-3 text-gray-600">
                  <p>
                    <strong>Duration:</strong> {item.duration}
                  </p>

                  <p>
                    <strong>Schedule:</strong> {item.schedule}
                  </p>
                </div>

                {/* PRICE */}
                <div className="mt-7 border-t border-[#EEF4F1] pt-6">
                  <p className="text-sm font-medium text-gray-500">
                    From
                  </p>

                  <p className="mt-1 text-xl font-bold text-[#7B93B0]">
                    {item.lesson}
                  </p>

                  <p className="mt-1 text-3xl font-bold text-[#2F3A3D]">
                    {item.month}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* SMALL GROUP MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-14 max-w-4xl rounded-3xl bg-[#EEF4F1] px-8 py-8 text-center"
        >
          <h3 className="text-2xl font-bold text-[#2F3A3D]">
            Small Groups. More Attention. 🌿
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-gray-600">
            Small-group classes give students the space to ask questions,
            receive guidance, and learn at a comfortable pace.
          </p>
        </motion.div>

      </div>
    </section>
  );
}