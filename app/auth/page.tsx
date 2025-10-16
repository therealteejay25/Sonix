"use client";

import StarParticles from "@/components/StarParticles";
import Image from "next/image";
import React from "react";
import { SpotifyLogoIcon } from "@phosphor-icons/react"

const StarPage = () => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center h-screen overflow-hidden bg-black">
      {/* Star background */}
      <div className="absolute inset-0">
        <StarParticles />
      </div>

      <div className="absolute w-[45rem] h-96 bg-white blur-[400px] -bottom-96"></div>

      {/* Overlay content */}
      <div className="flex gap-10 flex-col items-center absolute h-screen w-screen justify-center z-10 text-white">
        <div className="flex flex-col gap-4 items-center justify-center">
          <Image
            className="h-auto w-24"
            src="/logo.svg"
            alt="Logo"
            height={100}
            width={100}
          />
         <div className="flex flex-col justify-center items-center">
             <h1 className="md:text-4xl text-3xl font-semibold text-center">
            Welcome to Sonix
          </h1>
          <p className="text-white/50 mx-14 mt-2 md:m-0 text-center">Your playlist starts where your mood begins.</p>
         </div>
        </div>
        <div className="max-w-sm bg-[#0A0A0A] hover:shadow-xl hover:border-white/7 hover:scale-105 transition-all duration-300 shadow-white/3 border border-white/5 rounded-3xl p-5 md:p-7 mx-6">
        <div className="flex flex-col gap-2">
            <h1 className="md:text-2xl text-[22px] font-semibold">
            Plug into your vibe.
        </h1>
        <p className="text-white/40 ">
            Connect your Spotify to let Sonix spin the perfect playlist random or AI-powered, straight from your library.
        </p>
        </div>
        <button className="md:mt-64 mt-40 rounded-full w-full p-3 text-white font-medium flex justify-center items-center gap-2 cursor-pointer bg-accent">
            <SpotifyLogoIcon className="h-6 w-6" />
            Continue with Spotify
        </button>
        </div>
      </div>
    </div>
  );
};

export default StarPage;
