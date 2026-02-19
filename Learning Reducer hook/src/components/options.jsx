import React from "react";

export const Options = ({ questions, answers, dispatch }) => {
  return (
    // answers is expected to be the selected option index or undefined
    <>
      <div className="w-full max-w-lg flex flex-col space-y-3">
        {questions?.options.map((option, index) => {
          let optionClass =
            "w-full text-start text-white px-8 py-3 font-bold rounded-4xl border border-gray-500 bg-gray-700 cursor-pointer transform transition-all duration-300 hover:bg-transparent hover:translate-x-4 hover:border-blue-500";
          if (typeof answers === "number") {
            if (index === questions.correctOption) {
              optionClass +=
                " bg-teal-500 hover:bg-teal-500/70 cursor-not-allowed";
            } else {
              optionClass +=
                " bg-yellow-500 hover:bg-yellow-500/70 cursor-not-allowed";
            }
          }
          return (
            <button
              key={index}
              className={optionClass}
              onClick={() => dispatch({ type: "newAnswer", payload: index })}
              disabled={answers !== null}
            >
              {option} 
            </button>
          );
        })}
      </div>
    </>
  );
};
