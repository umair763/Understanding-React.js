import React from "react";

export const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 text-center space-y-6">
      <h1 className="text-3xl md:text-5xl font-extrabold ">
        Welcome to React Mastery
      </h1>
      <p className="text-xl md:text-2xl font-medium ">
        {numQuestions} questions to test your React mastery
      </p>
      <button
        className="bg-gray-600/70 cursor-pointer text-white px-6 py-2.5 rounded-4xl transition hover:bg-gray-600"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
};
