"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Mapbox from "@/components/Mapbox";
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
          Welcome to Pookie Maps
        </span>
        <span className="text-[30px] mt-8 mb-8 text-center sm:text-[25px] xs:text-[20px]">
          Where you can see all places Pookie and Hari have been for memories :)
        </span>
        <Mapbox />
        <span className="text-[30px] mt-8 mb-8 text-center sm:text-[25px] xs:text-[20px]">
          Now when Pookie is decisive, she can just look at the map and see
          where she wants to go
        </span>
      </div>
    </div>
  );
}

export default Page;
