import React from "react";
import { Button } from "./button";

export const Finished = ({ points, maxPoints, highscore, dispatch }) => {
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage === 100) {
    emoji = "🏆";
  } else if (percentage >= 80 && percentage < 100) {
    emoji = "👏";
  } else if (percentage >= 60 && percentage < 80) {
    emoji = "👍";
  } else if (percentage >= 40 && percentage < 60) {
    emoji = "😊";
  } else {
    emoji = "🤦‍♂️";
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <h1 className="text-2xl font-bold bg-[#04809F] p-3 text-center text-white rounded-full">
        you scored <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(percentage)}%) {emoji}
      </h1>
      <p className="mt-2 text-center text-white mt-4">
        Your highscore is {highscore}
      </p>
      <div className="flex w-full justify-end">
        <Button
          className="mt-5 text-white px-8 py-3 font-bold rounded-4xl border border-gray-500 bg-gray-700 cursor-pointer transform transition-all hover:bg-transparent hover:border-blue-500 hover:scale-105"
          text="Restart Quiz"
          onClick={() => dispatch({ type: "restart" })}
        />
      </div>
    </div>
  );
};
