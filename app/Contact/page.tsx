"use client";
import React, { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare } from "lucide-react";
import { BackgroundLines } from "@/components/ui/background-lines";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_r6o40cd", // Your EmailJS service ID
          "template_xn21008", // Your EmailJS template ID
          form.current,       // The form reference
          "eUAN5KikU12lOCmkA" // Your public key
        )
        .then(
          () => {
            setIsSubmitted(true);
            setFormState({ name: "", email: "", message: "" });
            setTimeout(() => setIsSubmitted(false), 1000); // Hide thank you message after 2 seconds
          },
          (error) => {
            console.error("FAILED...", error);
            setError("Failed to send message. Please try again later.");
          }
        );
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <BackgroundLines className="absolute bg-black">
        <h1>.</h1>
      </BackgroundLines>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={formVariants}
        className="relative z-20 w-full max-w-md px-8"
      >
        <h1 className="text-4xl font-bold text-white mb-8 text-center pt-[5rem]">
          Get in Touch
        </h1>

        {isSubmitted ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center"
          >
            <h2 className="text-white text-xl mb-2">Thank you!</h2>
            <p className="text-gray-300">We will get back to you soon.</p>
          </motion.div>
        ) : (
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={formVariants} className="relative">
              <motion.input
                whileFocus="focus"
                variants={inputVariants}
                type="text"
                required
                name="recipient_name" // EmailJS placeholder for name
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/40 backdrop-blur-lg transition-all"
                placeholder="Your Name"
              />
              <User className="absolute right-3 top-3 text-white/40 h-5 w-5" />
            </motion.div>

            <motion.div variants={formVariants} className="relative">
              <motion.input
                whileFocus="focus"
                variants={inputVariants}
                type="email"
                required
                name="sender_name" // EmailJS placeholder for email
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/40 backdrop-blur-lg transition-all"
                placeholder="Your Email"
              />
              <Mail className="absolute right-3 top-3 text-white/40 h-5 w-5" />
            </motion.div>

            <motion.div variants={formVariants} className="relative">
              <motion.textarea
                whileFocus="focus"
                variants={inputVariants}
                required
                name="message" // EmailJS placeholder for message
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full h-32 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/40 backdrop-blur-lg transition-all resize-none"
                placeholder="Your Message"
              />
              <MessageSquare className="absolute right-3 top-3 text-white/40 h-5 w-5" />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-white text-black font-medium py-3 px-4 rounded-lg hover:bg-black hover:text-white hover:border-8 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="h-4 w-4" />
            </motion.button>
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default ContactForm;
