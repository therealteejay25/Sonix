"use client";

import { TrashIcon } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";

type EditModalProps = {
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditModal: React.FC<EditModalProps> = ({ setEdit }) => {
  const songs = [
    { id: 1, title: "Stream of Life", artist: "Burna Boy", image: "/img.jpg" },
    { id: 2, title: "On Top of the World", artist: "Lojay", image: "/img.jpg" },
    { id: 3, title: "Peace of Mind", artist: "Omah Lay", image: "/img.jpg" },
    { id: 4, title: "Different Size", artist: "Burna Boy", image: "/img.jpg" },
    { id: 5, title: "Kante", artist: "Davido", image: "/img.jpg" },
  ];

  return (
    <div className="fixed px-5 inset-0 z-40 flex items-center justify-center bg-black/30 backdrop-blur-lg">
      <div className="bg-[#0A0A0A] max-w-md w-full rounded-2xl border border-white/5 p-4">
        <div className="flex w-full flex-col gap-3">
          <h1 className="text-2xl font-semibold text-white">Playlist Name</h1>
          <div className="flex w-full items-center justify-between">
            <p className="text-white/50">Songs: {songs.length}</p>
            <p className="text-white/50">Mood: Quiet</p>
          </div>
        </div>

        <div className="flex scroll h-96 flex-col gap-5 mt-7 overflow-y-auto">
          {songs.map((song) => (
            <div
              key={song.id}
              className="flex justify-between items-center hover:bg-white/5 p-2 rounded-xl transition-all"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={song.image}
                  alt={song.title}
                  width={72}
                  height={72}
                  className="rounded-2xl h-16 w-16 object-cover"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-xl text-white font-medium">{song.title}</p>
                  <p className="text-white/50 text-sm">{song.artist}</p>
                </div>
              </div>

              <TrashIcon
                size={24}
                className="text-red-700 hover:text-red-500 transition-all duration-300 cursor-pointer"
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => setEdit(false)}
          className="text-black bg-white w-full p-3 rounded-full border border-white/10 font-semibold mt-7 mb-3 hover:bg-white/90 transition-all"
        >
          Finish Editing
        </button>
      </div>
    </div>
  );
};

export default EditModal;
