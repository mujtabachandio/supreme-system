"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

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

export function ProjectCard() {
  return (
    <>
      {/* Heading Section */}
      <div id="Project" className="relative flex justify-center items-center mt-16 ">
        <h1 className="absolute mt-28  text-5xl font-bold tracking-tighter  text-center">
          My Projects
        </h1>
      </div>

      {/* Projects Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {projects.map((project, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              {/* Title */}
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                {project.title}
              </CardItem>

              {/* Description and Tags */}
              <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                {project.description}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardItem>

              {/* Image */}
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={project.image}
                  height={1000}
                  width={1000}
                  className="h-60 w-full rounded-xl group-hover/card:shadow-xl"
                  alt={project.title}
                />
              </CardItem>

              {/* Links */}
              <div className="flex justify-between items-center mt-6">
                <Link href={project.githubLink} target="_blank" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                  Github →
                </Link>
                <Link href={project.liveLink} target="_blank" className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                  Live Demo →
                </Link>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
}
