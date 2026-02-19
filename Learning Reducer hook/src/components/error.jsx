import React from "react";

export const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 px-6">
      <div className="text-center space-y-6 max-w-md">
        <div className="text-4xl">⚠️</div>

        <div>
          <h2 className="text-xl font-semibold text-white tracking-tight">
            Something went wrong
          </h2>
          <p className="mt-2 text-sm text-white/60">
            We couldn’t fetch the questions. Please try again.
          </p>
        </div>

        <div className="w-12 h-[2px] bg-white/20 mx-auto"></div>
      </div>
    </div>
  );
};
