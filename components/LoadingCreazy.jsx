"use client";

export default function LoadingCreazy() {
  return (
    <div className="relative flex items-center justify-center h-[50vh] bg-black overflow-hidden rounded-xl">
      {/* Neon rings */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 border-8 border-pink-500 rounded-full animate-spin-slow mix-blend-screen"></div>
      <div className="absolute top-1/3 right-1/3 w-32 h-32 border-8 border-yellow-400 rounded-full animate-spin mix-blend-screen"></div>
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border-8 border-cyan-400 rounded-full animate-spin-slow mix-blend-screen"></div>

      {/* Glitchy gradient text */}
      <h1
        className="relative z-10 text-6xl font-extrabold bg-clip-text text-transparent 
                   bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
                   animate-glitch"
      >
        LOADING…
      </h1>

      {/* Staggered bouncing dots */}
      <div className="absolute bottom-16 flex space-x-3 z-10">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className="block w-4 h-4 bg-white rounded-full animate-bounce"
            style={{
              animationDelay: `${i * 0.15}s`,
              animationDuration: "0.8s",
            }}
          />
        ))}
      </div>
    </div>
  );
}
