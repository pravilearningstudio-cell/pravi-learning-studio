
"use client";

import { motion } from "framer-motion";
import { BookOpen, Landmark } from "lucide-react";

export default function Courses() {
  const courses = [
    {
      icon: <Landmark className="h-10 w-10 text-[#A8BFA3]" />,
      title: "Sejarah",
      level: "Form 1 • Form 2 • Form 3",
      price: "RM60 / month",
      description:
        "Build a strong foundation in Sejarah through clear explanations, engaging storytelling, visual timelines, structured notes, and guided exercises designed to help students understand historical events and remember important facts with confidence.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-[#7B93B0]" />,
      title: "SPM Pendidikan Moral",
      level: "Form 4 • Form 5",
      price: "RM70 / month",
      description:
        "Master SPM Pendidikan Moral through a deeper understanding of nilai universal, structured answering techniques, real-life examples, and focused examination preparation to help students approach every question with confidence.",
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

              <div className="mt-6 border-t border-gray-100 pt-5">
                <p className="text-sm font-medium text-gray-500">
                  Monthly Tuition Fee
                </p>
                <p className="mt-1 text-2xl font-bold text-[#2F3A3D]">
                  {course.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
