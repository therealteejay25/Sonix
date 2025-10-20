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
        </div>
    </div>
  )
}

export default EditModal