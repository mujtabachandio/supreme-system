"use client"
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { motion, MotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ExternalLink, ArrowDown, Link, ArrowRight, Code, Github } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import { Cover } from "@/components/ui/cover";
import { FlipWords } from "@/components/ui/flip-words";
import { ProjectCard } from "./components/project";
import SkillsPage from "./components/Skills";
import Footer from "./components/Footer";

interface Testimonial {
  id: number;
  name: string;
  content: string;
  image: string;
  rating: number;
}


const words = ["JavaScript", "TypeScript", "ReactJs", "NextJS", "Python", "Django", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Shadcn UI", "Figma", "VS Code", "Git", "GitHub"];

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "ALi Muhammad",
    content: `I was a bit unsure at first, but working with Mujtaba Chandio was a game-changer. The process was smooth and efficient, and I noticed a difference right away. The attention to detail and personalized service really stood out. I’m beyond happy with the results and would definitely recommend him.`,
    image: "/a1.png",
    rating: 5
  },
  {
    id: 2,
    name: "Faisal Aziz",
    content: "I’ve been working with Mujtaba for a couple of weeks now, and I’m really impressed. His service made my day-to-day so much easier, and he was always there to help whenever I had a question. The quality is top-notch, and I’m already seeing great results. Definitely worth it.",
    image: "/a2.png",
    rating: 4
  },
  {
    id: 3,
    name: "Usman Masood",
    content: "I wasn’t expecting much, but Mujtaba really exceeded my expectations. The service is straightforward and easy to use, and it’s clear he cares about his clients. I felt supported every step of the way, and I’ll definitely keep coming back.",
    image: "/a3.png",
    rating: 3
  },
  {
    id: 4,
    name: "David K.",
    content: "I’m so glad I chose to work with Mujtaba. The whole experience was seamless, and I could tell from the start that he genuinely cares about delivering great service. I felt supported throughout the process, and the results were exactly what I was hoping for. Highly recommend!",
    image: "/a4.png",
    rating: 5
  },
];

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.2 }
  }
};

const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

// Custom hooks
const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 50 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
    className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800"
  >
    <TestimonialHeader testimonial={testimonial} />
    <p className="text-gray-300 italic leading-relaxed text-lg mb-6">
      {testimonial.content}
    </p>
    <Rating rating={testimonial.rating} />
  </motion.div>
);

const TestimonialHeader = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="flex items-center gap-4 mb-6">
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-500 rounded-full blur-lg opacity-30" />
      <Image
        width={"900"}
        height={"900"}
        src={testimonial.image}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full object-cover relative z-10"
      />
    </motion.div>
    <div>
      <h4 className="font-bold text-lg">{testimonial.name}</h4>
    </div>
  </div>
);

const Rating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(rating)].map((_, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.1 }}
        className="text-white"
      >
        ★
      </motion.span>
    ))}
  </div>
);

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useParallax(scrollYProgress, 300);
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="bg-black text-white">
      <motion.section
        className="h-screen flex items-center justify-center relative overflow-hidden pt-[50rem] sm:pt-32 md:pt-[50rem]"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-60" />
        <ShootingStars />
        <StarsBackground />
        <motion.div className="relative z-10 text-center px-4 sm:px-8" style={{ y }}>
          <motion.div variants={slideUpVariants} className="overflow-hidden">
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold mb-8 tracking-tighter">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600">
                Mujtaba Chandio
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={slideUpVariants}
            className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto font-light"
          >
            I DESIGN WHAT YOU DESIRE
          </motion.p>

          <motion.div
            className="mt-12"
            variants={fadeInVariants}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <p className="text-sm text-gray-500 uppercase tracking-widest"></p>
              <ArrowDown className="w-6 h-6 text-gray-500" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* about scetion */}
      <section>
        <div id="About" className="h-screen bg-black text-white overflow-hidden selection:bg-gray-600/30 selection:text-gray-300 py-7">
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
                        <Cover>About Me</Cover>
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
                        A dedicated and passionate developer based in <strong className='text-green-500'>PAKISTAN</strong>. My journey in tech has been driven by a love for crafting high-quality, scalable applications that make a real-world impact. My skill set includes <strong>JavaScript, TypeScript, Python, React.js, Next.js, HTML, CSS, Tailwind CSS, Bootstrap, Gsap</strong>.
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
                            {text}
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
      </section>

      {/* projects section */}
      <section>
      <ProjectCard />
      </section>
      
      {/* skills section */}
      <section>
      <SkillsPage />
      </section>

      {/* footer section */}
      <section>
      <Footer />
      </section>

    </div>
  );
};

export default Home;
