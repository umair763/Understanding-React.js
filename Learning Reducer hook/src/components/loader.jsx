import React from "react";

export const Loader = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <div className="w-10 h-10 rounded-full border-2 border-white/20 border-t-white animate-spin"></div>
      <p className="mt-6 text-sm tracking-wide text-white/70">
        Loading questions...
      </p>
    </div>
  );
};
