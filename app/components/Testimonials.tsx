"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Future Parent",
      role: "Pravi Learning Studio Community",
      quote:
        "We're excited to see a learning studio that values understanding, confidence, and curiosity over memorisation.",
    },
    {
      name: "Future Student",
      role: "Launching 2027",
      quote:
        "I can't wait to experience lessons that make learning enjoyable and help every 'Huh?' become an 'Ooh!'.",
    },
    {
      name: "Future Educator",
      role: "Pravi Learning Studio",
      quote:
        "Every learner deserves patient guidance, meaningful teaching, and the confidence to reach their potential.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-[#FAF9F6] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Top Section */}
        <div className="grid items-center gap-16 md:grid-cols-2">

          {/* Mascot */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -8, 0],
            }}
            className="order-2 flex justify-center md:order-1"
          >
            <Image
              src="/mascot/celebrate.png"
              alt="Celebrate Mascot"
              width={340}
              height={340}
              priority
              className="drop-shadow-2xl"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#2F3A3D] shadow">
              Testimonials
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#2F3A3D] md:text-5xl">
              Building trust,
              <span className="text-[#7B93B0]">
                {" "}
                one learner at a time.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Every success story begins with one small breakthrough. As we
              prepare for our 2027 launch, we look forward to celebrating every
              student's achievements and every family's journey with us.
            </p>
          </motion.div>

        </div>

        {/* Testimonial Cards */}
        <div className="mt-24 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl border border-white/40 bg-white/70 p-8 shadow-xl backdrop-blur-xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <Quote className="h-10 w-10 text-[#A8BFA3]" />

                <div className="flex gap-1">
                  <Star className="h-4 w-4 fill-[#F7C948] text-[#F7C948]" />
                  <Star className="h-4 w-4 fill-[#F7C948] text-[#F7C948]" />
                  <Star className="h-4 w-4 fill-[#F7C948] text-[#F7C948]" />
                  <Star className="h-4 w-4 fill-[#F7C948] text-[#F7C948]" />
                  <Star className="h-4 w-4 fill-[#F7C948] text-[#F7C948]" />
                </div>
              </div>

              <p className="italic leading-8 text-gray-600">
                "{item.quote}"
              </p>

              <div className="mt-8 border-t border-gray-100 pt-6">
                <h3 className="font-bold text-[#2F3A3D]">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}