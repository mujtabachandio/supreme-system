"use client"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { useEffect, useState } from "react";

const words = [
  {
    text: "Mujtaba ",
    className: "text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl dark:text-blue-500", // responsive text sizes
  },
  {
    text: "Chandio!",
    className: "text-violet-500 text-4xl sm:text-5xl md:text-6xl lg:text-8xl dark:text-violet-500",
  },
];

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <BackgroundBeamsWithCollision>
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold text-center px-4 sm:px-8 lg:px-12 pointer-events-none">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Hey there, I am <br />
          </p>
          {/* Make text size responsive here */}
          {isClient && (
            <TypewriterEffectSmooth
              words={words}
            />
          )}
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
}
