"use client";
import {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';

function page() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
    AOS.refresh();
  } , []);

  const handleChange = (e) => {
    if (e.target.value === "Meow I love you i want attention") {
      document.getElementById('enter_button').classList.remove('hidden');
    }
    else {
      document.getElementById('enter_button').classList.add('hidden');
    }
  }

  return (
    <div className="min-h-screen max-h-full bg-pink-200 text-white flex flex-col items-center justify-center px-2">
      <span className="text-[75px] text-center font-bold sm:text-[50px] xs:text-[40px]" data-aos="zoom-in">Meow?... Welcome to Pookie&apos;s Site</span>
      <span className="text-[45px] mt-20 text-center sm:text-[35px] xs:text-[25px]">But first... What&apos;s the password?</span>
      <input type="text" className="bg-pink-200 border-2 text-[25px] text-black border-white rounded-md p-2 mt-10 focus:bg-white" onChange={handleChange} />
      <span className='text-[25px] mt-10' data-aos="zoom-out" data-aos-delay="1000">Here&apos;s a Hint.. </span>
      <span className='text-[25px]' data-aos="zoom-out" data-aos-delay="2000">Apr 3, Line 1</span>
      <Link id="enter_button" href='/home' className="bg-white border-2 border-white rounded-md p-2 mt-10 hidden text-[25px] text-pink-200">Enter Meow</Link>
    </div>
  );
}

export default page;