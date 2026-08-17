"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programmes", href: "#courses" },
    { name: "Tutor", href: "#tutor" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <GraduationCap className="h-8 w-8 text-[#7B93B0]" />

          <div>
            <h1 className="text-xl font-bold text-[#2F3A3D]">
              Pravi Learning Studio
            </h1>

            <p className="text-xs text-gray-500">
              Turning "Huhs" into "Oohs"™
            </p>
          </div>
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-gray-700 transition hover:text-[#7B93B0]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#register"
            className="rounded-full bg-[#7B93B0] px-6 py-3 font-semibold text-white transition hover:scale-105"
          >
            Register Now
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <X className="h-7 w-7 text-[#2F3A3D]" />
          ) : (
            <Menu className="h-7 w-7 text-[#2F3A3D]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="border-t bg-white md:hidden"
          >
            <div className="flex flex-col px-6 py-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-lg text-gray-700"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#register"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full bg-[#7B93B0] px-6 py-4 text-center font-semibold text-white transition hover:scale-[1.02]"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}