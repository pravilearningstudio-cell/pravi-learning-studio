"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Brain,
  Lightbulb,
  Target,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function MeetYourTutor() {
  const reasons = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "I REMEMBER WHAT IT'S LIKE TO BE THE STUDENT.",
      text: (
        <>
          I understand how confusing topics, frustrating revision and tricky
          exam questions can feel.
          <br />
          <br />
          That perspective helps me teach from a student's point of view —
          not simply from a textbook.
        </>
      ),
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "WE STUDY SMARTER, NOT JUST LONGER.",
      text: (
        <>
          I use{" "}
          <span className="font-semibold text-[#2F3A3D]">
            simple explanations, memory techniques, question strategies and
            structured revision
          </span>{" "}
          to help students learn more effectively.
        </>
      ),
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "EXAMS ARE PART OF THE PLAN.",
      text: (
        <>
          Understanding a topic matters — but knowing{" "}
          <span className="font-semibold text-[#2F3A3D]">
            how to use that knowledge in an exam
          </span>{" "}
          matters too.
          <br />
          <br />
          Students learn how to recognise questions, structure answers and
          apply what they know.
        </>
      ),
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "ASK. TRY. GET IT WRONG. TRY AGAIN.",
      text: (
        <>
          My classes are a space where students can ask questions without
          feeling embarrassed.
          <br />
          <br />
          Because{" "}
          <span className="font-semibold text-[#2F3A3D]">
            “I don't understand”
          </span>{" "}
          isn't a bad answer.
          <br />
          <br />
          It's where learning starts. 🤍
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
            Meet Your Tutor 👋🏻✨
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[#2F3A3D] sm:text-5xl">
            Hi, I’m Pravi!
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#2F3A3D]/75">
            Tutor. Founder. And probably the person who has said{" "}
            <span className="font-semibold text-[#2F3A3D]">
              “WAIT, I DON’T GET IT”
            </span>{" "}
            more times than I’d like to admit. 😭
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
              And honestly? That’s exactly why I love teaching.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#2F3A3D]/75 sm:text-xl">
              I’m still close enough to the student experience to understand
              what it feels like to sit in front of a topic and think:
            </p>

            <div className="my-6 rounded-2xl border border-[#7B93B0]/20 bg-[#EEF4F1] px-6 py-5">
              <p className="text-xl font-semibold leading-8 text-[#2F3A3D]">
                “Okay… I read it. I understood nothing.” 😭
              </p>
            </div>

            <p className="text-lg leading-8 text-[#2F3A3D]/75 sm:text-xl">
              So at P.L.S., I don’t believe in simply throwing information at
              students and hoping it sticks.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#2F3A3D]/75 sm:text-xl">
              I focus on making lessons{" "}
              <span className="font-semibold text-[#2F3A3D]">
                simple, relatable, interactive and exam-focused
              </span>{" "}
              — so students understand{" "}
              <em>why</em> something works, know{" "}
              <em>how</em> to answer it, and remember it later.
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
              A younger tutor can bring a different perspective.
            </h3>

            <p className="mt-5 text-lg leading-8 text-[#2F3A3D]/75">
              Being a younger tutor doesn’t mean I take teaching any less
              seriously.
            </p>

            <p className="mt-4 text-lg leading-8 text-[#2F3A3D]/75">
              Being close to the student experience gives me a different
              advantage:{" "}
              <span className="font-semibold text-[#2F3A3D]">
                I understand how students learn today.
              </span>
            </p>

            <div className="mt-5 rounded-2xl bg-[#EEF4F1] p-5">
              <p className="text-lg font-semibold leading-8 text-[#2F3A3D]">
                My goal isn't simply to finish a syllabus. It’s to help
                students build understanding, confidence, exam skills and
                better study habits.
              </p>
            </div>

            <p className="mt-5 text-lg leading-8 text-[#2F3A3D]/75">
              So while I may be younger than the tutor you expected…
            </p>

            <p className="mt-3 text-xl font-bold leading-8 text-[#2F3A3D]">
              I might just be closer to the student you’re trying to help. 🤍
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

        {/* P.L.S. PROMISE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mt-24 overflow-hidden rounded-[2.5rem] bg-[#2F3A3D] px-8 py-14 text-center sm:px-12"
        >
          <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#A8BFA3]/20" />

          <div className="absolute -bottom-20 -right-10 h-48 w-48 rounded-full bg-[#7B93B0]/20" />

          <div className="relative">
            <div className="mb-4 flex justify-center">
              <Sparkles className="h-7 w-7 text-[#A8BFA3]" />
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A8BFA3]">
              The P.L.S. Promise
            </p>

            <h3 className="mt-7 text-2xl font-medium text-white sm:text-3xl">
              You bring the
            </h3>

            <p className="mt-1 text-4xl font-black text-white sm:text-5xl">
              “HUH?”
            </p>

            <div className="my-5 text-2xl text-[#A8BFA3]">
              ↓
            </div>

            <h3 className="text-2xl font-medium text-white sm:text-3xl">
              I’ll bring the
            </h3>

            <p className="mt-1 text-4xl font-black text-[#A8BFA3] sm:text-5xl">
              “OHHHH.” 💡
            </p>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Because your tutor shouldn't just know the subject.
              <br />
              <span className="font-semibold text-white">
                Your tutor should know how to make YOU understand it.
              </span>
            </p>

            <div className="mx-auto mt-8 h-px max-w-xs bg-white/10" />

            <p className="mt-6 text-lg text-white/80">
              Welcome to Pravi Learning Studio. 🤍
            </p>

            <p className="mt-2 text-lg font-semibold text-[#A8BFA3]">
              Turning your “HUHs?” into “OOHs!” ✨
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}