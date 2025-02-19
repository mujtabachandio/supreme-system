"use client";
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import  AnimatedBeam  from '../components/AnimatedBeam'
import { useRouter } from "next/navigation";
import React from 'react'

const Contact = () => {
const router = useRouter();
  return (
    <section id='contact' className="py-24 bg-black relative">
    <h1 style={{ fontFamily: "var(--font-audiowide), sans-serif" }} className="text-white flex justify-center items-center text-5xl font-bold mb-12 tracking-tighter">CONNECT WITH ME</h1>
    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                    <h2 className="text-gray-300 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Building Stronger Communities through Collaboration and Empowerment</h2>
                    <p className="text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center">By working together and bringing in different ideas, we create an environment where everyone can grow and succeed. Just like in coding, when different skills come together, we build something amazing—whether its a cool project, a smooth user experience, or a strong community. This way, we not only improve ourselves but also make the tech world better for everyone. Let’s connect and build something great!.</p>
                </div>
                <ShimmerButton onClick={() => router.push("/contact")} className="shadow-2xl">
  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
    LETS CONTACT
  </span>
</ShimmerButton>;
            </div>
            <AnimatedBeam /> 
            </div>
    </div>
</section>
                                        
  )
}

export default Contact
