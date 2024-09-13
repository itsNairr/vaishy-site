"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Mapbox from "@/components/Mapbox";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import MessageBox from "@/components/MessageBox";
import notes from "@/data/notes.json";

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
          Vaishy&apos;s Notes
        </span>
        <span className="text-[30px] mt-8 text-center sm:text-[25px] xs:text-[20px]">
          For whenever she feels a specific way
        </span>
        <div className="flex flex-col flex-wrap mt-10">
        {notes.map((note, index) => (
          <div key={index} data-aos={index % 2 == 0 ? `fade-right` : `fade-left`} >
        <MessageBox title={note.title} message={note.content}/>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
