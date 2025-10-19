"use client"
import { DotsThreeVerticalIcon, SpotifyLogoIcon } from '@phosphor-icons/react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='bg-black relative flex flex-col items-center h-screen w-screen'>
        <div className="w-full flex justify-between items-center p-5 bg-white/5 border-b border-white/10">
        <Image src="/logo.svg" alt='' width={100} height={100} className='' />
        <div className="h-12 w-12 bg-gradient-to-bl from-neutral-800 to-neutral-950 rounded-full border-2 border-white/10 text-white/40 font-black text-center flex items-center justify-center text-xl">
          D
        </div>
      </div>
      <div className='flex z-10 flex-col mt-28 text-center'>
        <h1 className='text-3xl text-white font-semibold'>Your music is ready!</h1>
        <p className='text-white/50'>Your emotions, turned into sound.</p>
        <div className='bg-[#0A0A0A] rounded-3xl border border-white/5 p-6'>
           <div className='flex -space-x-6'>
             <Image src="/img.jpg" alt='' width={200} height={200} className='rounded-2xl h-20 w-20' />
            <Image src="/img.jpg" alt='' width={200} height={200} className='rounded-2xl h-20 w-20' />
            <Image src="/img.jpg" alt='' width={200} height={200} className='rounded-2xl h-20 w-20' />
            <Image src="/img.jpg" alt='' width={200} height={200} className='rounded-2xl h-20 w-20' />
           </div>
           <div className='flex flex-col text-left mt-5 gap-2'>
            <h1 className='text-2xl font-semibold text-white'>Playlist Name</h1>
            <div>
                <p className='text-white/50'>Songs: 12</p>
                <p className='text-white/50'>Mood: Sad</p>
            </div>
           </div>
           <div className='flex gap-3 w-full items-center'>
            <button className='text-white justify-center rounded-full bg-[#1DB954] font-semibold items-center flex gap-1 p-3 w-full'><SpotifyLogoIcon className='h-6 w-6' />Add to spotify</button>
            <button className='text-black justify-center rounded-full bg-white font-semibold items-center flex gap-1 p-3'><DotsThreeVerticalIcon className='h-6 font-semibold w-6' /></button>
           </div>
        </div>
      </div>
      <div className='bg-[#1DB954] w-full absolute blur-[200px] h-48 bottom-0'></div>
    </div>
  )
}

export default page