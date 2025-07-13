"use client";

import { useEffect } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import animationData from "./animations/error.json";

export default function AppError({ error, reset }) {
  useEffect(() => {
    console.error("AppError caught:", error);
  }, [error]);

  return (
    <div className="rounded-xl flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-200 p-4">
      {/* Animated graphic */}
      <div className="w-100 h-100">
        <Lottie animationData={animationData} loop={true} />
      </div>

      {/* Heading */}
      <motion.h1
        className="mt-6 text-4xl font-bold text-white drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Oops… Something went wrong!
      </motion.h1>

      {/* Error message */}
      <motion.p
        className="mt-2 text-lg text-gray-500 max-w-md text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {error?.message || "An unexpected error occurred."}
      </motion.p>

      {/* Retry button */}
      <motion.button
        className="mt-8 px-8 py-3 bg-white text-indigo-900 font-semibold rounded-full shadow-lg hover:shadow-2xl transition"
        onClick={() => reset()}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Try Again
      </motion.button>
    </div>
  );
}
