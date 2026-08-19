"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Brain,
  Target,
  Heart,
  Lightbulb,
} from "lucide-react";

export default function MeetYourTutor() {
  const highlights = [
    {
      icon: <Brain className="h-5 w-5" />,
      title: "Student-friendly",
      text: "Explains things in a way students actually understand.",
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Makes it click",
      text: "Turns confusing topics into simple, memorable ideas.",
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Exam-focused",
      text: "Builds understanding while teaching students how to answer.",
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "A safe space",
      text: "Questions are always welcome — no matter how small.",
    },
  ];

  return (
    <section
      id="tutor"
      className="overflow-hidden bg-[#FAF9F6] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#7B93B0]">
            Meet Ms. Pravi 👋🏻
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[#2F3A3D] sm:text-5xl">
            The tutor behind P.L.S.
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#2F3A3D]/70">
            Founder, tutor, and someone who genuinely believes that learning
            should make students think{" "}
            <span className="font-semibold text-[#2F3A3D]">
              “Ooh, I get it!”
            </span>
          </p>
        </motion.div>

        {/* TWO PHOTOS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {/* PHOTO 1 */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-[#A8BFA3]/30 bg-white p-3 shadow-[0_18px_50px_rgba(47,58,61,0.08)]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/tutor/tutor-huh-ooh.png.png"
                alt="Ms. Pravi, founder and tutor of Pravi Learning Studio"
                fill
                priority
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="absolute bottom-7 left-7 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-[#2F3A3D] shadow-lg backdrop-blur">
              Founder & Tutor 🌿
            </div>
          </div>

          {/* PHOTO 2 */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-[#7B93B0]/25 bg-white p-3 shadow-[0_18px_50px_rgba(47,58,61,0.08)]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
              <Image
                src="/tutor/tutor-study.png.jpeg"
                alt="Ms. Pravi preparing learning materials"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="absolute bottom-7 left-7 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-[#2F3A3D] shadow-lg backdrop-blur">
              Learning, but make it make sense ✨
            </div>
          </div>
        </motion.div>

        {/* SHORT INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 max-w-3xl text-center"
        >
          <p className="text-lg leading-8 text-[#2F3A3D]/75 sm:text-xl">
            I know what it feels like to stare at a topic and think,
            <span className="font-semibold text-[#2F3A3D]">
              {" "}
              “Okay… I read it. I understood nothing.” 😭
            </span>
          </p>

          <p className="mt-4 text-lg leading-8 text-[#2F3A3D]/75">
            That’s why P.L.S. focuses on lessons that are{" "}
            <span className="font-semibold text-[#2F3A3D]">
              simple, relatable, interactive and exam-focused.
            </span>
          </p>
        </motion.div>

        {/* HIGHLIGHTS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              className="rounded-2xl border border-[#A8BFA3]/20 bg-white p-5 shadow-[0_10px_30px_rgba(47,58,61,0.05)]"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF4F1] text-[#7B93B0]">
                {item.icon}
              </div>

              <h3 className="font-bold text-[#2F3A3D]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#2F3A3D]/65">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* PARENT + STUDENT MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-[#A8BFA3]/25 bg-[#EEF4F1] px-7 py-8 text-center sm:px-10"
        >
          <p className="text-xl font-bold leading-8 text-[#2F3A3D] sm:text-2xl">
            “I want my child to understand, not just memorise.”
          </p>

          <p className="mt-3 text-base leading-7 text-[#2F3A3D]/70">
            And for students: “I want a tutor who actually gets how I learn.”
          </p>

          <p className="mt-5 text-lg font-semibold text-[#2F3A3D]">
            That’s exactly what I’m here for. 🌿
          </p>
        </motion.div>

      </div>
    </section>
  );
}