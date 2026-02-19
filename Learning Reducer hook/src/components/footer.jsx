import React from "react";

export const Footer = ({ children }) => {
  return (
    <>
      <div className="w-full max-w-xl mx-auto mt-8 flex justify-center items-start">
        {children}
      </div>
    </>
  );
};
