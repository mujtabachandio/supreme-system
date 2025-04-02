"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Features from "./sections//Features"
import About from "./sections/About";
import  Skill  from "./sections/Skill";
import Project  from "./sections/Project";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  const words = `Transforming ideas into reality through innovative digital solutions and seamless experiences.
`;

  return (
    <>
    <AuroraBackground>
      <motion.div
      id="home"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="relative flex flex-col items-center justify-center min-h-screen text-center px-6"
      >
        <h1 style={{ fontFamily: "var(--font-audiowide), sans-serif" }} className=" text-5xl md:text-8xl text-white leading-tight drop-shadow-lg">
          Hi, I am Mujtaba
        </h1>
        <div className="text-xl md:text-3xl text-neutral-300 py-6 max-w-3xl leading-relaxed">
        <TextGenerateEffect words={words} />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        >
          <ShimmerButton onClick={()=>{
            window.open("https://drive.google.com/file/d/1VDT3r4dQvqtTo0MX9EWtbCaHvefX4vr2/view?usp=sharing");
          }} className="shadow-2xl">
     <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
        Download Resume
      </span>
    </ShimmerButton>
        </motion.div>
      </motion.div>
    </AuroraBackground>


    <section className="">
      <Features/>
    </section>
    {/* about section */}
    <section className="">
      <About/>
    </section>
    {/* skill section */}
    <section className="">
      <Skill/>
    </section>
    <section className="">
      <Project/>
    </section>
    <section className="">
      <Contact/>
    </section>
    <section className="">
      <Footer/>
    </section>
    </>
  );
}
