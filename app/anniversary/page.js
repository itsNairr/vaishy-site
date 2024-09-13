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
          Vaishy's Message
        </span>
        <div className="text-[30px] mt-8 mb-8 sm:text-[25px] xs:text-[20px] flex flex-col items-center text-;eft">
          <span data-aos="fade-right">
          Dear Vaishy, <br/>
          If you are reading this, that means that a) you managed to navigate this site (you're very technologically challenged) and
          b) we have officially been together for 2 whole years... YAYYYYYYYYYY!! I so happy. I really hope you like this website I made you, I know its a litte
          different but I really hope you like it meow.
          </span>
          <br/> <br/>
          <img src='./18.jpg' alt="Pookie" className="h-[400px] xs:h-[250px] w-auto rounded-md" />
          <br/> <br/>
          <span data-aos="fade-right">
          It feels like just yesterday when we started dating. Ever so often I look at this photo and remember the early days
          when I was with you. 
          </span>
          <br/> <br/>
          <img src='./10.jpg' alt="Pookie" className="h-[400px] xs:h-[250px] w-auto rounded-md" />
          <br/> <br/>
          <span data-aos="fade-right">
          As time went on I loved you more and more to the point there will never be a day where I don't stop loving you hehe. I hope you have the
          best days ahead of you and I hope to see your beautiful smile every single day for the rest of my life. It may be only two years now, but 
          soon enough, we will be meowried for eternity (best day ever)
          </span>
          <br/> <br/>
          <img src='./16.jpg' alt="Pookie" className="h-[400px] xs:h-[250px] w-auto rounded-md" />
          <br/> <br/>
          <span data-aos="fade-right">
          Happy Anniversary my love, thank you for everything you have done for me. I really don't know where I would be without you at this point (maybe dead somewhere who knows).
          I love you more than the definition of love. You are my everything, my world, my stinky pookie. heheh. I can't wait to marry you.
          </span>
          <br/> <br/>
          <span data-aos="fade-right">
          Love,
        
          Hari (Pookie) Nairy
        
          PS. I hope you feel better everytime you read this meow.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Page;
