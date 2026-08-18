"use client";

import { motion } from "framer-motion";
import { BookOpen, Landmark } from "lucide-react";

export default function Courses() {
  const courses = [
    {
      icon: <Landmark className="h-10 w-10 text-[#A8BFA3]" />,
      title: "Primary Sejarah",
      level: "Standard 4 • Standard 5 • Standard 6",
      description:
        "Make Sejarah easier to understand through clear explanations, engaging storytelling, timeline-based learning, and guided practice designed for upper primary learners.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-[#7B93B0]" />,
      title: "SPM Moral",
      level: "Form 4 • Form 5",
      description:
        "Master SPM Moral through value understanding, structured answering techniques, and focused exam preparation.",
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
            Our Tuition Programmes
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#2F3A3D] md:text-5xl">
            Learn with
            <span className="text-[#7B93B0]"> confidence</span>,
            <br />
            grow with
            <span className="text-[#A8BFA3]"> purpose.</span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Focused tuition programmes designed to build understanding,
            confidence, and strong academic foundations.
          </p>
        </motion.div>

        <div className="mx-auto mt-20 grid max-w-4xl gap-8 md:grid-cols-2">
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

              <p className="mt-2 text-sm font-semibold text-[#7B93B0]">
                {course.level}
              </p>

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