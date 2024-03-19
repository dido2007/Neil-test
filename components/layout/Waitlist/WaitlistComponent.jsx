"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { WaitlistData } from "./WaitlistData";

export default function WaitlistComponent() {
  return (
    <>
      <div className="h-[65rem] w-full rounded-md dark:bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-5xl sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
            Join the waitlist
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Tired of sifting through endless messages? ChatFleet streamlines your customer interactions, ensuring no message goes unnoticed. Prioritize. Engage. Excel.

          </p>
         <WaitlistData />
        </div>
        <BackgroundBeams />
      </div>
    </>
  )
}
