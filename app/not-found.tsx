"use client"; // Required for client-side effects

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import FuzzyText from "@/FuzzyText/FuzzyText";

export default function NotFound() {
  const router = useRouter();
  const enableHover = true;
  const hoverIntensity = 0.5;

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/"); // Redirect to homepage after 5 seconds
    }, 5000);

    return () => clearTimeout(timeout); // Cleanup function
  }, [router]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white space-y-4">
      <FuzzyText baseIntensity={0.2} hoverIntensity={hoverIntensity} enableHover={enableHover}>
        404
      </FuzzyText>
      <p className="text-6xl text-gray-400">Page Not Found</p>
      <p className="text-sm text-gray-500">Redirecting to Home</p>
    </div>
  );
}
