import { TrashIcon } from '@phosphor-icons/react'
import Image from 'next/image'
import React from 'react'

const EditModal = () => {
  return (
    <div className="h-screen z-40 w-screen bg-black/3 backdrop-blur-sm fixed top-0 left-0 flex items-center justify-center">
        <div className="bg-[#0A0A0A] max-w-md w-full rounded-2xl border p-4 border-white/5">
        <div className="flex w-full gap-3 flex-col">
            <h1 className='text-2xl font-semibold text-white'>
                Playlist Name
            </h1>
            <div className="flex w-full items-center justify-between">
                <p className="text-white/50">Songs: 12</p>
                <p className="text-white/50">Mood: Quiet</p>
            </div>
        </div>
        <div className='flex h-96 overflow-y-scroll scroll flex-col gap-5 mt-7'>
          <div className='flex justify-between items-center'>
            <div className="flex items-center gap-3">
               <Image src="/img.jpg" alt='' width={72} height={72} className='rounded-2xl h-16 w-16' />
             <div className='flex flex-col gap-2'>
              <p className="text-xl text-white font-medium">Stream of life</p>
              <p className='text-white/50'>Burna Boy</p>
             </div>
            </div>
             <TrashIcon className='h-6 w-6 text-red-900 transition-all duration-300 hover:opacity-80 cursor-pointer' />
          </div>
          <div className='flex justify-between items-center'>
            <div className="flex items-center gap-3">
               <Image src="/img.jpg" alt='' width={72} height={72} className='rounded-2xl h-16 w-16' />
             <div className='flex flex-col gap-2'>
              <p className="text-xl text-white font-medium">Stream of life</p>
              <p className='text-white/50'>Burna Boy</p>
             </div>
            </div>
             <TrashIcon className='h-6 w-6 text-red-900 transition-all duration-300 hover:opacity-80 cursor-pointer' />
          </div>
          <div className='flex justify-between items-center'>
            <div className="flex items-center gap-3">
               <Image src="/img.jpg" alt='' width={72} height={72} className='rounded-2xl h-16 w-16' />
             <div className='flex flex-col gap-2'>
              <p className="text-xl text-white font-medium">Stream of life</p>
              <p className='text-white/50'>Burna Boy</p>
             </div>
            </div>
             <TrashIcon className='h-6 w-6 text-red-900 transition-all duration-300 hover:opacity-80 cursor-pointer' />
          </div>
          <div className='flex justify-between items-center'>
            <div className="flex items-center gap-3">
               <Image src="/img.jpg" alt='' width={72} height={72} className='rounded-2xl h-16 w-16' />
             <div className='flex flex-col gap-2'>
              <p className="text-xl text-white font-medium">Stream of life</p>
              <p className='text-white/50'>Burna Boy</p>
             </div>
            </div>
             <TrashIcon className='h-6 w-6 text-red-900 transition-all duration-300 hover:opacity-80 cursor-pointer' />
          </div>
          <div className='flex justify-between items-center'>
            <div className="flex items-center gap-3">
               <Image src="/img.jpg" alt='' width={72} height={72} className='rounded-2xl h-16 w-16' />
             <div className='flex flex-col gap-2'>
              <p className="text-xl text-white font-medium">Stream of life</p>
              <p className='text-white/50'>Burna Boy</p>
             </div>
            </div>
             <TrashIcon className='h-6 w-6 text-red-900 transition-all duration-300 hover:opacity-80 cursor-pointer' />
          </div>
          <div className='flex justify-between items-center'>
            <div className="flex items-center gap-3">
               <Image src="/img.jpg" alt='' width={72} height={72} className='rounded-2xl h-16 w-16' />
             <div className='flex flex-col gap-2'>
              <p className="text-xl text-white font-medium">Stream of life</p>
              <p className='text-white/50'>Burna Boy</p>
             </div>
            </div>
             <TrashIcon className='h-6 w-6 text-red-900 transition-all duration-300 hover:opacity-80 cursor-pointer' />
          </div>
        </div>
        </div>
    </div>
  )
}

export default EditModal