"use client";
import { Code, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Cover } from '@/components/ui/cover';
import Link from 'next/link';
import Image from 'next/image'; 
import { FlipWords } from '@/components/ui/flip-words';

const AboutPage = () => {
  const words = ["JavaScript", "TypeScript", "ReactJs", "NextJS", "Python", "Django", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Shadcn UI", "Figma", "VS Code", "Git", "GitHub"];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden selection:bg-gray-600/30 selection:text-gray-300 py-7">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-gray-800/20 to-transparent animate-matrix" />
      </div>
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.9))]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen relative flex flex-col items-center justify-center px-4 py-16 md:py-24">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
            {/* Image Container */}
            <div className="relative flex-shrink-0">
              <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 duration-300 grayscale hover:grayscale-0">
                <Image
                  src="/me.jpg" // Your image path
                  alt="Profile"
                  width={256} // Adjust width as needed
                  height={256} // Adjust height as needed
                  className="rounded-3xl object-cover shadow-xl ring-4 ring-gray-600"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left md:max-w-xl">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-gray-100">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-300">
                    <Cover>Mujtaba Chandio</Cover>
                  </span>
                </h1>
              </div>

              <div className="relative">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-4 flex items-center gap-2 justify-center md:justify-start">
                  <Code className="w-6 h-6 sm:w-7 sm:h-7" />
                  <FlipWords words={words} /> {/* Using the FlipWords component */}
                </p>

                <div className="text-gray-300 leading-relaxed mb-6 md:mb-8 relative space-y-4 md:space-y-5">
                  <p className="relative">
                    <span className="absolute -left-3 top-0 w-1 h-full bg-gray-500/30 rounded-full"></span>
                    A dedicated and passionate developer based in <strong className='text-green-500'>PAKISTAN</strong>. My journey in tech has been driven by a love for crafting high-quality, scalable applications that make a real-world impact. My skill set includes <strong>JavaScript, TypeScript, Python, React.js, Next.js, HTML, and CSS</strong>.
                  </p>
                  
                  <p>
                    For me, coding is more than just a job—it’s a craft and a continual learning process. I’m also fascinated by the potential of <strong>artificial intelligence</strong> and the ways it’s changing the landscape of technology.
                  </p>
                  
                  <p>
                    My goal is to grow into one of the top developers in the industry by pushing my skills to new heights and embracing the latest advancements in web technology.
                  </p>
                  
                  <p>
                    <em>Let’s connect and create something remarkable together!</em>
                  </p>
                </div>

                {/* Interactive Buttons */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                  {['Resume', 'GitHub', 'LinkedIn'].map((text, index) => (
                    <motion.button
                      key={text}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="group relative px-5 py-2 sm:px-6 sm:py-2 overflow-hidden rounded-full bg-gray-700 hover:bg-gray-600 text-gray-300"
                    >
                      <div className="absolute inset-0 bg-gray-600/20 transition-colors group-hover:bg-gray-600/30" />
                      <div className="relative flex items-center gap-2">
                        {text === 'Resume' && <Mail className="w-4 h-4" />}
                        {text === 'GitHub' && <Github className="w-4 h-4" />}
                        {text === 'LinkedIn' && <Linkedin className="w-4 h-4" />}
                        <Link
                          href={text === 'Resume' ? 'https://drive.google.com/file/d/1IVBYK0sz-LllSftZAhCjDT1a4kyQnbPG/view?usp=sharing' : text === 'GitHub' ? 'https://github.com/mujtabachandio' : 'https://www.linkedin.com/in/mujtaba-chandio-dev/'}
                          className="text-gray-300"
                        >
                          {text}
                        </Link>
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
