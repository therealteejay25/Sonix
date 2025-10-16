import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="relative w-full flex flex-col items-center h-screen overflow-hidden bg-black text-white">
      <div className="w-full flex justify-between items-center p-5 bg-white/3 border-b border-white/3">
        <Image
          className="h-auto w-20"
          src="/logo.svg"
          alt="Logo"
          height={100}
          width={100}
        />
        <div className="h-12 w-12 bg-gradient-to-bl from-neutral-900 to-neutral-950 rounded-full border-4 border-white/10 text-white/25 font-black text-center flex items-center justify-center text-xl">D</div>
      </div>
    </div>
  );
};

export default page;
