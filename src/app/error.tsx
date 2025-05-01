// app/error.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const [isServerDown, setIsServerDown] = useState(false);
  
  useEffect(() => {
    console.error(error);
    // Simulate checking if server is down (50% chance for demo)
    setIsServerDown(Math.random() > 0.5);
  }, [error]);

  const handleReset = () => {
    reset();
    window.location.reload();
  };

  const errorMessages = {
    serverDown: {
      title: "Service Temporarily Unavailable",
      description: "We're currently performing maintenance or experiencing high traffic. Please check back soon.",
      icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-13a1 1 0 112 0v6a1 1 0 11-2 0V7zm1 10a1 1 0 100-2 1 1 0 000 2z"
    },
    generic: {
      title: "Oops! Something Went Wrong",
      description: "We encountered an issue while loading the page. Please try again.",
      icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    }
  };

  const currentError = isServerDown ? errorMessages.serverDown : errorMessages.generic;

  return (
    <div className="min-h-screen bg-[#18191A] flex flex-col items-center justify-center p-6 text-white">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700 p-8 shadow-2xl"
      >
        <div className="flex flex-col items-center text-center">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d={currentError.icon}
              />
            </svg>
          </motion.div>

          <h1 className="mt-6 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-500">
            {currentError.title}
          </h1>

          <p className="mt-4 text-gray-300 text-lg max-w-md">
            {currentError.description}
          </p>

          {isServerDown && (
            <div className="mt-6 flex items-center bg-amber-900/30 border border-amber-800 rounded-full px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-amber-400 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-amber-300 text-sm">
                Our team is working to resolve this
              </span>
            </div>
          )}

          <div className="mt-10 w-full max-w-xs">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleReset}
              className="w-full px-6 py-3 bg-[#EE6403] rounded-lg font-medium shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Try Again
            </motion.button>
          </div>

          <div className="mt-8 text-sm text-gray-400 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Need immediate help? Contact our support team
          </div>
        </div>
      </motion.div>
    </div>
  );
}