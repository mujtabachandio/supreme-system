"use client";
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import AnimatedBeam from '../components/AnimatedBeam'
import { useRouter } from "next/navigation";
import React from 'react'

const Contact = () => {
  const router = useRouter();
  return (
    <section id='contact' className="py-16 md:py-24 bg-black relative px-4 sm:px-6 lg:px-8">
      <h1 
        style={{ fontFamily: "var(--font-audiowide), sans-serif" }}
        className="text-white flex justify-center items-center text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 tracking-tighter text-center"
      >
        CONNECT WITH ME
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
          <h2 className="text-gray-300 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Building Stronger Communities through Collaboration and Empowerment
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            By working together and bringing in different ideas, we create an environment where everyone can grow and succeed. Just like in coding, when different skills come together, we build something amazing—whether it’s a cool project, a smooth user experience, or a strong community. This way, we not only improve ourselves but also make the tech world better for everyone. Let’s connect and build something great!
          </p>
          <ShimmerButton onClick={() => router.push("/Contact")} className="shadow-2xl px-6 py-3 text-sm sm:text-base lg:text-lg">
            <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white">
              LET'S CONTACT
            </span>
          </ShimmerButton>
        </div>
        <div className="flex justify-center lg:justify-end">
          <AnimatedBeam className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
