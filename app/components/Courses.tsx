"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Calculator,
  Languages,
  Presentation,
} from "lucide-react";

export default function Courses() {
  const courses = [
    {
      icon: <BookOpen className="h-10 w-10 text-[#7B93B0]" />,
      title: "English",
      description:
        "Primary and Secondary English lessons that build strong communication, writing, reading, and comprehension skills.",
    },
    {
      icon: <Calculator className="h-10 w-10 text-[#A8BFA3]" />,
      title: "Primary Mathematics",
      description:
        "Helping young learners develop confidence in mathematics through clear explanations and engaging practice.",
    },
    {
      icon: <Languages className="h-10 w-10 text-[#7B93B0]" />,
      title: "SPM Moral",
      description:
        "Master SPM Moral with effective answering techniques, value analysis, and structured exam preparation.",
    },
    {
      icon: <Presentation className="h-10 w-10 text-[#A8BFA3]" />,
      title: "Exam Seminars & Revision",
      description:
        "Focused revision sessions, exam strategies, study techniques, and practical tips to help students perform at their best.",
    },
  ];

  return (
    <section id="courses" className="bg-[#FAF9F6] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#2F3A3D] shadow">
            Our Learning Programmes
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#2F3A3D] md:text-5xl">
            Learn with
            <span className="text-[#7B93B0]"> confidence</span>,
            <br />
            grow with
            <span className="text-[#A8BFA3]"> purpose.</span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Carefully designed programmes that help every learner build
            understanding, confidence, and lasting success.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="rounded-3xl bg-white p-8 shadow-xl"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4F1]">
                {course.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#2F3A3D]">
                {course.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {course.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}