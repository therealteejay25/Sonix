"use client";
import {Slider} from "@heroui/react";
import React, { useState, useRef } from "react";

const moods = [
  {
    title: "Gloomy",
    desc:
      "Sonix crafts playlists that move with your vibe, random for the curious.",
    color: "#0B4A6F", // deep blue-gray
  },
  {
    title: "Calm",
    desc: "Float through mellow tones that help you think, breathe, and flow.",
    color: "#14532D", // dark jade green
  },
  {
    title: "Energetic",
    desc: "Bounce through high-tempo beats that make you feel alive.",
    color: "#B91C1C", // vibrant crimson red
  },
  {
    title: "Focused",
    desc: "Sharp beats and ambient sounds to lock you into the zone.",
    color: "#4C1D95", // rich violet
  },
  {
    title: "Happy",
    desc: "Uplifting melodies that brighten your day and lift your spirits.",
    color: "#EAB308", // warm yellow
  },
  {
    title: "Nostalgic",
    desc:
      "Soft tunes that take you back to moments you didn’t know you missed.",
    color: "#92400E", // vintage brown-orange
  },
  {
    title: "Romantic",
    desc: "Smooth harmonies that set the perfect late-night mood.",
    color: "#BE123C", // deep rose
  },
  {
    title: "Adventurous",
    desc: "Tracks that fuel your curiosity and make you crave the unknown.",
    color: "#1E3A8A", // strong navy blue
  },
  {
    title: "Chill",
    desc: "Lo-fi beats and cozy tunes to melt into your comfort zone.",
    color: "#374151", // slate gray
  },
  {
    title: "Inspired",
    desc: "Sounds that light up your mind and make you dream louder.",
    color: "#2563EB", // clean creative blue
  },
];
const genres = [
  {
    title: "Pop",
    desc: "Catchy hooks and energetic beats that dominate the charts.",
    color: "#F97316", // bright orange
  },
  {
    title: "Rock",
    desc: "Gritty guitars and driving rhythms that fuel your rebel side.",
    color: "#DC2626", // bold red
  },
  {
    title: "Jazz",
    desc: "Smooth improvisation and rich tones for sophisticated vibes.",
    color: "#4B5563", // cool slate gray
  },
  {
    title: "Hip-Hop",
    desc: "Punchy beats and sharp lyrics that move your body and mind.",
    color: "#9333EA", // vibrant purple
  },
  {
    title: "Classical",
    desc: "Timeless compositions that calm the soul and inspire thought.",
    color: "#2563EB", // elegant blue
  },
  {
    title: "Electronic",
    desc: "Futuristic synths and pulsating rhythms for endless energy.",
    color: "#0EA5E9", // neon sky blue
  },
  {
    title: "R&B",
    desc: "Smooth vocals and grooves that make every moment feel intimate.",
    color: "#B91C1C", // deep crimson
  },
  {
    title: "Reggae",
    desc: "Laid-back rhythms and sunny vibes that transport you to the tropics.",
    color: "#16A34A", // lush green
  },
  {
    title: "Metal",
    desc: "Heavy riffs and thunderous drums for raw, intense energy.",
    color: "#1F2937", // dark charcoal
  },
  {
    title: "Indie",
    desc: "Quirky sounds and fresh ideas for the curious listener.",
    color: "#FACC15", // golden yellow
  },
];


export default function MoodSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isDragging2, setIsDragging2] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startX2, setStartX2] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [translateX2, setTranslateX2] = useState(0);
  const sliderRef = useRef(null);
  const [value, setValue] = useState(6);

  const goToSlide = (index: any) => {
    setCurrentIndex(index);
    setTranslateX(0);
  };
  const goToSlide2 = (index: any) => {
    setCurrentIndex2(index);
    setTranslateX2(0);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % moods.length);
  };
  const nextSlide2 = () => {
    setCurrentIndex2((prev) => (prev + 1) % moods.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + moods.length) % moods.length);
  };
  const prevSlide2 = () => {
    setCurrentIndex2((prev) => (prev - 1 + moods.length) % moods.length);
  };

  const handleMouseDown = (e: any) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches?.[0]?.pageX);
  };
  const handleMouseDown2 = (e: any) => {
    setIsDragging2(true);
    setStartX2(e.pageX || e.touches?.[0]?.pageX);
  };

  const handleMouseMove = (e: any) => {
    if (!isDragging) return;
    const currentX = e.pageX || e.touches?.[0]?.pageX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };
  const handleMouseMove2 = (e: any) => {
    if (!isDragging2) return;
    const currentX2 = e.pageX || e.touches?.[0]?.pageX;
    const diff2 = currentX2 - startX2;
    setTranslateX2(diff2);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (Math.abs(translateX) > 100) {
      if (translateX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    setTranslateX(0);
  };

  const handleMouseUp2 = () => {
    if (!isDragging2) return;
    setIsDragging2(false);

    if (Math.abs(translateX2) > 100) {
      if (translateX2 > 0) {
        prevSlide2();
      } else {
        nextSlide2();
      }
    }
    setTranslateX2(0);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-black text-white overflow-hidden">
      {/* Header */}
      <div className="w-full flex justify-between items-center p-5 bg-white/5 border-b border-white/10">
        <div className="text-2xl font-bold">Sonix</div>
        <div className="h-12 w-12 bg-gradient-to-bl from-neutral-800 to-neutral-950 rounded-full border-2 border-white/10 text-white/40 font-black text-center flex items-center justify-center text-xl">
          D
        </div>
      </div>

     <div className="flex-1 w-full flex flex-col justify-center items-center gap-12 py-12">
       {/* Body */}
     <div className="flex flex-col md:flex-row gap-7 justify-between items-center">
         <div className="flex-1 gap-7 w-full max-w-2xl flex flex-col justify-center items-center p-6">
        <h1 className="text-2xl font-semibold mb-12 text-center">
          How are you feeling today?
        </h1>

        <div className="w-md relative mx-auto overflow-hidden">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-[43%] -translate-y-1/2 z-20 cursor-pointer border border-white/10 rounded-full bg-black/40 backdrop-blur-md p-3 hover:bg-white/10 hover:scale-110 transition-all duration-300 active:scale-95"
            aria-label="Previous slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-[43%] -translate-y-1/2 z-20 cursor-pointer border border-white/10 rounded-full bg-black/40 backdrop-blur-md p-3 hover:bg-white/10 hover:scale-110 transition-all duration-300 active:scale-95"
            aria-label="Next slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          <div className="relative ml-4">
            {/* Slider Container */}
            <div
              ref={sliderRef}
              className="relative overflow-visible cursor-grab active:cursor-grabbing select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleMouseDown}
              onTouchMove={handleMouseMove}
              onTouchEnd={handleMouseUp}
            >
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(calc(-${
                    currentIndex * 100
                  }% + ${translateX}px))`,
                  transitionDuration: isDragging ? "0ms" : "700ms",
                }}
              >
                {moods.map((mood, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-2 md:px-4">
                    <div
                      className={`relative overflow-hidden max-w-sm rounded-3xl bg-[#0A0A0A] p-8 md:p-10 transition-all duration-700 ${
                        i === currentIndex
                          ? "scale-100 opacity-100"
                          : "scale-95 opacity-40"
                      }`}
                      style={{ minHeight: "200px" }}
                    >
                      <div className="relative flex flex-col gap-1 z-10">
                        <h2 className="text-xl font-semibold md:text-2xl mb-6">
                          {mood.title}
                        </h2>
                        <p className="text-white/80 font-light text-base max-w-md">
                          {mood.desc}
                        </p>
                      </div>

                      {/* Subtle gradient overlay */}
                      <div
                        style={{
                          backgroundColor: mood.color,
                        }}
                        className="absolute h-24 bg-[#054D79] w-[110%] -left-5 -bottom-8 blur-2xl"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {moods.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`transition-all duration-500 rounded-full ${
                    i === currentIndex
                      ? "w-8 h-2 bg-white"
                      : "w-2 h-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full max-w-2xl flex flex-col justify-center items-center p-6">
   <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto px-4 py-12">
 <div className="flex flex-col items-center gap-7 text-white">
      <h1 className="text-2xl font-semibold mb-5">
        How many songs do you want to vibe to?
      </h1>

      {/* Value above the slider */}
      <div className="relative mt-7 w-64">
        <p className="absolute left-1/2 -top-8 -translate-x-1/2 bg-white text-black font-semibold text-sm px-3 py-1 rounded shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
          {value}
        </p>

        <Slider
          value={value}
          onChange={setValue as any}
          minValue={2}
          maxValue={12}
          step={1}
          classNames={{
            track: "bg-white/20 h-2 rounded-full",
            filler: "bg-white h-2 rounded-full",
            thumb:
              "w-5 h-5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.4)] hover:scale-110 transition-transform duration-200",
          }}
        />
      </div>
    </div>

</div>

      </div>
      <div className="flex-1 gap-7 w-full max-w-2xl flex flex-col justify-center items-center p-6">
        <h1 className="text-2xl font-semibold mb-12 text-center">
          What’s your taste like?
        </h1>

        <div className="w-md relative mx-auto overflow-hidden">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide2}
            className="absolute left-0 top-[43%] -translate-y-1/2 z-20 cursor-pointer border border-white/10 rounded-full bg-black/40 backdrop-blur-md p-3 hover:bg-white/10 hover:scale-110 transition-all duration-300 active:scale-95"
            aria-label="Previous slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            onClick={nextSlide2}
            className="absolute right-0 top-[43%] -translate-y-1/2 z-20 cursor-pointer border border-white/10 rounded-full bg-black/40 backdrop-blur-md p-3 hover:bg-white/10 hover:scale-110 transition-all duration-300 active:scale-95"
            aria-label="Next slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
          <div className="relative ml-4">
            {/* Slider Container */}
            <div
              ref={sliderRef}
              className="relative overflow-visible cursor-grab active:cursor-grabbing select-none"
              onMouseDown={handleMouseDown2}
              onMouseMove={handleMouseMove2}
              onMouseUp={handleMouseUp2}
              onMouseLeave={handleMouseUp2}
              onTouchStart={handleMouseDown2}
              onTouchMove={handleMouseMove2}
              onTouchEnd={handleMouseUp2}
            >
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{
                  transform: `translateX(calc(-${
                    currentIndex2 * 100
                  }% + ${translateX2}px))`,
                  transitionDuration: isDragging2 ? "0ms" : "700ms",
                }}
              >
                {genres.map((genre, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-2 md:px-4">
                    <div
                      className={`relative overflow-hidden max-w-sm rounded-3xl bg-[#0A0A0A] p-8 md:p-10 transition-all duration-700 ${
                        i === currentIndex2
                          ? "scale-100 opacity-100"
                          : "scale-95 opacity-40"
                      }`}
                      style={{ minHeight: "200px" }}
                    >
                      <div className="relative flex flex-col gap-1 z-10">
                        <h2 className="text-xl font-semibold md:text-2xl mb-6">
                          {genre.title}
                        </h2>
                        <p className="text-white/80 font-light text-base max-w-md">
                          {genre.desc}
                        </p>
                      </div>

                      {/* Subtle gradient overlay */}
                      <div
                        style={{
                          backgroundColor: genre.color,
                        }}
                        className="absolute h-24 bg-[#054D79] w-[110%] -left-5 -bottom-8 blur-2xl"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {moods.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`transition-all duration-500 rounded-full ${
                    i === currentIndex2
                      ? "w-8 h-2 bg-white"
                      : "w-2 h-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
     </div>

     <button className="bg-white/10 border-4 hover:scale-105 transition-all duration-300 flex justify-center items-center border-white/5 rounded-full max-w-md p-3 w-full mx-6 text-white font-medium relative overflow-hidden">
      Generate my playlist
      <span className="absolute w-24 h-16 blur-3xl -bottom-16 bg-white rounded-full"></span>
     </button>
     </div>
    </div>
  );
}
