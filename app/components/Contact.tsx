"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="overflow-hidden bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Top Section */}
        <div className="grid items-center gap-16 md:grid-cols-2">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="rounded-full bg-[#EEF4F1] px-5 py-2 text-sm font-semibold text-[#2F3A3D]">
              Contact Us
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#2F3A3D] md:text-5xl">
              LET'S STAY
              <span className="text-[#7B93B0]"> CONNECTED.</span>
            </h2>
          </motion.div>

          {/* Mascot */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -8, 0],
            }}
            className="flex justify-center"
          >
            <Image
              src="/mascot/wave.png"
              alt="Wave Mascot"
              width={340}
              height={340}
              priority
              className="drop-shadow-2xl"
            />
          </motion.div>

        </div>

        {/* Contact Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {/* Email */}
          <motion.a
            href="mailto:pravilearningstudio@gmail.com"
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="rounded-3xl border border-white/40 bg-white/70 p-8 text-center shadow-xl backdrop-blur-xl"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4F1]">
              <Mail className="h-8 w-8 text-[#7B93B0]" />
            </div>

            <h3 className="text-2xl font-bold text-[#2F3A3D]">
              Email
            </h3>

            <p className="mt-4 break-words text-gray-600">
              pravilearningstudio@gmail.com
            </p>
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://instagram.com/pravi_learningstudio"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="rounded-3xl border border-white/40 bg-white/70 p-8 text-center shadow-xl backdrop-blur-xl"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5EFE7]">
              <FaInstagram className="text-3xl text-[#A8BFA3]" />
            </div>

            <h3 className="text-2xl font-bold text-[#2F3A3D]">
              Instagram
            </h3>

            <p className="mt-4 text-gray-600">
              @pravi_learningstudio
            </p>
          </motion.a>

          {/* Register */}
          <motion.a
            href="#register"
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="rounded-3xl border border-white/40 bg-white/70 p-8 text-center shadow-xl backdrop-blur-xl"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4F1]">
              <ArrowRight className="h-8 w-8 text-[#7B93B0]" />
            </div>

            <h3 className="text-2xl font-bold text-[#2F3A3D]">
              Register Now
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Register your interest with Pravi Learning Studio and stay
              connected with us for updates and learning opportunities.
            </p>
          </motion.a>

        </div>

      </div>
    </section>
  );
}