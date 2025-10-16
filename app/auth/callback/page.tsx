import React from "react";
import StarParticles from "@/components/StarParticles";
import Image from "next/image";

const page = () => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center h-screen overflow-hidden bg-black">
      {/* <div className="absolute inset-0">
        <StarParticles />
      </div> */}
      <div className="absolute w-[45rem] h-96 bg-white blur-[400px] -bottom-96"></div>
      <div className="flex gap-16 flex-col items-center absolute h-screen w-screen justify-center z-10 text-white">
      <div className="flex justify-center items-center flex-col gap-3">
          <Image
          className="h-auto w-24"
          src="/logo.svg"
          alt="Logo"
          height={100}
          width={100}
        />
        <p className="text-white/60 text-center">
        Syncing your vibe with Sonix…
        </p>
      </div>
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default page;
