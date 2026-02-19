import React from "react";

export const Progress = ({ index, numQuestions, points, maxPoints, answers }) => {
  // Show progress as index (not index+1) if no answer is selected, else index+1
  const progressValue = answers === null ? index : index + 1;
  return (
    <>
      <style>
        {`
          .teal-progress {
            appearance: none;
          }
          .teal-progress::-webkit-progress-bar {
            background-color: #efefef;
            border-radius: 9999px;
          }
          .teal-progress::-webkit-progress-value {
            background-color: #00bfb5;
            border-radius: 9999px;
          }
          .teal-progress::-moz-progress-bar {
            background-color: #00bfb5;
            border-radius: 9999px;
          }
        `}
      </style>
      <header className="w-full mx-auto flex flex-col items-center mb-4">
        <progress
          value={progressValue}
          max={numQuestions}
          className="teal-progress h-3 mb-2 w-full max-w-lg w-full"
        />
        <div className="w-full max-w-lg flex justify-between text-sm">
          <p>
            Questions
            <strong>
              {index + 1} of {numQuestions}
            </strong>
          </p>
          <p>
            Points: {points} / {maxPoints}
          </p>
        </div>
      </header>
    </>
  );
};
