import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
  return (
    <>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold text-center px-4 sm:px-8 lg:px-12 pointer-events-none">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Hey there, I am <br />
            <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl">
              Mujtaba Chandio
            </span>
          </p>
        </div>
      </BackgroundGradientAnimation>
    </>
  );
}