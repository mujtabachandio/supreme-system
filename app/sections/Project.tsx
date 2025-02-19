'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "Django Website",
    description:
      "A Django-based website featuring 3D integration to showcase advanced robotic solutions. Users can interact with 3D models, explore real-time simulations, and learn about the cutting-edge technology driving automation in industries.",
    githubLink: "https://github.com/mujtabachandio/Django_Website",
    liveLink: "https://github.com/mujtabachandio/Django_Website",
    image: "/dj.png",
    tags: ["Django", "Html", "Tailwind CSS", "Javascript"],
  },
  {
    id: 2,
    title: "Resume Builder",
    description:
      "An intuitive web app that helps users create, customize, and download professional resumes. Offering multiple templates and simple editing tools, it allows users to quickly craft personalized resumes that make a strong impression on employers.",
    githubLink: "https://github.com/mujtabachandio/Resume-website",
    liveLink: "https://resume-website-gules.vercel.app/",
    image: "/resume.png",
    tags: ["Html", "CSS", "Javascript", "Typescript", "Js library"],
  },
  {
    id: 3,
    title: "Asus Gaming Website",
    description:
      "A sleek e-commerce platform designed for gaming enthusiasts, featuring a variety of Asus gaming products. Users can browse and purchase high-performance laptops, accessories, and gear, with smooth navigation and secure checkout for a seamless online shopping experience.",
    githubLink: "https://github.com/mujtabachandio/asus-gaming-website",
    liveLink: "https://asus-website.vercel.app/",
    image: "/Asus.png",
    tags: ["Html", "CSS", "Javascript", "Typescript", "Js library"],
  },
  {
    id: 4,
    title: "Apple Products E-Commerce Website",
    description:
      "A modern online store offering a range of Apple products, from iPhones to MacBooks and accessories. The website features a sleek design, smooth product browsing, secure checkout, and easy navigation, providing an effortless shopping experience for Apple fans.",
    githubLink: "https://github.com/mujtabachandio/Airpods-website",
    liveLink: "https://airpods-website.vercel.app/",
    image: "/Airpods.png",
    tags: ["Next.js", "TypeScript", "AI/ML"],
  },
  {
    id: 5,
    title: "Catch the Ball Game",
    description:
      "A fun, interactive game built in Python where players control a character to catch falling balls and score points. With simple graphics and smooth gameplay, the game offers an engaging experience while showcasing Python's capabilities for creating 2D games.",
    githubLink: "https://github.com/mujtabachandio/Catch-the-Ball-python-",
    liveLink: "https://github.com/mujtabachandio/Catch-the-Ball-python-",
    image: "/pygame.jpg",
    tags: ["Python", "PyGame", "GUI"],
  },
  {
    id: 6,
    title: "JARVIS AI Assistant Program",
    description:
      "A personal AI assistant inspired by the popular JARVIS from Iron Man, built using Python. The program can perform tasks like answering questions, setting reminders, controlling system functions, and more, offering a hands-free, voice-activated interface for everyday use.",
    githubLink: "https://github.com/mujtabachandio/JARVIS-Ai-assistant-program",
    liveLink: "https://github.com/mujtabachandio/JARVIS-Ai-assistant-program",
    image: "/jarvis.png",
    tags: ["Next.js", "TypeScript", "AI/ML"],
  },
];

export default function ProjectCard() {
  return (
    <section id="project" className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 style={{ fontFamily: "var(--font-audiowide), sans-serif" }} className="text-5xl md:text-6xl font-bold tracking-tight">My Projects</h1>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <CardContainer key={project.id} className="inter-var">
            <CardBody className="group relative bg-black hover:shadow-2xl hover:shadow-emerald-500/10 border border-white/20 w-full h-auto rounded-xl p-6">
              {/* Title */}
              <CardItem translateZ="50" className="text-lg md:text-xl font-bold">
                {project.title}
              </CardItem>

              {/* Description and Tags */}
              <CardItem as="p" translateZ="60" className="text-sm mt-2 text-neutral-300">
                {project.description}
              </CardItem>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Image */}
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={project.image}
                  height={600}
                  width={600}
                  className="h-40 sm:h-48 md:h-60 w-full object-cover rounded-xl group-hover:shadow-xl"
                  alt={`${project.title} Preview`}
                />
              </CardItem>

              {/* Links */}
              <div className="flex justify-between items-center mt-6">
                <Link href={project.githubLink} target="_blank">
                  <span className="px-3 sm:px-4 py-2 rounded-xl text-xs font-bold bg-white text-black hover:bg-gray-200 transition">
                    Github →
                  </span>
                </Link>
                <Link href={project.liveLink} target="_blank">
                  <span className="px-3 sm:px-4 py-2 rounded-xl bg-white text-black text-xs font-bold hover:bg-gray-200 transition">
                    Live Demo →
                  </span>
                </Link>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
