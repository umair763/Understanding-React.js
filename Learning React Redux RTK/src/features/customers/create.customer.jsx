import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customer.slice";

export const CreateCustomer = () => {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    if(!fullName || !nationalId) return;
    dispatch(createCustomer(fullName, nationalId));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
      <h2 className="font-semibold mb-6 text-gray-800">
        Create New Customer 
      </h2>

      <div className="space-y-4">
        {/* Full Name Field */}
        <div className="flex items-center space-x-4">
          <label className="w-36 font-medium text-gray-700">Customer Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="flex-1 px-2 py-1 border rounded-md bg-gray-100 focus:bg-white focus:border-blue-500 outline-none"
            placeholder="Enter full name"
          />
        </div>

        {/* National ID Field */}
        <div className="flex items-center space-x-4">
          <label className="w-36 font-medium text-gray-700">National ID:</label>
          <input
            type="text"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
            className="flex-1 px-2 py-1 border rounded-md bg-gray-100 focus:bg-white focus:border-blue-500 outline-none"
            placeholder="Enter national ID"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleClick}
          className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Create New Customer
        </button>
      </div>
    </div>
  );
};