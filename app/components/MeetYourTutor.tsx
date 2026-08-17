"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Brain,
  Lightbulb,
  Target,
  MessageCircle,
} from "lucide-react";

export default function MeetYourTutor() {
  const reasons = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "I THINK LIKE A STUDENT.",
      text: (
        <>
          I understand the confusion, the “wait… what?” moments and the
          pressure of exam questions.
          <br />
          <br />
          That helps me explain things in a way that actually makes sense.
        </>
      ),
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "WE STUDY SMARTER.",
      text: (
        <>
          Simple explanations, memory techniques, question strategies and
          structured revision — all designed to make learning more effective.
        </>
      ),
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "WE PREPARE FOR THE EXAM.",
      text: (
        <>
          Knowing the topic is one thing.{" "}
          <span className="font-semibold text-[#2F3A3D]">
            Knowing how to answer the question is another.
          </span>
          <br />
          <br />
          Students learn how to recognise questions, structure answers and
          apply what they know.
        </>
      ),
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "QUESTIONS ARE ALWAYS WELCOME.",
      text: (
        <>
          No awkwardness. No “that’s a silly question.”
          <br />
          <br />
          <span className="font-semibold text-[#2F3A3D]">
            “I don’t understand”
          </span>{" "}
          is a perfectly good place to start. 🤍
        </>
      ),
    },
  ];

  return (
    <section
      id="tutor"
      className="overflow-hidden bg-[#FAF9F6] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#7B93B0]">
            Meet Your Tutor 👋🏻
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[#2F3A3D] sm:text-5xl">
            Hi, I’m Pravi!
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#2F3A3D]/75">
            Tutor. Founder. And someone who knows that sometimes{" "}
            <span className="font-semibold text-[#2F3A3D]">
              “WAIT, I DON’T GET IT”
            </span>{" "}
            is exactly where learning begins.
          </p>
        </motion.div>

        {/* INTRO + MAIN PHOTO */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* PHOTO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full bg-[#EEF4F1]" />

            <div className="absolute -bottom-6 -right-5 h-28 w-28 rounded-full bg-[#A8BFA3]/30" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#A8BFA3]/30 bg-white p-3 shadow-[0_20px_60px_rgba(47,58,61,0.10)]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/tutor/tutor-huh-ooh.png.png"
                  alt="Pravi, founder and tutor of Pravi Learning Studio"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-5 left-6 rounded-full border border-[#A8BFA3]/40 bg-white px-5 py-3 text-sm font-semibold text-[#2F3A3D] shadow-lg">
              Founder & Tutor 🌿
            </div>
          </motion.div>

          {/* INTRO TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-8 text-[#2F3A3D]/75 sm:text-xl">
              I’m close enough to the student experience to understand what
              makes studying frustrating — and what makes a lesson actually
              <span className="font-semibold text-[#2F3A3D]"> click.</span>
            </p>

            <div className="my-6 rounded-2xl border border-[#7B93B0]/20 bg-[#EEF4F1] px-6 py-5">
              <p className="text-xl font-semibold leading-8 text-[#2F3A3D]">
                “Okay… I read it. I understood nothing.”
              </p>
            </div>

            <p className="text-lg leading-8 text-[#2F3A3D]/75 sm:text-xl">
              At P.L.S., lessons are{" "}
              <span className="font-semibold text-[#2F3A3D]">
                simple, relatable, interactive and exam-focused.
              </span>
            </p>

            <p className="mt-5 text-lg leading-8 text-[#2F3A3D]/75 sm:text-xl">
              No endless memorising just for the sake of it. We focus on
              understanding, applying and remembering.
            </p>
          </motion.div>
        </div>

        {/* WHY ME */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#7B93B0]">
              Why Me? 🧠
            </p>

            <h3 className="text-3xl font-bold tracking-tight text-[#2F3A3D] sm:text-4xl">
              Learning should feel understandable.
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="rounded-3xl border border-[#A8BFA3]/25 bg-white p-6 shadow-[0_12px_40px_rgba(47,58,61,0.06)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EEF4F1] text-[#7B93B0]">
                  {reason.icon}
                </div>

                <h4 className="text-base font-bold leading-6 text-[#2F3A3D]">
                  {reason.title}
                </h4>

                <div className="mt-3 text-sm leading-6 text-[#2F3A3D]/70">
                  {reason.text}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SECOND PHOTO + PARENT MESSAGE */}
        <div className="mt-24 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#7B93B0]">
              And for the parents… 👀
            </p>

            <h3 className="text-3xl font-bold leading-tight text-[#2F3A3D] sm:text-4xl">
              A different perspective.
            </h3>

            <p className="mt-5 text-lg leading-8 text-[#2F3A3D]/75">
              Being a younger tutor doesn’t mean I take teaching any less
              seriously.
            </p>

            <p className="mt-4 text-lg leading-8 text-[#2F3A3D]/75">
              It gives me something valuable:{" "}
              <span className="font-semibold text-[#2F3A3D]">
                I understand how students learn today.
              </span>
            </p>

            <div className="mt-5 rounded-2xl bg-[#EEF4F1] p-5">
              <p className="text-lg font-semibold leading-8 text-[#2F3A3D]">
                My goal isn't just to finish the syllabus. It’s to build
                understanding, confidence, exam skills and better study habits.
              </p>
            </div>

            <p className="mt-5 text-lg leading-8 text-[#2F3A3D]/75">
              Sometimes, the tutor who understands the student can make all
              the difference.
            </p>

            <p className="mt-3 text-xl font-bold leading-8 text-[#2F3A3D]">
              And that’s what I hope to bring to P.L.S. 🌿
            </p>
          </motion.div>

          {/* SECOND PHOTO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#EEF4F1]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[#A8BFA3]/30 bg-white p-3 shadow-[0_20px_60px_rgba(47,58,61,0.10)]">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/tutor/tutor-study.png.jpeg"
                  alt="Pravi preparing study materials"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}