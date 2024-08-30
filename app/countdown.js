"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    // Calculate the remaining time until 09/06/2024
    const targetDate = new Date("09/13/2024");
    const now = new Date();
    const timeRemaining = targetDate.getTime() - now.getTime();

    // Update the countdown every second
    const interval = setInterval(() => {
      const updatedTimeRemaining = targetDate.getTime() - new Date().getTime();
      setCountdown(updatedTimeRemaining);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Format the countdown time
  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

  return (
    <main className="flex min-h-screen h-full flex-col items-center justify-center gap-10 bg-black text-white">
      <h1 className="text-4xl font-bold">heyy pookie...</h1>
      <h2 className="text-2xl">I love you</h2>
      <h2 className="text-2xl">btw... 09/13/2024</h2>
      <div className="text-2xl text-center">
        Countdown: {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
      </div>
      <img src="/imager.png" alt="Background Image" className="absolute h-full w-auto rounded-lg opacity-40 top-50" />
    </main>
  );
}
