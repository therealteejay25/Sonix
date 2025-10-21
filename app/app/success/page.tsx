"use client";
import { SpotifyLogoIcon } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="bg-black relative flex flex-col items-center h-screen w-screen">
      <div className="w-full flex justify-between items-center p-5 bg-white/5 border-b border-white/10">
        <Image src="/logo.svg" alt="" width={100} height={100} className="" />
        <div className="h-12 w-12 bg-gradient-to-bl from-neutral-800 to-neutral-950 rounded-full border-2 border-white/10 text-white/40 font-black text-center flex items-center justify-center text-xl">
          D
        </div>
      </div>
      <div className='flex px-10 md:px-0 z-10 items-center justify-center w-full h-full flex-col text-center'>
        <h1 className='text-4xl text-white font-semibold'>All Done!</h1>
        <p className="text-white/50 max-w-md text-center mx-auto">You’ve chosen your sound, now let the beats flow...</p>
        <div className="flex flex-col md:flex-row mx-4 gap-4 mt-6 max-w-lg w-full">
          <button className='text-white justify-center rounded-full border-4 border-[#1DB954]/10 bg-[#1DB954] font-semibold items-center flex gap-1 p-3 w-full'><SpotifyLogoIcon className='h-6 w-6' />Go to spotify</button>
          <button className='text-black justify-center rounded-full border-4 border-white/10 bg-white font-semibold items-center flex gap-1 p-3 w-full'>Generate another playlist</button>
        </div>
      </div>
      <div className="bg-[#1DB954] w-full absolute blur-[200px] h-48 bottom-0"></div>
    </div>
  );
};

export default page;
