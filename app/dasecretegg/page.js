"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";

function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="min-h-screen max-h-full bg-pink-200 text-white pt-5 px-2">
      <Link href='/home' className="flex flex-row items-center text-[20px]">
        <IoMdArrowRoundBack /> Back
      </Link>
      <div className="flex flex-col items-center">
        <span
          className="text-[75px] text-center font-bold sm:text-[50px] xs:text-[40px]"
          data-aos="zoom-in"
        >
          You Found It
        </span>
        <span className="text-[30px] mt-8 mb-8 text-center sm:text-[25px] xs:text-[20px]" data-aos="zoom-in" data-aos-delay="1000">
          Pookie has won her 50$ Sephora Gift Card, or whatever she wants meow.
        </span>
        <img src='./s.png' alt="Sephora" className="h-[400px] xs:h-[200px] w-auto rounded-md" data-aos="zoom-in" data-aos-delay="1000"/>
      </div>
    </div>
  );
}

export default Page;
