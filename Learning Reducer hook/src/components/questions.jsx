import React from "react";
import { Options } from "./options";
import { Button } from "./button";

export const Questions = ({
  questions,
  answers,
  dispatch,
  index,
  numQuestions,
}) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 text-center space-y-6">
      
      {/* Question */}
      <p className="text-xl md:text-2xl font-semibold">
        {questions?.question}
      </p>

      {/* Options + Button Wrapper */}
      <div className="relative w-full max-w-lg">
        <Options
          questions={questions}
          answers={answers}
          dispatch={dispatch}
        />

        {/* Next or Finish Button */}
        {answers !== null && (
          index < numQuestions - 1 ? (
            <Button
              text="Next"
              onClick={() => dispatch({ type: "nextQuestion" })}
              className="absolute right-0 -bottom-20 text-white px-8 py-3 font-bold rounded-4xl border border-gray-500 bg-gray-700 cursor-pointer transform transition-all hover:bg-transparent hover:border-blue-500 hover:scale-105"
            />
          ) : (
            <button
              className="absolute right-0 -bottom-20 text-white px-8 py-3 font-bold rounded-4xl border border-gray-500 bg-gray-700 cursor-pointer transform transition-all hover:bg-transparent hover:border-blue-500 hover:scale-105"
              onClick={() => dispatch({ type: "finish" })}
            >
              Finish
            </button>
          )
        )}
      </div>
    </div>
  );
};
