import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import { Code, Github, LinkedinIcon, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/magicui/cool-mode";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function About() {
  const words = [
    "JavaScript", "TypeScript", "ReactJs", "NextJS", "Python", "Django", 
    "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Shadcn UI", "Figma", 
    "VS Code", "Git", "GitHub"
  ];

  return (
    <section className="w-full">
      <div id="about" className="min-h-screen bg-black text-white overflow-hidden py-4 sm:py-7">
        {/* Content Container */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col items-center justify-center py-8 sm:py-16 md:py-24">
            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
              {/* Image Container */}
              <div className="w-full md:w-auto flex justify-center md:justify-start mb-6 md:mb-0">
                <div className="relative w-32 h-full xs:w-36 xs:h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-full duration-300 grayscale hover:grayscale-0">
                  <Image
                    src="/me.jpg"
                    alt="Mujtaba Chandio - Profile Picture"
                    width={290}
                    height={290}
                    className="rounded-3xl object-cover shadow-xl ring-4 ring-gray-600"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center md:text-left w-full md:max-w-xl">
                <h1 
                  style={{ fontFamily: "var(--font-audiowide), sans-serif" }} 
                  className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100"
                >
                  About Me
                </h1>

                <div className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-100 mb-4 flex items-center gap-2 justify-center md:justify-start flex-wrap">
                  <Code className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 mt-5" />
                  <FlipWords words={words} className="pt-4" /> {/* Animated skillset words */}
                </div>

                <div className="text-sm xs:text-base sm:text-lg text-gray-300 leading-relaxed space-y-3 sm:space-y-4">
                  <p>
                    I am <strong className="text-green-500">Mujtaba</strong>, a passionate developer from Pakistan currently pursuing a diploma in Computer Science from Karachi University. I am also learning Generative AI through GIAIC, Governor Sindh IT initiatives, and Python programming from SMIT Saylani Mass IT Training Program.
                  </p>
                  <p>
                    I am an expert in <strong>Front-End Development, Data Science, Machine Learning (ML)</strong>, and also have experience working with <strong>Content Management Systems (CMS)</strong>.
                  </p>
                  <p>
                    Coding is not just a profession for me—its a passion. I am always eager to learn and grow in this fast-evolving field of technology.
                  </p>
                  <p>
                    My goal is to become a top-tier developer by continuously improving my skills, exploring the latest advancements in web technologies, AI, and machine learning.
                  </p>
                  <p><em>Lets connect and create something remarkable together!</em></p>
                </div>

                {/* Interactive Buttons */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 xs:gap-3 md:gap-4 mt-4 sm:mt-6">
                  <CoolMode>
                    <Button 
                      onClick={() => {
                        window.open('https://github.com/mujtabachandio?tab=repositories', '_blank')
                      }} 
                      className="border hover:bg-white hover:text-black w-20 xs:w-24 h-9 xs:h-10 text-sm xs:text-base duration-300"
                    >
                      <Github className="w-4 h-4 xs:w-5 xs:h-5" />
                    </Button>
                  </CoolMode>

                  <CoolMode>
                    <Button 
                      onClick={() => {
                        window.open('https://x.com/MujtabaChandi0?t=R4WX891XbgL1F-mNf5fYkw&s=09', '_blank')
                      }}
                      className="border hover:bg-white hover:text-black w-20 xs:w-24 h-9 xs:h-10 text-sm xs:text-base duration-300"
                    >
                      <Twitter className="w-4 h-4 xs:w-5 xs:h-5" />
                    </Button>
                  </CoolMode>

                  <CoolMode>
                    <Button
                      onClick={() => {
                        window.open('https://www.linkedin.com/in/mujtaba-chandio-dev/', '_blank')
                      }}
                      className="border hover:bg-white hover:text-black w-20 xs:w-24 h-9 xs:h-10 text-sm xs:text-base duration-300"
                    >
                      <LinkedinIcon className="w-4 h-4 xs:w-5 xs:h-5" />
                    </Button>
                  </CoolMode>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <div className="bg-black text-white h-32 xs:h-40 sm:h-48 md:h-64 lg:h-80 relative flex w-full flex-col items-center justify-center overflow-hidden">
        <VelocityScroll>
          <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Software Developer</span>
        </VelocityScroll>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
}