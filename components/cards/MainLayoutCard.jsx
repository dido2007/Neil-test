"use client";

import React from "react";
import MainButton from "../common/MainButton";
import { HeroSectionButton } from "../common/HeroSectionButton";
import LottieIcon from "../layout/HeroSection/HeroIcon.json";
import Lottie from "lottie-react";

function MainLayoutCard() {
  return (
    <section className="flex justify-between gap-large md:gap-4 items-center mt-[5rem] flex-col md:flex-row">
      <div>
        <div className="leading-[4rem] md:leading-large text-medium md:text-large font-[600] text-center md:text-left">
          <div className="text-5xl md:text-4xl">
            ChatFleet <br />
            No Time for Overflow
          </div>
        </div>
        <p className="text-normal text-slate-400 mt-4 mb-[4.5rem] text-center md:text-left">
         Dont have the time to respond to all your client ? Let ChatFleet do the heavy lifting with smart <span className=" text-blue-600 font-semibold dark:text-yellow-200 font-semibold">sorting </span> 
        </p>
        <div className="flex justify-center md:justify-start">
          <HeroSectionButton />
        </div>
      </div>
      <div>
        {/* <img
          src={rightSideImageUrl}
          alt="wallet"
          className="w-full md:w-[500px] h-auto"
        /> */}
        <Lottie animationData={LottieIcon} loop={true} />
      </div>
    </section>
  );
}

export default MainLayoutCard;
