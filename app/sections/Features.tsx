"use client";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Globe } from "@/components/magicui/globe";
import { IconCloud } from "@/components/magicui/icon-cloud";
import React from "react";
import { Meteors } from "@/components/magicui/meteors";
import { Marquee } from "@/components/magicui/marquee";


const Features = () => {
  const reviews = [
    {
      name: "Ali Khan",
      username: "@alikhan",
      body: "Mujtaba Bhai ka kaam bohot behtareen hai! Unhon ne meri website React aur Next.js mein banai, aur performance lajawab hai. Har cheez smooth chal rahi hai. Highly recommended!",
    },
    {
      name: "Fatima Ahmed",
      username: "@fatimaahmed",
      body: "Mujtaba sahab ka ML aur Python programming ka expertise kamaal ka hai! Django use karke ek efficient aur scalable system develop kiya jo meri expectations se zyada behtar hai. Shukriya!",
    },
    {
      name: "Usman Raza",
      username: "@usmanraza",
      body: "Web development aur AI solutions ke liye Mujtaba bhai best hain! Timely delivery aur professional approach ke saath kaam karte hain. Bohot acha experience raha!",
    },
    {
      name: "Zainab Hussain",
      username: "@zainabhussain",
      body: "Mujtaba bhai ne mere startup ke liye Django aur ML-based solution develop kiya. Accuracy aur performance dono hi outstanding hain. Inka kaam dekh ke dil khush ho gaya!",
    },
  ];

  const slugs = [
    "typescript", "javascript", "dart", "java", "react", "flutter", "android",
    "html5", "css3", "nodedotjs", "express", "nextdotjs", "prisma",
    "amazonaws", "postgresql", "firebase", "nginx", "vercel", "testinglibrary",
    "jest", "cypress", "docker", "git", "jira", "github", "gitlab",
    "visualstudiocode", "androidstudio", "sonarqube", "figma",
  ];

  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);

  const features = [
    {
      name: "",
      description: "",
      className: "col-span-2 md:col-span-1 row-span-1",
      background: (
        <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden">
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            {reviews.map((review) => (
              <figure key={review.username} className="w-full rounded-xl border p-4 border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]">
                <figcaption className="text-sm font-medium text-white">{review.name}</figcaption>
                <p className="text-xs font-medium text-white">{review.username}</p>
                <blockquote className="mt-2 text-sm text-gray-500">{review.body}</blockquote>
              </figure>
            ))}
          </Marquee>
        </div>
      ),
    },
    {
      name: "Time Zone Flexibility",
      description: "I'm very flexible with time zone communications.",
      className: "col-span-1 row-span-2",
      background: <Globe />,
    },
    {
      name: "Tech Stack",
      description: "Passionate about cutting-edge development technologies.",
      className: "col-span-1 row-span-2",
      background: (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <IconCloud images={images} />
        </div>
      ),
    },
    {
      name: "",
      description: "",
      className: "col-span-1 row-span-1",
      background: (
        <div className="relative">
          <Meteors number={30} />
          <span className="absolute flex mt-28 pl-16 text-3xl justify-center items-center text-white">Fast Development</span>
        </div>
      ),
    },
  ];

  return (
    <main id="features" className="flex flex-col items-center justify-center min-h-screen p-8 bg-black">
      <h1 style={{ fontFamily: "var(--font-audiowide), sans-serif" }} className="text-5xl font-bold text-white mb-14">
        why work with me 
      </h1>
      <BentoGrid className="w-full max-w-6xl gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[15rem]">
        {features.map((feature, idx) => (
          <BentoCard Icon={"symbol"} href={""} cta={""} key={idx} {...feature} />
        ))}
      </BentoGrid>
    </main>
  );
};

export default Features;
