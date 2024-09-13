"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";

function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
    AOS.refresh();
  }, []);

  const imageFiles = Array.from({ length: 23 }, (_, i) => `${i + 1}`);

  return (
    <div className="min-h-screen max-h-full bg-pink-200 text-white pt-5 px-2">
      <Link href="/home" className="flex flex-row items-center text-[20px]">
        <IoMdArrowRoundBack /> Back
      </Link>
      <div className="flex flex-col items-center">
        <span
          className="text-[75px] text-center font-bold sm:text-[50px] xs:text-[40px]"
          data-aos="zoom-in"
        >
          Gallery of Vaishy and Hari
        </span>
        <div className="flex flex-row flex-wrap gap-10 items-center justify-center my-5">
          {imageFiles.map((imageFile, index) => (
            <BlurFade key={index} className="h-[300px] xs:h-[200px]" delay={1 + index * 0.05} inView>
              <img
                src={`./${imageFile}.jpg`}
                alt={`Image ${index + 1}`}
                className="h-full w-full rounded-md"
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
