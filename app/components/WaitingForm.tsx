"use client";

import { FormEvent, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";

type FormData = {
  name: string;
  email: string;
  child: string;
  subject: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  child: "",
  subject: "",
  message: "",
};

export default function WaitingForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const isDisabled = useMemo(() => {
    return (
      loading ||
      !form.name.trim() ||
      !form.email.trim() ||
      !form.child.trim() ||
      !form.subject.trim()
    );
  }, [form, loading]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setStatus("idle");

    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      return;
    }

    try {
      setLoading(true);
      setStatus("idle");

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          child: form.child,
          subject: form.subject,
          message:
            form.message.trim() ||
            "No additional message provided.",
        },
        publicKey
      );

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full rounded-2xl border border-white/20 bg-white/80 px-5 py-4 text-[#2F3A3D] placeholder:text-gray-500 outline-none transition focus:border-[#7B93B0] focus:ring-4 focus:ring-[#7B93B0]/10";

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-[2rem] border border-white/50 bg-white/70 p-8 shadow-2xl backdrop-blur-xl md:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">

        {/* Parent Name */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#2F3A3D]">
            Parent Name
          </label>

          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className={inputClasses}
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#2F3A3D]">
            Email
          </label>

          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={inputClasses}
          />
        </div>

        {/* Child */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#2F3A3D]">
            Child's Age / School Year
          </label>

          <input
            type="text"
            name="child"
            required
            value={form.child}
            onChange={handleChange}
            placeholder="e.g. 8 years old / Year 3"
            className={inputClasses}
          />
        </div>

        {/* Subject */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#2F3A3D]">
            Interested Subject
          </label>

          <select
            required
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Select a subject</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Pendidikan Moral">Pendidikan Moral</option>
            <option value="Sejarah">Sejarah</option>
          </select>
        </div>
      </div>

      {/* Optional Message */}
      <div className="mt-6">
        <label className="mb-2 block text-sm font-semibold text-[#2F3A3D]">
          Optional Message
        </label>

        <textarea
          rows={5}
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your child or any questions you'd like to ask..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      {/* Success Message */}
      {status === "success" && (
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-green-700">
          <CheckCircle2 className="h-5 w-5 shrink-0" />

          <span>
            Thank you for registering with Pravi Learning Studio! We'll be in
            touch soon.
          </span>
        </div>
      )}

      {/* Error Message */}
      {status === "error" && (
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-red-700">
          <AlertCircle className="h-5 w-5 shrink-0" />

          <span>
            Something went wrong. Please try again.
          </span>
        </div>
      )}

      {/* Register Button */}
      <button
        type="submit"
        disabled={isDisabled}
        className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-[#7B93B0] px-8 py-4 font-semibold text-white transition hover:scale-[1.02] hover:bg-[#6d86a2] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Registering...
          </>
        ) : (
          <>
            Register Now
            <ArrowRight className="h-5 w-5" />
          </>
        )}
      </button>
    </motion.form>
  );
}