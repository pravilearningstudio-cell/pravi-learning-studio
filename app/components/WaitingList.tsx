"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import WaitingForm from "./WaitingForm";

export default function WaitingList() {
  return (
    <section
      id="waitlist"
      className="relative overflow-hidden bg-gradient-to-br from-[#EEF4F1] via-white to-[#FAF9F6] py-24"
    >
      {/* Background Blobs */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#A8BFA3]/20 blur-3xl" />
      <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-[#7B93B0]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#2F3A3D] shadow">
              Join Our Waiting List
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#2F3A3D] md:text-5xl">
              Be part of our
              <span className="text-[#7B93B0]"> 2027 journey.</span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Pravi Learning Studio is preparing to open its doors in 2027.
              Join our waiting list today to receive exclusive updates,
              announcements, early registration opportunities, and learning
              resources before our official launch.
            </p>

            <div className="mt-10 rounded-3xl bg-white/70 p-6 shadow-lg backdrop-blur-xl">
              <h3 className="text-xl font-bold text-[#2F3A3D]">
                Why join early?
              </h3>

              <ul className="mt-5 space-y-3 text-gray-600">
                <li>✨ Early registration access</li>
                <li>📚 Exclusive learning updates</li>
                <li>🎉 Launch announcements</li>
                <li>💚 Priority communication</li>
              </ul>
            </div>

            {/* Mascot */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-12 flex justify-center lg:justify-start"
            >
              <Image
                src="/mascot/wave.png"
                alt="Pravi Mascot"
                width={280}
                height={280}
                className="drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Right Side */}
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