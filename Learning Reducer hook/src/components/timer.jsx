import React, { useEffect } from "react";

export const Timer = ({ dispatch, secondsRemaining }) => {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
      return () => {
        clearInterval(id);
      };
    },
    [dispatch],
  );

  return (
    <div className="w-16 h-12  p-3 flex items-center justify-center text-white font-bold rounded-3xl border border-gray-500 bg-gray-700 transition-all hover:bg-transparent hover:border-blue-500 hover:scale-105">
      <h1>
        {mins}:{secs < 10 ? `0${secs}` : secs}
      </h1>
    </div>
  );
};
