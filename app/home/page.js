"use client";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import animation from "../../lotties/downarrow.json";
import Lottie from "react-lottie";
import "./home.css";
import Link from "next/link";

function page() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const targetDate = new Date("09/13/2022");
    const now = new Date();

    // Update the count every second
    const interval = setInterval(() => {
      const updatedTimeRemaining = new Date().getTime() - targetDate.getTime();
      setCount(updatedTimeRemaining);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const years = Math.floor(count / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(
    (count % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  const days = Math.floor(
    (count % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  const hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((count % (1000 * 60)) / 1000);

  const handleScroll = () => {
    const element = document.getElementById("navscreen");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="min-h-screen max-h-full bg-pink-200 text-white flex flex-col items-center pt-5 px-2">
        <span
          className="text-[75px] text-center font-bold sm:text-[50px] xs:text-[40px]"
          data-aos="zoom-in"
        >
          Welcome Vaishy!
        </span>
        <span className="text-[30px] mt-10 text-center sm:text-[25px] xs:text-[20px]">
          <span>Did you know?</span> As of right now we have been meowried for
        </span>
        <span
          className="text-[30px] mt-5 mb-10 xs:mb-5 text-center sm:text-[25px] xs:text-[20px] bg-pink-300 p-5 rounded-full"
          data-aos="flip-up"
          data-aos-delay="2000"
        >
          {years} years, {months} months, {days} days, {hours} hours, {minutes}{" "}
          minutes, and {seconds} seconds
        </span>
        <img
          src="./pookiemain.jpg"
          alt="Me and Pookie"
          className="heart w-[400px] h-[400px] xs:w-[250px] xs:h-[250px]"
        />
        <div id="container">
          <div className="scroll">
            <div className="item">Meow</div>
            <div className="item">You're so pretty</div>
            <div className="item">I love you</div>
            <div className="item">Mommy</div>
            <div className="item">I love you</div>
            <div className="item">Meow</div>
            <div className="item">You're so pretty</div>
            <div className="item">Meowry me</div>
            <div className="item">You're stinky</div>
            <div className="item">Meow</div>
            <div className="item">Meow</div>
            <div className="item">You're so pretty</div>
            <div className="item">I love you</div>
            <div className="item">Mommy</div>
            <div className="item">I love you</div>
            <div className="item">Meow</div>
            <div className="item">You're so pretty</div>
            <div className="item">Meowry me</div>
            <div className="item">You're stinky</div>
            <div className="item">Meow</div>
            <div className="item">Meow</div>

            {/* EASTER EGG */}
            <div className="item">Hehe</div> 

            <div className="item">You're so pretty</div>
            <div className="item">I love you</div>
            <div className="item">Mommy</div>
            <div className="item">I love you</div>
            <div className="item">Meow</div>
            <div className="item">You're so pretty</div>
            <div className="item">Meowry me</div>
            <div className="item">You're stinky</div>
            <div className="item">Meow</div>
            <div className="item">You're stinky</div>
            <div className="item">Meow</div>
            <div className="item">Meow</div>
            <div className="item">You're so pretty</div>
          </div>
          <div className="fade"></div>
        </div>
        <div
          className="mt-5 xs:absolute xs:bottom-[5%] xs:mt-0 "
          onClick={handleScroll}
        >
          <Lottie
            options={defaultOptions}
            height={90}
            width={90}
            isClickToPauseDisabled={true} // Disable click to pause
          />
        </div>
      </div>
      <div
        className="min-h-screen max-h-full bg-pink-200 text-white flex flex-col items-center pt-5 px-2"
        id="navscreen"
      >
        <span
          className="text-[75px] text-center font-bold sm:text-[50px] xs:text-[40px]"
          data-aos="zoom-in"
        >
          Navigation
        </span>
        <div className="mt-20 mb-10 flex flex-row flex-wrap justify-center gap-20">
          <Link href='/gallery' className="cloud" data-aos="zoom-in-down">
            <p className="cloud-text">Pookie's Gallery</p>
          </Link>
          <div className="cloud" data-aos="zoom-in-down" data-aos-delay="500">
            <p className="cloud-text">Pookie's Notes</p>
          </div>
          <Link href='/map' className="cloud" data-aos="zoom-in-down" data-aos-delay="1000">
            <p className="cloud-text">Pookie Maps</p>
          </Link>
          <div className="cloud" data-aos="zoom-in-down" data-aos-delay="1500">
            <p className="cloud-text">Epic Future Plan</p>
          </div>
          <div className="cloud" data-aos="zoom-in-down" data-aos-delay="2000">
            <p className="cloud-text">Pookie's Coupons</p>
          </div>
          <div className="cloud" data-aos="zoom-in-down" data-aos-delay="2000">
            <p className="cloud-text">Pookie's Anniversary Message</p>
          </div>
        </div>
        <span className="text-[30px] mt-10 text-center sm:text-[25px] xs:text-[20px]">
          Pick a cloud, any cloud meow.
        </span>
      </div>
    </>
  );
}

export default page;
