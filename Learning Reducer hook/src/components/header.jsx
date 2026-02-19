import React from "react";
import logo from "../assets/react.svg";

export const Header = () => {
  return (
    <header>
      <div className="w-full gap-5 max-w-6xl flex flex-row justify-center items-center py-4 mx-auto pt-10 pb-20">
        <img src={logo} alt="Logo" className="h-20 block" />
        <div className="text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          <h1 className="text-5xl font-extrabold tracking-tight ">
            The React Quiz
          </h1>
        </div>
      </div>
    </header>
  );
};
