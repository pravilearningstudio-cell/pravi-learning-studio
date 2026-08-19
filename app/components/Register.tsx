"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WaitingForm from "./WaitingForm";

export default function WaitingList() {
  return (
    <section
      id="register"
      className="relative overflow-hidden bg-gradient-to-br from-[#EEF4F1] via-white to-[#FAF9F6] py-24"
    >
      {/* Background Blobs */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#A8BFA3]/20 blur-3xl" />

      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[#7B93B0]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#2F3A3D] shadow">
              Register Now
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#2F3A3D] md:text-5xl">
              Ready to make
              <span className="text-[#7B93B0]"> learning click?</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Interested in joining P.L.S.? Register your interest and
              tell us which subject you'd like to learn.
            </p>

            {/* PROGRAMMES */}
            <div className="mt-8 rounded-3xl bg-white/80 p-6 shadow-lg backdrop-blur-xl">
              <h3 className="text-xl font-bold text-[#2F3A3D]">
                Currently offered
              </h3>

              <div className="mt-5 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF4F1] text-xl">
                    🏛️
                  </div>

                  <div>
                    <p className="font-bold text-[#2F3A3D]">
                      SPM Sejarah
                    </p>

                    <p className="text-sm text-gray-500">
                      Form 4 • Form 5
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F5EFE7] text-xl">
                    📖
                  </div>

                  <div>
                    <p className="font-bold text-[#2F3A3D]">
                      SPM Pendidikan Moral
                    </p>

                    <p className="text-sm text-gray-500">
                      Form 4 • Form 5
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WHY P.L.S. */}
            <div className="mt-6 rounded-3xl bg-[#EEF4F1]/80 p-6">
              <h3 className="text-xl font-bold text-[#2F3A3D]">
                Why P.L.S.? 🌿
              </h3>

              <ul className="mt-4 space-y-3 text-gray-600">
                <li>✨ Understanding before memorising</li>
                <li>📚 Clear, relatable lessons</li>
                <li>🎯 Exam-focused guidance</li>
                <li>💚 A space where questions are welcome</li>
              </ul>
            </div>

            {/* MASCOT */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-10 flex justify-center lg:justify-start"
            >
              <Image
                src="/mascot/wave.png"
                alt="Pravi Learning Studio mascot"
                width={220}
                height={220}
                className="drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE — FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <WaitingForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}