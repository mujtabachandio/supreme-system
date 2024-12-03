"use client"
import { ShootingStars } from "@/components/ui/shooting-stars";  
import { StarsBackground } from "@/components/ui/stars-background";
import { motion, MotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, ArrowDown } from "lucide-react"; 
import { useRef } from "react"; 
import Image from "next/image";

// Move interfaces to separate types file
interface Project {
  id: number;
  title: string;
  description: string;
  githubLink: string;
  liveLink: string;
  image: string;
  tags: string[];
}

interface Testimonial {
  id: number;
  name: string;
  content: string;
  image: string;
  rating: number;
}

// Move data to separate data file
const projects: Project[] = [
  {
    id: 1,
    title: "Django Website",
    description: "A Django-based website featuring 3D integration to showcase advanced robotic solutions. Users can interact with 3D models, explore real-time simulations, and learn about the cutting-edge technology driving automation in industries.",
    githubLink: "https://github.com/mujtabachandio/Django_Website",
    liveLink: "https://github.com/mujtabachandio/Django_Website",
    image: "/dj.png",
    tags: ["Django","Html", "Tailwind CSS", "Javascript",],
  },
  {
    id: 2,
    title: "Resume Builder",
    description: "An intuitive web app that helps users create, customize, and download professional resumes. Offering multiple templates and simple editing tools, it allows users to quickly craft personalized resumes that make a strong impression on employers.",
    githubLink: "https://github.com/mujtabachandio/Resume-website",
    liveLink: "https://resume-website-gules.vercel.app/",
    image: "/resume.png",
    tags: ["Html", "CSS", "Javascript","Typescript","Js library"],
  },
  {
    id: 3,
    title: "Asus Gaming Website",
    description: "A sleek e-commerce platform designed for gaming enthusiasts, featuring a variety of Asus gaming products. Users can browse and purchase high-performance laptops, accessories, and gear, with smooth navigation and secure checkout for a seamless online shopping experience.",
    githubLink: "https://github.com/mujtabachandio/asus-gaming-website",
    liveLink: "https://asus-website.vercel.app/",
    image: "/Asus.png",
    tags: ["Html", "CSS", "Javascript","Typescript","Js library"],
  },
  {
    id: 4,
    title: "Apple Products E-Commerce Website",
    description: "A modern online store offering a range of Apple products, from iPhones to MacBooks and accessories. The website features a sleek design, smooth product browsing, secure checkout, and easy navigation, providing an effortless shopping experience for Apple fans.",
    githubLink: "https://github.com/mujtabachandio/Airpods-website",
    liveLink: "https://airpods-website.vercel.app/",
    image: "/Airpods.png",
    tags: ["Next.js", "TypeScript", "AI/ML"],
  },
  {
    id: 5,
    title: "Catch the Ball Game",
    description: "A fun, interactive game built in Python where players control a character to catch falling balls and score points. With simple graphics and smooth gameplay, the game offers an engaging experience while showcasing Python's capabilities for creating 2D games.",
    githubLink: "https://github.com/mujtabachandio/Catch-the-Ball-python-",
    liveLink: "https://github.com/mujtabachandio/Catch-the-Ball-python-",
    image: "/pygame.jpg",
    tags: ["Python", "PyGame", "GUI"],
  },
  {
    id: 6,
    title: "JARVIS AI Assistant Program",
    description: "A personal AI assistant inspired by the popular JARVIS from Iron Man, built using Python. The program can perform tasks like answering questions, setting reminders, controlling system functions, and more, offering a hands-free, voice-activated interface for everyday use.",
    githubLink: "https://github.com/mujtabachandio/JARVIS-Ai-assistant-program",
    liveLink: "https://github.com/mujtabachandio/JARVIS-Ai-assistant-program",
    image: "/jarvis.png",
    tags: ["Next.js", "TypeScript", "AI/ML"],
  },
  // Add other projects here
];

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

// Separate components
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative"
    >
      <motion.div 
        className="relative aspect-[4/3] overflow-hidden bg-gray-900 rounded-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          width = "900" 
          height=  "900"
          src={project.image} 
          alt={project.title}
          className="object-fit w-full h-full brightness-75 group-hover:brightness-50 transition-all duration-500"
        />
        <ProjectLinks project={project} />
      </motion.div>
      <ProjectInfo project={project} />
    </motion.div>
  );
};

const ProjectLinks = ({ project }: { project: Project }) => (
  <motion.div 
    className="absolute inset-0 flex items-center justify-center gap-6"
    initial={{ opacity: 0 }}
    whileHover={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    {[{ href: project.githubLink, Icon: Github }, { href: project.liveLink, Icon: ExternalLink }]
      .map(({ href, Icon }, index) => (
        <motion.a 
          key={index}
          href={href}
          className="p-4 bg-white rounded-full hover:bg-gray-200 transition-colors"
          whileHover={{ scale: 1.1 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="w-6 h-6 text-black" />
        </motion.a>
      ))}
  </motion.div>
);

const ProjectInfo = ({ project }: { project: Project }) => (
  <div className="mt-6 space-y-4">
    <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
    <p className="text-gray-400 line-clamp-2">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.tags.map((tag, index) => (
        <span 
          key={index}
          className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-colors"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

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
        width = {"900"}
        height=  {"900"}
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

const ProjectPage = () => {
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
                Projects
              </span>
            </h1>
          </motion.div>

          <motion.p 
            variants={slideUpVariants}
            className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto font-light"
          >
            Crafting digital experiences through code and design
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
              <p className="text-sm text-gray-500 uppercase tracking-widest">Scroll to explore</p>
              <ArrowDown className="w-6 h-6 text-gray-500" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <section className="py-32 px-4 sm:px-8 bg-black relative">
        <motion.div
          style={{ scaleY: springScroll }}
          className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white to-gray-900 origin-top"
        />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-4 sm:px-8 bg-gradient-to-b from-black to-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            className="text-5xl sm:text-6xl font-bold text-center mb-24 tracking-tight"
            variants={slideUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Client Testimonials
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectPage;
