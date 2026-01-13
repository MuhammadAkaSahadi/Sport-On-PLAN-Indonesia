import Image from "next/image";
import Button from "../ui/button";
import { FiFastForward } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="hero-section" className="container mx-auto h-screen flex">
      <div className="relative self-center">
        <Image
          src="/images/basketball.png"
          alt="image sporrton"
          width={432}
          height={423}
          className="grayscale absolute left-0 -top-20"
        />
        <div className="relative ml-40 w-full">
          <div className="inline-block bg-primary/10 rounded-full py-[6px] px-[16px] text-primary italic">Friday Sale, 50%</div>
          <h1
            className="font-extrabold italic sm:text-[56px] 
            lg:text-[80px] 
            xl:text-[95px] bg-linear-to-b leading-tight from-black to-[#979797] bg-clip-text text-transparent"
          >
            WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR
          </h1>
          <p className="w-1/2 mt-10 sm:text-[14px] xl:text-[16px] leading-loose">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do. Premium fabrics. Unmatched comfort.
            Limitless motion.
          </p>
          <div className="flex gap-5 mt-14">
            <Button>
              Explore More <FiFastForward />
            </Button>
            <Button variant="ghost">
              Watch Video{" "}
              <Image
                src="/images/icon-play-video.svg"
                alt="icon playvideo"
                width={29}
                height={29}
              />
            </Button>
          </div>
        </div>
        <Image
          src="/images/img-hero.png"
          alt="icon sporton hero"
          width={700}
          height={950}
          className="absolute -right-10 top-1/2 -translate-y-1/2"
        />
      </div>
      <Image
        src="/images/ellipse.png"
        alt="icon sporton hero"
        width={420}
        height={420}
        className="absolute -right-50 top-1/2 -translate-y-1/2"
      />
    </section>
  );
}
